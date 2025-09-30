import { NextRequest, NextResponse } from 'next/server'

// Mapping from our symbol format to Binance symbol format
const BINANCE_SYMBOL_MAP: { [key: string]: string } = {
  'BTC-USD': 'BTCUSDT',
  'ETH-USD': 'ETHUSDT',
  'BNB-USD': 'BNBUSDT',
  'XRP-USD': 'XRPUSDT',
  'ADA-USD': 'ADAUSDT',
  'SOL-USD': 'SOLUSDT',
  'DOT-USD': 'DOTUSDT',
  'AVAX-USD': 'AVAXUSDT',
  'MATIC-USD': 'MATICUSDT',
  'LINK-USD': 'LINKUSDT',
  'LTC-USD': 'LTCUSDT',
  'UNI-USD': 'UNIUSDT',
  'ATOM-USD': 'ATOMUSDT',
  'ICP-USD': 'ICPUSDT',
  'NEAR-USD': 'NEARUSDT',
  'ALGO-USD': 'ALGOUSDT',
  'VET-USD': 'VETUSDT',
  'FTM-USD': 'FTMUSDT',
  'HBAR-USD': 'HBARUSDT',
  'XLM-USD': 'XLMUSDT',
  'AAVE-USD': 'AAVEUSDT',
  'MKR-USD': 'MKRUSDT',
  'CRV-USD': 'CRVUSDT',
  'COMP-USD': 'COMPUSDT',
  'SUSHI-USD': 'SUSHIUSDT',
  'YFI-USD': 'YFIUSDT',
  'BAL-USD': 'BALUSDT',
  'SNX-USD': 'SNXUSDT',
  '1INCH-USD': '1INCHUSDT',
  'ARB-USD': 'ARBUSDT',
  'OP-USD': 'OPUSDT',
  'LRC-USD': 'LRCUSDT',
  'IMX-USD': 'IMXUSDT',
  'DOGE-USD': 'DOGEUSDT',
  'SHIB-USD': 'SHIBUSDT',
  'PEPE-USD': 'PEPEUSDT',
  'BONK-USD': 'BONKUSDT',
  'FLOKI-USD': 'FLOKIUSDT',
  'FET-USD': 'FETUSDT',
  'OCEAN-USD': 'OCEANUSDT',
  'AGIX-USD': 'AGIXUSDT',
  'RNDR-USD': 'RNDRUSDT',
  'GRT-USD': 'GRTUSDT',
  'AXS-USD': 'AXSUSDT',
  'SAND-USD': 'SANDUSDT',
  'MANA-USD': 'MANAUSDT',
  'ENJ-USD': 'ENJUSDT',
  'CHZ-USD': 'CHZUSDT',
  'XMR-USD': 'XMRUSDT',
  'ZEC-USD': 'ZECUSDT',
  'DASH-USD': 'DASHUSDT',
  'XTZ-USD': 'XTZUSDT',
  'EOS-USD': 'EOSUSDT',
  'IOTA-USD': 'IOTAUSDT',
  'NEO-USD': 'NEOUSDT',
  'QTUM-USD': 'QTUMUSDT',
  'USDC-USD': 'USDCUSDT',
  'USDT-USD': 'USDCUSDT', // USDT/USDT doesn't exist, use USDC as proxy
  'DAI-USD': 'DAIUSDT',
  'WBTC-USD': 'WBTCUSDT',
  'APT-USD': 'APTUSDT',
  'SUI-USD': 'SUIUSDT',
  'SEI-USD': 'SEIUSDT',
  'WLD-USD': 'WLDUSDT',
  'INJ-USD': 'INJUSDT',
  'LIDO-USD': 'LDOUSDT'
}

// CoinGecko fallback mapping for symbols not available on Binance
const COINGECKO_MAP: { [key: string]: string } = {
  'LIDO-USD': 'lido-dao',
  'OCEAN-USD': 'ocean-protocol',
  'AGIX-USD': 'singularitynet',
  'BONK-USD': 'bonk',
  'PEPE-USD': 'pepe',
  'FLOKI-USD': 'floki',
  'IOTA-USD': 'iota',
  'XMR-USD': 'monero',
  'ZEC-USD': 'zcash',
  'DASH-USD': 'dash'
}

