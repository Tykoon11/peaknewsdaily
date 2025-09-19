import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'

export const revalidate = 300

export default async function TopicPage({ params }: { params: { slug: string } }) {
  const topic = await prisma.topic.findUnique({
    where: { slug: params.slug },
  })

  if (!topic) notFound()

  const newsItems = await prisma.newsItem.findMany({
    where: { topicSlug: params.slug },
    orderBy: { publishedAt: 'desc' },
    take: 50,
    include: {
      topic: true,
    },
  })

  const allTopics = await prisma.topic.findMany({
    orderBy: { title: 'asc' },
    include: {
      _count: {
        select: { NewsItem: true },
      },
    },
  })

  return (
    <>
      {/* Premium Topic Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-indigo-400 to-purple-500 dark:from-blue-400 dark:to-indigo-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-purple-400 to-pink-500 dark:from-purple-400 dark:to-blue-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:32px_32px]"></div>
        
        <div className="relative container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm sm:text-base text-indigo-200/80 mb-6 sm:mb-8">
              <Link href="/news" className="hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                </svg>
                News
              </Link>
              <svg className="w-4 h-4 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="capitalize">{topic.title}</span>
            </nav>
            
            {/* Topic Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse mr-2 sm:mr-3"></div>
              TOPIC • {newsItems.length} ARTICLES
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-purple-200 leading-tight capitalize">
              {topic.title}
            </h1>
            
            {topic.description && (
              <p className="text-base sm:text-xl lg:text-2xl text-indigo-100/80 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
                {topic.description}
              </p>
            )}

            {/* Topic Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl shadow-purple-500/10">
                <div className="text-xl sm:text-3xl font-black text-white mb-1">{newsItems.length}</div>
                <div className="text-indigo-200/80 font-medium text-xs sm:text-sm">Total Articles</div>
              </div>
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl shadow-indigo-500/10">
                <div className="text-xl sm:text-3xl font-black text-indigo-400 mb-1">
                  {newsItems.length > 0 ? Math.ceil((Date.now() - new Date(newsItems[0].publishedAt).getTime()) / (1000 * 60 * 60 * 24)) : 0}d
                </div>
                <div className="text-indigo-200/80 font-medium text-xs sm:text-sm">Since Latest</div>
              </div>
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl shadow-purple-500/10">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="text-xl sm:text-3xl font-black text-green-400">LIVE</div>
                </div>
                <div className="text-indigo-200/80 font-medium text-xs sm:text-sm">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-3">
            
            {/* Articles List */}
            <div className="lg:col-span-2">
              {newsItems.length === 0 ? (
                <div className="text-center py-12 sm:py-16 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-2xl border border-slate-200 dark:border-gray-700">
                  <div className="p-6 sm:p-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-gray-100 mb-2">No Articles Yet</h3>
                  <p className="text-slate-600 dark:text-gray-300">
                    No articles found for this topic yet. Check back soon for updates!
                  </p>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  {newsItems.map((item, index) => (
                    <article
                      key={item.id}
                      className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-gray-700 overflow-hidden shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {/* Featured Article (First One) */}
                      {index === 0 && (
                        <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]"></div>
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-indigo-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                              FEATURED
                            </span>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-black/50 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                              {formatDistanceToNow(new Date(item.publishedAt))} ago
                            </span>
                          </div>
                        </div>
                      )}
                      
                      <div className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-500 dark:text-gray-400 mb-3">
                          <span className="font-medium">{item.sourceName}</span>
                          <span className="hidden sm:inline">•</span>
                          <time className="text-slate-400 dark:text-gray-500">{formatDistanceToNow(new Date(item.publishedAt))} ago</time>
                        </div>
                        
                        <Link href={`/news/${item.slug}`} className="block">
                          <h2 className={`font-bold text-slate-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2 sm:mb-3 leading-tight ${
                            index === 0 ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                          }`}>
                            {item.title}
                          </h2>
                          {item.excerpt && (
                            <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base line-clamp-3 leading-relaxed">
                              {item.excerpt}
                            </p>
                          )}
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 sm:space-y-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-indigo-100/50 dark:border-gray-600 shadow-lg dark:shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100">All Topics</h3>
                </div>
                
                <div className="space-y-2">
                  {allTopics.map((t) => (
                    <Link
                      key={t.id}
                      href={`/news/topic/${t.slug}`}
                      className={`block p-3 sm:p-4 rounded-lg transition-all capitalize group ${
                        t.slug === params.slug
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                          : 'bg-white dark:bg-gray-700 border border-indigo-100/50 dark:border-gray-600 hover:border-indigo-200 dark:hover:border-gray-500 hover:shadow-md dark:hover:shadow-xl'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className={`font-medium ${t.slug === params.slug ? 'text-white' : 'text-slate-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'}`}>
                          {t.title}
                        </span>
                        <span className={`text-sm ${t.slug === params.slug ? 'text-white/80' : 'text-slate-500 dark:text-gray-400'}`}>
                          {t._count.NewsItem}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}

export async function generateStaticParams() {
  if (!process.env.DATABASE_URL) {
    return []
  }
  
  try {
    const topics = await prisma.topic.findMany({
      select: { slug: true },
    })

    return topics.map((topic) => ({
      slug: topic.slug,
    }))
  } catch (error) {
    console.warn('Failed to fetch topics for static generation:', error)
    return []
  }
}