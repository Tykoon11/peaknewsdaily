import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legal Ways to Avoid Overdraft Fees (Simple Steps)',
  description: 'Use smart settings, alerts, and account choices to eliminate overdraft fees for good.',
}

export default function AvoidOverdraftFeesPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Avoid Overdraft Fees</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
            🏦
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Banking & Accounts</p>
            <h1 className="text-4xl font-bold text-gray-900">How to avoid overdraft fees legally</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Use smart settings, alerts, and account choices to eliminate overdraft fees for good.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Pick the right account</h2>
        <p>Choose $0-overdraft "decline" settings or accounts with courtesy buffers instead of paid overdraft.</p>

        <h2>Turn on real-time alerts</h2>
        <p>Low balance, large purchase, and deposit alerts help you intervene early.</p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Link accounts</h3>
          <p className="text-blue-700">Connect savings as a backup (ensure the transfer fee is $0).</p>
        </div>

        <h2>Change payment order</h2>
        <p>Schedule bills after payday and avoid weekend/holiday processing surprises.</p>

        <h2>Use a cash buffer</h2>
        <p>Maintain a small minimum (e.g., $100–$250) to absorb timing hiccups.</p>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Does overdraft protection cost money?</h3>
              <p className="text-gray-700">Some banks charge; look for $0 transfer fees.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will debit be declined?</h3>
              <p className="text-gray-700">If you opt out of overdraft, yes—by design to protect you.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}