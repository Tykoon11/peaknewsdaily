const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function generateQuotes() {
  console.log('🎲 Generating quotes for all stocks...');
  
  const stocks = await prisma.asset.findMany({
    where: { type: 'stock' },
    include: { quotes: true }
  });

  for (const stock of stocks) {
    if (stock.quotes.length === 0) {
      // Generate a random realistic price based on the stock
      let basePrice;
      if (['AAPL', 'MSFT', 'GOOGL', 'TSLA', 'META', 'NVDA'].includes(stock.symbol)) {
        basePrice = Math.random() * 800 + 100; // $100-$900
      } else if (stock.symbol.includes('BRK') || stock.symbol.includes('AVGO')) {
        basePrice = Math.random() * 1000 + 200; // $200-$1200
      } else if (['LLY', 'UNH'].includes(stock.symbol)) {
        basePrice = Math.random() * 600 + 200; // $200-$800
      } else {
        basePrice = Math.random() * 300 + 20; // $20-$320
      }
      
      const price = Math.round(basePrice * 100) / 100;
      const change = (Math.random() - 0.5) * price * 0.05; // ±5% change
      const volume = Math.floor(Math.random() * 10000000) + 100000; // 100k-10M volume
      const marketCap = price * (Math.random() * 5000000000 + 100000000); // Market cap calculation
      const pe = Math.random() * 50 + 5; // P/E ratio 5-55
      const dividendYield = Math.random() < 0.7 ? Math.random() * 5 : null; // 70% chance of dividend
      
      await prisma.quote.create({
        data: {
          assetId: stock.id,
          price: price.toString(),
          change: change.toString(),
          changePercent: ((change / price) * 100).toString(),
          volume: BigInt(volume),
          marketCap: BigInt(Math.floor(marketCap)),
          pe: pe.toString(),
          dividendYield: dividendYield ? dividendYield.toString() : null,
          timestamp: new Date()
        }
      });
      
      console.log(`✅ Created quote for ${stock.symbol}: $${price.toFixed(2)}`);
    }
  }
  
  console.log('✅ Quote generation completed!');
}

generateQuotes().catch(console.error).finally(() => prisma.$disconnect());