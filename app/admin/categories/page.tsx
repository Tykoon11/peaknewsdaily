import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import AdminConfirmButton from '@/components/admin-confirm-button'
import { redirect } from 'next/navigation'

export const metadata = { title: 'Categories' }

export default async function AdminCategoriesPage() {
  const session = await auth()
  if (!session?.user || !['editor', 'admin'].includes((session.user as any).role)) redirect('/')
  const cats = await prisma.category.findMany({ orderBy: { name: 'asc' }, include: { _count: { select: { posts: true } } } })
  return (
    <main className="container py-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Manage Categories</h1>
        <div className="text-sm flex gap-4">
          <Link className="underline" href="/admin">Review Queue</Link>
          <Link className="underline" href="/admin/posts">Manage Posts</Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="border rounded p-4">
          <h2 className="font-semibold mb-3">Create Category</h2>
          <form action="/admin/categories/create" method="post" className="space-y-3">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input name="name" className="mt-1 w-full rounded border px-3 py-2" required placeholder="e.g. Sports" />
            </div>
            <button className="px-3 py-2 rounded bg-black text-white" type="submit">Create</button>
          </form>
        </section>
        <section className="border rounded p-4">
          <h2 className="font-semibold mb-3">Existing</h2>
          <ul className="divide-y">
            {cats.map((c) => (
              <li key={c.id} className="py-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-medium">{c.name}</div>
                    <div className="text-xs text-gray-600">/{c.slug} · {c._count?.posts ?? 0} posts</div>
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
                      disabled={(c as any)._count?.posts > 0}
                      danger
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
