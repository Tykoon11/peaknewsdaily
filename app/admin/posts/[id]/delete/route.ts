import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function POST(_: Request, { params }: { params: { id: string } }) {
  const session = await auth()
  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 })
  }
  // Temporarily allow any authenticated user (for Google Ads review)

  const post = await prisma.post.findUnique({ where: { id: params.id }, select: { id: true, slug: true, status: true, deletedAt: true } })
  if (!post) return new Response('Not found', { status: 404 })
  if (post.status === 'published') return new Response('Cannot delete published post', { status: 400 })

  await prisma.post.update({ where: { id: params.id }, data: { deletedAt: new Date() } })

  revalidatePath('/')
  revalidatePath('/admin/posts')
  if (post.slug) revalidatePath(`/post/${post.slug}`)
  return new Response(null, { status: 302, headers: { Location: '/admin/posts' } })
}

