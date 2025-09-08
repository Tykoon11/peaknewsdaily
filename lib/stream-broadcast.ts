import { MarketState } from '@/lib/marketState'

// Track active connections for broadcasting
export const activeConnections = new Set<ReadableStreamDefaultController>()

// Price event types for real-time streaming
export type PriceEvent = 
  | { t: 'snapshot'; at: number; equitiesState: MarketState; symbols: Array<{sym: string; price: number; changePct: number; ts: number; volScore?: number}> }
  | { t: 'tick'; sym: string; price: number; ts: number; changePct: number }
  | { t: 'bar1m'; sym: string; o: number; h: number; l: number; c: number; ts: number }
  | { t: 'state'; equitiesState: MarketState; at: number }
  | { t: 'heartbeat'; at: number }

// Global broadcast function (called by workers/ingestors)
export function broadcastToClients(event: PriceEvent) {
  const eventData = `event: ${event.t}\ndata: ${JSON.stringify(event)}\n\n`
  
  activeConnections.forEach(controller => {
    try {
      const encoder = new TextEncoder()
      controller.enqueue(encoder.encode(eventData))
    } catch (err) {
      // Remove broken connections
      activeConnections.delete(controller)
    }
  })
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
export function getActiveConnectionCount() {
  return activeConnections.size
}

// Heartbeat to keep connections alive
setInterval(() => {
  broadcastToClients({ t: 'heartbeat', at: Date.now() })
}, 15000) // Every 15 seconds