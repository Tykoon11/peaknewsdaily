import { NextRequest, NextResponse } from 'next/server'
import { getPriceSnapshots } from '@/lib/redis'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/prices - Get live price data with fallback to database
 * Query params:
 * - symbols: comma-separated list of symbols (e.g., ?symbols=AAPL,MSFT,BTC-USD)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const symbolsParam = searchParams.get('symbols') || ''
    const requestedSymbols = symbolsParam.split(',').filter(s => s.trim())
    
    if (requestedSymbols.length === 0) {
      return NextResponse.json(
        { error: 'Missing symbols parameter. Use ?symbols=AAPL,MSFT,BTC-USD' },
        { status: 400 }
      )
    }

    // Try Redis cache first
    const redisSnapshots = await getPriceSnapshots(requestedSymbols)
    const prices: Record<string, any> = {}
    const missingSymbols: string[] = []

    // Check which symbols we have from Redis
    for (const symbol of requestedSymbols) {
      if (redisSnapshots[symbol] && redisSnapshots[symbol].price > 0) {
        const snapshot = redisSnapshots[symbol]
        prices[symbol] = {
          sym: snapshot.sym,
          price: snapshot.price,
          changePct: snapshot.changePct,
          ts: snapshot.ts,
          lastUpdate: Date.now()
        }
      } else {
        missingSymbols.push(symbol)
      }
    }

    // For missing symbols, fallback to database
    if (missingSymbols.length > 0) {
      const dbQuotes = await prisma.quote.findMany({
        where: {
          asset: { 
            symbol: { 
              in: missingSymbols.map(s => s.toUpperCase()) 
            }
          }
        },
        include: {
          asset: true
        },
        orderBy: { timestamp: 'desc' },
        distinct: ['assetId']
      })

      // Add database results to prices
      for (const quote of dbQuotes) {
        const currentPrice = parseFloat(quote.price)
        const changePercent = quote.changePercent ? parseFloat(quote.changePercent) : 0
        
        prices[quote.asset.symbol] = {
          sym: quote.asset.symbol,
          price: currentPrice,
          changePct: changePercent,
          ts: quote.timestamp.getTime(),
          lastUpdate: Date.now()
        }
      }
    }

    return NextResponse.json({
      prices,
      symbols: Object.keys(prices),
      count: Object.keys(prices).length,
      timestamp: new Date().toISOString(),
      source: Object.keys(redisSnapshots).length > 0 ? 'redis+db' : 'database'
    })

  } catch (error) {
    console.error('Prices API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch prices', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}