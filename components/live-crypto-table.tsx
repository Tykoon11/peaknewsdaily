'use client'

import { useEffect, useState } from 'react'

interface LivePrice {
  symbol: string
  price: number
  changePct: number
  source: string
  timestamp: string
}

const majorCryptos = ['BTC-USD', 'ETH-USD', 'BNB-USD', 'ADA-USD', 'SOL-USD', 'DOT-USD']

const cryptoNames: { [key: string]: string } = {
  'BTC-USD': 'Bitcoin',
  'ETH-USD': 'Ethereum', 
  'BNB-USD': 'Binance Coin',
  'ADA-USD': 'Cardano',
  'SOL-USD': 'Solana',
  'DOT-USD': 'Polkadot'
}

const getCryptoIcon = (symbol: string): string => {
  const cleanSymbol = symbol.replace('-USD', '').toLowerCase()
  const icons: { [key: string]: string } = {
    'btc': '₿',
    'eth': 'Ξ', 
    'bnb': '🔶',
    'ada': '₳',
    'sol': '◎',
    'dot': '●'
  }
  return icons[cleanSymbol] || '●'
}

export default function LiveCryptoTable() {
  const [prices, setPrices] = useState<{ [key: string]: LivePrice }>({})
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  const fetchPrices = async () => {
    try {
      const response = await fetch(`/api/prices/realtime?symbols=${majorCryptos.join(',')}`, {
        cache: 'no-cache'
      })
      const data = await response.json()
      
      if (data.prices) {
        setPrices(data.prices)
        setLastUpdate(new Date())
      }
    } catch (error) {
      console.error('Failed to fetch live prices:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPrices()
    const interval = setInterval(fetchPrices, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number): string => {
    if (price < 1) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 4,
        maximumFractionDigits: 6
      }).format(price)
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency', 
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price)
  }

  const formatChange = (changePct: number) => {
    const isPositive = changePct > 0
    const sign = isPositive ? '+' : ''
    return {
      text: `${sign}${changePct.toFixed(2)}%`,
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
            {majorCryptos.map((symbol, index) => {
              const priceData = prices[symbol]
              if (!priceData) return null

              const displaySymbol = symbol.replace('-USD', '')
              const change = formatChange(priceData.changePct)
              const isEven = index % 2 === 0

              return (
                <tr key={symbol} className={`${isEven ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'} hover:bg-blue-50 dark:hover:bg-gray-600 transition-all duration-200`}>
                  <td className="p-3 md:p-6">
                    <div className="flex items-center gap-2 md:gap-4">
                      <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-xl ${
                        displaySymbol === 'BTC' ? 'bg-orange-100 text-orange-600' :
                        displaySymbol === 'ETH' ? 'bg-blue-100 text-blue-600' :
                        displaySymbol === 'ADA' ? 'bg-blue-100 text-blue-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {getCryptoIcon(symbol)}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-sm md:text-lg text-gray-900 dark:text-gray-100">{displaySymbol}</div>
                        <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300 truncate">{cryptoNames[symbol]}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right p-3 md:p-6">
                    <div className="font-bold text-sm md:text-lg text-gray-900 dark:text-gray-100 whitespace-nowrap">
                      {formatPrice(priceData.price)}
                    </div>
                  </td>
                  <td className="text-right p-3 md:p-6">
                    <div className={`font-bold text-sm md:text-lg whitespace-nowrap ${
                      change.positive ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {change.text}
                    </div>
                  </td>
                  <td className="text-center p-3 md:p-6">
                    <span className="inline-flex items-center px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1 md:mr-2 animate-pulse"></div>
                      {priceData.source}
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