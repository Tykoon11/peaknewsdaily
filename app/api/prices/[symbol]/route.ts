import { NextRequest, NextResponse } from 'next/server'
const { getPrice } = require('@/lib/financial-data')

export async function GET(
  request: NextRequest,
  { params }: { params: { symbol: string } }
) {
  try {
    const { symbol } = params
    
    if (!symbol) {
      return NextResponse.json(
        { error: 'Symbol is required' },
        { status: 400 }
      )
    }

    const priceData = await getPrice(symbol.toUpperCase())
    
    if (!priceData) {
      return NextResponse.json(
        { error: 'Price data not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      symbol: priceData.symbol,
      price: priceData.price,
      change: priceData.change,
      changePercent: priceData.changePercent,
      volume: priceData.volume,
      marketCap: priceData.marketCap,
      timestamp: priceData.timestamp,
      marketState: priceData.marketState
    })
    
  } catch (error) {
    console.error(`❌ Error fetching price for ${params.symbol}:`, error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}