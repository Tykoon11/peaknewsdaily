import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { formatDistanceToNow } from 'date-fns'
import MarketOverview from '@/components/market-overview'
import EconomicCalendarPreview from '@/components/economic-calendar-preview'
import DataDisclaimer from '@/components/data-disclaimer'
import { PILLARS, ARTICLES } from '@/app/education/_data/articles'

export const revalidate = 300 // Cache for 5 minutes

interface NewsItem {
  id: string
  slug: string
  title: string
  excerpt?: string | null
  publishedAt: Date
  sourceName: string
  topic: {
    slug: string
    title: string
  }
}

interface Topic {
  id: string
  slug: string
  title: string
  description?: string | null
  _count: {
    NewsItem: number
  }
}

interface Post {
  id: string
  slug: string
  title: string
  description?: string | null
  createdAt: Date
}

export default async function HomePage() {
  let latestNews: NewsItem[] = []
  let trendingTopics: Topic[] = []
  let featuredPosts: Post[] = []

  if (process.env.DATABASE_URL) {
    try {
      // Get live trading/investing content
      const results = await Promise.all([
        // Latest RSS news items
        prisma.newsItem.findMany({
          orderBy: { publishedAt: 'desc' },
          take: 8,
          include: { topic: true }
        }),
        // Topics with news count
        prisma.topic.findMany({
          include: {
            _count: { select: { NewsItem: true } }
          },
          orderBy: { NewsItem: { _count: 'desc' } }
        }),
        // Our 3 featured trading posts
        prisma.post.findMany({
          where: { status: 'published' },
          orderBy: { createdAt: 'desc' },
          take: 3,
          select: { id: true, slug: true, title: true, description: true, createdAt: true }
        })
      ])
      
      latestNews = results[0]
      trendingTopics = results[1]
      featuredPosts = results[2]
    } catch (error) {
      console.warn('Failed to fetch homepage data:', error)
    }
  }
  
  return (
    <>
      {/* Hero Section with Premium Financial Styling */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px] xs:bg-[size:16px_16px] sm:bg-[size:20px_20px] lg:bg-[size:24px_24px]"></div>
        
        <div className="relative container mx-auto px-3 xs:px-4 py-8 xs:py-12 sm:py-16 lg:py-20">
          <div className="text-center max-w-5xl mx-auto">
            {/* Breaking News Ticker */}
            <div className="inline-flex items-center px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-full bg-red-500/20 border border-red-400/30 text-red-300 text-xs sm:text-sm font-medium mb-4 xs:mb-6 sm:mb-8 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-red-400 rounded-full animate-pulse mr-1.5 xs:mr-2"></div>
              <span className="hidden xs:inline sm:hidden">LIVE MARKET DATA • </span>
              <span className="hidden sm:inline">LIVE MARKET DATA • REAL-TIME UPDATES • </span>
              <span className="xs:hidden">LIVE</span>
              <span className="hidden xs:inline">PROFESSIONAL ANALYSIS</span>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-3 xs:mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-indigo-200 leading-tight px-1 xs:px-2 sm:px-0">
              <span className="block xs:inline">Live Market News</span>
              <span className="hidden xs:inline"> &</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400">
                Trading Insights
              </span>
            </h1>
            
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100/80 mb-4 xs:mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 xs:px-4 sm:px-0">
              <span className="block xs:inline">Professional-grade financial intelligence,</span>
              <span className="xs:hidden"> </span>
              <span className="block xs:inline">real-time market data, and expert analysis for serious traders and investors.</span>
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-2 xs:gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto mb-6 xs:mb-8 sm:mb-12 px-2 xs:px-4 sm:px-0">
              <div className="text-center">
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400 mb-0.5 xs:mb-1">24/7</div>
                <div className="text-blue-200/70 text-xs xs:text-xs sm:text-sm leading-tight">
                  <span className="block xs:hidden">Coverage</span>
                  <span className="hidden xs:block">Market Coverage</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-0.5 xs:mb-1">500+</div>
                <div className="text-blue-200/70 text-xs xs:text-xs sm:text-sm leading-tight">
                  <span className="block xs:hidden">Assets</span>
                  <span className="hidden xs:block">Assets Tracked</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-violet-400 mb-0.5 xs:mb-1">5min</div>
                <div className="text-blue-200/70 text-xs xs:text-xs sm:text-sm leading-tight">
                  <span className="block xs:hidden">Updates</span>
                  <span className="hidden xs:block">Update Interval</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center px-2 xs:px-4 sm:px-0">
              <Link href="/markets" className="inline-flex items-center justify-center px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-md xs:rounded-lg sm:rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-1 transition-all duration-200 group text-xs xs:text-sm sm:text-base">
                <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1.5 xs:mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="xs:hidden">Markets</span>
                <span className="hidden xs:inline">View Live Markets</span>
              </Link>
              <Link href="/education" className="inline-flex items-center justify-center px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-md xs:rounded-lg sm:rounded-xl border border-white/20 hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-200 group text-xs xs:text-sm sm:text-base">
                <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1.5 xs:mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="xs:hidden">Learn</span>
                <span className="hidden xs:inline">Trading Education</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="bg-gradient-to-b from-slate-50 to-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-3 xs:px-4 py-6 xs:py-8 sm:py-12 lg:py-16">
          
          {/* Market Overview Section */}
          <div className="mb-8 xs:mb-12 sm:mb-16 lg:mb-20">
            <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 shadow-2xl shadow-slate-900/20 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
              <div className="absolute top-0 right-0 w-32 xs:w-48 sm:w-64 h-32 xs:h-48 sm:h-64 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="flex flex-col xs:flex-row xs:items-center gap-3 xs:gap-4 mb-4 xs:mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 xs:gap-3 sm:gap-4">
                    <div className="p-1.5 xs:p-2 sm:p-3 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg">
                      <svg className="w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">Live Market Overview</h2>
                      <p className="text-slate-300 text-xs xs:text-sm sm:text-base">Real-time data from global financial markets</p>
                    </div>
                  </div>
                  <div className="xs:ml-auto">
                    <div className="flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 bg-emerald-500/20 rounded-full border border-emerald-400/30 w-fit">
                      <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-emerald-300 text-xs xs:text-xs sm:text-sm font-medium">LIVE</span>
                    </div>
                  </div>
                </div>
                
                <MarketOverview />
              </div>
            </div>
          </div>

          {/* Economic Calendar Section */}
          <div className="mb-8 xs:mb-12 sm:mb-16 lg:mb-20">
            <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 border border-blue-100/50 dark:border-gray-700 shadow-xl shadow-blue-500/10 dark:shadow-gray-900/20">
              <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-4 xs:mb-6">
                <div className="p-1.5 xs:p-2 sm:p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg">
                  <svg className="w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-gray-100 leading-tight">Economic Calendar</h2>
                  <p className="text-slate-600 dark:text-gray-300 text-xs xs:text-sm sm:text-base">Upcoming events that move markets</p>
                </div>
              </div>
              
              <EconomicCalendarPreview />
            </div>
          </div>

          {/* Trading Education Section */}
          <section className="mb-8 xs:mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center mb-6 xs:mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 mb-2 xs:mb-3 sm:mb-4">
                <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-lg xs:rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-gray-100 mb-2 xs:mb-3 sm:mb-4 px-2 xs:px-4 sm:px-0 leading-tight">Master Trading & Investing</h2>
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto px-3 xs:px-4 sm:px-0">
                <span className="block xs:inline">From beginner basics to advanced strategies,</span>
                <span className="xs:hidden"> </span>
                <span className="block xs:inline">elevate your financial knowledge with our comprehensive education platform.</span>
              </p>
            </div>
            
            {/* Featured Education Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {PILLARS.slice(0, 4).map((pillar, index) => {
                const gradients = [
                  'from-emerald-500 to-teal-600',
                  'from-blue-500 to-indigo-600', 
                  'from-purple-500 to-pink-600',
                  'from-orange-500 to-red-600'
                ];
                const bgGradients = [
                  'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
                  'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
                  'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20', 
                  'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
                ];
                return (
                  <Link
                    key={pillar.id}
                    href={pillar.slug}
                    className={`group relative bg-gradient-to-br ${bgGradients[index]} rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
                  >
                    {/* Background decoration */}
                    <div className={`absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br ${gradients[index]} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                    
                    <div className={`inline-flex p-2 sm:p-3 bg-gradient-to-r ${gradients[index]} rounded-lg sm:rounded-xl shadow-md mb-3 sm:mb-4`}>
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-slate-800 dark:text-gray-100 group-hover:text-slate-900 dark:group-hover:text-gray-50 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                      {pillar.intro}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">
                        {ARTICLES.filter(a => a.pillar === pillar.id).length} guides
                      </span>
                      <svg className="w-4 h-4 text-slate-400 dark:text-gray-500 group-hover:text-slate-600 dark:group-hover:text-gray-300 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Featured Articles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {ARTICLES
                .filter(a => a.status === 'published' || a.pillar === 'risk-management')
                .slice(0, 3)
                .map((article, index) => {
                  const articleGradients = [
                    'from-rose-500 to-pink-600',
                    'from-cyan-500 to-blue-600', 
                    'from-violet-500 to-purple-600'
                  ];
                  return (
                    <Link
                      key={article.slug}
                      href={article.slug}
                      className="group relative bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-gray-700 p-4 sm:p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                      {/* Article number badge */}
                      <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${articleGradients[index]} rounded-full flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-bold text-xs sm:text-sm">{index + 1}</span>
                      </div>
                      
                      <div className={`inline-flex p-1.5 sm:p-2 bg-gradient-to-r ${articleGradients[index]} rounded-md sm:rounded-lg shadow-md mb-3 sm:mb-4`}>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-slate-800 dark:text-gray-100 group-hover:text-slate-900 dark:group-hover:text-gray-50 transition-colors leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                        {PILLARS.find(p => p.id === article.pillar)?.intro || 'Learn essential trading concepts and strategies.'}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                          {PILLARS.find(p => p.id === article.pillar)?.title}
                        </span>
                        <svg className="w-5 h-5 text-slate-400 dark:text-gray-500 group-hover:text-slate-600 dark:group-hover:text-gray-300 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </Link>
                  )
                })}
            </div>

            <div className="text-center mt-6 sm:mt-8">
              <Link 
                href="/education" 
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 group text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="hidden sm:inline">Explore All Education</span>
                <span className="sm:hidden">All Education</span>
              </Link>
            </div>
          </section>

          {/* Live Market News */}
          <section className="mb-12 sm:mb-16 lg:mb-20">
            <div className="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl shadow-red-900/20 overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(239,68,68,0.2),transparent_70%)]"></div>
              <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl sm:rounded-2xl shadow-lg w-fit">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">Breaking Market News</h2>
                      <p className="text-red-100 text-sm sm:text-base">Real-time updates from global markets</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-500/30 rounded-full border border-red-400/40 backdrop-blur-sm w-fit">
                      <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse"></div>
                      <span className="text-red-200 text-xs sm:text-sm font-medium">LIVE</span>
                    </div>
                  </div>
                  <Link 
                    href="/news" 
                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg sm:rounded-xl border border-white/20 hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-200 group text-sm sm:text-base w-fit"
                  >
                    <span className="hidden sm:inline">View All News</span>
                    <span className="sm:hidden">View All</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {latestNews.slice(0, 8).map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.slug}`}
                      className="group bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/20 p-4 sm:p-5 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <span className="text-xs bg-orange-500/80 text-white px-2 sm:px-3 py-1 rounded-full font-medium capitalize backdrop-blur-sm w-fit">
                          {item.topic?.title || 'Market News'}
                        </span>
                        <span className="text-xs text-red-200">
                          {item.publishedAt ? formatDistanceToNow(new Date(item.publishedAt)) + ' ago' : 'Recently'}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-medium mb-2 line-clamp-3 text-white group-hover:text-red-200 transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <div className="text-xs text-red-300">
                        {item.sourceName}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Market Topics */}
          <section className="mb-12 sm:mb-16 lg:mb-20">
            <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-900/20 overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.15),transparent_70%)]"></div>
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl shadow-lg">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Market Topics</h2>
                    <p className="text-slate-300 text-sm sm:text-base">Explore trending financial categories</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {trendingTopics.map((topic, index) => {
                    const topicGradients = [
                      'from-emerald-500 to-teal-600',
                      'from-blue-500 to-indigo-600',
                      'from-purple-500 to-pink-600',
                      'from-orange-500 to-red-600',
                      'from-cyan-500 to-blue-500',
                      'from-violet-500 to-purple-500',
                      'from-rose-500 to-pink-500',
                      'from-amber-500 to-orange-500'
                    ];
                    return (
                      <Link
                        key={topic.id}
                        href={`/news/topic/${topic.slug}`}
                        className="group relative bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/20 p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden"
                      >
                        {/* Topic number badge */}
                        <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${topicGradients[index % topicGradients.length]} rounded-full flex items-center justify-center shadow-lg`}>
                          <span className="text-white font-bold text-xs">{topic._count.NewsItem}</span>
                        </div>
                        
                        {/* Background decoration */}
                        <div className={`absolute -bottom-2 -right-2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${topicGradients[index % topicGradients.length]} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                        
                        <div className={`inline-flex p-1.5 sm:p-2 bg-gradient-to-r ${topicGradients[index % topicGradients.length]} rounded-md sm:rounded-lg shadow-md mb-3 sm:mb-4`}>
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                          </svg>
                        </div>
                        
                        <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white group-hover:text-slate-200 transition-colors capitalize leading-tight">
                          {topic.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                          {topic.description || 'Discover the latest insights and analysis in this market category.'}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            {topic._count.NewsItem} articles
                          </span>
                          <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-300 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Market Data Disclaimer */}
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-100/50 dark:border-gray-700 shadow-lg">
            <DataDisclaimer />
          </div>
        </div>
      </main>
    </>
  )
}

