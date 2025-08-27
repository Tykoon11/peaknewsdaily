import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { formatDistanceToNow } from 'date-fns'
import HomeFeed from '@/components/home-feed'

export const revalidate = 60

export default async function HomePage() {
  const posts = await prisma.post.findMany({
    where: { status: 'published', deletedAt: null },
    orderBy: { publishedAt: 'desc' },
    take: 20,
    include: { author: true, tags: { include: { tag: true } } }
  })
  const trending = await prisma.post.findMany({
    where: { status: 'published', deletedAt: null },
    orderBy: { views: 'desc' },
    take: 5,
    select: { id: true, slug: true, title: true, views: true }
  })

  const hero = posts[0]
  const rest = posts.slice(1)
  return (
    <main className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Trending Today</h1>
        <Link href="/submit" className="text-sm underline">Submit</Link>
      </div>
      {hero && (
        <Link href={`/post/${hero.slug}`} className="block mb-8 rounded-lg border p-6 hover:shadow">
          <div className="text-xs uppercase text-gray-500 mb-2">Featured</div>
          <h2 className="text-xl font-semibold mb-2">{hero.title}</h2>
          <p className="text-gray-600 line-clamp-3">{hero.description || ''}</p>
          <div className="mt-2 text-xs text-gray-500">{formatDistanceToNow(hero.publishedAt || hero.createdAt, { addSuffix: true })}</div>
        </Link>
      )}
      {trending.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-2">Most Viewed</h2>
          <ul className="list-disc pl-5 text-sm">
            {trending.map((t) => (
              <li key={t.id}>
                <Link className="underline" href={`/post/${t.slug}`}>{t.title}</Link>
                <span className="text-gray-500 ml-2">({t.views.toLocaleString()} views)</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <HomeFeed initial={rest.map((p) => ({
        id: p.id,
        slug: p.slug,
        title: p.title,
        description: p.description || null,
        publishedAt: p.publishedAt ? p.publishedAt.toISOString() : null,
        createdAt: p.createdAt.toISOString(),
        tags: p.tags.map((x) => ({ tag: { slug: x.tag.slug, name: x.tag.name } }))
      }))} />
    </main>
  )
}
