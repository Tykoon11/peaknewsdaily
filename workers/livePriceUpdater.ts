/**
 * Live Price Updater Worker
 * Bridges existing financial ingestion with Redis cache and SSE broadcasting
 * Runs as a background job to keep prices fresh in Redis
 */

import { PriceSnapshot, setPriceSnapshot, setSymbolMeta, setEquityMarketState, setVolatilityScore } from '@/lib/redis'
import { getEquityMarketState, MarketState, isMarketOpen, getCurrentET } from '@/lib/marketState'
import { broadcastPriceTick, broadcastMarketStateChange } from '@/app/api/stream/route'
import { prisma } from '@/lib/prisma'

// Yahoo Finance integration (reusing existing logic)
async function fetchYahooFinancePrice(symbol: string): Promise<any> {
  try {
    const response = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?region=US&lang=en-US&includePrePost=false&interval=1d&useYfid=true&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance`,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }
    )

    if (!response.ok) {
      throw new Error(`Yahoo Finance API error: ${response.status}`)
    }

    const data = await response.json()
    
    if (!data?.chart?.result?.[0]) {
      throw new Error(`No data found for ${symbol}`)
    }

    const result = data.chart.result[0]
    const meta = result.meta
    
    const currentPrice = meta.regularMarketPrice || meta.previousClose || 0
    const previousClose = meta.previousClose || 0
    const change = currentPrice - previousClose
    const changePercent = previousClose > 0 ? (change / previousClose) * 100 : 0
    
    return {
      price: Number(currentPrice.toFixed(2)),
      previousClose: Number(previousClose.toFixed(2)),
      change: Number(change.toFixed(2)),
      changePercent: Number(changePercent.toFixed(2)),
      volume: meta.regularMarketVolume || 0,
      marketCap: meta.marketCap || 0,
      dayHigh: meta.regularMarketDayHigh || currentPrice,
      dayLow: meta.regularMarketDayLow || currentPrice,
      high52Week: meta.fiftyTwoWeekHigh || currentPrice,
      low52Week: meta.fiftyTwoWeekLow || currentPrice
    }
  } catch (error) {
    console.error(`Failed to fetch Yahoo Finance price for ${symbol}:`, error)
    throw error
  }
}

// CoinGecko integration (reusing existing logic)
async function fetchCoinGeckoPrice(symbol: string): Promise<any> {
  try {
    const coinMap: { [key: string]: string } = {
      'BTC-USD': 'bitcoin',
      'ETH-USD': 'ethereum', 
      'BNB-USD': 'binancecoin',
      'ADA-USD': 'cardano',
      'SOL-USD': 'solana',
      'DOT-USD': 'polkadot'
    }

    const coinId = coinMap[symbol]
    if (!coinId) throw new Error(`Unknown crypto symbol: ${symbol}`)

    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true`,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'PeakNewsDaily/1.0'
        }
      }
    )

    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`)
    }

    const data = await response.json()
    const coinData = data[coinId]

    if (!coinData) {
      throw new Error(`No data found for ${coinId}`)
    }

    const price = coinData.usd
    const changePercent = coinData.usd_24h_change || 0
    const change = (price * changePercent) / 100

    return {
      price: Number(price.toFixed(price < 1 ? 4 : 2)),
      change: Number(change.toFixed(price < 1 ? 4 : 2)),
      changePercent: Number(changePercent.toFixed(2)),
      volume: coinData.usd_24h_vol || 0,
      marketCap: coinData.usd_market_cap || 0,
    }
  } catch (error) {
    console.error(`Failed to fetch CoinGecko price for ${symbol}:`, error)
    throw error
  }
}

// Calculate volatility score based on recent price movements
function calculateVolatilityScore(prices: number[]): number {
  if (prices.length < 2) return 0.5 // Default medium volatility
  
  // Calculate returns
  const returns = []
  for (let i = 1; i < prices.length; i++) {
    const returnPct = (prices[i] - prices[i-1]) / prices[i-1]
    returns.push(Math.abs(returnPct))
  }
  
  // Simple EMA of absolute returns (30-minute window approximation)
  const alpha = 2 / (30 + 1) // 30-period EMA
  let ema = returns[0] || 0
  
  for (let i = 1; i < returns.length; i++) {
    ema = alpha * returns[i] + (1 - alpha) * ema
  }
  
  // Scale to 0-1 range (assuming 5% daily volatility is high)
  return Math.min(1, ema / 0.05)
}

// Major symbols to track (from existing cron job)
const MAJOR_STOCKS = [
  'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'META', 'NVDA', 'NFLX',
  'SPY', 'QQQ', 'DIA', 'IWM'
]

const MAJOR_CRYPTOS = [
  'BTC-USD', 'ETH-USD', 'BNB-USD', 'ADA-USD', 'SOL-USD', 'DOT-USD'
]

/**
 * Update stock prices in Redis and broadcast to clients
 */
async function updateStockPrices() {
  const currentState = getEquityMarketState()
  console.log(`📈 Updating stock prices (market: ${currentState})`)
  
  for (const symbol of MAJOR_STOCKS) {
    try {
      const priceData = await fetchYahooFinancePrice(symbol)
      
      // Create Redis snapshot
      const snapshot: PriceSnapshot = {
        sym: symbol,
        price: priceData.price,
        ts: Date.now(),
        change: priceData.change,
        changePct: priceData.changePercent,
        state: currentState,
        dayOpen: priceData.price - priceData.change, // Approximate
        prevClose: priceData.previousClose,
        dayHigh: priceData.dayHigh,
        dayLow: priceData.dayLow,
        volume: priceData.volume
      }
      
      // Store in Redis
      await setPriceSnapshot(snapshot)
      
      // Store symbol metadata
      await setSymbolMeta({
        sym: symbol,
        name: symbol, // Would be better to get full name from API
        type: 'stock',
        exchange: symbol === 'SPY' || symbol === 'DIA' || symbol === 'IWM' ? 'NYSE' : 'NASDAQ',
        quoteCurrency: 'USD'
      })
      
      // Broadcast to live clients
      broadcastPriceTick(symbol, priceData.price, priceData.changePercent)
      
      console.log(`✅ Updated ${symbol}: $${priceData.price}`)
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 200))
      
    } catch (error) {
      console.error(`❌ Failed to update ${symbol}:`, error)
    }
  }
}

/**
 * Update crypto prices in Redis and broadcast to clients
 */
async function updateCryptoPrices() {
  console.log('₿ Updating crypto prices')
  
  // Store recent prices for volatility calculation
  const recentPrices: Record<string, number[]> = {}
  
  for (const symbol of MAJOR_CRYPTOS) {
    try {
      const priceData = await fetchCoinGeckoPrice(symbol)
      
      // Create Redis snapshot
      const snapshot: PriceSnapshot = {
        sym: symbol,
        price: priceData.price,
        ts: Date.now(),
        change: priceData.change,
        changePct: priceData.changePercent,
        state: 'REGULAR', // Crypto is always "open"
        volume: priceData.volume
      }
      
      // Store in Redis
      await setPriceSnapshot(snapshot)
      
      // Store symbol metadata
      await setSymbolMeta({
        sym: symbol,
        name: symbol.replace('-USD', ''),
        type: 'crypto',
        baseCurrency: symbol.split('-')[0],
        quoteCurrency: 'USD'
      })
      
      // Calculate and store volatility score
      const prices = recentPrices[symbol] || []
      prices.push(priceData.price)
      if (prices.length > 30) prices.shift() // Keep last 30 prices
      recentPrices[symbol] = prices
      
      const volScore = calculateVolatilityScore(prices)
      await setVolatilityScore(symbol, volScore)
      
      // Broadcast to live clients
      broadcastPriceTick(symbol, priceData.price, priceData.changePercent)
      
      console.log(`✅ Updated ${symbol}: $${priceData.price} (vol: ${volScore.toFixed(2)})`)
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 500))
      
    } catch (error) {
      console.error(`❌ Failed to update ${symbol}:`, error)
    }
  }
}

/**
 * Update market state in Redis and broadcast changes
 */
async function updateMarketState() {
  const currentState = getEquityMarketState()
  
  // Store in Redis
  await setEquityMarketState(currentState)
  
  // Broadcast state change
  broadcastMarketStateChange(currentState)
  
  console.log(`🕐 Market state: ${currentState}`)
}

/**
 * Main worker function - runs the live price update cycle
 */
export async function runLivePriceUpdater() {
  console.log('🚀 Starting live price updater...')
  
  try {
    // Update market state
    await updateMarketState()
    
    const currentState = getEquityMarketState()
    
    // Always update crypto (24/7)
    await updateCryptoPrices()
    
    // Update stocks based on market hours
    if (isMarketOpen(currentState)) {
      await updateStockPrices()
    } else {
      console.log('📈 Stock market closed, skipping stock updates')
    }
    
    console.log('✅ Live price update cycle completed')
    
  } catch (error) {
    console.error('❌ Live price updater error:', error)
  }
}

/**
 * Start the live price updater with adaptive intervals
 */
export function startLivePriceUpdater() {
  console.log('🔄 Starting live price updater daemon...')
  
  // Initial run
  runLivePriceUpdater()
  
  // Schedule regular updates based on market state
  const scheduleNextUpdate = () => {
    const currentState = getEquityMarketState()
    
    let interval: number
    switch (currentState) {
      case 'REGULAR':
        interval = 5000 // 5 seconds during market hours
        break
      case 'PREMARKET':
      case 'AFTERHOURS':
        interval = 10000 // 10 seconds during extended hours
        break
      case 'CLOSED':
      default:
        interval = 60000 // 1 minute when closed
        break
    }
    
    setTimeout(async () => {
      await runLivePriceUpdater()
      scheduleNextUpdate() // Schedule next run
    }, interval)
  }
  
  scheduleNextUpdate()
  
  // Update market state every 15 seconds
  setInterval(updateMarketState, 15000)
}

// Export for use in API routes or standalone scripts
if (require.main === module) {
  // Run standalone
  startLivePriceUpdater()
}