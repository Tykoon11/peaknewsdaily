import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Read Your Credit Report (Line by Line)',
  description: 'Master every section of your credit report: personal info, accounts, inquiries, public records, and dispute-worthy red flags.',
}

export default function ReadCreditReportPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Read Credit Report</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Credit Scores & Reports</p>
            <h1 className="text-4xl font-bold text-gray-900">How to read your credit report (line by line)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Master every section of your credit report: personal info, accounts, inquiries, public records, and dispute-worthy red flags.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Sections to review</h2>
          <ul className="text-blue-700 space-y-1">
            <li><strong>Personal information</strong> – Names, addresses, employers. Look for typos or unknown addresses.</li>
            <li><strong>Accounts (tradelines)</strong> – Open/closed credit cards, loans, limits, balances, status, payment history grid.</li>
            <li><strong>Derogatories</strong> – Late payments, collections, charge-offs, bankruptcies, liens (where applicable).</li>
            <li><strong>Inquiries</strong> – Hard vs soft. Hard pulls should match applications you made.</li>
            <li><strong>Consumer statements & fraud alerts</strong> – If you've added any.</li>
          </ul>
        </div>

        <h2>How to scan like a pro</h2>
        <ul>
          <li>Match every account to a real lender you recognize.</li>
          <li>Check dates: opened, reported, last payment.</li>
          <li>Verify limits & balances; high utilization hurts scores.</li>
          <li>Read the payment grid (30/60/90+ day lates).</li>
          <li>Confirm status (open/closed/paid/settled).</li>
          <li>Look for duplicate accounts (same debt sold to collections).</li>
          <li>Review hard inquiries for anything you didn't authorize.</li>
        </ul>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">What to flag for dispute</h3>
          <p className="text-red-700">Wrong personal data, unknown accounts, incorrect balances/limits, payments marked late in error, accounts not yours, zombie debts.</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How many years does negative info stay?</h3>
              <p className="text-gray-700">US/CA ranges differ by item and province/state.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will closing a card remove it from my report?</h3>
              <p className="text-gray-700">It may stay for years.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-check-your-credit-score-for-free" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Check Credit Score Free</h3>
              <p className="text-sm text-blue-700 mt-1">Get your score without hurting credit</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-dispute-credit-report-errors-and-win" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Dispute Errors & Win →</h3>
              <p className="text-sm text-green-700 mt-1">Remove credit report errors fast</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}