import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Joint Bank Accounts: How to Set Them Up Safely',
  description: 'Share money without the drama. Learn structures, safeguards, and rules for joint bank accounts.',
}

export default function SetUpJointAccountsSafelyPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Joint Accounts Safely</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
            🏦
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Banking & Accounts</p>
            <h1 className="text-4xl font-bold text-gray-900">How to set up joint accounts safely</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Share money without the drama. Learn structures, safeguards, and rules for joint bank accounts.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Pick the right structure</h2>
        <p>Choose between a fully joint chequing for shared bills vs. a "yours-mine-ours" model (keep personal accounts + one shared).</p>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <h3 className="text-xl font-semibold text-green-800 mb-2">Define rules up front</h3>
          <p className="text-green-700">Agree on contribution amounts, spending thresholds for approvals, and emergency use policies.</p>
        </div>

        <h2>Set permissions & alerts</h2>
        <p>Both parties should have equal online access, individual cards, and real-time notifications.</p>

        <h2>Protect each other</h2>
        <p>Use overdraft prevention, keep an emergency fund, and document what happens if the relationship changes.</p>

        <h2>Keep a paper trail</h2>
        <p>Use memos/tags and monthly reviews to avoid misunderstandings.</p>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will both credit scores be affected?</h3>
              <p className="text-gray-700">Joint credit products can impact both; deposit accounts typically don't, but negative events can.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can one person drain the account?</h3>
              <p className="text-gray-700">Joint owners usually have full access—set norms and alerts to mitigate risk.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}