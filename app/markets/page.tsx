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
    activeMarkets: 0,
    gainers: 0,
    decliners: 0
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
      
      marketStats.totalAssets = assets
      marketStats.activeMarkets = 4 // stocks, crypto, forex, commodities
      marketStats.gainers = quotes.filter(q => q.changePercent && Number(q.changePercent) > 0).length
      marketStats.decliners = quotes.filter(q => q.changePercent && Number(q.changePercent) < 0).length
    } catch (error) {
      console.warn('Failed to fetch market stats:', error)
    }
  }

  return (
    <>
      {/* Premium Markets Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:32px_32px]"></div>
        
        <div className="relative container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Live Market Status */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2 sm:mr-3"></div>
              <span className="hidden sm:inline">LIVE MARKET DATA • GLOBAL COVERAGE • </span>REAL-TIME UPDATES
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-indigo-200 leading-tight">
              Financial Markets
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400">
                Command Center
              </span>
            </h1>
            
            <p className="text-base sm:text-xl lg:text-2xl text-blue-100/80 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Professional market intelligence across stocks, crypto, forex, and commodities with institutional-grade data and analysis.
            </p>

            {/* Premium Market Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl shadow-blue-500/10 group hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl sm:rounded-2xl"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="p-1.5 sm:p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md sm:rounded-lg">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="text-xl sm:text-3xl font-black text-white">{marketStats.totalAssets}</div>
                  </div>
                  <div className="text-blue-200/80 font-medium text-xs sm:text-sm">Assets Tracked</div>
                </div>
              </div>
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl shadow-green-500/10 group hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl sm:rounded-2xl"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="p-1.5 sm:p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-md sm:rounded-lg">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="text-xl sm:text-3xl font-black text-green-400">{marketStats.gainers}</div>
                  </div>
                  <div className="text-blue-200/80 font-medium text-xs sm:text-sm">Advancing</div>
                </div>
              </div>
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl shadow-red-500/10 group hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl sm:rounded-2xl"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="p-1.5 sm:p-2 bg-gradient-to-r from-red-500 to-rose-600 rounded-md sm:rounded-lg">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                    </div>
                    <div className="text-xl sm:text-3xl font-black text-red-400">{marketStats.decliners}</div>
                  </div>
                  <div className="text-blue-200/80 font-medium text-xs sm:text-sm">Declining</div>
                </div>
              </div>
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl shadow-purple-500/10 group hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl sm:rounded-2xl"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="p-1.5 sm:p-2 bg-gradient-to-r from-purple-500 to-violet-600 rounded-md sm:rounded-lg">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                      </svg>
                    </div>
                    <div className="text-xl sm:text-3xl font-black text-purple-400">{marketStats.activeMarkets}</div>
                  </div>
                  <div className="text-blue-200/80 font-medium text-xs sm:text-sm">Market Types</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          
          {/* Market Categories */}
          <section className="mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">Market Categories</h2>
              <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto">
                Access comprehensive data and analysis across all major asset classes
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
              {/* Stocks */}
              <Link href="/markets/stocks" className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl shadow-lg mb-4 sm:mb-6 w-fit">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors">Stock Market</h3>
                  <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    Real-time stock prices, S&P 500, NASDAQ, and comprehensive equity analysis with institutional-grade data.
                  </p>
                  <div className="flex items-center text-green-600 group-hover:text-green-700 font-semibold text-sm sm:text-base">
                    <span>Explore Stocks</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Cryptocurrency */}
              <Link href="/markets/crypto" className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl sm:rounded-2xl shadow-lg mb-4 sm:mb-6 w-fit">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0L8.59 10.59L0 12l8.59 1.41L12 24l3.41-10.59L24 12l-8.59-1.41z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors">Cryptocurrency</h3>
                  <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    24/7 crypto market data, Bitcoin, Ethereum, altcoins, and DeFi tokens with real-time price tracking.
                  </p>
                  <div className="flex items-center text-orange-600 group-hover:text-orange-700 font-semibold text-sm sm:text-base">
                    <span>Explore Crypto</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Economic Calendar */}
              <Link href="/markets/calendar" className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl shadow-lg mb-4 sm:mb-6 w-fit">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">Economic Calendar</h3>
                  <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    Key economic events, central bank meetings, and market-moving announcements with impact analysis.
                  </p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-semibold text-sm sm:text-base">
                    <span>View Calendar</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* News & Analysis */}
              <Link href="/news" className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl sm:rounded-2xl shadow-lg mb-4 sm:mb-6 w-fit">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2.5 2.5 0 00-2.5-2.5H15" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors">Market News</h3>
                  <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    Breaking financial news, market analysis, and expert insights to keep you informed on market movements.
                  </p>
                  <div className="flex items-center text-purple-600 group-hover:text-purple-700 font-semibold text-sm sm:text-base">
                    <span>Read News</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Live Market Overview */}
          <section className="mb-12 sm:mb-16 lg:mb-20">
            <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-900/20 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl sm:rounded-2xl shadow-lg">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-100/50 shadow-xl shadow-blue-500/10">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl sm:rounded-2xl shadow-lg">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Economic Calendar Preview</h2>
                    <p className="text-slate-600 text-sm sm:text-base">Upcoming events that move markets</p>
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