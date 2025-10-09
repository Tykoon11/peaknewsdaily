import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

function toSlug(input: string) {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const session = await auth()
  if (!session?.user) return new Response('Unauthorized', { status: 401 })
  // Temporarily allow any authenticated user (for Google Ads review)
  const id = params.id
  const form = await req.formData()
  const nameRaw = String(form.get('name') || '').trim()
  const slugRaw = String(form.get('slug') || '').trim()
  if (!nameRaw) return new Response('Name required', { status: 400 })
  const desired = slugRaw ? toSlug(slugRaw) : toSlug(nameRaw)
  let final = desired || `category-${Math.random().toString(36).slice(2,6)}`
  // ensure unique across other categories
  if (final) {
    let i = 1
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const existing = await prisma.category.findUnique({ where: { slug: final } })
      if (!existing || existing.id === id) break
      final = `${desired}-${i++}`
    }
  }
  await prisma.category.update({ where: { id }, data: { name: nameRaw, slug: final } })
  revalidatePath('/admin/categories')
  revalidatePath('/')
  return new Response(null, { status: 302, headers: { Location: '/admin/categories' } })
}

