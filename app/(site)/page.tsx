import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { formatDistanceToNow } from 'date-fns'

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

  return (
    <main className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Trending Today</h1>
        <Link href="/submit" className="text-sm underline">Submit</Link>
      </div>
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
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <li key={p.id} className="rounded-lg border p-4 hover:shadow">
            <Link href={`/post/${p.slug}`} className="block">
              <h2 className="font-medium text-lg">{p.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">{p.description}</p>
              <div className="mt-2 text-xs text-gray-500">{formatDistanceToNow(p.publishedAt || p.createdAt, { addSuffix: true })}</div>
            </Link>
            <div className="mt-2 flex gap-2 text-xs">
              {p.tags.map((t) => (
                <Link key={t.tagId} href={`/tag/${t.tag.slug}`} className="px-2 py-0.5 rounded bg-gray-100">#{t.tag.name}</Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
