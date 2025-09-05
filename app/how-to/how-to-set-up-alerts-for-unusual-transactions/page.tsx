import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Set Up Alerts for Unusual Transactions | Complete Fraud Protection Guide',
  description: 'Protect your finances with transaction alerts and fraud monitoring. Learn to set up real-time notifications for suspicious banking and credit card activity.',
  keywords: 'transaction alerts, fraud monitoring, banking notifications, credit card security, unusual activity alerts, financial fraud prevention',
};

export default function HowToSetUpTransactionAlertsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of transaction alerts should I set up?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Set up alerts for all transactions above $1, international purchases, online transactions, ATM withdrawals, failed login attempts, address changes, and any transaction outside your usual spending patterns or geographic area."
        }
      },
      {
        "@type": "Question", 
        "name": "How quickly do transaction alerts notify me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most banks and credit card companies send alerts within minutes of a transaction. Text messages are typically fastest, followed by push notifications from mobile apps, then email alerts."
        }
      },
      {
        "@type": "Question",
        "name": "Are transaction alerts free?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Most financial institutions offer transaction alerts as a free security service. However, standard text messaging rates from your mobile carrier may apply for SMS alerts."
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
          <span className="text-pink-600">Transaction Alerts</span>
        </div>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Set Up Alerts for Unusual Transactions: Complete Fraud Protection Guide
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Catch fraudulent activity before it escalates with comprehensive transaction monitoring. Learn to configure alerts that protect your finances 24/7.
          </p>
        </header>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-2">🛡️ Early Warning System</h2>
          <p className="text-green-700">
            Transaction alerts are your first line of defense against fraud. Early detection can prevent thousands of dollars in losses and minimize recovery time.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Transaction Alerts Matter</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Fraud Detection Timeline</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fraudulent Activity Begins</h4>
                  <p className="text-gray-700">Criminals test stolen card details with small purchases to verify they work.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Alert Triggers</h4>
                  <p className="text-gray-700">Your monitoring system detects unusual activity and sends immediate notification.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rapid Response</h4>
                  <p className="text-gray-700">You quickly report the fraud and freeze accounts, limiting damage.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Without Alerts</h4>
                  <p className="text-gray-700">Discovery often takes weeks, allowing criminals to maximize damage and complicate recovery.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Alert Types</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High-Priority Alerts</h3>
              <ul className="space-y-2 text-gray-700">
                <li>🚨 <strong>All Transactions:</strong> Every purchase, withdrawal, or charge</li>
                <li>🌍 <strong>International Activity:</strong> Purchases outside your country</li>
                <li>🏧 <strong>ATM Withdrawals:</strong> All cash withdrawals and attempts</li>
                <li>💳 <strong>Online Purchases:</strong> Card-not-present transactions</li>
                <li>🔒 <strong>Account Access:</strong> Login attempts and password changes</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Additional Monitoring</h3>
              <ul className="space-y-2 text-gray-700">
                <li>💰 <strong>Large Purchases:</strong> Transactions above your set limit</li>
                <li>📍 <strong>Geographic Alerts:</strong> Activity in new locations</li>
                <li>⏰ <strong>Time-Based:</strong> Purchases during unusual hours</li>
                <li>🏪 <strong>Merchant Categories:</strong> Specific business types</li>
                <li>🔄 <strong>Recurring Changes:</strong> Subscription modifications</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Setting Up Bank Account Alerts</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Bank Setup</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Access Online Banking</h4>
                  <p className="text-gray-700 mb-2">Log into your bank's website or mobile app using secure credentials.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Use official bank app or website only</li>
                    <li>• Ensure you're on a secure HTTPS connection</li>
                    <li>• Never use public Wi-Fi for setup</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Navigate to Alerts Section</h4>
                  <p className="text-gray-700 mb-2">Find the alerts, notifications, or account management section.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Common menu names: "Alerts," "Notifications," "Settings"</li>
                    <li>• May be under "Account Services" or "Security"</li>
                    <li>• Use search function if you can't locate it</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Configure Contact Preferences</h4>
                  <p className="text-gray-700 mb-2">Set up how you want to receive alerts.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Text messages: Fastest delivery</li>
                    <li>• Push notifications: Good for app users</li>
                    <li>• Email: Detailed information but slower</li>
                    <li>• Consider using multiple methods for critical alerts</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Select Alert Types</h4>
                  <p className="text-gray-700 mb-2">Choose which activities trigger notifications.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Start with all transaction alerts</li>
                    <li>• Add balance and low-fund notifications</li>
                    <li>• Include login and security alerts</li>
                    <li>• Set geographic and time restrictions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Credit Card Alert Configuration</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Credit Card Specific Settings</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Transaction Monitoring</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• All purchases (regardless of amount)</li>
                  <li>• Cash advances and ATM use</li>
                  <li>• Balance transfers</li>
                  <li>• Overlimit attempts</li>
                  <li>• Payment processing</li>
                  <li>• Interest charge alerts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Security Notifications</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Address or phone changes</li>
                  <li>• New authorized users</li>
                  <li>• Credit limit changes</li>
                  <li>• Account statement generation</li>
                  <li>• Failed authentication attempts</li>
                  <li>• Fraud investigation status</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Major Bank and Card Issuer Setup</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Chase Bank</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Chase Mobile app → Profile → Alerts</li>
                <li>• Chase.com → Account Management → Alerts</li>
                <li>• Set up "QuickAlert" for all transactions</li>
                <li>• Enable travel notifications</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bank of America</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Mobile app → Menu → Alerts</li>
                <li>• BankofAmerica.com → Customer Service → Alerts</li>
                <li>• Configure "Security Alerts"</li>
                <li>• Set up account balance alerts</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Capital One</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Capital One Mobile → Profile → Notifications</li>
                <li>• CapitalOne.com → Account Settings → Alerts</li>
                <li>• Real-time transaction notifications</li>
                <li>• Eno virtual card alerts</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Monitoring Services</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Additional Protection Layers</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">💎</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Credit Monitoring Services</h4>
                  <p className="text-gray-700">Services like Experian, Equifax, or TransUnion monitor credit report changes and new account openings.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">💎</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Identity Monitoring</h4>
                  <p className="text-gray-700">Services like LifeLock or IdentityGuard monitor personal information use across various platforms.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">💎</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Account Aggregators</h4>
                  <p className="text-gray-700">Apps like Mint or Personal Capital can provide consolidated transaction monitoring across multiple accounts.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimizing Alert Settings</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">⚖️ Balancing Security and Convenience</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Avoid Alert Fatigue</h4>
                <ul className="text-yellow-600 space-y-1 text-sm">
                  <li>• Don't set thresholds too low for large purchases</li>
                  <li>• Use different alert methods for different priorities</li>
                  <li>• Review and adjust settings regularly</li>
                  <li>• Turn off redundant notifications</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Maximize Effectiveness</h4>
                <ul className="text-yellow-600 space-y-1 text-sm">
                  <li>• Set up multiple contact methods</li>
                  <li>• Use immediate notifications for fraud risks</li>
                  <li>• Configure geographic and time-based rules</li>
                  <li>• Test alerts to ensure they work</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Responding to Suspicious Alerts</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-4">🚨 When You Receive a Suspicious Alert</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="font-bold text-red-800">1.</span>
                <div>
                  <h4 className="font-semibold text-red-800">Don't Ignore It</h4>
                  <p className="text-red-700 text-sm">Even small unauthorized transactions often precede larger fraud.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold text-red-800">2.</span>
                <div>
                  <h4 className="font-semibold text-red-800">Verify the Transaction</h4>
                  <p className="text-red-700 text-sm">Check if you or authorized users made the purchase.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold text-red-800">3.</span>
                <div>
                  <h4 className="font-semibold text-red-800">Contact Your Bank Immediately</h4>
                  <p className="text-red-700 text-sm">Use the official phone number on your card or statement.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold text-red-800">4.</span>
                <div>
                  <h4 className="font-semibold text-red-800">Freeze the Account</h4>
                  <p className="text-red-700 text-sm">Temporarily disable the card while the investigation proceeds.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold text-red-800">5.</span>
                <div>
                  <h4 className="font-semibold text-red-800">Document Everything</h4>
                  <p className="text-red-700 text-sm">Save the alert, note the time you called, and get reference numbers.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Alert Management Best Practices</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ongoing Maintenance</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Regular Review</h4>
                  <p className="text-gray-700">Check alert settings quarterly to ensure they match your current spending patterns and needs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Update Contact Information</h4>
                  <p className="text-gray-700">Keep phone numbers and email addresses current to ensure alerts reach you.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Test Functionality</h4>
                  <p className="text-gray-700">Periodically make small purchases to verify alerts are working correctly.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Travel Notifications</h4>
                  <p className="text-gray-700">Inform banks of travel plans to prevent legitimate transactions from being blocked.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Setup Checklist</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Setup</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-pink-600" />
                    <span className="text-gray-900 text-sm">All transaction alerts enabled</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-pink-600" />
                    <span className="text-gray-900 text-sm">International transaction alerts</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-pink-600" />
                    <span className="text-gray-900 text-sm">ATM withdrawal notifications</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-pink-600" />
                    <span className="text-gray-900 text-sm">Login attempt alerts</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-pink-600" />
                    <span className="text-gray-900 text-sm">Account change notifications</span>
                  </label>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Methods</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-pink-600" />
                    <span className="text-gray-900 text-sm">Mobile phone number verified</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-pink-600" />
                    <span className="text-gray-900 text-sm">Email address confirmed</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-pink-600" />
                    <span className="text-gray-900 text-sm">Push notifications enabled</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-pink-600" />
                    <span className="text-gray-900 text-sm">Backup contact method set</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 text-pink-600" />
                    <span className="text-gray-900 text-sm">Alert test completed successfully</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What types of transaction alerts should I set up?</h3>
              <p className="text-gray-700">
                Set up alerts for all transactions above $1, international purchases, online transactions, ATM withdrawals, failed login attempts, address changes, and any transaction outside your usual spending patterns or geographic area.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How quickly do transaction alerts notify me?</h3>
              <p className="text-gray-700">
                Most banks and credit card companies send alerts within minutes of a transaction. Text messages are typically fastest, followed by push notifications from mobile apps, then email alerts.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Are transaction alerts free?</h3>
              <p className="text-gray-700">
                Most financial institutions offer transaction alerts as a free security service. However, standard text messaging rates from your mobile carrier may apply for SMS alerts.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Key Takeaways</h3>
            <ul className="text-green-700 space-y-1">
              <li>• Enable alerts for ALL transactions, regardless of amount</li>
              <li>• Use multiple contact methods (SMS, email, push notifications)</li>
              <li>• Set up geographic and international transaction alerts</li>
              <li>• Respond immediately to any suspicious activity alerts</li>
              <li>• Review and update alert settings regularly</li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          <Link href="/how-to/how-to-detect-skimmers-and-card-cloning" className="text-pink-600 hover:text-pink-700 underline">
            Detect Card Skimmers
          </Link>
          <Link href="/how-to/how-to-use-virtual-cards-for-safer-online-shopping" className="text-pink-600 hover:text-pink-700 underline">
            Virtual Card Safety
          </Link>
          <Link href="/how-to/how-to-create-a-financial-emergency-plan" className="text-pink-600 hover:text-pink-700 underline">
            Financial Emergency Plan
          </Link>
          <Link href="/category/how-to" className="text-pink-600 hover:text-pink-700 underline">
            All How-To Guides
          </Link>
        </div>
      </footer>
    </div>
  );
}