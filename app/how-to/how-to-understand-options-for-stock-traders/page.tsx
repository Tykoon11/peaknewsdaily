import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Understand Options for Stock Traders',
  description: 'Options basics for stock traders: calls, puts, basic strategies, and when options can enhance your stock positions without complex trades.',
}

export default function UnderstandOptionsStockTradersPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Options for Stock Traders</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-green-600 font-medium">Stock &amp; ETF Trading</p>
            <h1 className="text-4xl font-bold text-gray-900">How to understand options for stock traders</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Learn options basics that complement your stock trading—no complex strategies, just practical applications.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Options for Stock Traders</h2>
          <p className="text-yellow-700 mb-3">
            You don&apos;t need complex options strategies. Simple calls and puts can enhance your stock positions, provide downside protection, or generate income.
          </p>
          <p className="text-yellow-600 text-sm">
            Focus on using options to improve your existing stock strategies, not replace them.
          </p>
        </div>

        <h2>Options basics: calls, puts, strike, expiration</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Call Options</h4>
            <div className="text-green-700 space-y-2">
              <p><strong>What it is:</strong> Right to BUY stock at strike price</p>
              <p><strong>When to use:</strong> Bullish on the stock</p>
              <p><strong>Example:</strong> AAPL $175 call = right to buy AAPL at $175</p>
              <p><strong>Profit if:</strong> Stock price goes above $175 + premium paid</p>
              <p><strong>Max loss:</strong> Premium paid</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Put Options</h4>
            <div className="text-red-700 space-y-2">
              <p><strong>What it is:</strong> Right to SELL stock at strike price</p>
              <p><strong>When to use:</strong> Bearish on stock or want protection</p>
              <p><strong>Example:</strong> AAPL $170 put = right to sell AAPL at $170</p>
              <p><strong>Profit if:</strong> Stock price goes below $170 - premium paid</p>
              <p><strong>Max loss:</strong> Premium paid</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Options Terms</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p><strong>Strike Price:</strong> The agreed-upon buy/sell price</p>
              <p><strong>Expiration Date:</strong> When the option expires (worthless if not exercised)</p>
              <p><strong>Premium:</strong> Cost to buy the option</p>
              <p><strong>Intrinsic Value:</strong> How much the option is &quot;in the money&quot;</p>
            </div>
            <div>
              <p><strong>Time Value:</strong> Extra premium due to time until expiration</p>
              <p><strong>Implied Volatility:</strong> Market&apos;s expectation of future price swings</p>
              <p><strong>Delta:</strong> How much option price changes per $1 stock move</p>
              <p><strong>Theta:</strong> How much value option loses per day</p>
            </div>
          </div>
        </div>

        <h2>Simple strategies for stock traders</h2>
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">1. Protective Put (Insurance)</h3>
            <div className="text-blue-700 space-y-2">
              <p><strong>When:</strong> You own stock but want downside protection</p>
              <p><strong>How:</strong> Buy put options on stocks you own</p>
              <p><strong>Example:</strong> Own 100 AAPL at $180, buy $170 put for $3</p>
              <p><strong>Result:</strong> Maximum loss is $10 + $3 = $13 per share</p>
              <p><strong>Cost:</strong> Put premium (insurance isn&apos;t free)</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">2. Covered Call (Income)</h3>
            <div className="text-green-700 space-y-2">
              <p><strong>When:</strong> You own stock and are neutral-to-slightly-bullish</p>
              <p><strong>How:</strong> Sell call options on stocks you own</p>
              <p><strong>Example:</strong> Own 100 AAPL at $175, sell $185 call for $2</p>
              <p><strong>Result:</strong> Collect $200 premium, but cap upside at $185</p>
              <p><strong>Risk:</strong> Miss out on gains above strike price</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">3. Cash-Secured Put (Entry Strategy)</h3>
            <div className="text-purple-700 space-y-2">
              <p><strong>When:</strong> You want to buy stock but at a lower price</p>
              <p><strong>How:</strong> Sell put options with cash set aside</p>
              <p><strong>Example:</strong> Want AAPL at $170, sell $170 put for $4</p>
              <p><strong>Result:</strong> Either keep $400 premium or buy AAPL at $166 net</p>
              <p><strong>Requirement:</strong> $17,000 cash ready if assigned</p>
            </div>
          </div>
        </div>

        <h2>When options enhance stock positions</h2>
        <div className="bg-green-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Options Advantages for Stock Traders</h3>
          <ul className="text-green-700 space-y-2">
            <li>• <strong>Leverage:</strong> Control 100 shares for fraction of stock cost</li>
            <li>• <strong>Defined risk:</strong> Know maximum loss upfront (premium paid)</li>
            <li>• <strong>Income generation:</strong> Covered calls add yield to stock holdings</li>
            <li>• <strong>Flexibility:</strong> Multiple ways to profit from same stock view</li>
            <li>• <strong>Hedging:</strong> Protect existing positions without selling</li>
            <li>• <strong>Lower capital requirement:</strong> Express bullish view with less money</li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Options Risks to Understand</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Time decay:</strong> Options lose value daily, especially near expiration</li>
            <li>• <strong>Implied volatility crush:</strong> IV drops after earnings, reducing option value</li>
            <li>• <strong>Assignment risk:</strong> Short options can be exercised against you</li>
            <li>• <strong>Liquidity issues:</strong> Wide bid-ask spreads on less popular options</li>
            <li>• <strong>Complexity:</strong> More moving parts than simple stock trades</li>
            <li>• <strong>Total loss possible:</strong> Options can expire worthless</li>
          </ul>
        </div>

        <h2>Greeks simplified for stock traders</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Greek</th>
                <th className="border border-gray-300 px-3 py-2">What It Measures</th>
                <th className="border border-gray-300 px-3 py-2">Practical Use</th>
                <th className="border border-gray-300 px-3 py-2">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Delta</td>
                <td className="border border-gray-300 px-3 py-2">Price sensitivity to stock move</td>
                <td className="border border-gray-300 px-3 py-2">How much option gains per $1 stock move</td>
                <td className="border border-gray-300 px-3 py-2">0.50 delta = $0.50 gain per $1 stock up</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Theta</td>
                <td className="border border-gray-300 px-3 py-2">Time decay per day</td>
                <td className="border border-gray-300 px-3 py-2">Daily value loss if stock stays flat</td>
                <td className="border border-gray-300 px-3 py-2">-0.05 theta = loses $5/day per contract</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Vega</td>
                <td className="border border-gray-300 px-3 py-2">Volatility sensitivity</td>
                <td className="border border-gray-300 px-3 py-2">Gain/loss from volatility changes</td>
                <td className="border border-gray-300 px-3 py-2">High vega = hurt by IV crush</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Gamma</td>
                <td className="border border-gray-300 px-3 py-2">Delta acceleration</td>
                <td className="border border-gray-300 px-3 py-2">How fast delta changes</td>
                <td className="border border-gray-300 px-3 py-2">Advanced—ignore for now</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Earnings season and options</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Options Around Earnings</h3>
          <div className="text-yellow-700 space-y-3">
            <p><strong>IV Crush Phenomenon:</strong></p>
            <p className="text-sm">Options prices inflate before earnings due to uncertainty. After announcement, implied volatility drops rapidly, crushing option values even if you guessed direction correctly.</p>
            
            <p><strong>Stock Trader Applications:</strong></p>
            <ul className="ml-4 space-y-1 text-sm">
              <li>• Sell calls against stock positions before earnings (capture inflated premiums)</li>
              <li>• Buy protective puts before earnings if you own stock</li>
              <li>• Avoid buying options right before earnings unless you understand IV crush</li>
              <li>• Consider selling options after earnings when IV is crushed</li>
            </ul>
          </div>
        </div>

        <h2>Position sizing with options</h2>
        <div className="bg-blue-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Options Position Sizing Rules</h3>
          <div className="text-blue-700 space-y-3">
            <p><strong>For Buying Options:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Never risk more than 2-5% of account on options trades</li>
              <li>• Expect total loss—options can expire worthless</li>
              <li>• Start small while learning (1 contract = 100 shares)</li>
            </ul>
            
            <p><strong>For Selling Options:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Only sell covered calls on stocks you own</li>
              <li>• Only sell cash-secured puts with full cash available</li>
              <li>• Understand assignment risk and be prepared to own/sell stock</li>
            </ul>
          </div>
        </div>

        <h2>Common beginner mistakes</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Options Mistakes to Avoid</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Buying options close to expiration:</strong> Time decay accelerates rapidly</li>
            <li>• <strong>Not understanding assignment:</strong> Short options can be exercised anytime</li>
            <li>• <strong>Ignoring liquidity:</strong> Wide bid-ask spreads eat profits</li>
            <li>• <strong>Overleveraging:</strong> Options amplify both gains and losses</li>
            <li>• <strong>Buying before earnings without IV consideration:</strong> IV crush kills profits</li>
            <li>• <strong>Complex strategies as a beginner:</strong> Start simple, add complexity slowly</li>
          </ul>
        </div>

        <div className="bg-green-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Getting Started with Options</h3>
          <div className="text-green-700 space-y-2">
            <p><strong>Step 1:</strong> Paper trade options for 2-3 months to understand mechanics</p>
            <p><strong>Step 2:</strong> Start with buying calls/puts on stocks you know well</p>
            <p><strong>Step 3:</strong> Learn covered calls on stocks you already own</p>
            <p><strong>Step 4:</strong> Practice cash-secured puts for stocks you want to own</p>
            <p><strong>Step 5:</strong> Master these basics before attempting complex strategies</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need options to be a successful stock trader?</h3>
              <p className="text-gray-700">No. Many successful traders never use options. Focus on mastering stock trading first, then consider options as an enhancement tool.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What&apos;s the minimum account size for options trading?</h3>
              <p className="text-gray-700">Most brokers require $2,000+ for options approval. However, you should have $10,000+ to properly diversify and size positions safely.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I buy or sell options as a beginner?</h3>
              <p className="text-gray-700">Start by buying calls and puts (defined risk). Avoid selling naked options until you fully understand assignment risk and margin requirements.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I know if an option has good liquidity?</h3>
              <p className="text-gray-700">Look for tight bid-ask spreads (ideally &lt;$0.05-0.10) and high open interest. Popular stocks with weekly expirations usually have better liquidity.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-build-trading-journal" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Trading Journal</h3>
              <p className="text-sm text-blue-700 mt-1">Track and improve results</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-place-your-first-stock-trade" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Back to Basics →</h3>
              <p className="text-sm text-green-700 mt-1">Your first stock trade</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}