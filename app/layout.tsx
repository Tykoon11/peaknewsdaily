import './globals.css'
import { ReactNode, Suspense } from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Providers } from '@/components/providers'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Plausible from '@/components/plausible'
import { getActiveTheme, getThemeById, ensureDefaultThemes } from '@/lib/settings'

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
  await ensureDefaultThemes()
  const activeTheme = await getActiveTheme()
  const theme = await getThemeById(activeTheme)
  return (
    <html lang="en" suppressHydrationWarning data-theme={activeTheme}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <Suspense>
              <Plausible />
            </Suspense>
            {/* theme stylesheet */}
            {theme?.fontsHref && (
              <>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="stylesheet" href={theme.fontsHref} />
              </>
            )}
            <link rel="stylesheet" href={`/themes/${theme?.cssFile || `${activeTheme}.css`}`} />
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
