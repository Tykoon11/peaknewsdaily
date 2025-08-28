import Link from 'next/link'
import { getGhostClient } from '@/lib/ghost'

export const metadata = { title: 'Ghost Feed' }

export default async function GhostFeedPage() {
  const ghost = getGhostClient()
  if (!ghost) {
    return (
      <main className="container py-6">
        <h1 className="text-2xl font-semibold mb-4">Ghost Feed</h1>
        <p className="text-gray-600">Ghost is not configured. Set GHOST_URL and GHOST_CONTENT_KEY in your env.</p>
      </main>
    )
  }
  const posts = await ghost.posts.browse({ limit: 20, include: ['tags', 'authors'] }).catch(() => [])
  return (
    <main className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Ghost Feed</h1>
        <Link href="/" className="text-sm underline">Back home</Link>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <li key={p.id} className="rounded-lg border p-4 hover:shadow">
            <Link href={`/ghost/post/${p.slug}`} className="block">
              <h2 className="font-medium text-lg">{p.title}</h2>
              {p.excerpt ? <p className="text-sm text-gray-600 line-clamp-2">{p.excerpt}</p> : null}
            </Link>
            <div className="mt-2 flex gap-2 text-xs">
              {p.tags?.map((t) => (
                <span key={t.id} className="px-2 py-0.5 rounded bg-gray-100">#{t.name}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

