import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import HomeFeed from '@/components/home-feed'
import SearchGrid from '@/components/search-grid'

export const revalidate = 60

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await prisma.category.findUnique({ where: { slug: params.slug } })
  if (!category) notFound()
  const posts = await prisma.post.findMany({
    where: { categoryId: category.id, status: 'published' },
    orderBy: { publishedAt: 'desc' },
    take: 20,
    include: { media: true, tags: { include: { tag: true } } }
  })
  return (
    <main className="container py-6 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">{category.name}</h1>
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
