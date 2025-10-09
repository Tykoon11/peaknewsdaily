import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function POST(_: Request, { params }: { params: { id: string } }) {
  const session = await auth()
  if (!session?.user) return new Response('Unauthorized', { status: 401 })
  // Temporarily allow any authenticated user (for Google Ads review)
  const post = await prisma.post.update({ where: { id: params.id }, data: { status: 'published', publishedAt: new Date() }, select: { slug: true } })
  revalidatePath('/')
  revalidatePath(`/post/${post.slug}`)
  return new Response(null, { status: 302, headers: { Location: '/admin/posts' } })
}

