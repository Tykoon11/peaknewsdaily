import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function POST(_: Request, { params }: { params: { id: string } }) {
  const session = await auth()
  if (!session?.user || !['editor', 'admin'].includes((session.user as any).role)) return new Response('Forbidden', { status: 403 })
  const post = await prisma.post.update({ where: { id: params.id }, data: { status: 'draft' }, select: { slug: true } })
  revalidatePath('/')
  revalidatePath(`/post/${post.slug}`)
  return new Response(null, { status: 302, headers: { Location: '/admin/posts' } })
}

