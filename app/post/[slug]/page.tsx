import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import ShareButtons from '@/components/share-buttons'
import AgeGate from '@/components/age-gate'
import ViewCounter from '@/components/view-counter'
import TradingHubLayout from '@/components/trading-hub-layout'
import InvestingGuideLayout from '@/components/investing-guide-layout'
import { Metadata } from 'next'

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } })
  if (!post) return {}
  return {
    title: post.title,
    description: post.description || undefined,
    openGraph: {
      title: post.title,
      description: post.description || undefined,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`
    }
  }
}

export default async function PostPage({ params }: Props) {
  let post = await prisma.post.findUnique({
    where: { slug: params.slug },
    include: { media: true, tags: { include: { tag: true } }, submission: true }
  })
  if (!post || post.status !== 'published') notFound()

  const primary = post.media[0]

  // Check if this is the trading hub post
  if (post.slug === 'welcome-to-peaknewsdaily-trading') {
    return (
      <TradingHubLayout 
        title={post.title}
        description={post.description || "Discover professional trading strategies, investment insights, and crypto education."}
        content={post.content || ""}
      />
    )
  }


  // Check if this is an investing guide that should use the special layout
  const investingGuides = [
    '2025-portfolio-diversification-guide-modern-asset-allocation-strategies',
    'etf-vs-mutual-funds-2025-complete-comparison-smart-investors',
    'sp-500-index-investing-complete-2025-strategy-guide',
    'retirement-planning-2025-401k-ira-investment-strategies',
    'real-estate-investment-trusts-reits-complete-2025-guide',
    'dividend-investing-strategy-2025-high-yield-stocks-income-portfolio',
    'value-investing-2025-warren-buffett-strategy-modern-markets',
    'esg-investing-guide-2025-sustainable-socially-responsible-investing'
  ];

  if (investingGuides.includes(post.slug)) {
    const categoryMapping: { [key: string]: string[] } = {
      '2025-portfolio-diversification-guide-modern-asset-allocation-strategies': ['Modern Diversification', 'Asset Allocation', 'Risk Management', '2025 Strategies'],
      'etf-vs-mutual-funds-2025-complete-comparison-smart-investors': ['ETF Analysis', 'Investment Comparison', 'Cost Analysis', 'Smart Investing'],
      'sp-500-index-investing-complete-2025-strategy-guide': ['Index Investing', 'S&P 500', 'Long-term Growth', 'Market Strategy'],
      'retirement-planning-2025-401k-ira-investment-strategies': ['Retirement Planning', '401k Optimization', 'IRA Strategies', 'Tax Advantages'],
      'real-estate-investment-trusts-reits-complete-2025-guide': ['REITs Investing', 'Real Estate', 'Income Generation', 'Portfolio Diversification'],
      'dividend-investing-strategy-2025-high-yield-stocks-income-portfolio': ['Dividend Investing', 'Income Stocks', 'High Yield', 'Portfolio Income'],
      'value-investing-2025-warren-buffett-strategy-modern-markets': ['Value Investing', 'Warren Buffett', 'Stock Analysis', 'Long-term Investing'],
      'esg-investing-guide-2025-sustainable-socially-responsible-investing': ['ESG Investing', 'Sustainable Finance', 'Responsible Investing', 'Impact Investing']
    };

    return (
      <InvestingGuideLayout 
        title={post.title}
        description={post.description || "Master modern investment strategies with professional guidance and comprehensive analysis."}
        content={post.content || ""}
        categories={categoryMapping[post.slug] || ['Investment Strategy', 'Financial Education', 'Portfolio Management', 'Wealth Building']}
      />
    )
  }

  return (
    <main className="container py-6 bg-white dark:bg-gray-900 min-h-screen">
      <article className="prose dark:prose-invert max-w-none">
        <h1>{post.title}</h1>
        {post.submission?.ageRestricted && <AgeGate />}
        <div className="my-4">
          {primary?.kind === 'video' ? (
            <video className="w-full rounded" controls playsInline preload="metadata">
              {primary?.publicId && (
                <source src={`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/video/upload/${primary.publicId}.mp4`} type="video/mp4" />
              )}
              Your browser does not support the video tag.
            </video>
          ) : primary?.kind === 'image' ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="w-full rounded" alt={post.title} src={primary?.sourceUrl || (primary?.publicId ? `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${primary?.publicId}.jpg` : '')} />
          ) : null}
        </div>
        {post.description && <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{post.description}</p>}
        {post.content && (
          <div className="prose-content" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
        )}
        <ShareButtons slug={post.slug} title={post.title} />
        <ViewCounter postId={post.id} />
      </article>
    </main>
  )
}
