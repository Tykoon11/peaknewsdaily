import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

function toSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user || !['editor', 'admin'].includes((session.user as any).role)) return new Response('Forbidden', { status: 403 })
  const form = await req.formData()
  const name = String(form.get('name') || '').trim()
  if (!name) return new Response('Name required', { status: 400 })
  let slug = toSlug(name)
  if (!slug) slug = `category-${Math.random().toString(36).slice(2, 6)}`
  // ensure unique slug by appending a suffix if needed
  let final = slug
  let i = 1
  while (await prisma.category.findUnique({ where: { slug: final } })) {
    final = `${slug}-${i++}`
  }
  await prisma.category.create({ data: { name, slug: final } })
  revalidatePath('/admin/categories')
  revalidatePath('/')
  return new Response(null, { status: 302, headers: { Location: '/admin/categories' } })
}

