import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { formatDistanceToNow } from 'date-fns'

export const revalidate = 300

export default async function HomePage() {
  // Get live trading/investing content
  const [latestNews, trendingTopics, featuredPosts] = await Promise.all([
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
  
  return (
    <main className="container py-6">
      {/* Hero Section */}
      <div className="mb-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Live Market News & Trading Insights
          </h1>
          <p className="text-gray-600 text-lg">
            Real-time updates on trading, investing, and cryptocurrency markets
          </p>
        </div>
      </div>

      {/* Featured Trading Content */}
      {featuredPosts.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Trading Education</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/p/${post.slug}`}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {formatDistanceToNow(post.createdAt)} ago
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Live Market News */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Live Market News</h2>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">LIVE</span>
          </div>
          <Link 
            href="/news" 
            className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            View all news →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {latestNews.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="group bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium capitalize">
                  {item.topic.title}
                </span>
                <span className="text-xs text-gray-500">
                  {formatDistanceToNow(item.publishedAt)} ago
                </span>
              </div>
              <h3 className="text-sm font-medium mb-2 line-clamp-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <div className="text-xs text-gray-500">
                {item.sourceName}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Market Topics */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold">Market Topics</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingTopics.map((topic) => (
            <Link
              key={topic.id}
              href={`/news/topic/${topic.slug}`}
              className="group bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors capitalize">
                {topic.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {topic.description}
              </p>
              <div className="text-xs text-gray-500">
                {topic._count.NewsItem} articles
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

