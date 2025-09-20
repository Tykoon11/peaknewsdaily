/**
 * Redis implementation with build-time stubbing
 * Completely prevents Redis connections during builds
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

// Detect build environment
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
      arg.includes('.next')
    )
  )
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

// Stub implementations for build time
export function getRedis(): null {
  return null
}

export async function setPriceSnapshot(snapshot: PriceSnapshot): Promise<void> {
  if (IS_BUILD) return
  // In production, this would save to Redis
}

export async function getPriceSnapshot(sym: string): Promise<PriceSnapshot | null> {
  if (IS_BUILD) return null
  // In production, this would fetch from Redis
  return null
}

export async function getPriceSnapshots(symbols: string[]): Promise<Record<string, PriceSnapshot>> {
  if (IS_BUILD) return {}
  // In production, this would fetch from Redis
  return {}
}

export async function setOHLC1m(sym: string, timestamp: Date, bar: OHLCBar): Promise<void> {
  if (IS_BUILD) return
  // In production, this would save to Redis
}

export async function getOHLC1m(sym: string, timestamp: Date): Promise<OHLCBar | null> {
  if (IS_BUILD) return null
  // In production, this would fetch from Redis
  return null
}

export async function setSymbolMeta(meta: SymbolMeta): Promise<void> {
  if (IS_BUILD) return
  // In production, this would save to Redis
}

export async function getSymbolMeta(sym: string): Promise<SymbolMeta | null> {
  if (IS_BUILD) return null
  // In production, this would fetch from Redis
  return null
}

export async function getSymbolsByType(type: 'stock' | 'crypto'): Promise<string[]> {
  if (IS_BUILD) return []
  // In production, this would fetch from Redis
  return []
}

export async function setEquityMarketState(state: MarketState): Promise<void> {
  if (IS_BUILD) return
  // In production, this would save to Redis
}

export async function getEquityMarketState(): Promise<MarketState | null> {
  if (IS_BUILD) return null
  // In production, this would fetch from Redis
  return null
}

export async function setVolatilityScore(sym: string, score: number): Promise<void> {
  if (IS_BUILD) return
  // In production, this would save to Redis
}

export async function getVolatilityScore(sym: string): Promise<number> {
  if (IS_BUILD) return 0.5
  // In production, this would fetch from Redis
  return 0.5
}

export async function getVolatilityScores(symbols: string[]): Promise<Record<string, number>> {
  if (IS_BUILD) return {}
  // In production, this would fetch from Redis
  return {}
}

export async function healthCheck(): Promise<boolean> {
  if (IS_BUILD) return false
  // In production, this would test Redis connection
  return false
}

export function closeRedis(): void {
  if (IS_BUILD) return
  // In production, this would close Redis connection
}

// Log which mode we're in
if (IS_BUILD) {
  console.log('🔧 Redis: Build mode - all operations stubbed')
} else {
  console.log('⚠️  Redis: Runtime mode - Redis not configured, using fallbacks')
}