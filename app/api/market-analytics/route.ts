import { NextRequest, NextResponse } from 'next/server'

interface CoinGeckoGlobalData {
  data: {
    active_cryptocurrencies: number
    markets: number
    total_market_cap: { [key: string]: number }
    total_volume: { [key: string]: number }
    market_cap_percentage: { [key: string]: number }
    market_cap_change_percentage_24h_usd: number
    updated_at: number
  }
}

interface CoinGeckoCoinData {
  id: string
  symbol: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  total_volume: number
  price_change_percentage_24h: number
  circulating_supply: number
  total_supply: number
  max_supply: number
}

export async function GET(request: NextRequest) {
  try {
    // Use timestamp to prevent caching
    const timestamp = Date.now()
    
    // Fetch global market data and top cryptocurrencies in parallel
    const [globalResponse, coinsResponse] = await Promise.allSettled([
      fetch(`https://api.coingecko.com/api/v3/global?t=${timestamp}`, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'PeakNewsDaily/1.0'
        }
      }),
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&t=${timestamp}`, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'PeakNewsDaily/1.0'
        }
      })
    ])

    let marketAnalytics = {
      totalMarketCap: 0,
      totalVolume: 0,
      activeCryptocurrencies: 0,
      markets: 0,
      marketCapChange24h: 0,
      gainers24h: 0,
      losers24h: 0,
      dominance: {
        bitcoin: 0,
        ethereum: 0
      },
      topPerformers: [] as any[],
      worstPerformers: [] as any[],
      lastUpdated: new Date().toISOString(),
      source: 'coingecko',
      status: 'success'
    }

    // Process global data
    if (globalResponse.status === 'fulfilled' && globalResponse.value.ok) {
      const globalData: CoinGeckoGlobalData = await globalResponse.value.json()
      
      marketAnalytics.totalMarketCap = globalData.data.total_market_cap?.usd || 0
      marketAnalytics.totalVolume = globalData.data.total_volume?.usd || 0
      marketAnalytics.activeCryptocurrencies = globalData.data.active_cryptocurrencies || 0
      marketAnalytics.markets = globalData.data.markets || 0
      marketAnalytics.marketCapChange24h = globalData.data.market_cap_change_percentage_24h_usd || 0
      marketAnalytics.dominance.bitcoin = globalData.data.market_cap_percentage?.btc || 0
      marketAnalytics.dominance.ethereum = globalData.data.market_cap_percentage?.eth || 0
    } else {
      console.warn('Global data fetch failed, using fallback calculations')
      marketAnalytics.status = 'partial'
    }

    // Process coins data
    if (coinsResponse.status === 'fulfilled' && coinsResponse.value.ok) {
      const coinsData: CoinGeckoCoinData[] = await coinsResponse.value.json()
      
      // Count gainers and losers
      const gainers = coinsData.filter(coin => coin.price_change_percentage_24h > 0)
      const losers = coinsData.filter(coin => coin.price_change_percentage_24h < 0)
      
      marketAnalytics.gainers24h = gainers.length
      marketAnalytics.losers24h = losers.length
      
      // Get top and worst performers
      const sortedByPerformance = [...coinsData].sort((a, b) => 
        (b.price_change_percentage_24h || 0) - (a.price_change_percentage_24h || 0)
      )
      
      marketAnalytics.topPerformers = sortedByPerformance.slice(0, 5).map(coin => ({
        symbol: coin.symbol.toUpperCase(),
        name: coin.id.replace(/-/g, ' ').replace(/\w\S*/g, (txt) => 
          txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        ),
        price: coin.current_price,
        change24h: coin.price_change_percentage_24h,
        marketCap: coin.market_cap,
        volume: coin.total_volume
      }))
      
      marketAnalytics.worstPerformers = sortedByPerformance.slice(-5).reverse().map(coin => ({
        symbol: coin.symbol.toUpperCase(),
        name: coin.id.replace(/-/g, ' ').replace(/\w\S*/g, (txt) => 
          txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        ),
        price: coin.current_price,
        change24h: coin.price_change_percentage_24h,
        marketCap: coin.market_cap,
        volume: coin.total_volume
      }))
      
      // If we don't have global data, calculate from coins data
      if (marketAnalytics.totalMarketCap === 0) {
        marketAnalytics.totalMarketCap = coinsData.reduce((sum, coin) => sum + (coin.market_cap || 0), 0)
        marketAnalytics.totalVolume = coinsData.reduce((sum, coin) => sum + (coin.total_volume || 0), 0)
        marketAnalytics.activeCryptocurrencies = coinsData.length
      }
    } else {
      console.warn('Coins data fetch failed')
      marketAnalytics.status = 'error'
    }

    // Add additional calculated metrics
    const analytics = {
      ...marketAnalytics,
      metrics: {
        volumeToMarketCapRatio: marketAnalytics.totalMarketCap > 0 
          ? (marketAnalytics.totalVolume / marketAnalytics.totalMarketCap * 100).toFixed(2)
          : "0",
        averagePriceChange: marketAnalytics.gainers24h + marketAnalytics.losers24h > 0
          ? ((marketAnalytics.gainers24h - marketAnalytics.losers24h) / (marketAnalytics.gainers24h + marketAnalytics.losers24h) * 100).toFixed(2)
          : "0",
        marketSentiment: marketAnalytics.gainers24h > marketAnalytics.losers24h ? "bullish" : 
                        marketAnalytics.gainers24h < marketAnalytics.losers24h ? "bearish" : "neutral"
      },
      formatting: {
        totalMarketCapFormatted: formatLargeNumber(marketAnalytics.totalMarketCap),
        totalVolumeFormatted: formatLargeNumber(marketAnalytics.totalVolume),
        marketCapChange24hFormatted: `${marketAnalytics.marketCapChange24h > 0 ? '+' : ''}${marketAnalytics.marketCapChange24h.toFixed(2)}%`
      }
    }

    return NextResponse.json(analytics)
    
  } catch (error) {
    console.error('Market analytics API error:', error)
    
    // Return fallback data to prevent UI breaking
    return NextResponse.json({
      totalMarketCap: 0,
      totalVolume: 0,
      activeCryptocurrencies: 0,
      markets: 0,
      marketCapChange24h: 0,
      gainers24h: 0,
      losers24h: 0,
      dominance: { bitcoin: 0, ethereum: 0 },
      topPerformers: [],
      worstPerformers: [],
      lastUpdated: new Date().toISOString(),
      source: 'fallback',
      status: 'error',
      error: 'Failed to fetch market data',
      metrics: {
        volumeToMarketCapRatio: "0",
        averagePriceChange: "0",
        marketSentiment: "neutral"
      },
      formatting: {
        totalMarketCapFormatted: "$0B",
        totalVolumeFormatted: "$0B",
        marketCapChange24hFormatted: "0.00%"
      }
    }, { status: 200 }) // Still return 200 to prevent UI breaking
  }
}

function formatLargeNumber(num: number): string {
  if (num >= 1000000000000) {
    return `$${(num / 1000000000000).toFixed(2)}T`
  } else if (num >= 1000000000) {
    return `$${(num / 1000000000).toFixed(0)}B`
  } else if (num >= 1000000) {
    return `$${(num / 1000000).toFixed(0)}M`
  } else if (num >= 1000) {
    return `$${(num / 1000).toFixed(0)}K`
  }
  return `$${num.toLocaleString()}`
}