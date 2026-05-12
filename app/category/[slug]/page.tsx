import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import HomeFeed from '@/components/home-feed'
import SearchGrid from '@/components/search-grid'

export const revalidate = 60

const fallbackCategories: Record<string, { id: string; slug: string; name: string }> = {
  investing: { id: 'fallback-investing', slug: 'investing', name: 'Investing' },
  trading: { id: 'fallback-trading', slug: 'trading', name: 'Trading' },
  brokers: { id: 'fallback-brokers', slug: 'brokers', name: 'Brokers' },
  crypto: { id: 'fallback-crypto', slug: 'crypto', name: 'Crypto' },
  tools: { id: 'fallback-tools', slug: 'tools', name: 'Tools' },
  'how-to': { id: 'fallback-how-to', slug: 'how-to', name: 'How To' }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  let category = fallbackCategories[params.slug] as { id: string; slug: string; name: string } | null
  let posts: any[] = []

  if (process.env.DATABASE_URL) {
    try {
      category = await prisma.category.findUnique({ where: { slug: params.slug } })
      if (category) {
        posts = await prisma.post.findMany({
          where: { categoryId: category.id, status: 'published' },
          orderBy: { publishedAt: 'desc' },
          take: 20,
          include: { media: true, tags: { include: { tag: true } } }
        })
      }
    } catch (error) {
      console.error('Category page database error:', error)
    }
  }

  if (!category) notFound()
  return (
    <main className="container px-3 xs:px-4 py-4 xs:py-6 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-xl xs:text-2xl font-semibold mb-3 xs:mb-4 text-gray-900 dark:text-gray-100">{category.name}</h1>
      <SearchGrid category={category.slug} />
      <HomeFeed initial={posts.map((p) => ({
        id: p.id,
        slug: p.slug,
        title: p.title,
        description: p.description || null,
        publishedAt: p.publishedAt ? p.publishedAt.toISOString() : null,
        createdAt: p.createdAt.toISOString(),
        media: p.media?.length ? p.media.map((m) => ({ kind: m.kind as any, publicId: m.publicId, sourceUrl: m.sourceUrl as any })) : [],
        tags: p.tags.map((x) => ({ tag: { slug: x.tag.slug, name: x.tag.name } }))
      }))} baseQuery={{ c: category.slug, s: 'latest' }} />
    </main>
  )
}
