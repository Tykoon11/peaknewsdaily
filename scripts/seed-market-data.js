#!/usr/bin/env node

/**
 * Seed market data for development
 * This script:
 * 1. Updates stock quotes with proper previousClose values
 * 2. Seeds Redis with live price snapshots
 * 3. Sets up volatility scores for crypto
 */

const { PrismaClient } = require('@prisma/client')
const Redis = require('ioredis')

const prisma = new PrismaClient()

// Initialize Redis
const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379')

// Mock market data for popular stocks
const STOCK_MARKET_DATA = {
  // Magnificent Seven
  'AAPL': { name: 'Apple Inc.', sector: 'Technology', previousClose: 247.50 },
  'MSFT': { name: 'Microsoft Corporation', sector: 'Technology', previousClose: 442.30 },
  'GOOGL': { name: 'Alphabet Inc.', sector: 'Technology', previousClose: 182.20 },
  'AMZN': { name: 'Amazon.com Inc.', sector: 'Consumer Discretionary', previousClose: 218.75 },
  'TSLA': { name: 'Tesla Inc.', sector: 'Consumer Discretionary', previousClose: 331.50 },
  'META': { name: 'Meta Platforms Inc.', sector: 'Technology', previousClose: 735.80 },
  'NVDA': { name: 'NVIDIA Corporation', sector: 'Technology', previousClose: 172.90 },

  // Additional Major Tech Stocks
  'NFLX': { name: 'Netflix Inc.', sector: 'Communication Services', previousClose: 1205.40 },
  'CRM': { name: 'Salesforce Inc.', sector: 'Technology', previousClose: 295.80 },
  'ORCL': { name: 'Oracle Corporation', sector: 'Technology', previousClose: 142.30 },
  'ADBE': { name: 'Adobe Inc.', sector: 'Technology', previousClose: 485.60 },
  'INTC': { name: 'Intel Corporation', sector: 'Technology', previousClose: 24.85 },
  'AMD': { name: 'Advanced Micro Devices Inc.', sector: 'Technology', previousClose: 142.50 },
  'CSCO': { name: 'Cisco Systems Inc.', sector: 'Technology', previousClose: 58.75 },
  'IBM': { name: 'International Business Machines Corp.', sector: 'Technology', previousClose: 228.40 },
  'TSM': { name: 'Taiwan Semiconductor Manufacturing Co.', sector: 'Technology', previousClose: 180.25 },
  'QCOM': { name: 'Qualcomm Inc.', sector: 'Technology', previousClose: 154.80 },
  'AVGO': { name: 'Broadcom Inc.', sector: 'Technology', previousClose: 1825.70 },
  'TXN': { name: 'Texas Instruments Inc.', sector: 'Technology', previousClose: 205.30 },
  'MU': { name: 'Micron Technology Inc.', sector: 'Technology', previousClose: 98.60 },
  'LRCX': { name: 'Lam Research Corp.', sector: 'Technology', previousClose: 785.40 },
  'AMAT': { name: 'Applied Materials Inc.', sector: 'Technology', previousClose: 192.80 },
  'PYPL': { name: 'PayPal Holdings Inc.', sector: 'Technology', previousClose: 85.20 },
  'UBER': { name: 'Uber Technologies Inc.', sector: 'Technology', previousClose: 72.40 },
  'SNAP': { name: 'Snap Inc.', sector: 'Technology', previousClose: 12.85 },
  'TWTR': { name: 'Twitter Inc.', sector: 'Technology', previousClose: 54.20 },
  'PINS': { name: 'Pinterest Inc.', sector: 'Technology', previousClose: 28.70 },
  'ZM': { name: 'Zoom Video Communications Inc.', sector: 'Technology', previousClose: 68.90 },
  'DOCU': { name: 'DocuSign Inc.', sector: 'Technology', previousClose: 62.15 },
  'NOW': { name: 'ServiceNow Inc.', sector: 'Technology', previousClose: 875.20 },
  'WDAY': { name: 'Workday Inc.', sector: 'Technology', previousClose: 285.60 },
  'SNOW': { name: 'Snowflake Inc.', sector: 'Technology', previousClose: 142.80 },
  'PLTR': { name: 'Palantir Technologies Inc.', sector: 'Technology', previousClose: 68.50 },
  'SQ': { name: 'Block Inc.', sector: 'Technology', previousClose: 85.40 },

  // Financial Sector - Major Banks
  'JPM': { name: 'JPMorgan Chase & Co.', sector: 'Financial', previousClose: 248.90 },
  'BAC': { name: 'Bank of America Corp.', sector: 'Financial', previousClose: 45.80 },
  'WFC': { name: 'Wells Fargo & Co.', sector: 'Financial', previousClose: 71.25 },
  'GS': { name: 'Goldman Sachs Group Inc.', sector: 'Financial', previousClose: 542.70 },
  'MS': { name: 'Morgan Stanley', sector: 'Financial', previousClose: 125.40 },
  'C': { name: 'Citigroup Inc.', sector: 'Financial', previousClose: 68.90 },
  'USB': { name: 'U.S. Bancorp', sector: 'Financial', previousClose: 48.75 },
  'PNC': { name: 'PNC Financial Services Group Inc.', sector: 'Financial', previousClose: 185.60 },
  'TFC': { name: 'Truist Financial Corp.', sector: 'Financial', previousClose: 42.85 },
  'COF': { name: 'Capital One Financial Corp.', sector: 'Financial', previousClose: 175.90 },
  'AXP': { name: 'American Express Co.', sector: 'Financial', previousClose: 285.40 },
  'BK': { name: 'Bank of New York Mellon Corp.', sector: 'Financial', previousClose: 78.20 },
  'STT': { name: 'State Street Corp.', sector: 'Financial', previousClose: 95.60 },

  // Insurance & Financial Services
  'BRK.B': { name: 'Berkshire Hathaway Inc.', sector: 'Financial', previousClose: 485.70 },
  'V': { name: 'Visa Inc.', sector: 'Financial', previousClose: 315.80 },
  'MA': { name: 'Mastercard Inc.', sector: 'Financial', previousClose: 524.90 },
  'AIG': { name: 'American International Group Inc.', sector: 'Financial', previousClose: 78.40 },
  'PRU': { name: 'Prudential Financial Inc.', sector: 'Financial', previousClose: 125.80 },
  'MET': { name: 'MetLife Inc.', sector: 'Financial', previousClose: 82.50 },
  'ALL': { name: 'Allstate Corp.', sector: 'Financial', previousClose: 195.60 },
  'PGR': { name: 'Progressive Corp.', sector: 'Financial', previousClose: 268.90 },

  // Healthcare & Pharmaceuticals
  'JNJ': { name: 'Johnson & Johnson', sector: 'Healthcare', previousClose: 154.80 },
  'PFE': { name: 'Pfizer Inc.', sector: 'Healthcare', previousClose: 25.70 },
  'UNH': { name: 'UnitedHealth Group Inc.', sector: 'Healthcare', previousClose: 628.40 },
  'ABBV': { name: 'AbbVie Inc.', sector: 'Healthcare', previousClose: 175.90 },
  'MRK': { name: 'Merck & Co. Inc.', sector: 'Healthcare', previousClose: 98.50 },
  'LLY': { name: 'Eli Lilly and Co.', sector: 'Healthcare', previousClose: 785.60 },
  'BMY': { name: 'Bristol Myers Squibb Co.', sector: 'Healthcare', previousClose: 52.80 },
  'AMGN': { name: 'Amgen Inc.', sector: 'Healthcare', previousClose: 268.40 },
  'GILD': { name: 'Gilead Sciences Inc.', sector: 'Healthcare', previousClose: 92.70 },
  'BIIB': { name: 'Biogen Inc.', sector: 'Healthcare', previousClose: 185.30 },
  'CVS': { name: 'CVS Health Corp.', sector: 'Healthcare', previousClose: 56.90 },
  'WBA': { name: 'Walgreens Boots Alliance Inc.', sector: 'Healthcare', previousClose: 8.75 },
  'CI': { name: 'Cigna Corp.', sector: 'Healthcare', previousClose: 385.20 },
  'HUM': { name: 'Humana Inc.', sector: 'Healthcare', previousClose: 285.60 },
  'ANTM': { name: 'Anthem Inc.', sector: 'Healthcare', previousClose: 485.90 },

  // Consumer & Retail
  'WMT': { name: 'Walmart Inc.', sector: 'Consumer Staples', previousClose: 95.80 },
  'HD': { name: 'Home Depot Inc.', sector: 'Consumer Discretionary', previousClose: 425.70 },
  'PG': { name: 'Procter & Gamble Co.', sector: 'Consumer Staples', previousClose: 165.40 },
  'KO': { name: 'Coca-Cola Co.', sector: 'Consumer Staples', previousClose: 62.50 },
  'PEP': { name: 'PepsiCo Inc.', sector: 'Consumer Staples', previousClose: 158.90 },
  'MCD': { name: 'McDonald\'s Corp.', sector: 'Consumer Discretionary', previousClose: 285.60 },
  'SBUX': { name: 'Starbucks Corp.', sector: 'Consumer Discretionary', previousClose: 95.40 },
  'NKE': { name: 'Nike Inc.', sector: 'Consumer Discretionary', previousClose: 85.70 },
  'LOW': { name: 'Lowe\'s Companies Inc.', sector: 'Consumer Discretionary', previousClose: 285.90 },
  'TGT': { name: 'Target Corp.', sector: 'Consumer Discretionary', previousClose: 148.60 },
  'COST': { name: 'Costco Wholesale Corp.', sector: 'Consumer Staples', previousClose: 985.40 },
  'DIS': { name: 'Walt Disney Co.', sector: 'Communication Services', previousClose: 115.80 },

  // Energy & Utilities
  'XOM': { name: 'Exxon Mobil Corp.', sector: 'Energy', previousClose: 118.50 },
  'CVX': { name: 'Chevron Corp.', sector: 'Energy', previousClose: 168.90 },
  'COP': { name: 'ConocoPhillips', sector: 'Energy', previousClose: 108.70 },
  'EOG': { name: 'EOG Resources Inc.', sector: 'Energy', previousClose: 138.60 },
  'SLB': { name: 'Schlumberger Ltd.', sector: 'Energy', previousClose: 42.80 },
  'PSX': { name: 'Phillips 66', sector: 'Energy', previousClose: 142.50 },
  'VLO': { name: 'Valero Energy Corp.', sector: 'Energy', previousClose: 148.90 },
  'NEE': { name: 'NextEra Energy Inc.', sector: 'Utilities', previousClose: 78.40 },
  'D': { name: 'Dominion Energy Inc.', sector: 'Utilities', previousClose: 58.70 },
  'SO': { name: 'Southern Co.', sector: 'Utilities', previousClose: 85.60 },

  // Industrial & Materials
  'BA': { name: 'Boeing Co.', sector: 'Industrial', previousClose: 185.40 },
  'HON': { name: 'Honeywell International Inc.', sector: 'Industrial', previousClose: 225.80 },
  'UPS': { name: 'United Parcel Service Inc.', sector: 'Industrial', previousClose: 128.90 },
  'FDX': { name: 'FedEx Corp.', sector: 'Industrial', previousClose: 285.60 },
  'CAT': { name: 'Caterpillar Inc.', sector: 'Industrial', previousClose: 425.70 },
  'DE': { name: 'Deere & Co.', sector: 'Industrial', previousClose: 485.90 },
  'GE': { name: 'General Electric Co.', sector: 'Industrial', previousClose: 195.60 },
  '3M': { name: '3M Co.', sector: 'Industrial', previousClose: 125.40 },

  // Real Estate & REITs
  'AMT': { name: 'American Tower Corp.', sector: 'Real Estate', previousClose: 225.80 },
  'PLD': { name: 'Prologis Inc.', sector: 'Real Estate', previousClose: 118.50 },
  'CCI': { name: 'Crown Castle Inc.', sector: 'Real Estate', previousClose: 95.60 },
  'EQIX': { name: 'Equinix Inc.', sector: 'Real Estate', previousClose: 885.40 },
  'SPG': { name: 'Simon Property Group Inc.', sector: 'Real Estate', previousClose: 165.80 },
  'AVB': { name: 'AvalonBay Communities Inc.', sector: 'Real Estate', previousClose: 225.60 },

  // Telecom
  'VZ': { name: 'Verizon Communications Inc.', sector: 'Communication Services', previousClose: 42.50 },
  'T': { name: 'AT&T Inc.', sector: 'Communication Services', previousClose: 22.80 },
  'TMUS': { name: 'T-Mobile US Inc.', sector: 'Communication Services', previousClose: 225.70 },
  'CHTR': { name: 'Charter Communications Inc.', sector: 'Communication Services', previousClose: 385.60 },
  'CMCSA': { name: 'Comcast Corp.', sector: 'Communication Services', previousClose: 42.90 },

  // ETFs
  'SPY': { name: 'SPDR S&P 500 ETF', sector: 'Financial', previousClose: 595.80 },
  'QQQ': { name: 'Invesco QQQ Trust', sector: 'Financial', previousClose: 525.40 },
  'DIA': { name: 'SPDR Dow Jones Industrial Average ETF', sector: 'Financial', previousClose: 445.60 }
}

