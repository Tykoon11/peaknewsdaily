import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Staking Crypto: Rewards, Risks, and Realistic APY',
  description: 'Understand native staking, liquid staking, lockups, slashing, and smart-contract risk so your APY doesn\'t turn into permanent loss.',
}

export default function StakeCryptoAPYRiskPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              ₿ Crypto & Web3
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Staking Crypto: Rewards, Risks, and Realistic APY
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understand native staking, liquid staking, lockups, slashing, and smart-contract risk so your APY doesn't turn into permanent loss.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Staking Types</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Native/Validator staking</h3>
                  <p className="text-blue-700 text-sm">(on L1 chain)</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Delegated staking</h3>
                  <p className="text-green-700 text-sm">(to validators, you keep custody)</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Liquid staking tokens (LSTs)</h3>
                  <p className="text-purple-700 text-sm">for on-chain liquidity</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Centralized staking</h3>
                  <p className="text-orange-700 text-sm">(exchange holds keys—be cautious)</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Risks</h2>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700">Slashing for validator downtime/misbehavior.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-yellow-700">Smart-contract risk (LST protocols).</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <p className="text-orange-700">Depeg/liquidity risk for LSTs.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <p className="text-purple-700">Lockups & unbonding delays; price risk during exits.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">APY Reality</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  APY varies with inflation, fees, validator performance, and compounding. Compare net yield after fees and potential depeg.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Is liquid staking "safer"?</h3>
                  <p className="text-gray-600">It's flexible but adds smart-contract and depeg risk.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Should I diversify validators?</h3>
                  <p className="text-gray-600">Yes—reduces operator risk.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Tax impact?</h3>
                  <p className="text-gray-600">Rewards may be taxable as income; check local rules.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/report-crypto-taxes-cost-basis" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to report crypto taxes (cost basis methods)
                </a>
                <a href="/how-to/avoid-crypto-rug-pulls-scams" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to avoid crypto rug pulls and scams
                </a>
                <a href="/how-to/use-defi-safely-wallet-hygiene" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to use DeFi safely (wallet hygiene)
                </a>
                <a href="/how-to/choose-crypto-exchange-security-checklist" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to choose a crypto exchange (security checklist)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}