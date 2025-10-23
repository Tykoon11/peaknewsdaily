'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'

interface LiveNewsItem {
  title: string
  link: string
  description: string
  pubDate: string
  source: string
}

interface LiveNewsData {
  news: LiveNewsItem[]
  count: number
  timestamp: string
  source: string
}

export default function LiveNewsPreview() {
  const [news, setNews] = useState<LiveNewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isLiveData, setIsLiveData] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

  useEffect(() => {
    async function fetchLiveNews() {
      try {
        const cacheBuster = Date.now()
        const response = await fetch(`/api/news/live?t=${cacheBuster}&force=true`, {
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        })
        if (response.ok) {
          const data: LiveNewsData = await response.json()
          if (data.news && data.news.length > 0) {
            setNews(data.news.slice(0, 6)) // Show top 6 articles
            setIsLiveData(true)
            setLastUpdate(new Date())
            console.log('📰 LIVE NEWS LOADED:', data.news.length, 'fresh articles')
          }
        } else {
          throw new Error('Failed to fetch live news')
        }
      } catch (err) {
        setError('Failed to fetch live news')
        console.error('Live news fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    // Fetch immediately on mount
    fetchLiveNews()
    
    // Update every 2 minutes for more frequent updates
    const interval = setInterval(fetchLiveNews, 2 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <section className="mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700 p-3 xs:p-4">
            <h2 className="text-lg xs:text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <div className="w-5 h-5 xs:w-6 xs:h-6 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
                </svg>
              </div>
              <span className="hidden xs:inline">Breaking News</span>
              <span className="xs:hidden">News</span>
            </h2>
          </div>
          <div className="p-3 xs:p-4">
            <div className="space-y-3 xs:space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse">
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
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700 p-3 xs:p-4">
            <h2 className="text-lg xs:text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <div className="w-5 h-5 xs:w-6 xs:h-6 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
                </svg>
              </div>
              Breaking News
            </h2>
          </div>
          <div className="p-3 xs:p-4 text-center">
            <p className="text-gray-600 dark:text-gray-400">Loading live financial news...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="mb-12">
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="border-b border-gray-200 dark:border-gray-700 p-3 xs:p-4">
          <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 xs:gap-0 mb-2 xs:mb-0">
            <h2 className="text-lg xs:text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <div className="w-5 h-5 xs:w-6 xs:h-6 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
                </svg>
              </div>
              <span className="hidden xs:inline">Breaking News</span>
              <span className="xs:hidden">News</span>
            </h2>
            <Link 
              href="/news" 
              className="text-xs xs:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
            >
              View All →
            </Link>
          </div>
          
          {/* Live Status Indicator */}
          <div className="flex items-center gap-1.5 xs:gap-2 text-xs">
            <div className={`w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full ${isLiveData ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
            <span className="text-gray-600 dark:text-gray-400">
              {isLiveData ? 'Live Data' : 'Cached Data'}
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              • Last: {lastUpdate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>

        <div className="p-3 xs:p-4">
          <div className="space-y-3 xs:space-y-4">
            {news.map((item, index) => {
              const publishedDate = new Date(item.pubDate)
              const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true })
              
              return (
                <article key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-b-0 pb-3 xs:pb-4 last:pb-0">
                  <div className="flex flex-col xs:flex-row xs:items-start gap-2 xs:gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 xs:mb-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
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
                        <h3 className="text-sm xs:text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight mb-1 xs:mb-2">
                          {item.title.replace(/&#x[\d\w]+;/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"')}
                        </h3>
                        
                        {item.description && (
                          <p className="text-xs xs:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
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
                        className="inline-flex items-center text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
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