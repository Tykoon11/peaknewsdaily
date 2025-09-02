'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

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
  eventTime: string
  timeUntilEvent: number
  isPast: boolean
  impactLevel: number
}

interface EconomicCalendarData {
  events: EconomicEvent[]
  count: number
}

export default function EconomicCalendarPreview() {
  const [events, setEvents] = useState<EconomicEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchEconomicData() {
      try {
        const response = await fetch('/api/economic-calendar?limit=6')
        const data: EconomicCalendarData = await response.json()
        setEvents(data.events || [])
      } catch (err) {
        setError('Failed to fetch economic events')
        console.error('Economic calendar fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchEconomicData()
    
    // Update every hour
    const interval = setInterval(fetchEconomicData, 60 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const formatEventTime = (eventTime: string) => {
    const date = new Date(eventTime)
    const now = new Date()
    const isToday = date.toDateString() === now.toDateString()
    const isTomorrow = date.toDateString() === new Date(now.getTime() + 24 * 60 * 60 * 1000).toDateString()
    
    if (isToday) {
      return `Today ${date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`
    } else if (isTomorrow) {
      return `Tomorrow ${date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case 'high': return 'bg-red-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-gray-500'
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

  if (loading) {
    return (
      <section className="mb-12">
        <div className="bg-white rounded-xl border p-6">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-48 mb-4"></div>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="h-8 w-8 bg-gray-200 rounded"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-16"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="mb-12">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    )
  }

  if (events.length === 0) {
    return null
  }

  return (
    <section className="mb-12">
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="border-b p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </div>
              Economic Calendar
            </h2>
            <Link 
              href="/markets/calendar" 
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              View All →
            </Link>
          </div>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {events.slice(0, 6).map((event) => (
              <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getCountryFlag(event.country)}</span>
                    <div className={`w-3 h-3 rounded-full ${getImpactColor(event.impact)}`} title={`${event.impact} impact`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-medium text-gray-900 truncate">{event.title}</h3>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {event.currency}
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">{event.category}</div>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <div className="text-xs font-medium text-gray-900">
                    {formatEventTime(event.eventTime)}
                  </div>
                  {event.forecast && (
                    <div className="text-xs text-gray-500">
                      Forecast: {event.forecast}{event.unit}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {events.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p>No upcoming economic events</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}