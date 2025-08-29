"use client"
import { useState } from 'react'

type Item = { id: string; slug: string; title: string; description?: string | null; media?: { publicId?: string | null; sourceUrl?: string | null }[] }

export default function SearchGrid({ category }: { category?: string }) {
  const [q, setQ] = useState('')
  const [results, setResults] = useState<Item[] | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const query = q.trim()
    if (!query) { setResults([]); return }
    setLoading(true)
    try {
      const url = new URL('/api/search', window.location.origin)
      url.searchParams.set('q', query)
      if (category) url.searchParams.set('c', category)
      const res = await fetch(url.toString())
      const json = await res.json()
      setResults(json.results || [])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mb-6">
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2">
        <input className="input w-full sm:flex-1 rounded border px-3 py-2" placeholder={`Search ${category ? category : 'everything'}...`} value={q} onChange={(e) => setQ(e.target.value)} />
        <button className="btn w-full sm:w-auto" type="submit">Search</button>
      </form>
      {loading && <div className="text-sm text-gray-500 mt-2">Searching...</div>}
      {results && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {results.map((p) => (
            <a key={p.id} href={`/post/${p.slug}`} className="group-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt={p.title} src={p.media?.[0]?.sourceUrl || (p.media?.[0]?.publicId ? `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${p.media?.[0]?.publicId}.jpg` : 'https://picsum.photos/seed/search/400/280')} />
              <h3 className="px-3 py-2 text-sm font-medium leading-tight">{p.title}</h3>
            </a>
          ))}
          {results.length === 0 && <div className="text-sm text-gray-500">No results</div>}
        </div>
      )}
    </div>
  )
}
