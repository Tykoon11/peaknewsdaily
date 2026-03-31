import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const configured = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.peaknewsdaily.com'
  const baseUrl = configured
    .replace('https://peaknewsdaily.com', 'https://www.peaknewsdaily.com')
    .replace('http://peaknewsdaily.com', 'https://www.peaknewsdaily.com')

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/_next/',
          '/private/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}