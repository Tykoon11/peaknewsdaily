'use client'

import { useEffect, useState } from 'react'

interface LivePrice {
  symbol: string
  price: number
  changePct: number
  source: string
  timestamp: string
}

interface CryptoAsset {
  symbol: string
  name: string
  quotes: Array<{
    price: number
    change?: number
    changePercent?: number
    volume?: number | null
    marketCap?: number | null
    timestamp: Date
  }>
}

const getCryptoIcon = (symbol: string): string => {
  const cleanSymbol = symbol.replace('-USD', '').toLowerCase()
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
    'op': '🔴',
    'arb': '🔵',
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
  }
  return icons[cleanSymbol] || '●'
}

export default function LiveCryptoTable() {
  const [cryptoAssets, setCryptoAssets] = useState<CryptoAsset[]>([])
  const [prices, setPrices] = useState<{ [key: string]: LivePrice }>({})
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  const fetchPrices = async () => {
    if (cryptoAssets.length === 0) return
    
    try {
      // Get ALL cryptocurrencies with live prices from Binance
      const allCryptos = [
        'XRP-USD', 'BNB-USD', 'ADA-USD', 'SOL-USD', 'DOT-USD', 'AVAX-USD', 'OP-USD', 'LRC-USD', 'IMX-USD', 'DOGE-USD',
        'SHIB-USD', 'PEPE-USD', 'BONK-USD', 'BTC-USD', 'ETH-USD', 'MATIC-USD', 'LINK-USD', 'LTC-USD', 'UNI-USD', 'ATOM-USD',
        'ICP-USD', 'NEAR-USD', 'ALGO-USD', 'VET-USD', 'FTM-USD', 'HBAR-USD', 'XLM-USD', 'AAVE-USD', 'MKR-USD', 'CRV-USD',
        'COMP-USD', 'SUSHI-USD', 'YFI-USD', 'BAL-USD', 'SNX-USD', '1INCH-USD', 'LIDO-USD', 'ARB-USD', 'FLOKI-USD', 'FET-USD',
        'OCEAN-USD', 'AGIX-USD', 'RNDR-USD', 'GRT-USD', 'AXS-USD', 'SAND-USD', 'MANA-USD', 'ENJ-USD', 'CHZ-USD', 'XMR-USD',
        'ZEC-USD', 'DASH-USD', 'XTZ-USD', 'EOS-USD', 'IOTA-USD', 'NEO-USD', 'QTUM-USD', 'USDC-USD', 'USDT-USD', 'DAI-USD',
        'WBTC-USD', 'APT-USD', 'SUI-USD', 'SEI-USD', 'WLD-USD', 'INJ-USD'
      ]
      const response = await fetch(`/api/prices/realtime?symbols=${allCryptos.join(',')}`, {
        cache: 'no-cache'
      })
      const data = await response.json()
      
      if (data.prices) {
        setPrices(data.prices)
        setLastUpdate(new Date())
      }
    } catch (error) {
      console.error('Failed to fetch live prices:', error)
      // Don't treat this as a fatal error - we have fallback data from props
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Initialize with all 66 cryptocurrencies instead of fetching from API
    const allCryptos: CryptoAsset[] = [
      'XRP-USD', 'BNB-USD', 'ADA-USD', 'SOL-USD', 'DOT-USD', 'AVAX-USD', 'OP-USD', 'LRC-USD', 'IMX-USD', 'DOGE-USD',
      'SHIB-USD', 'PEPE-USD', 'BONK-USD', 'BTC-USD', 'ETH-USD', 'MATIC-USD', 'LINK-USD', 'LTC-USD', 'UNI-USD', 'ATOM-USD',
      'ICP-USD', 'NEAR-USD', 'ALGO-USD', 'VET-USD', 'FTM-USD', 'HBAR-USD', 'XLM-USD', 'AAVE-USD', 'MKR-USD', 'CRV-USD',
      'COMP-USD', 'SUSHI-USD', 'YFI-USD', 'BAL-USD', 'SNX-USD', '1INCH-USD', 'LIDO-USD', 'ARB-USD', 'FLOKI-USD', 'FET-USD',
      'OCEAN-USD', 'AGIX-USD', 'RNDR-USD', 'GRT-USD', 'AXS-USD', 'SAND-USD', 'MANA-USD', 'ENJ-USD', 'CHZ-USD', 'XMR-USD',
      'ZEC-USD', 'DASH-USD', 'XTZ-USD', 'EOS-USD', 'IOTA-USD', 'NEO-USD', 'QTUM-USD', 'USDC-USD', 'USDT-USD', 'DAI-USD',
      'WBTC-USD', 'APT-USD', 'SUI-USD', 'SEI-USD', 'WLD-USD', 'INJ-USD'
    ].map(symbol => ({
      symbol,
      name: symbol.replace('-USD', ''),
      quotes: [{ price: 0, changePercent: 0, timestamp: new Date() }]
    }))

    setCryptoAssets(allCryptos)
    setLoading(false)
    
    // Try to fetch live prices for ALL cryptocurrencies
    const fetchLivePrices = async () => {
      try {
        const allCryptos = [
          'XRP-USD', 'BNB-USD', 'ADA-USD', 'SOL-USD', 'DOT-USD', 'AVAX-USD', 'OP-USD', 'LRC-USD', 'IMX-USD', 'DOGE-USD',
          'SHIB-USD', 'PEPE-USD', 'BONK-USD', 'BTC-USD', 'ETH-USD', 'MATIC-USD', 'LINK-USD', 'LTC-USD', 'UNI-USD', 'ATOM-USD',
          'ICP-USD', 'NEAR-USD', 'ALGO-USD', 'VET-USD', 'FTM-USD', 'HBAR-USD', 'XLM-USD', 'AAVE-USD', 'MKR-USD', 'CRV-USD',
          'COMP-USD', 'SUSHI-USD', 'YFI-USD', 'BAL-USD', 'SNX-USD', '1INCH-USD', 'LIDO-USD', 'ARB-USD', 'FLOKI-USD', 'FET-USD',
          'OCEAN-USD', 'AGIX-USD', 'RNDR-USD', 'GRT-USD', 'AXS-USD', 'SAND-USD', 'MANA-USD', 'ENJ-USD', 'CHZ-USD', 'XMR-USD',
          'ZEC-USD', 'DASH-USD', 'XTZ-USD', 'EOS-USD', 'IOTA-USD', 'NEO-USD', 'QTUM-USD', 'USDC-USD', 'USDT-USD', 'DAI-USD',
          'WBTC-USD', 'APT-USD', 'SUI-USD', 'SEI-USD', 'WLD-USD', 'INJ-USD'
        ]
        const response = await fetch(`/api/prices/realtime?symbols=${allCryptos.join(',')}`, {
          cache: 'no-cache'
        })
        const data = await response.json()
        
        if (data.prices) {
          setPrices(data.prices)
          setLastUpdate(new Date())
        }
      } catch (error) {
        console.error('Failed to fetch live prices:', error)
      }
    }

    fetchLivePrices()
    const interval = setInterval(fetchLivePrices, 60000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: any): string => {
    // Convert to number and handle all edge cases
    const numValue = typeof price === 'number' ? price : 
                     typeof price === 'string' ? parseFloat(price) :
                     price?.toNumber ? price.toNumber() :
                     Number(price)
    
    if (isNaN(numValue) || !isFinite(numValue) || numValue < 0) {
      return '$0.00'
    }
    
    if (numValue < 1) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 4,
        maximumFractionDigits: 6
      }).format(numValue)
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency', 
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(numValue)
  }

  const formatChange = (changePct: any) => {
    // Convert to number and handle all edge cases
    const numValue = typeof changePct === 'number' ? changePct : 
                     typeof changePct === 'string' ? parseFloat(changePct) :
                     changePct?.toNumber ? changePct.toNumber() :
                     Number(changePct)
    
    if (changePct === null || changePct === undefined || isNaN(numValue) || !isFinite(numValue)) {
      return {
        text: 'N/A',
        positive: null
      }
    }
    
    const isPositive = numValue > 0
    const sign = isPositive ? '+' : ''
    return {
      text: `${sign}${numValue.toFixed(2)}%`,
      positive: isPositive
    }
  }

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-8 text-center">
          <div className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading live prices...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
      {lastUpdate && (
        <div className="bg-green-50 dark:bg-green-900/30 px-6 py-3 border-b border-green-200 dark:border-green-700">
          <p className="text-sm text-green-700 dark:text-green-300 text-center">
            ● Live prices updated {lastUpdate.toLocaleTimeString()}
          </p>
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-blue-50 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-600 border-b-2 border-gray-200 dark:border-gray-600">
            <tr>
              <th className="text-left p-3 md:p-6 font-bold text-gray-900 dark:text-gray-100">Cryptocurrency</th>
              <th className="text-right p-3 md:p-6 font-bold text-gray-900 dark:text-gray-100">Price</th>
              <th className="text-right p-3 md:p-6 font-bold text-gray-900 dark:text-gray-100">24h Change</th>
              <th className="text-center p-3 md:p-6 font-bold text-gray-900 dark:text-gray-100">Source</th>
            </tr>
          </thead>
          <tbody>
            {cryptoAssets.map((asset, index) => {
              const priceData = prices[asset.symbol]
              const fallbackPrice = asset.quotes[0] // Use database price as fallback
              
              // Use live price if available, fallback to database price, or show $0 if no data
              const displayPrice = priceData?.price || fallbackPrice?.price || 0
              const displayChange = priceData?.changePct || fallbackPrice?.changePercent || 0
              
              // Show all assets, even those without prices (will display $0.00)
              // if (displayPrice === 0) return null

              const displaySymbol = asset.symbol.replace('-USD', '')
              const change = formatChange(displayChange)
              const isEven = index % 2 === 0

              return (
                <tr key={asset.symbol} className={`${isEven ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'} hover:bg-blue-50 dark:hover:bg-gray-600 transition-all duration-200`}>
                  <td className="p-3 md:p-6">
                    <div className="flex items-center gap-2 md:gap-4">
                      <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-xl ${
                        displaySymbol === 'BTC' ? 'bg-orange-100 text-orange-600' :
                        displaySymbol === 'ETH' ? 'bg-blue-100 text-blue-600' :
                        displaySymbol === 'ADA' ? 'bg-blue-100 text-blue-600' :
                        displaySymbol === 'SOL' ? 'bg-purple-100 text-purple-600' :
                        displaySymbol === 'BNB' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {getCryptoIcon(asset.symbol)}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-sm md:text-lg text-gray-900 dark:text-gray-100">{displaySymbol}</div>
                        <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 truncate">{asset.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right p-3 md:p-6">
                    <div className="font-bold text-sm md:text-lg text-gray-900 dark:text-gray-100 whitespace-nowrap">
                      {formatPrice(displayPrice)}
                    </div>
                  </td>
                  <td className="text-right p-3 md:p-6">
                    <div className={`font-bold text-sm md:text-lg whitespace-nowrap ${
                      change.positive === null ? 'text-gray-500' : 
                      change.positive ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {change.text}
                    </div>
                  </td>
                  <td className="text-center p-3 md:p-6">
                    <span className="inline-flex items-center px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1 md:mr-2 animate-pulse"></div>
                      {priceData?.source || 'database'}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}