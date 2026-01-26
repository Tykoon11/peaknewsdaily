import { NextRequest, NextResponse } from 'next/server'

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  try {
    // Safely handle URL parsing during build
    let searchParams: URLSearchParams
    try {
      const url = new URL(request.url)
      searchParams = url.searchParams
    } catch (e) {
      // Fallback during build when request.url might not be available
      searchParams = new URLSearchParams()
    }
    
    const symbolsParam = searchParams.get('symbols')
    
    if (!symbolsParam) {
      return NextResponse.json({ error: 'symbols parameter required' }, { status: 400 })
    }

    const symbols = symbolsParam.split(',').map(s => s.trim())
    
    // Get all real data from multiple sources
    const [cryptoPrices, stockPrices] = await Promise.all([
      fetchRealCryptoPrices(),
      fetchRealStockPrices()
    ])
    
    // Combine all real prices
    const allPrices = { ...cryptoPrices, ...stockPrices }
    
    // Build response with only requested symbols
    const prices: Record<string, any> = {}
    let successCount = 0
    
    for (const symbol of symbols) {
      if (allPrices[symbol]) {
        prices[symbol] = allPrices[symbol]
        successCount++
      }
    }
    
    console.log(`✅ REAL DATA: ${successCount}/${symbols.length} live prices fetched`)
    
    return NextResponse.json({
      prices,
      count: successCount,
      total: symbols.length,
      timestamp: new Date().toISOString(),
      source: 'multi-api-live',
      note: 'Real live data from CoinGecko + Alpha Vantage'
    })
    
  } catch (error) {
    console.error('❌ Real-time prices API failed:', error)
    return NextResponse.json({ error: 'Failed to fetch prices' }, { status: 500 })
  }
}

// Cache for crypto prices to reduce API calls
let cryptoPriceCache: { data: Record<string, any>, timestamp: number } | null = null
const CACHE_DURATION = 10 * 1000 // 10 seconds cache (reduced for testing)

