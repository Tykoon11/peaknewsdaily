import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const country = searchParams.get('country')
    const impact = searchParams.get('impact') // high, medium, low
    const category = searchParams.get('category')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    const limit = parseInt(searchParams.get('limit') || '50')
    
    let where: any = {}
    
    if (country) {
      where.country = country.toUpperCase()
    }
    
    if (impact) {
      where.impact = impact.toLowerCase()
    }
    
    if (category) {
      where.category = { contains: category, mode: 'insensitive' }
    }
    
    // Date range filter
    if (startDate || endDate) {
      where.eventTime = {}
      if (startDate) {
        where.eventTime.gte = new Date(startDate)
      }
      if (endDate) {
        where.eventTime.lte = new Date(endDate)
      }
    } else {
      // Default to upcoming events in the next 30 days
      where.eventTime = {
        gte: new Date(),
        lte: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      }
    }
    
    const events = await prisma.economicEvent.findMany({
      where,
      orderBy: { eventTime: 'asc' },
      take: limit
    })
    
    // Format events with additional metadata
    const formattedEvents = events.map(event => ({
      id: event.id,
      country: event.country,
      currency: event.currency,
      title: event.title,
      description: event.description,
      impact: event.impact,
      category: event.category,
      actual: event.actual,
      forecast: event.forecast,
      previous: event.previous,
      unit: event.unit,
      eventTime: event.eventTime,
      timeUntilEvent: event.eventTime.getTime() - Date.now(),
      isPast: event.eventTime < new Date(),
      impactLevel: event.impact === 'high' ? 3 : event.impact === 'medium' ? 2 : 1
    }))
    
    return NextResponse.json({ 
      events: formattedEvents,
      count: formattedEvents.length,
      filters: {
        countries: [...new Set(events.map(e => e.country))],
        categories: [...new Set(events.map(e => e.category))],
        impacts: [...new Set(events.map(e => e.impact))]
      }
    })
  } catch (error) {
    console.error('Economic calendar API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch economic events' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const event = await prisma.economicEvent.create({
      data: {
        country: data.country.toUpperCase(),
        currency: data.currency.toUpperCase(),
        title: data.title,
        description: data.description,
        impact: data.impact.toLowerCase(),
        category: data.category,
        actual: data.actual,
        forecast: data.forecast,
        previous: data.previous,
        unit: data.unit,
        eventTime: new Date(data.eventTime)
      }
    })
    
    return NextResponse.json(event, { status: 201 })
  } catch (error) {
    console.error('Create economic event error:', error)
    return NextResponse.json(
      { error: 'Failed to create economic event' },
      { status: 500 }
    )
  }
}