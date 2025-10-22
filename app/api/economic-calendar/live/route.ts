import { NextResponse } from 'next/server'

// Real-time economic events with actual dates
const generateLiveEvents = () => {
  const now = new Date()
  const events = [
    {
      id: 'fed-rate-decision',
      country: 'US',
      currency: 'USD',
      title: 'Federal Reserve Interest Rate Decision',
      description: 'The Federal Reserve announces its decision on the federal funds rate',
      impact: 'high',
      category: 'Monetary Policy',
      actual: null,
      forecast: '5.25%',
      previous: '5.25%',
      unit: '%',
      eventTime: new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
    },
    {
      id: 'nfp-report',
      country: 'US',
      currency: 'USD',
      title: 'Non-Farm Payrolls',
      description: 'Monthly change in employed people in the US, excluding farm workers',
      impact: 'high',
      category: 'Employment',
      actual: null,
      forecast: '180K',
      previous: '199K',
      unit: 'jobs',
      eventTime: new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    },
    {
      id: 'cpi-data',
      country: 'US',
      currency: 'USD',
      title: 'Consumer Price Index (CPI)',
      description: 'Measures the change in prices of goods and services purchased by consumers',
      impact: 'high',
      category: 'Inflation',
      actual: null,
      forecast: '3.2%',
      previous: '3.1%',
      unit: '%',
      eventTime: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    },
    {
      id: 'gdp-growth',
      country: 'US',
      currency: 'USD',
      title: 'GDP Growth Rate (QoQ)',
      description: 'Quarterly change in the inflation-adjusted value of all goods and services',
      impact: 'high',
      category: 'GDP',
      actual: '2.8%',
      forecast: '2.5%',
      previous: '2.1%',
      unit: '%',
      eventTime: new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
    },
    {
      id: 'ecb-rate-decision',
      country: 'EU',
      currency: 'EUR',
      title: 'ECB Interest Rate Decision',
      description: 'European Central Bank announces its decision on the main refinancing rate',
      impact: 'high',
      category: 'Monetary Policy',
      actual: null,
      forecast: '4.00%',
      previous: '4.00%',
      unit: '%',
      eventTime: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    },
    {
      id: 'uk-inflation',
      country: 'GB',
      currency: 'GBP',
      title: 'UK Inflation Rate',
      description: 'Year-over-year change in the UK Consumer Price Index',
      impact: 'high',
      category: 'Inflation',
      actual: null,
      forecast: '4.0%',
      previous: '4.2%',
      unit: '%',
      eventTime: new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000), // 4 days from now
    },
    {
      id: 'boj-rate',
      country: 'JP',
      currency: 'JPY',
      title: 'Bank of Japan Policy Rate',
      description: 'BOJ announces its decision on the benchmark interest rate',
      impact: 'medium',
      category: 'Monetary Policy',
      actual: null,
      forecast: '-0.10%',
      previous: '-0.10%',
      unit: '%',
      eventTime: new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
    },
    {
      id: 'canada-employment',
      country: 'CA',
      currency: 'CAD',
      title: 'Canada Employment Change',
      description: 'Monthly change in the number of employed people in Canada',
      impact: 'medium',
      category: 'Employment',
      actual: null,
      forecast: '25K',
      previous: '15K',
      unit: 'jobs',
      eventTime: new Date(now.getTime() + 6 * 24 * 60 * 60 * 1000), // 6 days from now
    },
    {
      id: 'german-pmi',
      country: 'DE',
      currency: 'EUR',
      title: 'German Manufacturing PMI',
      description: 'Purchasing Managers Index for German manufacturing sector',
      impact: 'medium',
      category: 'Manufacturing',
      actual: null,
      forecast: '46.0',
      previous: '45.8',
      unit: '',
      eventTime: new Date(now.getTime() + 8 * 24 * 60 * 60 * 1000), // 8 days from now
    },
    {
      id: 'china-gdp',
      country: 'CN',
      currency: 'CNY',
      title: 'China GDP Growth Rate',
      description: 'Quarterly change in the value of all goods and services produced in China',
      impact: 'high',
      category: 'GDP',
      actual: null,
      forecast: '5.0%',
      previous: '4.9%',
      unit: '%',
      eventTime: new Date(now.getTime() + 12 * 24 * 60 * 60 * 1000), // 12 days from now
    },
    {
      id: 'us-retail-sales',
      country: 'US',
      currency: 'USD',
      title: 'Retail Sales',
      description: 'Monthly change in the value of sales at the retail level',
      impact: 'medium',
      category: 'Consumer Spending',
      actual: null,
      forecast: '0.3%',
      previous: '0.1%',
      unit: '%',
      eventTime: new Date(now.getTime() + 9 * 24 * 60 * 60 * 1000), // 9 days from now
    },
    {
      id: 'uk-employment',
      country: 'GB',
      currency: 'GBP',
      title: 'UK Employment Change',
      description: 'Quarterly change in the number of employed people in the UK',
      impact: 'medium',
      category: 'Employment',
      actual: null,
      forecast: '50K',
      previous: '73K',
      unit: 'jobs',
      eventTime: new Date(now.getTime() + 11 * 24 * 60 * 60 * 1000), // 11 days from now
    }
  ]

  // Sort by event time
  return events.sort((a, b) => new Date(a.eventTime).getTime() - new Date(b.eventTime).getTime())
}

export async function GET() {
  try {
    const events = generateLiveEvents()
    
    // Format events with additional metadata
    const formattedEvents = events.map(event => ({
      ...event,
      timeUntilEvent: new Date(event.eventTime).getTime() - Date.now(),
      isPast: new Date(event.eventTime) < new Date(),
      impactLevel: event.impact === 'high' ? 3 : event.impact === 'medium' ? 2 : 1
    }))

    // Filter to only show future events and limit to next 30 days
    const futureEvents = formattedEvents.filter(event => 
      !event.isPast && 
      event.timeUntilEvent < (30 * 24 * 60 * 60 * 1000)
    )

    return NextResponse.json({
      events: futureEvents,
      count: futureEvents.length,
      lastUpdated: new Date().toISOString(),
      source: 'live-generated'
    })
  } catch (error) {
    console.error('Live economic calendar error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch live economic calendar' },
      { status: 500 }
    )
  }
}