import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'

export const revalidate = 300

export async function generateMetadata() {
  return {
    title: 'Live Market News',
    description: 'Real-time updates on trading, investing, and cryptocurrency markets with professional analysis and insights',
    openGraph: {
      title: 'Live Market News - PeakNewsDaily',
      description: 'Real-time updates on trading, investing, and cryptocurrency markets',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Live Market News - PeakNewsDaily',
      description: 'Real-time updates on trading, investing, and cryptocurrency markets',
    },
  }
}

export default async function NewsPage() {
  let topics: Array<any> = []
  let latestNews: Array<any> = []
  let featuredNews: Array<any> = []
  let breakingNews: Array<any> = []

  if (process.env.DATABASE_URL) {
    try {
      topics = await prisma.topic.findMany({
        orderBy: { title: 'asc' },
        include: {
          NewsItem: {
            orderBy: { publishedAt: 'desc' },
            take: 5,
          },
          _count: {
            select: {
              NewsItem: true
            }
          }
        },
      })

      latestNews = await prisma.newsItem.findMany({
        orderBy: { publishedAt: 'desc' },
        take: 20,
        include: {
          topic: true,
        },
      })

      featuredNews = latestNews.slice(0, 4)
      breakingNews = latestNews.slice(4, 8)
    } catch (error) {
      console.warn('Failed to fetch news data:', error)
    }
  }

  return (
    <>
      {/* Premium News Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-red-900 to-orange-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-red-400 to-orange-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:32px_32px]"></div>
        
        <div className="relative container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Breaking News Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-red-500/20 border border-red-400/30 text-red-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse mr-2 sm:mr-3"></div>
              <span className="hidden sm:inline">BREAKING NEWS • MARKET UPDATES • </span>LIVE COVERAGE
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-red-100 to-orange-200 leading-tight">
              Financial News
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-amber-400">
                Command Center
              </span>
            </h1>
            
            <p className="text-base sm:text-xl lg:text-2xl text-red-100/80 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Real-time market coverage, breaking news, and professional analysis from global financial markets.
            </p>

            {/* Live Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl shadow-red-500/10">
                <div className="text-xl sm:text-3xl font-black text-white mb-1">{latestNews.length}</div>
                <div className="text-red-200/80 font-medium text-xs sm:text-sm">Stories Today</div>
              </div>
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl shadow-orange-500/10">
                <div className="text-xl sm:text-3xl font-black text-orange-400 mb-1">{topics.length}</div>
                <div className="text-red-200/80 font-medium text-xs sm:text-sm">News Topics</div>
              </div>
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl shadow-amber-500/10">
                <div className="text-xl sm:text-3xl font-black text-amber-400 mb-1">24/7</div>
                <div className="text-red-200/80 font-medium text-xs sm:text-sm">Coverage</div>
              </div>
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl shadow-red-500/10">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="text-xl sm:text-3xl font-black text-green-400">LIVE</div>
                </div>
                <div className="text-red-200/80 font-medium text-xs sm:text-sm">Real-time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-gradient-to-b from-slate-50 to-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          
          {/* Featured Stories */}
          <section className="mb-12 sm:mb-16 lg:mb-20">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl sm:rounded-2xl shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-gray-100">Featured Stories</h2>
                <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base">Top market-moving news and analysis</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              {featuredNews.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/news/${item.slug}`}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 dark:border-gray-700"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <div className="aspect-video bg-gradient-to-br from-red-500 to-orange-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]"></div>
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-red-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm capitalize">
                        {item.topic?.title || 'Market News'}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 bg-black/50 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        {formatDistanceToNow(new Date(item.publishedAt))} ago
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 relative z-20">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-gray-100 mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-tight line-clamp-2">
                      {item.title}
                    </h3>
                    {item.excerpt && (
                      <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base mb-4 line-clamp-3 leading-relaxed">
                        {item.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-gray-400">
                        {item.sourceName}
                      </span>
                      <svg className="w-5 h-5 text-slate-400 dark:text-gray-500 group-hover:text-red-500 dark:group-hover:text-red-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Latest Stories */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl sm:rounded-2xl shadow-lg">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-gray-100">Latest Stories</h2>
                  <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base">Real-time market updates and analysis</p>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {latestNews.slice(4).map((item, index) => (
                  <article
                    key={item.id}
                    className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-gray-700 p-4 sm:p-6 hover:shadow-lg hover:border-slate-300 dark:hover:border-gray-600 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-500 dark:text-gray-400 mb-3">
                      <Link
                        href={`/news/topic/${item.topic.slug}`}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:from-blue-600 hover:to-indigo-700 transition-colors capitalize font-medium w-fit"
                      >
                        {item.topic.title}
                      </Link>
                      <span className="hidden sm:inline">•</span>
                      <span className="font-medium">{item.sourceName}</span>
                      <span className="hidden sm:inline">•</span>
                      <time className="text-slate-400 dark:text-gray-500">{formatDistanceToNow(new Date(item.publishedAt))} ago</time>
                    </div>
                    <Link href={`/news/${item.slug}`} className="block">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 sm:mb-3 leading-tight">
                        {item.title}
                      </h3>
                      {item.excerpt && (
                        <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base line-clamp-2 leading-relaxed">
                          {item.excerpt}
                        </p>
                      )}
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 sm:space-y-8">
              {/* Breaking News */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:bg-gradient-to-br dark:from-red-900/20 dark:to-orange-900/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-red-100/50 dark:border-red-800/50 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100">Breaking News</h3>
                </div>
                
                <div className="space-y-4">
                  {breakingNews.map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.slug}`}
                      className="block group"
                    >
                      <h4 className="font-semibold text-slate-800 dark:text-gray-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors text-sm sm:text-base leading-tight line-clamp-2 mb-2">
                        {item.title}
                      </h4>
                      <div className="text-xs text-slate-500 dark:text-gray-400">
                        {formatDistanceToNow(new Date(item.publishedAt))} ago • {item.sourceName}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Topics */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:bg-gradient-to-br dark:from-gray-800 dark:to-blue-900/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-100/50 dark:border-gray-700 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100">News Topics</h3>
                </div>
                
                <div className="space-y-4">
                  {topics.slice(0, 6).map((topic) => (
                    <Link
                      key={topic.id}
                      href={`/news/topic/${topic.slug}`}
                      className="block group bg-white dark:bg-gray-700 rounded-lg p-4 border border-blue-100/50 dark:border-gray-600 hover:border-blue-200 dark:hover:border-gray-500 hover:shadow-md transition-all"
                    >
                      <h4 className="font-semibold text-slate-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors capitalize mb-1 text-sm sm:text-base">
                        {topic.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 mb-2 line-clamp-2">
                        {topic.description || 'Latest updates and analysis'}
                      </p>
                      <div className="text-xs text-slate-500 dark:text-gray-400">
                        {topic._count?.NewsItem || 0} articles
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