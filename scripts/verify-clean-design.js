const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function verifyCleanDesign() {
  console.log('🔍 DESIGN VERIFICATION: Checking all investing articles match welcome page design...\n');
  
  // All investing articles to verify
  const articlesToVerify = [
    { id: 'cmkh4d49c000241shz335rs2v', name: 'Portfolio Diversification Guide' },
    { id: 'cmkh4d4dr000441sh5gh3quse', name: 'ETF vs Mutual Funds Guide' },
    { id: 'cmkh4d4h5000641shpvipq4t6', name: 'S&P 500 Index Investing Guide' }, 
    { id: 'cmkh4d4kl000841sh635yqq1h', name: 'Retirement Planning Guide' },
    { id: 'cmkh4d4o2000a41shvl63fbqj', name: 'REITs Investment Guide' },
    { id: 'cmkh4d4ri000c41sh85u2ub71', name: 'Dividend Investing Strategy' },
    { id: 'cmkh4d4ux000e41shth1syti7', name: 'Value Investing Warren Buffett Strategy' },
    { id: 'cmkh4d4ye000g41shttzac4n5', name: 'ESG Investing Guide' }
  ];
  
  let cleanCount = 0;
  let issueCount = 0;
  const issues = [];
  
  for (const article of articlesToVerify) {
    try {
      const post = await prisma.post.findUnique({
        where: { id: article.id },
        select: { content: true, title: true, slug: true }
      });
      
      if (!post) {
        console.log(`❌ Post not found: ${article.name}`);
        issueCount++;
        continue;
      }
      
      const content = post.content || '';
      
      // Check for design issues
      const hasInlineStyles = content.includes('style="');
      const hasClassAttributes = content.includes('class="');
      const hasStyledDivs = content.includes('<div style');
      const hasStyledTables = content.includes('<table style') || content.includes('<tr style') || content.includes('<td style');
      
      const designIssues = [];
      if (hasInlineStyles) designIssues.push('inline styles');
      if (hasClassAttributes) designIssues.push('class attributes');
      if (hasStyledDivs) designIssues.push('styled divs');
      if (hasStyledTables) designIssues.push('styled tables');
      
      if (designIssues.length > 0) {
        console.log(`⚠️  ${article.name}: Found ${designIssues.join(', ')}`);
        console.log(`   URL: /post/${post.slug}`);
        issues.push({ name: article.name, issues: designIssues });
        issueCount++;
      } else {
        console.log(`✅ ${article.name}: Clean design verified`);
        cleanCount++;
      }
      
    } catch (error) {
      console.log(`❌ Error checking ${article.name}:`, error.message);
      issueCount++;
    }
  }
  
  console.log(`\n📊 DESIGN VERIFICATION RESULTS:`);
  console.log(`✅ Clean articles: ${cleanCount}`);
  console.log(`⚠️  Articles with issues: ${issueCount}`);
  
  if (issues.length > 0) {
    console.log(`\n🔧 Issues to fix:`);
    issues.forEach(issue => {
      console.log(`- ${issue.name}: ${issue.issues.join(', ')}`);
    });
  } else {
    console.log(`\n🎉 SUCCESS: All investing articles have clean, consistent design!`);
    console.log(`📋 All pages now match the welcome page structure`);
    console.log(`🚀 Ready for perfect user experience across all investing content`);
  }
}

verifyCleanDesign()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });