import React from 'react';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import LiveCryptoOverview from '@/components/live-crypto-overview';
import LiveCryptoTable from '@/components/live-crypto-table';
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
  let liveMarketData: any = null

  // Try to fetch live market data first
  try {
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://peaknewsdaily.com' 
      : 'http://localhost:3000'
    
    const response = await fetch(`${baseUrl}/api/market-analytics`, {
      next: { revalidate: 300 }, // Cache for 5 minutes
      headers: { 'User-Agent': 'PeakNewsDaily-Server/1.0' }
    })
    
    if (response.ok) {
      liveMarketData = await response.json()
      console.log('✅ Server-side live market data fetched successfully')
    }
  } catch (error) {
    console.warn('Server-side market analytics fetch failed:', error)
  }

  if (process.env.DATABASE_URL) {
    try {
      const rawCryptos = await prisma.asset.findMany({
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
      
      // Convert BigInt and Decimal values to numbers using JSON serialization
      cryptos = JSON.parse(JSON.stringify(rawCryptos, (key, value) => {
        if (typeof value === 'bigint') {
          return Number(value)
        }
        if (value && typeof value === 'object' && value.constructor && value.constructor.name === 'Decimal') {
          return Number(value.toString())
        }
        return value
      }))
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

  // Use live data when available, fallback to database
  const totalMarketCap = liveMarketData?.totalMarketCap || cryptos.reduce((sum, crypto) => {
    const marketCap = crypto.quotes[0]?.marketCap ? Number(crypto.quotes[0].marketCap) : 0;
    return sum + marketCap;
  }, 0);

  const positiveChanges = liveMarketData?.gainers24h || cryptos.filter(crypto => {
    const change = crypto.quotes[0]?.change;
    return change && Number(change) > 0;
  }).length;

  const activeCryptos = liveMarketData?.activeCryptocurrencies || cryptos.length;

  // Debug server-side values
  console.log('🖥️ Server-side crypto page values:', {
    cryptosCount: cryptos.length,
    activeCryptos,
    totalMarketCap,
    positiveChanges
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Clean Crypto Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="relative container py-16">
          <div className="max-w-5xl mx-auto text-center">
            {/* Live Crypto Status */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3"></div>
              CRYPTO MARKETS • 24/7 TRADING • LIVE DATA
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-white leading-tight">
              Digital Asset
              <span className="block text-blue-600 dark:text-blue-400">
                Trading Hub
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                <div key={index} className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
                  <span className="text-lg">{feature.icon}</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clean Market Overview */}
      <section className="py-16">
        <div className="container">
          <div className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 mb-16">
            
            <div className="relative">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Global Crypto Market Overview</h2>
                <p className="text-gray-600 dark:text-gray-300">Real-time statistics from the digital asset markets</p>
              </div>
              
              <LiveCryptoOverview 
                fallbackActiveCryptos={activeCryptos}
                fallbackTotalMarketCap={totalMarketCap}
                fallbackGainers={positiveChanges}
              />
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
              Real-time market data updated every 10 seconds
            </p>
          </div>

          <LiveCryptoTable />
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