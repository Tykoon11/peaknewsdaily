export default function DataDisclaimer() {
  return (
    <div className="mb-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/50 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <div className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-300 mb-2">Market Data Sources & Disclaimer</h3>
          <div className="text-sm text-yellow-700 dark:text-yellow-200 space-y-1">
            <p><strong>✅ Real-time data:</strong> Cryptocurrency prices from CoinGecko API</p>
            <p><strong>✅ Real-time data:</strong> Stock prices from Yahoo Finance API</p>
            <p><strong>✅ Real-time data:</strong> Economic calendar events from curated financial sources</p>
            <p><strong>📊 Purpose:</strong> This data is for informational and educational purposes only</p>
            <p><strong>⏰ Updates:</strong> Prices update every 5 seconds during market hours, economic events refresh every 6 hours</p>
          </div>
          <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">
            Not financial advice. Always verify prices with official sources before making investment decisions.
          </p>
        </div>
      </div>
    </div>
  )
}