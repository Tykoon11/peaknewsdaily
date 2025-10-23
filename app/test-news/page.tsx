'use client'

import { useState, useEffect } from 'react'

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

export default function TestNewsPage() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [rawData, setRawData] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    async function fetchTestNews() {
      try {
        const url = `/api/news/live?t=${Date.now()}&test=true`
        console.log('🔍 TESTING URL:', url)
        
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        })
        
        console.log('📡 RESPONSE STATUS:', response.status)
        
        const text = await response.text()
        setRawData(text)
        
        if (response.ok) {
          const data: NewsData = JSON.parse(text)
          setNews(data.news || [])
          console.log('✅ NEWS LOADED:', data.news?.length, 'articles')
          console.log('📅 TIMESTAMP:', data.timestamp)
        } else {
          setError(`API Error: ${response.status} - ${text}`)
        }
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err)
        setError(`Fetch Error: ${errorMsg}`)
        console.error('❌ ERROR:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchTestNews()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">🔬 NEWS API TEST PAGE</h1>
        
        {loading && (
          <div className="bg-blue-100 border border-blue-300 rounded p-4 mb-4">
            <p className="text-blue-800">🔄 Loading news from API...</p>
          </div>
        )}
        
        {error && (
          <div className="bg-red-100 border border-red-300 rounded p-4 mb-4">
            <h3 className="font-bold text-red-800">❌ ERROR:</h3>
            <p className="text-red-700">{error}</p>
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">📊 API RESPONSE DATA:</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-40">
            {rawData || 'No data yet...'}
          </pre>
        </div>
        
        {news.length > 0 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">📰 PARSED NEWS ({news.length} articles):</h2>
            <div className="space-y-4">
              {news.map((item, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      {item.source}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {item.pubDate}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  {item.description && (
                    <p className="text-gray-600 text-sm">{item.description.substring(0, 200)}...</p>
                  )}
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm mt-2 inline-block"
                  >
                    🔗 Read full article
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-8 text-center">
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            🔄 Refresh Test
          </button>
        </div>
      </div>
    </div>
  )
}