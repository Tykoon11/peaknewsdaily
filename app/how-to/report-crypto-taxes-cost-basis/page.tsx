import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crypto Taxes 101: Cost Basis Methods Explained',
  description: 'Learn FIFO, LIFO, HIFO, and Specific ID; what\'s taxable, what\'s not, and how to keep bulletproof records for filings.',
}

export default function ReportCryptoTaxesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              ₿ Crypto & Web3
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Crypto Taxes 101: Cost Basis Methods Explained
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn FIFO, LIFO, HIFO, and Specific ID; what's taxable, what's not, and how to keep bulletproof records for filings.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Concepts</h2>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-2">Taxable events</h3>
                  <p className="text-red-700 text-sm">Sales, swaps, spending, interest/staking rewards, mining income, airdrops at receipt.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Non-taxable</h3>
                  <p className="text-green-700 text-sm">Wallet-to-wallet transfers you control.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Cost basis methods</h3>
                  <p className="text-blue-700 text-sm">FIFO, LIFO, HIFO, Specific ID (needs detailed records).</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Records to keep</h3>
                  <p className="text-purple-700 text-sm">Dates, amounts, tx hashes, fees, fair market value at time of disposition.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost Basis Methods</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">FIFO</h3>
                  <p className="text-blue-700 text-sm">First In, First Out - Use oldest coins first</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">LIFO</h3>
                  <p className="text-green-700 text-sm">Last In, First Out - Use newest coins first</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">HIFO</h3>
                  <p className="text-purple-700 text-sm">Highest In, First Out - Use highest cost basis first</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Specific ID</h3>
                  <p className="text-orange-700 text-sm">Choose specific coins - Requires detailed records</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Practical Flow</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <p className="text-gray-700">Consolidate data from exchanges/wallets.</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <p className="text-gray-700">Tag transfers vs taxable events correctly.</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <p className="text-gray-700">Choose a cost-basis method permitted in your jurisdiction.</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <p className="text-gray-700">Generate reports; reconcile discrepancies.</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
                  <p className="text-gray-700">Keep exports + backups for audit trails.</p>
                </div>
              </div>
            </div>

            <div className="mb-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <p className="text-yellow-800">
                <strong>Note:</strong> Rules vary by country (e.g., CRA vs IRS). When in doubt, consult a licensed tax professional.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Are swaps taxable?</h3>
                  <p className="text-gray-600">Often yes—they're disposals into a new asset.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Wash sale rules?</h3>
                  <p className="text-gray-600">Treatment can vary; check your jurisdiction.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Do I owe tax on staking rewards?</h3>
                  <p className="text-gray-600">Frequently yes at receipt; confirm locally.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/stake-crypto-apy-risk" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to stake crypto and understand APY risk
                </a>
                <a href="/how-to/bridge-tokens-safely-cross-chain" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to bridge tokens across chains
                </a>
                <a href="/how-to/mint-nft-responsibly-fees-rights" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to mint an NFT responsibly
                </a>
                <a href="/how-to/buy-bitcoin-safely-step-by-step" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to buy Bitcoin safely (step by step)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}