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
    <header className="sticky top-0 z-40 w-full border-b site-header backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-slate-900/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/logo.svg" 
              alt={process.env.NEXT_PUBLIC_SITE_NAME || 'PeakNewsDaily'} 
              className="h-6 w-auto" 
            />
            <span className="sr-only">{process.env.NEXT_PUBLIC_SITE_NAME || 'PeakNewsDaily'}</span>
          </Link>
        </div>

        {/* Desktop Navigation and Actions */}
        <div className="hidden md:flex items-center flex-1 justify-between ml-8">
          <nav className="flex items-center space-x-4 text-sm font-medium">
            <Link 
              href="/" 
              className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap"
            >
              Home
            </Link>
            {categories.slice(0, 3).map((category) => (
              <Link
                key={category.id}
                href={category.slug === 'crypto' ? '/markets/crypto' : category.slug === 'trading' ? '/education' : `/category/${category.slug}`}
                className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap"
              >
                {category.slug === 'crypto' ? '₿ Crypto' : category.slug === 'trading' ? '📚 Trading' : category.name}
              </Link>
            ))}
            {categories.length > 3 && (
              <div className="relative group">
                <button className="flex items-center space-x-1 transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap">
                  <span>More</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 rounded-md border bg-background shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:border-gray-700 z-50">
                  <div className="py-1">
                    {categories.slice(3).filter(category => category.slug !== 'news').map((category) => (
                      <Link
                        key={category.id}
                        href={category.slug === 'crypto' ? '/markets/crypto' : category.slug === 'trading' ? '/education' : `/category/${category.slug}`}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
                      >
                        {category.slug === 'crypto' ? '₿ Crypto' : category.slug === 'trading' ? '📚 Trading' : category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div className="relative group">
              <button className="flex items-center space-x-1 transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap">
                <span>Markets</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 rounded-md border bg-background shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:border-gray-700 z-50">
                <div className="py-1">
                  <Link
                    href="/markets/stocks"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
                  >
                    📈 Stocks
                  </Link>
                  <Link
                    href="/markets/crypto"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
                  >
                    ₿ Cryptocurrency
                  </Link>
                  <Link
                    href="/markets/calendar"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
                  >
                    📅 Economic Calendar
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              href="/news" 
              className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap"
            >
              News
            </Link>
            {isStaff && (
              <Link 
                href="/submit" 
                className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap"
              >
                Submit
              </Link>
            )}
            {isStaff && (
              <Link 
                href="/admin" 
                className="transition-colors hover:text-foreground/80 text-foreground/60 whitespace-nowrap"
              >
                Admin
              </Link>
            )}
          </nav>
          
          <div className="flex items-center space-x-3">
            {!session?.user ? (
              <Link
                href="/api/auth/signin"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90 h-9 px-4 py-2 whitespace-nowrap shadow-sm"
              >
                Sign in
              </Link>
            ) : (
              <form action={doSignOut}>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground text-sm font-medium transition-colors hover:bg-secondary/80 h-9 px-4 py-2 whitespace-nowrap border"
                >
                  Sign out
                </button>
              </form>
            )}
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <MobileNav categories={categories} isStaff={isStaff} signedIn={!!session?.user} />
        </div>
      </div>
    </header>
  )
}
