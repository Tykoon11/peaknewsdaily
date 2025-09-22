import { NextRequest, NextResponse } from 'next/server'

// Real-time price sources with fallbacks
const CRYPTO_SOURCES = {
  coingecko: {
    name: 'CoinGecko',
    fetchBTC: async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true')
      const data = await response.json()
      return {
        price: data.bitcoin.usd,
        changePct: data.bitcoin.usd_24h_change,
        source: 'coingecko'
      }
    },
    fetchETH: async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true')
      const data = await response.json()
      return {
        price: data.ethereum.usd,
        changePct: data.ethereum.usd_24h_change,
        source: 'coingecko'
      }
    }
  },
  binance: {
    name: 'Binance',
    fetchBTC: async () => {
      const [priceResp, tickerResp] = await Promise.all([
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT')
      ])
      const priceData = await priceResp.json()
      const tickerData = await tickerResp.json()
      return {
        price: parseFloat(priceData.price),
        changePct: parseFloat(tickerData.priceChangePercent),
        source: 'binance'
      }
    },
    fetchETH: async () => {
      const [priceResp, tickerResp] = await Promise.all([
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT'),
        fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT')
      ])
      const priceData = await priceResp.json()
      const tickerData = await tickerResp.json()
      return {
        price: parseFloat(priceData.price),
        changePct: parseFloat(tickerData.priceChangePercent),
        source: 'binance'
      }
    }
  },
  coinbase: {
    name: 'Coinbase',
    fetchBTC: async () => {
      const response = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=BTC')
      const data = await response.json()
      return {
        price: parseFloat(data.data.rates.USD),
        changePct: 0, // Coinbase doesn't provide 24h change in this endpoint
        source: 'coinbase'
      }
    }
  }
}

const STOCK_SOURCES = {
  yahoo: {
    name: 'Yahoo Finance',
    fetchStock: async (symbol: string) => {
      const response = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`)
      const data = await response.json()
      const result = data.chart.result[0]
      const meta = result.meta
      
      return {
        price: meta.regularMarketPrice,
        changePct: ((meta.regularMarketPrice - meta.previousClose) / meta.previousClose) * 100,
        source: 'yahoo'
      }
    }
  }
}

async function fetchRealTimePrice(symbol: string) {
  const cleanSymbol = symbol.toUpperCase()
  
  // Crypto prices
  if (cleanSymbol === 'BTC-USD' || cleanSymbol === 'BTCUSDT' || cleanSymbol === 'BTC') {
    const sources = [CRYPTO_SOURCES.coingecko, CRYPTO_SOURCES.binance, CRYPTO_SOURCES.coinbase]
    for (const source of sources) {
      try {
        if (source.fetchBTC) {
          const data = await source.fetchBTC()
          return {
            symbol: 'BTC-USD',
            ...data,
            timestamp: new Date().toISOString()
          }
        }
      } catch (error) {
        console.log(`${source.name} failed for BTC:`, error instanceof Error ? error.message : String(error))
        continue
      }
    }
  }
  
  if (cleanSymbol === 'ETH-USD' || cleanSymbol === 'ETHUSDT' || cleanSymbol === 'ETH') {
    const sources = [CRYPTO_SOURCES.coingecko, CRYPTO_SOURCES.binance]
    for (const source of sources) {
      try {
        if (source.fetchETH) {
          const data = await source.fetchETH()
          return {
            symbol: 'ETH-USD',
            ...data,
            timestamp: new Date().toISOString()
          }
        }
      } catch (error) {
        console.log(`${source.name} failed for ETH:`, error instanceof Error ? error.message : String(error))
        continue
      }
    }
  }
  
  // Stock prices
  const stockSymbols = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'META', 'NVDA', 'NFLX']
  if (stockSymbols.includes(cleanSymbol)) {
    try {
      const data = await STOCK_SOURCES.yahoo.fetchStock(cleanSymbol)
      return {
        symbol: cleanSymbol,
        ...data,
        timestamp: new Date().toISOString()
      }
    } catch (error) {
      console.log(`Yahoo failed for ${cleanSymbol}:`, error instanceof Error ? error.message : String(error))
    }
  }
  
  throw new Error(`No real-time data available for ${symbol}`)
}

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const symbols = searchParams.get('symbols')?.split(',') || []
  
  if (symbols.length === 0) {
    return NextResponse.json(
      { error: 'Missing symbols parameter. Use ?symbols=BTC-USD,ETH-USD,AAPL' },
      { status: 400 }
    )
  }
  
  try {
    const results = await Promise.allSettled(
      symbols.map(symbol => fetchRealTimePrice(symbol.trim()))
    )
    
    const prices: Record<string, any> = {}
    let successCount = 0
    
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        prices[result.value.symbol] = result.value
        successCount++
      } else {
        console.error(`Failed to fetch ${symbols[index]}:`, result.reason instanceof Error ? result.reason.message : String(result.reason))
      }
    })
    
    return NextResponse.json({
      prices,
      count: successCount,
      total: symbols.length,
      timestamp: new Date().toISOString(),
      source: 'realtime-api',
      note: 'This endpoint bypasses all caching and fetches live data directly from exchanges'
    })
    
  } catch (error) {
    console.error('Real-time prices API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch real-time prices', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}