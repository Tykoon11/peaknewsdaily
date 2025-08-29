"use client"
import { useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Cat = { slug: string; name: string }

export default function AdminPostsFilters({ categories, defaultQuery, defaultCategory }: { categories: Cat[]; defaultQuery?: string; defaultCategory?: string }) {
  const [q, setQ] = useState(defaultQuery || '')
  const [c, setC] = useState<string>(defaultCategory || '')
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()

  const update = useMemo(() => debounce((nextQ: string, nextC: string) => {
    const p = new URLSearchParams(params?.toString() || '')
    if (nextQ.trim()) p.set('q', nextQ.trim()); else p.delete('q')
    if (nextC) p.set('c', nextC); else p.delete('c')
    router.replace(`${pathname}?${p.toString()}`)
  }, 300), [router, pathname, params])

  useEffect(() => { return () => update.cancel?.() }, [update])

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    update.flush?.(q, c)
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        className="rounded border px-3 py-2 w-full sm:flex-1"
        placeholder="Search posts..."
        value={q}
        onChange={(e) => { const v = e.target.value; setQ(v); update(v, c) }}
      />
      <select
        className="rounded border px-3 py-2 w-full sm:w-56"
        value={c}
        onChange={(e) => { const v = e.target.value; setC(v); update(q, v) }}
        aria-label="Filter by category"
      >
        <option value="">All posts</option>
        {categories.map((cat) => (
          <option key={cat.slug} value={cat.slug}>{cat.name}</option>
        ))}
      </select>
      <button className="px-3 py-2 rounded border sm:w-auto" type="submit">Search</button>
    </form>
  )
}

function debounce<T extends (...args: any[]) => void>(fn: T, wait = 300) {
  let t: ReturnType<typeof setTimeout> | null = null
  function debounced(this: any, ...args: any[]) {
    if (t) clearTimeout(t)
    t = setTimeout(() => fn.apply(this, args), wait)
  }
  ;(debounced as any).cancel = () => { if (t) clearTimeout(t) }
  ;(debounced as any).flush = (...args: any[]) => {
    if (t) clearTimeout(t)
    fn.apply(null as any, args)
  }
  return debounced as T & { cancel?: () => void; flush?: (...args: any[]) => void }
}

