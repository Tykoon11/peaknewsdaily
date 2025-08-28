import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { formatDistanceToNow } from 'date-fns'
import HomeFeed from '@/components/home-feed'
import HeroCard from '@/components/hero-card'
import { getActiveTheme } from '@/lib/settings'

export const revalidate = 60

export default async function HomePage({ searchParams }: { searchParams?: { c?: string; s?: string } }) {
  const activeTheme = await getActiveTheme()
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

  // Special Source layout with sidebar Latest and grouped rows
  if (activeTheme === 'source') {
    const featured = posts[0]
    const latestRail = posts.slice(1, 7)
    const mostViewed = await prisma.post.findMany({
      where: { status: 'published', deletedAt: null },
      orderBy: { views: 'desc' },
      take: 5,
      include: { media: true }
    })
    const group = async (slug: string) =>
      prisma.post.findMany({ where: { status: 'published', deletedAt: null, category: { is: { slug } } }, orderBy: { publishedAt: 'desc' }, take: 5, include: { media: true } })
    const [culture, funny, news, sports] = await Promise.all([
      group('culture'),
      group('funny'),
      group('news'),
      group('sports')
    ])
    return (
      <main className="container py-6">
        <div className="source-top mb-6">
          <div>
            {featured && (
              <HeroCard
                slug={featured.slug}
                title={featured.title}
                description={featured.description}
                timestamp={formatDistanceToNow(featured.publishedAt || featured.createdAt, { addSuffix: true })}
                media={featured.media.map((m) => ({ kind: m.kind as any, publicId: m.publicId }))}
                cloudName={process.env.CLOUDINARY_CLOUD_NAME}
              />
            )}
          </div>
          <aside className="latest-rail">
            <div className="flex items-center justify-between px-2 py-1 mb-1">
              <h2 className="text-sm font-semibold">Latest News</h2>
              <Link className="text-xs underline" href={{ pathname: '/', query: { s: 'latest' } }}>See more</Link>
            </div>
            <div className="divide-y divide-gray-200">
              {latestRail.map((p) => (
                <Link key={p.id} className="latest-item" href={`/post/${p.slug}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt={p.title} className="w-24 h-16 object-cover rounded" src={p.media[0]?.sourceUrl || (p.media[0]?.publicId ? `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${p.media[0]?.publicId}.jpg` : 'https://picsum.photos/seed/placeholder/200/120')} />
                  <div>
                    <div className="text-[13px] font-medium leading-tight">{p.title}</div>
                    <div className="text-[11px] text-gray-500 mt-1">{formatDistanceToNow(p.publishedAt || p.createdAt, { addSuffix: true })}</div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>

        <GroupRow title="Most Viewed" seeMoreHref={{ pathname: '/', query: { s: 'views' } }} posts={mostViewed} />
        <GroupRow title="Culture" seeMoreHref={{ pathname: '/category/culture' }} posts={culture} />
        <GroupRow title="Funny" seeMoreHref={{ pathname: '/category/funny' }} posts={funny} />
        <GroupRow title="News" seeMoreHref={{ pathname: '/category/news' }} posts={news} />
        <GroupRow title="Sports" seeMoreHref={{ pathname: '/category/sports' }} posts={sports} />

        {/* Interesting feed with infinite scroll */}
        <section className="group-row">
          <div className="group-header">
            <h2 className="text-lg font-semibold">Interesting</h2>
            <Link className="btn btn-outline text-sm" href={{ pathname: '/category/interesting' }}>See more</Link>
          </div>
          {/* render infinite scroll feed for Interesting */}
          {(() => null)()}
          <HomeFeed initial={(await prisma.post.findMany({ where: { status: 'published', deletedAt: null, category: { is: { slug: 'interesting' } } }, orderBy: { publishedAt: 'desc' }, take: 20, include: { media: true, tags: { include: { tag: true } } } })).map((p) => ({
            id: p.id,
            slug: p.slug,
            title: p.title,
            description: p.description || null,
            publishedAt: p.publishedAt ? p.publishedAt.toISOString() : null,
            createdAt: p.createdAt.toISOString(),
            media: p.media?.length ? p.media.map((m) => ({ kind: m.kind as any, publicId: m.publicId, sourceUrl: m.sourceUrl as any })) : [],
            tags: p.tags.map((x) => ({ tag: { slug: x.tag.slug, name: x.tag.name } }))
          }))} baseQuery={{ c: 'interesting', s: 'latest' }} />
        </section>
      </main>
    )
  }

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

function CountryChip({ country }: { country?: string | null }) {
  if (!country) return null
  return <span className="country-chip">{country}</span>
}

function GroupRow({ title, seeMoreHref, posts }: { title: string; seeMoreHref: any; posts: { id: string; slug: string; title: string; media: { publicId: string | null; sourceUrl: string | null }[]; country?: string | null }[] }) {
  return (
    <section className="group-row">
      <div className="group-header">
        <h2 className="text-lg font-semibold">{title}</h2>
        <Link className="btn btn-outline text-sm" href={seeMoreHref}>See more</Link>
      </div>
      <div className="group-grid">
        {posts.map((p) => (
          <Link key={p.id} href={`/post/${p.slug}`} className="group-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={p.title} src={p.media[0]?.sourceUrl || (p.media[0]?.publicId ? `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${p.media[0]?.publicId}.jpg` : 'https://picsum.photos/seed/placeholder/400/280')} />
            <h3 className="px-3 py-2 text-sm font-medium leading-tight">{p.title} <CountryChip country={(p as any).country} /></h3>
          </Link>
        ))}
      </div>
    </section>
  )
}
