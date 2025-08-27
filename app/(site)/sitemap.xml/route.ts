import { prisma } from '@/lib/prisma'

export async function GET() {
  const posts = await prisma.post.findMany({ where: { status: 'published' }, select: { slug: true, updatedAt: true } })
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const urls = posts
    .map((p) => `<url><loc>${base}/post/${p.slug}</loc><lastmod>${p.updatedAt.toISOString()}</lastmod></url>`) 
    .join('')
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}

