import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '17 Ways to Lower Trading Commissions & Hidden Fees',
  description: 'Practical tactics: order types, routing, data packages, FX, and statement audits.',
}

export default function LowerTradingFeesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              📊 Brokers & Exchanges
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              17 Ways to Lower Trading Commissions & Hidden Fees
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical tactics: order types, routing, data packages, FX, and statement audits.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Know Your Fee Map</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-3">Direct Trading Costs</h3>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Stock commissions ($0-$7 typical)</li>
                    <li>• Options per-contract fees ($0.50-$1.25)</li>
                    <li>• Exchange/regulatory fees</li>
                    <li>• ECN access/removal fees</li>
                    <li>• Order routing costs</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-3">Hidden & Ancillary Costs</h3>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Market data subscriptions</li>
                    <li>• Foreign exchange spreads</li>
                    <li>• Wire transfer fees</li>
                    <li>• Account maintenance charges</li>
                    <li>• Statement/confirm delivery</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17 Fee Reduction Tactics</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-4">Order Management (5 tactics)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-green-800">1. Use appropriate order types</p>
                      <p className="text-green-700 text-sm">Limit orders can earn rebates vs market orders paying fees.</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-800">2. Aggregate smaller fills</p>
                      <p className="text-green-700 text-sm">Batch orders to reduce per-transaction costs.</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-800">3. Choose smart routing</p>
                      <p className="text-green-700 text-sm">Let the broker find the best execution venue.</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-800">4. Time your trades</p>
                      <p className="text-green-700 text-sm">Avoid opening/closing auctions if you don't need immediacy.</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-800">5. Review execution quality</p>
                      <p className="text-green-700 text-sm">Rule 606 reports show where orders go and price improvement.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-4">Data & Platform Optimization (4 tactics)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-blue-800">6. Audit market data subscriptions</p>
                      <p className="text-blue-700 text-sm">Cancel unused Level 2 or TotalView if you don't actively trade.</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">7. Use free alternatives</p>
                      <p className="text-blue-700 text-sm">Many brokers offer basic Level 2 data with active accounts.</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">8. Bundle platform features</p>
                      <p className="text-blue-700 text-sm">Combined packages often cost less than individual subscriptions.</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">9. Negotiate professional data rates</p>
                      <p className="text-blue-700 text-sm">Higher-volume traders can request institutional pricing.</p>
                    </div>
                  </div>
                  <div className="mt-3 text-xs">
                    <a href="https://nasdaq.com/market-activity/quotes/nasdaq-totalview" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Nasdaq TotalView Pricing</a>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-4">Account & Volume Optimization (4 tactics)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-purple-800">10. Reach volume tiers</p>
                      <p className="text-purple-700 text-sm">Higher monthly volume can unlock lower per-trade costs.</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-800">11. Maintain minimum balances</p>
                      <p className="text-purple-700 text-sm">Avoid account maintenance fees with sufficient equity.</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-800">12. Request transfer fee rebates</p>
                      <p className="text-purple-700 text-sm">New brokers often reimburse ACATS transfer costs.</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-800">13. Consolidate accounts</p>
                      <p className="text-purple-700 text-sm">Multiple small accounts may trigger maintenance fees.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-4">Currency & International (2 tactics)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-yellow-800">14. Compare FX spreads</p>
                      <p className="text-yellow-700 text-sm">Foreign stock purchases can have wide currency conversion spreads.</p>
                    </div>
                    <div>
                      <p className="font-medium text-yellow-800">15. Use currency hedged ETFs</p>
                      <p className="text-yellow-700 text-sm">Avoid individual FX conversions for international exposure.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-teal-900 mb-4">Administrative Savings (2 tactics)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-teal-800">16. Choose electronic delivery</p>
                      <p className="text-teal-700 text-sm">Paper statements and confirmations often carry fees.</p>
                    </div>
                    <div>
                      <p className="font-medium text-teal-800">17. Use ACH instead of wires</p>
                      <p className="text-teal-700 text-sm">Wire transfers can cost $15-25; ACH is usually free.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Negotiate & Optimize</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <div>
                    <p className="text-gray-700 font-medium">Request detailed fee schedules</p>
                    <p className="text-gray-600 text-sm">Many brokers have negotiable rates for active traders.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <div>
                    <p className="text-gray-700 font-medium">Ask about volume discounts</p>
                    <p className="text-gray-600 text-sm">Quarterly reviews can unlock better pricing tiers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <div>
                    <p className="text-gray-700 font-medium">Compare total cost of ownership</p>
                    <p className="text-gray-600 text-sm">Include data, platform, and administrative costs in broker comparisons.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <div>
                    <p className="text-gray-700 font-medium">Leverage competitive quotes</p>
                    <p className="text-gray-600 text-sm">Use offers from other brokers as negotiation leverage.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Fee Audit Checklist</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Monthly Review Items</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <ul className="text-gray-700 space-y-2">
                      <li>☐ Commission charges per trade</li>
                      <li>☐ Options contract fees</li>
                      <li>☐ Regulatory/exchange fees</li>
                      <li>☐ Market data subscriptions used</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-gray-700 space-y-2">
                      <li>☐ Account maintenance charges</li>
                      <li>☐ Wire/transfer fees</li>
                      <li>☐ Foreign exchange spreads</li>
                      <li>☐ Statement delivery costs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <p className="text-blue-800">
                <strong>Pro Tip:</strong> The cheapest broker isn't always the best value. Factor in execution quality, platform reliability, and customer service when calculating total cost.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Do zero-commission brokers really cost nothing?</h3>
                  <p className="text-gray-600">No—they typically make money through payment for order flow, wider spreads, or premium services.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Should I pay for Level 2 market data?</h3>
                  <p className="text-gray-600">Only if you're an active trader who needs real-time order book information for entry timing.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I negotiate trading fees?</h3>
                  <p className="text-gray-600">Yes, especially with higher account balances or trading volume. Many brokers have tiered pricing.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What fees are non-negotiable?</h3>
                  <p className="text-gray-600">Regulatory fees, exchange fees, and some third-party data costs are typically pass-through charges.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/choose-stock-broker-fees-tools-support" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to choose a stock broker (fees, tools, support)
                </a>
                <a href="/how-to/level-2-quotes-time-and-sales" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to use Level 2 quotes and time & sales
                </a>
                <a href="/how-to/transfer-brokerage-account-acats" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to transfer your brokerage account (ACATS)
                </a>
                <a href="/how-to/paper-trading-setup" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to set up paper trading to practice
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}