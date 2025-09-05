import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Use Virtual Cards for Safer Online Shopping | Complete Security Guide',
  description: 'Protect your finances with virtual credit cards. Learn to set up and use virtual cards for secure online shopping, subscription management, and fraud prevention.',
  keywords: 'virtual credit cards, online shopping security, digital payment protection, virtual card providers, secure payments, fraud prevention',
};

export default function HowToUseVirtualCardsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a virtual credit card and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A virtual credit card is a temporary, randomly generated card number linked to your real account. It acts as a shield between merchants and your actual credit card details, providing enhanced security for online purchases."
        }
      },
      {
        "@type": "Question", 
        "name": "Which banks and services offer virtual cards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Major providers include Capital One Eno, Citi Virtual Card Numbers, Bank of America ShopSafe, Apple Card virtual numbers, Privacy.com, and Blur by Abine. Many banks now offer this feature through their apps."
        }
      },
      {
        "@type": "Question",
        "name": "Can virtual cards prevent subscription billing issues?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Yes! Virtual cards with spending limits and expiration dates can prevent unwanted recurring charges, make canceling subscriptions easier, and help you track subscription spending more effectively."
        }
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <nav className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-pink-600">Home</Link>
          <span>→</span>
          <Link href="/category/how-to" className="hover:text-pink-600">How-To Guides</Link>
          <span>→</span>
          <span className="text-pink-600">Virtual Card Safety</span>
        </div>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Use Virtual Cards for Safer Online Shopping: Complete Security Guide
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Master virtual credit cards to protect your finances while shopping online. Learn setup, best practices, and advanced security strategies for digital payments.
          </p>
        </header>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-2">🛡️ Security Benefits</h2>
          <p className="text-green-700">
            Virtual cards add an extra layer of protection between your real account and online merchants, significantly reducing the risk of fraud and unauthorized charges.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Virtual Credit Cards?</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">How Virtual Cards Work</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Temporary Card Numbers</h4>
                  <p className="text-gray-700">Generate unique, temporary card numbers for each merchant or purchase, protecting your real account details.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Linked to Real Account</h4>
                  <p className="text-gray-700">Charges are processed through your actual credit card or bank account, but merchants never see your real numbers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Customizable Controls</h4>
                  <p className="text-gray-700">Set spending limits, expiration dates, and merchant restrictions for enhanced control over your spending.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Virtual Card Providers</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bank-Provided Options</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <div>
                    <span className="font-semibold">Capital One Eno:</span>
                    <span className="text-gray-700"> Browser extension with automatic card generation</span>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <div>
                    <span className="font-semibold">Citi Virtual Account Numbers:</span>
                    <span className="text-gray-700"> Full control over limits and expiration</span>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <div>
                    <span className="font-semibold">Bank of America ShopSafe:</span>
                    <span className="text-gray-700"> Integrated with online banking</span>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <div>
                    <span className="font-semibold">Apple Card Virtual Numbers:</span>
                    <span className="text-gray-700"> Safari integration for seamless use</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <div>
                    <span className="font-semibold">Privacy.com:</span>
                    <span className="text-gray-700"> Advanced controls and spending categories</span>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <div>
                    <span className="font-semibold">Blur by Abine:</span>
                    <span className="text-gray-700"> Includes identity protection features</span>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <div>
                    <span className="font-semibold">MySudo:</span>
                    <span className="text-gray-700"> Full digital identity protection suite</span>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-pink-600">•</span>
                  <div>
                    <span className="font-semibold">Revolut Disposable Cards:</span>
                    <span className="text-gray-700"> European users with instant generation</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Setting Up Virtual Cards</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Setup Process</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Choose Your Provider</h4>
                  <p className="text-gray-700 mb-2">Select based on your bank, spending habits, and desired features.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Check if your bank offers virtual cards first</li>
                    <li>• Compare features and fees</li>
                    <li>• Consider integration with existing accounts</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Download and Install</h4>
                  <p className="text-gray-700 mb-2">Get the app or browser extension from official sources.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Use official app stores only</li>
                    <li>• Verify developer credentials</li>
                    <li>• Enable automatic updates</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Link Your Funding Source</h4>
                  <p className="text-gray-700 mb-2">Connect your bank account or credit card securely.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Use strong authentication methods</li>
                    <li>• Verify connection with small test transaction</li>
                    <li>• Set up account alerts</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Configure Security Settings</h4>
                  <p className="text-gray-700 mb-2">Set up notifications, limits, and security preferences.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Enable transaction notifications</li>
                    <li>• Set default spending limits</li>
                    <li>• Configure fraud alerts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices for Virtual Card Usage</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Usage Strategies</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Create unique cards for each merchant</li>
                <li>• Set spending limits based on expected costs</li>
                <li>• Use temporary cards for one-time purchases</li>
                <li>• Create recurring cards for subscriptions</li>
                <li>• Pause cards when not in use</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Best Practices</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Never share virtual card details</li>
                <li>• Monitor transactions regularly</li>
                <li>• Delete unused virtual cards</li>
                <li>• Use strong passwords for accounts</li>
                <li>• Enable two-factor authentication</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Virtual Card Strategies</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Subscription Management</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold text-sm">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Trial Period Protection</h4>
                  <p className="text-gray-700">Create cards with low limits for free trials to prevent surprise charges if you forget to cancel.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold text-sm">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Subscription Tracking</h4>
                  <p className="text-gray-700">Use dedicated cards for each subscription service to easily track and manage recurring expenses.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold text-sm">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Easy Cancellation</h4>
                  <p className="text-gray-700">Simply pause or delete the virtual card to stop recurring payments without calling customer service.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Troubleshooting Common Issues</h2>
          
          <div className="space-y-4 mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">⚠️ When Virtual Cards Get Declined</h3>
              <ul className="text-yellow-700 space-y-2">
                <li><strong>Check spending limits:</strong> Ensure the limit is higher than your purchase amount</li>
                <li><strong>Verify expiration:</strong> Some cards have short expiration periods</li>
                <li><strong>Confirm merchant acceptance:</strong> Not all merchants accept virtual cards</li>
                <li><strong>Update billing address:</strong> Use the address associated with your funding account</li>
                <li><strong>Contact provider:</strong> Some transactions may be flagged for manual review</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Virtual Card vs. Other Payment Methods</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Payment Method</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Security Level</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Control Features</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-semibold">Virtual Cards</td>
                  <td className="px-4 py-3 text-green-600">Very High</td>
                  <td className="px-4 py-3">Limits, expiration, merchant-specific</td>
                  <td className="px-4 py-3">Online shopping, subscriptions</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Credit Cards</td>
                  <td className="px-4 py-3 text-yellow-600">Medium</td>
                  <td className="px-4 py-3">Account-level controls only</td>
                  <td className="px-4 py-3">General purchases, rewards</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Debit Cards</td>
                  <td className="px-4 py-3 text-red-600">Lower</td>
                  <td className="px-4 py-3">Limited fraud protection</td>
                  <td className="px-4 py-3">ATM access, trusted merchants</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Digital Wallets</td>
                  <td className="px-4 py-3 text-green-600">High</td>
                  <td className="px-4 py-3">Tokenization, biometric auth</td>
                  <td className="px-4 py-3">Mobile payments, in-store</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What is a virtual credit card and how does it work?</h3>
              <p className="text-gray-700">
                A virtual credit card is a temporary, randomly generated card number linked to your real account. It acts as a shield between merchants and your actual credit card details, providing enhanced security for online purchases.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Which banks and services offer virtual cards?</h3>
              <p className="text-gray-700">
                Major providers include Capital One Eno, Citi Virtual Card Numbers, Bank of America ShopSafe, Apple Card virtual numbers, Privacy.com, and Blur by Abine. Many banks now offer this feature through their apps.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can virtual cards prevent subscription billing issues?</h3>
              <p className="text-gray-700">
                Yes! Virtual cards with spending limits and expiration dates can prevent unwanted recurring charges, make canceling subscriptions easier, and help you track subscription spending more effectively.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Key Takeaways</h3>
            <ul className="text-green-700 space-y-1">
              <li>• Virtual cards provide superior online shopping security</li>
              <li>• Set spending limits and expiration dates for better control</li>
              <li>• Use unique cards for each merchant or subscription</li>
              <li>• Enable notifications for all virtual card transactions</li>
              <li>• Choose providers that integrate with your existing accounts</li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          <Link href="/how-to/how-to-secure-your-accounts-with-password-managers" className="text-pink-600 hover:text-pink-700 underline">
            Password Manager Security
          </Link>
          <Link href="/how-to/how-to-set-up-two-factor-authentication" className="text-pink-600 hover:text-pink-700 underline">
            Two-Factor Authentication
          </Link>
          <Link href="/how-to/how-to-detect-skimmers-and-card-cloning" className="text-pink-600 hover:text-pink-700 underline">
            Detect Card Skimmers
          </Link>
          <Link href="/category/how-to" className="text-pink-600 hover:text-pink-700 underline">
            All How-To Guides
          </Link>
        </div>
      </footer>
    </div>
  );
}