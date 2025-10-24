'use client'
import { useState, useEffect } from 'react'
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

export default function LiveNewsSearch() {
  const [news, setNews] = useState<LiveNewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSource, setSelectedSource] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [filteredNews, setFilteredNews] = useState<LiveNewsItem[]>([])

  // Fetch fresh news from API
  useEffect(() => {
    async function fetchLiveNews() {
      try {
        const cacheBuster = Date.now() + Math.random()
        const response = await fetch(`/api/news/live?t=${cacheBuster}&force=true`, {
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        })
        
        if (response.ok) {
          const data: LiveNewsData = await response.json()
          if (data.news && data.news.length > 0) {
            setNews(data.news)
            setError(null)
            console.log('📰 LIVE NEWS SEARCH LOADED:', data.news.length, 'articles from', data.timestamp)
          } else {
            setError('No news available')
          }
        } else {
          throw new Error(`API returned ${response.status}`)
        }
      } catch (err) {
        setError('Failed to fetch news')
        console.error('Live news search error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchLiveNews()
    
    // Refresh every 2 minutes
    const interval = setInterval(fetchLiveNews, 2 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  // Filter and sort news
  useEffect(() => {
    let filtered = [...news]

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.source.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by source
    if (selectedSource !== 'all') {
      filtered = filtered.filter(item => item.source.toLowerCase() === selectedSource.toLowerCase())
    }

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        case 'oldest':
          return new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime()
        case 'title':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    setFilteredNews(filtered)
  }, [searchTerm, selectedSource, sortBy, news])

  // Get unique sources for filter
  const sources = Array.from(new Set(news.map(item => item.source)))

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-gray-700">
          <div className="animate-pulse space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          </div>
        </div>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-slate-200 dark:border-gray-700">
              <div className="animate-pulse space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
        <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">⚠️ News Service Issue</h3>
        <p className="text-red-600 dark:text-red-400">{error}. Please refresh the page or check back shortly.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Search and Filter Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search live news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>

          {/* Source Filter */}
          <div>
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="all">All Sources</option>
              {sources.map(source => (
                <option key={source} value={source}>
                  {source} ({news.filter(item => item.source === source).length})
                </option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 sm:col-span-2 lg:col-span-1"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <span>Showing {filteredNews.length} of {news.length} live articles</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            {searchTerm && (
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                "{searchTerm}"
              </span>
            )}
            {selectedSource !== 'all' && (
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">
                {selectedSource}
              </span>
            )}
          </div>
          {(searchTerm || selectedSource !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedSource('all')
                setSortBy('newest')
              }}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Live News Results */}
      <div className="space-y-4">
        {filteredNews.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No articles found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Try adjusting your search terms or filters</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedSource('all')
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Show all articles
            </button>
          </div>
        ) : (
          filteredNews.map((item, index) => {
            const publishedDate = new Date(item.pubDate)
            const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true })
            
            return (
              <article
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 p-6 hover:shadow-lg hover:border-slate-300 dark:hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-gray-400 mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-medium text-xs">
                    {item.source}
                  </span>
                  <span>•</span>
                  <time className="text-slate-400 dark:text-gray-500">
                    {timeAgo}
                  </time>
                </div>
                
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 leading-tight">
                    {item.title.replace(/&#x[\d\w]+;/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"')}
                  </h3>
                  
                  {item.description && (
                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-4">
                      {item.description.substring(0, 300)}...
                    </p>
                  )}
                </a>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Published: {publishedDate.toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                  >
                    Read full article
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </article>
            )
          })
        )}
      </div>
    </div>
  )
}