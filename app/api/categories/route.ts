import { prisma } from '@/lib/prisma'

export async function GET() {
  const cats = await prisma.category.findMany({ orderBy: { name: 'asc' }, select: { id: true, name: true, slug: true } })
  return Response.json({ items: cats })
}

