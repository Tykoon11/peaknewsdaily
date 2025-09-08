/**
 * Real-time Financial Data Fetcher
 * Uses multiple free APIs for stock and crypto data
 */

const { PrismaClient } = require('@prisma/client');
const Redis = require('ioredis');

const prisma = new PrismaClient();
const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

// Free APIs Configuration
const APIS = {
  // Yahoo Finance via RapidAPI (free tier: 500 requests/month)
  yahoo: {
    baseUrl: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY || 'demo',
      'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
    }
  },
  
  // Alpha Vantage (free tier: 25 requests/day)
  alphaVantage: {
    baseUrl: 'https://www.alphavantage.co/query',
    apiKey: process.env.ALPHA_VANTAGE_API_KEY || 'demo'
  },
  
  // Finnhub (free tier: 60 requests/minute)
  finnhub: {
    baseUrl: 'https://finnhub.io/api/v1',
    apiKey: process.env.FINNHUB_API_KEY || 'demo'
  },
  
  // IEX Cloud (free tier: 50,000 requests/month)
  iex: {
    baseUrl: 'https://cloud.iexapis.com/stable',
    apiKey: process.env.IEX_API_KEY || 'demo'
  },
  
  // CoinGecko (free, no API key needed)
  coingecko: {
    baseUrl: 'https://api.coingecko.com/api/v3'
  }
};

// Rate limiting
const rateLimiter = {
  calls: {},
  canMakeCall: (api, limit = 1) => {
    const now = Date.now();
    const key = `${api}_${Math.floor(now / 60000)}`; // Per minute
    
    if (!rateLimiter.calls[key]) {
      rateLimiter.calls[key] = 0;
    }
    
    if (rateLimiter.calls[key] < limit) {
      rateLimiter.calls[key]++;
      return true;
    }
    
    return false;
  }
};

/**
 * Fetch stock data from multiple sources with fallback
 */
async function fetchStockPrice(symbol) {
  const cleanSymbol = symbol.replace('.TO', ''); // Handle Canadian stocks
  
  try {
    // Try Yahoo Finance first (most reliable free option)
    if (rateLimiter.canMakeCall('yahoo', 10)) {
      const response = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        const result = data.chart.result[0];
        
        if (result && result.meta && result.indicators.quote[0]) {
          const meta = result.meta;
          const quote = result.indicators.quote[0];
          const latest = quote.close.length - 1;
          
          return {
            symbol: symbol,
            price: quote.close[latest] || meta.regularMarketPrice,
            previousClose: meta.previousClose || meta.chartPreviousClose,
            change: (quote.close[latest] || meta.regularMarketPrice) - (meta.previousClose || meta.chartPreviousClose),
            volume: quote.volume[latest] || meta.regularMarketVolume,
            marketCap: meta.marketCap,
            pe: meta.trailingPE,
            dividendYield: meta.dividendYield,
            currency: meta.currency || 'USD',
            marketState: meta.marketState,
            timestamp: new Date()
          };
        }
      }
    }
    
    // Fallback to Finnhub
    if (rateLimiter.canMakeCall('finnhub', 50)) {
      const [quoteRes, profileRes] = await Promise.all([
        fetch(`https://finnhub.io/api/v1/quote?symbol=${cleanSymbol}&token=demo`),
        fetch(`https://finnhub.io/api/v1/stock/metric?symbol=${cleanSymbol}&metric=all&token=demo`)
      ]);
      
      if (quoteRes.ok && profileRes.ok) {
        const quote = await quoteRes.json();
        const profile = await profileRes.json();
        
        if (quote.c && quote.c > 0) {
          return {
            symbol: symbol,
            price: quote.c,
            previousClose: quote.pc,
            change: quote.d,
            volume: null,
            marketCap: profile.metric?.marketCapitalization || null,
            pe: profile.metric?.peBasicExclExtraTTM || null,
            dividendYield: profile.metric?.dividendYieldIndicatedAnnual || null,
            currency: 'USD',
            marketState: 'REGULAR',
            timestamp: new Date()
          };
        }
      }
    }
    
    // Fallback to cached/existing data
    console.log(`⚠️  No real-time data available for ${symbol}, using cached data`);
    return null;
    
  } catch (error) {
    console.error(`❌ Error fetching ${symbol}:`, error.message);
    return null;
  }
}

