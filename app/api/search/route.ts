import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const q = (searchParams.get('q') || '').trim()
  if (!q) return Response.json({ results: [] })
  const results = await prisma.post.findMany({
    where: { status: 'published', OR: [{ title: { contains: q, mode: 'insensitive' } }, { description: { contains: q, mode: 'insensitive' } }] },
    select: { id: true, slug: true, title: true },
    take: 20
  })
  return Response.json({ results })
}

