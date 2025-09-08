/**
 * Redis cache layer for live price data
 * Handles price snapshots, OHLC bars, and volatility scores
 */

import Redis from 'ioredis'
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
  o: number  // open
  h: number  // high
  l: number  // low
  c: number  // close
  ts: number // timestamp
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

// Redis connection
let redis: Redis | null = null

/**
 * Initialize Redis connection
 */
export function getRedis(): Redis {
  if (!redis) {
    const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379'
    const redisToken = process.env.REDIS_TOKEN
    
    if (redisToken) {
      // Upstash or other token-based Redis
      redis = new Redis(redisUrl, {
        password: redisToken,
        maxRetriesPerRequest: 3,
      })
    } else {
      // Local Redis
      redis = new Redis(redisUrl, {
        maxRetriesPerRequest: 3,
      })
    }

    redis.on('error', (err) => {
      console.error('Redis connection error:', err)
    })

    redis.on('connect', () => {
      // Redis connected successfully
    })
  }
  
  return redis
}

/**
 * Redis key generators
 */
export const RedisKeys = {
  // Price snapshot: px:AAPL -> {price, ts, change, changePct, state}
  price: (sym: string) => `px:${sym}`,
  
  // 1-minute OHLC: ohlc:1m:AAPL:202501021430 -> {o,h,l,c,ts}
  ohlc1m: (sym: string, timestamp: Date) => {
    const yyyymmddHHmm = timestamp.toISOString()
      .replace(/[-:]/g, '')
      .slice(0, 12) // YYYYMMDDHHMM
    return `ohlc:1m:${sym}:${yyyymmddHHmm}`
  },
  
  // Symbol metadata: meta:AAPL -> {name, sector, exchange, type}
  meta: (sym: string) => `meta:${sym}`,
  
  // Market state: state:equities -> "REGULAR" | "PREMARKET" | etc.
  equityState: () => 'state:equities',
  
  // Volatility score: vol:score:BTC-USD -> 0.75 (0-1 scale)
  volScore: (sym: string) => `vol:score:${sym}`,
  
  // Symbol list by type: symbols:stock, symbols:crypto
  symbols: (type: 'stock' | 'crypto') => `symbols:${type}`,
}

/**
 * Store price snapshot in Redis
 */
export async function setPriceSnapshot(snapshot: PriceSnapshot): Promise<void> {
  const redis = getRedis()
  const key = RedisKeys.price(snapshot.sym)
  
  await redis.setex(
    key,
    7200, // 2 hour expiry
    JSON.stringify(snapshot)
  )
}

/**
 * Get price snapshot from Redis
 */
export async function getPriceSnapshot(sym: string): Promise<PriceSnapshot | null> {
  const redis = getRedis()
  const key = RedisKeys.price(sym)
  
  const data = await redis.get(key)
  if (!data) return null
  
  try {
    return JSON.parse(data) as PriceSnapshot
  } catch (err) {
    console.error(`Failed to parse price snapshot for ${sym}:`, err)
    return null
  }
}

/**
 * Get multiple price snapshots
 */
export async function getPriceSnapshots(symbols: string[]): Promise<Record<string, PriceSnapshot>> {
  if (symbols.length === 0) return {}
  
  const redis = getRedis()
  const keys = symbols.map(sym => RedisKeys.price(sym))
  
  const pipeline = redis.pipeline()
  keys.forEach(key => pipeline.get(key))
  const results = await pipeline.exec()
  
  const snapshots: Record<string, PriceSnapshot> = {}
  
  results?.forEach((result, index) => {
    if (result && result[1]) {
      try {
        const snapshot = JSON.parse(result[1] as string) as PriceSnapshot
        snapshots[symbols[index]] = snapshot
      } catch (err) {
        console.error(`Failed to parse snapshot for ${symbols[index]}:`, err)
      }
    }
  })
  
  return snapshots
}

/**
 * Store OHLC 1-minute bar
 */
