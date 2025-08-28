import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('Pruning posts without media...')
  const noMedia = await prisma.post.findMany({ where: { media: { none: {} } }, select: { id: true, slug: true } })
  console.log(`Found ${noMedia.length} posts without media`)
  for (const p of noMedia) {
    await prisma.viewEvent.deleteMany({ where: { postId: p.id } })
    await prisma.comment.deleteMany({ where: { postId: p.id } })
    await prisma.reaction.deleteMany({ where: { postId: p.id } })
    await prisma.postTag.deleteMany({ where: { postId: p.id } })
    await prisma.post.delete({ where: { id: p.id } })
    console.log(`Deleted post ${p.slug}`)
  }
  console.log('Prune completed.')
}

main().then(() => prisma.$disconnect()).catch((e) => { console.error(e); prisma.$disconnect(); process.exit(1) })

