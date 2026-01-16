import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'
import { prisma } from '@/lib/prisma'
import MobileNav from '@/components/mobile-nav'

export default async function Nav() {
  const categories = await prisma.category.findMany({ orderBy: { name: 'asc' } })

  return (
    <header className="site-header sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                {process.env.NEXT_PUBLIC_SITE_NAME || 'PeakNewsDaily'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link 
              href="/" 
              className="nav-link px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Home
            </Link>
            
            {categories.slice(0, 4).map((category) => (
              <Link
                key={category.id}
                href={category.slug === 'crypto' ? '/markets/crypto' : category.slug === 'trading' ? '/education' : `/category/${category.slug}`}
                className="nav-link px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {category.slug === 'crypto' ? 'Crypto' : category.slug === 'trading' ? 'Education' : category.name}
              </Link>
            ))}

            {/* Markets Dropdown */}
            <div className="relative group">
              <button className="nav-link px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center">
                Markets
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/markets/stocks" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                  Stock Market
                </Link>
                <Link href="/markets/crypto" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                  Cryptocurrency
                </Link>
                <Link href="/markets/calendar" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                  Economic Calendar
                </Link>
              </div>
            </div>

            <Link 
              href="/news" 
              className="nav-link px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              News
            </Link>

          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <MobileNav categories={categories} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}