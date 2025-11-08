import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import LiveNewsSearch from '@/components/live-news-search'
import FreshNewsSection from '@/components/fresh-news-section'
import { cachedQuery } from '@/lib/cache'

export const revalidate = 0 // NO CACHE - Fresh data always

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
  NewsItem: Array<{
    id: string
    slug: string
    title: string
    publishedAt: Date
  }>
  _count: {
    NewsItem: number
  }
}

export default async function NewsPage() {
  let topics: Topic[] = []
  let latestNews: NewsItem[] = []

  if (process.env.DATABASE_URL) {
    try {
      // Cache topics for 10 minutes since they don't change often
      topics = await cachedQuery(
        'news-topics',
        () => prisma.topic.findMany({
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
        }),
        600 // 10 minutes
      )

      // Cache latest news for 2 minutes (less since it changes more)
      latestNews = await cachedQuery(
        'latest-news',
        () => prisma.newsItem.findMany({
          orderBy: { publishedAt: 'desc' },
          take: 20,
          include: {
            topic: true,
          },
        }),
        120 // 2 minutes
      )
    } catch (error) {
      console.warn('Failed to fetch news data:', error)
    }
  }

  return (
    <>
      {/* Clean News Header */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Market News
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Real-time financial news, market analysis, and breaking updates from global markets.
            </p>

            {/* Simple Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{latestNews.length}</div>
                <div className="text-sm text-gray-500">Stories Today</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{topics.length}</div>
                <div className="text-sm text-gray-500">Topics</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
                <div className="text-sm text-gray-500">Coverage</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-500">LIVE</div>
                </div>
                <div className="text-sm text-gray-500">Real-time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          
          {/* Breaking News Section */}
          <FreshNewsSection />

          <div className="grid gap-8 lg:grid-cols-4">
            {/* Main News Feed */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">All News Stories</h2>
                <p className="text-gray-600 dark:text-gray-400">Search and filter real-time market updates</p>
              </div>
              
              <LiveNewsSearch />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Topics */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">News Topics</h3>
                
                <div className="space-y-3">
                  {topics.slice(0, 8).map((topic) => (
                    <Link
                      key={topic.id}
                      href={`/news/topic/${topic.slug}`}
                      className="block hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-3 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900 dark:text-white capitalize text-sm">
                          {topic.title}
                        </h4>
                        <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                          {topic._count?.NewsItem || 0}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">
                        {topic.description || 'Latest updates and analysis'}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Live Updates Status */}
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Live Updates
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">News Feed</span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-xs font-medium">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Last Update</span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      {latestNews.length > 0 ? formatDistanceToNow(new Date(latestNews[0].publishedAt)) + ' ago' : 'N/A'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Articles Today</span>
                    <span className="text-gray-900 dark:text-white text-sm font-semibold">
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