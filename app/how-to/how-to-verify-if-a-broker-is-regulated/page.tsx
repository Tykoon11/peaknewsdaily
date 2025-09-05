import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Verify a Broker Is Regulated (US & Canada)',
  description: 'Use official registries (FINRA BrokerCheck, SEC IAPD, CIRO, CIPF). Step-by-step with links.',
}

export default function VerifyBrokerRegulatedPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Verify Broker Regulated</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏛️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Brokers & Exchanges</p>
            <h1 className="text-4xl font-bold text-gray-900">How to Verify a Broker Is Regulated (US & Canada)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Use official registries (FINRA BrokerCheck, SEC IAPD, CIRO, CIPF). Step-by-step with links.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Quick checks</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">🇺🇸 United States</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-blue-800">FINRA BrokerCheck</p>
                <p className="text-blue-700 text-sm mb-2">Search brokers and brokerage firms</p>
                <a href="https://brokercheck.finra.org" target="_blank" rel="noopener" className="text-blue-600 hover:underline text-sm">brokercheck.finra.org</a>
              </div>
              <div>
                <p className="font-medium text-blue-800">SEC IAPD</p>
                <p className="text-blue-700 text-sm mb-2">Investment adviser lookup</p>
                <a href="https://adviserinfo.sec.gov" target="_blank" rel="noopener" className="text-blue-600 hover:underline text-sm">adviserinfo.sec.gov</a>
              </div>
              <div>
                <p className="font-medium text-blue-800">SIPC Membership</p>
                <p className="text-blue-700 text-sm mb-2">Asset protection verification</p>
                <a href="https://sipc.org" target="_blank" rel="noopener" className="text-blue-600 hover:underline text-sm">sipc.org</a>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-4">🇨🇦 Canada</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-purple-800">CIRO Membership</p>
                <p className="text-purple-700 text-sm mb-2">Investment industry regulator</p>
                <a href="https://ciro.ca" target="_blank" rel="noopener" className="text-purple-600 hover:underline text-sm">ciro.ca</a>
              </div>
              <div>
                <p className="font-medium text-purple-800">CIPF Coverage</p>
                <p className="text-purple-700 text-sm mb-2">Canadian investor protection</p>
                <a href="https://cipf.ca" target="_blank" rel="noopener" className="text-purple-600 hover:underline text-sm">cipf.ca</a>
              </div>
            </div>
          </div>
        </div>

        <h2>Red flags</h2>
        
        <div className="space-y-4 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700"><strong>Guaranteed returns:</strong> No legitimate investment can guarantee profits.</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700"><strong>High-pressure tactics:</strong> "Limited time" offers or rushed decisions.</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700"><strong>Offshore registration only:</strong> No US/Canadian regulatory oversight.</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700"><strong>No physical address:</strong> Only P.O. boxes or foreign locations.</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700"><strong>Wallet-only "brokers":</strong> Ask you to send crypto to personal wallets.</p>
          </div>
        </div>

        <h2>Document trails</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-semibold text-yellow-900 mb-3">US Investment Advisers</h3>
            <ul className="text-yellow-700 space-y-2">
              <li>• Form ADV Part 1 (business info)</li>
              <li>• Form ADV Part 2 (services & fees)</li>
              <li>• Disciplinary history</li>
              <li>• Assets under management</li>
            </ul>
            <div className="mt-3 text-xs">
              <a href="https://investor.gov" target="_blank" rel="noopener" className="text-yellow-600 hover:underline">SEC Investor.gov</a>
            </div>
          </div>
          
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
            <h3 className="font-semibold text-teal-900 mb-3">What to Review</h3>
            <ul className="text-teal-700 space-y-2">
              <li>• Registration status and dates</li>
              <li>• Disciplinary actions or complaints</li>
              <li>• Business practices and conflicts</li>
              <li>• Fee structure transparency</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <p className="text-green-800">
            <strong>Mini-CTA:</strong> Run BrokerCheck / IAPD / CIRO search before depositing $1. Legitimate brokers welcome regulatory verification.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if a broker isn't in FINRA BrokerCheck?</h3>
              <p className="text-gray-700">They may not be registered to sell securities. Check if they're an RIA on SEC IAPD or avoid completely.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Does SIPC protect against trading losses?</h3>
              <p className="text-gray-700">No—SIPC only protects against broker failure, not investment losses from market risk.</p>
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
              <h3 className="font-semibold text-blue-900">← Choose a Stock Broker</h3>
              <p className="text-sm text-blue-700 mt-1">Compare fees, tools, and support</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-file-complaints-against-a-broker" 
              className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
            >
              <h3 className="font-semibold text-red-900">File Complaints →</h3>
              <p className="text-sm text-red-700 mt-1">When things go wrong with your broker</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}