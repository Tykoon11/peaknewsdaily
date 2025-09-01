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
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Review Queue</h1>
            <p className="opacity-90">Review and moderate submitted content</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-medium">{subs.length} pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Link 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border hover:bg-gray-50 transition-colors text-sm font-medium" 
          href="/admin/posts"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          Manage Posts
        </Link>
        <Link 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border hover:bg-gray-50 transition-colors text-sm font-medium" 
          href="/admin/categories"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" />
          </svg>
          Categories
        </Link>
      </div>

      <AdminSubmissionsSearch defaultQuery={q} />
      
      {subs.length === 0 ? (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">All caught up!</h3>
            <p className="text-gray-500">No pending submissions to review.</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {subs.map((s) => (
            <div key={s.id} className="bg-white rounded-xl border hover:shadow-lg transition-all duration-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {/* Enhanced Thumbnail */}
                  {s.post?.media?.[0] ? (
                    <div className="relative flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt={s.post?.title || 'thumbnail'}
                        className="w-24 h-18 object-cover rounded-lg"
                        src={
                          (s.post.media[0] as any).sourceUrl ||
                          (process.env.CLOUDINARY_CLOUD_NAME && s.post.media[0].publicId
                            ? `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/${s.post.media[0].kind === 'image' ? 'image' : 'video'}/upload/${s.post.media[0].publicId}${s.post.media[0].kind === 'image' ? '' : '.jpg'}`
                            : 'https://picsum.photos/seed/queued/320/220')
                        }
                      />
                      {s.post.media[0].kind === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/50 rounded-full p-2">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-24 h-18 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{s.post?.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {s.submitter?.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {new Date(s.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <form action={`/admin/approve/${s.id}`} method="post">
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Approve
                        </button>
                      </form>
                      <form action={`/admin/reject/${s.id}`} method="post">
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm font-medium">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Reject
                        </button>
                      </form>
                      <Link 
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium" 
                        href={`/admin/preview/${s.post?.slug}`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Preview
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
