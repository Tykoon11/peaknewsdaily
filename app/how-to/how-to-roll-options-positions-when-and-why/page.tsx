import type { Metadata } from 'next'
import { Settings, RefreshCw, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rolling Options: When, Why & How - PeakNewsDaily',
  description: 'Learn to roll options to manage risk, extend time, move strikes, or harvest profits—without losing track of P&L.',
  keywords: 'roll options, roll out up down, adjust options trade',
}

export default function RollOptionsPage() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6">
            <Settings className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6">
            How to Roll Options Positions (When and Why)
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Master the art of rolling options to extend time, adjust strikes, and manage risk effectively.
          </p>
        </header>

        <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
            <RefreshCw className="h-6 w-6 mr-2" />
            Common Roll Types
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100">Roll Out</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">Extend expiration date</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 dark:text-green-100">Roll Up/Down</h3>
              <p className="text-sm text-green-700 dark:text-green-300">Change strike price</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100">Diagonal Roll</h3>
              <p className="text-sm text-purple-700 dark:text-purple-300">Time + strike adjustment</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}
