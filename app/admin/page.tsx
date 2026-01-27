import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import AdminSubmissionsSearch from '@/components/admin-submissions-search'

export const metadata = { title: 'Admin' }

export default async function Admin({ searchParams }: { searchParams?: { q?: string } }) {
  const session = await auth()
  if (!session?.user) redirect('/api/auth/signin')
  // Temporarily allow any authenticated user (for Google Ads review)
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
    <main className="container px-2 xs:px-4 py-4 xs:py-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl xs:rounded-2xl p-4 xs:p-6 mb-6 xs:mb-8 text-white">
        <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3 xs:gap-0">
          <div>
            <h1 className="text-2xl xs:text-3xl font-bold mb-1 xs:mb-2">Review Queue</h1>
            <p className="opacity-90 text-sm xs:text-base">Review and moderate submitted content</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 xs:px-4 py-1.5 xs:py-2">
              <span className="text-xs xs:text-sm font-medium">{subs.length} pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="flex flex-wrap gap-2 xs:gap-3 mb-4 xs:mb-6">
        <Link 
          className="inline-flex items-center gap-1 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-xs xs:text-sm font-medium text-gray-900 dark:text-gray-100" 
          href="/admin/posts"
        >
          <svg className="w-3 h-3 xs:w-4 xs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <span className="hidden xs:inline">Manage </span>Posts
        </Link>
        <Link 
          className="inline-flex items-center gap-1 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all text-xs xs:text-sm font-medium" 
          href="/admin/education"
        >
          <svg className="w-3 h-3 xs:w-4 xs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span className="hidden xs:inline">Trading </span>Education
        </Link>
        <Link 
          className="inline-flex items-center gap-1 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-xs xs:text-sm font-medium text-gray-900 dark:text-gray-100" 
          href="/admin/categories"
        >
          <svg className="w-3 h-3 xs:w-4 xs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" />
          </svg>
          Categories
        </Link>
      </div>

      <AdminSubmissionsSearch defaultQuery={q} />
      
      {subs.length === 0 ? (
        <div className="text-center py-8 xs:py-12">
          <div className="max-w-md mx-auto px-4">
            <svg className="w-12 h-12 xs:w-16 xs:h-16 mx-auto text-gray-400 mb-3 xs:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-base xs:text-lg font-medium text-gray-900 dark:text-gray-100 mb-1 xs:mb-2">All caught up!</h3>
            <p className="text-sm xs:text-base text-gray-500 dark:text-gray-400">No pending submissions to review.</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {subs.map((s) => (
            <div key={s.id} className="bg-white dark:bg-gray-800 rounded-lg xs:rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-xl transition-all duration-200 overflow-hidden">
              <div className="p-3 xs:p-4 lg:p-6">
                <div className="flex flex-col xs:flex-row xs:items-start gap-3 xs:gap-4">
                  {/* Enhanced Thumbnail */}
                  {s.post?.media?.[0] ? (
                    <div className="relative flex-shrink-0 xs:order-1">
                      {/* eslint-disable-next-line @next/next/next/no-img-element */}
                      <img
                        alt={s.post?.title || 'thumbnail'}
                        className="w-full xs:w-20 lg:w-24 h-32 xs:h-15 lg:h-18 object-cover rounded-lg"
                        src={
                          s.post.media[0].sourceUrl ||
                          (process.env.CLOUDINARY_CLOUD_NAME && s.post.media[0].publicId
                            ? `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/${s.post.media[0].kind === 'image' ? 'image' : 'video'}/upload/${s.post.media[0].publicId}${s.post.media[0].kind === 'image' ? '' : '.jpg'}`
                            : 'https://picsum.photos/seed/queued/320/220')
                        }
                      />
                      {s.post.media[0].kind === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/50 rounded-full p-1.5 xs:p-2">
                            <svg className="w-3 h-3 xs:w-4 xs:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-full xs:w-20 lg:w-24 h-32 xs:h-15 lg:h-18 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center xs:order-1">
                      <svg className="w-6 h-6 xs:w-7 xs:h-7 lg:w-8 lg:h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0 xs:order-2">
                    <h3 className="font-semibold text-sm xs:text-base text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">{s.post?.title}</h3>
                    <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4 text-xs xs:text-sm text-gray-600 dark:text-gray-300 mb-3">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 xs:w-4 xs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="truncate">{s.submitter?.email}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 xs:w-4 xs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {new Date(s.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col xs:flex-row gap-2 xs:gap-3">
                      <form action={`/admin/approve/${s.id}`} method="post" className="xs:flex-1">
                        <button className="w-full xs:w-auto inline-flex items-center justify-center gap-1 xs:gap-2 px-3 xs:px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-xs xs:text-sm font-medium">
                          <svg className="w-3 h-3 xs:w-4 xs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Approve
                        </button>
                      </form>
                      <form action={`/admin/reject/${s.id}`} method="post" className="xs:flex-1">
                        <button className="w-full xs:w-auto inline-flex items-center justify-center gap-1 xs:gap-2 px-3 xs:px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-xs xs:text-sm font-medium">
                          <svg className="w-3 h-3 xs:w-4 xs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Reject
                        </button>
                      </form>
                      <Link 
                        className="w-full xs:w-auto xs:flex-1 inline-flex items-center justify-center gap-1 xs:gap-2 px-3 xs:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-xs xs:text-sm font-medium" 
                        href={`/admin/preview/${s.post?.slug}`}
                      >
                        <svg className="w-3 h-3 xs:w-4 xs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
