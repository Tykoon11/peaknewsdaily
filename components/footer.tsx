import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 mt-16 site-footer">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">PeakNewsDaily</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">LIVE MARKET INTELLIGENCE</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-md">
              Professional financial news and market analysis platform delivering real-time insights across stocks, crypto, forex, and commodities. Stay ahead with institutional-grade data and expert commentary.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 dark:text-green-400 font-medium">LIVE DATA</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Updated every 5 seconds
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wide">Markets</h4>
            <ul className="space-y-3">
              <li><Link href="/markets/stocks" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Stock Market</Link></li>
              <li><Link href="/markets/crypto" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cryptocurrency</Link></li>
              <li><Link href="/markets/calendar" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Economic Calendar</Link></li>
              <li><Link href="/news" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Market News</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wide">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/education" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Trading Education</Link></li>
              <li><Link href="/category/investing" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Investment Guide</Link></li>
              <li><Link href="/category/brokers" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Broker Reviews</Link></li>
              <li><Link href="/submit" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Submit Content</Link></li>
            </ul>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1">Risk Disclaimer</h5>
              <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                Trading and investing involves substantial risk of loss. Past performance is not indicative of future results. 
                All information is for educational purposes only. Consult with financial professionals before making investment decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
              <span className="font-medium text-gray-700 dark:text-gray-300">© {new Date().getFullYear()} PeakNewsDaily</span>
              <Link href="/legal/terms" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Terms of Service</Link>
              <Link href="/legal/privacy" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link href="/legal/community-guidelines" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Community Guidelines</Link>
              <Link href="/legal/dmca" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">DMCA</Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Professional market intelligence platform
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                Real-time data
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
