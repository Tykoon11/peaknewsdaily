import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
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

async function fetchRealCryptoPrices(): Promise<Record<string, any>> {
  try {
    // Get comprehensive crypto data from CoinGecko
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,ripple,cardano,solana,polkadot,avalanche-2,polygon,chainlink,litecoin,uniswap,cosmos,internet-computer,near,algorand,vechain,fantom,hedera-hashgraph,stellar,aave,maker,curve-dao-token,compound-governance-token,sushi,yearn-finance,balancer,havven,1inch,arbitrum,optimism,loopring,immutable-x,lido-dao,floki,fetch-ai,ocean-protocol,singularitynet,render-token,the-graph,axie-infinity,the-sandbox,decentraland,enjincoin&vs_currencies=usd&include_24hr_change=true', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      }
    })
    
    if (!response.ok) throw new Error(`CoinGecko failed: ${response.status}`)
    
    const data = await response.json()
    
    const cryptoMap: Record<string, string> = {
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
      'ICP-USD': 'internet-computer',
      'NEAR-USD': 'near',
      'ALGO-USD': 'algorand',
      'VET-USD': 'vechain',
      'FTM-USD': 'fantom',
      'HBAR-USD': 'hedera-hashgraph',
      'XLM-USD': 'stellar',
      'AAVE-USD': 'aave',
      'MKR-USD': 'maker',
      'CRV-USD': 'curve-dao-token',
      'COMP-USD': 'compound-governance-token',
      'SUSHI-USD': 'sushi',
      'YFI-USD': 'yearn-finance',
      'BAL-USD': 'balancer',
      'SNX-USD': 'havven',
      '1INCH-USD': '1inch',
      'ARB-USD': 'arbitrum',
      'OP-USD': 'optimism',
      'LRC-USD': 'loopring',
      'IMX-USD': 'immutable-x',
      'LIDO-USD': 'lido-dao',
      'FLOKI-USD': 'floki',
      'FET-USD': 'fetch-ai',
      'OCEAN-USD': 'ocean-protocol',
      'AGIX-USD': 'singularitynet',
      'RNDR-USD': 'render-token',
      'GRT-USD': 'the-graph',
      'AXS-USD': 'axie-infinity',
      'SAND-USD': 'the-sandbox',
      'MANA-USD': 'decentraland',
      'ENJ-USD': 'enjincoin'
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
    
    console.log(`🚀 Crypto: ${Object.keys(prices).length} real prices from CoinGecko`)
    return prices
    
  } catch (error) {
    console.error('❌ CoinGecko crypto fetch failed:', error)
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