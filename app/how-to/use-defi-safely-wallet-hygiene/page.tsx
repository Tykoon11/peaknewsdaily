import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DeFi Safety: Wallet Hygiene for Everyday Users',
  description: 'A practical checklist for secure DeFi use—separate wallets, approvals, hardware signing, and phishing defenses.',
}

export default function UseDeFiSafelyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              ₿ Crypto & Web3
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              DeFi Safety: Wallet Hygiene for Everyday Users
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A practical checklist for secure DeFi use—separate wallets, approvals, hardware signing, and phishing defenses.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hygiene Rules</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-700">Segregate wallets: Long-term vault (hardware), hot wallet (daily), experimental burner.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700">Use hardware signing for any meaningful value.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-700">Check approvals: Periodically revoke unlimited token allowances.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-700">Simulate transactions when possible; read contract method names.</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="text-pink-700">Verify contract addresses from official sources; beware look-alikes.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-700">Protect seed/keys: Never type your seed into a website; sign only on device.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-orange-700">Custom RPCs: Use trusted endpoints; avoid random pop-ups to "switch networks."</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-700">Phishing defense: Bookmark official sites; ignore DMs/airdrops.</p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <p className="text-cyan-700">Gas buffer: Keep native gas token for emergency exits.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">Mobile caution: Prefer desktop + hardware for complex actions.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I reuse one wallet for everything?</h3>
                  <p className="text-gray-600">You can, but it raises correlated risk.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Are browser extensions safe?</h3>
                  <p className="text-gray-600">Keep them minimal and updated.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What if I signed a bad approval?</h3>
                  <p className="text-gray-600">Revoke the allowance ASAP and move funds.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/setup-hardware-wallet-cold-storage" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to set up a hardware wallet (cold storage)
                </a>
                <a href="/how-to/avoid-crypto-rug-pulls-scams" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to avoid crypto rug pulls and scams
                </a>
                <a href="/how-to/bridge-tokens-safely-cross-chain" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to bridge tokens across chains
                </a>
                <a href="/how-to/avoid-bank-scams-and-phishing" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to spot and avoid bank scams & phishing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}