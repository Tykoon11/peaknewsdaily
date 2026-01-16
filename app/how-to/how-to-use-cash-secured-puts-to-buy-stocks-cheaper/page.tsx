import type { Metadata } from 'next'
import Link from 'next/link'
import { ShoppingCart, TrendingDown, Shield, CheckCircle, DollarSign, Target, Calculator, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cash-Secured Puts: Buy Stocks for Less - PeakNewsDaily',
  description: 'Sell cash-secured puts to get paid while waiting to buy stocks at a discount. Learn strike selection, collateral sizing, and risk control.',
  keywords: 'cash secured puts, sell put option, wheel strategy, buy stocks cheaper',
  openGraph: {
    title: 'Cash-Secured Puts: Buy Stocks for Less',
    description: 'Master cash-secured puts to buy quality stocks at discounted prices while earning premium.',
    type: 'article',
  },
}

export default function CashSecuredPutsPage() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6">
            <ShoppingCart className="h-8 w-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6">
            How to Use Cash-Secured Puts to Buy Stocks Cheaper
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Get paid while waiting to buy quality stocks at discounted prices—the cash-secured put strategy explained.
          </p>
        </header>

        <div className="space-y-12">
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Calculator className="h-8 w-8 mr-3 text-blue-600" />
              What is a Cash-Secured Put?
            </h2>
            
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg mb-4">
                A cash-secured put is when you sell a put option at a strike price where you're happy to buy the stock. 
                You reserve enough cash to purchase 100 shares if assigned, and collect premium now.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Core Concept:</h3>
                <p>If the stock stays above your strike → keep the premium. If below → buy stocks at your target price.</p>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <BarChart3 className="h-8 w-8 mr-3 text-green-600" />
              Example Trade
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">Example: AAPL Cash-Secured Put</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 dark:text-white">Setup:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Sell 1 put, $45 strike, 30 DTE</li>
                    <li>• Collect $1.10 premium ($110 total)</li>
                    <li>• Reserve $4,500 cash as collateral</li>
                    <li>• Target entry price: $45</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 dark:text-white">Outcomes:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>If not assigned:</strong> Keep $110 premium</li>
                    <li>• <strong>If assigned:</strong> Effective cost = $43.90/share</li>
                    <li>• <strong>Return on cash:</strong> 2.4% in 30 days</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Is this the same as the first leg of 'the Wheel'?",
                  answer: "Yes, cash-secured puts are the foundation of the wheel strategy—sell puts until assigned, then sell covered calls."
                },
                {
                  question: "What if the stock crashes?",
                  answer: "You still must buy at the strike price. Manage risk through position sizing and only target stocks you'd hold long-term."
                },
                {
                  question: "Can I use margin as collateral?",
                  answer: "Some brokers allow T-bills or margin equivalents as collateral—check your broker's specific policies."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-slate-200 dark:border-slate-700 pb-4 last:border-b-0">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation Section */}
          <nav className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Link 
                    href="/how-to/how-to-trade-covered-calls-for-monthly-income" 
                    className="block p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                  >
                    <h3 className="font-semibold text-green-900 dark:text-green-100">← Covered Calls</h3>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">Generate monthly income</p>
                  </Link>
                </div>
                
                <div>
                  <Link 
                    href="/how-to/how-to-set-up-a-protective-put-hedging-101" 
                    className="block p-4 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                  >
                    <h3 className="font-semibold text-red-900 dark:text-red-100">Protective Puts →</h3>
                    <p className="text-sm text-red-700 dark:text-red-300 mt-1">Hedging fundamentals</p>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </article>
  )
}