export async function setOHLC1m(sym: string, timestamp: Date, bar: OHLCBar): Promise<void> {
  const redis = getRedis()
  const key = RedisKeys.ohlc1m(sym, timestamp)
  
  await redis.setex(
    key,
    259200, // 3 day expiry
    JSON.stringify(bar)
  )
}

/**
 * Get OHLC 1-minute bar
 */
export async function getOHLC1m(sym: string, timestamp: Date): Promise<OHLCBar | null> {
  const redis = getRedis()
  const key = RedisKeys.ohlc1m(sym, timestamp)
  
  const data = await redis.get(key)
  if (!data) return null
  
  try {
    return JSON.parse(data) as OHLCBar
  } catch (err) {
    console.error(`Failed to parse OHLC bar for ${sym}:`, err)
    return null
  }
}

/**
 * Store symbol metadata
 */
export async function setSymbolMeta(meta: SymbolMeta): Promise<void> {
  const redis = getRedis()
  const key = RedisKeys.meta(meta.sym)
  
  await redis.set(key, JSON.stringify(meta))
  
  // Add to symbol type list
  const typeKey = RedisKeys.symbols(meta.type)
  await redis.sadd(typeKey, meta.sym)
}

/**
 * Get symbol metadata
 */
export async function getSymbolMeta(sym: string): Promise<SymbolMeta | null> {
  const redis = getRedis()
  const key = RedisKeys.meta(sym)
  
  const data = await redis.get(key)
  if (!data) return null
  
  try {
    return JSON.parse(data) as SymbolMeta
  } catch (err) {
    console.error(`Failed to parse symbol meta for ${sym}:`, err)
    return null
  }
}

/**
 * Get all symbols of a given type
 */
export async function getSymbolsByType(type: 'stock' | 'crypto'): Promise<string[]> {
  const redis = getRedis()
  const key = RedisKeys.symbols(type)
  
  return await redis.smembers(key)
}

/**
 * Set current equity market state
 */
export async function setEquityMarketState(state: MarketState): Promise<void> {
  const redis = getRedis()
  const key = RedisKeys.equityState()
  
  await redis.setex(key, 3600, state) // 1 hour expiry
}

/**
 * Get current equity market state
 */
export async function getEquityMarketState(): Promise<MarketState | null> {
  const redis = getRedis()
  const key = RedisKeys.equityState()
  
  const state = await redis.get(key)
  return state as MarketState | null
}

/**
 * Set volatility score for a symbol (0-1 scale)
 */
export async function setVolatilityScore(sym: string, score: number): Promise<void> {
  const redis = getRedis()
  const key = RedisKeys.volScore(sym)
  
  // Clamp score between 0 and 1
  const clampedScore = Math.max(0, Math.min(1, score))
  
  await redis.setex(key, 3600, clampedScore.toString()) // 1 hour expiry
}

/**
 * Get volatility score for a symbol
 */
export async function getVolatilityScore(sym: string): Promise<number> {
  const redis = getRedis()
  const key = RedisKeys.volScore(sym)
  
  const score = await redis.get(key)
  return score ? parseFloat(score) : 0.5 // Default to medium volatility
}

/**
 * Get volatility scores for multiple symbols
 */
export async function getVolatilityScores(symbols: string[]): Promise<Record<string, number>> {
  if (symbols.length === 0) return {}
  
  const redis = getRedis()
  const keys = symbols.map(sym => RedisKeys.volScore(sym))
  
  const pipeline = redis.pipeline()
  keys.forEach(key => pipeline.get(key))
  const results = await pipeline.exec()
  
  const scores: Record<string, number> = {}
  
  results?.forEach((result, index) => {
    const score = result && result[1] ? parseFloat(result[1] as string) : 0.5
    scores[symbols[index]] = score
  })
  
  return scores
}

/**
 * Health check - test Redis connection
 */
export async function healthCheck(): Promise<boolean> {
  try {
    const redis = getRedis()
    const pong = await redis.ping()
    return pong === 'PONG'
  } catch (err) {
    console.error('Redis health check failed:', err)
    return false
  }
}

/**
 * Clean up - close Redis connection
 */
export function closeRedis(): void {
  if (redis) {
    redis.disconnect()
    redis = null
  }
}