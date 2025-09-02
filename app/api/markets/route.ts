import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const includeAssets = searchParams.get('include') === 'assets'
    
    const markets = await prisma.market.findMany({
      where: {
        isActive: true
      },
      include: {
        assets: includeAssets ? {
          where: { isActive: true },
          take: 10, // Limit to prevent huge payloads
          orderBy: { symbol: 'asc' }
        } : false
      },
      orderBy: { name: 'asc' }
    })
    
    return NextResponse.json({ 
      markets,
      count: markets.length 
    })
  } catch (error) {
    console.error('Markets API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch markets' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const market = await prisma.market.create({
      data: {
        name: data.name,
        code: data.code.toUpperCase(),
        country: data.country.toUpperCase(),
        timezone: data.timezone,
        currency: data.currency.toUpperCase(),
        openTime: data.openTime,
        closeTime: data.closeTime,
        status: data.status || 'closed'
      }
    })
    
    return NextResponse.json(market, { status: 201 })
  } catch (error) {
    console.error('Create market error:', error)
    return NextResponse.json(
      { error: 'Failed to create market' },
      { status: 500 }
    )
  }
}