import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'

export const revalidate = 3600

export default async function NewsItemPage({ params }: { params: { slug: string } }) {
  const newsItem = await prisma.newsItem.findUnique({
    where: { slug: params.slug },
    include: {
      topic: true,
    },
  })

  if (!newsItem) notFound()

  const relatedNews = await prisma.newsItem.findMany({
    where: {
      topicSlug: newsItem.topicSlug,
      id: { not: newsItem.id },
    },
    orderBy: { publishedAt: 'desc' },
    take: 5,
    include: {
      topic: true,
    },
  })

  return (
    <main className="container py-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/news" className="hover:underline">
              News
            </Link>
            <span>→</span>
            <Link
              href={`/news/topic/${newsItem.topic.slug}`}
              className="text-primary hover:underline capitalize"
            >
              {newsItem.topic.title}
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span>By {newsItem.sourceName}</span>
            <time>{formatDistanceToNow(newsItem.publishedAt)} ago</time>
            <Link
              href={newsItem.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              View Original
            </Link>
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: newsItem.contentHtml }} />
        </article>

        {relatedNews.length > 0 && (
          <aside className="mt-12 pt-8 border-t">
            <h2 className="text-xl font-semibold mb-4">Related Articles</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedNews.map((item) => (
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
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    {item.excerpt && (
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {item.excerpt}
                      </p>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          </aside>
        )}
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  if (!process.env.DATABASE_URL) {
    return []
  }
  
  try {
    const newsItems = await prisma.newsItem.findMany({
      select: { slug: true },
      take: 100,
    })

    return newsItems.map((item) => ({
      slug: item.slug,
    }))
  } catch (error) {
    console.warn('Failed to fetch news items for static generation:', error)
    return []
  }
}