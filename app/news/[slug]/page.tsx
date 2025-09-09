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
    <>
      {/* Premium Article Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:32px_32px]"></div>
        
        <div className="relative container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-sm sm:text-base text-blue-200/80 mb-6 sm:mb-8">
              <Link href="/news" className="hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                </svg>
                News
              </Link>
              <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link
                href={`/news/topic/${newsItem.topic.slug}`}
                className="hover:text-white transition-colors capitalize flex items-center gap-2"
              >
                {newsItem.topic.title}
              </Link>
            </nav>
            
            {/* Topic Badge */}
            <div className="mb-4 sm:mb-6">
              <Link
                href={`/news/topic/${newsItem.topic.slug}`}
                className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-medium rounded-full backdrop-blur-sm hover:bg-blue-500/30 transition-colors capitalize"
              >
                {newsItem.topic.title}
              </Link>
            </div>
            
            {/* Article Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-indigo-200 leading-tight">
              {newsItem.title}
            </h1>
            
            {/* Article Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm sm:text-base text-blue-200/80 mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">{newsItem.sourceName.charAt(0)}</span>
                </div>
                <span className="font-medium">By {newsItem.sourceName}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <time>{formatDistanceToNow(new Date(newsItem.publishedAt))} ago</time>
              </div>
              <Link
                href={newsItem.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Original
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <main className="bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Main Article */}
            <article className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-2xl border border-slate-200 dark:border-gray-700 overflow-hidden mb-12 sm:mb-16">
              <div className="p-6 sm:p-8 lg:p-12">
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-slate-800 dark:prose-headings:text-gray-100 prose-headings:font-bold prose-p:text-slate-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 dark:prose-strong:text-gray-100 prose-blockquote:border-l-blue-500 dark:prose-blockquote:border-l-blue-400 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/20 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
                  dangerouslySetInnerHTML={{ __html: newsItem.contentHtml }} 
                />
              </div>
            </article>

            {/* Related Articles */}
            {relatedNews.length > 0 && (
              <section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-100/50 dark:border-gray-600 shadow-lg dark:shadow-2xl">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl shadow-lg">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-gray-100">Related Articles</h2>
                    <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base">More stories from {newsItem.topic.title}</p>
                  </div>
                </div>
                
                <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                  {relatedNews.map((item) => (
                    <article
                      key={item.id}
                      className="group bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl border border-blue-100/50 dark:border-gray-600 p-4 sm:p-6 hover:shadow-lg dark:hover:shadow-2xl hover:border-blue-200 dark:hover:border-gray-500 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-gray-400 mb-3">
                        <span className="font-medium">{item.sourceName}</span>
                        <span className="hidden sm:inline">•</span>
                        <time className="text-slate-400 dark:text-gray-500">{formatDistanceToNow(new Date(item.publishedAt))} ago</time>
                      </div>
                      <Link href={`/news/${item.slug}`} className="block">
                        <h3 className="font-bold text-slate-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm sm:text-base leading-tight mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        {item.excerpt && (
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                            {item.excerpt}
                          </p>
                        )}
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            )}
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