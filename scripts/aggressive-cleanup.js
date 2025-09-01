const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function aggressiveCleanup() {
  console.log('🧹 Starting aggressive cleanup - keeping ONLY professional trading content...')
  
  try {
    // Keep only the 3 professional trading posts I created
    const keepSlugs = [
      'crypto-wallet-security-guide',
      'position-sizing-guide-2025', 
      'welcome-to-peaknewsdaily-trading'
    ]
    
    // Delete all posts EXCEPT the ones we want to keep
    const deletedPosts = await prisma.post.deleteMany({
      where: {
        slug: {
          notIn: keepSlugs
        }
      }
    })
    
    console.log(`✅ Deleted ${deletedPosts.count} dummy posts`)
    
    // Delete ALL old categories and keep only trading/investing ones
    const deletedCategories = await prisma.category.deleteMany({
      where: {
        slug: {
          notIn: ['investing', 'trading', 'crypto', 'brokers', 'how-to', 'tools', 'news']
        }
      }
    })
    
    console.log(`✅ Deleted ${deletedCategories.count} non-trading categories`)
    
    // Count what remains
    const remainingPosts = await prisma.post.count()
    const newsItems = await prisma.newsItem.count()
    const topics = await prisma.topic.count()
    const categories = await prisma.category.count()
    
    console.log(`📊 Final content:`)
    console.log(`   - Posts: ${remainingPosts} (should be exactly 3 trading posts)`)
    console.log(`   - Live News Items: ${newsItems} (from RSS feeds)`)
    console.log(`   - News Topics: ${topics}`)
    console.log(`   - Categories: ${categories} (trading/investing only)`)
    
    // List remaining posts to verify
    const finalPosts = await prisma.post.findMany({
      select: { title: true, slug: true }
    })
    
    console.log(`🔍 Remaining posts:`)
    finalPosts.forEach((post, i) => {
      console.log(`   ${i + 1}. "${post.title}" (${post.slug})`)
    })
    
    console.log('✨ Aggressive cleanup completed!')
    
  } catch (error) {
    console.error('❌ Error during cleanup:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

aggressiveCleanup().catch((error) => {
  console.error('Failed to clean data:', error)
  process.exit(1)
})