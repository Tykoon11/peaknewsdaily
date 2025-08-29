"use client"
import { useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function AdminPostsSearch({ defaultQuery }: { defaultQuery?: string }) {
  const [q, setQ] = useState(defaultQuery || '')
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()

  const doSearch = useMemo(() => debounce((next: string) => {
    const p = new URLSearchParams(params?.toString() || '')
    if (next.trim()) p.set('q', next.trim())
    else p.delete('q')
    router.replace(`${pathname}?${p.toString()}`)
  }, 300), [router, pathname, params])

  useEffect(() => { return () => doSearch.cancel?.() }, [doSearch])

  function onChange(v: string) {
    setQ(v)
    doSearch(v)
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    doSearch.flush?.(q)
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <input className="rounded border px-3 py-2 w-full" name="q" placeholder="Search posts..." value={q} onChange={(e) => onChange(e.target.value)} />
      <button className="px-3 py-2 rounded border" type="submit">Search</button>
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

