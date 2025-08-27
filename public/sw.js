const CACHE = 'pnd-v1'
const LIMIT = 20

self.addEventListener('install', (event) => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (event) => {
  const req = event.request
  if (req.method !== 'GET') return
  event.respondWith((async () => {
    try {
      const res = await fetch(req)
      const cache = await caches.open(CACHE)
      cache.put(req, res.clone())
      const keys = await cache.keys()
      if (keys.length > LIMIT) await cache.delete(keys[0])
      return res
    } catch (e) {
      const cache = await caches.open(CACHE)
      const cached = await cache.match(req)
      if (cached) return cached
      throw e
    }
  })())
})

