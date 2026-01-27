import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import MarketOverview from '@/components/market-overview'
import EconomicCalendarPreview from '@/components/economic-calendar-preview'
import FreshNewsSection from '@/components/fresh-news-section'
import DataDisclaimer from '@/components/data-disclaimer'
import { PILLARS, ARTICLES } from '@/app/education/_data/articles'
import { cachedQuery } from '@/lib/cache'

export const revalidate = 0 // Force fresh data always - no cache - FINAL FIX

interface Topic {
  id: string
  slug: string
  title: string
  description?: string | null
  _count: {
    NewsItem: number
  }
}


export default async function HomePage() {
  let trendingTopics: Topic[] = []

  if (process.env.DATABASE_URL) {
    try {
      // Get trending topics with caching to reduce DB hits
      trendingTopics = await cachedQuery(
        'homepage-topics',
        () => prisma.topic.findMany({
          include: {
            _count: { select: { NewsItem: true } }
          },
          orderBy: { NewsItem: { _count: 'desc' } }
        }),
        900 // 15 minutes
      )
    } catch (error) {
      console.warn('Failed to fetch homepage data:', error)
    }
  }
  
  return (
    <>
      {/* Clean Hero Section */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Live Market Data & News
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Real-time cryptocurrency prices, market analysis, and financial news for informed trading decisions.
            </p>

            {/* Simple Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
                <div className="text-sm text-gray-500">Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">15+</div>
                <div className="text-sm text-gray-500">Crypto Assets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">1min</div>
                <div className="text-sm text-gray-500">Updates</div>
              </div>
            </div>

            {/* Simple CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/markets" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                View Markets
              </Link>
              <Link href="/education" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors">
                Learn Trading
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          
          {/* Market Overview Section */}
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Live Market Overview</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Real-time data from global financial markets</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 dark:text-green-300 text-sm font-medium">LIVE</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <MarketOverview />
              </div>
            </div>
          </div>

          {/* Economic Calendar Section */}
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Economic Calendar</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Upcoming events that move markets</p>
              </div>
              <div className="p-6">
                <EconomicCalendarPreview />
              </div>
            </div>
          </div>

          {/* Trading Education Section */}
          <section className="mb-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Trading Education</h2>
              <p className="text-gray-600 dark:text-gray-400">Learn trading basics and advanced strategies</p>
            </div>
            
            {/* Featured Education Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {PILLARS.slice(0, 4).map((pillar) => (
                <Link
                  key={pillar.id}
                  href={pillar.slug}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {pillar.intro}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {ARTICLES.filter(a => a.pillar === pillar.id).length} guides
                    </span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link 
                href="/education" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                View All Education
              </Link>
            </div>
          </section>

          {/* FRESH Live Market News - NO CACHE */}
          <FreshNewsSection />

          {/* Market Topics */}
          <section className="mb-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Market Topics</h2>
              <p className="text-gray-600 dark:text-gray-400">Browse financial news by category</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {trendingTopics.map((topic) => (
                <Link
                  key={topic.id}
                  href={`/news/topic/${topic.slug}`}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white capitalize">
                      {topic.title}
                    </h3>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium px-2 py-1 rounded">
                      {topic._count.NewsItem}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {topic.description || 'Latest insights and analysis in this market category.'}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Market Data Disclaimer */}
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <DataDisclaimer />
          </div>
        </div>
      </main>
    </>
  )
}

