import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, TrendingUp, AlertTriangle, CheckCircle, DollarSign, Target, Calendar, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Covered Calls: Step-by-Step for Monthly Income - PeakNewsDaily',
  description: 'Learn how to sell covered calls to generate monthly income, pick strike prices, manage assignment risk, and roll positions like a pro.',
  keywords: 'covered calls, sell call option, wheel strategy, assignment risk, covered call income',
  openGraph: {
    title: 'Covered Calls: Step-by-Step for Monthly Income',
    description: 'Master covered calls strategy for consistent monthly income from your stock holdings.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Covered Calls: Step-by-Step for Monthly Income',
    description: 'Master covered calls strategy for consistent monthly income from your stock holdings.',
  }
}

export default function CoveredCallsPage() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-6">
            <DollarSign className="h-8 w-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-green-800 to-emerald-900 dark:from-white dark:via-green-100 dark:to-emerald-100 bg-clip-text text-transparent mb-6">
            How to Trade Covered Calls for Monthly Income
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Generate consistent monthly income by selling covered calls against stocks you already own—a conservative options strategy for building cash flow.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
              <CheckCircle className="w-4 h-4 mr-1" />
              Conservative Strategy
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
              <Calendar className="w-4 h-4 mr-1" />
              Monthly Income
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full">
              <Target className="w-4 h-4 mr-1" />
              Capped Upside
            </span>
          </div>
        </header>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* What is a Covered Call */}
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Calculator className="h-8 w-8 mr-3 text-blue-600" />
              What a Covered Call Is (Quick Refresher)
            </h2>
            
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg mb-4">
                A covered call is a conservative options strategy where you sell call options against stock you already own. 
                You earn premium upfront and can potentially repeat this monthly—at the cost of capping upside above your call strike.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Key Components:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Own 100+ shares</strong> (per contract) of the underlying stock</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Sell call options</strong> above current price to collect premium</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Keep premium</strong> regardless of outcome</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* When Covered Calls Make Sense */}
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <TrendingUp className="h-8 w-8 mr-3 text-green-600" />
              When Covered Calls Make Sense
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Ideal Conditions:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>You own 100+ shares (per contract)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Neutral to slightly bullish view</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Comfortable selling shares at strike price</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>High implied volatility (better premiums)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Best Market Conditions:
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Sideways or mildly uptrending markets</li>
                  <li>• High volatility periods (better premiums)</li>
                  <li>• Before earnings announcements (IV expansion)</li>
                  <li>• When you want income vs. growth</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step-by-Step Process */}
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Target className="h-8 w-8 mr-3 text-purple-600" />
              Step-by-Step: Placing a Covered Call
            </h2>
            
            <div className="space-y-6">
              <div className="grid gap-6">
                {[
                  {
                    step: 1,
                    title: "Pick a Stock You Own",
                    description: "Must own 100 shares per contract. Choose liquid stocks with active options markets.",
                    tip: "Look for stocks with tight bid-ask spreads and high option volume."
                  },
                  {
                    step: 2,
                    title: "Choose Expiration (~30-45 days)",
                    description: "Target 30-45 days to expiration (DTE) for optimal theta decay balance.",
                    tip: "Shorter = faster decay but more management; Longer = less decay but steadier."
                  },
                  {
                    step: 3,
                    title: "Select Strike Using Delta",
                    description: "Use delta ~0.20-0.35 to balance income vs assignment risk.",
                    tip: "Higher delta = more premium but higher assignment probability."
                  },
                  {
                    step: 4,
                    title: "Place Sell-to-Open Order",
                    description: "Submit covered call order and collect premium immediately.",
                    tip: "Use limit orders slightly below mid-price for better fills."
                  }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-2">{item.description}</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 italic">{item.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Example Trade */}
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <BarChart3 className="h-8 w-8 mr-3 text-green-600" />
              Example Trade (Numbers)
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">Real Example: AAPL Covered Call</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 dark:text-white">Setup:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Own 100 shares at $48.00</li>
                    <li>• Sell 1 call, 30 DTE, $52 strike</li>
                    <li>• Collect $0.90 premium ($90 total)</li>
                    <li>• Delta: ~0.30 (30% assignment probability)</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 dark:text-white">Outcomes:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Max income (not assigned):</strong> $90</li>
                    <li>• <strong>If assigned at $52:</strong> $4/share stock gain + $90 premium = $490 total</li>
                    <li>• <strong>Break-even:</strong> Stock can drop to $47.10 before losses</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  <strong>Return calculation:</strong> $90 premium on $4,800 position = 1.875% return in 30 days (22.5% annualized)
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Can I do covered calls on ETFs?",
                  answer: "Yes, if options are listed and liquid. Popular ETF covered call targets include SPY, QQQ, and sector ETFs with high volume."
                },
                {
                  question: "What if my shares drop in value?",
                  answer: "The premium you collected offsets losses slightly, but doesn't provide full protection. Covered calls are income strategies, not hedging strategies."
                },
                {
                  question: "Are weekly options better than monthly?",
                  answer: "Weekly options decay faster but require more active management. Monthly options provide better premium-to-time ratios for most investors."
                },
                {
                  question: "What delta should I target?",
                  answer: "For income strategies, many traders target 0.20-0.35 delta to balance premium collection with assignment risk."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-slate-200 dark:border-slate-700 pb-4 last:border-b-0">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Generating Monthly Income?</h2>
            <p className="text-green-100 mb-6 text-lg">
              Start with one covered call position, track your results in a trading journal, and scale only after 3-5 successful cycles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Open Demo Account
              </button>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold border-2 border-white hover:bg-green-700 transition-colors">
                Download Risk Calculator
              </button>
            </div>
          </section>

          {/* Navigation Section */}
          <nav className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Link 
                    href="/how-to/how-to-understand-options-for-stock-traders" 
                    className="block p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors"
                  >
                    <h3 className="font-semibold text-yellow-900 dark:text-yellow-100">← Understand Options First</h3>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">Beginner options fundamentals</p>
                  </Link>
                </div>
                
                <div>
                  <Link 
                    href="/how-to/how-to-use-cash-secured-puts-to-buy-stocks-cheaper" 
                    className="block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100">Cash-Secured Puts →</h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">Buy stocks at a discount</p>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      
      {/* FAQ Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What delta should I use for covered calls?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For income strategies, many traders target 0.20-0.35 delta to balance premium collection and assignment risk."
                }
              },
              {
                "@type": "Question",
                "name": "How much should I risk per covered call trade?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Risk management with covered calls focuses on position sizing - don't put more than 5-10% of your portfolio in any single covered call position."
                }
              },
              {
                "@type": "Question",
                "name": "How do I avoid early assignment on covered calls?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Monitor extrinsic value and ex-dividend dates; buy-to-close or roll when extrinsic collapses or before dividend events."
                }
              }
            ]
          })
        }}
      />
    </article>
  )
}