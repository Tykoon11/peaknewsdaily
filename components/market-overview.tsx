'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLivePrices } from '@/hooks/useLivePrices'
import { getMarketStateLabel, getMarketStateColor, formatTimestampET } from '@/lib/marketState'

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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Use live prices for both stocks and crypto
  const stockLivePrices = useLivePrices({
    symbols: STOCK_SYMBOLS,
    component: 'table',
    enabled: true,
    fallbackPolling: true
  })

  const cryptoLivePrices = useLivePrices({
    symbols: CRYPTO_SYMBOLS,
    component: 'table',
    enabled: true,
    fallbackPolling: true
  })

  // Fallback to existing API if live prices aren't available
  useEffect(() => {
    async function fetchFallbackData() {
      try {
        // Only fetch fallback if live prices aren't connected
        if (!stockLivePrices.connected && !cryptoLivePrices.connected) {
          // Fetch stock quotes
          const stockResponse = await fetch('/api/quotes?type=stock&limit=8')
          const stockData: MarketData = await stockResponse.json()
          
          // Fetch crypto quotes
          const cryptoResponse = await fetch('/api/quotes?type=crypto&limit=6')
          const cryptoData: MarketData = await cryptoResponse.json()
          
          setFallbackStocks(stockData.quotes || [])
          setFallbackCrypto(cryptoData.quotes || [])
        }
      } catch (err) {
        setError('Failed to fetch market data')
        console.error('Market data fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchFallbackData()
  }, [stockLivePrices.connected, cryptoLivePrices.connected])

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

  // Get current quotes (prefer live data, fallback to API data)
  const stockQuotes = stockLivePrices.connected 
    ? STOCK_SYMBOLS.map(sym => convertLivePriceToQuote(sym, stockLivePrices.getPrice(sym), 'stock')).slice(0, 8)
    : fallbackStocks

  const cryptoQuotes = cryptoLivePrices.connected
    ? CRYPTO_SYMBOLS.map(sym => convertLivePriceToQuote(sym, cryptoLivePrices.getPrice(sym), 'crypto')).slice(0, 6)
    : fallbackCrypto

  // Update loading state based on live prices
  const isLoading = loading && !stockLivePrices.connected && !cryptoLivePrices.connected && stockQuotes.length === 0

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
      <section className="mb-12">
        <div className="bg-white rounded-xl border p-6">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-48 mb-4"></div>
            <div className="grid md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                  <div className="h-6 bg-gray-200 rounded w-24"></div>
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
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
      <section className="mb-12">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="mb-12">
      {/* Live Data Status */}
      <div className="mb-4 flex items-center justify-center gap-4 text-xs">
        {/* Stock data status */}
        <div className="flex items-center gap-1">
          <div className={`w-2 h-2 rounded-full ${stockLivePrices.connected ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
          <span className="text-gray-600">
            Stocks: {stockLivePrices.connected ? 'Live' : 'Delayed'} 
            {stockLivePrices.connected && (
              <span className={`ml-1 px-1 py-0.5 rounded text-xs ${getMarketStateColor(stockLivePrices.marketState)}`}>
                {getMarketStateLabel(stockLivePrices.marketState)}
              </span>
            )}
          </span>
        </div>
        
        {/* Crypto data status */}
        <div className="flex items-center gap-1">
          <div className={`w-2 h-2 rounded-full ${cryptoLivePrices.connected ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
          <span className="text-gray-600">Crypto: {cryptoLivePrices.connected ? 'Live' : 'Delayed'}</span>
        </div>
        
        {/* Last update */}
        {(stockLivePrices.connected || cryptoLivePrices.connected) && (
          <div className="text-gray-500">
            Last: {formatTimestampET(Math.max(stockLivePrices.lastUpdate, cryptoLivePrices.lastUpdate))}
          </div>
        )}
      </div>
      {/* Major Indices & Stocks */}
      <div className="bg-white rounded-xl border mb-6 overflow-hidden">
        <div className="border-b p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14l5-5 5 5z"/>
                </svg>
              </div>
              Major Stocks
            </h2>
            <Link 
              href="/markets/stocks" 
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              View All →
            </Link>
          </div>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-4">
            {stockQuotes.slice(0, 8).map((quote) => {
              const change = formatChange(quote.change, quote.changePercent)
              return (
                <div key={quote.symbol} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-gray-900">{quote.symbol}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      quote.marketStatus === 'open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {quote.marketStatus === 'open' ? 'OPEN' : 'CLOSED'}
                    </span>
                  </div>
                  <div className="text-lg font-semibold mb-1">
                    {formatPrice(quote.price, quote.currency)}
                  </div>
                  <div className={`text-sm font-medium ${
                    change.positive === true ? 'text-green-600' :
                    change.positive === false ? 'text-red-600' : 'text-gray-500'
                  }`}>
                    {change.text}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 truncate">
                    {quote.name}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Cryptocurrency */}
      {cryptoQuotes.length > 0 && (
        <div className="bg-white rounded-xl border overflow-hidden">
          <div className="border-b p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                Cryptocurrency
              </h2>
              <Link 
                href="/markets/crypto" 
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                View All →
              </Link>
            </div>
          </div>
          <div className="p-4">
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {cryptoQuotes.slice(0, 6).map((quote) => {
                const change = formatChange(quote.change, quote.changePercent)
                const displaySymbol = quote.symbol.replace('-USD', '')
                const isHighVol = cryptoLivePrices.connected && cryptoLivePrices.isHighVolatility(quote.symbol)
                
                return (
                  <div key={quote.symbol} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-gray-900">{displaySymbol}</span>
                      <div className="flex items-center gap-1">
                        {isHighVol && (
                          <span className="text-xs px-1 py-0.5 rounded bg-red-100 text-red-700" title="High Volatility">
                            🔥
                          </span>
                        )}
                        <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">24/7</span>
                      </div>
                    </div>
                    <div className="text-lg font-semibold mb-1">
                      {formatPrice(quote.price, quote.currency)}
                    </div>
                    <div className={`text-sm font-medium ${
                      change.positive === true ? 'text-green-600' :
                      change.positive === false ? 'text-red-600' : 'text-gray-500'
                    }`}>
                      {change.text}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 truncate">
                      {quote.name}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}