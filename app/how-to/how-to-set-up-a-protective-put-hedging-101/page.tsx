import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, TrendingDown, Calculator, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Protective Puts: Simple Portfolio Hedge - PeakNewsDaily',
  description: 'Learn to cap downside with protective puts. Choose expirations, strike distances, and calculate hedge cost vs. protection.',
  keywords: 'protective put, portfolio hedge, married put, downside protection',
}

export default function ProtectivePutPage() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-900 dark:from-white dark:via-emerald-100 dark:to-teal-100 bg-clip-text text-transparent mb-6">
            How to Set Up a Protective Put (Hedging 101)
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Cap your downside risk with protective puts—portfolio insurance for uncertain times.
          </p>
        </header>

        <div className="space-y-12">
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">What is a Protective Put?</h2>
            <p className="text-lg mb-4">
              A protective put is portfolio insurance—you own shares and buy a put as protection to limit losses below a strike price.
            </p>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-6">
              <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">When to Use:</h3>
              <ul className="space-y-1">
                <li>• Before earnings announcements</li>
                <li>• During high market uncertainty</li>
                <li>• To protect unrealized gains</li>
                <li>• As event-driven insurance</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">FAQ</h2>
            <div className="space-y-6">
              {[
                {
                  question: "Is a collar cheaper than a protective put?",
                  answer: "Yes—selling a covered call offsets put cost but caps upside. Choose based on your market outlook."
                },
                {
                  question: "When should I remove the hedge?",
                  answer: "After the catalyst passes, volatility normalizes, or when hedge cost exceeds benefit."
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
                href="/how-to/how-to-use-cash-secured-puts-to-buy-stocks-cheaper" 
                className="block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              >
                <h3 className="font-semibold text-blue-900 dark:text-blue-100">← Cash-Secured Puts</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">Buy stocks at a discount</p>
              </Link>
            </div>
            
            <div>
              <Link 
                href="/how-to/how-to-read-an-option-chain-delta-theta-iv" 
                className="block p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
              >
                <h3 className="font-semibold text-purple-900 dark:text-purple-100">Read Option Chains →</h3>
                <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">Delta, theta, IV explained</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </article>
  )
}