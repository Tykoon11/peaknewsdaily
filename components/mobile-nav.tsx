"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/theme-toggle'

type Category = { id: string; name: string; slug: string }

export default function MobileNav({
  categories,
  isStaff,
  signedIn
}: {
  categories: Category[]
  isStaff: boolean
  signedIn: boolean
}) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close on Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])
  // Body scroll lock when menu open
  useEffect(() => {
    const original = document.body.style.overflow
    if (open) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = original }
  }, [open])
  return (
    <div className="md:hidden">
      <button
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="inline-flex items-center justify-center rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-offset-2"
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          className={`h-6 w-6 transition-all duration-300 ${open ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {/* Mobile panel with animations */}
      <div 
        className={`fixed inset-0 z-30 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>
      <div className={`fixed right-0 top-0 z-40 w-80 h-screen bg-background border-l transition-transform duration-300 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-6 pt-20">
            <nav className="flex flex-col space-y-3" aria-label="Mobile navigation">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={category.slug === 'crypto' ? '/markets/crypto' : category.slug === 'trading' ? '/education' : `/category/${category.slug}`}
                  className="block px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md"
                  onClick={() => setOpen(false)}
                >
                  {category.slug === 'crypto' ? '₿ Crypto' : category.slug === 'trading' ? '📚 Trading' : category.name}
                </Link>
              ))}
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-semibold text-foreground">Markets</div>
                <Link
                  href="/markets/stocks"
                  className="block px-6 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md"
                  onClick={() => setOpen(false)}
                >
                  📈 Stocks
                </Link>
                <Link
                  href="/markets/crypto"
                  className="block px-6 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md"
                  onClick={() => setOpen(false)}
                >
                  ₿ Cryptocurrency
                </Link>
                <Link
                  href="/markets/calendar"
                  className="block px-6 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md"
                  onClick={() => setOpen(false)}
                >
                  📅 Economic Calendar
                </Link>
              </div>
              <Link
                href="/news"
                className="block px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setOpen(false)}
              >
                News
              </Link>
              <Link
                href="/submit"
                className="block px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setOpen(false)}
              >
                Submit
              </Link>
              {isStaff && (
                <Link
                  href="/admin"
                  className="block px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md"
                  onClick={() => setOpen(false)}
                >
                  Admin
                </Link>
              )}
            </nav>
          </div>
          <div className="border-t p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Theme</span>
              <ThemeToggle />
            </div>
            {!signedIn ? (
              <Link
                href="/api/auth/signin"
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                onClick={() => setOpen(false)}
              >
                Sign in
              </Link>
            ) : (
              <form action="/api/auth/signout" method="post">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                  onClick={() => setOpen(false)}
                >
                  Sign out
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
