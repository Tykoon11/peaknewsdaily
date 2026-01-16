const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function createInvestingContent() {
  try {
    console.log('🏗️ Creating investing content...')

    // First, ensure investing category exists
    const investingCategory = await prisma.category.upsert({
      where: { slug: 'investing' },
      update: {},
      create: {
        name: 'Investing',
        slug: 'investing',
      }
    })

    console.log('✅ Category created:', investingCategory.name)

    // Create investing articles
    const articles = [
      {
        title: '2025 Portfolio Diversification Guide: Modern Asset Allocation Strategies',
        slug: '2025-portfolio-diversification-guide-modern-asset-allocation-strategies',
        description: 'Master portfolio diversification in 2025 with updated asset allocation strategies that account for changing market correlations, new investment opportunities, and evolving risk factors. Learn optimal asset allocation for different age groups.',
        type: 'Other',
        status: 'published',
        publishedAt: new Date('2025-01-15'),
        categoryId: investingCategory.id
      },
      {
        title: 'ETF vs Mutual Funds 2025: Complete Comparison for Smart Investors',
        slug: 'etf-vs-mutual-funds-2025-complete-comparison-smart-investors',
        description: 'Discover the key differences between ETFs and mutual funds in 2025, including costs, tax efficiency, trading flexibility, and investment strategies to maximize your returns and minimize fees.',
        type: 'Other',
        status: 'published',
        publishedAt: new Date('2025-01-14'),
        categoryId: investingCategory.id
      },
      {
        title: 'S&P 500 Index Investing: Complete 2025 Strategy Guide',
        slug: 'sp-500-index-investing-complete-2025-strategy-guide',
        description: 'Learn how to invest in the S&P 500 index with our comprehensive 2025 guide covering strategy, timing, dollar-cost averaging, and the best index funds and ETFs for long-term wealth building.',
        type: 'Other',
        status: 'published',
        publishedAt: new Date('2025-01-13'),
        categoryId: investingCategory.id
      },
      {
        title: 'Retirement Planning 2025: 401k, IRA & Investment Strategies',
        slug: 'retirement-planning-2025-401k-ira-investment-strategies',
        description: 'Complete retirement planning guide for 2025 covering 401k optimization, IRA strategies, Social Security planning, tax-efficient withdrawal strategies, and age-appropriate portfolio allocation for retirement success.',
        type: 'Other',
        status: 'published',
        publishedAt: new Date('2025-01-12'),
        categoryId: investingCategory.id
      },
      {
        title: 'Real Estate Investment Trusts (REITs): Complete 2025 Guide',
        slug: 'real-estate-investment-trusts-reits-complete-2025-guide',
        description: 'Master REIT investing in 2025 with our comprehensive guide covering types, benefits, risks, tax implications, and the best REITs and REIT ETFs for your portfolio diversification strategy.',
        type: 'Other',
        status: 'published',
        publishedAt: new Date('2025-01-11'),
        categoryId: investingCategory.id
      },
      {
        title: 'Dividend Investing Strategy 2025: High-Yield Stocks & Income Portfolio',
        slug: 'dividend-investing-strategy-2025-high-yield-stocks-income-portfolio',
        description: 'Build a reliable income stream with dividend investing. Learn about dividend yield analysis, dividend growth stocks, REITs, and how to create a diversified dividend portfolio for passive income.',
        type: 'Other',
        status: 'published',
        publishedAt: new Date('2025-01-10'),
        categoryId: investingCategory.id
      },
      {
        title: 'Value Investing in 2025: Warren Buffett Strategy for Modern Markets',
        slug: 'value-investing-2025-warren-buffett-strategy-modern-markets',
        description: 'Apply timeless value investing principles to 2025 markets. Learn fundamental analysis, stock screening techniques, and how to find undervalued companies using Warren Buffett\'s proven investment approach.',
        type: 'Other',
        status: 'published',
        publishedAt: new Date('2025-01-09'),
        categoryId: investingCategory.id
      },
      {
        title: 'ESG Investing Guide 2025: Sustainable and Socially Responsible Investing',
        slug: 'esg-investing-guide-2025-sustainable-socially-responsible-investing',
        description: 'Explore Environmental, Social, and Governance (ESG) investing opportunities in 2025. Learn about ESG screening, impact investing, green bonds, and sustainable investment strategies that align with your values.',
        type: 'Other',
        status: 'published',
        publishedAt: new Date('2025-01-08'),
        categoryId: investingCategory.id
      }
    ]

    // Create articles in database
    for (const article of articles) {
      const post = await prisma.post.create({
        data: article
      })
      console.log(`✅ Created article: ${post.title}`)
    }

    console.log('🎉 Successfully created all investing content!')

  } catch (error) {
    console.error('❌ Error creating investing content:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

// Run the script
createInvestingContent()
  .then(() => {
    console.log('✅ Script completed successfully')
    process.exit(0)
  })
  .catch((error) => {
    console.error('❌ Script failed:', error)
    process.exit(1)
  })