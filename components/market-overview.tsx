'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLivePrices } from '@/hooks/useLivePrices'
import { getMarketStateLabel, getMarketStateColor, formatTimestampET } from '@/lib/marketState'
import PriceValidationIndicator from './price-validation-indicator'

interface Quote {
  symbol: string
  name: string
  type: string
  market: string
  currency: string
  price: number
  change: number | null
  changePercent: number | null
  marketStatus: string
  timestamp?: Date
}

interface MarketData {
  quotes: Quote[]
  count: number
  timestamp: string
}

// Major symbols to track with live prices
const STOCK_SYMBOLS = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'META', 'NVDA', 'NFLX']
const CRYPTO_SYMBOLS = ['BTC-USD', 'ETH-USD', 'BNB-USD', 'ADA-USD', 'SOL-USD', 'DOT-USD']

export default function MarketOverview() {
  const [fallbackStocks, setFallbackStocks] = useState<Quote[]>([])
  const [fallbackCrypto, setFallbackCrypto] = useState<Quote[]>([])
  const [realtimeStocks, setRealtimeStocks] = useState<Quote[]>([])
  const [realtimeCrypto, setRealtimeCrypto] = useState<Quote[]>([])
  const [usingRealtime, setUsingRealtime] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Only use live prices as a fallback when real-time fails
  const stockLivePrices = useLivePrices({
    symbols: STOCK_SYMBOLS,
    component: 'table',
    enabled: !usingRealtime, // Disable when real-time is working
    fallbackPolling: !usingRealtime
  })

  const cryptoLivePrices = useLivePrices({
    symbols: CRYPTO_SYMBOLS,
    component: 'table',
    enabled: !usingRealtime, // Disable when real-time is working
    fallbackPolling: !usingRealtime
  })

  // Primary real-time data fetch with fallback
  useEffect(() => {
    async function fetchMarketData() {
      try {
        // First, try to get real-time data directly from exchanges
        const realtimeSymbols = [...STOCK_SYMBOLS, ...CRYPTO_SYMBOLS].join(',')
        const realtimeResponse = await fetch(`/api/prices/realtime?symbols=${realtimeSymbols}&t=${Date.now()}`)
        
        if (realtimeResponse.ok) {
          const realtimeData = await realtimeResponse.json()
          console.log('📈 Using real-time exchange data:', Object.keys(realtimeData.prices).length, 'symbols')
          // console.log('📊 Raw API response:', realtimeData)
          
          // Convert real-time data to Quote format
          const realtimeStockData = STOCK_SYMBOLS.map(symbol => {
            const priceData = realtimeData.prices[symbol]
            if (priceData) {
              return {
                symbol: priceData.symbol,
                name: symbol, // Simplified for now
                type: 'stock',
                market: 'NASDAQ',
                currency: 'USD',
                price: priceData.price,
                change: priceData.price * (priceData.changePct / 100),
                changePercent: priceData.changePct,
                marketStatus: 'REGULAR',
                timestamp: new Date(priceData.timestamp)
              }
            }
            return null
          }).filter(Boolean) as Quote[]

          const realtimeCryptoData = CRYPTO_SYMBOLS.map(symbol => {
            const priceData = realtimeData.prices[symbol]
            if (priceData && typeof priceData.price === 'number' && priceData.price >= 0) {
              return {
                symbol: priceData.symbol,
                name: symbol.replace('-USD', ''),
                type: 'crypto',
                market: 'CRYPTO',
                currency: 'USD',
                price: priceData.price,
                change: priceData.price * (priceData.changePct / 100),
                changePercent: priceData.changePct,
                marketStatus: 'REGULAR',
                timestamp: new Date(priceData.timestamp)
              }
            }
            return null
          }).filter(Boolean) as Quote[]
          
          // Set real-time data and mark as using real-time
          setRealtimeStocks(realtimeStockData)
          setRealtimeCrypto(realtimeCryptoData)
          setUsingRealtime(true)
          setLoading(false)
          // console.log('✅ Real-time data set, disabling live price hooks')
          return
        }
        
        // Fallback to cached data if real-time fails
        console.log('⚠️ Real-time API failed, using cached data')
        setUsingRealtime(false)
        
        const [stockResponse, cryptoResponse] = await Promise.all([
          fetch('/api/quotes?type=stock&limit=8'),
          fetch(`/api/quotes?type=crypto&limit=6&t=${Date.now()}`)
        ])
        
        const stockData: MarketData = await stockResponse.json()
        const cryptoData: MarketData = await cryptoResponse.json()
        
        setFallbackStocks(stockData.quotes || [])
        setFallbackCrypto(cryptoData.quotes || [])
        
      } catch (err) {
        setError('Failed to fetch market data')
        console.error('Market data fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchMarketData()
    
    // Refresh real-time data every minute
    const refreshInterval = setInterval(fetchMarketData, 60 * 1000)
    return () => clearInterval(refreshInterval)
  }, []) // Remove dependencies to prevent conflicts with live price hooks

  // Convert live prices to Quote format for display
  const convertLivePriceToQuote = (sym: string, livePrice: any, type: 'stock' | 'crypto'): Quote => {
    return {
      symbol: sym,
      name: type === 'crypto' ? sym.replace('-USD', '') : sym,
      type,
      market: type === 'stock' ? (sym === 'SPY' || sym === 'DIA' || sym === 'IWM' ? 'NYSE' : 'NASDAQ') : 'CRYPTO',
      currency: 'USD',
      price: livePrice?.price || 0,
      change: livePrice ? (livePrice.price * livePrice.changePct / 100) : null,
      changePercent: livePrice?.changePct || null,
      marketStatus: stockLivePrices.marketState === 'REGULAR' ? 'open' : 'closed'
    }
  }

  // Get current quotes (PRIORITY: real-time > live price hooks > fallback)
  const stockQuotes = usingRealtime && realtimeStocks.length > 0
    ? realtimeStocks.slice(0, 8)
    : stockLivePrices.connected 
      ? STOCK_SYMBOLS.map(sym => convertLivePriceToQuote(sym, stockLivePrices.getPrice(sym), 'stock')).slice(0, 8)
      : fallbackStocks

  // ABSOLUTE PRIORITY: Real-time data first, everything else is fallback
  const cryptoQuotes = realtimeCrypto.length > 0
    ? realtimeCrypto.slice(0, 6)
    : cryptoLivePrices.connected && !usingRealtime
      ? CRYPTO_SYMBOLS.map(sym => convertLivePriceToQuote(sym, cryptoLivePrices.getPrice(sym), 'crypto')).slice(0, 6)
      : CRYPTO_SYMBOLS.map(symbol => ({
          symbol,
          name: symbol.replace('-USD', ''),
          type: 'crypto' as const,
          market: 'CRYPTO',
          currency: 'USD',
          price: 0,
          change: null,
          changePercent: null,
          marketStatus: 'open'
        }))
        
  // console.log('🎯 FINAL cryptoQuotes:', cryptoQuotes.length, 'symbols -', cryptoQuotes.map(q => q.symbol))
  // console.log('🎯 Debug states - usingRealtime:', usingRealtime, 'realtimeCrypto.length:', realtimeCrypto.length, 'cryptoLivePrices.connected:', cryptoLivePrices.connected)

  // Update loading state 
  const isLoading = loading && !usingRealtime && !stockLivePrices.connected && !cryptoLivePrices.connected && stockQuotes.length === 0

  const formatPrice = (price: number, currency: string = 'USD') => {
    if (currency === 'USD' && price > 1000) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(price)
    }
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

  if (isLoading) {
    return (
      <section className="mb-8 xs:mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg xs:rounded-xl border dark:border-gray-700 p-4 xs:p-6 mx-2 xs:mx-0">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-4"></div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="mb-8 xs:mb-12">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg xs:rounded-xl p-4 xs:p-6 text-center mx-2 xs:mx-0">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="mb-8 xs:mb-12 mx-2 xs:mx-0">
      {/* Live Data Status */}
      <div className="mb-3 xs:mb-4 flex flex-col xs:flex-row xs:items-center xs:justify-center gap-2 xs:gap-4 text-xs">
        {/* Stock data status */}
        <div className="flex items-center gap-1 justify-center xs:justify-start">
          <div className={`w-2 h-2 rounded-full ${stockLivePrices.connected ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
          <span className="text-gray-600 dark:text-gray-400">
            Stocks: {stockLivePrices.connected ? 'Live' : 'Delayed'} 
            {stockLivePrices.connected && (
              <span className={`ml-1 px-1 py-0.5 rounded text-xs ${getMarketStateColor(stockLivePrices.marketState)}`}>
                {getMarketStateLabel(stockLivePrices.marketState)}
              </span>
            )}
          </span>
        </div>
        
        {/* Crypto data status */}
        <div className="flex items-center gap-1 justify-center xs:justify-start">
          <div className={`w-2 h-2 rounded-full ${cryptoLivePrices.connected ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
          <span className="text-gray-600 dark:text-gray-400">Crypto: {cryptoLivePrices.connected ? 'Live' : 'Delayed'}</span>
        </div>
        
        {/* Last update */}
        {(stockLivePrices.connected || cryptoLivePrices.connected) && (
          <div className="text-gray-500 dark:text-gray-400">
            Last: {formatTimestampET(Math.max(stockLivePrices.lastUpdate, cryptoLivePrices.lastUpdate))}
          </div>
        )}
      </div>
      
      {/* Cryptocurrency - MOVED TO TOP */}
      {cryptoQuotes.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg xs:rounded-xl border dark:border-gray-700 overflow-hidden">
          <div className="border-b dark:border-gray-700 p-3 xs:p-4">
            <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 xs:gap-0">
              <h2 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <div className="w-5 h-5 xs:w-6 xs:h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                Cryptocurrency
              </h2>
              <Link 
                href="/markets/crypto" 
                className="text-xs xs:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              >
                View All →
              </Link>
            </div>
          </div>
          <div className="p-3 xs:p-4">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 xs:gap-4">
              {cryptoQuotes.slice(0, 6).map((quote) => {
                const change = formatChange(quote.change, quote.changePercent)
                const displaySymbol = quote.symbol.replace('-USD', '')
                const isHighVol = cryptoLivePrices.connected && cryptoLivePrices.isHighVolatility(quote.symbol)
                
                return (
                  <div key={quote.symbol} className="p-2.5 xs:p-3 border dark:border-gray-700 rounded-md xs:rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-gray-900 dark:text-gray-100">{displaySymbol}</span>
                      <div className="flex items-center gap-1 justify-center xs:justify-start">
                        {isHighVol && (
                          <span className="text-xs px-1 py-0.5 rounded bg-red-100 text-red-700" title="High Volatility">
                            🔥
                          </span>
                        )}
                        <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400">24/7</span>
                      </div>
                    </div>
                    <div className="text-sm xs:text-base lg:text-lg font-semibold mb-1">
                      {formatPrice(quote.price, quote.currency)}
                    </div>
                    <div className={`text-xs xs:text-sm font-medium ${
                      change.positive === true ? 'text-green-600' :
                      change.positive === false ? 'text-red-600' : 'text-gray-500'
                    }`}>
                      {change.text}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate hidden xs:block">
                      {quote.name}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Major Indices & Stocks - NOW BELOW CRYPTO */}
      <div className="bg-white dark:bg-gray-800 rounded-lg xs:rounded-xl border dark:border-gray-700 mt-4 xs:mt-6 overflow-hidden">
        <div className="border-b dark:border-gray-700 p-3 xs:p-4">
          <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 xs:gap-0">
            <h2 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <div className="w-5 h-5 xs:w-6 xs:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14l5-5 5 5z"/>
                </svg>
              </div>
              Major Stocks
            </h2>
            <Link 
              href="/markets/stocks" 
              className="text-xs xs:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            >
              View All →
            </Link>
          </div>
        </div>
        <div className="p-3 xs:p-4">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4">
            {stockQuotes.slice(0, 8).map((quote) => {
              const change = formatChange(quote.change, quote.changePercent)
              return (
                <div key={quote.symbol} className="p-2.5 xs:p-3 border dark:border-gray-700 rounded-md xs:rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs xs:text-sm font-bold text-gray-900 dark:text-gray-100">{quote.symbol}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      quote.marketStatus === 'open' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}>
                      {quote.marketStatus === 'open' ? 'OPEN' : 'CLOSED'}
                    </span>
                  </div>
                  <div className="text-sm xs:text-base lg:text-lg font-semibold mb-1">
                    {formatPrice(quote.price, quote.currency)}
                  </div>
                  <div className={`text-xs xs:text-sm font-medium ${
                    change.positive === true ? 'text-green-600' :
                    change.positive === false ? 'text-red-600' : 'text-gray-500'
                  }`}>
                    {change.text}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate hidden xs:block">
                    {quote.name}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}