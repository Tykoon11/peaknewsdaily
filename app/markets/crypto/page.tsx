import React from 'react';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cryptocurrency Market Data 2025 - Live Prices, Charts & Analysis | PeakNewsDaily',
  description: 'Real-time cryptocurrency prices, market data, and analysis for 2025. Track Bitcoin, Ethereum, and 500+ altcoins with live charts, market cap, volume, and trading insights.',
  keywords: 'cryptocurrency prices, Bitcoin price, Ethereum price, crypto market data, cryptocurrency news, altcoins, crypto trading, blockchain, DeFi, NFT, crypto analysis, cryptocurrency market cap, crypto portfolio tracker',
  openGraph: {
    title: 'Cryptocurrency Market Data 2025 - Live Prices & Analysis',
    description: 'Real-time crypto prices and market data. Track Bitcoin, Ethereum, and 500+ cryptocurrencies with professional analysis and insights.',
    type: 'website',
    url: 'https://peaknewsdaily.com/markets/crypto',
    images: [
      {
        url: '/og-crypto.jpg',
        width: 1200,
        height: 630,
        alt: 'Cryptocurrency Market Data 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cryptocurrency Market Data 2025',
    description: 'Live crypto prices, market analysis, and trading insights. Track Bitcoin, Ethereum, and top altcoins.',
    images: ['/og-crypto.jpg'],
  },
  alternates: {
    canonical: 'https://peaknewsdaily.com/markets/crypto',
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

interface Asset {
  id: string;
  symbol: string;
  name: string;
  type: string;
  market: {
    name: string;
    currency: string;
  };
  quotes: Array<{
    price: number;
    change?: number;
    changePercent?: number;
    volume?: bigint;
    marketCap?: bigint;
    timestamp: Date;
  }>;
}

interface CryptoInsight {
  title: string;
  content: string;
  category: 'analysis' | 'news' | 'education';
  icon: string;
}

interface CryptoCategory {
  id: string;
  name: string;
  description: string;
  cryptos: string[];
  icon: string;
}

const cryptoCategories: CryptoCategory[] = [
  {
    id: 'major',
    name: 'Major Cryptocurrencies',
    description: 'Top market cap cryptocurrencies with highest liquidity',
    cryptos: ['BTC', 'ETH', 'BNB', 'XRP', 'SOL', 'ADA'],
    icon: '👑'
  },
  {
    id: 'defi',
    name: 'DeFi Tokens',
    description: 'Decentralized Finance protocols and governance tokens',
    cryptos: ['UNI', 'AAVE', 'COMP', 'MKR', 'SNX', 'SUSHI'],
    icon: '🏦'
  },
  {
    id: 'smart-contract',
    name: 'Smart Contract Platforms',
    description: 'Blockchain platforms supporting smart contracts and dApps',
    cryptos: ['ETH', 'SOL', 'ADA', 'DOT', 'AVAX', 'MATIC'],
    icon: '⚡'
  },
  {
    id: 'layer2',
    name: 'Layer 2 Solutions',
    description: 'Scaling solutions built on top of major blockchains',
    cryptos: ['MATIC', 'LRC', 'IMX', 'OP', 'ARB'],
    icon: '🔗'
  },
  {
    id: 'meme',
    name: 'Meme Coins',
    description: 'Community-driven cryptocurrencies with viral potential',
    cryptos: ['DOGE', 'SHIB', 'PEPE', 'FLOKI'],
    icon: '🚀'
  },
  {
    id: 'privacy',
    name: 'Privacy Coins',
    description: 'Cryptocurrencies focused on privacy and anonymity',
    cryptos: ['XMR', 'ZEC', 'DASH', 'XVG'],
    icon: '🔒'
  }
];

const cryptoInsights: CryptoInsight[] = [
  {
    title: 'Bitcoin ETF Approval Impact',
    content: 'The approval of Bitcoin spot ETFs has brought institutional capital into crypto markets, creating new price discovery mechanisms and reducing volatility in major cryptocurrencies.',
    category: 'analysis',
    icon: '📈'
  },
  {
    title: 'Ethereum 2.0 Staking Yields',
    content: 'Ethereum staking rewards currently offer 3-5% APY, making ETH attractive for long-term holders seeking passive income while supporting network security.',
    category: 'education',
    icon: '🏛️'
  },
  {
    title: 'DeFi Total Value Locked Growth',
    content: 'DeFi protocols have reached over $200B in total value locked, with yield farming and liquidity mining continuing to drive innovation in decentralized finance.',
    category: 'news',
    icon: '💰'
  },
  {
    title: 'NFT Market Evolution',
    content: 'NFT markets are evolving beyond art toward utility-driven assets including gaming items, membership tokens, and real-world asset tokenization.',
    category: 'analysis',
    icon: '🎨'
  }
];

const tradingStrategies = [
  {
    title: 'Dollar-Cost Averaging (DCA)',
    description: 'Invest fixed amounts regularly regardless of price to reduce volatility impact',
    risk: 'Low',
    timeframe: 'Long-term',
    icon: '📊'
  },
  {
    title: 'HODL Strategy',
    description: 'Buy and hold quality cryptocurrencies through market cycles',
    risk: 'Medium',
    timeframe: 'Long-term',
    icon: '💎'
  },
  {
    title: 'Swing Trading',
    description: 'Trade price swings over days to weeks using technical analysis',
    risk: 'High',
    timeframe: 'Medium-term',
    icon: '📈'
  },
  {
    title: 'Yield Farming',
    description: 'Earn rewards by providing liquidity to DeFi protocols',
    risk: 'Very High',
    timeframe: 'Variable',
    icon: '🌾'
  }
];

export default async function CryptoPage(): Promise<React.ReactElement> {
  let cryptos: Array<any> = []

  if (process.env.DATABASE_URL) {
    try {
      cryptos = await prisma.asset.findMany({
        where: { 
          type: 'crypto',
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
        orderBy: { symbol: 'asc' }
      })
    } catch (error) {
      console.warn('Failed to fetch crypto data:', error)
    }
  }

  const formatPrice = (price: number, currency: string = 'USD'): string => {
    if (price < 1) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: 4,
        maximumFractionDigits: 6
      }).format(price);
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const formatChange = (change: number | null, changePercent: number | null) => {
    if (!change || !changePercent) return { text: 'N/A', positive: null };
    
    const isPositive = change > 0;
    const changeText = `${isPositive ? '+' : ''}${change.toFixed(2)}`;
    const percentText = `(${isPositive ? '+' : ''}${changePercent.toFixed(2)}%)`;
    
    return {
      text: `${changeText} ${percentText}`,
      positive: isPositive
    };
  };

  const formatVolume = (volume: bigint | null): string => {
    if (!volume) return 'N/A';
    const num = Number(volume);
    if (num >= 1000000000) {
      return `$${(num / 1000000000).toFixed(2)}B`;
    } else if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(2)}M`;
    } else if (num >= 1000) {
      return `$${(num / 1000).toFixed(1)}K`;
    }
    return `$${num.toLocaleString()}`;
  };

  const formatMarketCap = (marketCap: bigint | null): string => {
    if (!marketCap) return 'N/A';
    const num = Number(marketCap);
    if (num >= 1000000000000) {
      return `$${(num / 1000000000000).toFixed(2)}T`;
    } else if (num >= 1000000000) {
      return `$${(num / 1000000000).toFixed(2)}B`;
    } else if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(2)}M`;
    }
    return `$${num.toLocaleString()}`;
  };

  const getCryptoIcon = (symbol: string): string => {
    const cleanSymbol = symbol.replace('-USD', '').toLowerCase();
    const icons: { [key: string]: string } = {
      // Major Cryptocurrencies
      'btc': '₿',
      'eth': 'Ξ',
      'bnb': '🔶',
      'xrp': '◊',
      'ada': '₳',
      'sol': '◎',
      'avax': '🔺',
      'dot': '●',
      'matic': '⬟',
      'link': '🔗',
      
      // Top Altcoins
      'ltc': 'Ł',
      'uni': '🦄',
      'atom': '🪐',
      'icp': '∞',
      'near': '🌐',
      'algo': '△',
      'vet': '⚡',
      'ftm': '👻',
      'hbar': '♦',
      'xlm': '🌟',
      
      // DeFi Tokens
      'aave': '👻',
      'mkr': '🏛️',
      'crv': '🌊',
      'comp': '🏦',
      'sushi': '🍣',
      'yfi': '🔵',
      'bal': '⚖️',
      'snx': '📊',
      '1inch': '🦄',
      'lido': '🌊',
      
      // Layer 2 & Scaling
      'arb': '🔵',
      'op': '🔴',
      'lrc': '🔄',
      'imx': '⚡',
      
      // Meme Coins
      'doge': '🐕',
      'shib': '🐕',
      'pepe': '🐸',
      'bonk': '🔥',
      'floki': '🐺',
      
      // AI & Tech Tokens
      'fet': '🤖',
      'ocean': '🌊',
      'agix': '🧠',
      'rndr': '🎨',
      'grt': '📊',
      
      // Gaming & Metaverse
      'axs': '⚔️',
      'sand': '🏖️',
      'mana': '🏙️',
      'enj': '💎',
      'chz': '⚽',
      
      // Privacy Coins
      'xmr': '🔒',
      'zec': '🛡️',
      'dash': '💨',
      
      // Enterprise & Utility
      'xtz': '🏛️',
      'eos': '🔷',
      'iota': '🔗',
      'neo': '🔶',
      'qtum': '⚪',
      
      // Stablecoins & Wrapped Assets
      'usdc': '💵',
      'usdt': '💰',
      'dai': '🪙',
      'wbtc': '₿',
      
      // New & Trending
      'apt': '🚀',
      'sui': '💧',
      'sei': '⚡',
      'wld': '🌍',
      'inj': '💉'
    };
    return icons[cleanSymbol] || '●';
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cryptocurrency Market Data 2025",
    "description": "Real-time cryptocurrency prices, market data, and analysis. Track Bitcoin, Ethereum, and 500+ altcoins with live charts and insights.",
    "url": "https://peaknewsdaily.com/markets/crypto",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Cryptocurrency Prices",
      "description": "Live cryptocurrency market data and prices",
      "numberOfItems": cryptos.length
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
          "name": "Cryptocurrency",
          "item": "https://peaknewsdaily.com/markets/crypto"
        }
      ]
    }
  };

  // Calculate market stats
  const totalMarketCap = cryptos.reduce((sum, crypto) => {
    const marketCap = crypto.quotes[0]?.marketCap ? Number(crypto.quotes[0].marketCap) : 0;
    return sum + marketCap;
  }, 0);

  const positiveChanges = cryptos.filter(crypto => {
    const change = crypto.quotes[0]?.change;
    return change && Number(change) > 0;
  }).length;

  const activeCryptos = cryptos.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Premium Crypto Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-900 via-amber-800 to-yellow-900 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-400 to-amber-500 dark:from-blue-400 dark:to-indigo-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-purple-400 dark:to-blue-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-amber-400 to-yellow-500 dark:from-emerald-400 dark:to-teal-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        {/* Digital Currency Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b12_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b12_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="relative container py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Live Crypto Status */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-200 text-sm font-medium mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse mr-3"></div>
              CRYPTO MARKETS • 24/7 TRADING • LIVE DATA
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-100 to-amber-200 leading-tight">
              Digital Asset
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
                Trading Hub
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-orange-100/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional cryptocurrency analysis, real-time market data, and institutional-grade insights for digital asset traders.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { icon: '⚡', text: 'Real-Time Data' },
                { icon: '🔍', text: 'Technical Analysis' },
                { icon: '📊', text: 'Market Insights' },
                { icon: '💼', text: 'Portfolio Tracking' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-lg">{feature.icon}</span>
                  <span className="text-white font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Market Overview */}
      <section className="py-16">
        <div className="container">
          <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-3xl p-8 shadow-2xl shadow-slate-900/20 overflow-hidden mb-16">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.15),transparent_70%)]"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Global Crypto Market Overview</h2>
                <p className="text-slate-300">Real-time statistics from the digital asset markets</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl shadow-black/10 group hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L15.09 8.26L22 9L18 13.14L19.09 21L12 17.77L4.91 21L6 13.14L2 9L8.91 8.26L12 2Z"/>
                        </svg>
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-white whitespace-nowrap">{activeCryptos}</div>
                    </div>
                    <div className="text-slate-300 font-medium">Tracked Assets</div>
                  </div>
                </div>
                
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl shadow-black/10 group hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-green-400 whitespace-nowrap">
                        ${totalMarketCap >= 1000000000000 
                          ? (totalMarketCap / 1000000000000).toFixed(2) + 'T' 
                          : (totalMarketCap / 1000000000).toFixed(0) + 'B'
                        }
                      </div>
                    </div>
                    <div className="text-slate-300 font-medium">Market Cap</div>
                  </div>
                </div>
                
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl shadow-black/10 group hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-blue-400 whitespace-nowrap">{positiveChanges}</div>
                    </div>
                    <div className="text-slate-300 font-medium">24h Gainers</div>
                  </div>
                </div>
                
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl shadow-black/10 group hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-orange-400 whitespace-nowrap">24/7</div>
                    </div>
                    <div className="text-slate-300 font-medium">Always Open</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8">
        
        {/* Crypto Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Cryptocurrency Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptoCategories.map((category) => (
              <div key={category.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-2xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{category.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.cryptos.map(symbol => (
                    <span key={symbol} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
                      {symbol}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Market Insights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Market Insights & Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cryptoInsights.map((insight, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-lg border border-gray-100 dark:border-gray-700 p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{insight.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    insight.category === 'analysis' ? 'bg-blue-100 text-blue-800' :
                    insight.category === 'news' ? 'bg-green-100 text-green-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {insight.category.charAt(0).toUpperCase() + insight.category.slice(1)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">{insight.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{insight.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trading Strategies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Crypto Trading Strategies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tradingStrategies.map((strategy, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-sm dark:shadow-lg border border-gray-200 dark:border-gray-600 p-6 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <span className="text-4xl">{strategy.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">{strategy.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-center">{strategy.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Risk:</span>
                  <span className={`font-medium ${
                    strategy.risk === 'Low' ? 'text-green-600' :
                    strategy.risk === 'Medium' ? 'text-yellow-600' :
                    strategy.risk === 'High' ? 'text-orange-600' : 'text-red-600'
                  }`}>
                    {strategy.risk}
                  </span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-500 dark:text-gray-400">Timeline:</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">{strategy.timeframe}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Live Crypto Prices Table */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Live Cryptocurrency Prices
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real-time market data updated every 5 minutes
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-blue-50 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-600 border-b-2 border-gray-200 dark:border-gray-600">
                  <tr>
                    <th className="text-left p-3 md:p-6 font-bold text-gray-900 dark:text-gray-100">Cryptocurrency</th>
                    <th className="text-right p-3 md:p-6 font-bold text-gray-900 dark:text-gray-100">Price</th>
                    <th className="text-right p-3 md:p-6 font-bold text-gray-900 dark:text-gray-100">24h Change</th>
                    <th className="text-right p-3 md:p-6 font-bold text-gray-900 dark:text-gray-100 hidden md:table-cell">24h Volume</th>
                    <th className="text-right p-3 md:p-6 font-bold text-gray-900 dark:text-gray-100 hidden lg:table-cell">Market Cap</th>
                    <th className="text-center p-3 md:p-6 font-bold text-gray-900 dark:text-gray-100 hidden lg:table-cell">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptos.map((crypto, index) => {
                    const latestQuote = crypto.quotes[0];
                    if (!latestQuote) return null;
                    
                    const change = formatChange(
                      latestQuote.change ? Number(latestQuote.change) : null,
                      latestQuote.changePercent ? Number(latestQuote.changePercent) : null
                    );
                    
                    const displaySymbol = crypto.symbol.replace('-USD', '');
                    const isEven = index % 2 === 0;

                    return (
                      <tr key={crypto.id} className={`${isEven ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'} hover:bg-blue-50 dark:hover:bg-gray-600 transition-all duration-200`}>
                        <td className="p-3 md:p-6">
                          <div className="flex items-center gap-2 md:gap-4">
                            <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-xl ${
                              displaySymbol === 'BTC' ? 'bg-orange-100 text-orange-600' :
                              displaySymbol === 'ETH' ? 'bg-blue-100 text-blue-600' :
                              displaySymbol === 'ADA' ? 'bg-blue-100 text-blue-600' :
                              'bg-purple-100 text-purple-600'
                            }`}>
                              {getCryptoIcon(crypto.symbol)}
                            </div>
                            <div className="min-w-0">
                              <div className="font-bold text-sm md:text-lg text-gray-900 dark:text-gray-100">{displaySymbol}</div>
                              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 truncate">{crypto.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="text-right p-3 md:p-6">
                          <div className="font-bold text-sm md:text-lg text-gray-900 dark:text-gray-100 whitespace-nowrap">
                            {formatPrice(Number(latestQuote.price), crypto.market.currency)}
                          </div>
                        </td>
                        <td className="text-right p-3 md:p-6">
                          <div className={`font-bold text-sm md:text-lg whitespace-nowrap ${
                            change.positive === true ? 'text-green-600' :
                            change.positive === false ? 'text-red-600' : 'text-gray-500'
                          }`}>
                            {change.text}
                          </div>
                        </td>
                        <td className="text-right p-3 md:p-6 hidden md:table-cell">
                          <div className="font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap">
                            {formatVolume(latestQuote.volume)}
                          </div>
                        </td>
                        <td className="text-right p-3 md:p-6 hidden lg:table-cell">
                          <div className="font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap">
                            {formatMarketCap(latestQuote.marketCap)}
                          </div>
                        </td>
                        <td className="text-center p-3 md:p-6 hidden lg:table-cell">
                          <span className="inline-flex items-center px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium bg-green-100 text-green-800">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-1 md:mr-2 animate-pulse"></div>
                            Live
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            {cryptos.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-500 dark:text-gray-400">
                  <div className="text-6xl mb-6">₿</div>
                  <p className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">No cryptocurrency data available</p>
                  <p className="text-sm">Cryptocurrency prices will appear here when market data is available.</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Educational Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Cryptocurrency Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:bg-gradient-to-br dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
              <div className="text-4xl mb-4 text-center">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 text-center">Getting Started</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• What is cryptocurrency and blockchain?</li>
                <li>• How to buy your first Bitcoin</li>
                <li>• Understanding crypto wallets</li>
                <li>• Basic security practices</li>
                <li>• Common beginner mistakes</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:bg-gradient-to-br dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-6 border border-green-200 dark:border-green-700">
              <div className="text-4xl mb-4 text-center">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 text-center">Trading & Investing</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Technical analysis basics</li>
                <li>• Fundamental analysis for crypto</li>
                <li>• Risk management strategies</li>
                <li>• Portfolio diversification</li>
                <li>• Tax implications</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:bg-gradient-to-br dark:from-purple-900/30 dark:to-violet-900/30 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
              <div className="text-4xl mb-4 text-center">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 text-center">Security & Safety</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Hardware wallet setup</li>
                <li>• Two-factor authentication</li>
                <li>• Recognizing scams and phishing</li>
                <li>• Secure trading practices</li>
                <li>• Cold storage best practices</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Market Disclaimer */}
        <section className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:bg-gradient-to-r dark:from-yellow-900/30 dark:to-orange-900/30 border border-yellow-200 dark:border-yellow-700 rounded-xl p-8">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-4 text-center text-xl">⚠️ Cryptocurrency Trading Risk Warning</h3>
          <div className="text-sm text-yellow-700 dark:text-yellow-300 space-y-3">
            <p>• <strong>High Volatility:</strong> Cryptocurrency prices can fluctuate dramatically within short periods. Prices can rise or fall by 50% or more in a single day.</p>
            <p>• <strong>Regulatory Risk:</strong> Cryptocurrency regulations vary by jurisdiction and may change rapidly, affecting market access and legitimacy.</p>
            <p>• <strong>Technology Risk:</strong> Blockchain networks, smart contracts, and exchanges may experience technical issues, hacks, or failures.</p>
            <p>• <strong>Market Risk:</strong> Cryptocurrency markets operate 24/7 with no circuit breakers, and liquidity can vary significantly across different assets.</p>
            <p>• <strong>Investment Advice:</strong> This information is for educational purposes only and should not be considered personalized investment advice. Always conduct your own research and consider consulting with a qualified financial advisor.</p>
            <p>• <strong>Loss of Capital:</strong> You should only invest money you can afford to lose entirely. Never invest borrowed money or funds needed for essential expenses.</p>
          </div>
        </section>
      </div>
    </div>
  );
}