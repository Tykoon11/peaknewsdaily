"use client"
import Link from 'next/link'
import { useState } from 'react'

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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden" style={{ zIndex: 9999 }}>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-xl isolate" style={{ zIndex: 10000 }}>
            <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <div className="space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={category.slug === 'crypto' ? '/markets/crypto' : category.slug === 'trading' ? '/education' : `/category/${category.slug}`}
                    className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.slug === 'crypto' ? 'Crypto' : category.slug === 'trading' ? 'Education' : category.name}
                  </Link>
                ))}

                <div className="py-2">
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide px-3 py-2">
                    Markets
                  </div>
                  <Link
                    href="/markets/stocks"
                    className="block px-6 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Stock Market
                  </Link>
                  <Link
                    href="/markets/crypto"
                    className="block px-6 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Cryptocurrency
                  </Link>
                  <Link
                    href="/markets/calendar"
                    className="block px-6 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Economic Calendar
                  </Link>
                </div>

                <Link
                  href="/news"
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  News
                </Link>

                {isStaff && (
                  <>
                    <div className="border-t border-gray-200 dark:border-gray-700 my-4" />
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide px-3 py-2">
                      Staff
                    </div>
                    <Link
                      href="/submit"
                      className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Submit
                    </Link>
                    <Link
                      href="/admin"
                      className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin
                    </Link>
                  </>
                )}
              </div>
            </nav>

            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
              {!signedIn ? (
                <Link
                  href="/api/auth/signin"
                  className="block w-full px-4 py-3 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sign in
                </Link>
              ) : (
                <form action="/api/auth/signout" method="post">
                  <button
                    type="submit"
                    className="block w-full px-4 py-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign out
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}