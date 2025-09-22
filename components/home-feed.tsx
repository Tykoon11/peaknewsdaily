"use client"
import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Tag = { slug: string; name: string }
type Post = {
  id: string
  slug: string
  title: string
  description: string | null
  publishedAt: string | null
  createdAt: string
  ageRestricted?: boolean
  media?: { kind: 'image' | 'video'; publicId?: string; sourceUrl?: string }[]
  tags: { tag: Tag }[]
}

export default function HomeFeed({ initial, baseQuery }: { initial: Post[]; baseQuery?: { c?: string; s?: 'latest' | 'views' } }) {
  const [items, setItems] = useState<Post[]>(initial)
  const [cursor, setCursor] = useState<string | null>(initial.length ? initial[initial.length - 1].id : null)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  const onLoadMore = useCallback(async () => {
    if (loading || done || !cursor) return
    setLoading(true)
    try {
      const url = new URL('/api/posts', window.location.origin)
      url.searchParams.set('cursor', cursor)
      url.searchParams.set('limit', '12')
      if (baseQuery?.c) url.searchParams.set('c', baseQuery.c)
      if (baseQuery?.s) url.searchParams.set('s', baseQuery.s)
      const res = await fetch(url.toString())
      const data = await res.json()
      const next: Post[] = data.items || []
      setItems((prev) => [...prev, ...next])
      setCursor(data.nextCursor)
      if (!data.nextCursor || next.length === 0) setDone(true)
    } finally {
      setLoading(false)
    }
  }, [cursor, loading, done, baseQuery?.c, baseQuery?.s])

  useEffect(() => {
    const el = loadMoreRef.current
    if (!el) return undefined
    const obs = new IntersectionObserver((entries) => {
      const e = entries[0]
      if (e.isIntersecting) onLoadMore()
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [onLoadMore])

  return (
    <>
      <ul className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 post-grid mx-2 xs:mx-0">
        {items.map((p) => (
          <li key={p.id} className="rounded-md xs:rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 xs:p-4 hover:shadow dark:hover:shadow-xl post-card transition-all" data-age={p.ageRestricted ? '1' : undefined}>
            {p.media && p.media.length > 0 && (
              <div className="mb-2 xs:mb-3 -mx-3 xs:-mx-4 -mt-3 xs:-mt-4">
                {p.media[0].kind === 'video' ? (
                  <video
                    className="w-full h-32 xs:h-40 sm:h-48 object-cover"
                    muted
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause()
                      try {
                        e.currentTarget.currentTime = 0
                      } catch {}
                    }}
                    poster={p.media[0].sourceUrl || (process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME && p.media[0].publicId ? `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/${p.media[0].publicId}.jpg` : undefined)}
                  >
                    {p.media[0].publicId && process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? (
                      <source src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/${p.media[0].publicId}.mp4`} type="video/mp4" />
                    ) : null}
                  </video>
                ) : (
                  <Image
                    alt={p.title}
                    className="w-full h-32 xs:h-40 sm:h-48 object-cover"
                    src={p.media[0].sourceUrl || (process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME && p.media[0].publicId ? `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${p.media[0].publicId}.jpg` : '')}
                    width={300}
                    height={200}
                    sizes="(max-width: 480px) 100vw, (max-width: 640px) 50vw, 33vw"
                  />
                )}
              </div>
            )}
            <Link href={`/post/${p.slug}`} className="block post-card-link">
              <h2 className="font-medium text-sm xs:text-base sm:text-lg text-gray-900 dark:text-gray-100 leading-tight">{p.title}</h2>
              <p className="text-xs xs:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mt-1">{p.description || ''}</p>
            </Link>
            <div className="mt-2 flex flex-wrap gap-1 xs:gap-2 text-xs post-card-tags">
              {p.tags.map((t) => (
                <Link key={t.tag.slug} href={`/tag/${t.tag.slug}`} className="px-1.5 xs:px-2 py-0.5 rounded text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors tag-chip">#{t.tag.name}</Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <div ref={loadMoreRef} className="h-10 xs:h-12 flex items-center justify-center mx-2 xs:mx-0">
        {loading ? <span className="text-xs xs:text-sm text-gray-600 dark:text-gray-300">Loading…</span> : done ? <span className="text-xs xs:text-sm text-gray-600 dark:text-gray-300">You're all caught up</span> : null}
      </div>
    </>
  )
}
