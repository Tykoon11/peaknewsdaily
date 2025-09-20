/**
 * Server-Sent Events (SSE) endpoint for live price streaming
 * Handles real-time price updates with adaptive throttling
 */

import { NextRequest } from 'next/server'

// Add runtime configuration to handle dynamic usage
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
import { getPriceSnapshots, getEquityMarketState, getVolatilityScores } from '@/lib/redis'
import { getEquityMarketState as getCurrentMarketState, MarketState } from '@/lib/marketState'
import { activeConnections, PriceEvent } from '@/lib/stream-broadcast'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/stream - SSE endpoint for live price streaming
 * Query params:
 * - syms: comma-separated list of symbols (e.g., ?syms=AAPL,MSFT,BTC-USD)
 * - includeVolScore: include volatility scores (default: true for crypto)
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const symsParam = searchParams.get('syms') || ''
  const requestedSymbols = symsParam.split(',').filter(s => s.trim())
  
  if (requestedSymbols.length === 0) {
    return new Response('Missing symbols parameter. Use ?syms=AAPL,MSFT,BTC-USD', { status: 400 })
  }

  // Create SSE response headers
  const headers = {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Cache-Control',
    'X-Accel-Buffering': 'no', // Disable nginx buffering
  }

  // Create readable stream for SSE
  let streamController: ReadableStreamDefaultController<any>
  const stream = new ReadableStream({
    async start(controller) {
      streamController = controller
      activeConnections.add(controller)
      
      try {
        // Send initial snapshot
        await sendInitialSnapshot(controller, requestedSymbols)
        
        // Send current market state if controller is still active
        if (activeConnections.has(controller)) {
          const currentState = await getEquityMarketState() || getCurrentMarketState()
          const stateEvent: PriceEvent = { t: 'state', equitiesState: currentState, at: Date.now() }
          const stateData = `event: state\ndata: ${JSON.stringify(stateEvent)}\n\n`
          try {
            controller.enqueue(new TextEncoder().encode(stateData))
          } catch (enqueueError) {
            console.log('Controller closed during state enqueue, removing from active connections')
            activeConnections.delete(controller)
          }
        }
        
      } catch (err) {
        console.error('Failed to send initial snapshot:', err)
      }
    },
    
    cancel(reason) {
      // Remove this controller from active connections when stream is cancelled
      if (streamController) {
        activeConnections.delete(streamController)
      }
    }
  })

  return new Response(stream, { headers })
}

/**
 * Send initial snapshot of requested symbols
 */
async function sendInitialSnapshot(
  controller: ReadableStreamDefaultController, 
  symbols: string[]
): Promise<void> {
  try {
    // Check if controller is still active
    if (!activeConnections.has(controller)) {
      console.log('Controller already closed, skipping snapshot')
      return
    }

    // Get price snapshots from Redis
    const snapshots = await getPriceSnapshots(symbols)
    
    // Get current market state
    const currentState = await getEquityMarketState() || getCurrentMarketState()
    
    // Get volatility scores for crypto symbols
    const cryptoSymbols = symbols.filter(sym => sym.includes('-USD') || sym.includes('USD'))
    const volScores = cryptoSymbols.length > 0 ? await getVolatilityScores(cryptoSymbols) : {}
    
    // Build snapshot data - only include symbols with valid data
    const symbolData = []
    for (const sym of symbols) {
      const snapshot = snapshots[sym]
      if (snapshot && snapshot.price > 0) {
        symbolData.push({
          sym: snapshot.sym,
          price: snapshot.price,
          changePct: snapshot.changePct,
          ts: snapshot.ts,
          volScore: volScores[sym] || 0.5
        })
      }
    }
    
    // If no valid snapshots from Redis, try fallback to database
    if (symbolData.length === 0) {
      const fallbackData = await getFallbackPriceData(symbols)
      symbolData.push(...fallbackData)
    }
    
    const snapshotEvent: PriceEvent = {
      t: 'snapshot',
      at: Date.now(),
      equitiesState: currentState,
      symbols: symbolData
    }
    
    const eventData = `event: snapshot\ndata: ${JSON.stringify(snapshotEvent)}\n\n`
    
    // Double-check controller is still active before enqueueing
    if (activeConnections.has(controller)) {
      try {
        controller.enqueue(new TextEncoder().encode(eventData))
      } catch (enqueueError) {
        console.log('Controller closed during enqueue, removing from active connections')
        activeConnections.delete(controller)
      }
    }
    
  } catch (err) {
    console.error('Failed to build initial snapshot:', err)
    
    // Check if controller is still active before sending error snapshot
    if (!activeConnections.has(controller)) {
      return
    }
    
    // Try fallback to database before sending empty snapshot
    const fallbackData = await getFallbackPriceData(symbols)
    
    const errorSnapshot: PriceEvent = {
      t: 'snapshot',
      at: Date.now(),
      equitiesState: 'CLOSED',
      symbols: fallbackData.length > 0 ? fallbackData : symbols.map(sym => ({
        sym,
        price: 0,
        changePct: 0,
        ts: Date.now()
      }))
    }
    
    const eventData = `event: snapshot\ndata: ${JSON.stringify(errorSnapshot)}\n\n`
    
    // Double-check controller is still active before enqueueing error
    if (activeConnections.has(controller)) {
      try {
        controller.enqueue(new TextEncoder().encode(eventData))
      } catch (enqueueError) {
        console.log('Controller closed during error enqueue, removing from active connections')
        activeConnections.delete(controller)
      }
    }
  }
}

/**
 * Fallback to database when Redis cache is empty
 */
async function getFallbackPriceData(symbols: string[]): Promise<any[]> {
  try {
    const dbQuotes = await prisma.quote.findMany({
      where: {
        asset: { 
          symbol: { 
            in: symbols.map(s => s.toUpperCase()) 
          }
        }
      },
      include: {
        asset: true
      },
      orderBy: { timestamp: 'desc' },
      distinct: ['assetId']
    })

    return dbQuotes
      .filter(quote => parseFloat(quote.price.toString()) > 0)
      .map(quote => ({
        sym: quote.asset.symbol,
        price: parseFloat(quote.price.toString()),
        changePct: quote.changePercent ? parseFloat(quote.changePercent.toString()) : 0,
        ts: quote.timestamp.getTime(),
        volScore: 0.5
      }))

  } catch (err) {
    console.error('Failed to fetch fallback price data:', err)
    return []
  }
}

