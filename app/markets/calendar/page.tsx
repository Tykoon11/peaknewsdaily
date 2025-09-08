import React from 'react';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Economic Calendar 2025 - Live Economic Events & Market Data | PeakNewsDaily',
  description: 'Stay ahead with our comprehensive economic calendar. Track real-time economic events, central bank meetings, GDP releases, employment data, and inflation reports that move global markets.',
  keywords: 'economic calendar, forex calendar, economic events 2025, central bank meetings, GDP reports, employment data, inflation news, market events, trading calendar, financial calendar, economic indicators, market volatility, Fed meetings, ECB meetings, BOJ meetings',
  openGraph: {
    title: 'Economic Calendar 2025 - Live Economic Events & Market Data',
    description: 'Professional economic calendar with real-time events, market impact analysis, and trading alerts. Track GDP, employment, inflation, and central bank decisions.',
    type: 'website',
    url: 'https://peaknewsdaily.com/markets/calendar',
    images: [
      {
        url: '/og-economic-calendar.jpg',
        width: 1200,
        height: 630,
        alt: 'Economic Calendar 2025 - Market Events & Trading Data',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Economic Calendar 2025 - Live Economic Events',
    description: 'Professional economic calendar with real-time market events, GDP reports, employment data, and central bank meetings.',
    images: ['/og-economic-calendar.jpg'],
  },
  alternates: {
    canonical: 'https://peaknewsdaily.com/markets/calendar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const revalidate = 180;

interface EconomicEvent {
  id: string
  country: string
  currency: string
  title: string
  description?: string | null
  impact: string
  category: string
  actual?: string | null
  forecast?: string | null
  previous?: string | null
  unit?: string | null
  eventTime: Date
}

export default async function EconomicCalendarPage() {
  // Fetch upcoming events for the next 30 days
  const upcomingEvents = await prisma.economicEvent.findMany({
    where: {
      eventTime: {
        gte: new Date(),
        lte: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      }
    },
    orderBy: { eventTime: 'asc' },
    take: 100
  })

  // Fetch recent events with actual data (last 7 days)
  const recentEvents = await prisma.economicEvent.findMany({
    where: {
      eventTime: {
        gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        lt: new Date()
      },
      actual: { not: null }
    },
    orderBy: { eventTime: 'desc' },
    take: 20
  })

  // Get today's events
  const todayStart = new Date()
  todayStart.setHours(0, 0, 0, 0)
  const todayEnd = new Date()
  todayEnd.setHours(23, 59, 59, 999)
  
  const todaysEvents = upcomingEvents.filter(event => 
    event.eventTime >= todayStart && event.eventTime <= todayEnd
  )

  // Get high impact events for the week
  const weekStart = new Date()
  weekStart.setDate(weekStart.getDate() - weekStart.getDay())
  const weekEnd = new Date()
  weekEnd.setDate(weekEnd.getDate() + (6 - weekEnd.getDay()))
  
  const highImpactEvents = upcomingEvents.filter(event => 
    event.impact.toLowerCase() === 'high' &&
    event.eventTime >= weekStart && 
    event.eventTime <= weekEnd
  )

  const formatEventTime = (eventTime: Date) => {
    const now = new Date()
    const isToday = eventTime.toDateString() === now.toDateString()
    const isTomorrow = eventTime.toDateString() === new Date(now.getTime() + 24 * 60 * 60 * 1000).toDateString()
    
    if (isToday) {
      return {
        date: 'Today',
        time: eventTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      }
    } else if (isTomorrow) {
      return {
        date: 'Tomorrow',
        time: eventTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      }
    } else {
      return {
        date: eventTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        time: eventTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      }
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case 'high': return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200', dot: 'bg-red-500' }
      case 'medium': return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200', dot: 'bg-yellow-500' }
      case 'low': return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200', dot: 'bg-green-500' }
      default: return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-200', dot: 'bg-gray-500' }
    }
  }

  const getCountryFlag = (country: string) => {
    const flags: { [key: string]: string } = {
      'US': '🇺🇸',
      'EU': '🇪🇺', 
      'EUR': '🇪🇺',
      'GB': '🇬🇧',
      'UK': '🇬🇧',
      'JP': '🇯🇵',
      'JPY': '🇯🇵',
      'DE': '🇩🇪',
      'CA': '🇨🇦',
      'CAD': '🇨🇦',
      'AU': '🇦🇺',
      'AUD': '🇦🇺',
      'CH': '🇨🇭',
      'CHF': '🇨🇭',
      'CN': '🇨🇳',
      'CNY': '🇨🇳',
      'NZ': '🇳🇿',
      'NZD': '🇳🇿',
      'FR': '🇫🇷',
      'IT': '🇮🇹',
      'ES': '🇪🇸',
      'BR': '🇧🇷',
      'IN': '🇮🇳',
      'KR': '🇰🇷',
      'SG': '🇸🇬',
      'HK': '🇭🇰',
      'MX': '🇲🇽',
      'RU': '🇷🇺',
      'ZA': '🇿🇦'
    }
    return flags[country.toUpperCase()] || '🌐'
  }

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Employment': '👥',
      'Inflation': '📈',
      'GDP': '📊',
      'Monetary Policy': '🏛️',
      'Central Bank': '🏦',
      'Interest Rate': '💰',
      'Trade': '🌐',
      'Manufacturing': '🏭',
      'Consumer': '🛒',
      'Housing': '🏠',
      'Business': '💼',
      'Government': '🏛️',
      'Energy': '⚡',
      'Retail': '🏪',
      'Services': '🔧',
      'Construction': '🏗️'
    }
    return icons[category] || '📋'
  }

  const getImpactSeverity = (actual: string | null, forecast: string | null, previous: string | null) => {
    if (!actual || !forecast) return 'neutral'
    
    const actualNum = parseFloat(actual.replace(/[%$,]/g, ''))
    const forecastNum = parseFloat(forecast.replace(/[%$,]/g, ''))
    const deviation = Math.abs(actualNum - forecastNum)
    
    if (deviation > forecastNum * 0.1) return 'high'
    if (deviation > forecastNum * 0.05) return 'medium'
    return 'low'
  }

  // Group events by date  
  const eventsByDate = upcomingEvents.reduce((acc, event) => {
    const dateKey = event.eventTime.toDateString()
    if (!acc[dateKey]) {
      acc[dateKey] = []
    }
    acc[dateKey].push(event)
    return acc
  }, {} as { [key: string]: EconomicEvent[] })

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Economic Calendar 2025",
    "description": "Professional economic calendar with real-time economic events, central bank meetings, GDP releases, employment data, and market-moving announcements.",
    "url": "https://peaknewsdaily.com/markets/calendar",
    "mainEntity": {
      "@type": "DataFeed",
      "name": "Economic Events Calendar",
      "description": "Live economic events and market data",
      "dataFeedElement": upcomingEvents.slice(0, 10).map(event => ({
        "@type": "DataFeedItem",
        "name": event.title,
        "text": event.description,
        "datePublished": event.eventTime.toISOString(),
        "about": {
          "@type": "Country",
          "name": event.country
        }
      }))
    },
    "provider": {
      "@type": "Organization",
      "name": "PeakNewsDaily",
      "url": "https://peaknewsdaily.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://peaknewsdaily.com"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Markets",
          "item": "https://peaknewsdaily.com/markets"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Economic Calendar",
          "item": "https://peaknewsdaily.com/markets/calendar"
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Economic Calendar 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Stay ahead of global markets with our comprehensive economic calendar. 
              Track central bank meetings, GDP releases, employment data, and market-moving events in real-time.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-800 px-4 py-2 rounded-full">📈 Real-time Events</span>
              <span className="bg-purple-800 px-4 py-2 rounded-full">🏛️ Central Bank Meetings</span>
              <span className="bg-indigo-800 px-4 py-2 rounded-full">📊 Market Impact Analysis</span>
              <span className="bg-blue-700 px-4 py-2 rounded-full">🌍 Global Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Market Summary Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{todaysEvents.length}</div>
              <div className="text-sm text-gray-600">Today's Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{highImpactEvents.length}</div>
              <div className="text-sm text-gray-600">High Impact This Week</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">{upcomingEvents.length}</div>
              <div className="text-sm text-gray-600">Upcoming Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{recentEvents.length}</div>
              <div className="text-sm text-gray-600">Recent Results</div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Quick Access Tabs */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6" aria-label="Tabs">
                <button className="border-b-2 border-blue-500 py-4 px-1 text-sm font-medium text-blue-600">
                  📅 Today's Events
                </button>
                <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                  🔥 High Impact
                </button>
                <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                  📊 Recent Results
                </button>
                <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                  📈 All Events
                </button>
              </nav>
            </div>
            <div className="p-6">
              <div className="grid gap-4">
                {todaysEvents.length > 0 ? (
                  todaysEvents.slice(0, 5).map((event) => {
                    const timing = formatEventTime(event.eventTime)
                    const impactStyle = getImpactColor(event.impact)
                    const categoryIcon = getCategoryIcon(event.category)
                    
                    return (
                      <div key={event.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="text-2xl">{getCountryFlag(event.country)}</div>
                        <div className="flex-shrink-0 text-center min-w-[60px]">
                          <div className="text-sm font-medium">{timing.time}</div>
                        </div>
                        <div className="flex-shrink-0">
                          <div className={`w-3 h-3 rounded-full ${impactStyle.dot}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">{categoryIcon}</span>
                            <h3 className="font-semibold text-gray-900 text-sm">{event.title}</h3>
                          </div>
                          <div className="flex items-center gap-3 text-xs">
                            <span className={`px-2 py-1 rounded-full ${impactStyle.bg} ${impactStyle.text} font-medium`}>
                              {event.impact.toUpperCase()}
                            </span>
                            <span className="text-gray-500">{event.category}</span>
                          </div>
                        </div>
                        {(event.forecast || event.previous) && (
                          <div className="text-right text-xs text-gray-600">
                            {event.forecast && (
                              <div>Est: <span className="font-medium">{event.forecast}</span></div>
                            )}
                            {event.previous && (
                              <div>Prev: <span className="font-medium">{event.previous}</span></div>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  })
                ) : (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-2">📅</div>
                    <p className="text-gray-600">No events scheduled for today</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Market Impact Legend */}
        <div className="mb-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">📊 Understanding Market Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-6 h-6 bg-red-500 rounded-full mx-auto mb-2"></div>
              <div className="font-semibold text-red-700">High Impact</div>
              <div className="text-sm text-gray-600">Major market movers like Fed meetings, GDP, NFP</div>
            </div>
            <div className="text-center">
              <div className="w-6 h-6 bg-yellow-500 rounded-full mx-auto mb-2"></div>
              <div className="font-semibold text-yellow-700">Medium Impact</div>
              <div className="text-sm text-gray-600">Regional data, sector-specific indicators</div>
            </div>
            <div className="text-center">
              <div className="w-6 h-6 bg-green-500 rounded-full mx-auto mb-2"></div>
              <div className="font-semibold text-green-700">Low Impact</div>
              <div className="text-sm text-gray-600">Minor releases, preliminary data</div>
            </div>
          </div>
        </div>

        {/* Comprehensive Events Calendar */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📅 Complete Economic Calendar</h2>
          
          {Object.entries(eventsByDate).length > 0 ? (
            Object.entries(eventsByDate).map(([dateKey, dayEvents]) => {
              const date = new Date(dateKey)
              const isToday = date.toDateString() === new Date().toDateString()
              const isTomorrow = date.toDateString() === new Date(Date.now() + 24 * 60 * 60 * 1000).toDateString()
              
              let dateLabel = date.toLocaleDateString('en-US', { 
                weekday: 'long',
                month: 'long', 
                day: 'numeric',
                year: 'numeric'
              })
              
              if (isToday) dateLabel = `🔥 Today - ${dateLabel}`
              if (isTomorrow) dateLabel = `⏰ Tomorrow - ${dateLabel}`

              return (
                <div key={dateKey} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{dateLabel}</h3>
                    <div className="mt-2 text-sm text-gray-600">
                      {dayEvents.length} event{dayEvents.length !== 1 ? 's' : ''} scheduled
                      {dayEvents.filter(e => e.impact === 'high').length > 0 && (
                        <span className="ml-2 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                          {dayEvents.filter(e => e.impact === 'high').length} High Impact
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {dayEvents.map((event) => {
                      const timing = formatEventTime(event.eventTime)
                      const impactStyle = getImpactColor(event.impact)
                      const categoryIcon = getCategoryIcon(event.category)
                      const severity = getImpactSeverity(event.actual ?? null, event.forecast ?? null, event.previous ?? null)
                      
                      return (
                        <div key={event.id} className="p-6 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-200">
                          <div className="flex items-start gap-6">
                            {/* Time & Country */}
                            <div className="flex-shrink-0 text-center min-w-[100px]">
                              <div className="text-lg font-bold text-gray-900 mb-1">{timing.time}</div>
                              <div className="text-3xl mb-2">{getCountryFlag(event.country)}</div>
                              <div className="text-xs text-gray-500 font-medium">{event.currency}</div>
                            </div>
                            
                            {/* Impact & Category */}
                            <div className="flex-shrink-0 pt-2">
                              <div className={`w-6 h-6 rounded-full ${impactStyle.dot} mb-2 shadow-sm`} title={`${event.impact} impact`}></div>
                              <div className="text-2xl">{categoryIcon}</div>
                            </div>
                            
                            {/* Event Details */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-6">
                                <div className="flex-1">
                                  <h4 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h4>
                                  {event.description && (
                                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{event.description}</p>
                                  )}
                                  <div className="flex items-center gap-4 text-sm">
                                    <span className={`px-3 py-1 rounded-full font-semibold ${impactStyle.bg} ${impactStyle.text}`}>
                                      {event.impact.toUpperCase()} IMPACT
                                    </span>
                                    <span className="flex items-center gap-1 text-gray-600">
                                      <span>{categoryIcon}</span>
                                      {event.category}
                                    </span>
                                  </div>
                                </div>
                                
                                {/* Enhanced Data Values */}
                                {(event.actual || event.forecast || event.previous) && (
                                  <div className="flex-shrink-0 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 min-w-[160px] border">
                                    <div className="space-y-2 text-sm">
                                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Market Data</div>
                                      {event.actual && (
                                        <div className="flex justify-between items-center">
                                          <span className="text-gray-600">Actual:</span>
                                          <span className="font-bold text-gray-900">{event.actual}{event.unit}</span>
                                        </div>
                                      )}
                                      {event.forecast && (
                                        <div className="flex justify-between items-center">
                                          <span className="text-gray-600">Forecast:</span>
                                          <span className="font-semibold text-blue-700">{event.forecast}{event.unit}</span>
                                        </div>
                                      )}
                                      {event.previous && (
                                        <div className="flex justify-between items-center">
                                          <span className="text-gray-600">Previous:</span>
                                          <span className="text-gray-700">{event.previous}{event.unit}</span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })
          ) : (
            <div className="bg-white rounded-xl border p-16 text-center">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Upcoming Economic Events</h3>
              <p className="text-gray-600 mb-6">Economic calendar events will appear here when available.</p>
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Browse Market Data
              </Link>
            </div>
          )}
        </div>

        {/* Educational Content */}
        <div className="mt-12 space-y-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">📚 Economic Calendar Trading Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">🎯 Key Trading Events</h3>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• <strong>Non-Farm Payrolls (NFP):</strong> Monthly US employment data</li>
                  <li>• <strong>Federal Reserve Meetings:</strong> Interest rate decisions</li>
                  <li>• <strong>GDP Releases:</strong> Quarterly economic growth data</li>
                  <li>• <strong>Inflation Reports (CPI/PPI):</strong> Price level changes</li>
                  <li>• <strong>Central Bank Speeches:</strong> Policy guidance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">⚡ Trading Strategies</h3>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• <strong>Pre-Event:</strong> Position based on forecasts</li>
                  <li>• <strong>News Trading:</strong> Quick reaction to releases</li>
                  <li>• <strong>Straddle Strategy:</strong> Profit from volatility</li>
                  <li>• <strong>Fade the Move:</strong> Counter-trend after initial spike</li>
                  <li>• <strong>Risk Management:</strong> Use stop-losses during events</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-lg font-semibold mb-2">Market Hours</h3>
              <p className="text-sm text-gray-600">Economic events are released during specific market sessions. Plan your trading around GMT/EST release times.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold mb-2">Data Revision</h3>
              <p className="text-sm text-gray-600">Previous data can be revised. Always check if historical figures have been updated as this impacts analysis.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <div className="text-3xl mb-3">🚨</div>
              <h3 className="text-lg font-semibold mb-2">Volatility Warning</h3>
              <p className="text-sm text-gray-600">High-impact events can cause extreme volatility. Adjust position sizes and use appropriate risk management.</p>
            </div>
          </div>
        </div>

      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">🌍 Global Economic Data</h3>
              <p className="text-sm text-gray-300">
                Our economic calendar covers 196+ countries with real-time updates and professional analysis for informed trading decisions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">📈 Trading Resources</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/markets/stocks" className="hover:text-white transition-colors">Stock Market Data</Link></li>
                <li><Link href="/markets/crypto" className="hover:text-white transition-colors">Cryptocurrency Prices</Link></li>
                <li><Link href="/education" className="hover:text-white transition-colors">Trading Education</Link></li>
                <li><Link href="/category/brokers" className="hover:text-white transition-colors">Broker Reviews</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">⚠️ Risk Disclaimer</h3>
              <p className="text-xs text-gray-400">
                Trading involves substantial risk. Economic events can cause significant market volatility. 
                Past performance does not guarantee future results. Always use proper risk management.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 PeakNewsDaily. Professional economic calendar and market analysis.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}