const CRYPTO_MARKET_DATA = {
  // Major Cryptocurrencies
  'BTC-USD': { name: 'Bitcoin', previousClose: 98500, volatility: 0.7 },
  'ETH-USD': { name: 'Ethereum', previousClose: 3820, volatility: 0.8 },
  'BNB-USD': { name: 'BNB', previousClose: 580, volatility: 0.6 },
  'XRP-USD': { name: 'XRP', previousClose: 2.45, volatility: 0.85 },
  'ADA-USD': { name: 'Cardano', previousClose: 0.45, volatility: 0.9 },
  'SOL-USD': { name: 'Solana', previousClose: 200, volatility: 0.95 },
  'AVAX-USD': { name: 'Avalanche', previousClose: 42, volatility: 0.9 },
  'DOT-USD': { name: 'Polkadot', previousClose: 6.5, volatility: 0.8 },
  'MATIC-USD': { name: 'Polygon', previousClose: 0.52, volatility: 0.85 },
  'LINK-USD': { name: 'Chainlink', previousClose: 24.5, volatility: 0.8 },
  
  // Top Altcoins
  'LTC-USD': { name: 'Litecoin', previousClose: 105, volatility: 0.75 },
  'UNI-USD': { name: 'Uniswap', previousClose: 14.5, volatility: 0.9 },
  'ATOM-USD': { name: 'Cosmos', previousClose: 7.8, volatility: 0.85 },
  'ICP-USD': { name: 'Internet Computer', previousClose: 12.5, volatility: 1.0 },
  'NEAR-USD': { name: 'NEAR Protocol', previousClose: 5.2, volatility: 0.9 },
  'ALGO-USD': { name: 'Algorand', previousClose: 0.35, volatility: 0.85 },
  'VET-USD': { name: 'VeChain', previousClose: 0.045, volatility: 0.9 },
  'FTM-USD': { name: 'Fantom', previousClose: 0.85, volatility: 1.0 },
  'HBAR-USD': { name: 'Hedera', previousClose: 0.28, volatility: 0.85 },
  'XLM-USD': { name: 'Stellar', previousClose: 0.38, volatility: 0.8 },
  
  // DeFi Tokens
  'AAVE-USD': { name: 'Aave', previousClose: 320, volatility: 0.9 },
  'MKR-USD': { name: 'Maker', previousClose: 1850, volatility: 0.85 },
  'CRV-USD': { name: 'Curve DAO', previousClose: 0.85, volatility: 0.95 },
  'COMP-USD': { name: 'Compound', previousClose: 75, volatility: 0.9 },
  'SUSHI-USD': { name: 'SushiSwap', previousClose: 1.2, volatility: 0.95 },
  'YFI-USD': { name: 'yearn.finance', previousClose: 8500, volatility: 1.0 },
  'BAL-USD': { name: 'Balancer', previousClose: 3.2, volatility: 0.9 },
  'SNX-USD': { name: 'Synthetix', previousClose: 2.8, volatility: 0.9 },
  '1INCH-USD': { name: '1inch', previousClose: 0.42, volatility: 0.95 },
  'LIDO-USD': { name: 'Lido DAO', previousClose: 1.8, volatility: 0.9 },
  
  // Layer 2 & Scaling
  'ARB-USD': { name: 'Arbitrum', previousClose: 0.85, volatility: 0.9 },
  'OP-USD': { name: 'Optimism', previousClose: 2.4, volatility: 0.9 },
  'LRC-USD': { name: 'Loopring', previousClose: 0.18, volatility: 0.95 },
  'IMX-USD': { name: 'Immutable', previousClose: 1.6, volatility: 0.9 },
  
  // Meme Coins
  'DOGE-USD': { name: 'Dogecoin', previousClose: 0.32, volatility: 1.1 },
  'SHIB-USD': { name: 'Shiba Inu', previousClose: 0.0000245, volatility: 1.2 },
  'PEPE-USD': { name: 'Pepe', previousClose: 0.0000185, volatility: 1.3 },
  'BONK-USD': { name: 'Bonk', previousClose: 0.000038, volatility: 1.25 },
  'FLOKI-USD': { name: 'FLOKI', previousClose: 0.00022, volatility: 1.2 },
  
  // AI & Tech Tokens
  'FET-USD': { name: 'Fetch.ai', previousClose: 1.45, volatility: 0.9 },
  'OCEAN-USD': { name: 'Ocean Protocol', previousClose: 0.58, volatility: 0.95 },
  'AGIX-USD': { name: 'SingularityNET', previousClose: 0.62, volatility: 0.9 },
  'RNDR-USD': { name: 'Render', previousClose: 7.8, volatility: 0.85 },
  'GRT-USD': { name: 'The Graph', previousClose: 0.24, volatility: 0.9 },
  
  // Gaming & Metaverse
  'AXS-USD': { name: 'Axie Infinity', previousClose: 6.2, volatility: 1.0 },
  'SAND-USD': { name: 'The Sandbox', previousClose: 0.52, volatility: 0.95 },
  'MANA-USD': { name: 'Decentraland', previousClose: 0.48, volatility: 0.95 },
  'ENJ-USD': { name: 'Enjin Coin', previousClose: 0.32, volatility: 0.9 },
  'CHZ-USD': { name: 'Chiliz', previousClose: 0.085, volatility: 0.9 },
  
  // Privacy Coins
  'XMR-USD': { name: 'Monero', previousClose: 185, volatility: 0.8 },
  'ZEC-USD': { name: 'Zcash', previousClose: 58, volatility: 0.85 },
  'DASH-USD': { name: 'Dash', previousClose: 45, volatility: 0.8 },
  
  // Enterprise & Utility
  'XTZ-USD': { name: 'Tezos', previousClose: 0.95, volatility: 0.8 },
  'EOS-USD': { name: 'EOS', previousClose: 0.68, volatility: 0.85 },
  'IOTA-USD': { name: 'IOTA', previousClose: 0.28, volatility: 0.9 },
  'NEO-USD': { name: 'NEO', previousClose: 15.5, volatility: 0.85 },
  'QTUM-USD': { name: 'Qtum', previousClose: 3.2, volatility: 0.8 },
  
  // Stablecoins & Wrapped Assets
  'USDC-USD': { name: 'USD Coin', previousClose: 1.0, volatility: 0.05 },
  'USDT-USD': { name: 'Tether', previousClose: 1.0, volatility: 0.05 },
  'DAI-USD': { name: 'Dai', previousClose: 1.0, volatility: 0.1 },
  'WBTC-USD': { name: 'Wrapped Bitcoin', previousClose: 98400, volatility: 0.7 },
  
  // New & Trending
  'APT-USD': { name: 'Aptos', previousClose: 9.8, volatility: 1.0 },
  'SUI-USD': { name: 'Sui', previousClose: 4.2, volatility: 1.0 },
  'SEI-USD': { name: 'Sei', previousClose: 0.48, volatility: 1.1 },
  'WLD-USD': { name: 'Worldcoin', previousClose: 2.8, volatility: 1.0 },
  'INJ-USD': { name: 'Injective', previousClose: 28, volatility: 0.9 }
}

