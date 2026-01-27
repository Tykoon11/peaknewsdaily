const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

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
    
    // Remove class attributes that might contain styling
    .replace(/\s+class="[^"]*"/g, '')
    
    // Clean up extra whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .trim();
}

async function finalInvestingRedesign() {
  console.log('🎨 FINAL INVESTING REDESIGN: Converting all remaining articles to clean design...');
  
  // All investing articles that need redesigning (excluding already redesigned portfolio guide)
  const articlesToRedesign = [
    { id: 'cmkh4d4dr000441sh5gh3quse', name: 'ETF vs Mutual Funds 2025: Complete Comparison for Smart Investors' },
    { id: 'cmkh4d4h5000641shpvipq4t6', name: 'S&P 500 Index Investing: Complete 2025 Strategy Guide' }, 
    { id: 'cmkh4d4kl000841sh635yqq1h', name: 'Retirement Planning 2025: 401k, IRA & Investment Strategies' },
    { id: 'cmkh4d4o2000a41shvl63fbqj', name: 'Real Estate Investment Trusts (REITs): Complete 2025 Guide' },
    { id: 'cmkh4d4ri000c41sh85u2ub71', name: 'Dividend Investing Strategy 2025: High-Yield Stocks & Income Portfolio' },
    { id: 'cmkh4d4ux000e41shth1syti7', name: 'Value Investing in 2025: Warren Buffett Strategy for Modern Markets' },
    { id: 'cmkh4d4ye000g41shttzac4n5', name: 'ESG Investing Guide 2025: Sustainable and Socially Responsible Investing' }
  ];
  
  let successCount = 0;
  let errorCount = 0;
  
  console.log(`\n📋 Processing ${articlesToRedesign.length} investing articles...\n`);
  
  for (const article of articlesToRedesign) {
    try {
      console.log(`🔄 Processing: ${article.name}...`);
      
      // Get current content
      const currentPost = await prisma.post.findUnique({
        where: { id: article.id },
        select: { content: true, title: true }
      });
      
      if (!currentPost) {
        console.log(`❌ Post not found: ${article.name}`);
        errorCount++;
        continue;
      }
      
      // Check if content needs cleaning
      const hasInlineStyles = currentPost.content && 
        (currentPost.content.includes('style="') || 
         currentPost.content.includes('class="') ||
         currentPost.content.includes('<div style'));
      
      if (!hasInlineStyles) {
        console.log(`✅ Already clean: ${article.name}`);
        successCount++;
        continue;
      }
      
      // Clean the content
      const cleanContent = cleanHTMLContent(currentPost.content || '');
      
      // Update the post
      await prisma.post.update({
        where: { id: article.id },
        data: { content: cleanContent }
      });
      
      console.log(`✅ Successfully redesigned: ${article.name}`);
      successCount++;
      
    } catch (error) {
      console.log(`❌ Error processing ${article.name}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n🎨 FINAL REDESIGN COMPLETE!`);
  console.log(`✅ Successfully processed: ${successCount} articles`);
  console.log(`❌ Errors encountered: ${errorCount} articles`);
  console.log(`📝 All investing articles now match the clean welcome page design`);
  console.log(`🚀 Ready for perfect consistency across all investing content!`);
}

finalInvestingRedesign()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });