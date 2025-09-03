import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bank Reconciliation Guide: Do It Like a Pro',
  description: 'Catch errors, fraud, and duplicates with a clean monthly bank reconciliation workflow.',
}

export default function BankReconciliationPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Bank Reconciliation</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
            🏦
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Banking & Accounts</p>
            <h1 className="text-4xl font-bold text-gray-900">How to reconcile your bank statement like a pro</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Catch errors, fraud, and duplicates with a clean monthly bank reconciliation workflow.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Prep your materials</h2>
        <p>Pull the monthly statement, your ledger (or accounting software), and pending items list.</p>

        <h2>Match starting balances</h2>
        <p>Ensure last month's ending balance equals this month's beginning balance in your books.</p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Tick-and-tie transactions</h3>
          <p className="text-blue-700">Mark each deposit and withdrawal; note outstanding cheques, pending deposits, and bank-only items (fees, interest).</p>
        </div>

        <h2>Adjust and document</h2>
        <p>Record bank fees/interest, fix duplicates, and attach notes for any adjustments.</p>

        <h2>Finalize & archive</h2>
        <p>Your adjusted book balance should equal the bank's ending balance. Export a reconciliation report and store securely.</p>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should I reconcile?</h3>
              <p className="text-gray-700">Monthly at minimum; weekly for high-volume businesses.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if numbers don't match?</h3>
              <p className="text-gray-700">Re-check dates, pending items, and look for transposed digits or missed entries.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}