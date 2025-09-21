"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'

interface NewsItem {
  id: string
  slug: string
  title: string
  excerpt?: string
  publishedAt: string
  sourceName: string
  topic: {
    slug: string
    title: string
  }
}

interface Topic {
  id: string
  slug: string
  title: string
  description?: string
  _count?: {
    NewsItem: number
  }
}

interface NewsSearchFilterProps {
  initialNews: NewsItem[]
  topics: Topic[]
}

export default function NewsSearchFilter({ initialNews, topics }: NewsSearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [filteredNews, setFilteredNews] = useState(initialNews)

  useEffect(() => {
    let filtered = [...initialNews]

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sourceName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by topic
    if (selectedTopic !== 'all') {
      filtered = filtered.filter(item => item.topic.slug === selectedTopic)
    }

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        case 'oldest':
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
        case 'title':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    setFilteredNews(filtered)
  }, [searchTerm, selectedTopic, sortBy, initialNews])

  return (
    <div className="space-y-6">
      {/* Search and Filter Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-lg xs:rounded-xl p-4 xs:p-6 shadow-lg border border-slate-200 dark:border-gray-700 mx-2 xs:mx-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 xs:py-2 border border-gray-300 dark:border-gray-600 rounded-md xs:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 text-sm xs:text-base"
            />
          </div>

          {/* Topic Filter */}
          <div>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="block w-full px-3 py-2.5 xs:py-2 border border-gray-300 dark:border-gray-600 rounded-md xs:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm xs:text-base"
            >
              <option value="all">All Topics</option>
              {topics.map(topic => (
                <option key={topic.slug} value={topic.slug} className="capitalize">
                  {topic.title} ({topic._count?.NewsItem || 0})
                </option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="block w-full px-3 py-2.5 xs:py-2 border border-gray-300 dark:border-gray-600 rounded-md xs:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm xs:text-base sm:col-span-2 lg:col-span-1"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-3 xs:mt-4 flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 xs:gap-0 text-xs xs:text-sm text-gray-600 dark:text-gray-400">
          <div className="flex flex-wrap items-center gap-2">
            <span>Showing {filteredNews.length} of {initialNews.length} articles</span>
            {searchTerm && (
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                "{searchTerm}"
              </span>
            )}
            {selectedTopic !== 'all' && (
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded capitalize text-xs">
                {topics.find(t => t.slug === selectedTopic)?.title}
              </span>
            )}
          </div>
          {(searchTerm || selectedTopic !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedTopic('all')
                setSortBy('newest')
              }}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium text-xs xs:text-sm whitespace-nowrap"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* News Results */}
      <div className="space-y-4">
        {filteredNews.length === 0 ? (
          <div className="text-center py-8 xs:py-12">
            <div className="w-12 h-12 xs:w-16 xs:h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4">
              <svg className="w-6 h-6 xs:w-8 xs:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
              </svg>
            </div>
            <h3 className="text-base xs:text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No articles found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3 xs:mb-4 text-sm xs:text-base px-4 xs:px-0">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedTopic('all')
              }}
              className="px-3 xs:px-4 py-2 bg-blue-600 text-white rounded-md xs:rounded-lg hover:bg-blue-700 transition-colors text-sm xs:text-base">
            >
              Show all articles
            </button>
          </div>
        ) : (
          filteredNews.map((item) => (
            <article
              key={item.id}
              className="group bg-white dark:bg-gray-800 rounded-lg xs:rounded-xl border border-slate-200 dark:border-gray-700 p-4 xs:p-6 hover:shadow-lg hover:border-slate-300 dark:hover:border-gray-600 transition-all duration-300 mx-2 xs:mx-0">
            >
              <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2 sm:gap-3 text-xs sm:text-sm text-slate-500 dark:text-gray-400 mb-2 xs:mb-3">
                <Link
                  href={`/news/topic/${item.topic.slug}`}
                  className="px-2 xs:px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:from-blue-600 hover:to-indigo-700 transition-colors capitalize font-medium w-fit text-xs xs:text-sm">
                >
                  {item.topic.title}
                </Link>
                <span className="hidden xs:inline">•</span>
                <span className="font-medium">{item.sourceName}</span>
                <span className="hidden xs:inline">•</span>
                <time className="text-slate-400 dark:text-gray-500">
                  {formatDistanceToNow(new Date(item.publishedAt))} ago
                </time>
              </div>
              <Link href={`/news/${item.slug}`} className="block">
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-slate-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 xs:mb-3 leading-tight">
                  {item.title}
                </h3>
                {item.excerpt && (
                  <p className="text-slate-600 dark:text-gray-300 text-xs xs:text-sm sm:text-base line-clamp-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                )}
              </Link>
              <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 xs:gap-0 mt-3 xs:mt-4">
                <div className="text-xs text-gray-500 dark:text-gray-400 order-2 xs:order-1">
                  Published: {new Date(item.publishedAt).toLocaleDateString()}
                </div>
                <Link
                  href={`/news/${item.slug}`}
                  className="inline-flex items-center text-xs xs:text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 order-1 xs:order-2 w-fit"
                >
                  Read more
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  )
}