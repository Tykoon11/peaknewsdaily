"use client"
import AdminConfirmButton from '@/components/admin-confirm-button'
import { useMemo, useState } from 'react'

type Cat = { id: string; name: string; slug: string; postsCount: number }

export default function AdminCategoriesList({ items }: { items: Cat[] }) {
  const [q, setQ] = useState('')
  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase()
    if (!t) return items
    return items.filter((c) => c.name.toLowerCase().includes(t) || c.slug.toLowerCase().includes(t))
  }, [q, items])
  return (
    <div>
      <form className="mb-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
        <input className="rounded border px-3 py-2 w-full" placeholder="Search categories..." value={q} onChange={(e) => setQ(e.target.value)} />
        <button className="px-3 py-2 rounded border" type="submit">Search</button>
      </form>
      <ul className="divide-y">
        {filtered.map((c) => (
          <li key={c.id} className="py-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-medium">{c.name}</div>
                <div className="text-xs text-gray-600">/{c.slug} · {c.postsCount} posts</div>
              </div>
              <div className="flex items-center gap-2">
                <details>
                  <summary className="px-3 py-1 rounded border cursor-pointer select-none">Edit</summary>
                  <form action={`/admin/categories/${c.id}/update`} method="post" className="mt-2 flex flex-col gap-2">
                    <label className="text-xs">Name</label>
                    <input name="name" defaultValue={c.name} className="rounded border px-3 py-2" required />
                    <label className="text-xs">Slug (optional)</label>
                    <input name="slug" defaultValue={c.slug} className="rounded border px-3 py-2" />
                    <button className="px-3 py-1 rounded bg-black text-white w-max" type="submit">Save</button>
                  </form>
                </details>
                <AdminConfirmButton
                  action={`/admin/categories/${c.id}/delete`}
                  label="🗑 Delete"
                  confirm="Delete this category? Only possible when it has no posts."
                  disabled={c.postsCount > 0}
                  danger
                />
              </div>
            </div>
          </li>
        ))}
        {filtered.length === 0 && <li className="py-3 text-sm text-gray-600">No matching categories.</li>}
      </ul>
    </div>
  )
}

