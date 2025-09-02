const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function seedFinancialData() {
  try {
    console.log('🌱 Seeding financial market data...')
    
    // Create Markets
    const markets = [
      {
        name: 'New York Stock Exchange',
        code: 'NYSE',
        country: 'US',
        timezone: 'America/New_York',
        currency: 'USD',
        openTime: '09:30',
        closeTime: '16:00'
      },
      {
        name: 'NASDAQ',
        code: 'NASD',
        country: 'US',
        timezone: 'America/New_York',
        currency: 'USD',
        openTime: '09:30',
        closeTime: '16:00'
      },
      {
        name: 'Toronto Stock Exchange',
        code: 'TSX',
        country: 'CA',
        timezone: 'America/Toronto',
        currency: 'CAD',
        openTime: '09:30',
        closeTime: '16:00'
      },
      {
        name: 'Crypto Markets',
        code: 'CRYPTO',
        country: 'GLOBAL',
        timezone: 'UTC',
        currency: 'USD',
        status: 'open' // Crypto markets are always open
      }
    ]

    for (const marketData of markets) {
      await prisma.market.upsert({
        where: { code: marketData.code },
        update: {},
        create: marketData
      })
    }

    // Get market IDs
    const nyse = await prisma.market.findUnique({ where: { code: 'NYSE' } })
    const nasdaq = await prisma.market.findUnique({ where: { code: 'NASD' } })
    const tsx = await prisma.market.findUnique({ where: { code: 'TSX' } })
    const crypto = await prisma.market.findUnique({ where: { code: 'CRYPTO' } })

    // Create Assets with real tickers
    const assets = [
      // Major US Stocks
      { symbol: 'AAPL', name: 'Apple Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Consumer Electronics' },
      { symbol: 'MSFT', name: 'Microsoft Corporation', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Software' },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Internet' },
      { symbol: 'AMZN', name: 'Amazon.com Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Consumer Discretionary', industry: 'E-commerce' },
      { symbol: 'TSLA', name: 'Tesla Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Consumer Discretionary', industry: 'Electric Vehicles' },
      { symbol: 'NVDA', name: 'NVIDIA Corporation', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Semiconductors' },
      { symbol: 'META', name: 'Meta Platforms Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Social Media' },
      { symbol: 'NFLX', name: 'Netflix Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Communication Services', industry: 'Streaming' },
      
      // Major Indices
      { symbol: 'SPY', name: 'SPDR S&P 500 ETF', type: 'etf', marketId: nyse.id, sector: 'Financial', industry: 'Index Fund' },
      { symbol: 'QQQ', name: 'Invesco QQQ Trust', type: 'etf', marketId: nasdaq.id, sector: 'Financial', industry: 'Index Fund' },
      { symbol: 'DIA', name: 'SPDR Dow Jones Industrial Average ETF', type: 'etf', marketId: nyse.id, sector: 'Financial', industry: 'Index Fund' },
      
      // Canadian Stocks
      { symbol: 'SHOP.TO', name: 'Shopify Inc.', type: 'stock', marketId: tsx.id, sector: 'Technology', industry: 'E-commerce Software' },
      { symbol: 'RY.TO', name: 'Royal Bank of Canada', type: 'stock', marketId: tsx.id, sector: 'Financial', industry: 'Banking' },
      
      // Major Cryptocurrencies
      { symbol: 'BTC-USD', name: 'Bitcoin', type: 'crypto', marketId: crypto.id },
      { symbol: 'ETH-USD', name: 'Ethereum', type: 'crypto', marketId: crypto.id },
      { symbol: 'XRP-USD', name: 'XRP', type: 'crypto', marketId: crypto.id },
      { symbol: 'ADA-USD', name: 'Cardano', type: 'crypto', marketId: crypto.id },
      { symbol: 'SOL-USD', name: 'Solana', type: 'crypto', marketId: crypto.id }
    ]

    for (const assetData of assets) {
      await prisma.asset.upsert({
        where: { symbol: assetData.symbol },
        update: {},
        create: assetData
      })
    }

    // Generate sample quote data with realistic prices
    const sampleQuotes = [
      { symbol: 'AAPL', price: 175.43, change: 2.34, volume: 45000000, marketCap: 2800000000000 },
      { symbol: 'MSFT', price: 378.85, change: -1.23, volume: 23000000, marketCap: 2850000000000 },
      { symbol: 'GOOGL', price: 142.56, change: 0.87, volume: 28000000, marketCap: 1800000000000 },
      { symbol: 'AMZN', price: 145.32, change: -2.45, volume: 35000000, marketCap: 1500000000000 },
      { symbol: 'TSLA', price: 248.50, change: 12.34, volume: 75000000, marketCap: 790000000000 },
      { symbol: 'NVDA', price: 875.23, change: 15.67, volume: 42000000, marketCap: 2150000000000 },
      { symbol: 'META', price: 485.75, change: -8.23, volume: 18000000, marketCap: 1230000000000 },
      { symbol: 'NFLX', price: 425.67, change: 3.45, volume: 12000000, marketCap: 190000000000 },
      { symbol: 'SPY', price: 512.34, change: 1.23, volume: 85000000 },
      { symbol: 'QQQ', price: 398.45, change: 2.34, volume: 55000000 },
      { symbol: 'BTC-USD', price: 67845.32, change: -1234.56, volume: 28000000000 },
      { symbol: 'ETH-USD', price: 3456.78, change: 123.45, volume: 15000000000 },
      { symbol: 'XRP-USD', price: 2.75, change: -0.12, volume: 2500000000 }
    ]

    for (const quote of sampleQuotes) {
      const asset = await prisma.asset.findUnique({ where: { symbol: quote.symbol } })
      if (asset) {
        const changePercent = ((quote.change / (quote.price - quote.change)) * 100)
        
        await prisma.quote.create({
          data: {
            assetId: asset.id,
            price: quote.price,
            previousClose: quote.price - quote.change,
            change: quote.change,
            changePercent: changePercent,
            volume: quote.volume,
            marketCap: quote.marketCap || null,
            dayHigh: quote.price + (Math.random() * 5),
            dayLow: quote.price - (Math.random() * 5),
            high52Week: quote.price + (Math.random() * 50),
            low52Week: quote.price - (Math.random() * 30)
          }
        })
      }
    }

    // Create sample economic events
    const economicEvents = [
      {
        country: 'US',
        currency: 'USD',
        title: 'Non-Farm Payrolls',
        description: 'Monthly employment report',
        impact: 'high',
        category: 'Employment',
        forecast: '180K',
        previous: '175K',
        unit: 'thousands',
        eventTime: new Date('2025-01-03T13:30:00Z')
      },
      {
        country: 'US',
        currency: 'USD', 
        title: 'Federal Reserve Interest Rate Decision',
        description: 'FOMC meeting decision on federal funds rate',
        impact: 'high',
        category: 'Monetary Policy',
        forecast: '5.50%',
        previous: '5.50%',
        unit: '%',
        eventTime: new Date('2025-01-15T19:00:00Z')
      },
      {
        country: 'CA',
        currency: 'CAD',
        title: 'Bank of Canada Interest Rate Decision',
        description: 'BoC overnight rate decision',
        impact: 'high',
        category: 'Monetary Policy',
        forecast: '4.25%',
        previous: '4.25%',
        unit: '%',
        eventTime: new Date('2025-01-22T15:00:00Z')
      }
    ]

    for (const event of economicEvents) {
      await prisma.economicEvent.create({ data: event })
    }

    console.log('✅ Financial market data seeded successfully!')
    console.log(`📈 Created ${assets.length} assets across ${markets.length} markets`)
    console.log(`📊 Generated ${sampleQuotes.length} sample quotes`)
    console.log(`📅 Added ${economicEvents.length} economic events`)
    
  } catch (error) {
    console.error('❌ Error seeding financial data:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

seedFinancialData()