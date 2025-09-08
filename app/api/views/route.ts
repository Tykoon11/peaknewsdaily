import { prisma } from '@/lib/prisma'
import { isBot } from '@/lib/utils'

async function sha256Hex(input: string) {
  const enc = new TextEncoder()
  const data = enc.encode(input)
  const hash = await crypto.subtle.digest('SHA-256', data)
  const bytes = new Uint8Array(hash)
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function POST(req: Request) {
  const { postId } = await req.json()
  if (!postId) return new Response('Bad Request', { status: 400 })
  const ua = req.headers.get('user-agent')
  if (isBot(ua)) {
    const post = await prisma.post.findUnique({ where: { id: postId } })
    return Response.json({ views: post?.views ?? 0 })
  }
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '0.0.0.0'
  const ipHash = await sha256Hex(ip)
  try {
    await prisma.viewEvent.create({ data: { postId, ipHash, userAgent: ua || undefined } })
    await prisma.post.update({ where: { id: postId }, data: { views: { increment: 1 } } })
  } catch {}
  const post = await prisma.post.findUnique({ where: { id: postId } })
  return Response.json({ views: post?.views ?? 0 })
}
