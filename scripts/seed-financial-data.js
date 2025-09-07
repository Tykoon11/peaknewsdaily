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
      { symbol: 'BNB-USD', name: 'BNB', type: 'crypto', marketId: crypto.id },
      { symbol: 'XRP-USD', name: 'XRP', type: 'crypto', marketId: crypto.id },
      { symbol: 'ADA-USD', name: 'Cardano', type: 'crypto', marketId: crypto.id },
      { symbol: 'SOL-USD', name: 'Solana', type: 'crypto', marketId: crypto.id },
      { symbol: 'AVAX-USD', name: 'Avalanche', type: 'crypto', marketId: crypto.id },
      { symbol: 'DOT-USD', name: 'Polkadot', type: 'crypto', marketId: crypto.id },
      { symbol: 'MATIC-USD', name: 'Polygon', type: 'crypto', marketId: crypto.id },
      { symbol: 'LINK-USD', name: 'Chainlink', type: 'crypto', marketId: crypto.id },
      
      // Top Altcoins
      { symbol: 'LTC-USD', name: 'Litecoin', type: 'crypto', marketId: crypto.id },
      { symbol: 'UNI-USD', name: 'Uniswap', type: 'crypto', marketId: crypto.id },
      { symbol: 'ATOM-USD', name: 'Cosmos', type: 'crypto', marketId: crypto.id },
      { symbol: 'ICP-USD', name: 'Internet Computer', type: 'crypto', marketId: crypto.id },
      { symbol: 'NEAR-USD', name: 'NEAR Protocol', type: 'crypto', marketId: crypto.id },
      { symbol: 'ALGO-USD', name: 'Algorand', type: 'crypto', marketId: crypto.id },
      { symbol: 'VET-USD', name: 'VeChain', type: 'crypto', marketId: crypto.id },
      { symbol: 'FTM-USD', name: 'Fantom', type: 'crypto', marketId: crypto.id },
      { symbol: 'HBAR-USD', name: 'Hedera', type: 'crypto', marketId: crypto.id },
      { symbol: 'XLM-USD', name: 'Stellar', type: 'crypto', marketId: crypto.id },
      
      // DeFi Tokens
      { symbol: 'AAVE-USD', name: 'Aave', type: 'crypto', marketId: crypto.id },
      { symbol: 'MKR-USD', name: 'Maker', type: 'crypto', marketId: crypto.id },
      { symbol: 'CRV-USD', name: 'Curve DAO', type: 'crypto', marketId: crypto.id },
      { symbol: 'COMP-USD', name: 'Compound', type: 'crypto', marketId: crypto.id },
      { symbol: 'SUSHI-USD', name: 'SushiSwap', type: 'crypto', marketId: crypto.id },
      { symbol: 'YFI-USD', name: 'yearn.finance', type: 'crypto', marketId: crypto.id },
      { symbol: 'BAL-USD', name: 'Balancer', type: 'crypto', marketId: crypto.id },
      { symbol: 'SNX-USD', name: 'Synthetix', type: 'crypto', marketId: crypto.id },
      { symbol: '1INCH-USD', name: '1inch', type: 'crypto', marketId: crypto.id },
      { symbol: 'LIDO-USD', name: 'Lido DAO', type: 'crypto', marketId: crypto.id },
      
      // Layer 2 & Scaling
      { symbol: 'ARB-USD', name: 'Arbitrum', type: 'crypto', marketId: crypto.id },
      { symbol: 'OP-USD', name: 'Optimism', type: 'crypto', marketId: crypto.id },
      { symbol: 'LRC-USD', name: 'Loopring', type: 'crypto', marketId: crypto.id },
      { symbol: 'IMX-USD', name: 'Immutable', type: 'crypto', marketId: crypto.id },
      
      // Meme Coins
      { symbol: 'DOGE-USD', name: 'Dogecoin', type: 'crypto', marketId: crypto.id },
      { symbol: 'SHIB-USD', name: 'Shiba Inu', type: 'crypto', marketId: crypto.id },
      { symbol: 'PEPE-USD', name: 'Pepe', type: 'crypto', marketId: crypto.id },
      { symbol: 'BONK-USD', name: 'Bonk', type: 'crypto', marketId: crypto.id },
      { symbol: 'FLOKI-USD', name: 'FLOKI', type: 'crypto', marketId: crypto.id },
      
      // AI & Tech Tokens
      { symbol: 'FET-USD', name: 'Fetch.ai', type: 'crypto', marketId: crypto.id },
      { symbol: 'OCEAN-USD', name: 'Ocean Protocol', type: 'crypto', marketId: crypto.id },
      { symbol: 'AGIX-USD', name: 'SingularityNET', type: 'crypto', marketId: crypto.id },
      { symbol: 'RNDR-USD', name: 'Render', type: 'crypto', marketId: crypto.id },
      { symbol: 'GRT-USD', name: 'The Graph', type: 'crypto', marketId: crypto.id },
      
      // Gaming & Metaverse
      { symbol: 'AXS-USD', name: 'Axie Infinity', type: 'crypto', marketId: crypto.id },
      { symbol: 'SAND-USD', name: 'The Sandbox', type: 'crypto', marketId: crypto.id },
      { symbol: 'MANA-USD', name: 'Decentraland', type: 'crypto', marketId: crypto.id },
      { symbol: 'ENJ-USD', name: 'Enjin Coin', type: 'crypto', marketId: crypto.id },
      { symbol: 'CHZ-USD', name: 'Chiliz', type: 'crypto', marketId: crypto.id },
      
      // Privacy Coins
      { symbol: 'XMR-USD', name: 'Monero', type: 'crypto', marketId: crypto.id },
      { symbol: 'ZEC-USD', name: 'Zcash', type: 'crypto', marketId: crypto.id },
      { symbol: 'DASH-USD', name: 'Dash', type: 'crypto', marketId: crypto.id },
      
      // Enterprise & Utility
      { symbol: 'XTZ-USD', name: 'Tezos', type: 'crypto', marketId: crypto.id },
      { symbol: 'EOS-USD', name: 'EOS', type: 'crypto', marketId: crypto.id },
      { symbol: 'IOTA-USD', name: 'IOTA', type: 'crypto', marketId: crypto.id },
      { symbol: 'NEO-USD', name: 'NEO', type: 'crypto', marketId: crypto.id },
      { symbol: 'QTUM-USD', name: 'Qtum', type: 'crypto', marketId: crypto.id },
      
      // Stablecoins & Wrapped Assets
      { symbol: 'USDC-USD', name: 'USD Coin', type: 'crypto', marketId: crypto.id },
      { symbol: 'USDT-USD', name: 'Tether', type: 'crypto', marketId: crypto.id },
      { symbol: 'DAI-USD', name: 'Dai', type: 'crypto', marketId: crypto.id },
      { symbol: 'WBTC-USD', name: 'Wrapped Bitcoin', type: 'crypto', marketId: crypto.id },
      
      // New & Trending
      { symbol: 'APT-USD', name: 'Aptos', type: 'crypto', marketId: crypto.id },
      { symbol: 'SUI-USD', name: 'Sui', type: 'crypto', marketId: crypto.id },
      { symbol: 'SEI-USD', name: 'Sei', type: 'crypto', marketId: crypto.id },
      { symbol: 'WLD-USD', name: 'Worldcoin', type: 'crypto', marketId: crypto.id },
      { symbol: 'INJ-USD', name: 'Injective', type: 'crypto', marketId: crypto.id }
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
      // Stocks
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
      
      // Major Cryptocurrencies
      { symbol: 'BTC-USD', price: 98500.00, change: 1200.50, volume: 28000000000, marketCap: 1950000000000 },
      { symbol: 'ETH-USD', price: 3820.00, change: -45.30, volume: 15000000000, marketCap: 460000000000 },
      { symbol: 'BNB-USD', price: 580.00, change: 15.20, volume: 2500000000, marketCap: 84000000000 },
      { symbol: 'XRP-USD', price: 2.45, change: 0.12, volume: 2500000000, marketCap: 140000000000 },
      { symbol: 'ADA-USD', price: 0.45, change: -0.02, volume: 850000000, marketCap: 15800000000 },
      { symbol: 'SOL-USD', price: 200.00, change: 8.50, volume: 3200000000, marketCap: 95000000000 },
      { symbol: 'AVAX-USD', price: 42.00, change: 1.80, volume: 680000000, marketCap: 17000000000 },
      { symbol: 'DOT-USD', price: 6.50, change: -0.15, volume: 420000000, marketCap: 9800000000 },
      { symbol: 'MATIC-USD', price: 0.52, change: 0.025, volume: 680000000, marketCap: 5200000000 },
      { symbol: 'LINK-USD', price: 24.50, change: 0.95, volume: 850000000, marketCap: 14700000000 },
      
      // Top Altcoins
      { symbol: 'LTC-USD', price: 105.00, change: -2.50, volume: 420000000, marketCap: 7800000000 },
      { symbol: 'UNI-USD', price: 14.50, change: 0.65, volume: 280000000, marketCap: 8700000000 },
      { symbol: 'ATOM-USD', price: 7.80, change: -0.25, volume: 180000000, marketCap: 2600000000 },
      { symbol: 'ICP-USD', price: 12.50, change: 0.45, volume: 120000000, marketCap: 5800000000 },
      { symbol: 'NEAR-USD', price: 5.20, change: 0.18, volume: 250000000, marketCap: 5700000000 },
      { symbol: 'ALGO-USD', price: 0.35, change: -0.015, volume: 95000000, marketCap: 2800000000 },
      { symbol: 'VET-USD', price: 0.045, change: 0.002, volume: 85000000, marketCap: 3300000000 },
      { symbol: 'FTM-USD', price: 0.85, change: 0.035, volume: 180000000, marketCap: 2400000000 },
      { symbol: 'HBAR-USD', price: 0.28, change: -0.012, volume: 65000000, marketCap: 10200000000 },
      { symbol: 'XLM-USD', price: 0.38, change: 0.015, volume: 220000000, marketCap: 11500000000 },
      
      // DeFi Tokens
      { symbol: 'AAVE-USD', price: 320.00, change: 8.50, volume: 180000000, marketCap: 4800000000 },
      { symbol: 'MKR-USD', price: 1850.00, change: -25.50, volume: 45000000, marketCap: 1700000000 },
      { symbol: 'CRV-USD', price: 0.85, change: 0.042, volume: 95000000, marketCap: 580000000 },
      { symbol: 'COMP-USD', price: 75.00, change: 2.20, volume: 35000000, marketCap: 520000000 },
      { symbol: 'SUSHI-USD', price: 1.20, change: -0.045, volume: 65000000, marketCap: 310000000 },
      { symbol: 'YFI-USD', price: 8500.00, change: 180.00, volume: 18000000, marketCap: 310000000 },
      { symbol: 'BAL-USD', price: 3.20, change: -0.08, volume: 25000000, marketCap: 210000000 },
      { symbol: 'SNX-USD', price: 2.80, change: 0.12, volume: 55000000, marketCap: 890000000 },
      { symbol: '1INCH-USD', price: 0.42, change: 0.018, volume: 45000000, marketCap: 420000000 },
      { symbol: 'LIDO-USD', price: 1.80, change: -0.065, volume: 85000000, marketCap: 1600000000 },
      
      // Layer 2 & Scaling
      { symbol: 'ARB-USD', price: 0.85, change: 0.038, volume: 280000000, marketCap: 3400000000 },
      { symbol: 'OP-USD', price: 2.40, change: 0.095, volume: 180000000, marketCap: 2400000000 },
      { symbol: 'LRC-USD', price: 0.18, change: -0.008, volume: 45000000, marketCap: 240000000 },
      { symbol: 'IMX-USD', price: 1.60, change: 0.065, volume: 85000000, marketCap: 2400000000 },
      
      // Meme Coins
      { symbol: 'DOGE-USD', price: 0.32, change: 0.015, volume: 1200000000, marketCap: 47000000000 },
      { symbol: 'SHIB-USD', price: 0.0000245, change: 0.0000012, volume: 850000000, marketCap: 14500000000 },
      { symbol: 'PEPE-USD', price: 0.0000185, change: -0.0000008, volume: 420000000, marketCap: 7800000000 },
      { symbol: 'BONK-USD', price: 0.000038, change: 0.0000018, volume: 280000000, marketCap: 2800000000 },
      { symbol: 'FLOKI-USD', price: 0.00022, change: -0.000012, volume: 180000000, marketCap: 2100000000 },
      
      // AI & Tech Tokens
      { symbol: 'FET-USD', price: 1.45, change: 0.068, volume: 120000000, marketCap: 1200000000 },
      { symbol: 'OCEAN-USD', price: 0.58, change: -0.025, volume: 85000000, marketCap: 420000000 },
      { symbol: 'AGIX-USD', price: 0.62, change: 0.028, volume: 65000000, marketCap: 780000000 },
      { symbol: 'RNDR-USD', price: 7.80, change: 0.32, volume: 95000000, marketCap: 4100000000 },
      { symbol: 'GRT-USD', price: 0.24, change: -0.012, volume: 180000000, marketCap: 2300000000 },
      
      // Gaming & Metaverse
      { symbol: 'AXS-USD', price: 6.20, change: -0.18, volume: 85000000, marketCap: 920000000 },
      { symbol: 'SAND-USD', price: 0.52, change: 0.022, volume: 120000000, marketCap: 1200000000 },
      { symbol: 'MANA-USD', price: 0.48, change: -0.018, volume: 95000000, marketCap: 890000000 },
      { symbol: 'ENJ-USD', price: 0.32, change: 0.015, volume: 55000000, marketCap: 320000000 },
      { symbol: 'CHZ-USD', price: 0.085, change: 0.004, volume: 85000000, marketCap: 760000000 },
      
      // Privacy Coins
      { symbol: 'XMR-USD', price: 185.00, change: -4.20, volume: 65000000, marketCap: 3400000000 },
      { symbol: 'ZEC-USD', price: 58.00, change: 1.80, volume: 35000000, marketCap: 920000000 },
      { symbol: 'DASH-USD', price: 45.00, change: -1.25, volume: 25000000, marketCap: 520000000 },
      
      // Enterprise & Utility
      { symbol: 'XTZ-USD', price: 0.95, change: 0.042, volume: 45000000, marketCap: 920000000 },
      { symbol: 'EOS-USD', price: 0.68, change: -0.025, volume: 85000000, marketCap: 780000000 },
      { symbol: 'IOTA-USD', price: 0.28, change: 0.012, volume: 35000000, marketCap: 780000000 },
      { symbol: 'NEO-USD', price: 15.50, change: 0.65, volume: 45000000, marketCap: 1100000000 },
      { symbol: 'QTUM-USD', price: 3.20, change: -0.085, volume: 25000000, marketCap: 340000000 },
      
      // Stablecoins & Wrapped Assets
      { symbol: 'USDC-USD', price: 1.00, change: 0.001, volume: 8500000000, marketCap: 38000000000 },
      { symbol: 'USDT-USD', price: 1.00, change: -0.001, volume: 42000000000, marketCap: 118000000000 },
      { symbol: 'DAI-USD', price: 1.00, change: 0.002, volume: 280000000, marketCap: 4200000000 },
      { symbol: 'WBTC-USD', price: 98400.00, change: 1180.50, volume: 450000000, marketCap: 15600000000 },
      
      // New & Trending
      { symbol: 'APT-USD', price: 9.80, change: 0.42, volume: 180000000, marketCap: 4200000000 },
      { symbol: 'SUI-USD', price: 4.20, change: 0.18, volume: 280000000, marketCap: 12000000000 },
      { symbol: 'SEI-USD', price: 0.48, change: -0.022, volume: 95000000, marketCap: 1600000000 },
      { symbol: 'WLD-USD', price: 2.80, change: 0.12, volume: 150000000, marketCap: 2800000000 },
      { symbol: 'INJ-USD', price: 28.00, change: 1.20, volume: 85000000, marketCap: 2700000000 }
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