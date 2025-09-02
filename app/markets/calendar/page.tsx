import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export const revalidate = 300

interface EconomicEvent {
  id: string
  country: string
  currency: string
  title: string
  description?: string
  impact: string
  category: string
  actual?: string
  forecast?: string
  previous?: string
  unit?: string
  eventTime: Date
}

export default async function EconomicCalendarPage() {
  const events = await prisma.economicEvent.findMany({
    where: {
      eventTime: {
        gte: new Date(),
        lte: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // Next 30 days
      }
    },
    orderBy: { eventTime: 'asc' },
    take: 50
  })

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
      'GB': '🇬🇧',
      'JP': '🇯🇵',
      'DE': '🇩🇪',
      'CA': '🇨🇦',
      'AU': '🇦🇺',
      'CH': '🇨🇭',
      'CN': '🇨🇳'
    }
    return flags[country.toUpperCase()] || '🌐'
  }

  // Group events by date
  const eventsByDate = events.reduce((acc, event) => {
    const dateKey = event.eventTime.toDateString()
    if (!acc[dateKey]) {
      acc[dateKey] = []
    }
    acc[dateKey].push(event)
    return acc
  }, {} as { [key: string]: EconomicEvent[] })

  return (
    <main className="container py-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Economic Calendar</h1>
            <p className="text-gray-600">
              Upcoming economic events and data releases that may impact markets
            </p>
          </div>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Impact Legend */}
      <div className="mb-6 bg-white rounded-lg border p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Impact Levels</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm text-gray-700">High Impact</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-sm text-gray-700">Medium Impact</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-700">Low Impact</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(eventsByDate).map(([dateKey, dayEvents]) => {
          const date = new Date(dateKey)
          const isToday = date.toDateString() === new Date().toDateString()
          const isTomorrow = date.toDateString() === new Date(Date.now() + 24 * 60 * 60 * 1000).toDateString()
          
          let dateLabel = date.toLocaleDateString('en-US', { 
            weekday: 'long',
            month: 'long', 
            day: 'numeric',
            year: 'numeric'
          })
          
          if (isToday) dateLabel = `Today - ${dateLabel}`
          if (isTomorrow) dateLabel = `Tomorrow - ${dateLabel}`

          return (
            <div key={dateKey} className="bg-white rounded-xl border overflow-hidden">
              <div className="bg-gray-50 border-b p-4">
                <h2 className="text-lg font-semibold text-gray-900">{dateLabel}</h2>
              </div>
              <div className="divide-y">
                {dayEvents.map((event) => {
                  const timing = formatEventTime(event.eventTime)
                  const impactStyle = getImpactColor(event.impact)
                  
                  return (
                    <div key={event.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        {/* Time & Country */}
                        <div className="flex-shrink-0 text-center min-w-[80px]">
                          <div className="text-sm font-medium text-gray-900">{timing.time}</div>
                          <div className="text-2xl mt-1">{getCountryFlag(event.country)}</div>
                          <div className="text-xs text-gray-500 mt-1">{event.currency}</div>
                        </div>
                        
                        {/* Impact Indicator */}
                        <div className="flex-shrink-0 pt-1">
                          <div className={`w-4 h-4 rounded-full ${impactStyle.dot}`} title={`${event.impact} impact`}></div>
                        </div>
                        
                        {/* Event Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="text-sm font-semibold text-gray-900 mb-1">{event.title}</h3>
                              {event.description && (
                                <p className="text-xs text-gray-600 mb-2">{event.description}</p>
                              )}
                              <div className="flex items-center gap-3 text-xs">
                                <span className={`px-2 py-1 rounded-full font-medium ${impactStyle.bg} ${impactStyle.text}`}>
                                  {event.impact.toUpperCase()}
                                </span>
                                <span className="text-gray-500">{event.category}</span>
                              </div>
                            </div>
                            
                            {/* Data Values */}
                            <div className="flex-shrink-0 text-right">
                              {(event.actual || event.forecast || event.previous) && (
                                <div className="bg-gray-50 rounded-lg p-2 min-w-[120px]">
                                  <div className="space-y-1 text-xs">
                                    {event.actual && (
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">Actual:</span>
                                        <span className="font-medium text-gray-900">{event.actual}{event.unit}</span>
                                      </div>
                                    )}
                                    {event.forecast && (
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">Forecast:</span>
                                        <span className="font-medium text-gray-700">{event.forecast}{event.unit}</span>
                                      </div>
                                    )}
                                    {event.previous && (
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">Previous:</span>
                                        <span className="text-gray-600">{event.previous}{event.unit}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {Object.keys(eventsByDate).length === 0 && (
        <div className="bg-white rounded-xl border p-12 text-center">
          <div className="text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-lg">No upcoming economic events</p>
            <p className="text-sm mt-2">Economic calendar events will appear here when available.</p>
          </div>
        </div>
      )}
    </main>
  )
}