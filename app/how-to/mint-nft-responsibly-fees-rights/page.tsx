import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Mint an NFT Responsibly: Fees, Rights & Ethics',
  description: 'Learn about NFT minting costs, intellectual property rights, environmental impact, and ethical considerations for creators and collectors.',
}

export default function MintNFTResponsiblyFeesRightsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              ₿ Crypto & Web3
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How to Mint an NFT Responsibly: Fees, Rights & Ethics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about NFT minting costs, intellectual property rights, environmental impact, and ethical considerations for creators and collectors.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Minting Costs</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Gas Fees</h3>
                  <p className="text-blue-700 text-sm">Ethereum: $10-200+ depending on network congestion. L2s: $1-10.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Platform Fees</h3>
                  <p className="text-green-700 text-sm">OpenSea: 2.5%, Foundation: 15%, custom contracts: varies.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Storage Costs</h3>
                  <p className="text-purple-700 text-sm">IPFS: ~free, Arweave: permanent storage for ~$5-50.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Hidden Costs</h3>
                  <p className="text-orange-700 text-sm">Wallet setup, listing fees, royalty splits, failed transactions.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Rights & Ownership</h2>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700">
                    <strong>Key Point:</strong> NFT ≠ copyright ownership. You own a token, not necessarily the image/content rights.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">What You Actually Own</h3>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Token on blockchain pointing to metadata</li>
                    <li>• Rights explicitly granted in smart contract/terms</li>
                    <li>• Transferable ownership record</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Creator Rights</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Set royalty percentages (0-10% typical)</li>
                    <li>• Define usage rights for holders</li>
                    <li>• Retain or transfer copyright</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsible Practices</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <div>
                    <p className="text-gray-700 font-medium">Only mint original work or properly licensed content.</p>
                    <p className="text-gray-600 text-sm">Verify you own or have rights to use all elements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <div>
                    <p className="text-gray-700 font-medium">Choose sustainable blockchains or carbon offsets.</p>
                    <p className="text-gray-600 text-sm">Consider Ethereum L2s, Solana, or proof-of-stake networks.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <div>
                    <p className="text-gray-700 font-medium">Use decentralized storage (IPFS/Arweave).</p>
                    <p className="text-gray-600 text-sm">Avoid centralized servers that may go offline.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <div>
                    <p className="text-gray-700 font-medium">Clearly communicate utility and rights.</p>
                    <p className="text-gray-600 text-sm">Be transparent about what holders actually get.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
                  <div>
                    <p className="text-gray-700 font-medium">Set reasonable royalties (2.5-5% typical).</p>
                    <p className="text-gray-600 text-sm">Consider long-term holder value, not just creator profit.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Considerations</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Metadata Standards</h3>
                  <p className="text-blue-700 text-sm">Use ERC-721/1155 standards for compatibility.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">File Formats</h3>
                  <p className="text-green-700 text-sm">PNG/JPG for images, MP4 for video, GLB for 3D.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Resolution & Size</h3>
                  <p className="text-purple-700 text-sm">Balance quality vs loading speed (under 50MB ideal).</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Smart Contract</h3>
                  <p className="text-orange-700 text-sm">Deploy custom for full control or use platform contracts.</p>
                </div>
              </div>
            </div>

            <div className="mb-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <p className="text-yellow-800">
                <strong>Ethics Note:</strong> Consider the broader impact. Are you contributing value or just hoping for quick profits?
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I mint AI-generated art?</h3>
                  <p className="text-gray-600">Generally yes, but check if the AI tool allows commercial use.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Do I need to register copyright?</h3>
                  <p className="text-gray-600">Not required but helpful for legal protection.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What if my NFT doesn't sell?</h3>
                  <p className="text-gray-600">You still own it and paid minting costs—consider it a learning experience.</p>
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
                <a href="/how-to/avoid-crypto-rug-pulls-scams" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to avoid crypto rug pulls and scams
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