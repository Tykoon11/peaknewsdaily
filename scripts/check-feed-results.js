const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function checkFeedResults() {
  try {
    const newsCount = await prisma.newsItem.count()
    console.log(`📊 Total news items: ${newsCount}`)
    
    const recentNews = await prisma.newsItem.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
      select: { title: true, sourceName: true, createdAt: true }
    })
    
    console.log('\n🔥 Latest 5 news items:')
    recentNews.forEach((item, i) => {
      console.log(`${i + 1}. "${item.title}" - ${item.sourceName} (${item.createdAt})`)
    })
    
    const sourceStats = await prisma.newsItem.groupBy({
      by: ['sourceName'],
      _count: { id: true },
      orderBy: { _count: { id: 'desc' } }
    })
    
    console.log('\n📈 Articles by source:')
    sourceStats.forEach(stat => {
      console.log(`  ${stat.sourceName}: ${stat._count.id} articles`)
    })
    
  } catch (error) {
    console.error('❌ Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

checkFeedResults()