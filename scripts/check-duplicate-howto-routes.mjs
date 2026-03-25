import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const howToDir = join(process.cwd(), 'app', 'how-to')
const entries = readdirSync(howToDir)
  .filter((name) => {
    const p = join(howToDir, name)
    return statSync(p).isDirectory() && name !== '[slug]'
  })

const set = new Set(entries)
const duplicates = []

for (const name of entries) {
  if (!name.startsWith('how-to-')) continue
  const canonical = name.slice('how-to-'.length)
  if (set.has(canonical)) duplicates.push([name, canonical])
}

if (duplicates.length > 0) {
  console.warn('Duplicate how-to route pairs detected (legacy-prefix and canonical both exist):')
  for (const [legacy, canonical] of duplicates) {
    console.warn(` - /how-to/${legacy} -> /how-to/${canonical}`)
  }
  console.warn('\nAudit warning only (non-blocking): keep only one route directory per article slug.')
} else {
  console.log('No duplicate how-to prefixed route pairs found.')
}
