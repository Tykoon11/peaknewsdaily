import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import MarketOverview from '@/components/market-overview'
import EconomicCalendarPreview from '@/components/economic-calendar-preview'

export const metadata = {
  title: 'Financial Markets Overview - Live Stocks, Crypto & Economic Data | PeakNewsDaily',
  description: 'Comprehensive financial markets overview with real-time stock prices, cryptocurrency data, economic calendar, and professional market analysis.',
  keywords: 'financial markets, stock market, cryptocurrency, forex, commodities, economic calendar, market data, trading',
}

export const revalidate = 300 // Cache for 5 minutes

export default async function MarketsPage() {
  let marketStats = {
    totalAssets: 0,
    activeMarkets: 4, // stocks, crypto, forex, commodities
    gainers: 0,
    decliners: 0
  }
  let liveMarketData: any = null

  // Fetch live market analytics data
  try {
    const marketResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/market-analytics`, {
      cache: 'no-cache', // Always fetch fresh data
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'PeakNewsDaily-Server/1.0'
      }
    })
    if (marketResponse.ok) {
      liveMarketData = await marketResponse.json()
    }
  } catch (error) {
    console.warn('Failed to fetch live market data:', error)
  }

  if (process.env.DATABASE_URL) {
    try {
      const [assets, quotes] = await Promise.all([
        prisma.asset.count({
          where: { isActive: true }
        }),
        prisma.quote.findMany({
          orderBy: { timestamp: 'desc' },
          take: 100,
          include: { asset: true }
        })
      ])
      
      // Use live data when available, fallback to database
      marketStats.totalAssets = liveMarketData?.activeCryptocurrencies || assets
      marketStats.gainers = liveMarketData?.gainers24h || quotes.filter(q => q.changePercent && Number(q.changePercent) > 0).length
      marketStats.decliners = liveMarketData?.losers24h || quotes.filter(q => q.changePercent && Number(q.changePercent) < 0).length
    } catch (error) {
      console.warn('Failed to fetch market stats:', error)
    }
  }

  return (
    <>
      {/* Clean Markets Header */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Financial Markets
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Professional market intelligence across stocks, cryptocurrency, and economic events with real-time data.
            </p>

            {/* Simple Market Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {liveMarketData?.activeCryptocurrencies?.toLocaleString() || marketStats.totalAssets.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">Assets Tracked</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {liveMarketData?.gainers24h?.toLocaleString() || marketStats.gainers.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">Advancing</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {liveMarketData?.losers24h?.toLocaleString() || marketStats.decliners.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">Declining</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{marketStats.activeMarkets}</div>
                <div className="text-sm text-gray-500">Market Types</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          
          {/* Market Categories */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Market Categories</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Access comprehensive data and analysis across all major asset classes
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {/* Stocks */}
              <Link href="/markets/stocks" className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Stock Market</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Real-time stock prices, S&P 500, NASDAQ, and comprehensive equity analysis.
                </p>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <span>Explore Stocks</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Cryptocurrency */}
              <Link href="/markets/crypto" className="group relative bg-white dark:bg-gray-800 rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 xs:hover:-translate-y-2 overflow-hidden border border-slate-100 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="p-2 xs:p-3 sm:p-4 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg mb-3 xs:mb-4 sm:mb-6 w-fit">
                    <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0L8.59 10.59L0 12l8.59 1.41L12 24l3.41-10.59L24 12l-8.59-1.41z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-slate-800 dark:text-gray-100 mb-2 xs:mb-2 sm:mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Cryptocurrency</h3>
                  <p className="text-slate-600 dark:text-gray-300 mb-3 xs:mb-4 sm:mb-6 text-xs xs:text-sm sm:text-base leading-relaxed">
                    24/7 crypto market data, Bitcoin, Ethereum, altcoins, and DeFi tokens with real-time price tracking.
                  </p>
                  <div className="flex items-center text-orange-600 group-hover:text-orange-700 font-semibold text-xs xs:text-sm sm:text-base">
                    <span>Explore Crypto</span>
                    <svg className="w-3 h-3 xs:w-4 xs:h-4 ml-1 xs:ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Economic Calendar */}
              <Link href="/markets/calendar" className="group relative bg-white dark:bg-gray-800 rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 xs:hover:-translate-y-2 overflow-hidden border border-slate-100 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="p-2 xs:p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg mb-3 xs:mb-4 sm:mb-6 w-fit">
                    <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-slate-800 dark:text-gray-100 mb-2 xs:mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Economic Calendar</h3>
                  <p className="text-slate-600 dark:text-gray-300 mb-3 xs:mb-4 sm:mb-6 text-xs xs:text-sm sm:text-base leading-relaxed">
                    Key economic events, central bank meetings, and market-moving announcements with impact analysis.
                  </p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-semibold text-xs xs:text-sm sm:text-base">
                    <span>View Calendar</span>
                    <svg className="w-3 h-3 xs:w-4 xs:h-4 ml-1 xs:ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* News & Analysis */}
              <Link href="/news" className="group relative bg-white dark:bg-gray-800 rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 xs:hover:-translate-y-2 overflow-hidden border border-slate-100 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="p-2 xs:p-3 sm:p-4 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg mb-3 xs:mb-4 sm:mb-6 w-fit">
                    <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2.5 2.5 0 00-2.5-2.5H15" />
                    </svg>
                  </div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-slate-800 dark:text-gray-100 mb-2 xs:mb-2 sm:mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Market News</h3>
                  <p className="text-slate-600 dark:text-gray-300 mb-3 xs:mb-4 sm:mb-6 text-xs xs:text-sm sm:text-base leading-relaxed">
                    Breaking financial news, market analysis, and expert insights to keep you informed on market movements.
                  </p>
                  <div className="flex items-center text-purple-600 group-hover:text-purple-700 font-semibold text-xs xs:text-sm sm:text-base">
                    <span>Read News</span>
                    <svg className="w-3 h-3 xs:w-4 xs:h-4 ml-1 xs:ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Live Market Overview */}
          <section className="mb-8 xs:mb-12 sm:mb-16 lg:mb-20">
            <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 shadow-2xl shadow-slate-900/20 overflow-hidden mx-2 xs:mx-0">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl sm:rounded-2xl shadow-lg">
                      <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">Live Market Overview</h2>
                      <p className="text-slate-300 text-sm sm:text-base">Real-time data from global financial markets</p>
                    </div>
                  </div>
                  <div className="sm:ml-auto">
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-400/30">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-emerald-300 text-xs sm:text-sm font-medium">LIVE</span>
                    </div>
                  </div>
                </div>
                
                <MarketOverview />
              </div>
            </div>
          </section>

          {/* Economic Calendar Preview */}
          <section>
            <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 border border-blue-100/50 dark:border-gray-700 shadow-xl shadow-blue-500/10 dark:shadow-gray-900/20 mx-2 xs:mx-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl sm:rounded-2xl shadow-lg">
                    <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-gray-100">Economic Calendar Preview</h2>
                    <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base">Upcoming events that move markets</p>
                  </div>
                </div>
              </div>
              
              <EconomicCalendarPreview />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}