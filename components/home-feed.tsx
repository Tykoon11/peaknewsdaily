"use client"
import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'

type Tag = { slug: string; name: string }
type Post = {
  id: string
  slug: string
  title: string
  description: string | null
  publishedAt: string | null
  createdAt: string
  tags: { tag: Tag }[]
}

export default function HomeFeed({ initial }: { initial: Post[] }) {
  const [items, setItems] = useState<Post[]>(initial)
  const [cursor, setCursor] = useState<string | null>(initial.length ? initial[initial.length - 1].id : null)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  const onLoadMore = async () => {
    if (loading || done || !cursor) return
    setLoading(true)
    try {
      const url = new URL('/api/posts', window.location.origin)
      url.searchParams.set('cursor', cursor)
      url.searchParams.set('limit', '12')
      const res = await fetch(url.toString())
      const data = await res.json()
      const next: Post[] = data.items || []
      setItems((prev) => [...prev, ...next])
      setCursor(data.nextCursor)
      if (!data.nextCursor || next.length === 0) setDone(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!loadMoreRef.current) return
    const el = loadMoreRef.current
    const obs = new IntersectionObserver((entries) => {
      const e = entries[0]
      if (e.isIntersecting) onLoadMore()
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [loadMoreRef.current, cursor, loading, done])

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((p) => (
          <li key={p.id} className="rounded-lg border p-4 hover:shadow">
            <Link href={`/post/${p.slug}`} className="block">
              <h2 className="font-medium text-lg">{p.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">{p.description || ''}</p>
            </Link>
            <div className="mt-2 flex gap-2 text-xs">
              {p.tags.map((t) => (
                <Link key={t.tag.slug} href={`/tag/${t.tag.slug}`} className="px-2 py-0.5 rounded bg-gray-100">#{t.tag.name}</Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <div ref={loadMoreRef} className="h-12 flex items-center justify-center">
        {loading ? <span className="text-sm text-gray-600">Loading…</span> : done ? <span className="text-sm text-gray-600">You’re all caught up</span> : null}
      </div>
    </>
  )
}

