"use client"
import { useMemo, useState } from 'react'

type Item = { id: string; slug: string; title: string }

export default function TagList({ items }: { items: Item[] }) {
  const [q, setQ] = useState('')
  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase()
    if (!t) return items
    return items.filter((p) => p.title.toLowerCase().includes(t))
  }, [q, items])
  return (
    <div>
      <div className="mb-3 flex gap-2">
        <input className="rounded border px-3 py-2 w-full" placeholder="Search in tag..." value={q} onChange={(e) => setQ(e.target.value)} />
        <button className="px-3 py-2 rounded border" type="button" onClick={() => setQ(q)}>Search</button>
      </div>
      <ul className="space-y-2">
        {filtered.map((p) => (
          <li key={p.id}><a className="underline" href={`/post/${p.slug}`}>{p.title}</a></li>
        ))}
        {filtered.length === 0 && <li className="text-sm text-gray-600">No posts match.</li>}
      </ul>
    </div>
  )
}

