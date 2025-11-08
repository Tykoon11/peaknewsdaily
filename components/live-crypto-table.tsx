'use client'

import { useEffect, useState } from 'react'

interface LivePrice {
  symbol: string
  price: number
  changePct: number
  source: string
  timestamp: string
}

export default function LiveCryptoTable() {
  const [prices, setPrices] = useState<{ [key: string]: LivePrice }>({})
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  // All crypto symbols we want to display
  const cryptoSymbols = [
    'BTC-USD', 'ETH-USD', 'XRP-USD', 'BNB-USD', 'ADA-USD', 'SOL-USD', 'DOT-USD', 'AVAX-USD', 
    'MATIC-USD', 'LINK-USD', 'LTC-USD', 'UNI-USD', 'ATOM-USD', 'ALGO-USD', 'DOGE-USD', 'SHIB-USD'
  ]

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        console.log('🔄 Fetching live crypto prices...')
        const response = await fetch(`/api/prices/realtime?symbols=${cryptoSymbols.join(',')}`, {
          cache: 'no-cache',
          headers: {
            'Cache-Control': 'no-cache',
          }
        })
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }
        
        const data = await response.json()
        console.log('✅ API Response:', data)
        console.log('✅ Received prices:', Object.keys(data.prices || {}).length, data.prices)
        
        if (data.prices && Object.keys(data.prices).length > 0) {
          setPrices(data.prices)
          setLastUpdate(new Date())
          console.log('✅ Prices set:', data.prices)
        } else {
          console.warn('⚠️ No prices in response:', data)
        }
        setLoading(false)
      } catch (error) {
        console.error('❌ Error fetching prices:', error)
        setLoading(false)
      }
    }

    fetchPrices()
    const interval = setInterval(fetchPrices, 60000)
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
    if (changePct === null || changePct === undefined || isNaN(changePct)) {
      return { text: 'N/A', positive: null }
    }
    const isPositive = changePct > 0
    const sign = isPositive ? '+' : ''
    return {
      text: `${sign}${changePct.toFixed(2)}%`,
      positive: isPositive
    }
  }

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <div className="p-8 text-center">
          <div className="inline-block w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading live prices...</p>
        </div>
      </div>
    )
  }

  const activePrices = Object.entries(prices).filter(([symbol, priceData]) => 
    priceData && priceData.price > 0
  )

  if (activePrices.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <div className="p-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">No live prices available</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      {lastUpdate && (
        <div className="bg-green-50 dark:bg-green-900/30 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
          <p className="text-sm text-green-700 dark:text-green-300 text-center">
            ● Live prices updated {lastUpdate.toLocaleTimeString()}
          </p>
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">Name</th>
              <th className="text-right px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">Price</th>
              <th className="text-right px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">24h Change</th>
              <th className="text-center px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">Source</th>
            </tr>
          </thead>
          <tbody>
            {activePrices.map(([symbol, priceData], index) => {
              const displaySymbol = symbol.replace('-USD', '')
              const change = formatChange(priceData.changePct)
              const isEven = index % 2 === 0

              return (
                <tr key={symbol} className={`${isEven ? 'bg-white dark:bg-gray-800' : 'bg-gray-50/50 dark:bg-gray-700/50'} hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                        displaySymbol === 'BTC' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' :
                        displaySymbol === 'ETH' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                        displaySymbol === 'ADA' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                        displaySymbol === 'SOL' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' :
                        displaySymbol === 'BNB' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                      }`}>
                        {displaySymbol.slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-gray-100">{displaySymbol}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right px-4 py-3">
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {formatPrice(priceData.price)}
                    </div>
                  </td>
                  <td className="text-right px-4 py-3">
                    <div className={`font-semibold ${
                      change.positive === null ? 'text-gray-500' : 
                      change.positive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {change.text}
                    </div>
                  </td>
                  <td className="text-center px-4 py-3">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></div>
                      Live
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