import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Credit Unions vs. Banks: Pros, Cons & When to Choose',
  description: 'Compare credit unions and banks—rates, fees, tech, service—and decide what fits your money style.',
}

export default function CreditUnionsVsBanksPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Credit Unions vs Banks</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
            🏦
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Banking & Accounts</p>
            <h1 className="text-4xl font-bold text-gray-900">How to use credit unions vs banks (pros & cons)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Compare credit unions and banks—rates, fees, tech, service—and decide what fits your money style.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-2">Credit unions: member-first</h2>
          <p className="text-green-700"><strong>Pros:</strong> Lower fees, competitive rates, community focus.</p>
          <p className="text-green-700"><strong>Cons:</strong> Smaller ATM networks, sometimes slower tech, membership eligibility.</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Banks: scale & features</h2>
          <p className="text-blue-700"><strong>Pros:</strong> Broad ATM access, advanced apps, product variety (loans, cards, wealth).</p>
          <p className="text-blue-700"><strong>Cons:</strong> Higher fees, less personalized service.</p>
        </div>

        <h2>Hybrid approach</h2>
        <p>Use a credit union for savings and loans, a large bank for day-to-day payments and travel.</p>

        <h2>What to evaluate</h2>
        <p>Fees, ATM access, APYs, loan rates, mobile features, customer support, insurance/guarantees.</p>

        <h2>Decision checklist</h2>
        <p>Pick based on your top 3 priorities (e.g., lowest fees, best app, nearby branches).</p>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are deposits safe at credit unions?</h3>
              <p className="text-gray-700">Yes—look for the appropriate federal/provincial insurance.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I belong to both?</h3>
              <p className="text-gray-700">Absolutely—optimize each account for a purpose.</p>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation */}
      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-gray-600 mb-2">Previous</p>
            <Link 
              href="/how-to/how-to-set-up-joint-accounts-safely" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">Set Up Joint Accounts</h3>
              <p className="text-sm text-blue-700 mt-1">Share money safely</p>
            </Link>
          </div>
          
          <div>
            <p className="text-sm text-gray-600 mb-2">Up Next</p>
            <Link 
              href="/how-to/how-to-spot-and-avoid-bank-scams-and-phishing" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Spot Bank Scams & Phishing</h3>
              <p className="text-sm text-green-700 mt-1">Keep your money safe</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}