import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dispute Credit Report Errors (Templates + Steps)',
  description: 'Remove credit report errors fast. Use our step-by-step dispute plan, evidence checklist, and ready-to-send letters.',
}

export default function DisputeCreditReportErrorsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Dispute Credit Errors</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Credit Scores & Reports</p>
            <h1 className="text-4xl font-bold text-gray-900">How to dispute credit report errors and win</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Remove credit report errors fast. Use our step-by-step dispute plan, evidence checklist, and ready-to-send letters.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-orange-800 mb-2">Proof packet</h2>
          <ul className="text-orange-700 space-y-1">
            <li>Government ID + proof of address</li>
            <li>Bank/statement evidence, payment confirmations</li>
            <li>Police/identity theft report (if applicable)</li>
            <li>Copy of report with items highlighted</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Steps</h3>
          <ol className="text-blue-700 space-y-2">
            <li>Identify the inaccuracy and highlight it on your report.</li>
            <li>Gather evidence that proves the correct info.</li>
            <li>Dispute with bureau(s) reporting the error. Submit online or by certified mail; include your packet.</li>
            <li>Notify the furnisher (the lender/collector) with the same evidence.</li>
            <li>Track timelines: Bureaus typically investigate within ~30 days after receiving your dispute.</li>
            <li>Follow up: If corrected—great. If "verified" but still wrong, send a method of verification request and escalate (consumer protection agency or small claims as a last resort).</li>
          </ol>
        </div>

        <h2>Pro tips</h2>
        <ul>
          <li>Dispute one logical grouping per letter for clarity.</li>
          <li>Keep everything in writing; save PDFs and mail receipts.</li>
          <li>Identity theft? Place a fraud alert or credit freeze (see section below).</li>
        </ul>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will disputing hurt my score?</h3>
              <p className="text-gray-700">No.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I dispute hard inquiries?</h3>
              <p className="text-gray-700">Only if unauthorized.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-read-your-credit-report-line-by-line" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Read Your Credit Report</h3>
              <p className="text-sm text-blue-700 mt-1">Master every section first</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-remove-late-payments-from-your-report" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Remove Late Payments →</h3>
              <p className="text-sm text-green-700 mt-1">Goodwill & dispute strategies</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}