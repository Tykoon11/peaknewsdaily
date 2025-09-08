import type { Metadata } from 'next'
import { AlertTriangle, Calendar, Shield, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Avoiding Option Assignment: Practical Tactics - PeakNewsDaily',
  description: 'Reduce assignment risk with smart strike selection, dividend awareness, and timely roll/buy-to-close decisions.',
  keywords: 'assignment risk options, early exercise, ex-dividend, rolling options',
}

export default function AssignmentRiskPage() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-100 dark:from-slate-900 dark:via-red-900/20 dark:to-orange-900/20">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl mb-6">
            <AlertTriangle className="h-8 w-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-red-800 to-orange-900 dark:from-white dark:via-red-100 dark:to-orange-100 bg-clip-text text-transparent mb-6">
            How to Avoid Assignment Risk on Options
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Reduce assignment risk with smart tactics and proactive management.
          </p>
        </header>

        <div className="space-y-8">
          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Risk Factors</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-red-600 mb-2 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Ex-Dividend Risk
                </h3>
                <p className="text-sm">Calls may be exercised early for dividend capture</p>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 mb-2 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Deep ITM Options
                </h3>
                <p className="text-sm">Low extrinsic value increases assignment probability</p>
              </div>
            </div>
          </section>

          <section className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Prevention Tactics</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Monitor extrinsic value:</strong> Buy to close when extrinsic approaches zero
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Roll before ex-dividend:</strong> Avoid dividend capture assignments
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Choose appropriate deltas:</strong> Lower delta = lower assignment risk
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  )
}