import type { Metadata } from 'next'
import { Search, DollarSign, Settings, CheckCircle, AlertTriangle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Options Broker: Fees, Tools & Fills - PeakNewsDaily',
  description: 'Compare options brokers by commissions, spreads, margin rates, analytics, and routing quality to pick the best fit.',
  keywords: 'best options broker, options commissions, margin rates, order routing, platform tools',
}

export default function OptionsBrokerPage() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
            <Search className="h-8 w-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6">
            How to Choose an Options Broker: Fees & Tools
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Compare options brokers by commissions, tools, and execution quality to find your perfect match.
          </p>
        </header>

        <div className="space-y-12">
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <DollarSign className="h-8 w-8 mr-3 text-green-600" />
              Key Evaluation Criteria
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-green-500" />
                    Cost Structure
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Per-contract commissions</strong> (typically $0.50-$0.65)</li>
                    <li>• <strong>Assignment/exercise fees</strong> ($5-$20)</li>
                    <li>• <strong>Regulatory fees</strong> (usually small)</li>
                    <li>• <strong>Bid-ask spreads</strong> (execution quality matters)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-blue-500" />
                    Platform Features
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Greeks display</strong> (delta, theta, vega, gamma)</li>
                    <li>• <strong>IV rank/percentile</strong> indicators</li>
                    <li>• <strong>Strategy builder</strong> tools</li>
                    <li>• <strong>Risk analysis</strong> and P&L scenarios</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                    <Star className="h-5 w-5 mr-2 text-purple-500" />
                    Execution Quality
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Order routing</strong> quality</li>
                    <li>• <strong>Fill speed</strong> and reliability</li>
                    <li>• <strong>Price improvement</strong> frequency</li>
                    <li>• <strong>Market maker</strong> relationships</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    Support & Education
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Paper trading</strong> capabilities</li>
                    <li>• <strong>Educational resources</strong></li>
                    <li>• <strong>Customer support</strong> quality</li>
                    <li>• <strong>API access</strong> for advanced users</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              How to Compare Brokers
            </h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Testing Process:</h3>
                <ol className="space-y-2 text-sm">
                  <li><strong>1. Open demo accounts</strong> with top 3-4 brokers</li>
                  <li><strong>2. Test platforms</strong> with paper trading</li>
                  <li><strong>3. Place small real orders</strong> in liquid options (SPY, QQQ)</li>
                  <li><strong>4. Measure fill quality</strong> vs. mid-price</li>
                  <li><strong>5. Evaluate tools</strong> and ease of use</li>
                  <li><strong>6. Check statements</strong> for transparency</li>
                </ol>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Active Traders</h4>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Prioritize low commissions, fast execution, and advanced tools
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Beginners</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Focus on education, paper trading, and user-friendly platforms
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Income Traders</h4>
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    Look for portfolio margin, good spreads, assignment efficiency
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Red Flags to Avoid
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                  Cost Traps:
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Extremely high assignment fees ($50+)</li>
                  <li>• Hidden inactivity fees</li>
                  <li>• Poor execution (wide spreads)</li>
                  <li>• High margin rates for cash-secured puts</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                  Platform Issues:
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Frequent outages during market hours</li>
                  <li>• Limited order types (no OCO, brackets)</li>
                  <li>• No paper trading for practice</li>
                  <li>• Poor mobile app functionality</li>
                </ul>
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
                  question: "Does zero commission mean it's free?",
                  answer: "Not always—look at execution quality, spreads, and other fees. Poor fills can cost more than commission savings."
                },
                {
                  question: "Do all brokers support complex strategies?",
                  answer: "Most support basic spreads, but check approval levels for advanced strategies like iron condors, butterflies, and naked options."
                },
                {
                  question: "Is paper trading actually useful?",
                  answer: "Yes—it's essential for learning order types, platform navigation, and testing strategies without real money risk."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-slate-200 dark:border-slate-700 pb-4 last:border-b-0">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Broker?</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Start with paper trading accounts at 2-3 top brokers. Test thoroughly before committing real money.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Compare Top Brokers
            </button>
          </section>
        </div>
      </div>
    </article>
  )
}