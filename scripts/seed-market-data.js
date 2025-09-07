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
  'AAPL': { name: 'Apple Inc.', sector: 'Technology', previousClose: 247.50 },
  'MSFT': { name: 'Microsoft Corporation', sector: 'Technology', previousClose: 442.30 },
  'GOOGL': { name: 'Alphabet Inc.', sector: 'Technology', previousClose: 182.20 },
  'AMZN': { name: 'Amazon.com Inc.', sector: 'Consumer Discretionary', previousClose: 218.75 },
  'TSLA': { name: 'Tesla Inc.', sector: 'Consumer Discretionary', previousClose: 331.50 },
  'META': { name: 'Meta Platforms Inc.', sector: 'Technology', previousClose: 735.80 },
  'NVDA': { name: 'NVIDIA Corporation', sector: 'Technology', previousClose: 172.90 },
  'NFLX': { name: 'Netflix Inc.', sector: 'Communication Services', previousClose: 1205.40 }
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