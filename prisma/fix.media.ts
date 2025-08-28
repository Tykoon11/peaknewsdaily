import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

function imgFor(i: number) { return `https://picsum.photos/seed/fix-${i}/1200/800` }

async function main() {
  console.log('Attaching images to posts without media...')
  const posts = await prisma.post.findMany({ where: { media: { none: {} } }, select: { id: true, slug: true } })
  console.log(`Found ${posts.length} posts missing media`)
  let i = 0
  for (const p of posts) {
    const url = imgFor(i++)
    await prisma.mediaAsset.create({
      data: {
        kind: 'image',
        provider: 'external',
        publicId: `external-${Math.random().toString(36).slice(2, 10)}`,
        sourceUrl: url,
        postId: p.id
      }
    })
    console.log(`Attached image to ${p.slug}`)
  }
  console.log('Fix completed.')
}

main().then(() => prisma.$disconnect()).catch((e) => { console.error(e); prisma.$disconnect(); process.exit(1) })

