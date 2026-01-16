import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Switch Banks Smoothly (No Missed Payments)',
  description: 'Move your money, direct deposits, and bill pays to a new bank with a clean, step-by-step checklist.',
}

export default function SwitchBanksChecklistPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Switch Banks Checklist</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
            🏦
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Banking & Accounts</p>
            <h1 className="text-4xl font-bold text-gray-900">How to switch banks without missing payments</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Move your money, direct deposits, and bill pays to a new bank with a clean, step-by-step checklist.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-orange-800 mb-2">Create your move plan</h2>
          <p className="text-orange-700">Open the new account first; keep both accounts active for 30–60 days.</p>
        </div>

        <h2>Inventory income & bills</h2>
        <p>Export your last 3–6 months of statements. List: payroll sources, subscriptions, utilities, loans, and transfers.</p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Migrate in order</h3>
          <ol className="text-blue-700 space-y-2">
            <li><strong>Direct deposit:</strong> send new void cheque/details to employer/benefits.</li>
            <li><strong>Autopays & subscriptions:</strong> update one category per day.</li>
            <li><strong>Transfers & Zelle/Interac contacts:</strong> re-add and test small payments.</li>
          </ol>
        </div>

        <h2>Run a dual-account overlap</h2>
        <p>Leave a buffer in the old account; monitor for any stragglers (annual renewals).</p>

        <h2>Close with proof</h2>
        <p>After final reconciliation, request written confirmation of closure.</p>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long should I overlap?</h3>
              <p className="text-gray-700">1–2 billing cycles is safest.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I miss one?</h3>
              <p className="text-gray-700">Pay immediately and ask the provider to waive any fee given the switch.</p>
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
              href="/how-to/how-to-open-a-high-yield-savings-account-online" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">Open High-Yield Savings Online</h3>
              <p className="text-sm text-blue-700 mt-1">Maximize your savings APY</p>
            </Link>
          </div>
          
          <div>
            <p className="text-sm text-gray-600 mb-2">Up Next</p>
            <Link 
              href="/how-to/how-to-set-up-direct-deposit-and-automatic-transfers" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Set Up Direct Deposit</h3>
              <p className="text-sm text-green-700 mt-1">Automate your banking</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}