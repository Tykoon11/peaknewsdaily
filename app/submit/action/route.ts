import { prisma } from '@/lib/prisma'
import { NextRequest } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'

const mediaSchema = z.array(z.object({
  kind: z.enum(['image', 'video']),
  provider: z.literal('cloudinary'),
  publicId: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
  duration: z.number().optional()
}))

const schema = z.object({
  title: z.string().min(5),
  type: z.enum(['Music', 'Promotional', 'Funny', 'Other']),
  description: z.string().optional(),
  tags: z.string().optional(),
  externalUrl: z.string().url().optional(),
  licenseAccepted: z.boolean(),
  ageRestricted: z.boolean().optional(),
  mediaAssets: mediaSchema.optional(),
  categoryId: z.string().min(1).optional().or(z.literal(''))
})

export async function POST(req: NextRequest) {
  const session = await auth()
  const userId = session?.user?.id
  const json = await req.json()
  const parsed = schema.safeParse(json)
  if (!parsed.success) return Response.json({ error: 'Invalid payload' }, { status: 400 })
  const { title, type, description, tags, externalUrl, licenseAccepted, ageRestricted, mediaAssets, categoryId } = parsed.data
  try {
    const slugBase = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    const slug = `${slugBase}-${Math.random().toString(36).slice(2, 6)}`
    const post = await prisma.post.create({
      data: {
        title,
        slug,
        type,
        description,
        status: 'draft',
        authorId: userId || undefined,
        categoryId: categoryId ? categoryId : null,
        media: mediaAssets && mediaAssets.length > 0 ? {
          create: mediaAssets.map((m) => ({ kind: m.kind, provider: m.provider, publicId: m.publicId, width: m.width, height: m.height, duration: m.duration }))
        } : undefined,
        tags: tags
          ? {
              create: tags
                .split(',')
                .map((t) => t.trim())
                .filter(Boolean)
                .map((name) => ({
                  tag: {
                    connectOrCreate: {
                      where: { slug: name.toLowerCase() },
                      create: { slug: name.toLowerCase(), name }
                    }
                  }
                }))
            }
          : undefined
      }
    })
    await prisma.submission.create({
      data: {
        postId: post.id,
        submitterId: userId || (await ensureAnonymous()),
        status: 'pending',
        licenseAccepted,
        ageRestricted: !!ageRestricted,
        externalUrl
      }
    })
    return Response.json({ ok: true, slug: post.slug })
  } catch (e) {
    return Response.json({ error: 'Failed to submit' }, { status: 500 })
  }
}

async function ensureAnonymous() {
  const email = 'anon@peaknewsdaily.local'
  const u = await prisma.user.upsert({ where: { email }, update: {}, create: { email, name: 'Anonymous' } })
  return u.id
}
