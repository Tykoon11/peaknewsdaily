import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { formatDistanceToNow } from 'date-fns'
import HomeFeed from '@/components/home-feed'
import HeroCard from '@/components/hero-card'

export const revalidate = 60

export default async function HomePage({ searchParams }: { searchParams?: { c?: string; s?: string } }) {
  const c = searchParams?.c || undefined
  const s = searchParams?.s === 'views' ? 'views' : 'latest'
  const where: any = { status: 'published', deletedAt: null }
  if (c) where.category = { is: { slug: c } }
  const orderBy: any = s === 'views' ? [{ views: 'desc' }, { id: 'desc' }] : [{ publishedAt: 'desc' }, { id: 'desc' }]

  const [posts, trending, categories] = await Promise.all([
    prisma.post.findMany({
      where,
      orderBy,
      take: 20,
      include: { author: true, media: true, tags: { include: { tag: true } } }
    }),
    prisma.post.findMany({
      where: { status: 'published', deletedAt: null },
      orderBy: { views: 'desc' },
      take: 5,
      select: { id: true, slug: true, title: true, views: true }
    }),
    prisma.category.findMany({ orderBy: { name: 'asc' }, select: { id: true, name: true, slug: true } })
  ])

  const hero = posts[0]
  const rest = posts.slice(1)
  return (
    <main className="container py-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Trending Today</h1>
        <Link href="/submit" className="text-sm underline">Submit</Link>
      </div>
      <div className="flex flex-wrap items-center gap-3 mb-6 text-sm">
        <span className="text-gray-600">Filter:</span>
        <Link className={`px-3 py-1 rounded border ${!c ? 'bg-black text-white' : ''}`} href={{ pathname: '/', query: { ...(s ? { s } : {}) } }}>All</Link>
        {categories.map((cat) => (
          <Link key={cat.id} className={`px-3 py-1 rounded border ${c === cat.slug ? 'bg-black text-white' : ''}`} href={{ pathname: '/', query: { c: cat.slug, ...(s ? { s } : {}) } }}>{cat.name}</Link>
        ))}
        <span className="ml-auto text-gray-600">Sort:</span>
        <Link className={`px-3 py-1 rounded border ${s === 'latest' ? 'bg-black text-white' : ''}`} href={{ pathname: '/', query: { ...(c ? { c } : {}), s: 'latest' } }}>Latest</Link>
        <Link className={`px-3 py-1 rounded border ${s === 'views' ? 'bg-black text-white' : ''}`} href={{ pathname: '/', query: { ...(c ? { c } : {}), s: 'views' } }}>Most Viewed</Link>
      </div>
      {hero && (
        <HeroCard
          slug={hero.slug}
          title={hero.title}
          description={hero.description}
          timestamp={formatDistanceToNow(hero.publishedAt || hero.createdAt, { addSuffix: true })}
          media={hero.media.map((m) => ({ kind: m.kind as any, publicId: m.publicId }))}
          cloudName={process.env.CLOUDINARY_CLOUD_NAME}
        />
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
        media: p.media?.length ? p.media.map((m) => ({ kind: m.kind as any, publicId: m.publicId })) : [],
        tags: p.tags.map((x) => ({ tag: { slug: x.tag.slug, name: x.tag.name } }))
      }))} baseQuery={{ c: c || undefined, s: s as any }} />
    </main>
  )
}
