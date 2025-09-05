import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lost Seed Phrase Recovery: What\'s Actually Possible',
  description: 'Understand seed phrase recovery options, when recovery is possible vs impossible, and preventative measures for crypto wallet security.',
}

export default function RecoverLostSeedPhraseWhatPossiblePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              ₿ Crypto & Web3
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Lost Seed Phrase Recovery: What's Actually Possible
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understand seed phrase recovery options, when recovery is possible vs impossible, and preventative measures for crypto wallet security.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8 bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
              <h2 className="text-xl font-bold text-red-900 mb-2">Reality Check</h2>
              <p className="text-red-700">
                <strong>Complete seed phrase loss = permanent loss.</strong> No "customer service" can recover your crypto. This is by design.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Recovery Scenarios</h2>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Possible Recovery</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Partial phrases (missing 1-4 words)</li>
                    <li>• Wrong word order but all words present</li>
                    <li>• Typos/misspellings in written backup</li>
                    <li>• Different BIP39 wordlist language</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-2">Impossible Recovery</h3>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Complete phrase loss (no backup)</li>
                    <li>• Missing 5+ words</li>
                    <li>• Completely destroyed/unreadable backup</li>
                    <li>• Hardware wallet with no seed backup</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Recovery Methods</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Brute Force Tools</h3>
                  <p className="text-blue-700 text-sm">BTCRecover, Hashcat for missing words/typos.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Professional Services</h3>
                  <p className="text-purple-700 text-sm">Specialists for complex recovery (high fees).</p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">Memory Techniques</h3>
                  <p className="text-yellow-700 text-sm">Reconstruct from partial memory + patterns.</p>
                </div>
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-teal-900 mb-2">Derivation Paths</h3>
                  <p className="text-teal-700 text-sm">Try different wallet standards/paths.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prevention Strategies</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <p className="text-gray-700">Multiple secure backups (steel plates, safe deposit boxes).</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <p className="text-gray-700">Test recovery process before funding wallet.</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <p className="text-gray-700">Consider multisig or social recovery wallets.</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <p className="text-gray-700">Use passphrases as additional security layer.</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
                  <p className="text-gray-700">Regular backup verification and inheritance planning.</p>
                </div>
              </div>
            </div>

            <div className="mb-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <p className="text-yellow-800">
                <strong>Warning:</strong> Beware of "recovery services" scams. Never share your seed phrase with anyone claiming they can help.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Can hardware wallet companies recover my funds?</h3>
                  <p className="text-gray-600">No—they never see your seed phrase by design.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">How long does brute force take?</h3>
                  <p className="text-gray-600">Hours to years depending on missing information.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Should I pay for recovery services?</h3>
                  <p className="text-gray-600">Only reputable ones with no-recovery-no-fee guarantees.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/setup-hardware-wallet-cold-storage" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to set up a hardware wallet (cold storage)
                </a>
                <a href="/how-to/use-defi-safely-wallet-hygiene" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to use DeFi safely (wallet hygiene)
                </a>
                <a href="/how-to/buy-bitcoin-safely-step-by-step" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to buy Bitcoin safely (step by step)
                </a>
                <a href="/how-to/avoid-crypto-rug-pulls-scams" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to avoid crypto rug pulls and scams
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}