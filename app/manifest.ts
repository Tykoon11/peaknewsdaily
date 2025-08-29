export default function manifest() {
  return {
    name: process.env.NEXT_PUBLIC_SITE_NAME || 'PeakNewsDaily',
    short_name: 'PeakNews',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#111827',
    icons: [
      { src: '/logo.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' }
    ]
  }
}
