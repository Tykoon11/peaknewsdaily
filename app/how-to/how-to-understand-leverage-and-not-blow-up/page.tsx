import type { Metadata } from 'next'
import { TrendingUp, AlertTriangle, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Leverage: Use It Without Blowing Up - PeakNewsDaily',
  description: 'Learn safe leverage rules for options and futures—position sizing, max loss planning, and stress testing.',
  keywords: 'trading leverage, risk management, position sizing, drawdown control',
}

export default function LeveragePage() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-100 dark:from-slate-900 dark:via-orange-900/20 dark:to-red-900/20">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl mb-6">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-orange-800 to-red-900 dark:from-white dark:via-orange-100 dark:to-red-100 bg-clip-text text-transparent mb-6">
            How to Understand Leverage and Not Blow Up
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Master safe leverage principles to amplify returns without destroying your account.
          </p>
        </header>

        <div className="space-y-8">
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Shield className="h-6 w-6 mr-2 text-green-600" />
              Golden Rules of Leverage
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Rule #1: Position Size</h3>
                  <p className="text-sm text-green-800 dark:text-green-200">Risk ≤1-2% of account equity per trade</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Rule #2: Plan Worst Case</h3>
                  <p className="text-sm text-blue-800 dark:text-blue-200">Account for gap risk and maximum loss scenarios</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Rule #3: Avoid Correlation</h3>
                  <p className="text-sm text-purple-800 dark:text-purple-200">Don't stack multiple correlated leveraged bets</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Rule #4: Stress Test</h3>
                  <p className="text-sm text-orange-800 dark:text-orange-200">What if volatility doubles? What if gaps occur?</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                The Recovery Math Problem
              </h3>
              <p className="text-red-800 dark:text-red-200">
                A 20% drawdown requires a 25% gain to recover. A 50% drawdown needs 100% gain. 
                Keep drawdowns small with proper position sizing!
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}