async function seedStockData() {
  console.log('🏗️ Seeding stock data...')
  
  for (const [symbol, data] of Object.entries(STOCK_MARKET_DATA)) {
    try {
      // Find latest quote for this stock
      const latestQuote = await prisma.quote.findFirst({
        where: { 
          asset: { symbol: symbol }
        },
        include: { asset: true },
        orderBy: { timestamp: 'desc' }
      })
      
      if (latestQuote) {
        const currentPrice = parseFloat(latestQuote.price)
        const previousClose = data.previousClose
        const change = currentPrice - previousClose
        const changePercent = (change / previousClose) * 100
        
        // Update the quote with proper previousClose and calculations
        await prisma.quote.update({
          where: { id: latestQuote.id },
          data: {
            previousClose: previousClose.toString(),
            change: change.toString(),
            changePercent: changePercent.toString()
          }
        })
        
        // Store in Redis
        const priceSnapshot = {
          sym: symbol,
          price: currentPrice,
          ts: Date.now(),
          change: change,
          changePct: changePercent,
          state: 'CLOSED',
          dayOpen: previousClose * (1 + (Math.random() - 0.5) * 0.01), // Mock day open
          prevClose: previousClose,
          dayHigh: Math.max(currentPrice, previousClose) * (1 + Math.random() * 0.02),
          dayLow: Math.min(currentPrice, previousClose) * (1 - Math.random() * 0.02)
        }
        
        await redis.setex(
          `px:${symbol}`,
          21600, // 6 hours for stocks
          JSON.stringify(priceSnapshot)
        )
        
        console.log(`✅ Updated ${symbol}: $${currentPrice.toFixed(2)} (${changePercent.toFixed(2)}%)`)
      }
    } catch (error) {
      console.error(`❌ Error updating ${symbol}:`, error.message)
    }
  }
}

