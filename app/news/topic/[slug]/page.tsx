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
    <main className="container py-6">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link href="/news" className="hover:underline">
            News
          </Link>
          <span>→</span>
          <span className="capitalize">{topic.title}</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-2 capitalize">{topic.title}</h1>
        {topic.description && (
          <p className="text-muted-foreground">{topic.description}</p>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          {newsItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No articles found for this topic yet.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {newsItems.map((item) => (
                <article
                  key={item.id}
                  className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{item.sourceName}</span>
                    <span>•</span>
                    <time>{formatDistanceToNow(item.publishedAt)} ago</time>
                  </div>
                  <Link href={`/news/${item.slug}`} className="block group">
                    <h2 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                      {item.title}
                    </h2>
                    {item.excerpt && (
                      <p className="text-muted-foreground line-clamp-3">
                        {item.excerpt}
                      </p>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>

        <aside>
          <h2 className="text-xl font-semibold mb-4">All Topics</h2>
          <div className="space-y-2">
            {allTopics.map((t) => (
              <Link
                key={t.id}
                href={`/news/topic/${t.slug}`}
                className={`block p-3 rounded-lg transition-colors capitalize ${
                  t.slug === params.slug
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{t.title}</span>
                  <span className="text-sm opacity-75">
                    {t._count.NewsItem}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </main>
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