import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { formatDistanceToNow } from 'date-fns'
import HomeFeed from '@/components/home-feed'
import HeroCarousel from '@/components/hero-carousel'
import SearchGrid from '@/components/search-grid'

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
      include: { author: true, media: true, tags: { include: { tag: true } }, submission: true }
    }),
    prisma.post.findMany({
      where: { status: 'published', deletedAt: null },
      orderBy: { views: 'desc' },
      take: 5,
      select: { id: true, slug: true, title: true, views: true }
    }),
    prisma.category.findMany({ orderBy: { name: 'asc' }, select: { id: true, name: true, slug: true } })
  ])
  // Enhanced layout with sidebar Latest News and auto-sliding hero carousel
  const featured = posts[0]
  const latestRail = posts.slice(1, 7)
  
  return (
    <main className="container py-4 sm:py-6">
      {/* Hero Section with Latest News Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 mb-8">
        {/* Main Hero Carousel */}
        <div className="lg:col-span-2 xl:col-span-3">
          {featured ? (
            <div className="mb-4 lg:mb-0">
              <HeroCarousel
                slides={[featured, ...latestRail].map((p) => ({ 
                  slug: p.slug, 
                  title: p.title, 
                  media: p.media as any, 
                  age: (p as any).submission?.ageRestricted 
                }))}
                intervalMs={5000}
              />
            </div>
          ) : null}
        </div>
        
        {/* Latest News Sidebar - Now to the right */}
        <aside className="lg:col-span-1 xl:col-span-1">
          <div className="latest-rail h-fit">
            <div className="flex items-center justify-between px-3 py-2 mb-3">
              <h2 className="text-base lg:text-lg font-semibold flex items-center gap-2">
                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span className="hidden sm:inline">Latest News</span>
                <span className="sm:hidden">Latest</span>
              </h2>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">LIVE</span>
            </div>
            <div className="space-y-2 lg:space-y-3 max-h-[600px] lg:max-h-[800px] overflow-y-auto">
              {latestRail.map((p) => (
                <Link key={p.id} className="latest-item block p-2 lg:p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 border" href={`/post/${p.slug}`}>
                  <div className="flex gap-2 lg:gap-3">
                    {/* Enhanced thumbnail with overlay */}
                    <div className="relative flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        alt={p.title} 
                        className="w-16 h-12 lg:w-20 lg:h-16 object-cover rounded-lg" 
                        src={p.media[0]?.sourceUrl || (p.media[0]?.publicId ? `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${p.media[0]?.publicId}.jpg` : 'https://picsum.photos/seed/placeholder/200/120')} 
                      />
                      {/* Live indicator for recent posts */}
                      {new Date().getTime() - new Date(p.createdAt).getTime() < 3600000 && (
                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 lg:w-3 lg:h-3 bg-red-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs lg:text-sm font-medium leading-tight line-clamp-2 mb-1 lg:mb-2">{p.title}</h3>
                      <div className="flex items-center gap-1 lg:gap-2 text-xs text-gray-500">
                        <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="truncate text-xs">{formatDistanceToNow(p.publishedAt || p.createdAt, { addSuffix: true })}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Search Grid */}
      <div className="mb-6 lg:mb-8">
        <SearchGrid />
      </div>

      {/* Trending Section */}
      <section className="mb-8">
        <div className="section-header flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              </svg>
            </div>
            Trending Now
            <span className="ml-2 px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">HOT</span>
          </h2>
          <Link href={{ pathname: '/', query: { s: 'views' } }} className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {trending.map((post, idx) => (
            <Link
              key={post.id}
              href={`/post/${post.slug}`}
              className="trending-card group relative p-3 sm:p-4 rounded-xl"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 text-white text-xs sm:text-sm font-bold rounded-full flex items-center justify-center ${
                  idx === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                  idx === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                  idx === 2 ? 'bg-gradient-to-r from-orange-400 to-red-500' :
                  'bg-gradient-to-r from-blue-500 to-purple-600'
                }`}>
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 mb-1">{post.views.toLocaleString()} views</div>
                  {idx < 3 && (
                    <div className="flex items-center gap-1">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48L12 4.52l.76-.76z"/>
                      </svg>
                      <span className="text-xs text-red-500 font-medium hidden sm:inline">Popular</span>
                    </div>
                  )}
                </div>
              </div>
              <h3 className="text-xs sm:text-sm font-medium line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Main Feed */}
      <section>
        <div className="section-header flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            Latest Posts
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <span className="text-sm text-gray-600 font-medium">Sort by:</span>
            <div className="flex items-center bg-gray-100 rounded-lg p-1 w-full sm:w-auto">
              <Link 
                href={{ pathname: '/', query: { ...searchParams, s: 'latest' } }}
                className={`sort-pill text-sm px-2 sm:px-3 py-1.5 rounded-md font-medium transition-all flex-1 sm:flex-none text-center ${s === 'latest' || !s ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <span className="flex items-center justify-center gap-1">
                  <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="hidden sm:inline">Latest</span>
                  <span className="sm:hidden">New</span>
                </span>
              </Link>
              <Link 
                href={{ pathname: '/', query: { ...searchParams, s: 'views' } }}
                className={`sort-pill text-sm px-2 sm:px-3 py-1.5 rounded-md font-medium transition-all flex-1 sm:flex-none text-center ${s === 'views' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <span className="flex items-center justify-center gap-1">
                  <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="hidden sm:inline">Popular</span>
                  <span className="sm:hidden">Hot</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        
        {posts.length > 1 && (
          <HomeFeed 
            initial={posts.slice(1).map((p) => ({
              id: p.id,
              slug: p.slug,
              title: p.title,
              description: p.description || null,
              publishedAt: p.publishedAt ? p.publishedAt.toISOString() : null,
              createdAt: p.createdAt.toISOString(),
              media: p.media?.length ? p.media.map((m) => ({ kind: m.kind as any, publicId: m.publicId, sourceUrl: m.sourceUrl as any })) : [],
              ageRestricted: (p as any).submission?.ageRestricted || false,
              tags: p.tags.map((x) => ({ tag: { slug: x.tag.slug, name: x.tag.name } }))
            }))} 
            baseQuery={{ c, s }} 
          />
        )}
      </section>
    </main>
  )
}

