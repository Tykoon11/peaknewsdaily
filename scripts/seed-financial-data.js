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
      // Magnificent Seven
      { symbol: 'AAPL', name: 'Apple Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Consumer Electronics' },
      { symbol: 'MSFT', name: 'Microsoft Corporation', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Software' },
      { symbol: 'GOOGL', name: 'Alphabet Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Internet' },
      { symbol: 'AMZN', name: 'Amazon.com Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Consumer Discretionary', industry: 'E-commerce' },
      { symbol: 'TSLA', name: 'Tesla Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Consumer Discretionary', industry: 'Electric Vehicles' },
      { symbol: 'NVDA', name: 'NVIDIA Corporation', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Semiconductors' },
      { symbol: 'META', name: 'Meta Platforms Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Social Media' },

      // Additional Major Tech Stocks
      { symbol: 'NFLX', name: 'Netflix Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Communication Services', industry: 'Streaming' },
      { symbol: 'CRM', name: 'Salesforce Inc.', type: 'stock', marketId: nyse.id, sector: 'Technology', industry: 'Software' },
      { symbol: 'ORCL', name: 'Oracle Corporation', type: 'stock', marketId: nyse.id, sector: 'Technology', industry: 'Database Software' },
      { symbol: 'ADBE', name: 'Adobe Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Software' },
      { symbol: 'INTC', name: 'Intel Corporation', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Semiconductors' },
      { symbol: 'AMD', name: 'Advanced Micro Devices Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Semiconductors' },
      { symbol: 'CSCO', name: 'Cisco Systems Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Networking' },
      { symbol: 'IBM', name: 'International Business Machines Corp.', type: 'stock', marketId: nyse.id, sector: 'Technology', industry: 'Software' },
      { symbol: 'TSM', name: 'Taiwan Semiconductor Manufacturing Co.', type: 'stock', marketId: nyse.id, sector: 'Technology', industry: 'Semiconductors' },
      { symbol: 'QCOM', name: 'Qualcomm Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Semiconductors' },
      { symbol: 'AVGO', name: 'Broadcom Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Semiconductors' },
      { symbol: 'TXN', name: 'Texas Instruments Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Semiconductors' },
      { symbol: 'MU', name: 'Micron Technology Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Memory Chips' },
      { symbol: 'LRCX', name: 'Lam Research Corp.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Semiconductor Equipment' },
      { symbol: 'AMAT', name: 'Applied Materials Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Semiconductor Equipment' },
      { symbol: 'PYPL', name: 'PayPal Holdings Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Financial Technology' },
      { symbol: 'UBER', name: 'Uber Technologies Inc.', type: 'stock', marketId: nyse.id, sector: 'Technology', industry: 'Ridesharing' },
      { symbol: 'SNAP', name: 'Snap Inc.', type: 'stock', marketId: nyse.id, sector: 'Technology', industry: 'Social Media' },
      { symbol: 'TWTR', name: 'Twitter Inc.', type: 'stock', marketId: nyse.id, sector: 'Technology', industry: 'Social Media' },
      { symbol: 'PINS', name: 'Pinterest Inc.', type: 'stock', marketId: nyse.id, sector: 'Technology', industry: 'Social Media' },
      { symbol: 'ZM', name: 'Zoom Video Communications Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Video Conferencing' },
      { symbol: 'DOCU', name: 'DocuSign Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Software' },
      { symbol: 'NOW', name: 'ServiceNow Inc.', type: 'stock', marketId: nyse.id, sector: 'Technology', industry: 'Software' },
      { symbol: 'WDAY', name: 'Workday Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Technology', industry: 'Software' },
      { symbol: 'SNOW', name: 'Snowflake Inc.', type: 'stock', marketId: nyse.id, sector: 'Technology', industry: 'Data Analytics' },
      { symbol: 'PLTR', name: 'Palantir Technologies Inc.', type: 'stock', marketId: nyse.id, sector: 'Technology', industry: 'Big Data' },
      { symbol: 'SQ', name: 'Block Inc.', type: 'stock', marketId: nyse.id, sector: 'Technology', industry: 'Financial Technology' },

      // Financial Sector - Major Banks
      { symbol: 'JPM', name: 'JPMorgan Chase & Co.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Investment Banking' },
      { symbol: 'BAC', name: 'Bank of America Corp.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Commercial Banking' },
      { symbol: 'WFC', name: 'Wells Fargo & Co.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Commercial Banking' },
      { symbol: 'GS', name: 'Goldman Sachs Group Inc.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Investment Banking' },
      { symbol: 'MS', name: 'Morgan Stanley', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Investment Banking' },
      { symbol: 'C', name: 'Citigroup Inc.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Commercial Banking' },
      { symbol: 'USB', name: 'U.S. Bancorp', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Commercial Banking' },
      { symbol: 'PNC', name: 'PNC Financial Services Group Inc.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Commercial Banking' },
      { symbol: 'TFC', name: 'Truist Financial Corp.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Commercial Banking' },
      { symbol: 'COF', name: 'Capital One Financial Corp.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Credit Cards' },
      { symbol: 'AXP', name: 'American Express Co.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Credit Cards' },
      { symbol: 'BK', name: 'Bank of New York Mellon Corp.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Asset Management' },
      { symbol: 'STT', name: 'State Street Corp.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Asset Management' },

      // Insurance & Financial Services
      { symbol: 'BRK.B', name: 'Berkshire Hathaway Inc.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Insurance' },
      { symbol: 'V', name: 'Visa Inc.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Payment Processing' },
      { symbol: 'MA', name: 'Mastercard Inc.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Payment Processing' },
      { symbol: 'AIG', name: 'American International Group Inc.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Insurance' },
      { symbol: 'PRU', name: 'Prudential Financial Inc.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Insurance' },
      { symbol: 'MET', name: 'MetLife Inc.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Insurance' },
      { symbol: 'ALL', name: 'Allstate Corp.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Insurance' },
      { symbol: 'PGR', name: 'Progressive Corp.', type: 'stock', marketId: nyse.id, sector: 'Financial', industry: 'Insurance' },

      // Healthcare & Pharmaceuticals
      { symbol: 'JNJ', name: 'Johnson & Johnson', type: 'stock', marketId: nyse.id, sector: 'Healthcare', industry: 'Pharmaceuticals' },
      { symbol: 'PFE', name: 'Pfizer Inc.', type: 'stock', marketId: nyse.id, sector: 'Healthcare', industry: 'Pharmaceuticals' },
      { symbol: 'UNH', name: 'UnitedHealth Group Inc.', type: 'stock', marketId: nyse.id, sector: 'Healthcare', industry: 'Health Insurance' },
      { symbol: 'ABBV', name: 'AbbVie Inc.', type: 'stock', marketId: nyse.id, sector: 'Healthcare', industry: 'Pharmaceuticals' },
      { symbol: 'MRK', name: 'Merck & Co. Inc.', type: 'stock', marketId: nyse.id, sector: 'Healthcare', industry: 'Pharmaceuticals' },
      { symbol: 'LLY', name: 'Eli Lilly and Co.', type: 'stock', marketId: nyse.id, sector: 'Healthcare', industry: 'Pharmaceuticals' },
      { symbol: 'BMY', name: 'Bristol Myers Squibb Co.', type: 'stock', marketId: nyse.id, sector: 'Healthcare', industry: 'Pharmaceuticals' },
      { symbol: 'AMGN', name: 'Amgen Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Healthcare', industry: 'Biotechnology' },
      { symbol: 'GILD', name: 'Gilead Sciences Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Healthcare', industry: 'Biotechnology' },
      { symbol: 'BIIB', name: 'Biogen Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Healthcare', industry: 'Biotechnology' },
      { symbol: 'CVS', name: 'CVS Health Corp.', type: 'stock', marketId: nyse.id, sector: 'Healthcare', industry: 'Healthcare Services' },
      { symbol: 'WBA', name: 'Walgreens Boots Alliance Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Healthcare', industry: 'Pharmacy' },
      { symbol: 'CI', name: 'Cigna Corp.', type: 'stock', marketId: nyse.id, sector: 'Healthcare', industry: 'Health Insurance' },
      { symbol: 'HUM', name: 'Humana Inc.', type: 'stock', marketId: nyse.id, sector: 'Healthcare', industry: 'Health Insurance' },
      { symbol: 'ANTM', name: 'Anthem Inc.', type: 'stock', marketId: nyse.id, sector: 'Healthcare', industry: 'Health Insurance' },

      // Consumer & Retail
      { symbol: 'WMT', name: 'Walmart Inc.', type: 'stock', marketId: nyse.id, sector: 'Consumer Staples', industry: 'Discount Stores' },
      { symbol: 'HD', name: 'Home Depot Inc.', type: 'stock', marketId: nyse.id, sector: 'Consumer Discretionary', industry: 'Home Improvement' },
      { symbol: 'PG', name: 'Procter & Gamble Co.', type: 'stock', marketId: nyse.id, sector: 'Consumer Staples', industry: 'Household Products' },
      { symbol: 'KO', name: 'Coca-Cola Co.', type: 'stock', marketId: nyse.id, sector: 'Consumer Staples', industry: 'Beverages' },
      { symbol: 'PEP', name: 'PepsiCo Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Consumer Staples', industry: 'Beverages' },
      { symbol: 'MCD', name: 'McDonald\'s Corp.', type: 'stock', marketId: nyse.id, sector: 'Consumer Discretionary', industry: 'Restaurants' },
      { symbol: 'SBUX', name: 'Starbucks Corp.', type: 'stock', marketId: nasdaq.id, sector: 'Consumer Discretionary', industry: 'Restaurants' },
      { symbol: 'NKE', name: 'Nike Inc.', type: 'stock', marketId: nyse.id, sector: 'Consumer Discretionary', industry: 'Footwear' },
      { symbol: 'LOW', name: 'Lowe\'s Companies Inc.', type: 'stock', marketId: nyse.id, sector: 'Consumer Discretionary', industry: 'Home Improvement' },
      { symbol: 'TGT', name: 'Target Corp.', type: 'stock', marketId: nyse.id, sector: 'Consumer Discretionary', industry: 'Discount Stores' },
      { symbol: 'COST', name: 'Costco Wholesale Corp.', type: 'stock', marketId: nasdaq.id, sector: 'Consumer Staples', industry: 'Warehouse Clubs' },
      { symbol: 'DIS', name: 'Walt Disney Co.', type: 'stock', marketId: nyse.id, sector: 'Communication Services', industry: 'Entertainment' },

      // Energy & Utilities
      { symbol: 'XOM', name: 'Exxon Mobil Corp.', type: 'stock', marketId: nyse.id, sector: 'Energy', industry: 'Oil & Gas' },
      { symbol: 'CVX', name: 'Chevron Corp.', type: 'stock', marketId: nyse.id, sector: 'Energy', industry: 'Oil & Gas' },
      { symbol: 'COP', name: 'ConocoPhillips', type: 'stock', marketId: nyse.id, sector: 'Energy', industry: 'Oil & Gas' },
      { symbol: 'EOG', name: 'EOG Resources Inc.', type: 'stock', marketId: nyse.id, sector: 'Energy', industry: 'Oil & Gas' },
      { symbol: 'SLB', name: 'Schlumberger Ltd.', type: 'stock', marketId: nyse.id, sector: 'Energy', industry: 'Oil Services' },
      { symbol: 'PSX', name: 'Phillips 66', type: 'stock', marketId: nyse.id, sector: 'Energy', industry: 'Oil Refining' },
      { symbol: 'VLO', name: 'Valero Energy Corp.', type: 'stock', marketId: nyse.id, sector: 'Energy', industry: 'Oil Refining' },
      { symbol: 'NEE', name: 'NextEra Energy Inc.', type: 'stock', marketId: nyse.id, sector: 'Utilities', industry: 'Electric Utilities' },
      { symbol: 'D', name: 'Dominion Energy Inc.', type: 'stock', marketId: nyse.id, sector: 'Utilities', industry: 'Electric Utilities' },
      { symbol: 'SO', name: 'Southern Co.', type: 'stock', marketId: nyse.id, sector: 'Utilities', industry: 'Electric Utilities' },

      // Industrial & Materials
      { symbol: 'BA', name: 'Boeing Co.', type: 'stock', marketId: nyse.id, sector: 'Industrial', industry: 'Aerospace' },
      { symbol: 'HON', name: 'Honeywell International Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Industrial', industry: 'Conglomerates' },
      { symbol: 'UPS', name: 'United Parcel Service Inc.', type: 'stock', marketId: nyse.id, sector: 'Industrial', industry: 'Package Delivery' },
      { symbol: 'FDX', name: 'FedEx Corp.', type: 'stock', marketId: nyse.id, sector: 'Industrial', industry: 'Package Delivery' },
      { symbol: 'CAT', name: 'Caterpillar Inc.', type: 'stock', marketId: nyse.id, sector: 'Industrial', industry: 'Construction Equipment' },
      { symbol: 'DE', name: 'Deere & Co.', type: 'stock', marketId: nyse.id, sector: 'Industrial', industry: 'Agricultural Equipment' },
      { symbol: 'GE', name: 'General Electric Co.', type: 'stock', marketId: nyse.id, sector: 'Industrial', industry: 'Conglomerates' },
      { symbol: '3M', name: '3M Co.', type: 'stock', marketId: nyse.id, sector: 'Industrial', industry: 'Diversified Industrials' },

      // Real Estate & REITs
      { symbol: 'AMT', name: 'American Tower Corp.', type: 'stock', marketId: nyse.id, sector: 'Real Estate', industry: 'Cell Tower REITs' },
      { symbol: 'PLD', name: 'Prologis Inc.', type: 'stock', marketId: nyse.id, sector: 'Real Estate', industry: 'Industrial REITs' },
      { symbol: 'CCI', name: 'Crown Castle Inc.', type: 'stock', marketId: nyse.id, sector: 'Real Estate', industry: 'Cell Tower REITs' },
      { symbol: 'EQIX', name: 'Equinix Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Real Estate', industry: 'Data Center REITs' },
      { symbol: 'SPG', name: 'Simon Property Group Inc.', type: 'stock', marketId: nyse.id, sector: 'Real Estate', industry: 'Retail REITs' },
      { symbol: 'AVB', name: 'AvalonBay Communities Inc.', type: 'stock', marketId: nyse.id, sector: 'Real Estate', industry: 'Residential REITs' },

      // Telecom
      { symbol: 'VZ', name: 'Verizon Communications Inc.', type: 'stock', marketId: nyse.id, sector: 'Communication Services', industry: 'Wireless Telecom' },
      { symbol: 'T', name: 'AT&T Inc.', type: 'stock', marketId: nyse.id, sector: 'Communication Services', industry: 'Wireless Telecom' },
      { symbol: 'TMUS', name: 'T-Mobile US Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Communication Services', industry: 'Wireless Telecom' },
      { symbol: 'CHTR', name: 'Charter Communications Inc.', type: 'stock', marketId: nasdaq.id, sector: 'Communication Services', industry: 'Cable & Satellite' },
      { symbol: 'CMCSA', name: 'Comcast Corp.', type: 'stock', marketId: nasdaq.id, sector: 'Communication Services', industry: 'Cable & Satellite' },
      
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

    // Create comprehensive economic events for the next 30 days
    const now = new Date()
    const economicEvents = [
      // This Week - High Impact Events
      {
        country: 'US',
        currency: 'USD',
        title: 'Non-Farm Payrolls (NFP)',
        description: 'Monthly employment change - the premier gauge of job growth',
        impact: 'high',
        category: 'Employment',
        forecast: '180K',
        previous: '175K',
        actual: '195K',
        unit: '',
        eventTime: new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000 + 8.5 * 60 * 60 * 1000) // Tomorrow 8:30 AM EST
      },
      {
        country: 'US',
        currency: 'USD',
        title: 'Unemployment Rate',
        description: 'Percentage of unemployed workers in the labor force',
        impact: 'high',
        category: 'Employment',
        forecast: '4.1%',
        previous: '4.2%',
        actual: '4.0%',
        unit: '%',
        eventTime: new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000 + 8.5 * 60 * 60 * 1000) // Same time as NFP
      },
      {
        country: 'US',
        currency: 'USD',
        title: 'Consumer Price Index (CPI)',
        description: 'Primary gauge of consumer inflation',
        impact: 'high',
        category: 'Inflation',
        forecast: '2.4%',
        previous: '2.6%',
        unit: '%',
        eventTime: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000 + 8.5 * 60 * 60 * 1000) // In 3 days
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
        eventTime: new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000) // In 5 days at 2:00 PM EST
      },
      {
        country: 'US',
        currency: 'USD',
        title: 'FOMC Press Conference',
        description: 'Fed Chair Powell speaks after interest rate decision',
        impact: 'high',
        category: 'Central Bank',
        forecast: '',
        previous: '',
        unit: '',
        eventTime: new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000 + 14.5 * 60 * 60 * 1000) // 30 min after rate decision
      },

      // European Events
      {
        country: 'EU',
        currency: 'EUR',
        title: 'European Central Bank Interest Rate Decision',
        description: 'ECB monetary policy decision',
        impact: 'high',
        category: 'Monetary Policy',
        forecast: '4.25%',
        previous: '4.25%',
        unit: '%',
        eventTime: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000 + 12.45 * 60 * 60 * 1000) // Next week Thursday
      },
      {
        country: 'DE',
        currency: 'EUR',
        title: 'German GDP (Preliminary)',
        description: 'Quarterly economic growth rate',
        impact: 'high',
        category: 'GDP',
        forecast: '0.2%',
        previous: '0.1%',
        unit: '%',
        eventTime: new Date(now.getTime() + 8 * 24 * 60 * 60 * 1000 + 7 * 60 * 60 * 1000) // Next Friday
      },
      {
        country: 'GB',
        currency: 'GBP',
        title: 'Bank of England Interest Rate Decision',
        description: 'BoE monetary policy committee decision',
        impact: 'high',
        category: 'Monetary Policy',
        forecast: '4.75%',
        previous: '4.75%',
        unit: '%',
        eventTime: new Date(now.getTime() + 9 * 24 * 60 * 60 * 1000 + 12 * 60 * 60 * 1000) // Next week
      },

      // Asian Markets
      {
        country: 'JP',
        currency: 'JPY',
        title: 'Bank of Japan Interest Rate Decision',
        description: 'BoJ monetary policy statement',
        impact: 'high',
        category: 'Monetary Policy',
        forecast: '0.25%',
        previous: '0.25%',
        unit: '%',
        eventTime: new Date(now.getTime() + 12 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000) // In 12 days
      },
      {
        country: 'CN',
        currency: 'CNY',
        title: 'Chinese GDP (Quarterly)',
        description: 'Quarterly gross domestic product growth',
        impact: 'high',
        category: 'GDP',
        forecast: '4.8%',
        previous: '4.6%',
        unit: '%',
        eventTime: new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000) // In 2 weeks
      },

      // Medium Impact Events
      {
        country: 'US',
        currency: 'USD',
        title: 'Producer Price Index (PPI)',
        description: 'Inflation measure from perspective of sellers',
        impact: 'medium',
        category: 'Inflation',
        forecast: '2.2%',
        previous: '2.4%',
        unit: '%',
        eventTime: new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000 + 8.5 * 60 * 60 * 1000) // Day after tomorrow
      },
      {
        country: 'US',
        currency: 'USD',
        title: 'Initial Jobless Claims',
        description: 'Weekly unemployment insurance claims',
        impact: 'medium',
        category: 'Employment',
        forecast: '230K',
        previous: '225K',
        unit: '',
        eventTime: new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000 + 8.5 * 60 * 60 * 1000) // In 4 days
      },
      {
        country: 'US',
        currency: 'USD',
        title: 'Retail Sales',
        description: 'Monthly change in retail sales',
        impact: 'medium',
        category: 'Consumer',
        forecast: '0.3%',
        previous: '0.4%',
        unit: '%',
        eventTime: new Date(now.getTime() + 6 * 24 * 60 * 60 * 1000 + 8.5 * 60 * 60 * 1000) // In 6 days
      },
      {
        country: 'US',
        currency: 'USD',
        title: 'Industrial Production',
        description: 'Monthly change in industrial output',
        impact: 'medium',
        category: 'Manufacturing',
        forecast: '0.2%',
        previous: '0.1%',
        unit: '%',
        eventTime: new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000 + 9.15 * 60 * 60 * 1000) // In 10 days
      },
      {
        country: 'US',
        currency: 'USD',
        title: 'Housing Starts',
        description: 'Number of new residential construction projects',
        impact: 'medium',
        category: 'Housing',
        forecast: '1.35M',
        previous: '1.33M',
        unit: '',
        eventTime: new Date(now.getTime() + 11 * 24 * 60 * 60 * 1000 + 8.5 * 60 * 60 * 1000) // In 11 days
      },

      // European Medium Impact
      {
        country: 'EU',
        currency: 'EUR',
        title: 'Eurozone CPI (Final)',
        description: 'Final consumer price index reading',
        impact: 'medium',
        category: 'Inflation',
        forecast: '1.8%',
        previous: '1.8%',
        unit: '%',
        eventTime: new Date(now.getTime() + 13 * 24 * 60 * 60 * 1000 + 10 * 60 * 60 * 1000) // In 13 days
      },
      {
        country: 'GB',
        currency: 'GBP',
        title: 'UK CPI',
        description: 'Consumer price index inflation rate',
        impact: 'medium',
        category: 'Inflation',
        forecast: '2.1%',
        previous: '2.3%',
        unit: '%',
        eventTime: new Date(now.getTime() + 15 * 24 * 60 * 60 * 1000 + 7 * 60 * 60 * 1000) // In 15 days
      },
      {
        country: 'DE',
        currency: 'EUR',
        title: 'German IFO Business Climate',
        description: 'Business confidence survey',
        impact: 'medium',
        category: 'Business',
        forecast: '87.5',
        previous: '86.9',
        unit: '',
        eventTime: new Date(now.getTime() + 16 * 24 * 60 * 60 * 1000 + 9 * 60 * 60 * 1000) // In 16 days
      },

      // Canadian Events
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
        eventTime: new Date(now.getTime() + 18 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000) // In 18 days
      },
      {
        country: 'CA',
        currency: 'CAD',
        title: 'Canadian CPI',
        description: 'Consumer price index inflation rate',
        impact: 'medium',
        category: 'Inflation',
        forecast: '2.0%',
        previous: '2.2%',
        unit: '%',
        eventTime: new Date(now.getTime() + 20 * 24 * 60 * 60 * 1000 + 8.5 * 60 * 60 * 1000) // In 20 days
      },

      // Australian Events
      {
        country: 'AU',
        currency: 'AUD',
        title: 'Reserve Bank of Australia Rate Decision',
        description: 'RBA monetary policy decision',
        impact: 'high',
        category: 'Monetary Policy',
        forecast: '4.35%',
        previous: '4.35%',
        unit: '%',
        eventTime: new Date(now.getTime() + 21 * 24 * 60 * 60 * 1000 + 4.5 * 60 * 60 * 1000) // In 21 days
      },
      {
        country: 'AU',
        currency: 'AUD',
        title: 'Australian Employment Change',
        description: 'Monthly change in employment',
        impact: 'medium',
        category: 'Employment',
        forecast: '25K',
        previous: '28K',
        unit: '',
        eventTime: new Date(now.getTime() + 22 * 24 * 60 * 60 * 1000 + 0.5 * 60 * 60 * 1000) // In 22 days
      },

      // Low Impact Events
      {
        country: 'US',
        currency: 'USD',
        title: 'Building Permits',
        description: 'Number of building permits issued',
        impact: 'low',
        category: 'Housing',
        forecast: '1.42M',
        previous: '1.40M',
        unit: '',
        eventTime: new Date(now.getTime() + 17 * 24 * 60 * 60 * 1000 + 8.5 * 60 * 60 * 1000) // In 17 days
      },
      {
        country: 'US',
        currency: 'USD',
        title: 'Consumer Confidence',
        description: 'Conference Board consumer confidence index',
        impact: 'low',
        category: 'Consumer',
        forecast: '105.5',
        previous: '104.7',
        unit: '',
        eventTime: new Date(now.getTime() + 19 * 24 * 60 * 60 * 1000 + 10 * 60 * 60 * 1000) // In 19 days
      },
      {
        country: 'US',
        currency: 'USD',
        title: 'Durable Goods Orders',
        description: 'Monthly change in durable goods orders',
        impact: 'low',
        category: 'Manufacturing',
        forecast: '0.5%',
        previous: '0.8%',
        unit: '%',
        eventTime: new Date(now.getTime() + 23 * 24 * 60 * 60 * 1000 + 8.5 * 60 * 60 * 1000) // In 23 days
      },
      {
        country: 'US',
        currency: 'USD',
        title: 'Pending Home Sales',
        description: 'Monthly change in pending home sales',
        impact: 'low',
        category: 'Housing',
        forecast: '1.2%',
        previous: '0.8%',
        unit: '%',
        eventTime: new Date(now.getTime() + 25 * 24 * 60 * 60 * 1000 + 10 * 60 * 60 * 1000) // In 25 days
      },

      // Additional Global Events
      {
        country: 'CH',
        currency: 'CHF',
        title: 'Swiss National Bank Rate Decision',
        description: 'SNB monetary policy assessment',
        impact: 'medium',
        category: 'Monetary Policy',
        forecast: '1.25%',
        previous: '1.25%',
        unit: '%',
        eventTime: new Date(now.getTime() + 26 * 24 * 60 * 60 * 1000 + 9.5 * 60 * 60 * 1000) // In 26 days
      },
      {
        country: 'NZ',
        currency: 'NZD',
        title: 'Reserve Bank of New Zealand Rate Decision',
        description: 'RBNZ official cash rate decision',
        impact: 'medium',
        category: 'Monetary Policy',
        forecast: '5.50%',
        previous: '5.50%',
        unit: '%',
        eventTime: new Date(now.getTime() + 28 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000) // In 28 days
      },
      {
        country: 'BR',
        currency: 'BRL',
        title: 'Brazilian Central Bank Rate Decision',
        description: 'Banco Central do Brasil SELIC rate decision',
        impact: 'medium',
        category: 'Monetary Policy',
        forecast: '12.25%',
        previous: '12.25%',
        unit: '%',
        eventTime: new Date(now.getTime() + 29 * 24 * 60 * 60 * 1000 + 18 * 60 * 60 * 1000) // In 29 days
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