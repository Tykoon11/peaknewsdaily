import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'
import { auth, signOut } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import MobileNav from '@/components/mobile-nav'
import DesktopNavLinks from '@/components/desktop-nav-links'

export default async function Nav() {
  const session = await auth()
  const categories = await prisma.category.findMany({ orderBy: { name: 'asc' } })
  const role = (session?.user as any)?.role as string | undefined
  const isStaff = role === 'editor' || role === 'admin'

  async function doSignOut() {
    'use server'
    await signOut()
  }
  return (
    <header className="border-b site-header">
      <div className="container relative flex items-center justify-between py-3">
        <Link href="/" className="font-semibold site-title inline-flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt={process.env.NEXT_PUBLIC_SITE_NAME || 'PeakNewsDaily'} className="h-8 md:h-10 w-auto" />
          <span className="sr-only">{process.env.NEXT_PUBLIC_SITE_NAME || 'PeakNewsDaily'}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2 text-sm site-nav">
          <DesktopNavLinks categories={categories} isStaff={isStaff} signedIn={!!session?.user} />
          {!session?.user ? (
            <Link href="/api/auth/signin" className="hover:underline nav-link">Sign in</Link>
          ) : (
            <form action={doSignOut}>
              <button className="hover:underline nav-link" type="submit">Sign out</button>
            </form>
          )}
          <ThemeToggle />
        </nav>
        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <MobileNav categories={categories} isStaff={isStaff} signedIn={!!session?.user} />
        </div>
      </div>
    </header>
  )
}
