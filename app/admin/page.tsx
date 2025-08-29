import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export const metadata = { title: 'Admin' }

export default async function Admin() {
  const session = await auth()
  if (!session?.user || !['editor', 'admin'].includes(session.user.role as any)) redirect('/')
  const subs = await prisma.submission.findMany({
    where: { status: 'pending' },
    include: { post: true, submitter: true },
    orderBy: { createdAt: 'asc' }
  })
  return (
    <main className="container py-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Review Queue</h1>
        <div className="text-sm flex gap-4">
          <Link className="underline" href="/admin/posts">Manage Posts</Link>
          <Link className="underline" href="/admin/categories">Manage Categories</Link>
        </div>
      </div>
      <ul className="space-y-3">
        {subs.map((s) => (
          <li key={s.id} className="border rounded p-3">
            <div className="font-medium">{s.post?.title}</div>
            <div className="text-sm text-gray-600">Submitted by {s.submitter?.email}</div>
            <div className="mt-2 flex gap-2">
              <form action={`/admin/approve/${s.id}`} method="post">
                <button className="px-3 py-1 rounded bg-black text-white text-sm">Approve</button>
              </form>
              <form action={`/admin/reject/${s.id}`} method="post">
                <button className="px-3 py-1 rounded border text-sm">Reject</button>
              </form>
              <Link className="text-sm underline" href={`/post/${s.post?.slug}`}>Preview</Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
