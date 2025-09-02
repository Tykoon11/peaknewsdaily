/**
 * Demo endpoint that provides mock live price data
 * Used for testing the live price system without Redis
 */

import { NextRequest, NextResponse } from 'next/server'

// Demo price data for testing
const DEMO_PRICES = {
  // Stocks
  'AAPL': { price: 232.14, changePct: 1.25 },
  'MSFT': { price: 506.69, changePct: -0.45 },
  'GOOGL': { price: 212.91, changePct: 0.78 },
  'AMZN': { price: 229.00, changePct: 2.10 },
  'TSLA': { price: 333.86, changePct: -1.55 },
  'META': { price: 738.70, changePct: 0.89 },
  'NVDA': { price: 174.11, changePct: 3.25 },
  'NFLX': { price: 1208.25, changePct: -0.32 },
  
  // Crypto
  'BTC-USD': { price: 98234.50, changePct: 2.34 },
  'ETH-USD': { price: 3823.45, changePct: -1.12 },
  'BNB-USD': { price: 723.89, changePct: 0.65 },
  'ADA-USD': { price: 1.23, changePct: 4.23 },
  'SOL-USD': { price: 234.56, changePct: -2.10 },
  'DOT-USD': { price: 12.45, changePct: 1.89 }
}

// Simulate price volatility
function simulatePriceMovement(basePrice: number, baseChangePct: number): { price: number; changePct: number } {
  // Add small random movement (±0.5%)
  const randomMovement = (Math.random() - 0.5) * 1.0 // ±0.5% movement
  const newChangePct = baseChangePct + randomMovement
  const newPrice = basePrice * (1 + newChangePct / 100)
  
  return {
    price: Number(newPrice.toFixed(2)),
    changePct: Number(newChangePct.toFixed(2))
  }
}

/**
 * GET /api/prices/demo?symbols=AAPL,MSFT,BTC-USD
 * Returns demo price data for testing
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const symbolsParam = searchParams.get('symbols') || ''
  const requestedSymbols = symbolsParam.split(',').filter(s => s.trim())
  
  if (requestedSymbols.length === 0) {
    return NextResponse.json({
      error: 'Missing symbols parameter. Use ?symbols=AAPL,MSFT,BTC-USD'
    }, { status: 400 })
  }
  
  const prices: Record<string, any> = {}
  
  requestedSymbols.forEach(symbol => {
    const demoData = DEMO_PRICES[symbol as keyof typeof DEMO_PRICES]
    if (demoData) {
      const liveData = simulatePriceMovement(demoData.price, demoData.changePct)
      prices[symbol] = {
        sym: symbol,
        price: liveData.price,
        changePct: liveData.changePct,
        ts: Date.now(),
        lastUpdate: Date.now(),
        // Add volatility score for crypto
        ...(symbol.includes('-USD') && { volScore: Math.random() })
      }
    } else {
      // Return zero data for unknown symbols
      prices[symbol] = {
        sym: symbol,
        price: 0,
        changePct: 0,
        ts: Date.now(),
        lastUpdate: Date.now()
      }
    }
  })
  
  return NextResponse.json({
    success: true,
    prices,
    timestamp: new Date().toISOString()
  })
}