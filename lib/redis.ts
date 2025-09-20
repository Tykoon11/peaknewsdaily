/**
 * Redis implementation with complete build-time isolation
 * Prevents ANY Redis connection attempts during builds
 */

import { MarketState } from './marketState'

// Price data interfaces
export interface PriceSnapshot {
  sym: string
  price: number
  ts: number
  change: number
  changePct: number
  state: MarketState
  dayOpen?: number
  prevClose?: number
  dayHigh?: number
  dayLow?: number
  bid?: number
  ask?: number
  volume?: number
}

export interface OHLCBar {
  o: number
  h: number
  l: number
  c: number
  ts: number
}

export interface SymbolMeta {
  sym: string
  name: string
  sector?: string
  exchange?: string
  type: 'stock' | 'crypto'
  baseCurrency?: string
  quoteCurrency?: string
}

// Comprehensive build detection
const IS_BUILD = !!(
  process.env.VERCEL ||
  process.env.CI ||
  process.env.NEXT_PHASE === 'phase-production-build' ||
  process.env.BUILDING === 'true' ||
  (process.env.NODE_ENV === 'production' && !process.env.VERCEL_ENV) ||
  (typeof process !== 'undefined' && process.argv && 
    process.argv.some(arg => 
      arg.includes('build') || 
      arg.includes('export') || 
      arg.includes('next-server') ||
      arg.includes('.next') ||
      arg.includes('webpack') ||
      arg.includes('turbo')
    )
  ) ||
  // Additional checks for various build contexts
  process.env.npm_lifecycle_event === 'build' ||
  process.env.npm_command === 'run-script' ||
  (typeof global !== 'undefined' && global.__NEXT_DATA__)
)

// Redis key generators
export const RedisKeys = {
  price: (sym: string) => `px:${sym}`,
  ohlc1m: (sym: string, timestamp: Date) => {
    const yyyymmddHHmm = timestamp.toISOString()
      .replace(/[-:]/g, '')
      .slice(0, 12)
    return `ohlc:1m:${sym}:${yyyymmddHHmm}`
  },
  meta: (sym: string) => `meta:${sym}`,
  equityState: () => 'state:equities',
  volScore: (sym: string) => `vol:score:${sym}`,
  symbols: (type: 'stock' | 'crypto') => `symbols:${type}`,
}

// COMPLETELY STUB ALL REDIS FUNCTIONS DURING BUILD
export function getRedis(): null {
  return null
}

export async function setPriceSnapshot(snapshot: PriceSnapshot): Promise<void> {
  if (IS_BUILD) return
  // Runtime implementation would go here
}

export async function getPriceSnapshot(sym: string): Promise<PriceSnapshot | null> {
  if (IS_BUILD) return null
  // Runtime implementation would go here
  return null
}

export async function getPriceSnapshots(symbols: string[]): Promise<Record<string, PriceSnapshot>> {
  if (IS_BUILD) return {}
  // Runtime implementation would go here
  return {}
}

export async function setOHLC1m(sym: string, timestamp: Date, bar: OHLCBar): Promise<void> {
  if (IS_BUILD) return
  // Runtime implementation would go here
}

export async function getOHLC1m(sym: string, timestamp: Date): Promise<OHLCBar | null> {
  if (IS_BUILD) return null
  // Runtime implementation would go here
  return null
}

export async function setSymbolMeta(meta: SymbolMeta): Promise<void> {
  if (IS_BUILD) return
  // Runtime implementation would go here
}

export async function getSymbolMeta(sym: string): Promise<SymbolMeta | null> {
  if (IS_BUILD) return null
  // Runtime implementation would go here
  return null
}

export async function getSymbolsByType(type: 'stock' | 'crypto'): Promise<string[]> {
  if (IS_BUILD) return []
  // Runtime implementation would go here
  return []
}

export async function setEquityMarketState(state: MarketState): Promise<void> {
  if (IS_BUILD) return
  // Runtime implementation would go here
}

export async function getEquityMarketState(): Promise<MarketState | null> {
  if (IS_BUILD) return null
  // Runtime implementation would go here
  return null
}

export async function setVolatilityScore(sym: string, score: number): Promise<void> {
  if (IS_BUILD) return
  // Runtime implementation would go here
}

export async function getVolatilityScore(sym: string): Promise<number> {
  if (IS_BUILD) return 0.5
  // Runtime implementation would go here
  return 0.5
}

export async function getVolatilityScores(symbols: string[]): Promise<Record<string, number>> {
  if (IS_BUILD) return {}
  // Runtime implementation would go here
  return {}
}

export async function healthCheck(): Promise<boolean> {
  if (IS_BUILD) return false
  // Runtime implementation would go here
  return false
}

export function closeRedis(): void {
  if (IS_BUILD) return
  // Runtime implementation would go here
}

// Log mode status
if (IS_BUILD) {
  console.log('🔧 Redis: Build mode - all operations stubbed, NO CONNECTION ATTEMPTS')
} else {
  console.log('⚠️  Redis: Runtime mode - Redis not configured, using fallbacks')
}