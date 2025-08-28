import { PrismaClient, PostType } from '@prisma/client'
import { v2 as cloudinary } from 'cloudinary'

const prisma = new PrismaClient()

const TITLES = [
  'Breaking: Major Development Unfolds',
  'Inside Story: What You Missed Today',
  'Exclusive: Expert Weighs In',
  'Analysis: The Big Picture',
  'Feature: A Closer Look',
  'Spotlight: Voices From the Field',
  'Update: What Happens Next',
  'Opinion: The Case For Change',
  'Report: Key Metrics to Watch',
  'Deep Dive: Unpacking the Trend'
]

const DESCS = [
  'A concise summary to introduce the key highlights and context.',
  'Key facts and insights distilled for quick reading and clarity.',
  'What to know now, and why it matters going forward.',
  'The essentials: context, implications, and next steps.',
  'A brief look at the critical developments shaping the story.'
]

function pick<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)] }

async function maybeUploadToCloudinary(url: string): Promise<{ publicId?: string; sourceUrl?: string }> {
  // Only upload to Cloudinary when explicitly enabled
  if (process.env.SEED_USE_CLOUDINARY !== 'true') return { sourceUrl: url }
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET
  if (!cloudName || !apiKey || !apiSecret) return { sourceUrl: url }
  cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret })
  try {
    const res = await cloudinary.uploader.upload(url, { folder: 'seed' })
    return { publicId: res.public_id }
  } catch {
    return { sourceUrl: url }
  }
}

async function main() {
  if (process.env.SEED_APPEND === 'true') {
    console.log('Seeding in append mode (no wipe).')
  } else {
    console.log('Seeding: wiping existing content...')
    await prisma.viewEvent.deleteMany({})
    await prisma.comment.deleteMany({})
    await prisma.reaction.deleteMany({})
    await prisma.mediaAsset.deleteMany({})
    await prisma.postTag.deleteMany({})
    await prisma.post.deleteMany({})
    await prisma.submission.deleteMany({})
  }

  // Ensure core categories exist
  const catSlugs = [
    { slug: 'news', name: 'News' },
    { slug: 'sports', name: 'Sports' },
    { slug: 'culture', name: 'Culture' },
    { slug: 'funny', name: 'Funny' },
    { slug: 'interesting', name: 'Interesting' }
  ]
  for (const c of catSlugs) {
    await prisma.category.upsert({ where: { slug: c.slug }, update: {}, create: c })
  }
  const cats = await prisma.category.findMany({ where: { slug: { in: catSlugs.map((c) => c.slug) } } })

  const items: { title: string; description: string; image: string }[] = []
  for (let i = 0; i < 40; i++) {
    items.push({
      title: `${pick(TITLES)} #${i + 1}`,
      description: pick(DESCS),
      image: `https://picsum.photos/seed/pnd-${i}/1200/800`
    })
  }
  console.log(`Creating ${items.length} posts...${process.env.SEED_USE_CLOUDINARY === 'true' ? ' (uploading images to Cloudinary)' : ''}`)
  const COUNTRIES = ['US','CA','GB','NG','DE','FR','BR','IN']
  for (const it of items) {
    const slugBase = it.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    const slug = `${slugBase}-${Math.random().toString(36).slice(2, 6)}`
    const { publicId, sourceUrl } = await maybeUploadToCloudinary(it.image)
    const pickCat = cats[Math.floor(Math.random() * cats.length)]
    const post = await prisma.post.create({
      data: {
        slug,
        title: it.title,
        description: it.description,
        type: PostType.Other,
        categoryId: pickCat.id,
        country: COUNTRIES[Math.floor(Math.random()*COUNTRIES.length)],
        status: 'published',
        publishedAt: new Date(),
        media: {
          create: [{
            kind: 'image',
            provider: publicId ? 'cloudinary' : 'external',
            publicId: publicId || `external-${Math.random().toString(36).slice(2, 10)}`,
            sourceUrl: sourceUrl || (publicId ? undefined : it.image)
          }]
        },
        tags: {
          create: [
            { tag: { connectOrCreate: { where: { slug: 'feature' }, create: { slug: 'feature', name: 'Feature' } } } },
            { tag: { connectOrCreate: { where: { slug: 'top' }, create: { slug: 'top', name: 'Top' } } } }
          ]
        }
      }
    })
    if ((items.indexOf(it) + 1) % 5 === 0) {
      console.log(`Created ${items.indexOf(it) + 1}/${items.length} posts...`)
    }
    // small random views for realism
    const views = Math.floor(Math.random() * 2000)
    if (views > 0) {
      await prisma.post.update({ where: { id: post.id }, data: { views } })
    }
  }
  console.log('Seeding completed.')
}

main()
  .then(async () => { await prisma.$disconnect() })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1) })
