import './globals.css'
import { ReactNode, Suspense } from 'react'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Providers } from '@/components/providers'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Plausible from '@/components/plausible'
import ThemeScript from '@/components/theme-script'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME || 'PeakNewsDaily'}`,
    default: process.env.NEXT_PUBLIC_SITE_NAME || 'PeakNewsDaily'
  },
  description: 'Professional trading, investing, and cryptocurrency news platform with live market updates and expert analysis',
  manifest: '/manifest.webmanifest',
  other: {
    'google-adsense-account': 'ca-pub-3299978316677420'
  }
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange={false}
          storageKey="theme"
        >
          <Providers>
            <Suspense>
              <Plausible />
            </Suspense>
            <Script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3299978316677420"
              crossOrigin="anonymous"
              strategy="afterInteractive"
            />
            <div className="site min-h-screen bg-white dark:bg-gray-900 flex flex-col">
              <Nav />
              <main className="flex-1 bg-white dark:bg-gray-900">
                {children}
              </main>
              <Footer />
            </div>
            <SpeedInsights />
            <Analytics />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
