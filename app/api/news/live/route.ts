import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

interface NewsItem {
  title: string
  link: string
  description: string
  pubDate: string
  source: string
}

/**
 * Live news API that fetches fresh financial news from external sources
 * Bypasses database cache for absolutely fresh news
 */
export async function GET(request: NextRequest) {
  try {
    const newsItems: NewsItem[] = []
    
    // Try to fetch from multiple financial news sources
    const sources = [
      {
        name: 'MarketWatch',
        url: 'https://feeds.content.dowjones.io/public/rss/mw_topstories'
      },
      {
        name: 'The Motley Fool',
        url: 'https://feeds.feedburner.com/TheMotleyFool'
      }
    ]
    
    for (const source of sources) {
      try {
        const response = await fetch(source.url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; NewsBot/1.0)'
          },
          signal: AbortSignal.timeout(5000) // 5 second timeout
        })
        
        if (response.ok) {
          const xmlText = await response.text()
          
          // Simple RSS parsing for key news items
          const items = xmlText.match(/<item>(.*?)<\/item>/gs) || []
          
          for (const item of items.slice(0, 4)) { // Max 4 per source
            const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || item.match(/<title>(.*?)<\/title>/)
            const linkMatch = item.match(/<link>(.*?)<\/link>/)
            const descMatch = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) || item.match(/<description>(.*?)<\/description>/)
            const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/)
            
            if (titleMatch && linkMatch) {
              newsItems.push({
                title: titleMatch[1].trim(),
                link: linkMatch[1].trim(),
                description: descMatch ? descMatch[1].trim().replace(/<[^>]*>/g, '').substring(0, 200) : '',
                pubDate: pubDateMatch ? pubDateMatch[1] : new Date().toISOString(),
                source: source.name
              })
            }
          }
        }
      } catch (error) {
        console.log(`Failed to fetch from ${source.name}:`, error instanceof Error ? error.message : String(error))
      }
    }
    
    // Sort by publication date (newest first)
    newsItems.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
    
    return NextResponse.json({
      news: newsItems.slice(0, 8), // Return top 8 items
      count: newsItems.length,
      timestamp: new Date().toISOString(),
      source: 'live-external-feeds'
    })
    
  } catch (error) {
    console.error('Live news API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch live news', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}