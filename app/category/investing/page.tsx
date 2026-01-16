import React from 'react';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import HomeFeed from '@/components/home-feed';
import SearchGrid from '@/components/search-grid';

export const metadata: Metadata = {
  title: 'Investing Guide 2025 - Portfolio Diversification, Asset Allocation & Stock Analysis | PeakNewsDaily',
  description: 'Comprehensive investing guide for 2025. Learn portfolio diversification, asset allocation strategies, stock analysis, ETF investing, and financial planning from industry experts.',
  keywords: 'investing guide 2025, portfolio diversification, asset allocation, stock investing, ETF investing, mutual funds, bonds, financial planning, investment strategies, retirement planning, wealth building, stock analysis, market trends',
  openGraph: {
    title: 'Investing Guide 2025 - Professional Portfolio & Asset Allocation Strategies',
    description: 'Master investing with our comprehensive 2025 guide. Portfolio diversification, asset allocation, stock analysis, and expert investment strategies.',
    type: 'website',
    url: 'https://peaknewsdaily.com/category/investing',
    images: [
      {
        url: '/og-investing.jpg',
        width: 1200,
        height: 630,
        alt: 'Investing Guide 2025 - Portfolio Diversification & Asset Allocation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investing Guide 2025 - Portfolio & Asset Allocation Strategies',
    description: 'Comprehensive investing guide covering portfolio diversification, asset allocation, stock analysis, and financial planning for 2025.',
    images: ['/og-investing.jpg'],
  },
  alternates: {
    canonical: 'https://peaknewsdaily.com/category/investing',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const revalidate = 300;

export default async function InvestingPage() {
  let category: any = null
  let posts: Array<any> = []

  if (process.env.DATABASE_URL) {
    try {
      // Get investing category and posts
      category = await prisma.category.findUnique({ 
        where: { slug: 'investing' } 
      });
      
      if (category) {
        posts = await prisma.post.findMany({
          where: { categoryId: category.id, status: 'published' },
          orderBy: { publishedAt: 'desc' },
          take: 12,
          include: { media: true, tags: { include: { tag: true } } }
        });
      }
    } catch (error) {
      console.warn('Failed to fetch investing page data:', error)
    }
  }

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Investing Guide 2025",
    "description": "Comprehensive investing guide covering portfolio diversification, asset allocation, stock analysis, ETF investing, and financial planning strategies for 2025.",
    "url": "https://peaknewsdaily.com/category/investing",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "PeakNewsDaily Investment Education",
      "description": "Professional investment education and analysis",
      "educationalLevel": "Beginner to Advanced"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Portfolio Diversification"
      },
      {
        "@type": "Thing", 
        "name": "Asset Allocation"
      },
      {
        "@type": "Thing",
        "name": "Stock Investing"
      },
      {
        "@type": "Thing",
        "name": "ETF Investing"
      }
    ],
    "provider": {
      "@type": "Organization",
      "name": "PeakNewsDaily",
      "url": "https://peaknewsdaily.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://peaknewsdaily.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Investing",
          "item": "https://peaknewsdaily.com/category/investing"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 via-blue-900 to-indigo-900 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Investing Guide 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-4xl mx-auto">
              Master portfolio diversification, asset allocation, and investment strategies. 
              Build wealth with expert analysis, stock research, and professional financial planning insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-green-800 px-4 py-2 rounded-full">📊 Portfolio Analysis</span>
              <span className="bg-blue-800 px-4 py-2 rounded-full">🎯 Asset Allocation</span>
              <span className="bg-indigo-800 px-4 py-2 rounded-full">📈 Stock Research</span>
              <span className="bg-green-700 px-4 py-2 rounded-full">💰 Wealth Building</span>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview Stats */}
      <section className="py-12 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15%+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Historical Market Returns</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">30+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Years Investment Horizon</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">5-7</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Asset Classes for Diversification</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2025</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Strategic Investment Year</div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Investment Strategies Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">💼 2025 Investment Strategies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Portfolio Diversification */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="text-xl font-bold">Portfolio Diversification</h3>
                <p className="text-green-100 text-sm mt-2">Spread risk across multiple asset classes</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span><strong>Stock Allocation:</strong> 60-70% for growth potential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span><strong>Bond Allocation:</strong> 20-30% for stability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span><strong>Alternative Assets:</strong> 10-20% for inflation hedge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    <span><strong>Cash Reserve:</strong> 5-10% for opportunities</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-xs text-green-800 dark:text-green-300">
                    <strong>2025 Focus:</strong> Traditional 60/40 portfolios need evolution due to changing stock-bond correlations.
                  </p>
                </div>
              </div>
            </div>

            {/* Asset Allocation */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-bold">Strategic Asset Allocation</h3>
                <p className="text-blue-100 text-sm mt-2">Age-based and goal-oriented strategies</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="font-semibold text-sm">Age 20-30 (Aggressive)</div>
                    <div className="text-xs text-gray-600">90% Stocks | 10% Bonds</div>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="font-semibold text-sm">Age 30-50 (Moderate)</div>
                    <div className="text-xs text-gray-600">70% Stocks | 30% Bonds</div>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="font-semibold text-sm">Age 50+ (Conservative)</div>
                    <div className="text-xs text-gray-600">50% Stocks | 50% Bonds</div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-xs text-blue-800 dark:text-blue-300">
                    <strong>Rule of Thumb:</strong> Stock allocation = 100 - your age (adjusted for 2025 longevity)
                  </p>
                </div>
              </div>
            </div>

            {/* Investment Vehicles */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-xl font-bold">Investment Vehicles</h3>
                <p className="text-purple-100 text-sm mt-2">Modern tools for portfolio construction</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">📈</span>
                    <span><strong>ETFs:</strong> Low-cost diversification with liquidity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">🏛️</span>
                    <span><strong>Index Funds:</strong> Passive investing in market returns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">🎯</span>
                    <span><strong>Target-Date Funds:</strong> Automated age-based allocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">💎</span>
                    <span><strong>Individual Stocks:</strong> Direct ownership for growth</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-xs text-purple-800 dark:text-purple-300">
                    <strong>2025 Trend:</strong> ESG investing and thematic ETFs gaining traction among millennials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">🏗️ Asset Class Breakdown</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stocks */}
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 border border-green-300">
              <div className="text-center">
                <div className="text-4xl mb-3">📈</div>
                <h3 className="text-lg font-bold text-green-800">Stocks & Equities</h3>
                <div className="text-2xl font-bold text-green-600 mt-2">60-70%</div>
                <p className="text-sm text-green-700 mt-2">Growth-oriented allocation</p>
              </div>
              <ul className="mt-4 space-y-2 text-xs text-green-800">
                <li>• Large-cap US stocks (25-30%)</li>
                <li>• International developed (15-20%)</li>
                <li>• Emerging markets (5-10%)</li>
                <li>• Small-cap growth (10-15%)</li>
              </ul>
            </div>

            {/* Bonds */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 border border-blue-300">
              <div className="text-center">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="text-lg font-bold text-blue-800">Bonds & Fixed Income</h3>
                <div className="text-2xl font-bold text-blue-600 mt-2">20-30%</div>
                <p className="text-sm text-blue-700 mt-2">Stability and income</p>
              </div>
              <ul className="mt-4 space-y-2 text-xs text-blue-800">
                <li>• Government bonds (10-15%)</li>
                <li>• Corporate bonds (5-10%)</li>
                <li>• Municipal bonds (3-5%)</li>
                <li>• Treasury inflation-protected (2-5%)</li>
              </ul>
            </div>

            {/* Real Estate */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 border border-purple-300">
              <div className="text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="text-lg font-bold text-purple-800">Real Estate</h3>
                <div className="text-2xl font-bold text-purple-600 mt-2">5-15%</div>
                <p className="text-sm text-purple-700 mt-2">Inflation hedge</p>
              </div>
              <ul className="mt-4 space-y-2 text-xs text-purple-800">
                <li>• REITs (Real Estate Investment Trusts)</li>
                <li>• Direct property ownership</li>
                <li>• Real estate crowdfunding</li>
                <li>• Infrastructure investments</li>
              </ul>
            </div>

            {/* Alternatives */}
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl p-6 border border-indigo-300">
              <div className="text-center">
                <div className="text-4xl mb-3">💎</div>
                <h3 className="text-lg font-bold text-indigo-800">Alternative Assets</h3>
                <div className="text-2xl font-bold text-indigo-600 mt-2">5-10%</div>
                <p className="text-sm text-indigo-700 mt-2">Diversification boost</p>
              </div>
              <ul className="mt-4 space-y-2 text-xs text-indigo-800">
                <li>• Commodities (gold, oil)</li>
                <li>• Cryptocurrency (Bitcoin, Ethereum)</li>
                <li>• Private equity/hedge funds</li>
                <li>• Collectibles and art</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk Management */}
        <div className="mb-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">⚠️ Risk Management Principles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">Diversification</h3>
              <p className="text-red-100 text-sm">
                Never put all eggs in one basket. Spread investments across asset classes, 
                sectors, and geographic regions to minimize concentration risk.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold mb-3">Time Horizon</h3>
              <p className="text-red-100 text-sm">
                Match your investment timeline with appropriate risk levels. 
                Longer horizons allow for more aggressive growth strategies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-3">Rebalancing</h3>
              <p className="text-red-100 text-sm">
                Regularly review and adjust your portfolio to maintain target allocations. 
                Rebalance quarterly or when allocations drift 5%+ from targets.
              </p>
            </div>
          </div>
        </div>

        {/* Latest Articles Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">📚 Latest Investing Articles</h2>
            <Link 
              href="/news?category=investing"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm flex items-center gap-1 transition-colors"
            >
              View All Articles →
            </Link>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-6">
            <SearchGrid category="investing" />
          </div>

          {/* Articles Feed */}
          {posts.length > 0 ? (
            <HomeFeed 
              initial={posts.map((p) => ({
                id: p.id,
                slug: p.slug,
                title: p.title,
                description: p.description || null,
                publishedAt: p.publishedAt ? p.publishedAt.toISOString() : null,
                createdAt: p.createdAt.toISOString(),
                media: p.media?.length ? p.media.map((m: any) => ({ 
                  kind: m.kind as any, 
                  publicId: m.publicId, 
                  sourceUrl: m.sourceUrl as any 
                })) : [],
                tags: p.tags.map((x: any) => ({ tag: { slug: x.tag.slug, name: x.tag.name } }))
              }))} 
              baseQuery={{ c: 'investing', s: 'latest' }} 
            />
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-12 text-center">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Building Investment Content</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our investment analysis and guides are coming soon. Check back for expert insights and market analysis.
              </p>
              <Link
                href="/markets/stocks"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                Browse Market Data
              </Link>
            </div>
          )}
        </div>

      </main>

      {/* Footer Educational Content */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">💼 Investment Resources</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/markets/stocks" className="hover:text-white transition-colors">Stock Market Analysis</Link></li>
                <li><Link href="/markets/crypto" className="hover:text-white transition-colors">Cryptocurrency Investing</Link></li>
                <li><Link href="/category/brokers" className="hover:text-white transition-colors">Broker Reviews</Link></li>
                <li><Link href="/education" className="hover:text-white transition-colors">Trading Education</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">📊 Portfolio Tools</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Asset Allocation Calculator</li>
                <li>Risk Tolerance Assessment</li>
                <li>Retirement Planning Tools</li>
                <li>Rebalancing Scheduler</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">🎯 Investment Goals</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Retirement Planning</li>
                <li>Wealth Accumulation</li>
                <li>Income Generation</li>
                <li>Capital Preservation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">⚠️ Important Disclaimers</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Investing involves risk, including potential loss of principal. Past performance does not guarantee future results. 
                Consider your investment objectives, risk tolerance, and time horizon before investing. Consult with a financial advisor for personalized advice.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 PeakNewsDaily. Professional investment education and analysis platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}