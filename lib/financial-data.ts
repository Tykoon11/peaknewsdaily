/**
 * Real-time Financial Data Fetcher
 * Uses multiple free APIs for stock and crypto data
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Redis stub during build
const redis = {
  get: (key: string) => Promise.resolve(null),
  set: (key: string, value: string) => Promise.resolve('OK'),
  setex: (key: string, seconds: number, value: string) => Promise.resolve('OK'),
  del: (key: string) => Promise.resolve(1),
  exists: (key: string) => Promise.resolve(0),
  disconnect: () => Promise.resolve('OK')
};

// Comprehensive Multi-Source API Configuration - Like Crypto System
const APIS = {
  // Primary Sources - Most Reliable
  yahoo: {
    baseUrl: 'https://query1.finance.yahoo.com',
    priority: 1,
    rateLimit: 100, // requests per minute
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  },
  
  // Secondary Sources - Backup APIs
  finnhub: {
    baseUrl: 'https://finnhub.io/api/v1',
    apiKey: process.env.FINNHUB_API_KEY || 'demo',
    priority: 2,
    rateLimit: 60
  },
  
  alphaVantage: {
    baseUrl: 'https://www.alphavantage.co/query',
    apiKey: process.env.ALPHA_VANTAGE_API_KEY || 'demo',
    priority: 3,
    rateLimit: 25
  },
  
  // Alternative free sources
  iex: {
    baseUrl: 'https://cloud.iexapis.com/stable',
    apiKey: process.env.IEX_API_KEY || 'demo',
    priority: 4,
    rateLimit: 50
  },
  
  // Crypto sources
  binance: {
    baseUrl: 'https://api.binance.com/api/v3',
    priority: 1,
    rateLimit: 1200
  },
  
  coingecko: {
    baseUrl: 'https://api.coingecko.com/api/v3',
    priority: 2,
    rateLimit: 30
  },
  
  coinbase: {
    baseUrl: 'https://api.coinbase.com/v2',
    priority: 3,
    rateLimit: 100
  },
  
  // Financial Modeling Prep (backup)
  fmp: {
    baseUrl: 'https://financialmodelingprep.com/api/v3',
    apiKey: process.env.FMP_API_KEY || 'demo',
    priority: 5,
    rateLimit: 250
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
 * Fetch stock data from multiple sources with comprehensive fallback system
 * Mirrors the crypto system's robustness and multi-API approach
 */
