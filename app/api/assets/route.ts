import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const type = searchParams.get('type') // stock, crypto, etf, etc.
    const marketCode = searchParams.get('market') // NYSE, NASD, etc.
    const search = searchParams.get('search') // symbol or name search
    const limit = parseInt(searchParams.get('limit') || '50')
    const includeQuotes = searchParams.get('quotes') === 'true'
    
    const where: Record<string, unknown> = { isActive: true }
    
    if (type) {
      where.type = type
    }
    
    if (marketCode) {
      where.market = { code: marketCode }
    }
    
    if (search) {
      where.OR = [
        { symbol: { contains: search, mode: 'insensitive' } },
        { name: { contains: search, mode: 'insensitive' } }
      ]
    }
    
    const assets = await prisma.asset.findMany({
      where,
      include: {
        market: true,
        quotes: includeQuotes ? {
          orderBy: { timestamp: 'desc' },
          take: 1 // Latest quote only
        } : false
      },
      orderBy: { symbol: 'asc' },
      take: limit
    })
    
    // Format response to include latest quote data at asset level
    const formattedAssets = assets.map(asset => {
      const latestQuote = asset.quotes?.[0]
      return {
        id: asset.id,
        symbol: asset.symbol,
        name: asset.name,
        type: asset.type,
        sector: asset.sector,
        industry: asset.industry,
        market: asset.market,
        price: latestQuote?.price || null,
        change: latestQuote?.change || null,
        changePercent: latestQuote?.changePercent || null,
        volume: latestQuote?.volume || null,
        marketCap: latestQuote?.marketCap || null,
        lastUpdated: latestQuote?.timestamp || null
      }
    })
    
    return NextResponse.json({ 
      assets: formattedAssets,
      count: formattedAssets.length 
    })
  } catch (error) {
    console.error('Assets API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch assets' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const asset = await prisma.asset.create({
      data: {
        symbol: data.symbol.toUpperCase(),
        name: data.name,
        type: data.type,
        marketId: data.marketId,
        sector: data.sector,
        industry: data.industry,
        description: data.description,
        website: data.website,
        logoUrl: data.logoUrl
      },
      include: {
        market: true
      }
    })
    
    return NextResponse.json(asset, { status: 201 })
  } catch (error) {
    console.error('Create asset error:', error)
    return NextResponse.json(
      { error: 'Failed to create asset' },
      { status: 500 }
    )
  }
}