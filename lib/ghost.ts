import GhostContentAPI from '@tryghost/content-api'

export function getGhostClient() {
  const url = process.env.GHOST_URL
  const key = process.env.GHOST_CONTENT_KEY
  if (!url || !key) return null
  return new GhostContentAPI({ url, key, version: 'v5.0' })
}

