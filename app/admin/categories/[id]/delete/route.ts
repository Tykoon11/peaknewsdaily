import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function POST(_: Request, { params }: { params: { id: string } }) {
  const session = await auth()
  if (!session?.user || !['editor', 'admin'].includes((session.user as any).role)) return new Response('Forbidden', { status: 403 })
  const id = params.id
  const postCount = await prisma.post.count({ where: { categoryId: id, deletedAt: null } })
  if (postCount > 0) return new Response('Cannot delete category with posts', { status: 400 })
  await prisma.category.delete({ where: { id } })
  revalidatePath('/admin/categories')
  revalidatePath('/')
  return new Response(null, { status: 302, headers: { Location: '/admin/categories' } })
}

