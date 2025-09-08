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

  if (process.env.DATABASE_URL) {
    try {
      topics = await prisma.topic.findMany({
        orderBy: { title: 'asc' },
        include: {
          NewsItem: {
            orderBy: { publishedAt: 'desc' },
            take: 5,
          },
        },
      })

      latestNews = await prisma.newsItem.findMany({
        orderBy: { publishedAt: 'desc' },
        take: 20,
        include: {
          topic: true,
        },
      })
    } catch (error) {
      console.warn('Failed to fetch news data:', error)
    }
  }

  return (
    <main className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Live Market News</h1>
        <p className="text-muted-foreground">
          Real-time updates on trading, investing, and cryptocurrency markets
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Latest Stories</h2>
          <div className="space-y-4">
            {latestNews.map((item) => (
              <article
                key={item.id}
                className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Link
                    href={`/news/topic/${item.topic.slug}`}
                    className="text-primary hover:underline capitalize"
                  >
                    {item.topic.title}
                  </Link>
                  <span>•</span>
                  <span>{item.sourceName}</span>
                  <span>•</span>
                  <time>{formatDistanceToNow(item.publishedAt)} ago</time>
                </div>
                <Link href={`/news/${item.slug}`} className="block group">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                    {item.title}
                  </h3>
                  {item.excerpt && (
                    <p className="text-muted-foreground line-clamp-2">
                      {item.excerpt}
                    </p>
                  )}
                </Link>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Topics</h2>
            <div className="space-y-4">
              {topics.map((topic) => (
                <div key={topic.id} className="border rounded-lg p-4">
                  <Link
                    href={`/news/topic/${topic.slug}`}
                    className="block group"
                  >
                    <h3 className="font-semibold group-hover:text-primary transition-colors capitalize mb-1">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {topic.description}
                    </p>
                    <div className="text-sm text-muted-foreground">
                      {topic.NewsItem.length} recent articles
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}