async function seedCryptoData() {
  console.log('🪙 Seeding crypto data...')
  
  for (const [symbol, data] of Object.entries(CRYPTO_MARKET_DATA)) {
    try {
      // Find latest quote for this crypto
      const latestQuote = await prisma.quote.findFirst({
        where: { 
          asset: { symbol: symbol }
        },
        include: { asset: true },
        orderBy: { timestamp: 'desc' }
      })
      
      if (latestQuote) {
        const currentPrice = parseFloat(latestQuote.price)
        const previousClose = latestQuote.previousClose ? parseFloat(latestQuote.previousClose) : data.previousClose
        const change = currentPrice - previousClose
        const changePercent = (change / previousClose) * 100
        
        // Store in Redis
        const priceSnapshot = {
          sym: symbol,
          price: currentPrice,
          ts: Date.now(),
          change: change,
          changePct: changePercent,
          state: 'REGULAR', // Crypto markets are 24/7
          dayOpen: previousClose * (1 + (Math.random() - 0.5) * 0.02),
          prevClose: previousClose,
          dayHigh: Math.max(currentPrice, previousClose) * (1 + Math.random() * 0.05),
          dayLow: Math.min(currentPrice, previousClose) * (1 - Math.random() * 0.05)
        }
        
        await redis.setex(
          `px:${symbol}`,
          86400, // 24 hours for crypto (24/7 markets)
          JSON.stringify(priceSnapshot)
        )
        
        // Set volatility score
        await redis.setex(
          `vol:score:${symbol}`,
          3600, // 1 hour
          data.volatility.toString()
        )
        
        console.log(`✅ Updated ${symbol}: $${currentPrice.toFixed(symbol.includes('BTC') || symbol.includes('ETH') ? 0 : 4)} (${changePercent.toFixed(2)}%)`)
      }
    } catch (error) {
      console.error(`❌ Error updating ${symbol}:`, error.message)
    }
  }
}

