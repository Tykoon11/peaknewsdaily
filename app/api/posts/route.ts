import { prisma } from '@/lib/prisma'

export const runtime = 'nodejs'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const cursor = searchParams.get('cursor') || undefined
  const limit = Math.min(parseInt(searchParams.get('limit') || '12', 10) || 12, 50)
  const category = searchParams.get('c') || undefined
  const sort = searchParams.get('s') === 'views' ? 'views' : 'latest'

  const where: any = { status: 'published', deletedAt: null }
  if (category) where.category = { is: { slug: category } }

  const orderBy: any = sort === 'views' ? [{ views: 'desc' }, { id: 'desc' }] : [{ publishedAt: 'desc' }, { id: 'desc' }]

  const posts = await prisma.post.findMany({
    where,
    orderBy,
    take: limit + 1,
    ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      publishedAt: true,
      createdAt: true,
      media: {
        select: { kind: true, publicId: true },
        take: 1
      },
      tags: { select: { tag: { select: { slug: true, name: true } } } }
    }
  })

  let nextCursor: string | null = null
  if (posts.length > limit) {
    const next = posts.pop()!
    nextCursor = next.id
  }

  return Response.json({ items: posts, nextCursor })
}
