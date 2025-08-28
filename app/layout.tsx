import './globals.css'
import { ReactNode, Suspense } from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Providers } from '@/components/providers'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Plausible from '@/components/plausible'
import { getActiveTheme } from '@/lib/settings'

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
  const activeTheme = await getActiveTheme()
  return (
    <html lang="en" suppressHydrationWarning data-theme={activeTheme}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <Suspense>
              <Plausible />
            </Suspense>
            {/* theme stylesheet */}
            <link rel="stylesheet" href={`/themes/${activeTheme}.css`} />
            <Nav />
            {children}
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
