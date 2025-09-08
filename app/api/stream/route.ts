/**
 * Server-Sent Events (SSE) endpoint for live price streaming
 * Handles real-time price updates with adaptive throttling
 */

import { NextRequest } from 'next/server'
import { getPriceSnapshots, getEquityMarketState, getVolatilityScores } from '@/lib/redis'
import { getEquityMarketState as getCurrentMarketState, MarketState } from '@/lib/marketState'

// Price event types for real-time streaming
export type PriceEvent = 
  | { t: 'snapshot'; at: number; equitiesState: MarketState; symbols: Array<{sym: string; price: number; changePct: number; ts: number; volScore?: number}> }
  | { t: 'tick'; sym: string; price: number; ts: number; changePct: number }
  | { t: 'bar1m'; sym: string; o: number; h: number; l: number; c: number; ts: number }
  | { t: 'state'; equitiesState: MarketState; at: number }
  | { t: 'heartbeat'; at: number }

// Track active connections for broadcasting
const activeConnections = new Set<ReadableStreamDefaultController>()

// Global broadcast function (called by workers/ingestors)
export function broadcastToClients(event: PriceEvent) {
  const eventData = `event: ${event.t}\ndata: ${JSON.stringify(event)}\n\n`
  
  activeConnections.forEach(controller => {
    try {
      const encoder = new TextEncoder()
      controller.enqueue(encoder.encode(eventData))
    } catch (err) {
      // Client disconnected, remove from active connections silently
      activeConnections.delete(controller)
    }
  })
}

// Heartbeat to keep connections alive
setInterval(() => {
  broadcastToClients({ t: 'heartbeat', at: Date.now() })
}, 15000) // Every 15 seconds

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
        
        // Send current market state
        const currentState = await getEquityMarketState() || getCurrentMarketState()
        const stateEvent: PriceEvent = { t: 'state', equitiesState: currentState, at: Date.now() }
        const stateData = `event: state\ndata: ${JSON.stringify(stateEvent)}\n\n`
        controller.enqueue(new TextEncoder().encode(stateData))
        
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
    // Get price snapshots from Redis
    const snapshots = await getPriceSnapshots(symbols)
    
    // Get current market state
    const currentState = await getEquityMarketState() || getCurrentMarketState()
    
    // Get volatility scores for crypto symbols
    const cryptoSymbols = symbols.filter(sym => sym.includes('-USD') || sym.includes('USD'))
    const volScores = cryptoSymbols.length > 0 ? await getVolatilityScores(cryptoSymbols) : {}
    
    // Build snapshot data
    const symbolData = symbols.map(sym => {
      const snapshot = snapshots[sym]
      if (!snapshot) {
        // Return placeholder data for missing symbols
        return {
          sym,
          price: 0,
          changePct: 0,
          ts: Date.now(),
          volScore: volScores[sym] || 0.5
        }
      }
      
      return {
        sym: snapshot.sym,
        price: snapshot.price,
        changePct: snapshot.changePct,
        ts: snapshot.ts,
        volScore: volScores[sym]
      }
    })
    
    const snapshotEvent: PriceEvent = {
      t: 'snapshot',
      at: Date.now(),
      equitiesState: currentState,
      symbols: symbolData
    }
    
    const eventData = `event: snapshot\ndata: ${JSON.stringify(snapshotEvent)}\n\n`
    controller.enqueue(new TextEncoder().encode(eventData))
    
  } catch (err) {
    console.error('Failed to build initial snapshot:', err)
    
    // Send empty snapshot on error
    const errorSnapshot: PriceEvent = {
      t: 'snapshot',
      at: Date.now(),
      equitiesState: 'CLOSED',
      symbols: symbols.map(sym => ({
        sym,
        price: 0,
        changePct: 0,
        ts: Date.now()
      }))
    }
    
    const eventData = `event: snapshot\ndata: ${JSON.stringify(errorSnapshot)}\n\n`
    controller.enqueue(new TextEncoder().encode(eventData))
  }
}

/**
 * Utility function for external price ingestion systems to broadcast updates
 * This will be called by workers/ingestors when new price data arrives
 */
export function broadcastPriceTick(sym: string, price: number, changePct: number, ts: number = Date.now()) {
  const tickEvent: PriceEvent = { t: 'tick', sym, price, ts, changePct }
  broadcastToClients(tickEvent)
}

/**
 * Broadcast OHLC 1-minute bar completion
 */
export function broadcastOHLCBar(sym: string, o: number, h: number, l: number, c: number, ts: number = Date.now()) {
  const barEvent: PriceEvent = { t: 'bar1m', sym, o, h, l, c, ts }
  broadcastToClients(barEvent)
}

/**
 * Broadcast market state change
 */
export function broadcastMarketStateChange(equitiesState: MarketState) {
  const stateEvent: PriceEvent = { t: 'state', equitiesState, at: Date.now() }
  broadcastToClients(stateEvent)
}

/**
 * Get connection count for monitoring
 */
export function getActiveConnectionCount(): number {
  return activeConnections.size
}