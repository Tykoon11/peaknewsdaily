import type { Metadata } from 'next'
import Link from 'next/link'
import { BarChart3, Eye, Calculator, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Read an Option Chain: Delta, Theta & IV Explained - PeakNewsDaily',
  description: 'Master option chain columns fast—bid/ask, volume/OI, delta, theta, vega, IV—so you can choose better strikes and expirations.',
  keywords: 'read option chain, delta theta vega iv explained, option greeks',
}

export default function OptionChainPage() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl mb-6">
            <Eye className="h-8 w-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-purple-800 to-indigo-900 dark:from-white dark:via-purple-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6">
            How to Read an Option Chain: Delta, Theta & IV
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Master option chain columns to choose better strikes and expirations with confidence.
          </p>
        </header>

        <div className="space-y-12">
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <BarChart3 className="h-8 w-8 mr-3 text-purple-600" />
              Key Option Chain Columns
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Basic Data:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Bid/Ask:</strong> What buyers/sellers are willing to pay
                      <p className="text-sm text-slate-600 dark:text-slate-400">Tighter spreads = better liquidity</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Volume:</strong> Contracts traded today
                      <p className="text-sm text-slate-600 dark:text-slate-400">Higher volume = easier to get fills</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Open Interest:</strong> Total open contracts
                      <p className="text-sm text-slate-600 dark:text-slate-400">Shows long-term interest</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">The Greeks:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Delta:</strong> Price sensitivity + probability
                      <p className="text-sm text-slate-600 dark:text-slate-400">0.30 delta ≈ 30% chance ITM</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calculator className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Theta:</strong> Daily time decay
                      <p className="text-sm text-slate-600 dark:text-slate-400">Benefits sellers, hurts buyers</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Vega & IV:</strong> Volatility sensitivity
                      <p className="text-sm text-slate-600 dark:text-slate-400">Higher IV = pricier premiums</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Practical Strike Selection
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">Delta-Based Guidelines:</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Income Strategies</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Delta 0.20-0.35</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Covered calls, cash-secured puts</p>
                </div>
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Directional Trades</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Delta 0.35-0.60</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Moderate conviction plays</p>
                </div>
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">High Conviction</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Delta 0.60+</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Strong directional bets</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              FAQ
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What's gamma and why does it matter?",
                  answer: "Gamma measures how fast delta changes. It's highest near expiration for ATM options—affects how quickly your position's sensitivity changes."
                },
                {
                  question: "What is IV Rank?",
                  answer: "IV Rank shows current implied volatility relative to its 52-week range. High IV rank (>70) favors premium selling strategies."
                },
                {
                  question: "Volume vs Open Interest—which matters more?",
                  answer: "Both matter. Volume shows today's activity, OI shows sustained interest. Look for strikes with both high volume and OI for best liquidity."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-slate-200 dark:border-slate-700 pb-4 last:border-b-0">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      
      {/* Navigation Section */}
      <nav className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Link 
                href="/how-to/how-to-set-up-a-protective-put-hedging-101" 
                className="block p-4 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
              >
                <h3 className="font-semibold text-red-900 dark:text-red-100">← Protective Puts</h3>
                <p className="text-sm text-red-700 dark:text-red-300 mt-1">Hedging fundamentals</p>
              </Link>
            </div>
            
            <div>
              <Link 
                href="/how-to/how-to-avoid-assignment-risk-on-options" 
                className="block p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
              >
                <h3 className="font-semibold text-orange-900 dark:text-orange-100">Avoid Assignment Risk →</h3>
                <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">Manage options safely</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </article>
  )
}