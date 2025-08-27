import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export const metadata = { title: 'Posts' }

export default async function AdminPostsPage({ searchParams }: { searchParams?: { q?: string } }) {
  const session = await auth()
  if (!session?.user || !['editor', 'admin'].includes((session.user as any).role)) redirect('/')
  const q = (searchParams?.q || '').trim()
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
        : {})
    },
    orderBy: [{ updatedAt: 'desc' }],
    take: 50,
    select: { id: true, slug: true, title: true, status: true, publishedAt: true }
  })
  return (
    <main className="container py-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Manage Posts</h1>
        <div className="text-sm flex gap-3">
          <Link className="underline" href="/admin">Review Queue</Link>
        </div>
      </div>
      <form className="mb-4">
        <input className="rounded border px-3 py-2 w-full" name="q" placeholder="Search posts..." defaultValue={q} />
      </form>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2 pr-4">Title</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2 pr-4">Published</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="py-2 pr-4">
                  <Link href={`/post/${p.slug}`} className="underline">{p.title}</Link>
                </td>
                <td className="py-2 pr-4">{p.status}</td>
                <td className="py-2 pr-4">{p.publishedAt ? new Date(p.publishedAt).toLocaleString() : '—'}</td>
                <td className="py-2 flex gap-2">
                  <Link href={`/admin/posts/${p.id}/edit`} className="px-3 py-1 rounded border">Edit</Link>
                  {p.status === 'published' ? (
                    <form action={`/admin/posts/${p.id}/unpublish`} method="post">
                      <button className="px-3 py-1 rounded border">Unpublish</button>
                    </form>
                  ) : (
                    <form action={`/admin/posts/${p.id}/publish`} method="post">
                      <button className="px-3 py-1 rounded bg-black text-white">Publish</button>
                    </form>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
