import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'
import { auth, signOut } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import MobileNav from '@/components/mobile-nav'

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
        <Link href="/" className="font-semibold site-title">{process.env.NEXT_PUBLIC_SITE_NAME || 'PeakNewsDaily'}</Link>
        <nav className="hidden md:flex items-center gap-2 text-sm site-nav">
          {(() => {
            const primary = categories.slice(0, 6)
            const extra = categories.slice(6)
            return (
              <>
                {primary.map((c) => (
                  <Link key={c.id} href={`/category/${c.slug}`} className="hover:underline nav-link">{c.name}</Link>
                ))}
                {extra.length > 0 && (
                  <details className="relative group">
                    <summary className="nav-link cursor-pointer list-none">More ▾</summary>
                    <div className="more-menu">
                      {extra.map((c) => (
                        <Link key={c.id} href={`/category/${c.slug}`} className="more-item">{c.name}</Link>
                      ))}
                    </div>
                  </details>
                )}
              </>
            )
          })()}
          <Link href="/submit" className="hover:underline nav-link">Submit</Link>
          {isStaff && <Link href="/admin" className="hover:underline nav-link">Admin</Link>}
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