/**
 * Fetch crypto data from CoinGecko
 */
async function fetchCryptoPrice(symbol) {
  try {
    const cryptoId = getCryptoId(symbol);
    if (!cryptoId) return null;
    
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true`);
    
    if (response.ok) {
      const data = await response.json();
      const crypto = data[cryptoId];
      
      if (crypto) {
        return {
          symbol: symbol,
          price: crypto.usd,
          previousClose: crypto.usd / (1 + (crypto.usd_24h_change / 100)),
          change: crypto.usd * (crypto.usd_24h_change / 100),
          volume: crypto.usd_24h_vol,
          marketCap: crypto.usd_market_cap,
          currency: 'USD',
          marketState: 'REGULAR',
          timestamp: new Date()
        };
      }
    }
    
    return null;
  } catch (error) {
    console.error(`❌ Error fetching crypto ${symbol}:`, error.message);
    return null;
  }
}

/**
 * Map crypto symbols to CoinGecko IDs
 */
function getCryptoId(symbol) {
  const cryptoMap = {
    'BTC-USD': 'bitcoin',
    'ETH-USD': 'ethereum',
    'BNB-USD': 'binancecoin',
    'XRP-USD': 'ripple',
    'ADA-USD': 'cardano',
    'SOL-USD': 'solana',
    'AVAX-USD': 'avalanche-2',
    'DOT-USD': 'polkadot',
    'MATIC-USD': 'matic-network',
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
    'LIDO-USD': 'lido-dao',
    'ARB-USD': 'arbitrum',
    'OP-USD': 'optimism',
    'LRC-USD': 'loopring',
    'IMX-USD': 'immutable-x',
    'DOGE-USD': 'dogecoin',
    'SHIB-USD': 'shiba-inu',
    'PEPE-USD': 'pepe',
    'BONK-USD': 'bonk',
    'FLOKI-USD': 'floki',
    'FET-USD': 'fetch-ai',
    'OCEAN-USD': 'ocean-protocol',
    'AGIX-USD': 'singularitynet',
    'RNDR-USD': 'render-token',
    'GRT-USD': 'the-graph',
    'AXS-USD': 'axie-infinity',
    'SAND-USD': 'the-sandbox',
    'MANA-USD': 'decentraland',
    'ENJ-USD': 'enjincoin',
    'CHZ-USD': 'chiliz',
    'XMR-USD': 'monero',
    'ZEC-USD': 'zcash',
    'DASH-USD': 'dash',
    'XTZ-USD': 'tezos',
    'EOS-USD': 'eos',
    'IOTA-USD': 'iota',
    'NEO-USD': 'neo',
    'QTUM-USD': 'qtum',
    'USDC-USD': 'usd-coin',
    'USDT-USD': 'tether',
    'DAI-USD': 'dai',
    'WBTC-USD': 'wrapped-bitcoin',
    'APT-USD': 'aptos',
    'SUI-USD': 'sui',
    'SEI-USD': 'sei-network',
    'WLD-USD': 'worldcoin-wld',
    'INJ-USD': 'injective-protocol'
  };
  
  return cryptoMap[symbol];
}

/**
 * Update all asset prices
 */
async function updateAllPrices() {
  console.log('🔄 Starting real-time price update...');
  
  try {
    // Get all active assets
    const assets = await prisma.asset.findMany({
      where: { isActive: true },
      include: { market: true }
    });
    
    const stockPromises = [];
    const cryptoPromises = [];
    
    for (const asset of assets) {
      if (asset.type === 'stock' || asset.type === 'etf') {
        stockPromises.push(
          fetchStockPrice(asset.symbol).then(data => ({ asset, data }))
        );
      } else if (asset.type === 'crypto') {
        cryptoPromises.push(
          fetchCryptoPrice(asset.symbol).then(data => ({ asset, data }))
        );
      }
      
      // Process in batches to avoid overwhelming APIs
      if (stockPromises.length >= 10) {
        await processBatch(stockPromises.splice(0, 10));
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1s delay
      }
    }
    
    // Process remaining batches
    if (stockPromises.length > 0) {
      await processBatch(stockPromises);
    }
    
    if (cryptoPromises.length > 0) {
      await processBatch(cryptoPromises);
    }
    
    console.log('✅ Price update completed');
    
  } catch (error) {
    console.error('❌ Price update failed:', error);
  }
}

async function processBatch(promises) {
  const results = await Promise.allSettled(promises);
  
  for (const result of results) {
    if (result.status === 'fulfilled') {
      const { asset, data } = result.value;
      
      if (data) {
        await updateAssetPrice(asset, data);
      }
    }
  }
}

async function updateAssetPrice(asset, priceData) {
  try {
    // Calculate percentage change
    const changePercent = priceData.previousClose ? 
      (priceData.change / priceData.previousClose) * 100 : 0;
    
    // Update latest quote or create new one
    const existingQuote = await prisma.quote.findFirst({
      where: { assetId: asset.id },
      orderBy: { timestamp: 'desc' }
    });

    if (existingQuote) {
      // Update existing quote
      await prisma.quote.update({
        where: { id: existingQuote.id },
        data: {
          price: priceData.price,
          previousClose: priceData.previousClose,
          change: priceData.change,
          changePercent: changePercent,
          volume: priceData.volume ? BigInt(Math.floor(priceData.volume)) : null,
          marketCap: priceData.marketCap ? BigInt(Math.floor(priceData.marketCap)) : null,
          pe: priceData.pe,
          dividendYield: priceData.dividendYield,
          timestamp: priceData.timestamp
        }
      });
    } else {
      // Create new quote
      await prisma.quote.create({
        data: {
          assetId: asset.id,
          price: priceData.price,
          previousClose: priceData.previousClose,
          change: priceData.change,
          changePercent: changePercent,
          volume: priceData.volume ? BigInt(Math.floor(priceData.volume)) : null,
          marketCap: priceData.marketCap ? BigInt(Math.floor(priceData.marketCap)) : null,
          pe: priceData.pe,
          dividendYield: priceData.dividendYield,
          timestamp: priceData.timestamp
        }
      });
    }
    
    // Cache in Redis for fast access
    const cacheData = {
      symbol: asset.symbol,
      price: priceData.price,
      change: priceData.change,
      changePercent: changePercent,
      volume: priceData.volume,
      marketCap: priceData.marketCap,
      timestamp: priceData.timestamp.getTime(),
      marketState: priceData.marketState
    };
    
    await redis.setex(`price:${asset.symbol}`, 300, JSON.stringify(cacheData)); // 5 min cache
    
    console.log(`✅ Updated ${asset.symbol}: $${priceData.price.toFixed(2)} (${changePercent.toFixed(2)}%)`);
    
  } catch (error) {
    console.error(`❌ Error updating ${asset.symbol}:`, error.message);
  }
}

/**
 * Get cached price or fetch fresh data
 */
async function getPrice(symbol) {
  try {
    // Try cache first
    const cached = await redis.get(`price:${symbol}`);
    if (cached) {
      return JSON.parse(cached);
    }
    
    // Fetch fresh data
    const asset = await prisma.asset.findUnique({
      where: { symbol },
      include: { market: true }
    });
    
    if (!asset) return null;
    
    let priceData;
    if (asset.type === 'stock' || asset.type === 'etf') {
      priceData = await fetchStockPrice(symbol);
    } else if (asset.type === 'crypto') {
      priceData = await fetchCryptoPrice(symbol);
    }
    
    if (priceData) {
      await updateAssetPrice(asset, priceData);
      return priceData;
    }
    
    return null;
    
  } catch (error) {
    console.error(`❌ Error getting price for ${symbol}:`, error.message);
    return null;
  }
}

module.exports = {
  updateAllPrices,
  getPrice,
  fetchStockPrice,
  fetchCryptoPrice
};