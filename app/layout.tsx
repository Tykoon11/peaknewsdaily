import './globals.css'
import { ReactNode, Suspense } from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Providers } from '@/components/providers'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Plausible from '@/components/plausible'

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <Suspense>
              <Plausible />
            </Suspense>
            <Nav />
            {children}
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
