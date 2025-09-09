import React from 'react';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Stock Market Data 2025 - Live Stock Prices, S&P 500 Analysis & Market Insights | PeakNewsDaily',
  description: 'Real-time stock market data for 2025. Track S&P 500, NASDAQ, blue-chip stocks, FAANG companies, and top-performing equities with professional analysis and live market insights.',
  keywords: 'stock market 2025, S&P 500 stocks, NASDAQ, stock prices, blue chip stocks, FAANG stocks, market analysis, equity research, stock screener, dividend stocks, growth stocks, value stocks, tech stocks, market cap, P/E ratios, stock performance',
  openGraph: {
    title: 'Stock Market Data 2025 - Live Prices & Professional Analysis',
    description: 'Comprehensive stock market analysis covering S&P 500, NASDAQ, and top-performing stocks with real-time data and professional insights.',
    type: 'website',
    url: 'https://peaknewsdaily.com/markets/stocks',
    images: [
      {
        url: '/og-stocks.jpg',
        width: 1200,
        height: 630,
        alt: 'Stock Market Data 2025 - Professional Stock Analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stock Market Data 2025 - Live Stock Prices & Analysis',
    description: 'Real-time stock market data, S&P 500 tracking, and professional equity analysis for informed investing decisions.',
    images: ['/og-stocks.jpg'],
  },
  alternates: {
    canonical: 'https://peaknewsdaily.com/markets/stocks',
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

export const revalidate = 180;

interface Asset {
  id: string
  symbol: string
  name: string
  type: string
  sector?: string
  industry?: string
  market: {
    name: string
    currency: string
  }
  quotes: Array<{
    price: number
    change?: number
    changePercent?: number
    volume?: bigint
    marketCap?: bigint
    pe?: number
    dividendYield?: number
    timestamp: Date
  }>
}

export default async function StocksPage() {
  let stocks: Array<any> = []

  if (process.env.DATABASE_URL) {
    try {
      stocks = await prisma.asset.findMany({
        where: { 
          type: 'stock',
          isActive: true 
        },
        include: {
          market: {
            select: { name: true, currency: true }
          },
          quotes: {
            orderBy: { timestamp: 'desc' },
            take: 1
          }
        },
        orderBy: [
          { quotes: { _count: 'desc' } },
          { symbol: 'asc' }
        ]
      })
    } catch (error) {
      console.warn('Failed to fetch stock data:', error)
    }
  }

  // Group stocks by categories for better presentation
  const magnificentSeven = ['NVDA', 'MSFT', 'AAPL', 'AMZN', 'GOOGL', 'META', 'TSLA'];
  const topStocks = stocks.filter(stock => magnificentSeven.includes(stock.symbol));
  const techStocks = stocks.filter(stock => 
    stock.sector === 'Technology' && !magnificentSeven.includes(stock.symbol)
  );
  const financialStocks = stocks.filter(stock => stock.sector === 'Financial');
  const healthcareStocks = stocks.filter(stock => stock.sector?.includes('Healthcare') || stock.sector?.includes('Health'));
  const otherStocks = stocks.filter(stock => 
    !magnificentSeven.includes(stock.symbol) && 
    stock.sector !== 'Technology' && 
    stock.sector !== 'Financial' && 
    !stock.sector?.includes('Healthcare') &&
    !stock.sector?.includes('Health')
  );

  const formatPrice = (price: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price)
  }

  const formatChange = (change: number | null, changePercent: number | null) => {
    if (!change || !changePercent) return { text: 'N/A', positive: null }
    
    const isPositive = change > 0
    const changeText = `${isPositive ? '+' : ''}${change.toFixed(2)}`
    const percentText = `(${isPositive ? '+' : ''}${changePercent.toFixed(2)}%)`
    
    return {
      text: `${changeText} ${percentText}`,
      positive: isPositive
    }
  }

  const formatVolume = (volume: bigint | null) => {
    if (!volume) return 'N/A'
    const num = Number(volume)
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toLocaleString()
  }

  const formatMarketCap = (marketCap: bigint | null) => {
    if (!marketCap) return 'N/A'
    const num = Number(marketCap)
    if (num >= 1000000000000) {
      return `$${(num / 1000000000000).toFixed(2)}T`
    } else if (num >= 1000000000) {
      return `$${(num / 1000000000).toFixed(2)}B`
    } else if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(2)}M`
    }
    return `$${num.toLocaleString()}`
  }

  const getStockIcon = (symbol: string) => {
    const icons: { [key: string]: string } = {
      // Magnificent Seven
      'AAPL': '🍎', 'MSFT': '🪟', 'GOOGL': '🔍', 'AMZN': '📦', 'TSLA': '⚡',
      'META': '👤', 'NVDA': '💎',
      
      // Tech Giants
      'NFLX': '🎬', 'CRM': '☁️', 'ORCL': '🏛️', 'ADBE': '🎨', 'INTC': '🔌', 
      'AMD': '💻', 'CSCO': '🌐', 'IBM': '🖥️', 'TSM': '🏭', 'QCOM': '📱',
      'AVGO': '🔧', 'TXN': '⚙️', 'MU': '💾', 'LRCX': '🔬', 'AMAT': '⚡',
      'PYPL': '💳', 'UBER': '🚗', 'SNAP': '📸', 'TWTR': '🐦', 'PINS': '📌',
      'ZM': '📹', 'DOCU': '📄', 'NOW': '🔧', 'WDAY': '👨‍💼', 'SNOW': '❄️',
      'PLTR': '🕵️', 'SQ': '💳',

      // Financial Sector
      'JPM': '🏦', 'BAC': '🏪', 'WFC': '🐎', 'GS': '💰', 'MS': '📊',
      'C': '🏛️', 'USB': '🏦', 'PNC': '🏪', 'TFC': '🏦', 'COF': '💳',
      'AXP': '💳', 'BK': '🏛️', 'STT': '📊', 'BRK.B': '💼', 'V': '💳',
      'MA': '💳', 'AIG': '🛡️', 'PRU': '🛡️', 'MET': '🛡️', 'ALL': '🛡️', 'PGR': '🛡️',

      // Healthcare & Pharma
      'JNJ': '🏥', 'PFE': '💊', 'UNH': '🩺', 'ABBV': '🧬', 'MRK': '⚕️',
      'LLY': '💉', 'BMY': '💊', 'AMGN': '🧬', 'GILD': '🔬', 'BIIB': '🧠',
      'CVS': '💊', 'WBA': '💊', 'CI': '🩺', 'HUM': '🩺', 'ANTM': '🩺',

      // Consumer & Retail
      'WMT': '🏪', 'HD': '🔨', 'PG': '🧴', 'KO': '🥤', 'PEP': '🥤',
      'MCD': '🍟', 'SBUX': '☕', 'NKE': '👟', 'LOW': '🔨', 'TGT': '🎯',
      'COST': '🛒', 'DIS': '🏰',

      // Energy & Utilities
      'XOM': '🛢️', 'CVX': '⛽', 'COP': '🛢️', 'EOG': '🛢️', 'SLB': '🔧',
      'PSX': '⛽', 'VLO': '⛽', 'NEE': '⚡', 'D': '⚡', 'SO': '⚡',

      // Industrial & Materials
      'BA': '✈️', 'HON': '🏭', 'UPS': '📦', 'FDX': '📦', 'CAT': '🚜',
      'DE': '🚜', 'GE': '⚙️', '3M': '🔧',

      // Real Estate & REITs
      'AMT': '📡', 'PLD': '🏭', 'CCI': '📡', 'EQIX': '💻', 'SPG': '🏬', 'AVB': '🏠',

      // Telecom
      'VZ': '📱', 'T': '📞', 'TMUS': '📱', 'CHTR': '📺', 'CMCSA': '📺',

      // ETFs
      'SPY': '📊', 'QQQ': '💻', 'DIA': '📈'
    };
    return icons[symbol] || '📈';
  }

  const getSectorIcon = (sector: string) => {
    const icons: { [key: string]: string } = {
      'Technology': '💻',
      'Financial': '🏦', 
      'Healthcare': '🏥',
      'Consumer Discretionary': '🛒',
      'Communication Services': '📡',
      'Industrial': '🏭',
      'Consumer Staples': '🥫',
      'Energy': '⚡',
      'Utilities': '🔌',
      'Real Estate': '🏠',
      'Materials': '🏗️'
    };
    return icons[sector] || '📊';
  }

  const getMarketCapCategory = (marketCap: bigint | null) => {
    if (!marketCap) return { category: 'Unknown', color: 'gray' };
    const num = Number(marketCap);
    if (num >= 200000000000) return { category: 'Large Cap', color: 'blue' };
    if (num >= 10000000000) return { category: 'Mid Cap', color: 'green' };
    if (num >= 2000000000) return { category: 'Small Cap', color: 'yellow' };
    return { category: 'Micro Cap', color: 'orange' };
  }

  // Calculate market statistics
  const totalMarketValue = stocks.reduce((sum, stock) => {
    if (stock.quotes[0]?.marketCap) {
      return sum + Number(stock.quotes[0].marketCap);
    }
    return sum;
  }, 0);

  const gainers = stocks.filter(stock => {
    const quote = stock.quotes[0];
    return quote?.changePercent && Number(quote.changePercent) > 0;
  }).length;

  const losers = stocks.filter(stock => {
    const quote = stock.quotes[0];
    return quote?.changePercent && Number(quote.changePercent) < 0;
  }).length;

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Stock Market Data 2025",
    "description": "Real-time stock market data, S&P 500 analysis, and comprehensive equity research with live prices and market insights.",
    "url": "https://peaknewsdaily.com/markets/stocks",
    "mainEntity": {
      "@type": "DataFeed",
      "name": "Stock Market Prices",
      "description": "Live stock market data and analysis",
      "dataFeedElement": topStocks.slice(0, 7).map(stock => ({
        "@type": "DataFeedItem",
        "name": `${stock.symbol} - ${stock.name}`,
        "price": stock.quotes[0]?.price ? Number(stock.quotes[0].price) : undefined,
        "priceCurrency": "USD"
      }))
    },
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
          "name": "Markets",
          "item": "https://peaknewsdaily.com/markets"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Stocks",
          "item": "https://peaknewsdaily.com/markets/stocks"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Premium Financial Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-48 h-48 xs:w-72 xs:h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-48 h-48 xs:w-72 xs:h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-48 h-48 xs:w-72 xs:h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] xs:bg-[size:24px_24px] sm:bg-[size:32px_32px]"></div>
          
          <div className="relative container py-12 xs:py-16 sm:py-20 px-3 xs:px-4">
            <div className="max-w-5xl mx-auto text-center">
              {/* Live Market Status */}
              <div className="inline-flex items-center px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-xs xs:text-sm font-medium mb-6 xs:mb-8 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-green-400 rounded-full animate-pulse mr-2 xs:mr-3"></div>
                <span className="hidden xs:inline">MARKETS OPEN • LIVE DATA • </span>
                <span className="xs:hidden">LIVE • </span>
                <span className="hidden sm:inline">NYSE & NASDAQ</span>
                <span className="sm:hidden">MARKETS</span>
              </div>
              
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 xs:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-indigo-200 leading-tight">
                <span className="block xs:inline">Stock Market</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400">
                  Intelligence Hub
                </span>
              </h1>
              
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100/80 mb-6 xs:mb-8 max-w-3xl mx-auto leading-relaxed px-2 xs:px-4 sm:px-0">
                <span className="block xs:inline">Professional-grade equity analysis,</span>
                <span className="xs:hidden"> </span>
                <span className="block xs:inline">real-time pricing data, and institutional-quality research for sophisticated investors.</span>
              </p>
              
              {/* Premium Market Statistics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 mt-8 xs:mt-10 sm:mt-12">
                <div className="relative bg-white/10 backdrop-blur-lg rounded-lg xs:rounded-xl lg:rounded-2xl p-3 xs:p-4 lg:p-6 border border-white/20 shadow-2xl shadow-blue-500/10 overflow-hidden group hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                      <div className="p-1 xs:p-1.5 lg:p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md xs:rounded-lg">
                        <svg className="w-4 h-4 xs:w-5 xs:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="text-xl xs:text-2xl lg:text-3xl font-black text-white">{stocks.length}</div>
                    </div>
                    <div className="text-blue-200/80 font-medium text-xs xs:text-sm lg:text-base leading-tight">
                      <span className="block xs:hidden">Stocks</span>
                      <span className="hidden xs:block">Stocks Tracked</span>
                    </div>
                  </div>
                </div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl shadow-green-500/10 overflow-hidden group hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="text-3xl font-black text-green-400">{gainers}</div>
                    </div>
                    <div className="text-blue-200/80 font-medium">Advancing</div>
                  </div>
                </div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl shadow-red-500/10 overflow-hidden group hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gradient-to-r from-red-500 to-rose-600 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                        </svg>
                      </div>
                      <div className="text-3xl font-black text-red-400">{losers}</div>
                    </div>
                    <div className="text-blue-200/80 font-medium">Declining</div>
                  </div>
                </div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl shadow-purple-500/10 overflow-hidden group hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div className="text-3xl font-black text-purple-400">{formatMarketCap(BigInt(totalMarketValue)).replace('$', '')}</div>
                    </div>
                    <div className="text-blue-200/80 font-medium">Total Market Cap</div>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center mt-6 xs:mt-8 px-2 xs:px-0">
                <button className="inline-flex items-center px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-md xs:rounded-lg sm:rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-1 transition-all duration-200 group text-sm xs:text-base">
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 mr-1.5 xs:mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="xs:hidden">Analysis</span>
                  <span className="hidden xs:inline">Start Analysis</span>
                </button>
                <button className="inline-flex items-center px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-md xs:rounded-lg sm:rounded-xl border border-white/20 hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-200 group text-sm xs:text-base">
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 mr-1.5 xs:mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="xs:hidden">Watchlist</span>
                  <span className="hidden xs:inline">View Watchlists</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="container py-8 xs:py-10 sm:py-12 px-3 xs:px-4">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs xs:text-sm text-gray-500 mb-6 xs:mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span>→</span>
            <Link href="/markets" className="hover:text-gray-700">Markets</Link>
            <span>→</span>
            <span className="text-gray-900 font-medium">Stocks</span>
          </nav>

          {/* Magnificent Seven Section */}
          {topStocks.length > 0 && (
            <section className="mb-12">
              <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-2xl p-8 mb-8 text-white shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-xl">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">🚀 Magnificent Seven</h2>
                      <p className="text-blue-100">The world's largest and most influential technology companies</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xs:gap-6 mb-6 xs:mb-8">
                {topStocks.slice(0, 7).map((stock) => {
                  const latestQuote = stock.quotes[0]
                  if (!latestQuote) return null
                  
                  const change = formatChange(
                    latestQuote.change ? Number(latestQuote.change) : null,
                    latestQuote.changePercent ? Number(latestQuote.changePercent) : null
                  )
                  const marketCapInfo = getMarketCapCategory(latestQuote.marketCap)

                  return (
                    <div key={stock.id} className="bg-white rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{getStockIcon(stock.symbol)}</div>
                          <div>
                            <div className="font-bold text-gray-900 text-lg">{stock.symbol}</div>
                            <div className="text-sm text-gray-500">{stock.market.name}</div>
                          </div>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          marketCapInfo.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                          marketCapInfo.color === 'green' ? 'bg-green-100 text-green-800' :
                          marketCapInfo.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {marketCapInfo.category}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="font-medium text-gray-900 text-sm truncate">{stock.name}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {stock.sector && stock.industry ? `${stock.sector} • ${stock.industry}` : stock.sector || stock.industry || '—'}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Price</span>
                          <span className="font-bold text-lg text-gray-900">
                            {formatPrice(Number(latestQuote.price), stock.market.currency)}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Change</span>
                          <span className={`font-medium text-sm ${
                            change.positive === true ? 'text-green-600' :
                            change.positive === false ? 'text-red-600' : 'text-gray-500'
                          }`}>
                            {change.text}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Market Cap</span>
                          <span className="font-medium text-sm text-gray-900">
                            {formatMarketCap(latestQuote.marketCap)}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">P/E Ratio</span>
                          <span className="font-medium text-sm text-gray-900">
                            {latestQuote.pe ? Number(latestQuote.pe).toFixed(2) : '—'}
                          </span>
                        </div>
                        
                        {latestQuote.dividendYield && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Div Yield</span>
                            <span className="font-medium text-sm text-green-600">
                              {Number(latestQuote.dividendYield).toFixed(2)}%
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          )}

          {/* Technology Stocks Section */}
          {techStocks.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">💻 Technology Stocks</h2>
                  <p className="text-gray-600">Leading technology companies driving innovation</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techStocks.slice(0, 12).map((stock) => {
                  const latestQuote = stock.quotes[0]
                  if (!latestQuote) return null
                  
                  const change = formatChange(
                    latestQuote.change ? Number(latestQuote.change) : null,
                    latestQuote.changePercent ? Number(latestQuote.changePercent) : null
                  )

                  return (
                    <div key={stock.id} className="bg-white rounded-lg border p-4 hover:shadow-md transition-all duration-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="text-lg">{getStockIcon(stock.symbol)}</div>
                          <div>
                            <div className="font-bold text-gray-900">{stock.symbol}</div>
                            <div className="text-xs text-gray-500 truncate max-w-32">{stock.name}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">
                            {formatPrice(Number(latestQuote.price), stock.market.currency)}
                          </div>
                          <div className={`text-xs font-medium ${
                            change.positive === true ? 'text-green-600' :
                            change.positive === false ? 'text-red-600' : 'text-gray-500'
                          }`}>
                            {change.text}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 space-y-1">
                        <div className="flex justify-between">
                          <span>Volume:</span>
                          <span>{formatVolume(latestQuote.volume)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Market Cap:</span>
                          <span>{formatMarketCap(latestQuote.marketCap)}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          )}

          {/* Financial Stocks Section */}
          {financialStocks.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">🏦 Financial Stocks</h2>
                  <p className="text-gray-600">Major banks and financial institutions</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {financialStocks.slice(0, 12).map((stock) => {
                  const latestQuote = stock.quotes[0]
                  if (!latestQuote) return null
                  
                  const change = formatChange(
                    latestQuote.change ? Number(latestQuote.change) : null,
                    latestQuote.changePercent ? Number(latestQuote.changePercent) : null
                  )

                  return (
                    <div key={stock.id} className="bg-white rounded-lg border p-4 hover:shadow-md transition-all duration-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="text-lg">{getStockIcon(stock.symbol)}</div>
                          <div>
                            <div className="font-bold text-gray-900">{stock.symbol}</div>
                            <div className="text-xs text-gray-500 truncate max-w-32">{stock.name}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">
                            {formatPrice(Number(latestQuote.price), stock.market.currency)}
                          </div>
                          <div className={`text-xs font-medium ${
                            change.positive === true ? 'text-green-600' :
                            change.positive === false ? 'text-red-600' : 'text-gray-500'
                          }`}>
                            {change.text}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 space-y-1">
                        <div className="flex justify-between">
                          <span>Volume:</span>
                          <span>{formatVolume(latestQuote.volume)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Div Yield:</span>
                          <span>{latestQuote.dividendYield ? `${Number(latestQuote.dividendYield).toFixed(2)}%` : '—'}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          )}

          {/* Healthcare Stocks Section */}
          {healthcareStocks.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">🏥 Healthcare Stocks</h2>
                  <p className="text-gray-600">Leading pharmaceutical and healthcare companies</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {healthcareStocks.slice(0, 12).map((stock) => {
                  const latestQuote = stock.quotes[0]
                  if (!latestQuote) return null
                  
                  const change = formatChange(
                    latestQuote.change ? Number(latestQuote.change) : null,
                    latestQuote.changePercent ? Number(latestQuote.changePercent) : null
                  )

                  return (
                    <div key={stock.id} className="bg-white rounded-lg border p-4 hover:shadow-md transition-all duration-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="text-lg">{getStockIcon(stock.symbol)}</div>
                          <div>
                            <div className="font-bold text-gray-900">{stock.symbol}</div>
                            <div className="text-xs text-gray-500 truncate max-w-32">{stock.name}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">
                            {formatPrice(Number(latestQuote.price), stock.market.currency)}
                          </div>
                          <div className={`text-xs font-medium ${
                            change.positive === true ? 'text-green-600' :
                            change.positive === false ? 'text-red-600' : 'text-gray-500'
                          }`}>
                            {change.text}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 space-y-1">
                        <div className="flex justify-between">
                          <span>P/E Ratio:</span>
                          <span>{latestQuote.pe ? Number(latestQuote.pe).toFixed(2) : '—'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Market Cap:</span>
                          <span>{formatMarketCap(latestQuote.marketCap)}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          )}

          {/* All Stocks Table */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">📊 Complete Stock List</h2>
                <p className="text-gray-600">Comprehensive view of all tracked stocks</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-gray-50 to-blue-50 border-b">
                    <tr>
                      <th className="text-left p-4 font-semibold text-gray-900">Stock</th>
                      <th className="text-left p-4 font-semibold text-gray-900">Company</th>
                      <th className="text-right p-4 font-semibold text-gray-900">Price</th>
                      <th className="text-right p-4 font-semibold text-gray-900">Change</th>
                      <th className="text-right p-4 font-semibold text-gray-900">Volume</th>
                      <th className="text-right p-4 font-semibold text-gray-900">Market Cap</th>
                      <th className="text-right p-4 font-semibold text-gray-900">P/E</th>
                      <th className="text-right p-4 font-semibold text-gray-900">Div Yield</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stocks.map((stock) => {
                      const latestQuote = stock.quotes[0]
                      if (!latestQuote) return null
                      
                      const change = formatChange(
                        latestQuote.change ? Number(latestQuote.change) : null,
                        latestQuote.changePercent ? Number(latestQuote.changePercent) : null
                      )

                      return (
                        <tr key={stock.id} className="border-b hover:bg-blue-50 transition-colors group">
                          <td className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className="text-xl">{getStockIcon(stock.symbol)}</div>
                              <div>
                                <div className="font-bold text-gray-900">{stock.symbol}</div>
                                <div className="text-xs text-gray-500">{stock.market.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div>
                              <div className="font-medium text-gray-900">{stock.name}</div>
                              <div className="text-xs text-gray-500 flex items-center space-x-2">
                                {stock.sector && (
                                  <>
                                    <span>{getSectorIcon(stock.sector)}</span>
                                    <span>{stock.sector}</span>
                                    {stock.industry && <span>• {stock.industry}</span>}
                                  </>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="text-right p-4">
                            <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {formatPrice(Number(latestQuote.price), stock.market.currency)}
                            </div>
                          </td>
                          <td className="text-right p-4">
                            <div className={`font-medium ${
                              change.positive === true ? 'text-green-600' :
                              change.positive === false ? 'text-red-600' : 'text-gray-500'
                            }`}>
                              {change.text}
                            </div>
                          </td>
                          <td className="text-right p-4">
                            <div className="text-gray-700">
                              {formatVolume(latestQuote.volume)}
                            </div>
                          </td>
                          <td className="text-right p-4">
                            <div className="text-gray-700 font-medium">
                              {formatMarketCap(latestQuote.marketCap)}
                            </div>
                          </td>
                          <td className="text-right p-4">
                            <div className="text-gray-700">
                              {latestQuote.pe ? Number(latestQuote.pe).toFixed(2) : '—'}
                            </div>
                          </td>
                          <td className="text-right p-4">
                            <div className="text-gray-700">
                              {latestQuote.dividendYield ? `${Number(latestQuote.dividendYield).toFixed(2)}%` : '—'}
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              
              {stocks.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-500">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h2a2 2 0 01-2-2z" />
                    </svg>
                    <p className="text-xl font-medium">No stock data available</p>
                    <p className="text-sm mt-2">Stock prices will appear here when market data is available.</p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Educational Content */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">📚 Stock Market Education</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">💡 Investment Fundamentals</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li>• <strong>Market Cap:</strong> Total value of a company's shares</li>
                    <li>• <strong>P/E Ratio:</strong> Price-to-earnings ratio for valuation</li>
                    <li>• <strong>Dividend Yield:</strong> Annual dividends as percentage of price</li>
                    <li>• <strong>Volume:</strong> Number of shares traded in a period</li>
                    <li>• <strong>Beta:</strong> Measures stock's volatility relative to market</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">🎯 Investment Strategies</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li>• <strong>Value Investing:</strong> Buy undervalued quality companies</li>
                    <li>• <strong>Growth Investing:</strong> Focus on companies with high growth potential</li>
                    <li>• <strong>Dividend Investing:</strong> Target stocks with consistent dividend payments</li>
                    <li>• <strong>Index Investing:</strong> Diversify through broad market exposure</li>
                    <li>• <strong>Dollar-Cost Averaging:</strong> Invest fixed amounts regularly</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-blue-100 mb-4">
                  Always conduct thorough research and consider consulting with financial advisors before making investment decisions.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href="/education" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    📚 Trading Education
                  </Link>
                  <Link href="/category/investing" className="bg-white/20 text-white px-6 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors">
                    💰 Investment Guide
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}