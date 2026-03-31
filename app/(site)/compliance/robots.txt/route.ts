export function GET() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.peaknewsdaily.com'
  const baseUrl = configured
    .replace('https://peaknewsdaily.com', 'https://www.peaknewsdaily.com')
    .replace('http://peaknewsdaily.com', 'https://www.peaknewsdaily.com')

  return new Response(`User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml`, {
    headers: { 'Content-Type': 'text/plain' },
  })
}

