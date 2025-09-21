'use client'

import { useState } from 'react'

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

interface EconomicCalendarTabsProps {
  todaysEvents: EconomicEvent[]
  highImpactEvents: EconomicEvent[]
  recentEvents: EconomicEvent[]
  allEvents: EconomicEvent[]
}

export default function EconomicCalendarTabs({
  todaysEvents,
  highImpactEvents,
  recentEvents,
  allEvents
}: EconomicCalendarTabsProps) {
  const [activeTab, setActiveTab] = useState<'today' | 'highImpact' | 'recent' | 'all'>('today')

  const tabs = [
    { id: 'today', label: "📅 Today's Events", events: todaysEvents },
    { id: 'highImpact', label: '🔥 High Impact', events: highImpactEvents },
    { id: 'recent', label: '📊 Recent Results', events: recentEvents },
    { id: 'all', label: '📈 All Events', events: allEvents }
  ] as const

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
      'US': '🇺🇸', 'EU': '🇪🇺', 'EUR': '🇪🇺', 'GB': '🇬🇧', 'UK': '🇬🇧',
      'JP': '🇯🇵', 'JPY': '🇯🇵', 'DE': '🇩🇪', 'CA': '🇨🇦', 'CAD': '🇨🇦',
      'AU': '🇦🇺', 'AUD': '🇦🇺', 'CH': '🇨🇭', 'CHF': '🇨🇭', 'CN': '🇨🇳',
      'CNY': '🇨🇳', 'NZ': '🇳🇿', 'NZD': '🇳🇿', 'FR': '🇫🇷', 'IT': '🇮🇹',
      'ES': '🇪🇸', 'BR': '🇧🇷', 'IN': '🇮🇳', 'KR': '🇰🇷', 'SG': '🇸🇬',
      'HK': '🇭🇰', 'MX': '🇲🇽', 'RU': '🇷🇺', 'ZA': '🇿🇦'
    }
    return flags[country.toUpperCase()] || '🌐'
  }

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Employment': '👥', 'Inflation': '📈', 'GDP': '📊', 'Monetary Policy': '🏛️',
      'Central Bank': '🏦', 'Interest Rate': '💰', 'Trade': '🌐', 'Manufacturing': '🏭',
      'Consumer': '🛒', 'Housing': '🏠', 'Business': '💼', 'Government': '🏛️',
      'Energy': '⚡', 'Retail': '🏪', 'Services': '🔧', 'Construction': '🏗️'
    }
    return icons[category] || '📋'
  }

  const currentEvents = tabs.find(tab => tab.id === activeTab)?.events || []

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex overflow-x-auto" aria-label="Tabs">
          <div className="flex min-w-full px-6 space-x-8 sm:space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
      
      <div className="p-6">
        <div className="grid gap-4">
          {currentEvents.length > 0 ? (
            currentEvents.slice(0, activeTab === 'all' ? 20 : 5).map((event) => {
              const timing = formatEventTime(new Date(event.eventTime))
              const impactStyle = getImpactColor(event.impact)
              const categoryIcon = getCategoryIcon(event.category)
              
              return (
                <div key={event.id} className="p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex items-center gap-2">
                      <div className="text-xl">{getCountryFlag(event.country)}</div>
                      <div className={`w-3 h-3 rounded-full ${impactStyle.dot}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-lg flex-shrink-0">{categoryIcon}</span>
                          <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm leading-tight">{event.title}</h3>
                        </div>
                        <div className="flex-shrink-0 text-right text-xs">
                          <div className="font-medium text-gray-900 dark:text-gray-100">{timing.time}</div>
                          <div className="text-gray-500 dark:text-gray-400">{timing.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 text-xs">
                          <span className={`px-2 py-1 rounded-full ${impactStyle.bg} ${impactStyle.text} font-medium`}>
                            {event.impact.toUpperCase()}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400">{event.category}</span>
                        </div>
                        {(event.forecast || event.previous || event.actual) && (
                          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                            {event.actual ? (
                              <span>Act: <span className="font-medium">{event.actual}</span></span>
                            ) : event.forecast ? (
                              <span>Est: <span className="font-medium">{event.forecast}</span></span>
                            ) : null}
                            {event.previous && (
                              <span>Prev: <span className="font-medium">{event.previous}</span></span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <div className="text-4xl mb-4">📅</div>
              <p className="text-lg font-medium mb-2">No events scheduled</p>
              <p className="text-sm">Check back later for economic events in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}