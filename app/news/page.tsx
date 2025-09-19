import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import NewsSearchFilter from '@/components/news-search-filter'

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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-red-400 to-orange-500 dark:from-blue-400 dark:to-indigo-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-orange-400 to-red-500 dark:from-purple-400 dark:to-blue-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-amber-400 to-orange-500 dark:from-emerald-400 dark:to-teal-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
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
          
          {/* Featured Breaking News */}
          <section className="mb-12 sm:mb-16 lg:mb-20">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl sm:rounded-2xl shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-gray-100">Breaking News</h2>
                <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base">Latest market-moving headlines</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredNews.map((item, index) => (
                <article
                  key={item.id}
                  className="group bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 p-6 hover:shadow-lg hover:border-slate-300 dark:hover:border-gray-600 transition-all duration-300"
                >
                  <div className="flex flex-col gap-2 text-xs sm:text-sm text-slate-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/news/topic/${item.topic.slug}`}
                        className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-full hover:from-red-600 hover:to-orange-700 transition-colors capitalize font-medium"
                      >
                        {item.topic?.title || 'Market News'}
                      </Link>
                      <span className="px-3 py-1 bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-300 rounded-full font-medium">
                        {formatDistanceToNow(new Date(item.publishedAt))} ago
                      </span>
                    </div>
                  </div>
                  <Link href={`/news/${item.slug}`} className="block">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-gray-100 mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-tight line-clamp-3">
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
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <div className="grid gap-8 lg:grid-cols-4">
            {/* Main News Feed with Search */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl sm:rounded-2xl shadow-lg">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-gray-100">All News Stories</h2>
                  <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base">Search and filter real-time market updates</p>
                </div>
              </div>
              
              <NewsSearchFilter initialNews={latestNews} topics={topics} />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 sm:space-y-8">
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
                  {topics.slice(0, 8).map((topic) => (
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

              {/* Live Updates Status */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:bg-gradient-to-br dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-green-100/50 dark:border-green-800/50 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100">Live Updates</h3>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-gray-300">News Feed</span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full font-medium">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-gray-300">Last Update</span>
                    <span className="text-slate-500 dark:text-gray-400">
                      {latestNews.length > 0 ? formatDistanceToNow(new Date(latestNews[0].publishedAt)) + ' ago' : 'N/A'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-gray-300">Articles Today</span>
                    <span className="text-slate-500 dark:text-gray-400 font-semibold">
                      {latestNews.length}
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}