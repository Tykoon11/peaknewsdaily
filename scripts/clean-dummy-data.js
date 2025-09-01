const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function cleanDummyData() {
  console.log('🧹 Starting cleanup of dummy/entertainment data...')
  
  try {
    // Delete all old posts (entertainment content)
    const deletedPosts = await prisma.post.deleteMany({
      where: {
        OR: [
          { title: { contains: 'Cardi' } },
          { title: { contains: 'Offset' } },
          { title: { contains: 'Paris' } },
          { title: { contains: 'Music' } },
          { title: { contains: 'Entertainment' } },
          { slug: { contains: 'cardi' } },
          { slug: { contains: 'offset' } },
          { slug: { contains: 'paris' } },
          { slug: { contains: 'music' } },
          { slug: { contains: 'ivyj' } },
          { slug: { contains: 'guhu' } }
        ]
      }
    })
    
    console.log(`✅ Deleted ${deletedPosts.count} old entertainment posts`)
    
    // Delete old categories not related to trading/investing
    const deletedCategories = await prisma.category.deleteMany({
      where: {
        slug: {
          in: ['funny', 'music', 'sports', 'culture', 'interesting']
        }
      }
    })
    
    console.log(`✅ Deleted ${deletedCategories.count} entertainment categories`)
    
    // Count remaining professional content
    const remainingPosts = await prisma.post.count()
    const newsItems = await prisma.newsItem.count()
    const topics = await prisma.topic.count()
    const professionalCategories = await prisma.category.count()
    
    console.log(`📊 Remaining content:`)
    console.log(`   - Posts: ${remainingPosts} (should be trading/investing only)`)
    console.log(`   - Live News Items: ${newsItems} (from RSS feeds)`)
    console.log(`   - News Topics: ${topics}`)
    console.log(`   - Categories: ${professionalCategories} (should be trading/investing only)`)
    
    console.log('✨ Cleanup completed successfully!')
    
  } catch (error) {
    console.error('❌ Error during cleanup:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

cleanDummyData().catch((error) => {
  console.error('Failed to clean dummy data:', error)
  process.exit(1)
})