import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Stop Living Paycheck to Paycheck: 7‑Step Plan',
  description: 'Break the cycle with a one‑month buffer, bill calendar, and automatic savings. Includes quick wins you can do this week.',
}

export default function StopLivingPaycheckPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Stop Living Paycheck to Paycheck</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl">
            💰
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Budgeting & Saving</p>
            <h1 className="text-4xl font-bold text-gray-900">How to stop living paycheck to paycheck</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Break the cycle with a one‑month buffer, bill calendar, and automatic savings. Includes quick wins you can do this week.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-red-800 mb-2">7‑step plan</h2>
          <ol className="text-red-700 space-y-2">
            <li>List all bills by date; align due dates near payday.</li>
            <li>Build a $1,000 starter cushion in 30‑60 days.</li>
            <li>Split paychecks: bills → savings → spending.</li>
            <li>Track top 5 spending leaks (subscriptions, delivery, fees, impulse buys, gas inefficiency).</li>
            <li>Reduce interest: call to lower APRs; consider balance transfer (if appropriate and fee‑aware).</li>
            <li>Create a one‑month buffer account.</li>
            <li>Increase income (even temporarily) to leapfrog to Step 6 faster.</li>
          </ol>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if my bills are scattered?</h3>
              <p className="text-gray-700">Ask providers to shift due dates.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How big is the buffer?</h3>
              <p className="text-gray-700">One month of expenses. Start with $1,000.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need a side hustle?</h3>
              <p className="text-gray-700">Not forever‑just until you build the buffer.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}