async function fetchRealCryptoPrices(): Promise<Record<string, any>> {
  try {
    // Check cache first
    const now = Date.now()
    if (cryptoPriceCache && (now - cryptoPriceCache.timestamp) < CACHE_DURATION) {
      console.log('🎯 Using cached crypto prices')
      return cryptoPriceCache.data
    }

    // Get comprehensive crypto data from CoinGecko - only active coins with real volume
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,ripple,cardano,solana,polkadot,avalanche-2,polygon,chainlink,litecoin,uniswap,cosmos,algorand,dogecoin,shiba-inu,pepe,bonk,floki,optimism,arbitrum,loopring,immutable-x,internet-computer,near,vechain,fantom,hedera-hashgraph,stellar,aave,maker,curve-dao-token,compound-coin,sushiswap,yearn-finance,balancer,synthetix-network-token,1inch,lido-dao,fetch-ai,ocean-protocol,singularitynet,render-token,the-graph,axie-infinity,the-sandbox,decentraland,enjincoin,chiliz,monero,zcash,dash,tezos,eos,iota,neo,qtum,usd-coin,tether,dai,wrapped-bitcoin,aptos,sui,sei-network,worldcoin,injective-protocol&vs_currencies=usd&include_24hr_change=true', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout(10000)
    })
    
    if (!response.ok) {
      // Handle rate limiting gracefully
      if (response.status === 429) {
        console.warn('⚠️ CoinGecko rate limited, using cached data if available')
        if (cryptoPriceCache) {
          return cryptoPriceCache.data
        }
        // Return empty object instead of throwing
        return {}
      }
      throw new Error(`CoinGecko failed: ${response.status}`)
    }
    
    const data = await response.json()
    
    const cryptoMap: Record<string, string> = {
      // Major cryptocurrencies with guaranteed live data
      'BTC-USD': 'bitcoin',
      'ETH-USD': 'ethereum', 
      'BNB-USD': 'binancecoin',
      'XRP-USD': 'ripple',
      'ADA-USD': 'cardano',
      'SOL-USD': 'solana',
      'DOT-USD': 'polkadot',
      'AVAX-USD': 'avalanche-2',
      'MATIC-USD': 'polygon',
      'LINK-USD': 'chainlink',
      'LTC-USD': 'litecoin',
      'UNI-USD': 'uniswap',
      'ATOM-USD': 'cosmos',
      'ALGO-USD': 'algorand',
      'DOGE-USD': 'dogecoin',
      'SHIB-USD': 'shiba-inu',
      'PEPE-USD': 'pepe',
      'BONK-USD': 'bonk',
      'FLOKI-USD': 'floki',
      
      // Layer 2 & Scaling
      'OP-USD': 'optimism',
      'ARB-USD': 'arbitrum',
      'LRC-USD': 'loopring',
      'IMX-USD': 'immutable-x',
      
      // Enterprise & Utility
      'ICP-USD': 'internet-computer',
      'NEAR-USD': 'near',
      'VET-USD': 'vechain',
      'FTM-USD': 'fantom',
      'HBAR-USD': 'hedera-hashgraph',
      'XLM-USD': 'stellar',
      
      // DeFi Tokens
      'AAVE-USD': 'aave',
      'MKR-USD': 'maker',
      'CRV-USD': 'curve-dao-token',
      'COMP-USD': 'compound-coin',
      'SUSHI-USD': 'sushiswap',
      'YFI-USD': 'yearn-finance',
      'BAL-USD': 'balancer',
      'SNX-USD': 'synthetix-network-token',
      '1INCH-USD': '1inch',
      'LIDO-USD': 'lido-dao',
      
      // AI & Tech Tokens
      'FET-USD': 'fetch-ai',
      'OCEAN-USD': 'ocean-protocol',
      'AGIX-USD': 'singularitynet',
      'RNDR-USD': 'render-token',
      'GRT-USD': 'the-graph',
      
      // Gaming & Metaverse
      'AXS-USD': 'axie-infinity',
      'SAND-USD': 'the-sandbox',
      'MANA-USD': 'decentraland',
      'ENJ-USD': 'enjincoin',
      'CHZ-USD': 'chiliz',
      
      // Privacy Coins
      'XMR-USD': 'monero',
      'ZEC-USD': 'zcash',
      'DASH-USD': 'dash',
      
      // Traditional Chains
      'XTZ-USD': 'tezos',
      'EOS-USD': 'eos',
      'IOTA-USD': 'iota',
      'NEO-USD': 'neo',
      'QTUM-USD': 'qtum',
      
      // Stablecoins & Wrapped Assets
      'USDC-USD': 'usd-coin',
      'USDT-USD': 'tether',
      'DAI-USD': 'dai',
      'WBTC-USD': 'wrapped-bitcoin',
      
      // New & Trending
      'APT-USD': 'aptos',
      'SUI-USD': 'sui',
      'SEI-USD': 'sei-network',
      'WLD-USD': 'worldcoin',
      'INJ-USD': 'injective-protocol'
    }
    
    const prices: Record<string, any> = {}
    
    for (const [symbol, coinId] of Object.entries(cryptoMap)) {
      const coinData = data[coinId]
      if (coinData && coinData.usd) {
        prices[symbol] = {
          symbol,
          price: coinData.usd,
          changePct: coinData.usd_24h_change || 0,
          source: 'coingecko-live',
          timestamp: new Date().toISOString()
        }
      }
    }
    
    // Cache successful response
    cryptoPriceCache = {
      data: prices,
      timestamp: now
    }
    
    console.log(`🚀 Crypto: ${Object.keys(prices).length} real prices from CoinGecko`)
    return prices
    
  } catch (error) {
    console.error('❌ CoinGecko crypto fetch failed:', error)
    // Return cached data if available during errors
    if (cryptoPriceCache) {
      console.log('📦 Using cached crypto data due to API error')
      return cryptoPriceCache.data
    }
    return {}
  }
}

async function fetchRealStockPrices(): Promise<Record<string, any>> {
  try {
    // Use multiple free stock APIs
    const symbols = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'META', 'NVDA', 'NFLX']
    const prices: Record<string, any> = {}
    
    // Try Yahoo Finance API (free)
    for (const symbol of symbols) {
      try {
        const response = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`, {
          headers: { 'User-Agent': 'Mozilla/5.0' }
        })
        
        if (response.ok) {
          const data = await response.json()
          const result = data.chart?.result?.[0]
          if (result) {
            const meta = result.meta
            const currentPrice = meta.regularMarketPrice || meta.previousClose
            const previousClose = meta.previousClose
            const change = currentPrice - previousClose
            const changePct = (change / previousClose) * 100
            
            prices[symbol] = {
              symbol,
              price: currentPrice,
              changePct: changePct,
              source: 'yahoo-live',
              timestamp: new Date().toISOString()
            }
          }
        }
      } catch (error) {
        console.error(`Yahoo failed for ${symbol}:`, error)
      }
    }
    
    console.log(`📈 Stocks: ${Object.keys(prices).length} real prices from Yahoo Finance`)
    return prices
    
  } catch (error) {
    console.error('❌ Stock fetch failed:', error)
    return {}
  }
}