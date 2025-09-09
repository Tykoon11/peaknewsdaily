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
    <div className="lg:hidden">
      <button
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="inline-flex items-center justify-center rounded-md p-1.5 xs:p-2 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          className={`h-5 w-5 xs:h-6 xs:w-6 transition-all duration-300 ${open ? 'rotate-90' : ''}`}
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
      <div className={`fixed right-0 top-0 z-40 w-72 xs:w-80 h-screen bg-slate-900 border-l border-slate-700 transition-transform duration-300 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-4 xs:p-6 pt-16 xs:pt-20">
            <nav className="flex flex-col space-y-2 xs:space-y-3" aria-label="Mobile navigation">
              <Link
                href="/"
                className="block px-3 py-2.5 xs:py-2 text-sm xs:text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/50 transition-colors rounded-md"
                onClick={() => setOpen(false)}
              >
                🏠 Home
              </Link>
              {categories.filter(category => category.slug !== 'news').map((category) => (
                <Link
                  key={category.id}
                  href={category.slug === 'crypto' ? '/markets/crypto' : category.slug === 'trading' ? '/education' : `/category/${category.slug}`}
                  className="block px-3 py-2.5 xs:py-2 text-sm xs:text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/50 transition-colors rounded-md"
                  onClick={() => setOpen(false)}
                >
                  {category.slug === 'crypto' ? '₿ Crypto' : category.slug === 'trading' ? '📚 Trading' : category.name}
                </Link>
              ))}
              <div className="space-y-1 xs:space-y-1">
                <div className="px-3 py-2 text-sm xs:text-base font-semibold text-emerald-400 border-b border-slate-700/50">📊 Markets</div>
                <Link
                  href="/markets/stocks"
                  className="block px-5 xs:px-6 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/30 transition-colors rounded-md"
                  onClick={() => setOpen(false)}
                >
                  📈 Stocks
                </Link>
                <Link
                  href="/markets/crypto"
                  className="block px-5 xs:px-6 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/30 transition-colors rounded-md"
                  onClick={() => setOpen(false)}
                >
                  ₿ Cryptocurrency
                </Link>
                <Link
                  href="/markets/calendar"
                  className="block px-5 xs:px-6 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/30 transition-colors rounded-md"
                  onClick={() => setOpen(false)}
                >
                  📅 Economic Calendar
                </Link>
              </div>
              <Link
                href="/news"
                className="flex items-center px-3 py-2.5 xs:py-2 text-sm xs:text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/50 transition-colors rounded-md"
                onClick={() => setOpen(false)}
              >
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse mr-2"></div>
                📰 News
              </Link>
              {isStaff && (
                <Link
                  href="/submit"
                  className="block px-3 py-2.5 xs:py-2 text-sm xs:text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/50 transition-colors rounded-md"
                  onClick={() => setOpen(false)}
                >
                  ✏️ Submit
                </Link>
              )}
              {isStaff && (
                <Link
                  href="/admin"
                  className="block px-3 py-2.5 xs:py-2 text-sm xs:text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/50 transition-colors rounded-md"
                  onClick={() => setOpen(false)}
                >
                  ⚙️ Admin
                </Link>
              )}
            </nav>
          </div>
          <div className="border-t border-slate-700/50 p-4 xs:p-6 space-y-3 xs:space-y-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-300">🎨 Theme</span>
              <ThemeToggle />
            </div>
            {!signedIn ? (
              <Link
                href="/api/auth/signin"
                className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-emerald-500 to-blue-600 px-4 py-2.5 xs:py-2 text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                onClick={() => setOpen(false)}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Sign in
              </Link>
            ) : (
              <form action="/api/auth/signout" method="post">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-slate-700/80 hover:bg-slate-600/80 border border-slate-600/50 px-4 py-2.5 xs:py-2 text-sm font-medium text-slate-200 hover:text-white shadow transition-colors backdrop-blur-sm"
                  onClick={() => setOpen(false)}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
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
