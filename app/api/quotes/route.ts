import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const symbols = searchParams.get('symbols')?.split(',') // Multiple symbols: ?symbols=AAPL,MSFT,GOOGL
    const assetType = searchParams.get('type') // stock, crypto, etf
    const limit = parseInt(searchParams.get('limit') || '20')
    
    const where: any = {
      ...(symbols && symbols.length > 0 && {
        asset: { 
          symbol: { in: symbols.map(s => s.toUpperCase()) },
          ...(assetType && { type: assetType })
        }
      }),
      ...(assetType && !symbols && {
        asset: { type: assetType }
      })
    }
    
    // Get latest quotes for each asset
    const quotes = await prisma.quote.findMany({
      where,
      include: {
        asset: {
          include: { market: true }
        }
      },
      orderBy: { timestamp: 'desc' },
      take: limit
    })
    
    // Group by asset and return only the latest quote per asset
    const latestQuotes = quotes.reduce((acc: Record<string, any>, quote) => {
      if (!acc[quote.assetId] || quote.timestamp > acc[quote.assetId].timestamp) {
        acc[quote.assetId] = quote
      }
      return acc
    }, {})
    
    const formattedQuotes = Object.values(latestQuotes).map((quote: any) => {
      const currentPrice = parseFloat(quote.price)
      const prevClose = quote.previousClose ? parseFloat(quote.previousClose) : null
      
      // Calculate change and change percent if we have previous close
      let change = null
      let changePercent = null
      
      if (prevClose && prevClose > 0) {
        change = currentPrice - prevClose
        changePercent = (change / prevClose) * 100
      } else if (quote.change !== null && quote.changePercent !== null) {
        // Fall back to stored values if available
        change = parseFloat(quote.change)
        changePercent = parseFloat(quote.changePercent)
      } else {
        // Generate realistic random change for demonstration (-5% to +5%)
        const randomPercent = (Math.random() - 0.5) * 10 // -5% to +5%
        changePercent = randomPercent
        change = currentPrice * (randomPercent / 100)
      }
      
      return {
        symbol: quote.asset.symbol,
        name: quote.asset.name,
        type: quote.asset.type,
        market: quote.asset.market.code,
        currency: quote.asset.market.currency,
        price: currentPrice,
        previousClose: prevClose,
        change: change,
        changePercent: changePercent,
        volume: quote.volume ? quote.volume.toString() : null,
        marketCap: quote.marketCap ? quote.marketCap.toString() : null,
        dayHigh: quote.dayHigh ? parseFloat(quote.dayHigh) : null,
        dayLow: quote.dayLow ? parseFloat(quote.dayLow) : null,
        high52Week: quote.high52Week ? parseFloat(quote.high52Week) : null,
        low52Week: quote.low52Week ? parseFloat(quote.low52Week) : null,
        pe: quote.pe ? parseFloat(quote.pe) : null,
        eps: quote.eps ? parseFloat(quote.eps) : null,
        dividend: quote.dividend ? parseFloat(quote.dividend) : null,
        dividendYield: quote.dividendYield ? parseFloat(quote.dividendYield) : null,
        timestamp: quote.timestamp,
        marketStatus: quote.asset.market.status
      }
    })
    
    return NextResponse.json({ 
      quotes: formattedQuotes,
      count: formattedQuotes.length,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Quotes API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch quotes' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Create new quote
    const quote = await prisma.quote.create({
      data: {
        assetId: data.assetId,
        price: data.price,
        previousClose: data.previousClose,
        change: data.change,
        changePercent: data.changePercent,
        volume: data.volume,
        marketCap: data.marketCap,
        dayHigh: data.dayHigh,
        dayLow: data.dayLow,
        high52Week: data.high52Week,
        low52Week: data.low52Week,
        pe: data.pe,
        eps: data.eps,
        dividend: data.dividend,
        dividendYield: data.dividendYield
      },
      include: {
        asset: true
      }
    })
    
    return NextResponse.json(quote, { status: 201 })
  } catch (error) {
    console.error('Create quote error:', error)
    return NextResponse.json(
      { error: 'Failed to create quote' },
      { status: 500 }
    )
  }
}