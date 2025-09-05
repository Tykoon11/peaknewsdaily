import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Safe Bridging: Move Tokens Across Chains the Right Way',
  description: 'Avoid bridge hacks and wrong-chain mistakes with this step-by-step guide to bridging crypto safely.',
}

export default function BridgeTokensSafelyCrossChainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              ₿ Crypto & Web3
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Safe Bridging: Move Tokens Across Chains the Right Way
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Avoid bridge hacks and wrong-chain mistakes with this step-by-step guide to bridging crypto safely.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Steps</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <p className="text-gray-700">Confirm the destination chain and the correct token contract there.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <p className="text-gray-700">Prefer native or official bridges when available.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <p className="text-gray-700">Bridge a tiny test first—verify receipt on the destination.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <p className="text-gray-700">Check finality times and maintenance notices.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
                  <p className="text-gray-700">Avoid peak congestion to reduce failures and fees.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">6</span>
                  <p className="text-gray-700">Beware wrapped assets: Understand redemption mechanics.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">7</span>
                  <p className="text-gray-700">Double-check addresses—chain and format must match.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">8</span>
                  <p className="text-gray-700">Keep gas on both chains for approvals and transfers.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Why did I receive a "wrapped" token?</h3>
                  <p className="text-gray-600">Many bridges mint wrapped representations; learn how to unwrap or use them.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I bridge NFTs?</h3>
                  <p className="text-gray-600">Only if the bridge supports the standard; risk may be higher.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What if a bridge is paused?</h3>
                  <p className="text-gray-600">Wait for resume or choose an alternative with known reputability.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/use-defi-safely-wallet-hygiene" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to use DeFi safely (wallet hygiene)
                </a>
                <a href="/how-to/setup-hardware-wallet-cold-storage" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to set up a hardware wallet (cold storage)
                </a>
                <a href="/how-to/avoid-crypto-rug-pulls-scams" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to avoid crypto rug pulls and scams
                </a>
                <a href="/how-to/report-crypto-taxes-cost-basis" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to report crypto taxes (cost basis methods)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}