/**
 * Market State Engine for U.S./Canada equities with America/Toronto timezone
 * Handles market hours, states, and adaptive update intervals
 */

export type MarketState = 'PREMARKET' | 'REGULAR' | 'AFTERHOURS' | 'CLOSED'

export interface AdaptiveIntervals {
  marqueeMs: number
  tableMs: number
  tileMs: number
  embedMs: number
  sparkMs: number
}

/**
 * Get current Eastern Time (Toronto timezone)
 */
export function getCurrentET(): Date {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "America/Toronto" }))
}

/**
 * Convert any date to Eastern Time
 */
export function toET(date: Date): Date {
  return new Date(date.toLocaleString("en-US", { timeZone: "America/Toronto" }))
}

/**
 * Check if current day is a weekday (Mon-Fri)
 */
export function isWeekday(nowET: Date): boolean {
  const day = nowET.getDay()
  return day >= 1 && day <= 5 // Monday = 1, Friday = 5
}

/**
 * Get market state for U.S./Canada equities based on ET time
 * Rules:
 * - Premarket: 04:00–09:30 ET (weekdays only)
 * - Regular: 09:30–16:00 ET (weekdays only)  
 * - After-hours: 16:00–20:00 ET (weekdays only)
 * - Closed: otherwise (nights/weekends/holidays)
 */
export function getEquityMarketState(nowET: Date = getCurrentET()): MarketState {
  if (!isWeekday(nowET)) {
    return 'CLOSED'
  }

  const hours = nowET.getHours()
  const minutes = nowET.getMinutes()
  const timeInMinutes = hours * 60 + minutes

  // Market hours in minutes from midnight
  const preMarketStart = 4 * 60 // 04:00
  const regularStart = 9 * 60 + 30 // 09:30
  const regularEnd = 16 * 60 // 16:00
  const afterHoursEnd = 20 * 60 // 20:00

  if (timeInMinutes >= preMarketStart && timeInMinutes < regularStart) {
    return 'PREMARKET'
  } else if (timeInMinutes >= regularStart && timeInMinutes < regularEnd) {
    return 'REGULAR'
  } else if (timeInMinutes >= regularEnd && timeInMinutes < afterHoursEnd) {
    return 'AFTERHOURS'
  } else {
    return 'CLOSED'
  }
}

/**
 * Check if market is considered "open" (any trading session)
 */
export function isMarketOpen(state: MarketState): boolean {
  return state !== 'CLOSED'
}

/**
 * Get adaptive update intervals based on market state
 * Optimized for different UI components and market conditions
 */
export function getAdaptiveIntervals(state: MarketState): AdaptiveIntervals {
  switch (state) {
    case 'REGULAR':
      return {
        marqueeMs: 1000,    // 1s - fast marquee updates during regular hours
        tableMs: 2000,      // 2s - moderate table updates
        tileMs: 1000,       // 1s - fast tile updates
        embedMs: 30000,     // 30s - slower for embeds
        sparkMs: 15000,     // 15s - moderate spark chart updates
      }
    
    case 'PREMARKET':
    case 'AFTERHOURS':
      return {
        marqueeMs: 2000,    // 2s - slower during extended hours
        tableMs: 5000,      // 5s - moderate table updates
        tileMs: 2000,       // 2s - moderate tile updates
        embedMs: 60000,     // 1m - slower embeds
        sparkMs: 30000,     // 30s - slower spark updates
      }
    
    case 'CLOSED':
    default:
      return {
        marqueeMs: 30000,   // 30s - very slow when closed
        tableMs: 60000,     // 1m - slow table updates
        tileMs: 30000,      // 30s - slow tile updates
        embedMs: 300000,    // 5m - very slow embeds
        sparkMs: 300000,    // 5m - very slow spark updates
      }
  }
}

/**
 * Get crypto intervals based on volatility
 * Active = high volatility, Quiet = low volatility
 */
export function getCryptoIntervals(isActive: boolean = true): AdaptiveIntervals {
  if (isActive) {
    return {
      marqueeMs: 1000,    // 1s - fast during high volatility
      tableMs: 2000,      // 2s
      tileMs: 1000,       // 1s
      embedMs: 15000,     // 15s
      sparkMs: 10000,     // 10s
    }
  } else {
    return {
      marqueeMs: 2000,    // 2s - slower during low volatility
      tableMs: 5000,      // 5s
      tileMs: 2000,       // 2s
      embedMs: 30000,     // 30s
      sparkMs: 30000,     // 30s
    }
  }
}

/**
 * Format timestamp for display in ET timezone
 */
export function formatTimestampET(timestamp: Date | number): string {
  const date = typeof timestamp === 'number' ? new Date(timestamp) : timestamp
  return date.toLocaleString('en-US', {
    timeZone: 'America/Toronto',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }) + ' ET'
}

/**
 * Get market state display label
 */
export function getMarketStateLabel(state: MarketState): string {
  switch (state) {
    case 'PREMARKET':
      return 'Pre-Market'
    case 'REGULAR':
      return 'Market Open'
    case 'AFTERHOURS':
      return 'After-Hours'
    case 'CLOSED':
      return 'Market Closed'
    default:
      return 'Unknown'
  }
}

/**
 * Get status badge color for market state
 */
export function getMarketStateColor(state: MarketState): string {
  switch (state) {
    case 'REGULAR':
      return 'bg-green-100 text-green-800'
    case 'PREMARKET':
    case 'AFTERHOURS':
      return 'bg-yellow-100 text-yellow-800'
    case 'CLOSED':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}