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
  'BTC-USD': { name: 'Bitcoin', previousClose: 98500, volatility: 0.7 },
  'ETH-USD': { name: 'Ethereum', previousClose: 3820, volatility: 0.8 },
  'BNB-USD': { name: 'BNB', previousClose: 580, volatility: 0.6 },
  'ADA-USD': { name: 'Cardano', previousClose: 0.45, volatility: 0.9 },
  'SOL-USD': { name: 'Solana', previousClose: 200, volatility: 0.95 },
  'DOT-USD': { name: 'Polkadot', previousClose: 6.5, volatility: 0.8 }
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