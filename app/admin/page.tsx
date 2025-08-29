import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import AdminSubmissionsSearch from '@/components/admin-submissions-search'

export const metadata = { title: 'Admin' }

export default async function Admin({ searchParams }: { searchParams?: { q?: string } }) {
  const session = await auth()
  if (!session?.user || !['editor', 'admin'].includes(session.user.role as any)) redirect('/')
  const q = (searchParams?.q || '').trim()
  const subs = await prisma.submission.findMany({
    where: {
      status: 'pending',
      ...(q
        ? {
            OR: [
              { post: { is: { title: { contains: q, mode: 'insensitive' } } } },
              { submitter: { is: { email: { contains: q, mode: 'insensitive' } } } }
            ]
          }
        : {})
    },
    include: { post: { include: { media: true } }, submitter: true },
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
      <AdminSubmissionsSearch defaultQuery={q} />
      <ul className="space-y-3">
        {subs.map((s) => (
          <li key={s.id} className="border rounded p-3">
            <div className="flex items-start gap-3">
              {/* Thumbnail */}
              {s.post?.media?.[0] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt={s.post?.title || 'thumbnail'}
                  className="w-20 h-14 object-cover rounded"
                  src={
                    (s.post.media[0] as any).sourceUrl ||
                    (process.env.CLOUDINARY_CLOUD_NAME && s.post.media[0].publicId
                      ? `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/${s.post.media[0].kind === 'image' ? 'image' : 'video'}/upload/${s.post.media[0].publicId}${s.post.media[0].kind === 'image' ? '' : '.jpg'}`
                      : 'https://picsum.photos/seed/queued/320/220')
                  }
                />
              ) : null}
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{s.post?.title}</div>
                <div className="text-sm text-gray-600">Submitted by {s.submitter?.email}</div>
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              <form action={`/admin/approve/${s.id}`} method="post">
                <button className="px-3 py-1 rounded bg-black text-white text-sm">Approve</button>
              </form>
              <form action={`/admin/reject/${s.id}`} method="post">
                <button className="px-3 py-1 rounded border text-sm">Reject</button>
              </form>
              <Link className="text-sm underline" href={`/admin/preview/${s.post?.slug}`}>Preview</Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
