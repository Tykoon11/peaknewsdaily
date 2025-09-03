import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Improve Your Credit Score in 30–90 Days',
  description: 'Quick wins to raise your credit score fast—utilization hacks, limit increases, errors, and balance timing.',
}

export default function ImproveCreditScore3090DaysPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Improve Credit 30-90 Days</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Credit Scores & Reports</p>
            <h1 className="text-4xl font-bold text-gray-900">How to improve your credit score in 30–90 days</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Quick wins to raise your credit score fast—utilization hacks, limit increases, errors, and balance timing.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-2">30-day wins</h2>
          <ul className="text-green-700 space-y-1">
            <li>Pay revolving balances before the statement cut date to lower reported utilization.</li>
            <li>Ask for a credit limit increase (soft pull if possible).</li>
            <li>Pay down any card reporting over 30% of its limit.</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">60-day plays</h2>
          <ul className="text-blue-700 space-y-1">
            <li>Dispute clear reporting errors.</li>
            <li>Set up auto-pay for at least the minimum due.</li>
          </ul>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-purple-800 mb-2">90-day moves</h2>
          <ul className="text-purple-700 space-y-1">
            <li>Add a secured card or credit-builder loan (if thin file).</li>
            <li>Become an authorized user on a pristine, low-utilization card.</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the fastest way to boost my score?</h3>
              <p className="text-gray-700">Pay down high utilization and dispute any clear errors on your report.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How much can my score improve in 30 days?</h3>
              <p className="text-gray-700">Depends on starting point, but 20-50+ points possible with major utilization reduction.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I pay off all my cards to $0?</h3>
              <p className="text-gray-700">Keep one card with small balance (1-9% utilization) to show active usage.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-lower-credit-utilization-the-smart-way" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">Lower Credit Utilization →</h3>
              <p className="text-sm text-blue-700 mt-1">Smart tactics that work fast</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-check-your-credit-score-for-free" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Check Score Free →</h3>
              <p className="text-sm text-green-700 mt-1">Monitor your progress</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}