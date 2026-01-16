import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Set Up Direct Deposit & Automatic Transfers',
  description: 'Route paychecks automatically and build savings on autopilot with a fast setup guide.',
}

export default function DirectDepositAutomaticTransfersPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Direct Deposit & Automatic Transfers</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
            🏦
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Banking & Accounts</p>
            <h1 className="text-4xl font-bold text-gray-900">How to set up direct deposit and automatic transfers</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Route paychecks automatically and build savings on autopilot with a fast setup guide.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Direct deposit basics</h2>
        <p>Get your account and transit/routing numbers plus a void cheque. Submit your employer's form; confirm the effective pay cycle.</p>

        <h2>Split your pay</h2>
        <p>Many payroll systems support split deposits (e.g., 80% to chequing, 20% to savings).</p>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <h3 className="text-xl font-semibold text-green-800 mb-2">Automate transfers</h3>
          <p className="text-green-700">Set recurring transfers on payday to savings, investing, and bill accounts. Create separate "buckets" to stay organized.</p>
        </div>

        <h2>Add alerts & safeguards</h2>
        <p>Turn on deposit confirmations and low-balance alerts; enable overdraft prevention.</p>

        <h2>Review quarterly</h2>
        <p>Adjust amounts as income or goals change.</p>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I automate transfers to multiple accounts?</h3>
              <p className="text-gray-700">Yes—set multiple rules by date or payday.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if the deposit fails?</h3>
              <p className="text-gray-700">Keep a small buffer and contact HR/benefits immediately.</p>
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
              href="/how-to/how-to-switch-banks-without-missing-payments" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">Switch Banks Smoothly</h3>
              <p className="text-sm text-blue-700 mt-1">Move without missing payments</p>
            </Link>
          </div>
          
          <div>
            <p className="text-sm text-gray-600 mb-2">Up Next</p>
            <Link 
              href="/how-to/how-to-avoid-overdraft-fees-legally" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Avoid Overdraft Fees</h3>
              <p className="text-sm text-green-700 mt-1">Legal ways to eliminate fees</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}