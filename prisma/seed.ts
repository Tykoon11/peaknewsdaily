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

  // Trading & Investing focused categories
  const categories = [
    { name: 'Investing', slug: 'investing' },
    { name: 'Trading', slug: 'trading' },
    { name: 'Crypto', slug: 'crypto' },
    { name: 'Brokers', slug: 'brokers' },
    { name: 'How-To', slug: 'how-to' },
    { name: 'Tools', slug: 'tools' },
    { name: 'News', slug: 'news' }
  ]
  
  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: { name: category.name },
      create: { name: category.name, slug: category.slug }
    })
  }

  const investing = await prisma.category.findUnique({ where: { slug: 'investing' } })
  const trading = await prisma.category.findUnique({ where: { slug: 'trading' } })
  const crypto = await prisma.category.findUnique({ where: { slug: 'crypto' } })

  // Welcome post updated for trading focus
  const welcomePost = await prisma.post.upsert({
    where: { slug: 'welcome-to-peaknewsdaily-trading' },
    update: {},
    create: {
      slug: 'welcome-to-peaknewsdaily-trading',
      title: 'Welcome to PeakNewsDaily: Your Trading & Investing Hub',
      description: 'Discover professional trading strategies, investment insights, and crypto education.',
      type: PostType.Other,
      authorId: admin.id,
      categoryId: investing?.id,
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

  // Sample trading content
  const positionSizingPost = await prisma.post.upsert({
    where: { slug: 'position-sizing-guide-2025' },
    update: {},
    create: {
      slug: 'position-sizing-guide-2025',
      title: 'Position Sizing 101: How Much to Risk Per Trade',
      description: 'Learn the essential position sizing formulas and risk management techniques used by professional traders.',
      type: PostType.Other,
      authorId: admin.id,
      categoryId: trading?.id,
      status: 'published',
      publishedAt: new Date(),
      tags: {
        create: [
          {
            tag: {
              connectOrCreate: {
                where: { slug: 'risk-management' },
                create: { slug: 'risk-management', name: 'Risk Management' }
              }
            }
          },
          {
            tag: {
              connectOrCreate: {
                where: { slug: 'trading-basics' },
                create: { slug: 'trading-basics', name: 'Trading Basics' }
              }
            }
          }
        ]
      }
    }
  })

  const cryptoWalletPost = await prisma.post.upsert({
    where: { slug: 'crypto-wallet-security-guide' },
    update: {},
    create: {
      slug: 'crypto-wallet-security-guide',
      title: 'Crypto Wallets: Custodial vs Non-Custodial vs Hardware',
      description: 'Complete guide to choosing the right crypto wallet for your security needs and trading style.',
      type: PostType.Other,
      authorId: admin.id,
      categoryId: crypto?.id,
      status: 'published',
      publishedAt: new Date(),
      tags: {
        create: [
          {
            tag: {
              connectOrCreate: {
                where: { slug: 'wallet-security' },
                create: { slug: 'wallet-security', name: 'Wallet Security' }
              }
            }
          },
          {
            tag: {
              connectOrCreate: {
                where: { slug: 'crypto-basics' },
                create: { slug: 'crypto-basics', name: 'Crypto Basics' }
              }
            }
          }
        ]
      }
    }
  })

  // Create submissions for new posts
  await prisma.submission.create({
    data: {
      postId: welcomePost.id,
      submitterId: admin.id,
      status: SubmissionStatus.approved,
      licenseAccepted: true,
      ageRestricted: false,
      notes: 'Welcome post for trading rebrand'
    }
  })

  await prisma.submission.create({
    data: {
      postId: positionSizingPost.id,
      submitterId: admin.id,
      status: SubmissionStatus.approved,
      licenseAccepted: true,
      ageRestricted: false,
      notes: 'Position sizing educational content'
    }
  })

  await prisma.submission.create({
    data: {
      postId: cryptoWalletPost.id,
      submitterId: admin.id,
      status: SubmissionStatus.approved,
      licenseAccepted: true,
      ageRestricted: false,
      notes: 'Crypto security educational content'
    }
  })

  // View events for demonstration
  const ipHash = createHash('sha256').update('127.0.0.1').digest('hex')
  await prisma.viewEvent.create({
    data: { postId: welcomePost.id, ipHash, userAgent: 'seed' }
  })
  await prisma.viewEvent.create({
    data: { postId: positionSizingPost.id, ipHash, userAgent: 'seed' }
  })
  await prisma.viewEvent.create({
    data: { postId: cryptoWalletPost.id, ipHash, userAgent: 'seed' }
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

