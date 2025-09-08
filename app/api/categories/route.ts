import { prisma } from '@/lib/prisma'

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return Response.json({ items: [] })
  }
  
  try {
    const cats = await prisma.category.findMany({ orderBy: { name: 'asc' }, select: { id: true, name: true, slug: true } })
    return Response.json({ items: cats })
  } catch (error) {
    console.warn('Failed to fetch categories:', error)
    return Response.json({ items: [] })
  }
}

