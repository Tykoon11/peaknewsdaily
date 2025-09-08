import type { Metadata } from 'next'
import { TrendingUp, Shield, Calculator, AlertTriangle, CheckCircle, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Futures Trading: Margin & Risk Management - PeakNewsDaily',
  description: 'Trade futures with confidence—understand initial vs. maintenance margin, position sizing, and daily mark-to-market.',
  keywords: 'futures margin management, initial margin, maintenance margin, mark to market, futures risk',
}

export default function FuturesMarginPage() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-orange-800 to-red-900 dark:from-white dark:via-orange-100 dark:to-red-100 bg-clip-text text-transparent mb-6">
            How to Trade Futures with Proper Margin Management
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Master futures margin requirements, position sizing, and risk controls to trade with confidence.
          </p>
        </header>

        <div className="space-y-12">
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Calculator className="h-8 w-8 mr-3 text-orange-600" />
              Futures Margin Basics
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Key Concepts:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Initial Margin:</strong> Required to open position
                      <p className="text-sm text-slate-600 dark:text-slate-400">Typically 5-10% of contract value</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Maintenance Margin:</strong> Minimum to keep open
                      <p className="text-sm text-slate-600 dark:text-slate-400">Usually 75-80% of initial margin</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Mark-to-Market:</strong> Daily P&L settlement
                      <p className="text-sm text-slate-600 dark:text-slate-400">Losses deducted, gains added daily</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-3">Margin Call Warning:</h3>
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  If your account falls below maintenance margin, brokers will liquidate positions to protect account equity. 
                  Always maintain adequate margin buffer!
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <BarChart3 className="h-8 w-8 mr-3 text-blue-600" />
              Position Sizing Formula
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">Risk-Based Sizing:</h3>
              
              <div className="space-y-4">
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Step 1: Calculate Risk per Contract</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Risk = Tick Value × Stop Distance in Ticks</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Example: ES futures, $12.50/tick, 20-tick stop = $250 risk</p>
                </div>
                
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Step 2: Determine Account Risk</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Target 1-2% of account equity per trade</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">$10,000 account × 1% = $100 max risk</p>
                </div>
                
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Step 3: Size Position</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Contracts = Account Risk ÷ Risk per Contract</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">$100 ÷ $250 = Use micro futures (1/10 size)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Risk Management Tools
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Essential Tools:</h3>
                <ul className="space-y-2">
                  <li>• <strong>Hard Stops:</strong> Always use stop-loss orders</li>
                  <li>• <strong>Daily Loss Limits:</strong> Max loss per day</li>
                  <li>• <strong>Position Limits:</strong> Max contracts per trade</li>
                  <li>• <strong>Correlation Limits:</strong> Avoid stacking similar bets</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Popular Contracts:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>ES (S&P 500):</strong> $12.50/tick, high liquidity</li>
                  <li>• <strong>NQ (Nasdaq):</strong> $5/tick, tech exposure</li>
                  <li>• <strong>CL (Crude Oil):</strong> $10/tick, energy sector</li>
                  <li>• <strong>GC (Gold):</strong> $10/tick, safe haven</li>
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
                  question: "Why did my position get liquidated?",
                  answer: "You breached maintenance margin requirements. Brokers automatically close positions to protect account equity when margin falls too low."
                },
                {
                  question: "Are micro futures better for small accounts?",
                  answer: "Yes—micro futures have 1/10 the size and tick value of standard contracts, allowing for better risk control and position sizing."
                },
                {
                  question: "What about overnight margin requirements?",
                  answer: "Many contracts require higher margin overnight. Check your broker's margin schedule and plan accordingly."
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
    </article>
  )
}