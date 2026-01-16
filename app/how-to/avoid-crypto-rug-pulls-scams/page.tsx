import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spotting Rug Pulls: A No-Nonsense Anti-Scam Playbook',
  description: 'Learn the red flags of crypto scams—tokenomics traps, fake liquidity, honeypots, influencer shills, and how to verify on-chain.',
}

export default function AvoidCryptoRugPullsScamsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              ₿ Crypto & Web3
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Spotting Rug Pulls: A No-Nonsense Anti-Scam Playbook
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn the red flags of crypto scams—tokenomics traps, fake liquidity, honeypots, influencer shills, and how to verify on-chain.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Red Flags</h2>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700">Anonymous team with no track record or recycled avatars.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <p className="text-orange-700">No lock/vesting for team tokens; massive insider allocations.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-yellow-700">Unlocked liquidity or removable LP tokens.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <p className="text-purple-700">Honeypot code (you can buy but can't sell).</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                  <p className="text-pink-700">Aggressive promises (guaranteed APY, "risk-free").</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                  <p className="text-gray-700">Copy-pasted whitepapers and fake audits.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Due Diligence</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <ul className="space-y-3 text-blue-700">
                  <li>• Read the contract (or use reputable auditors' summaries)</li>
                  <li>• Check holders distribution; beware top wallets controlling supply</li>
                  <li>• Verify liquidity lock and lock period</li>
                  <li>• Search for forked code + known vulnerabilities</li>
                  <li>• Avoid celebrity/influencer-only marketing</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Are audits enough?</h3>
                  <p className="text-gray-600">No—audits reduce risk, not remove it.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Is KYC useful?</h3>
                  <p className="text-gray-600">It adds accountability but isn't a guarantee.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Best rule?</h3>
                  <p className="text-gray-600">If it sounds too good to be true, it is.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/choose-crypto-exchange-security-checklist" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to choose a crypto exchange (security checklist)
                </a>
                <a href="/how-to/use-defi-safely-wallet-hygiene" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to use DeFi safely (wallet hygiene)
                </a>
                <a href="/how-to/avoid-bank-scams-and-phishing" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to spot and avoid bank scams and phishing
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