export const dynamic = 'force-static'

export async function GET() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.peaknewsdaily.com')
    .replace('https://peaknewsdaily.com', 'https://www.peaknewsdaily.com')
    .replace('http://peaknewsdaily.com', 'https://www.peaknewsdaily.com')

  const updated = new Date().toUTCString()
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>PeakNewsDaily</title>
    <link>${siteUrl}</link>
    <description>Financial markets, investing, crypto, trading and personal finance updates from PeakNewsDaily.</description>
    <language>en-us</language>
    <lastBuildDate>${updated}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <item>
      <title>PeakNewsDaily Market News</title>
      <link>${siteUrl}/news</link>
      <guid>${siteUrl}/news</guid>
      <description>Latest market news and financial updates.</description>
      <pubDate>${updated}</pubDate>
    </item>
    <item>
      <title>PeakNewsDaily Markets</title>
      <link>${siteUrl}/markets</link>
      <guid>${siteUrl}/markets</guid>
      <description>Live stocks, crypto and economic market data.</description>
      <pubDate>${updated}</pubDate>
    </item>
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'content-type': 'application/rss+xml; charset=utf-8',
      'cache-control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