async function fetchAllBinancePrices(): Promise<Record<string, any>> {
  try {
    // Get all 24hr ticker data from Binance in one request
    const response = await fetch('https://api.binance.com/api/v3/ticker/24hr', {
      cache: 'no-cache',
      headers: { 'Cache-Control': 'no-cache' }
    })

    if (!response.ok) {
      throw new Error(`Binance API error: ${response.status}`)
    }

    const allTickers = await response.json()
    const prices: Record<string, any> = {}

    // Convert Binance data to our format
    for (const [ourSymbol, binanceSymbol] of Object.entries(BINANCE_SYMBOL_MAP)) {
      const ticker = allTickers.find((t: any) => t.symbol === binanceSymbol)
      if (ticker) {
        prices[ourSymbol] = {
          symbol: ourSymbol,
          price: parseFloat(ticker.lastPrice),
          changePct: parseFloat(ticker.priceChangePercent),
          source: 'binance',
          timestamp: new Date().toISOString()
        }
      }
    }

    console.log(`🚀 Fetched ${Object.keys(prices).length} prices from Binance`)
    return prices
  } catch (error) {
    console.error('Binance batch fetch failed:', error)
    return {}
  }
}

async function fetchCoinGeckoFallbacks(missingSymbols: string[]): Promise<Record<string, any>> {
  const prices: Record<string, any> = {}

  for (const symbol of missingSymbols) {
    if (COINGECKO_MAP[symbol]) {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${COINGECKO_MAP[symbol]}&vs_currencies=usd&include_24hr_change=true`,
          { cache: 'no-cache' }
        )

        if (response.ok) {
          const data = await response.json()
          const coinData = data[COINGECKO_MAP[symbol]]
          if (coinData) {
            prices[symbol] = {
              symbol,
              price: coinData.usd,
              changePct: coinData.usd_24h_change || 0,
              source: 'coingecko',
              timestamp: new Date().toISOString()
            }
          }
        }
      } catch (error) {
        console.error(`CoinGecko failed for ${symbol}:`, error)
      }
    }
  }

  return prices
}

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const symbols = searchParams.get('symbols')?.split(',').map(s => s.trim()) || []
  
  if (symbols.length === 0) {
    return NextResponse.json(
      { error: 'Missing symbols parameter. Use ?symbols=BTC-USD,ETH-USD,ADA-USD' },
      { status: 400 }
    )
  }

  try {
    console.log(`🔍 Fetching prices for ${symbols.length} symbols: ${symbols.slice(0, 5).join(', ')}${symbols.length > 5 ? '...' : ''}`)

    // First, try to get as many prices as possible from Binance batch API
    const binancePrices = await fetchAllBinancePrices()
    
    // Find which symbols we still need
    const missingSymbols = symbols.filter(symbol => !binancePrices[symbol])
    
    // Get fallback prices from CoinGecko for missing symbols
    let fallbackPrices = {}
    if (missingSymbols.length > 0) {
      console.log(`🔄 Fetching ${missingSymbols.length} missing symbols from CoinGecko fallback`)
      fallbackPrices = await fetchCoinGeckoFallbacks(missingSymbols)
    }

    // Combine all prices
    const allPrices = { ...binancePrices, ...fallbackPrices }

    // Filter to only requested symbols
    const prices: Record<string, any> = {}
    let successCount = 0

    for (const symbol of symbols) {
      if (allPrices[symbol]) {
        prices[symbol] = allPrices[symbol]
        successCount++
      } else {
        // Provide a fallback for completely missing symbols
        prices[symbol] = {
          symbol,
          price: 0,
          changePct: 0,
          source: 'unavailable',
          timestamp: new Date().toISOString()
        }
      }
    }

    console.log(`✅ Successfully fetched ${successCount}/${symbols.length} prices`)

    return NextResponse.json({
      prices,
      count: successCount,
      total: symbols.length,
      timestamp: new Date().toISOString(),
      source: 'realtime-api-batch',
      note: 'Fetched from Binance batch API with CoinGecko fallbacks'
    })
    
  } catch (error) {
    console.error('Real-time prices API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch real-time prices', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}