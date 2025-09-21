import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import AdminPostsFilters from '@/components/admin-posts-filters'
import AdminDeleteButton from '@/components/admin-delete-button'

export const metadata = { title: 'Posts' }

export default async function AdminPostsPage({ searchParams }: { searchParams?: { q?: string; c?: string } }) {
  const session = await auth()
  if (!session?.user || !['editor', 'admin'].includes((session.user as any).role)) redirect('/')
  const q = (searchParams?.q || '').trim()
  const c = (searchParams?.c || '').trim()
  const categories = await prisma.category.findMany({ orderBy: { name: 'asc' }, select: { slug: true, name: true } })
  const posts = await prisma.post.findMany({
    where: {
      deletedAt: null,
      ...(q
        ? {
            OR: [
              { title: { contains: q, mode: 'insensitive' } },
              { description: { contains: q, mode: 'insensitive' } }
            ]
          }
        : {}),
      ...(c ? { category: { is: { slug: c } } } : {})
    },
    orderBy: [{ updatedAt: 'desc' }],
    take: 50,
    select: { id: true, slug: true, title: true, status: true, publishedAt: true }
  })
  return (
    <main className="container px-2 xs:px-4 py-4 xs:py-6">
      <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between mb-3 xs:mb-4 gap-2 xs:gap-0">
        <h1 className="text-xl xs:text-2xl font-semibold">Manage Posts</h1>
        <div className="text-xs xs:text-sm flex flex-wrap gap-2 xs:gap-3">
          <Link className="underline" href="/admin">Review Queue</Link>
          <Link className="underline text-blue-600" href="/admin/education">Trading Education</Link>
        </div>
      </div>
      <div className="mb-3 xs:mb-4">
        <AdminPostsFilters categories={categories} defaultQuery={q} defaultCategory={c} />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs xs:text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-1.5 xs:py-2 pr-2 xs:pr-4">Title</th>
              <th className="py-1.5 xs:py-2 pr-2 xs:pr-4 hidden xs:table-cell">Status</th>
              <th className="py-1.5 xs:py-2 pr-2 xs:pr-4 hidden sm:table-cell">Published</th>
              <th className="py-1.5 xs:py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="py-1.5 xs:py-2 pr-2 xs:pr-4">
                  <Link href={`/post/${p.slug}`} className="underline block truncate max-w-[200px] xs:max-w-none">{p.title}</Link>
                  <div className="xs:hidden text-xs text-gray-500 mt-1">
                    {p.status} • {p.publishedAt ? new Date(p.publishedAt).toLocaleDateString() : 'Unpublished'}
                  </div>
                </td>
                <td className="py-1.5 xs:py-2 pr-2 xs:pr-4 hidden xs:table-cell">
                  <span className={`px-2 py-1 rounded-full text-xs ${p.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {p.status}
                  </span>
                </td>
                <td className="py-1.5 xs:py-2 pr-2 xs:pr-4 hidden sm:table-cell text-xs xs:text-sm">{p.publishedAt ? new Date(p.publishedAt).toLocaleString() : '—'}</td>
                <td className="py-1.5 xs:py-2">
                  <div className="flex flex-col xs:flex-row gap-1 xs:gap-2 items-start xs:items-center">
                    <Link href={`/admin/posts/${p.id}/edit`} className="px-2 xs:px-3 py-1 rounded border text-xs hover:bg-gray-50">Edit</Link>
                    {p.status === 'published' ? (
                      <form action={`/admin/posts/${p.id}/unpublish`} method="post">
                        <button className="px-2 xs:px-3 py-1 rounded border text-xs hover:bg-gray-50">Unpublish</button>
                      </form>
                    ) : (
                      <form action={`/admin/posts/${p.id}/publish`} method="post">
                        <button className="px-2 xs:px-3 py-1 rounded bg-black text-white text-xs hover:bg-gray-800">Publish</button>
                      </form>
                    )}
                    <AdminDeleteButton action={`/admin/posts/${p.id}/delete`} disabled={p.status === 'published'} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
