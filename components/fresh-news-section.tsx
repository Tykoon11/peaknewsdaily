'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'

interface NewsItem {
  title: string
  link: string
  description: string
  pubDate: string
  source: string
}

interface NewsData {
  news: NewsItem[]
  count: number
  timestamp: string
  source: string
}

export default function FreshNewsSection() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

  useEffect(() => {
    async function fetchFreshNews() {
      try {
        const cacheBuster = Date.now() + Math.random()
        const response = await fetch(`/api/news/live?t=${cacheBuster}&force=true&fresh=1`, {
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        })
        
        if (response.ok) {
          const data: NewsData = await response.json()
          if (data.news && data.news.length > 0) {
            setNews(data.news.slice(0, 6))
            setLastUpdate(new Date())
            setError(null)
            console.log('🚀 FRESH NEWS LOADED:', data.news.length, 'articles from', data.timestamp)
          } else {
            setError('No fresh news available')
          }
        } else {
          throw new Error(`API returned ${response.status}`)
        }
      } catch (err) {
        setError('Failed to fetch fresh news')
        console.error('Fresh news fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    // Fetch immediately
    fetchFreshNews()
    
    // Update every 30 seconds for aggressive refresh
    const interval = setInterval(fetchFreshNews, 30 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <section className="mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700 p-4">
            <h2 className="text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white text-xs">●</span>
              </div>
              LIVE Financial News
            </h2>
          </div>
          <div className="p-4">
            <div className="animate-pulse space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i}>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error || news.length === 0) {
    return (
      <section className="mb-12">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">⚠️ News Service Issue</h2>
          <p className="text-red-600 dark:text-red-400">
            {error || 'No news available'}. Please refresh the page or check back shortly.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="mb-12">
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">●</span>
              </div>
              LIVE Financial News
            </h2>
            <Link 
              href="/news" 
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            >
              View All →
            </Link>
          </div>
          
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-600 dark:text-gray-400">
              Live Data • Last: {lastUpdate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>

        <div className="p-4">
          <div className="space-y-4">
            {news.map((item, index) => {
              const publishedDate = new Date(item.pubDate)
              const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true })
              
              return (
                <article key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-b-0 pb-4 last:pb-0">
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                          {item.source}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {timeAgo}
                        </span>
                      </div>
                      
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight mb-2">
                          {item.title.replace(/&#x[\d\w]+;/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"')}
                        </h3>
                        
                        {item.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                            {item.description.substring(0, 120)}...
                          </p>
                        )}
                      </a>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                      >
                        Read →
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}