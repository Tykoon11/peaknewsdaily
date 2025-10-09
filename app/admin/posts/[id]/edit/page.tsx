import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import AdminMediaThumb from '@/components/admin-media-thumb'
import AdminMediaManager from '@/components/admin-media-manager'

export const metadata = { title: 'Edit Post' }

async function updatePostAction(formData: FormData) {
  'use server'
  const id = String(formData.get('id') || '')
  const title = String(formData.get('title') || '')
  const description = String(formData.get('description') || '')
  const type = String(formData.get('type') || 'Other') as any
  const categoryId = String(formData.get('categoryId') || '') || null
  const tagsRaw = String(formData.get('tags') || '')
  const status = String(formData.get('status') || 'draft')
  const mediaJson = String(formData.get('media') || '[]')
  let mediaItems: { kind: 'image' | 'video'; provider?: string; publicId: string; width?: number; height?: number; duration?: number }[] = []
  try { mediaItems = JSON.parse(mediaJson) } catch {}

  const session = await auth()
  if (!session?.user) redirect('/api/auth/signin')
  // Temporarily allow any authenticated user (for Google Ads review)

  const tagNames = tagsRaw
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)

  await prisma.post.update({
    where: { id },
    data: {
      title,
      description: description || null,
      type,
      categoryId: categoryId || null,
      status,
      publishedAt: status === 'published' ? new Date() : null,
      media: {
        deleteMany: {},
        create: mediaItems.map((m) => ({ kind: m.kind as any, provider: 'cloudinary', publicId: m.publicId, width: m.width, height: m.height, duration: m.duration }))
      },
      tags: {
        deleteMany: {},
        create: tagNames.map((name) => ({
          tag: {
            connectOrCreate: {
              where: { slug: name.toLowerCase() },
              create: { slug: name.toLowerCase(), name }
            }
          }
        }))
      }
    }
  })

  redirect('/admin/posts')
}

export default async function EditPostPage({ params }: { params: { id: string } }) {
  const session = await auth()
  if (!session?.user) redirect('/api/auth/signin')
  // Temporarily allow any authenticated user (for Google Ads review)

  const [post, categories] = await Promise.all([
    prisma.post.findUnique({
      where: { id: params.id },
      include: { category: true, tags: { include: { tag: true } }, media: true }
    }),
    prisma.category.findMany({ orderBy: { name: 'asc' } })
  ])
  if (!post) redirect('/admin/posts')

  const tagString = post.tags.map((t) => t.tag.name).join(', ')

  return (
    <main className="container py-6">
      <h1 className="text-2xl font-semibold mb-4">Edit Post</h1>
      <form action={updatePostAction} className="space-y-4">
        <input type="hidden" name="id" defaultValue={post.id} />
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input name="title" defaultValue={post.title} className="mt-1 w-full rounded border px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea name="description" defaultValue={post.description || ''} className="mt-1 w-full rounded border px-3 py-2" rows={4} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">Type</label>
            <select name="type" defaultValue={post.type} className="mt-1 w-full rounded border px-3 py-2">
              <option>Music</option>
              <option>Promotional</option>
              <option>Funny</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Category</label>
            <select name="categoryId" defaultValue={post.categoryId || ''} className="mt-1 w-full rounded border px-3 py-2">
              <option value="">— None —</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Status</label>
            <select name="status" defaultValue={post.status} className="mt-1 w-full rounded border px-3 py-2">
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Tags (comma separated)</label>
          <input name="tags" defaultValue={tagString} className="mt-1 w-full rounded border px-3 py-2" />
        </div>
        <div>
          <div className="text-sm font-medium mb-2">Media</div>
          <AdminMediaManager initial={post.media.map((m) => ({ kind: m.kind as any, provider: 'cloudinary', publicId: m.publicId || '', width: m.width || undefined, height: m.height || undefined, duration: m.duration || undefined }))} />
        </div>
        <div className="pt-2">
          <button className="px-4 py-2 rounded bg-black text-white">Save Changes</button>
        </div>
      </form>
    </main>
  )
}
