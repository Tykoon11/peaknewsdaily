import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import AdminCategoriesList from '@/components/admin-categories-list'
import { redirect } from 'next/navigation'

export const metadata = { title: 'Categories' }

export default async function AdminCategoriesPage() {
  const session = await auth()
  if (!session?.user) redirect('/api/auth/signin')
  // Temporarily allow any authenticated user (for Google Ads review)
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
          <AdminCategoriesList items={cats.map((c) => ({ id: c.id, name: c.name, slug: c.slug, postsCount: c._count?.posts ?? 0 }))} />
        </section>
      </div>
    </main>
  )
}
