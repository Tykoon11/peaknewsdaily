import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Debt Snowball vs. Avalanche: Which Pays Debt Faster?',
  description: 'Compare the debt snowball vs. avalanche methods. Learn which is faster, which costs less in interest, and how to choose the right strategy for you.',
}

export default function DebtSnowballVsAvalanchePage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Debt Snowball vs Avalanche</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white text-xl">
            💳
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Loans & Debt</p>
            <h1 className="text-4xl font-bold text-gray-900">How to use the debt snowball vs avalanche method</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Compare the debt snowball vs. avalanche methods. Learn which is faster, which costs less in interest, and how to choose the right strategy for you.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Quick take</h2>
          <ul className="text-blue-700 space-y-1">
            <li><strong>Snowball:</strong> smallest balance → biggest momentum.</li>
            <li><strong>Avalanche:</strong> highest APR → lowest total interest.</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Steps</h3>
          <ol className="text-green-700 space-y-2">
            <li>List all debts with balance, APR, minimums.</li>
            <li>Pick a method: motivation (snowball) or math (avalanche).</li>
            <li>Pay minimums on all, funnel all extra to the target debt.</li>
            <li>When one is paid off, roll its payment into the next.</li>
            <li>Automate payments and track progress monthly.</li>
          </ol>
        </div>

        <h2>Pro tips</h2>
        <ul>
          <li>If motivation stalls your plan, start snowball then switch to avalanche.</li>
          <li>Refinance or consolidate before starting if rates are sky-high.</li>
        </ul>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Pitfalls</h3>
          <ul className="text-red-700 space-y-1">
            <li>Adding new debt mid-journey.</li>
            <li>Ignoring variable APR increases on cards.</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Which is faster?</h3>
              <p className="text-gray-700">Avalanche usually—because you attack the highest APR first.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Which is easier to stick with?</h3>
              <p className="text-gray-700">Snowball—early wins keep you going.</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Ready to Start?</h3>
          <p className="text-purple-700">Download the free Debt Method Selector worksheet and choose in 5 minutes.</p>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-consolidate-credit-card-debt-options-compared" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">Consolidate Credit Card Debt →</h3>
              <p className="text-sm text-blue-700 mt-1">Compare all consolidation options</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-get-out-of-debt-on-a-low-income" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Get Out of Debt on Low Income →</h3>
              <p className="text-sm text-green-700 mt-1">Realistic plan when money is tight</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}