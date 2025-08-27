import { PrismaClient, Role, SubmissionStatus, PostType } from '@prisma/client'
import { createHash } from 'crypto'

const prisma = new PrismaClient()

async function main() {
  // Ensure pg_trgm extension for better search
  try {
    await prisma.$executeRawUnsafe('CREATE EXTENSION IF NOT EXISTS "pg_trgm"')
  } catch (e) {
    console.warn('Could not enable pg_trgm extension. Proceeding without it.')
  }

  const adminEmail = process.env.ADMIN_EMAIL
  if (!adminEmail) {
    throw new Error('ADMIN_EMAIL env is required for seeding')
  }

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: { role: Role.admin },
    create: { email: adminEmail, name: 'Admin', role: Role.admin }
  })

  const categories = ['News', 'Music', 'Funny', 'Sports', 'Culture']
  for (const name of categories) {
    await prisma.category.upsert({
      where: { slug: name.toLowerCase() },
      update: {},
      create: { name, slug: name.toLowerCase() }
    })
  }

  const funny = await prisma.category.findUnique({ where: { slug: 'funny' } })

  const post = await prisma.post.upsert({
    where: { slug: 'welcome-to-peaknewsdaily' },
    update: {},
    create: {
      slug: 'welcome-to-peaknewsdaily',
      title: 'Welcome to PeakNewsDaily',
      description: 'A modern, moderated media hub focused on safe content.',
      type: PostType.Other,
      authorId: admin.id,
      categoryId: funny?.id,
      status: 'published',
      publishedAt: new Date(),
      tags: {
        create: [{
          tag: {
            connectOrCreate: {
              where: { slug: 'announcement' },
              create: { slug: 'announcement', name: 'Announcement' }
            }
          }
        }]
      }
    }
  })

  await prisma.submission.create({
    data: {
      postId: post.id,
      submitterId: admin.id,
      status: SubmissionStatus.approved,
      licenseAccepted: true,
      ageRestricted: false,
      notes: 'Seed submission'
    }
  })

  // Basic view event for demonstration
  const ipHash = createHash('sha256').update('127.0.0.1').digest('hex')
  await prisma.viewEvent.create({
    data: { postId: post.id, ipHash, userAgent: 'seed' }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