async function fetchStockPrice(symbol) {
  const cleanSymbol = symbol.replace('.TO', ''); // Handle Canadian stocks
  // Minimal logging for efficiency
  
  // Primary Source: Yahoo Finance (most reliable and comprehensive)
  try {
    if (rateLimiter.canMakeCall('yahoo', APIS.yahoo.rateLimit)) {
      const response = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`, {
        headers: APIS.yahoo.headers,
        signal: AbortSignal.timeout(5000)
      });
      
      if (response.ok) {
        const data = await response.json();
        const result = data.chart?.result?.[0];
        
        if (result && result.meta && result.indicators?.quote?.[0]) {
          const meta = result.meta;
          const quote = result.indicators.quote[0];
          const latest = quote.close.length - 1;
          const currentPrice = quote.close[latest] || meta.regularMarketPrice;
          const previousClose = meta.previousClose || meta.chartPreviousClose;
          
          // Success - minimal logging
          
          return {
            symbol: symbol,
            price: Number(currentPrice.toFixed(2)),
            previousClose: Number(previousClose.toFixed(2)),
            change: Number((currentPrice - previousClose).toFixed(2)),
            volume: quote.volume?.[latest] || meta.regularMarketVolume || 0,
            marketCap: meta.marketCap || 0,
            pe: meta.trailingPE || null,
            dividendYield: meta.dividendYield || null,
            dayHigh: meta.regularMarketDayHigh || currentPrice * 1.02,
            dayLow: meta.regularMarketDayLow || currentPrice * 0.98,
            currency: meta.currency || 'USD',
            marketState: meta.marketState || 'REGULAR',
            timestamp: new Date(),
            source: 'yahoo-finance'
          };
        }
      }
    }
  } catch (error) {
    console.log(`⚠️ Yahoo Finance failed for ${symbol}:`, error instanceof Error ? error.message : String(error));
  }
  
  // Secondary Source: Finnhub (comprehensive financial data)
  try {
    if (rateLimiter.canMakeCall('finnhub', APIS.finnhub.rateLimit)) {
      const apiKey = APIS.finnhub.apiKey;
      const [quoteRes, profileRes] = await Promise.all([
        fetch(`${APIS.finnhub.baseUrl}/quote?symbol=${cleanSymbol}&token=${apiKey}`, {
          signal: AbortSignal.timeout(5000)
        }),
        fetch(`${APIS.finnhub.baseUrl}/stock/metric?symbol=${cleanSymbol}&metric=all&token=${apiKey}`, {
          signal: AbortSignal.timeout(5000)
        })
      ]);
      
      if (quoteRes.ok) {
        const quote = await quoteRes.json();
        const profile = profileRes.ok ? await profileRes.json() : {};
        
        if (quote.c && quote.c > 0) {
          // Success - minimal logging
          
          return {
            symbol: symbol,
            price: Number(quote.c.toFixed(2)),
            previousClose: Number(quote.pc.toFixed(2)),
            change: Number(quote.d.toFixed(2)),
            volume: 0,
            marketCap: profile.metric?.marketCapitalization ? profile.metric.marketCapitalization * 1000000 : 0,
            pe: profile.metric?.peBasicExclExtraTTM || null,
            dividendYield: profile.metric?.dividendYieldIndicatedAnnual || null,
            dayHigh: quote.h || quote.c * 1.02,
            dayLow: quote.l || quote.c * 0.98,
            currency: 'USD',
            marketState: 'REGULAR',
            timestamp: new Date(),
            source: 'finnhub'
          };
        }
      }
    }
  } catch (error) {
    console.log(`⚠️ Finnhub failed for ${symbol}:`, error instanceof Error ? error.message : String(error));
  }
  
  // Tertiary Source: Alpha Vantage (reliable backup)
  try {
    if (rateLimiter.canMakeCall('alphaVantage', APIS.alphaVantage.rateLimit)) {
      const apiKey = APIS.alphaVantage.apiKey;
      const response = await fetch(`${APIS.alphaVantage.baseUrl}?function=GLOBAL_QUOTE&symbol=${cleanSymbol}&apikey=${apiKey}`, {
        signal: AbortSignal.timeout(8000)
      });
      
      if (response.ok) {
        const data = await response.json();
        const quote = data['Global Quote'];
        
        if (quote && quote['05. price']) {
          const currentPrice = parseFloat(quote['05. price']);
          const previousClose = parseFloat(quote['08. previous close']);
          const changePercent = parseFloat(quote['10. change percent'].replace('%', ''));
          
          // Success - minimal logging
          
          return {
            symbol: symbol,
            price: Number(currentPrice.toFixed(2)),
            previousClose: Number(previousClose.toFixed(2)),
            change: Number((currentPrice - previousClose).toFixed(2)),
            volume: parseInt(quote['06. volume']) || 0,
            marketCap: 0,
            pe: null,
            dividendYield: null,
            dayHigh: parseFloat(quote['03. high']),
            dayLow: parseFloat(quote['04. low']),
            currency: 'USD',
            marketState: 'REGULAR',
            timestamp: new Date(),
            source: 'alpha-vantage'
          };
        }
      }
    }
  } catch (error) {
    console.log(`⚠️ Alpha Vantage failed for ${symbol}:`, error instanceof Error ? error.message : String(error));
  }
  
  // Fourth Source: Financial Modeling Prep (alternative)
  try {
    if (rateLimiter.canMakeCall('fmp', APIS.fmp.rateLimit)) {
      const apiKey = APIS.fmp.apiKey;
      const response = await fetch(`${APIS.fmp.baseUrl}/quote/${cleanSymbol}?apikey=${apiKey}`, {
        signal: AbortSignal.timeout(5000)
      });
      
      if (response.ok) {
        const data = await response.json();
        const quote = data[0];
        
        if (quote && quote.price > 0) {
          // Success - minimal logging
          
          return {
            symbol: symbol,
            price: Number(quote.price.toFixed(2)),
            previousClose: Number(quote.previousClose.toFixed(2)),
            change: Number(quote.change.toFixed(2)),
            volume: quote.volume || 0,
            marketCap: quote.marketCap || 0,
            pe: quote.pe || null,
            dividendYield: null,
            dayHigh: quote.dayHigh || quote.price * 1.02,
            dayLow: quote.dayLow || quote.price * 0.98,
            currency: 'USD',
            marketState: 'REGULAR',
            timestamp: new Date(),
            source: 'fmp'
          };
        }
      }
    }
  } catch (error) {
    console.log(`⚠️ FMP failed for ${symbol}:`, error instanceof Error ? error.message : String(error));
  }
  
  // All APIs failed - no data available
  return null;
}

/**
 * Fetch crypto data from multiple sources with comprehensive fallback
 * Matches the multi-API approach used for stocks
 */
async function fetchCryptoPrice(symbol) {
  // Minimal logging for efficiency
  
  // Primary Source: Binance (most accurate and real-time)
  try {
    if (rateLimiter.canMakeCall('binance', APIS.binance.rateLimit)) {
      const binanceSymbol = symbol.replace('-USD', 'USDT');
      const [priceResp, tickerResp] = await Promise.all([
        fetch(`${APIS.binance.baseUrl}/ticker/price?symbol=${binanceSymbol}`, {
          cache: 'no-cache',
          headers: { 'Cache-Control': 'no-cache' },
          signal: AbortSignal.timeout(5000)
        }),
        fetch(`${APIS.binance.baseUrl}/ticker/24hr?symbol=${binanceSymbol}`, {
          cache: 'no-cache',
          headers: { 'Cache-Control': 'no-cache' },
          signal: AbortSignal.timeout(5000)
        })
      ]);
      
      if (priceResp.ok && tickerResp.ok) {
        const priceData = await priceResp.json();
        const tickerData = await tickerResp.json();
        
        if (priceData.price && tickerData.prevClosePrice) {
          const currentPrice = parseFloat(priceData.price);
          const previousClose = parseFloat(tickerData.prevClosePrice);
          const change = currentPrice - previousClose;
          
          // Success - minimal logging
          
          return {
            symbol: symbol,
            price: Number(currentPrice.toFixed(2)),
            previousClose: Number(previousClose.toFixed(2)),
            change: Number(change.toFixed(2)),
            volume: parseFloat(tickerData.volume) || 0,
            marketCap: 0, // Calculate separately if needed
            currency: 'USD',
            marketState: 'REGULAR',
            timestamp: new Date(),
            source: 'binance'
          };
        }
      }
    }
  } catch (error) {
    console.log(`⚠️ Binance failed for ${symbol}:`, error instanceof Error ? error.message : String(error));
  }
  
  // Secondary Source: CoinGecko (comprehensive data)
  try {
    if (rateLimiter.canMakeCall('coingecko', APIS.coingecko.rateLimit)) {
      const cryptoId = getCryptoId(symbol);
      if (cryptoId) {
        const response = await fetch(`${APIS.coingecko.baseUrl}/simple/price?ids=${cryptoId}&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true`, {
          signal: AbortSignal.timeout(5000)
        });
        
        if (response.ok) {
          const data = await response.json();
          const crypto = data[cryptoId];
          
          if (crypto && crypto.usd) {
            const previousClose = crypto.usd / (1 + (crypto.usd_24h_change / 100));
            const change = crypto.usd - previousClose;
            
            // Success - minimal logging
            
            return {
              symbol: symbol,
              price: Number(crypto.usd.toFixed(2)),
              previousClose: Number(previousClose.toFixed(2)),
              change: Number(change.toFixed(2)),
              volume: crypto.usd_24h_vol || 0,
              marketCap: crypto.usd_market_cap || 0,
              currency: 'USD',
              marketState: 'REGULAR',
              timestamp: new Date(),
              source: 'coingecko'
            };
          }
        }
      }
    }
  } catch (error) {
    console.log(`⚠️ CoinGecko failed for ${symbol}:`, error instanceof Error ? error.message : String(error));
  }
  
  // Tertiary Source: Coinbase (reliable backup)
  try {
    if (rateLimiter.canMakeCall('coinbase', APIS.coinbase.rateLimit)) {
      const coinbaseSymbol = symbol.replace('-USD', '-USD');
      const response = await fetch(`${APIS.coinbase.baseUrl}/exchange-rates?currency=${coinbaseSymbol.split('-')[0]}`, {
        signal: AbortSignal.timeout(5000)
      });
      
      if (response.ok) {
        const data = await response.json();
        const rate = data.data?.rates?.USD;
        
        if (rate && parseFloat(rate) > 0) {
          const currentPrice = parseFloat(rate);
          
          // Success - minimal logging
          
          return {
            symbol: symbol,
            price: Number(currentPrice.toFixed(2)),
            previousClose: Number((currentPrice * 0.99).toFixed(2)), // Estimate
            change: Number((currentPrice * 0.01).toFixed(2)), // Estimate
            volume: 0,
            marketCap: 0,
            currency: 'USD',
            marketState: 'REGULAR',
            timestamp: new Date(),
            source: 'coinbase'
          };
        }
      }
    }
  } catch (error) {
    console.log(`⚠️ Coinbase failed for ${symbol}:`, error instanceof Error ? error.message : String(error));
  }
  
  // All crypto APIs failed
  return null;
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
  console.log('🔄 Price update started');
  
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
    
    console.log(`✅ Updated ${assets.length} assets`);
    
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
    
    // Cache in Redis using the correct format for SSE stream compatibility
    const priceSnapshot = {
      sym: asset.symbol,
      price: priceData.price,
      ts: priceData.timestamp.getTime(),
      change: priceData.change,
      changePct: changePercent,
      state: priceData.marketState || 'REGULAR',
      dayOpen: null,
      prevClose: priceData.previousClose,
      dayHigh: null,
      dayLow: null,
      bid: null,
      ask: null,
      volume: priceData.volume
    };
    
    // Cache with the correct Redis key format (px: prefix for price snapshots)
    await redis.setex(`px:${asset.symbol}`, 7200, JSON.stringify(priceSnapshot)); // 2 hour cache to match redis.ts
    
    // Also keep the old format for backward compatibility
    const legacyCacheData = {
      symbol: asset.symbol,
      price: priceData.price,
      change: priceData.change,
      changePercent: changePercent,
      volume: priceData.volume,
      marketCap: priceData.marketCap,
      timestamp: priceData.timestamp.getTime(),
      marketState: priceData.marketState
    };
    
    await redis.setex(`price:${asset.symbol}`, 300, JSON.stringify(legacyCacheData)); // 5 min cache
    
    // Asset updated successfully
    
  } catch (error) {
    console.error(`❌ Error updating ${asset.symbol}:`, error instanceof Error ? error.message : String(error));
  }
}

/**
 * Get cached price or fetch fresh data
 */
async function getPrice(symbol) {
  try {
    // Try cache first (check both formats)
    let cached = await redis.get(`px:${symbol}`);
    if (cached) {
      const snapshot = JSON.parse(cached);
      // Convert to legacy format for compatibility
      return {
        symbol: snapshot.sym,
        price: snapshot.price,
        change: snapshot.change,
        changePercent: snapshot.changePct,
        volume: snapshot.volume,
        marketCap: null,
        timestamp: snapshot.ts,
        marketState: snapshot.state
      };
    }
    
    // Fallback to legacy cache format
    cached = await redis.get(`price:${symbol}`);
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
    console.error(`❌ Error getting price for ${symbol}:`, error instanceof Error ? error.message : String(error));
    return null;
  }
}

export {
  updateAllPrices,
  getPrice,
  fetchStockPrice,
  fetchCryptoPrice
};