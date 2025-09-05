import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Transfer Your Brokerage Account (ACATS): Step-by-Step',
  description: 'A simple ACATS checklist—before, during, after—plus fees, timing, and how to avoid delays.',
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does an ACATS transfer take?",
      "acceptedAnswer": {"@type":"Answer","text":"Most complete in a few business days once initiated, barring issues like unsettled trades or registration mismatches."}
    },
    {
      "@type": "Question", 
      "name": "Will cost basis transfer?",
      "acceptedAnswer": {"@type":"Answer","text":"Yes for covered securities in the US, but verify after arrival and keep your own records."}
    }
  ]
}

export default function TransferBrokerageAccountPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Transfer Brokerage Account</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏛️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Brokers & Exchanges</p>
            <h1 className="text-4xl font-bold text-gray-900">How to Transfer Your Brokerage Account (ACATS)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          A simple ACATS checklist—before, during, after—plus fees, timing, and how to avoid delays.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Transfer with ACATS (what it is)</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <p className="text-blue-700 mb-4">
            <strong>ACATS (Automated Customer Account Transfer Service)</strong> automates and standardizes moving assets between firms via NSCC/DTCC. Most transfers complete within a few business days.
          </p>
          <div className="text-xs space-y-1">
            <div><a href="https://dtcc.com/settlement-and-asset-services/equities-clearing-services/acats" target="_blank" rel="noopener" className="text-blue-600 hover:underline">DTCC ACATS Overview</a></div>
            <div><a href="https://dtcclearning.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">DTCC Learning Resources</a></div>
          </div>
        </div>

        <h2>Pre-transfer checklist</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Match title/registration exactly</p>
              <p className="text-gray-600 text-sm">Account names and Social Security Numbers must match perfectly.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Settle all open trades</p>
              <p className="text-gray-600 text-sm">Wait for T+2 settlement on recent purchases before initiating transfer.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Close options near expiry</p>
              <p className="text-gray-600 text-sm">Options expiring soon may not transfer cleanly.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Note non-transferable assets</p>
              <p className="text-gray-600 text-sm">Some mutual funds, CDs, or proprietary products may not transfer.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
            <div>
              <p className="text-gray-700 font-medium">Download statements and tax documents</p>
              <p className="text-gray-600 text-sm">Keep records before losing access to your old account.</p>
            </div>
          </div>
        </div>

        <h2>Initiate the transfer</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-green-900 mb-3">The Process</h3>
          <ol className="text-green-700 space-y-2">
            <li><strong>1.</strong> Open your new receiving account first</li>
            <li><strong>2.</strong> Submit transfer form at the receiving broker</li>
            <li><strong>3.</strong> Receiving firm triggers the ACATS request</li>
            <li><strong>4.</strong> Delivering firm validates and processes</li>
            <li><strong>5.</strong> Assets move via DTCC systems</li>
          </ol>
          <div className="mt-4 text-xs">
            <a href="https://dtcc.com" target="_blank" rel="noopener" className="text-green-600 hover:underline">DTCC Transfer Systems</a>
          </div>
        </div>

        <h2>Fees & timing</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-semibold text-yellow-900 mb-2">Typical Fees</h3>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• Outgoing transfer: $50-$125</li>
              <li>• Partial transfer: Often higher fees</li>
              <li>• Full transfer: May be reimbursed by new broker</li>
              <li>• Check with both firms for exact costs</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-2">Timeline</h3>
            <ul className="text-purple-700 text-sm space-y-1">
              <li>• Standard: 3-6 business days</li>
              <li>• Complex accounts: Up to 2 weeks</li>
              <li>• Delays from: margin debit, unsettled funds</li>
              <li>• International holdings may take longer</li>
            </ul>
          </div>
        </div>

        <h2>After the move</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Re-enroll dividend reinvestment plans (DRIPs)</p>
              <p className="text-gray-600 text-sm">DRIP elections typically don't transfer automatically.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Update options trading permissions</p>
              <p className="text-gray-600 text-sm">May need to reapply for complex options strategies.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Subscribe to market data feeds</p>
              <p className="text-gray-600 text-sm">Real-time quotes and Level 2 data subscriptions.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Link bank accounts</p>
              <p className="text-gray-600 text-sm">Set up ACH transfers and wire instructions.</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <p className="text-blue-800">
            <strong>Transfer Note:</strong> Account moves use ACATS via DTCC/NSCC. The receiving broker handles the paperwork, but you should monitor progress and follow up if delays occur.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does an ACATS transfer take?</h3>
              <p className="text-gray-700">Most complete in 3-6 business days once initiated, barring issues like unsettled trades or registration mismatches.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will cost basis transfer?</h3>
              <p className="text-gray-700">Yes for covered securities in the US, but verify after arrival and keep your own records as backup.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I trade during the transfer?</h3>
              <p className="text-gray-700">Your old account will be frozen during transfer. Plan accordingly or maintain separate funds for trading.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-choose-a-stock-broker-fees-tools-support" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Choose Stock Broker</h3>
              <p className="text-sm text-blue-700 mt-1">Compare fees, tools, and support first</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-export-account-statements-for-taxes" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Export Account Statements →</h3>
              <p className="text-sm text-green-700 mt-1">Get tax documents before you transfer</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}