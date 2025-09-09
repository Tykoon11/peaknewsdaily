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
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 shadow-lg shadow-slate-900/20">
      {/* Premium Trading Platform Header */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative container flex h-14 xs:h-16 max-w-screen-2xl items-center justify-between px-3 xs:px-4">
        {/* Premium Logo Section */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2 xs:space-x-3 group">
            <div className="p-1.5 xs:p-2 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-md xs:rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/logo.svg" 
                alt={process.env.NEXT_PUBLIC_SITE_NAME || 'PeakNewsDaily'} 
                className="h-4 xs:h-5 sm:h-6 w-auto filter brightness-0 invert" 
              />
            </div>
            <div className="hidden xs:block">
              <div className="text-white font-bold text-base xs:text-lg tracking-tight">
                <span className="xs:hidden">PND</span>
                <span className="hidden xs:inline sm:hidden">Peak News</span>
                <span className="hidden sm:inline">{process.env.NEXT_PUBLIC_SITE_NAME || 'PeakNewsDaily'}</span>
              </div>
              <div className="text-emerald-400 text-xs font-medium uppercase tracking-wider hidden sm:block">
                Live Market Intelligence
              </div>
            </div>
            <span className="sr-only">{process.env.NEXT_PUBLIC_SITE_NAME || 'PeakNewsDaily'}</span>
          </Link>
        </div>

        {/* Premium Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-1 justify-between ml-6 xl:ml-8">
          <nav className="flex items-center space-x-4 xl:space-x-6">
            <Link 
              href="/" 
              className="relative px-2 xl:px-3 py-2 text-slate-300 hover:text-white font-medium transition-all duration-300 group whitespace-nowrap text-sm xl:text-base"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            </Link>
            {categories.slice(0, 3).map((category, index) => {
              const categoryGradients = [
                'from-emerald-500/20 to-teal-500/20',
                'from-blue-500/20 to-indigo-500/20',
                'from-purple-500/20 to-pink-500/20'
              ];
              return (
                <Link
                  key={category.id}
                  href={category.slug === 'crypto' ? '/markets/crypto' : category.slug === 'trading' ? '/education' : `/category/${category.slug}`}
                  className="relative px-2 xl:px-3 py-2 text-slate-300 hover:text-white font-medium transition-all duration-300 group whitespace-nowrap text-sm xl:text-base"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {category.slug === 'crypto' && <span className="text-orange-400">₿</span>}
                    {category.slug === 'trading' && <span className="text-blue-400">📚</span>}
                    {category.slug === 'crypto' ? 'Crypto' : category.slug === 'trading' ? 'Trading' : category.name}
                  </span>
                  <div className={`absolute inset-0 bg-gradient-to-r ${categoryGradients[index % categoryGradients.length]} opacity-0 group-hover:opacity-100 transition-opacity rounded-lg`}></div>
                </Link>
              )
            })}
            {categories.length > 3 && (
              <div className="relative group">
                <button className="relative px-2 xl:px-3 py-2 text-slate-300 hover:text-white font-medium transition-all duration-300 group whitespace-nowrap flex items-center gap-1 xl:gap-2 text-sm xl:text-base">
                  <span className="relative z-10">More</span>
                  <svg
                    className="w-3 h-3 xl:w-4 xl:h-4 transition-transform group-hover:rotate-180 relative z-10"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-slate-900/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-2">
                    {categories.slice(3).filter(category => category.slug !== 'news').map((category, index) => (
                      <Link
                        key={category.id}
                        href={category.slug === 'crypto' ? '/markets/crypto' : category.slug === 'trading' ? '/education' : `/category/${category.slug}`}
                        className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-slate-800/50 hover:to-slate-700/50 rounded-lg transition-all duration-200 whitespace-nowrap group/item"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${['from-emerald-400 to-teal-400', 'from-blue-400 to-indigo-400', 'from-purple-400 to-pink-400', 'from-orange-400 to-red-400'][index % 4]}`}></div>
                        {category.slug === 'crypto' ? '₿ Crypto' : category.slug === 'trading' ? '📚 Trading' : category.name}
                        <svg className="w-3 h-3 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div className="relative group">
              <button className="relative px-2 xl:px-3 py-2 text-slate-300 hover:text-white font-medium transition-all duration-300 group whitespace-nowrap flex items-center gap-1 xl:gap-2 text-sm xl:text-base">
                <div className="w-1.5 h-1.5 xl:w-2 xl:h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="relative z-10">Markets</span>
                <svg
                  className="w-3 h-3 xl:w-4 xl:h-4 transition-transform group-hover:rotate-180 relative z-10"
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
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-slate-900/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-2">
                  <Link
                    href="/markets/stocks"
                    className="flex items-center gap-3 px-3 py-3 text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-green-900/30 hover:to-emerald-900/30 rounded-lg transition-all duration-200 whitespace-nowrap group/item"
                  >
                    <div className="p-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Stocks</div>
                      <div className="text-xs text-slate-500">Equities & Indices</div>
                    </div>
                    <svg className="w-3 h-3 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/markets/crypto"
                    className="flex items-center gap-3 px-3 py-3 text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-900/30 hover:to-amber-900/30 rounded-lg transition-all duration-200 whitespace-nowrap group/item"
                  >
                    <div className="p-1 bg-gradient-to-r from-orange-500 to-amber-600 rounded-md">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0L8.59 10.59L0 12l8.59 1.41L12 24l3.41-10.59L24 12l-8.59-1.41z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Cryptocurrency</div>
                      <div className="text-xs text-slate-500">Digital Assets</div>
                    </div>
                    <svg className="w-3 h-3 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/markets/calendar"
                    className="flex items-center gap-3 px-3 py-3 text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-indigo-900/30 rounded-lg transition-all duration-200 whitespace-nowrap group/item"
                  >
                    <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Economic Calendar</div>
                      <div className="text-xs text-slate-500">Market Events</div>
                    </div>
                    <svg className="w-3 h-3 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              href="/news" 
              className="relative px-2 xl:px-3 py-2 text-slate-300 hover:text-white font-medium transition-all duration-300 group whitespace-nowrap flex items-center gap-1 xl:gap-2 text-sm xl:text-base"
            >
              <div className="w-1.5 h-1.5 xl:w-2 xl:h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="relative z-10">News</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            </Link>
            {isStaff && (
              <Link 
                href="/submit" 
                className="relative px-2 xl:px-3 py-2 text-slate-300 hover:text-white font-medium transition-all duration-300 group whitespace-nowrap text-sm xl:text-base"
              >
                <span className="relative z-10">Submit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              </Link>
            )}
            {isStaff && (
              <Link 
                href="/admin" 
                className="relative px-2 xl:px-3 py-2 text-slate-300 hover:text-white font-medium transition-all duration-300 group whitespace-nowrap text-sm xl:text-base"
              >
                <span className="relative z-10">Admin</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              </Link>
            )}
          </nav>
          
          {/* Premium Action Buttons */}
          <div className="flex items-center space-x-2 xl:space-x-3">
            {!session?.user ? (
              <Link
                href="/api/auth/signin"
                className="inline-flex items-center justify-center px-4 xl:px-6 py-1.5 xl:py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-md xl:rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5 transition-all duration-200 group whitespace-nowrap text-sm xl:text-base"
              >
                <svg className="w-3 h-3 xl:w-4 xl:h-4 mr-1.5 xl:mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span className="hidden xl:inline">Sign in</span>
                <span className="xl:hidden">Login</span>
              </Link>
            ) : (
              <form action={doSignOut}>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-4 xl:px-6 py-1.5 xl:py-2 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 text-slate-300 hover:text-white font-medium rounded-md xl:rounded-lg transition-all duration-200 group whitespace-nowrap backdrop-blur-sm text-sm xl:text-base"
                >
                  <svg className="w-3 h-3 xl:w-4 xl:h-4 mr-1.5 xl:mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="hidden xl:inline">Sign out</span>
                  <span className="xl:hidden">Logout</span>
                </button>
              </form>
            )}
            <div className="p-1.5 xl:p-2 bg-slate-800/50 rounded-md xl:rounded-lg border border-slate-700/50">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Premium Mobile Menu */}
        <div className="flex lg:hidden items-center space-x-2 xs:space-x-3">
          <div className="p-1.5 xs:p-2 bg-slate-800/50 rounded-md xs:rounded-lg border border-slate-700/50">
            <ThemeToggle />
          </div>
          <MobileNav categories={categories} isStaff={isStaff} signedIn={!!session?.user} />
        </div>
      </div>
    </header>
  )
}
