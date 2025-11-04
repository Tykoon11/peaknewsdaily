// Simple in-memory cache to reduce database calls
class MemoryCache {
  private cache = new Map<string, { data: any; expires: number }>()
  
  set(key: string, data: any, ttlSeconds: number = 300) {
    const expires = Date.now() + (ttlSeconds * 1000)
    this.cache.set(key, { data, expires })
  }
  
  get(key: string) {
    const item = this.cache.get(key)
    if (!item) return null
    
    if (Date.now() > item.expires) {
      this.cache.delete(key)
      return null
    }
    
    return item.data
  }
  
  delete(key: string) {
    this.cache.delete(key)
  }
  
  clear() {
    this.cache.clear()
  }
  
  // Clean expired entries periodically
  cleanup() {
    const now = Date.now()
    for (const [key, item] of this.cache.entries()) {
      if (now > item.expires) {
        this.cache.delete(key)
      }
    }
  }
}

export const cache = new MemoryCache()

// Clean expired entries every 5 minutes
setInterval(() => cache.cleanup(), 5 * 60 * 1000)

// Helper function for cached database queries
export async function cachedQuery<T>(
  key: string,
  queryFn: () => Promise<T>,
  ttlSeconds: number = 300
): Promise<T> {
  // Try cache first
  const cached = cache.get(key)
  if (cached) {
    console.log(`💾 CACHE HIT: ${key}`)
    return cached
  }
  
  // Cache miss - query database
  console.log(`🔍 CACHE MISS: ${key} - querying database`)
  const result = await queryFn()
  cache.set(key, result, ttlSeconds)
  return result
}