async function setMarketState() {
  console.log('📈 Setting market state...')
  
  // Determine market state based on current time (Eastern Time)
  const now = new Date()
  const etHour = now.getUTCHours() - 5 // Rough EST conversion
  
  let marketState = 'CLOSED'
  if (etHour >= 4 && etHour < 9.5) {
    marketState = 'PREMARKET'
  } else if (etHour >= 9.5 && etHour < 16) {
    marketState = 'REGULAR'
  } else if (etHour >= 16 && etHour < 20) {
    marketState = 'POSTMARKET'
  }
  
  await redis.setex('state:equities', 3600, marketState)
  console.log(`✅ Market state set to: ${marketState}`)
}

async function main() {
  try {
    console.log('🚀 Starting market data seeding...')
    
    await seedStockData()
    await seedCryptoData()
    await setMarketState()
    
    console.log('✅ Market data seeding completed!')
    console.log('')
    console.log('📊 Redis keys created:')
    
    const keys = await redis.keys('px:*')
    keys.forEach(key => {
      const symbol = key.replace('px:', '')
      console.log(`  - ${symbol} price snapshot`)
    })
    
    const volKeys = await redis.keys('vol:score:*')
    volKeys.forEach(key => {
      const symbol = key.replace('vol:score:', '')
      console.log(`  - ${symbol} volatility score`)
    })
    
    console.log(`  - Market state: ${await redis.get('state:equities')}`)
    
  } catch (error) {
    console.error('❌ Seeding failed:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
    redis.disconnect()
  }
}

if (require.main === module) {
  main()
}

module.exports = { main }