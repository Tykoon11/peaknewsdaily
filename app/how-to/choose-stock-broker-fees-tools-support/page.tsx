import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Choose a Stock Broker in 2025: Fees, Tools & Support',
  description: 'Compare fees, platforms, market data (Level 2/TotalView), and support. US & Canada checklist with links to official regulator lookups.',
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How do I verify a US broker?",
    "acceptedAnswer": {"@type":"Answer","text":"Search the firm/individual on FINRA BrokerCheck and confirm SIPC membership for brokerage asset protection. For investment advisers, use the SEC IAPD database."}
  },{
    "@type": "Question",
    "name": "How do I verify a Canadian broker?",
    "acceptedAnswer": {"@type":"Answer","text":"Confirm the firm is regulated by CIRO and covered by the Canadian Investor Protection Fund (CIPF)."}
  }]
}

export default function ChooseStockBrokerFeesToolsSupportPage() {
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
        <span className="text-gray-700">Choose Stock Broker</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏛️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Brokers & Exchanges</p>
            <h1 className="text-4xl font-bold text-gray-900">How to Choose a Stock Broker (2025 Guide)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Compare fees, platforms, market data (Level 2/TotalView), and support. US & Canada checklist with links to official regulator lookups.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Start with safety (regulation & protection)</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">🇺🇸 United States</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-red-700">FINRA BrokerCheck for brokers</p>
              <p className="text-sm text-red-600">Verify registration and disciplinary history</p>
              <a href="https://brokercheck.finra.org/" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener">brokercheck.finra.org</a>
            </div>
            <div>
              <p className="font-medium text-red-700">SEC IAPD for advisers</p>
              <p className="text-sm text-red-600">Investment adviser public disclosure</p>
              <a href="https://adviserinfo.sec.gov/" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener">adviserinfo.sec.gov</a>
            </div>
            <div>
              <p className="font-medium text-red-700">SIPC membership</p>
              <p className="text-sm text-red-600">Brokerage asset protection (not market losses)</p>
              <a href="https://www.sipc.org/" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener">sipc.org</a>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">🇨🇦 Canada</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-red-700">CIRO regulation</p>
              <p className="text-sm text-red-600">Confirm firm is regulated by the Canadian Investment Regulatory Organization</p>
              <a href="https://www.ciro.ca/" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener">ciro.ca</a>
            </div>
            <div>
              <p className="font-medium text-red-700">CIPF coverage</p>
              <p className="text-sm text-red-600">Canadian Investor Protection Fund coverage</p>
              <a href="https://www.cipf.ca/" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener">cipf.ca</a>
            </div>
          </div>
        </div>

        <h2>Fee structure (all-in cost)</h2>
        
        <p>Look beyond headline commission rates—calculate your total annual cost including:</p>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Fee Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left">What to Look For</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Red Flags</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Commissions</td>
                <td className="border border-gray-300 px-3 py-2">$0 for stocks/ETFs</td>
                <td className="border border-gray-300 px-3 py-2">$4.95+ per trade</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Options</td>
                <td className="border border-gray-300 px-3 py-2">$0.50-0.65 per contract</td>
                <td className="border border-gray-300 px-3 py-2">$1+ per contract</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Market Data</td>
                <td className="border border-gray-300 px-3 py-2">Free Level 1, optional Level 2/TotalView</td>
                <td className="border border-gray-300 px-3 py-2">Mandatory expensive data packages</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">FX Conversion</td>
                <td className="border border-gray-300 px-3 py-2">1-2% spread</td>
                <td className="border border-gray-300 px-3 py-2">2.5%+ conversion fees</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Withdrawals</td>
                <td className="border border-gray-300 px-3 py-2">Free electronic transfers</td>
                <td className="border border-gray-300 px-3 py-2">$25+ wire fees, withdrawal limits</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Inactivity</td>
                <td className="border border-gray-300 px-3 py-2">No fees</td>
                <td className="border border-gray-300 px-3 py-2">$25+ monthly maintenance fees</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Platform & data</h2>
        
        <p>Your trading platform determines execution quality and research capabilities:</p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Essential Features</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Real-time quotes and charts</li>
              <li>• Order types: market, limit, stop-loss</li>
              <li>• Mobile app with full functionality</li>
              <li>• Portfolio tracking and performance</li>
              <li>• Research and screening tools</li>
              <li>• Tax reporting and statements</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Advanced Options</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Level 2 order book data</li>
              <li>• Options analytics and chains</li>
              <li>• API access for automation</li>
              <li>• Advanced charting with indicators</li>
              <li>• After-hours trading</li>
              <li>• International markets</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Market Data Note</h3>
          <p className="text-yellow-700 text-sm mb-2">
            <strong>Level 2 vs TotalView/Depth-of-Book:</strong> Level 2 shows best bids/offers by market maker. 
            TotalView and similar "depth" feeds show the complete order book but cost extra ($10-30/month). 
            Understand what you're paying for before subscribing.
          </p>
          <a href="https://www.nasdaq.com/solutions/nasdaq-totalview" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener">nasdaq.com/totalview</a>
        </div>

        <h2>Product access</h2>
        
        <p>Ensure the broker offers the investments you need:</p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Asset Class</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Most Brokers</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Check For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Stocks & ETFs</td>
                <td className="border border-gray-300 px-3 py-2">✓ Standard</td>
                <td className="border border-gray-300 px-3 py-2">Fractional shares, DRIP</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Options</td>
                <td className="border border-gray-300 px-3 py-2">✓ Usually</td>
                <td className="border border-gray-300 px-3 py-2">Approval levels, spreads</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Futures</td>
                <td className="border border-gray-300 px-3 py-2">Limited</td>
                <td className="border border-gray-300 px-3 py-2">Separate platform/fees</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Fixed Income</td>
                <td className="border border-gray-300 px-3 py-2">Basic</td>
                <td className="border border-gray-300 px-3 py-2">Corporate bonds, CDs, Treasury</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">OTC/Pink Sheets</td>
                <td className="border border-gray-300 px-3 py-2">Varies</td>
                <td className="border border-gray-300 px-3 py-2">Higher fees, restrictions</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">International</td>
                <td className="border border-gray-300 px-3 py-2">Limited</td>
                <td className="border border-gray-300 px-3 py-2">Markets available, FX costs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Service & support</h2>
        
        <p>Test customer service before you need it urgently:</p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Support Quality Checklist</h3>
          <ul className="text-blue-700 space-y-2">
            <li>✓ <strong>Hours:</strong> 24/5 during market hours, weekend access</li>
            <li>✓ <strong>Phone wait times:</strong> Under 5 minutes during normal hours</li>
            <li>✓ <strong>Competency:</strong> Can handle account, trading, and tax questions</li>
            <li>✓ <strong>Dispute resolution:</strong> Clear escalation process</li>
            <li>✓ <strong>Local presence:</strong> Branch offices if you prefer in-person</li>
            <li>✓ <strong>Educational resources:</strong> Tutorials, webinars, market commentary</li>
          </ul>
        </div>

        <h2>Try before you buy</h2>
        
        <p>Most brokers offer paper trading—use it to test:</p>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Platform Usability</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Order entry speed</li>
              <li>• Mobile app reliability</li>
              <li>• Research tool quality</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Execution Quality</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Fill prices vs market</li>
              <li>• Order routing speed</li>
              <li>• Partial fill handling</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Data & Reports</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Quote accuracy/latency</li>
              <li>• Statement clarity</li>
              <li>• Tax form exports</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Key Takeaway</h3>
          <p className="text-green-700">
            Choose safety first (regulator + protection fund), then total cost of ownership, 
            then platform/data that match your strategy. Don't get distracted by flashy features 
            you won't use—focus on reliability and value.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I verify a US broker?</h3>
              <p className="text-gray-700 mb-2">
                Search the firm/individual on FINRA BrokerCheck and confirm SIPC membership for brokerage asset protection. 
                For investment advisers, use the SEC IAPD database.
              </p>
              <div className="text-sm space-x-4">
                <a href="https://brokercheck.finra.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener">FINRA BrokerCheck</a>
                <a href="https://www.sipc.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener">SIPC.org</a>
                <a href="https://adviserinfo.sec.gov/" className="text-blue-600 hover:underline" target="_blank" rel="noopener">SEC IAPD</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I verify a Canadian broker?</h3>
              <p className="text-gray-700 mb-2">
                Confirm the firm is regulated by CIRO and covered by the Canadian Investor Protection Fund (CIPF).
              </p>
              <div className="text-sm space-x-4">
                <a href="https://www.ciro.ca/" className="text-blue-600 hover:underline" target="_blank" rel="noopener">CIRO</a>
                <a href="https://www.cipf.ca/" className="text-blue-600 hover:underline" target="_blank" rel="noopener">CIPF</a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the difference between Level 2 and TotalView?</h3>
              <p className="text-gray-700">
                Level 2 shows best bid/ask prices from different market makers. TotalView and similar "depth" feeds 
                show the complete order book with all price levels, but typically cost $10-30/month extra.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I choose a discount or full-service broker?</h3>
              <p className="text-gray-700">
                Discount brokers are better for self-directed investors who don't need advice. Full-service brokers 
                provide research and guidance but charge higher fees. Most investors are better served by low-cost platforms.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/verify-broker-regulated" 
              className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
            >
              <h3 className="font-semibold text-red-900">← Verify Broker Regulation</h3>
              <p className="text-sm text-red-700 mt-1">Safety checks before you invest</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/transfer-brokerage-account-acats" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Transfer Brokerage Account →</h3>
              <p className="text-sm text-green-700 mt-1">ACATS step-by-step guide</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}
