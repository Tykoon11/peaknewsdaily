import { prisma } from '@/lib/prisma'

export const runtime = 'nodejs'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const cursor = searchParams.get('cursor') || undefined
  const limit = Math.min(parseInt(searchParams.get('limit') || '12', 10) || 12, 50)

  const posts = await prisma.post.findMany({
    where: { status: 'published', deletedAt: null },
    orderBy: { publishedAt: 'desc' },
    take: limit + 1,
    ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      publishedAt: true,
      createdAt: true,
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

