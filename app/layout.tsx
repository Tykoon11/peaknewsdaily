import './globals.css'
import { ReactNode, Suspense } from 'react'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Providers } from '@/components/providers'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Plausible from '@/components/plausible'
// Theme switching removed; Source is the default style

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME || 'PeakNewsDaily'}`,
    default: process.env.NEXT_PUBLIC_SITE_NAME || 'PeakNewsDaily'
  },
  description: 'Modern, moderated media with safe uploads and community',
  manifest: '/manifest.webmanifest'
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="source">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <Suspense>
              <Plausible />
            </Suspense>
            {/* theme stylesheet */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Oswald:wght@500;700&display=swap" />
            <link rel="stylesheet" href="/themes/source.css" />
            {/* AdSense script is hardcoded in app/head.tsx */}
            <div className="site">
              <Nav />
              {children}
              <Footer />
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
