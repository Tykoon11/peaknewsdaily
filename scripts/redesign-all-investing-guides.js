const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Function to strip inline styles and convert to clean HTML
function cleanHTMLContent(content) {
  return content
    // Remove div containers with inline styles but keep content
    .replace(/<div style="[^"]*">([\s\S]*?)<\/div>/g, '$1')
    
    // Remove style attributes from all tags
    .replace(/\s+style="[^"]*"/g, '')
    
    // Clean up table styling
    .replace(/<table[^>]*>/g, '<table>')
    .replace(/<tr[^>]*>/g, '<tr>')
    .replace(/<td[^>]*>/g, '<td>')
    .replace(/<th[^>]*>/g, '<th>')
    
    // Remove any remaining style attributes that might have been missed
    .replace(/\s+style='[^']*'/g, '')
    
    // Clean up extra whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .trim();
}

async function redesignInvestingGuides() {
  console.log('🎨 Redesigning all investing guides with clean HTML structure...');
  
  // Array of post IDs and titles to redesign
  const postsToRedesign = [
    { id: 'cmkh4d4dr000441sh5gh3quse', name: 'ETF vs Mutual Funds Guide' },
    { id: 'cmkh4d4h5000641shpvipq4t6', name: 'S&P 500 Index Investing Guide' }, 
    { id: 'cmkh4d4kl000841sh635yqq1h', name: 'Retirement Planning Guide' },
    { id: 'cmkh4d4o2000a41shvl63fbqj', name: 'REITs Investment Guide' },
    { id: 'cmkh4d4ri000c41sh85u2ub71', name: 'Dividend Investing Strategy' },
    { id: 'cmkh4d4ux000e41shth1syti7', name: 'Value Investing Warren Buffett Strategy' },
    { id: 'cmkh4d4ye000g41shttzac4n5', name: 'ESG Investing Guide' }
  ];
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const post of postsToRedesign) {
    try {
      console.log(`\\n🔄 Processing: ${post.name}...`);
      
      // Get current content
      const currentPost = await prisma.post.findUnique({
        where: { id: post.id }
      });
      
      if (!currentPost) {
        console.log(`❌ Post not found: ${post.name}`);
        errorCount++;
        continue;
      }
      
      // Clean the content
      const cleanContent = cleanHTMLContent(currentPost.content || '');
      
      // Update the post
      await prisma.post.update({
        where: { id: post.id },
        data: { content: cleanContent }
      });
      
      console.log(`✅ Successfully redesigned: ${post.name}`);
      successCount++;
      
    } catch (error) {
      console.log(`❌ Error processing ${post.name}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\\n🎨 Redesign Complete!`);
  console.log(`✅ Successfully processed: ${successCount} guides`);
  console.log(`❌ Errors encountered: ${errorCount} guides`);
  console.log(`📝 All inline styling removed and converted to clean semantic HTML`);
}

redesignInvestingGuides()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });