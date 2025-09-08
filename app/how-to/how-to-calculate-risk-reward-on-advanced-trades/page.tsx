import type { Metadata } from 'next'
import { Calculator, BarChart3, TrendingUp, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calculate Risk/Reward on Options & Futures - PeakNewsDaily',
  description: 'Quickly compute max risk, max reward, break-even, and probabilities on spreads, naked options, and futures.',
  keywords: 'options risk reward, max loss max profit, breakeven options, probability ITM',
}

export default function RiskRewardPage() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 dark:from-slate-900 dark:via-green-900/20 dark:to-emerald-900/20">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-6">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-green-800 to-emerald-900 dark:from-white dark:via-green-100 dark:to-emerald-100 bg-clip-text text-transparent mb-6">
            How to Calculate Risk/Reward on Advanced Trades
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Master risk/reward calculations for options spreads, naked positions, and futures trades.
          </p>
        </header>

        <div className="space-y-12">
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <BarChart3 className="h-8 w-8 mr-3 text-green-600" />
              Common Strategy Calculations
            </h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Single Call Buy</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Max Loss:</strong> Premium paid</li>
                    <li>• <strong>Max Profit:</strong> Unlimited</li>
                    <li>• <strong>Break-even:</strong> Strike + Premium</li>
                    <li>• <strong>Probability:</strong> ≈ Delta</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">Cash-Secured Put</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Max Loss:</strong> Strike - Premium (to $0)</li>
                    <li>• <strong>Max Profit:</strong> Premium collected</li>
                    <li>• <strong>Break-even:</strong> Strike - Premium</li>
                    <li>• <strong>Assignment Prob:</strong> ≈ Delta</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">Vertical Spread (Debit)</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Max Loss:</strong> Net debit paid</li>
                    <li>• <strong>Max Profit:</strong> Strike width - debit</li>
                    <li>• <strong>Break-even:</strong> Long strike + debit</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-3">Iron Condor</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Max Profit:</strong> Net credit collected</li>
                    <li>• <strong>Max Loss:</strong> Wing width - credit</li>
                    <li>• <strong>Break-evens:</strong> Short strikes ± credit</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <TrendingUp className="h-8 w-8 mr-3 text-blue-600" />
              Futures Risk Calculation
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">Formula:</h3>
              
              <div className="space-y-4">
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Risk per Contract</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Tick Value × Stop Distance in Ticks = $ Risk</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Example: ES futures, $12.50/tick, 20-tick stop = $250 risk per contract
                  </p>
                </div>
                
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Position Sizing</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Account Risk (1-2%) ÷ Risk per Contract = # Contracts</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    $10k account × 1% = $100 ÷ $250 = Use micro futures (1/10 size)
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Key Principles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Risk Management:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Always include fees and slippage in calculations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use delta for rough probability estimates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Track expectancy: (Win% × Avg Win) - (Loss% × Avg Loss)</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Optimization:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>High win rate vs. high reward ratio—optimize expectancy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Build a spreadsheet to track all trades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Backtest strategies for historical expectancy</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Master Risk/Reward Analysis</h2>
            <p className="text-green-100 mb-6 text-lg">
              Proper risk/reward calculation is the foundation of profitable trading. Know your numbers before you trade!
            </p>
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Download Risk Calculator
            </button>
          </section>
        </div>
      </div>
    </article>
  )
}