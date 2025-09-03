import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Negotiate with Creditors (Scripts + Steps)',
  description: 'Late or behind? Use proven scripts to ask for hardship plans, lower interest, and settlements without burning your credit.',
}

export default function NegotiateWithCreditorsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Negotiate with Creditors</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white text-xl">
            💳
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Loans & Debt</p>
            <h1 className="text-4xl font-bold text-gray-900">How to negotiate with creditors for a lower payoff</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Late or behind? Use proven scripts to ask for hardship plans, lower interest, and settlements without burning your credit.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Steps</h3>
          <ol className="text-green-700 space-y-2">
            <li>Gather facts: account status, hardship reason, budget.</li>
            <li>Call before charge-off when you still have leverage.</li>
            <li>Ask for interest reduction, fee waivers, or a hardship plan.</li>
            <li>If behind, request a pay-for-delete (not always granted) or settlement.</li>
            <li>Get it in writing before paying.</li>
            <li>Pay as agreed; monitor your credit reports for accuracy.</li>
          </ol>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Sample opener</h3>
          <p className="text-blue-700 italic">"Hi, I want to keep this account in good standing. I'm experiencing [hardship]. Can we reduce my APR or set a temporary plan so I can pay on time?"</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Pitfalls</h3>
          <ul className="text-red-700 space-y-1">
            <li>Paying a settlement without a written agreement.</li>
            <li>Letting collectors pressure you into unaffordable terms.</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will they negotiate?</h3>
              <p className="text-gray-700">Often yes—especially if you show a realistic plan.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will my credit be hurt?</h3>
              <p className="text-gray-700">Hardship plans may note "arrangements"; settlements often impact scores but can stop worse damage.</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Get the Tools</h3>
          <p className="text-purple-700">Download our negotiation script pack + hardship letter template.</p>
        </div>
      </article>
    </main>
  )
}