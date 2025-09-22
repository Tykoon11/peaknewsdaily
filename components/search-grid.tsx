"use client"
import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'

type Item = { id: string; slug: string; title: string; description?: string | null; media?: { publicId?: string | null; sourceUrl?: string | null }[] }

export default function SearchGrid({ category }: { category?: string }) {
  const [q, setQ] = useState('')
  const [results, setResults] = useState<Item[] | null>(null)
  const [loading, setLoading] = useState(false)
  const ctrl = useRef<AbortController | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const query = q.trim()
    if (!query) { setResults([]); return }
    setLoading(true)
    try {
      const url = new URL('/api/search', window.location.origin)
      url.searchParams.set('q', query)
      if (category) url.searchParams.set('c', category)
      ctrl.current?.abort()
      ctrl.current = new AbortController()
      const res = await fetch(url.toString(), { signal: ctrl.current.signal })
      const json = await res.json()
      setResults(json.results || [])
    } finally {
      setLoading(false)
    }
  }

  // Live search with debounce
  const debouncedQ = useDebounce(q, 300)
  useEffect(() => {
    const query = debouncedQ.trim()
    if (query === '') { setResults(null); setLoading(false); return undefined }
    let cancelled = false
    ;(async () => {
      setLoading(true)
      try {
        const url = new URL('/api/search', window.location.origin)
        url.searchParams.set('q', query)
        if (category) url.searchParams.set('c', category)
        ctrl.current?.abort()
        ctrl.current = new AbortController()
        const res = await fetch(url.toString(), { signal: ctrl.current.signal })
        if (cancelled) return
        const json = await res.json()
        setResults(json.results || [])
      } catch (e) {
        // ignore aborted
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [debouncedQ, category])

  return (
    <div className="mb-4 xs:mb-6 mx-2 xs:mx-0">
      <form onSubmit={onSubmit} className="flex flex-col xs:flex-row gap-2 xs:gap-3">
        <input className="input w-full xs:flex-1 rounded-md xs:rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2.5 xs:py-2 text-sm xs:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400" placeholder={`Search ${category ? category : 'everything'}...`} value={q} onChange={(e) => setQ(e.target.value)} />
        <button className="btn w-full xs:w-auto bg-blue-600 hover:bg-blue-700 text-white px-3 xs:px-4 py-2.5 xs:py-2 rounded-md xs:rounded text-sm xs:text-base font-medium transition-colors" type="submit">Search</button>
      </form>
      {loading && <div className="text-xs xs:text-sm text-gray-500 dark:text-gray-400 mt-2">Searching...</div>}
      {results && (
        <div className="mt-3 xs:mt-4 grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4">
          {results.map((p) => (
            <a key={p.id} href={`/post/${p.slug}`} className="group-card block rounded-md xs:rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md dark:hover:shadow-xl transition-all overflow-hidden">
              <Image 
                alt={p.title} 
                src={p.media?.[0]?.sourceUrl || (p.media?.[0]?.publicId ? `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${p.media?.[0]?.publicId}.jpg` : 'https://picsum.photos/seed/search/400/280')} 
                width={400}
                height={280}
                className="w-full h-auto"
                sizes="(max-width: 480px) 100vw, 50vw"
              />
              <h3 className="px-2 xs:px-3 py-2 text-xs xs:text-sm font-medium leading-tight text-gray-900 dark:text-gray-100">{p.title}</h3>
            </a>
          ))}
          {results.length === 0 && <div className="text-xs xs:text-sm text-gray-500 dark:text-gray-400 col-span-full text-center py-4">No results</div>}
        </div>
      )}
    </div>
  )
}

// Small debounce hook
function useDebounce<T>(value: T, delay = 300) {
  const [v, setV] = useState(value)
  useEffect(() => {
    const t = setTimeout(() => setV(value), delay)
    return () => clearTimeout(t)
  }, [value, delay])
  return v
}
