const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function checkRemainingPosts() {
  try {
    const posts = await prisma.post.findMany({
      select: { 
        id: true,
        title: true, 
        slug: true, 
        createdAt: true,
        type: true
      },
      orderBy: { createdAt: 'desc' }
    })
    
    console.log(`📊 Found ${posts.length} posts:`)
    posts.forEach((post, index) => {
      console.log(`${index + 1}. "${post.title}" (${post.slug}) - ${post.type} - ${post.createdAt}`)
    })
    
  } catch (error) {
    console.error('❌ Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

checkRemainingPosts()