import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const q = (searchParams.get('q') || '').trim()
  const c = (searchParams.get('c') || '').trim()
  if (!q) return Response.json({ results: [] })
  const where: any = { status: 'published', OR: [{ title: { contains: q, mode: 'insensitive' } }, { description: { contains: q, mode: 'insensitive' } }] }
  if (c) where.category = { is: { slug: c } }
  const results = await prisma.post.findMany({
    where,
    select: { id: true, slug: true, title: true, description: true, media: { take: 1, select: { publicId: true, sourceUrl: true } } },
    orderBy: { publishedAt: 'desc' },
    take: 30
  })
  return Response.json({ results })
}
