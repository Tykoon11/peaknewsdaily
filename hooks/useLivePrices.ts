'use client'

/**
 * Live price updates hook with adaptive throttling
 * Connects to SSE stream and manages price data with optimized rendering
 */

import { useState, useEffect, useRef, useCallback } from 'react'
import { MarketState, getAdaptiveIntervals, getCryptoIntervals } from '@/lib/marketState'

// Price data interfaces
export interface LivePrice {
  sym: string
  price: number
  changePct: number
  ts: number
  volScore?: number
  lastUpdate?: number
}

export interface LivePricesState {
  prices: Record<string, LivePrice>
  marketState: MarketState
  lastUpdate: number
  connected: boolean
  error: string | null
}

export interface UseLivePricesOptions {
  symbols: string[]
  component?: 'marquee' | 'table' | 'tile' | 'embed' | 'spark'
  enabled?: boolean
  fallbackPolling?: boolean
}

/**
 * Custom hook for live price updates with adaptive throttling
 */
export function useLivePrices(options: UseLivePricesOptions) {
  const { symbols, component = 'tile', enabled = true, fallbackPolling = true } = options
  
  const [state, setState] = useState<LivePricesState>({
    prices: {},
    marketState: 'CLOSED',
    lastUpdate: Date.now(),
    connected: false,
    error: null
  })
  
  // Refs for managing connections and throttling
  const eventSourceRef = useRef<EventSource | null>(null)
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const throttleTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const reconnectAttemptsRef = useRef(0)
  const pendingUpdatesRef = useRef<Record<string, LivePrice>>({})
  const animationFrameRef = useRef<number | null>(null)
  
  // Connection management
  const connect = useCallback(() => {
    if (!enabled || symbols.length === 0) return
    
    // Clean up existing connection
    if (eventSourceRef.current) {
      eventSourceRef.current.close()
      eventSourceRef.current = null
    }
    
    // Build SSE URL with symbols
    const symbolsParam = symbols.join(',')
    const url = `/api/stream?syms=${encodeURIComponent(symbolsParam)}`
    
    console.log(`📡 Connecting to live prices: ${symbolsParam}`)
    
    const eventSource = new EventSource(url)
    eventSourceRef.current = eventSource
    
    // Connection opened
    eventSource.onopen = () => {
      console.log('✅ Live prices connected')
      setState(prev => ({ 
        ...prev, 
        connected: true, 
        error: null 
      }))
      reconnectAttemptsRef.current = 0
    }
    
    // Handle different event types
    eventSource.addEventListener('snapshot', handleSnapshot)
    eventSource.addEventListener('tick', handleTick)
    eventSource.addEventListener('bar1m', handleBar1m)
    eventSource.addEventListener('state', handleStateChange)
    eventSource.addEventListener('heartbeat', handleHeartbeat)
    
    // Connection error
    eventSource.onerror = (event) => {
      console.error('❌ Live prices connection error:', event)
      setState(prev => ({ 
        ...prev, 
        connected: false, 
        error: 'Connection lost' 
      }))
      
      eventSource.close()
      scheduleReconnect()
    }
    
  }, [symbols, enabled])
  
  // Handle snapshot (initial data)
  const handleSnapshot = useCallback((event: MessageEvent) => {
    try {
      const data = JSON.parse(event.data)
      const pricesMap: Record<string, LivePrice> = {}
      
      data.symbols.forEach((symbol: any) => {
        pricesMap[symbol.sym] = {
          sym: symbol.sym,
          price: symbol.price,
          changePct: symbol.changePct,
          ts: symbol.ts,
          volScore: symbol.volScore,
          lastUpdate: Date.now()
        }
      })
      
      setState(prev => ({
        ...prev,
        prices: pricesMap,
        marketState: data.equitiesState,
        lastUpdate: data.at,
        error: null
      }))
      
    } catch (err) {
      console.error('Failed to parse snapshot:', err)
    }
  }, [])
  
  // Handle individual price tick
  const handleTick = useCallback((event: MessageEvent) => {
    try {
      const data = JSON.parse(event.data)
      
      // Add to pending updates for throttled rendering
      pendingUpdatesRef.current[data.sym] = {
        sym: data.sym,
        price: data.price,
        changePct: data.changePct,
        ts: data.ts,
        lastUpdate: Date.now()
      }
      
      // Schedule throttled update
      scheduleThrottledUpdate()
      
    } catch (err) {
      console.error('Failed to parse tick:', err)
    }
  }, [])
  
  // Handle OHLC bar (1-minute)
  const handleBar1m = useCallback((event: MessageEvent) => {
    try {
      const data = JSON.parse(event.data)
      // For now, we'll just update the price with the close value
      // In a real implementation, you might want to store OHLC data separately
      pendingUpdatesRef.current[data.sym] = {
        sym: data.sym,
        price: data.c,
        changePct: 0, // Would need to calculate vs previous close
        ts: data.ts,
        lastUpdate: Date.now()
      }
      
      scheduleThrottledUpdate()
      
    } catch (err) {
      console.error('Failed to parse OHLC bar:', err)
    }
  }, [])
  
  // Handle market state change
  const handleStateChange = useCallback((event: MessageEvent) => {
    try {
      const data = JSON.parse(event.data)
      setState(prev => ({
        ...prev,
        marketState: data.equitiesState,
        lastUpdate: data.at
      }))
    } catch (err) {
      console.error('Failed to parse state change:', err)
    }
  }, [])
  
  // Handle heartbeat (keep-alive)
  const handleHeartbeat = useCallback((event: MessageEvent) => {
    // Just acknowledge the heartbeat - connection is still alive
  }, [])
  
  // Throttled update scheduler with adaptive intervals
  const scheduleThrottledUpdate = useCallback(() => {
    // Clear existing timeout
    if (throttleTimeoutRef.current) {
      clearTimeout(throttleTimeoutRef.current)
    }
    
    // Determine update interval based on market state and component type
    const getUpdateInterval = () => {
      // Check if document is hidden (tab not active)
      const isHidden = typeof document !== 'undefined' && document.hidden
      const hiddenMultiplier = isHidden ? 4 : 1 // Slow down 4x when hidden
      
      // Get base intervals
      const intervals = getAdaptiveIntervals(state.marketState)
      let baseInterval: number
      
      switch (component) {
        case 'marquee':
          baseInterval = intervals.marqueeMs
          break
        case 'table':
          baseInterval = intervals.tableMs
          break
        case 'tile':
          baseInterval = intervals.tileMs
          break
        case 'embed':
          baseInterval = intervals.embedMs
          break
        case 'spark':
          baseInterval = intervals.sparkMs
          break
        default:
          baseInterval = intervals.tileMs
      }
      
      return Math.max(1000, baseInterval * hiddenMultiplier) // Minimum 1s, respect hidden state
    }
    
    const updateInterval = getUpdateInterval()
    
    throttleTimeoutRef.current = setTimeout(() => {
      // Apply pending updates to state
      if (Object.keys(pendingUpdatesRef.current).length > 0) {
        setState(prev => ({
          ...prev,
          prices: { ...prev.prices, ...pendingUpdatesRef.current },
          lastUpdate: Date.now()
        }))
        
        // Clear pending updates
        pendingUpdatesRef.current = {}
      }
    }, updateInterval)
    
  }, [state.marketState, component])
  
  // Reconnection with exponential backoff
  const scheduleReconnect = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current)
    }
    
    const attempt = reconnectAttemptsRef.current++
    const delay = Math.min(30000, 1000 * Math.pow(2, attempt)) // Max 30s
    
    console.log(`🔄 Reconnecting in ${delay}ms (attempt ${attempt + 1})`)
    
    reconnectTimeoutRef.current = setTimeout(() => {
      connect()
    }, delay)
    
  }, [connect])
  
  // Fetch initial data immediately on page load/refresh
  const fetchInitialData = useCallback(async () => {
    if (!enabled || symbols.length === 0) return
    
    try {
      const response = await fetch(`/api/prices?symbols=${symbols.join(',')}`)
      const data = await response.json()
      
      if (data.prices && Object.keys(data.prices).length > 0) {
        // Convert API response to LivePrice format
        const pricesMap: Record<string, LivePrice> = {}
        Object.entries(data.prices).forEach(([symbol, priceData]: [string, any]) => {
          pricesMap[symbol] = {
            sym: symbol,
            price: priceData.price || 0,
            changePct: priceData.changePct || 0,
            ts: Date.now(),
            lastUpdate: Date.now()
          }
        })
        
        setState(prev => ({
          ...prev,
          prices: pricesMap,
          lastUpdate: Date.now(),
          error: null
        }))
        
        console.log(`📊 Initial data loaded for ${Object.keys(pricesMap).length} symbols`)
      }
    } catch (err) {
      console.error('Failed to fetch initial price data:', err)
    }
  }, [symbols, enabled])

  // Initialize connection and fetch initial data
  useEffect(() => {
    // Fetch initial data immediately (no waiting)
    fetchInitialData()
    
    // Then connect to live stream
    connect()
    
    // Handle visibility change for adaptive throttling
    const handleVisibilityChange = () => {
      // Reschedule any pending updates with new visibility state
      if (Object.keys(pendingUpdatesRef.current).length > 0) {
        scheduleThrottledUpdate()
      }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    // Cleanup
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close()
      }
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current)
      }
      if (throttleTimeoutRef.current) {
        clearTimeout(throttleTimeoutRef.current)
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [connect, scheduleThrottledUpdate, fetchInitialData])
  
  // Fallback polling when SSE is not available
  const fallbackPollingRef = useRef<NodeJS.Timeout | null>(null)
  const prevMarketStateRef = useRef(state.marketState)
  
  useEffect(() => {
    if (!fallbackPolling || state.connected) return
    
    // If not connected after 10 seconds, start fallback polling
    const startFallback = setTimeout(() => {
      if (!state.connected && enabled) {
        console.log('📊 Starting fallback polling for prices')
        
        const pollPrices = async () => {
          try {
            // Use the new prices API with fallback support
            const response = await fetch(`/api/prices?symbols=${symbols.join(',')}`)
            const data = await response.json()
            
            if (data.prices && Object.keys(data.prices).length > 0) {
              setState(prev => ({
                ...prev,
                prices: data.prices,
                lastUpdate: Date.now(),
                error: null
              }))
            }
          } catch (err) {
            console.error('Fallback polling error:', err)
            setState(prev => ({
              ...prev,
              error: 'Failed to fetch price data'
            }))
          }
        }
        
        // Poll based on market state
        const getPollingInterval = () => {
          const intervals = getAdaptiveIntervals(state.marketState)
          return intervals.tileMs // Use tile interval for fallback
        }
        
        const startPolling = () => {
          if (fallbackPollingRef.current) {
            clearInterval(fallbackPollingRef.current)
          }
          
          fallbackPollingRef.current = setInterval(pollPrices, getPollingInterval())
        }
        
        startPolling()
        
        // Update polling interval when market state changes
        if (prevMarketStateRef.current !== state.marketState) {
          startPolling()
          prevMarketStateRef.current = state.marketState
        }
      }
    }, 10000)
    
    return () => {
      clearTimeout(startFallback)
      if (fallbackPollingRef.current) {
        clearInterval(fallbackPollingRef.current)
      }
    }
  }, [state.connected, state.marketState, symbols, enabled, fallbackPolling])
  
  // Helper functions
  const getPrice = useCallback((symbol: string): LivePrice | null => {
    return state.prices[symbol] || null
  }, [state.prices])
  
  const isHighVolatility = useCallback((symbol: string): boolean => {
    const price = getPrice(symbol)
    return price?.volScore ? price.volScore > 0.6 : false
  }, [getPrice])
  
  const getLastUpdateTime = useCallback((): Date => {
    return new Date(state.lastUpdate)
  }, [state.lastUpdate])
  
  return {
    // State
    prices: state.prices,
    marketState: state.marketState,
    connected: state.connected,
    error: state.error,
    lastUpdate: state.lastUpdate,
    
    // Helper functions
    getPrice,
    isHighVolatility,
    getLastUpdateTime,
    
    // Manual controls
    reconnect: connect,
    
    // Stats
    symbolCount: symbols.length,
    priceCount: Object.keys(state.prices).length
  }
}