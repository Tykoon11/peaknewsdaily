const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const etfContent = `
<article class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
  <div class="container mx-auto px-4 py-12 max-w-6xl">
    <header class="text-center mb-12">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 text-white">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <path d="M9 9h6v6H9z"></path>
        </svg>
      </div>
      <h1 class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6">
        ETF vs Mutual Funds 2025: Complete Comparison for Smart Investors
      </h1>
      <p class="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto">
        Discover the key differences between ETFs and mutual funds in 2025, including costs, tax efficiency, flexibility, and performance to make informed investment decisions.
      </p>
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <span class="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
            <path d="M9 9h6v6H9z"></path>
          </svg>
          ETF Analysis
        </span>
        <span class="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
          Cost Comparison
        </span>
        <span class="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2">
            <path d="M16 7h6v6"></path>
            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
          </svg>
          Tax Efficiency
        </span>
        <span class="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-sm font-medium rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2">
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
          Investment Strategy
        </span>
      </div>
    </header>

    <section class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
      <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 mr-3 text-yellow-600">
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
        </svg>
        Understanding ETFs vs Mutual Funds: The Complete 2025 Guide
      </h2>
      
      <p class="text-slate-600 dark:text-slate-300 mb-8">Both Exchange-Traded Funds (ETFs) and mutual funds offer investors access to diversified portfolios, but they operate differently and serve different investment needs. In 2025, understanding these differences is crucial for building an effective investment strategy.</p>
      
      <div class="grid lg:grid-cols-2 gap-8">
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <h3 class="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">What Are ETFs?</h3>
          <p class="text-slate-600 dark:text-slate-300 mb-4">Exchange-Traded Funds (ETFs) are investment funds that trade on stock exchanges like individual stocks. They typically track an index, commodity, bonds, or a basket of assets, offering instant diversification with the flexibility of stock trading.</p>
          
          <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-3">Key ETF Characteristics:</h4>
          <ul class="space-y-2">
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              Trade throughout market hours like stocks
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              Generally lower expense ratios
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              More tax-efficient structure
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              Transparent holdings (updated daily)
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              No minimum investment requirement
            </li>
          </ul>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
          <h3 class="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">What Are Mutual Funds?</h3>
          <p class="text-slate-600 dark:text-slate-300 mb-4">Mutual funds are investment vehicles that pool money from many investors to purchase a diversified portfolio of securities. They're managed by professional portfolio managers and priced once daily after markets close.</p>
          
          <h4 class="font-semibold text-green-800 dark:text-green-200 mb-3">Key Mutual Fund Characteristics:</h4>
          <ul class="space-y-2">
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              Priced once daily at market close (NAV)
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              Active or passive management options
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              Automatic dividend reinvestment
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              Professional portfolio management
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              Often require minimum initial investment
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
      <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 mr-3 text-blue-600">
          <path d="M16 7h6v6"></path>
          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
        </svg>
        Detailed Comparison: ETFs vs Mutual Funds in 2025
      </h2>
      
      <div class="overflow-x-auto mb-8">
        <table class="w-full border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden">
          <thead>
            <tr class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
              <th class="text-left p-4 font-semibold text-slate-900 dark:text-white">Feature</th>
              <th class="text-left p-4 font-semibold text-blue-800 dark:text-blue-200">ETFs</th>
              <th class="text-left p-4 font-semibold text-green-800 dark:text-green-200">Mutual Funds</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-slate-200 dark:border-slate-700">
              <td class="p-4 font-medium text-slate-900 dark:text-white">Trading</td>
              <td class="p-4 text-slate-700 dark:text-slate-300">Real-time during market hours</td>
              <td class="p-4 text-slate-700 dark:text-slate-300">Once daily at market close</td>
            </tr>
            <tr class="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
              <td class="p-4 font-medium text-slate-900 dark:text-white">Expense Ratios</td>
              <td class="p-4 text-slate-700 dark:text-slate-300">Average: 0.20% (Index ETFs: 0.05-0.20%)</td>
              <td class="p-4 text-slate-700 dark:text-slate-300">Average: 0.50-1.00% (Index funds: 0.10-0.30%)</td>
            </tr>
            <tr class="border-b border-slate-200 dark:border-slate-700">
              <td class="p-4 font-medium text-slate-900 dark:text-white">Minimum Investment</td>
              <td class="p-4 text-slate-700 dark:text-slate-300">Price of one share (typically $50-$300)</td>
              <td class="p-4 text-slate-700 dark:text-slate-300">Often $1,000-$3,000 minimum</td>
            </tr>
            <tr class="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
              <td class="p-4 font-medium text-slate-900 dark:text-white">Tax Efficiency</td>
              <td class="p-4 text-slate-700 dark:text-slate-300">High (in-kind redemptions reduce capital gains)</td>
              <td class="p-4 text-slate-700 dark:text-slate-300">Lower (forced to distribute capital gains)</td>
            </tr>
            <tr class="border-b border-slate-200 dark:border-slate-700">
              <td class="p-4 font-medium text-slate-900 dark:text-white">Dividend Reinvestment</td>
              <td class="p-4 text-slate-700 dark:text-slate-300">Manual or through brokerage programs</td>
              <td class="p-4 text-slate-700 dark:text-slate-300">Automatic reinvestment available</td>
            </tr>
            <tr class="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
              <td class="p-4 font-medium text-slate-900 dark:text-white">Transparency</td>
              <td class="p-4 text-slate-700 dark:text-slate-300">Holdings disclosed daily</td>
              <td class="p-4 text-slate-700 dark:text-slate-300">Holdings disclosed quarterly</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
      <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 mr-3 text-green-600">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 2"></path>
        </svg>
        Cost Analysis: The True Expense Breakdown
      </h2>
      
      <div class="grid lg:grid-cols-2 gap-8">
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <h3 class="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">ETF Cost Structure</h3>
          
          <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-3">Direct Costs:</h4>
          <ul class="space-y-2 mb-4">
            <li class="flex justify-between text-slate-700 dark:text-slate-300 text-sm">
              <span>Expense Ratio (Annual):</span>
              <span class="font-medium">0.05% - 0.75%</span>
            </li>
            <li class="flex justify-between text-slate-700 dark:text-slate-300 text-sm">
              <span>Trading Commissions:</span>
              <span class="font-medium">$0 (most brokers)</span>
            </li>
            <li class="flex justify-between text-slate-700 dark:text-slate-300 text-sm">
              <span>Bid-Ask Spread:</span>
              <span class="font-medium">0.01% - 0.10%</span>
            </li>
          </ul>
          
          <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-3">Example: $10,000 Investment</h4>
          <div class="bg-white dark:bg-slate-700 rounded-lg p-4">
            <p class="text-slate-600 dark:text-slate-300 text-sm mb-2"><strong>Popular Index ETF (0.08% expense ratio):</strong></p>
            <ul class="space-y-1 text-slate-700 dark:text-slate-300 text-sm">
              <li>Year 1 Cost: $8</li>
              <li>10-Year Cost: $95</li>
              <li>30-Year Cost: $445</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
          <h3 class="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">Mutual Fund Cost Structure</h3>
          
          <h4 class="font-semibold text-green-800 dark:text-green-200 mb-3">Direct Costs:</h4>
          <ul class="space-y-2 mb-4">
            <li class="flex justify-between text-slate-700 dark:text-slate-300 text-sm">
              <span>Expense Ratio (Annual):</span>
              <span class="font-medium">0.10% - 2.00%</span>
            </li>
            <li class="flex justify-between text-slate-700 dark:text-slate-300 text-sm">
              <span>Load Fees (if applicable):</span>
              <span class="font-medium">0% - 5.75%</span>
            </li>
            <li class="flex justify-between text-slate-700 dark:text-slate-300 text-sm">
              <span>12b-1 Fees:</span>
              <span class="font-medium">0% - 1.00%</span>
            </li>
          </ul>
          
          <h4 class="font-semibold text-green-800 dark:text-green-200 mb-3">Example: $10,000 Investment</h4>
          <div class="bg-white dark:bg-slate-700 rounded-lg p-4">
            <p class="text-slate-600 dark:text-slate-300 text-sm mb-2"><strong>Index Mutual Fund (0.15% expense ratio):</strong></p>
            <ul class="space-y-1 text-slate-700 dark:text-slate-300 text-sm">
              <li>Year 1 Cost: $15</li>
              <li>10-Year Cost: $178</li>
              <li>30-Year Cost: $834</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="mt-8 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
        <h3 class="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-3">Cost Impact Over Time</h3>
        <p class="text-slate-600 dark:text-slate-300 mb-4">The power of compound interest works against you when it comes to fees. A 0.50% annual fee difference can cost tens of thousands of dollars over a 30-year investment period.</p>
        
        <div class="grid md:grid-cols-3 gap-4">
          <div class="text-center p-4 bg-white dark:bg-slate-700 rounded-lg">
            <div class="text-2xl font-bold text-slate-900 dark:text-white">$2,100</div>
            <div class="text-sm text-slate-600 dark:text-slate-300">Difference after 10 years</div>
          </div>
          <div class="text-center p-4 bg-white dark:bg-slate-700 rounded-lg">
            <div class="text-2xl font-bold text-slate-900 dark:text-white">$7,800</div>
            <div class="text-sm text-slate-600 dark:text-slate-300">Difference after 20 years</div>
          </div>
          <div class="text-center p-4 bg-white dark:bg-slate-700 rounded-lg">
            <div class="text-2xl font-bold text-slate-900 dark:text-white">$17,500</div>
            <div class="text-sm text-slate-600 dark:text-slate-300">Difference after 30 years</div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
      <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 mr-3 text-purple-600">
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
        </svg>
        Tax Efficiency: A Critical Difference
      </h2>
      
      <div class="grid lg:grid-cols-2 gap-8">
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <h3 class="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">ETF Tax Advantages</h3>
          
          <p class="text-slate-600 dark:text-slate-300 mb-4">ETFs use an "in-kind" redemption process that allows them to shed low-cost basis stocks without triggering taxable events for remaining shareholders. This structural advantage makes ETFs significantly more tax-efficient than mutual funds.</p>
          
          <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-3">Tax Benefits:</h4>
          <ul class="space-y-2">
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <strong>Lower capital gains distributions:</strong> ETFs distribute 95% fewer capital gains than actively managed mutual funds
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <strong>Tax-loss harvesting opportunities:</strong> Can sell specific shares for tax losses while maintaining market exposure
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <strong>Control over timing:</strong> You decide when to realize gains or losses
            </li>
          </ul>
          
          <div class="mt-4 p-4 bg-white dark:bg-slate-700 rounded-lg">
            <p class="text-slate-600 dark:text-slate-300 text-sm"><strong>Example:</strong> In 2023, the average actively managed mutual fund distributed 8.2% of its value as taxable capital gains, while the average ETF distributed only 0.3%.</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
          <h3 class="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">Mutual Fund Tax Considerations</h3>
          
          <p class="text-slate-600 dark:text-slate-300 mb-4">Mutual funds must distribute capital gains to shareholders annually when the fund manager sells securities at a profit. This can create tax obligations even if you haven't sold any shares and the fund has lost value during the year.</p>
          
          <h4 class="font-semibold text-green-800 dark:text-green-200 mb-3">Tax Implications:</h4>
          <ul class="space-y-2">
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-orange-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
              <strong>Mandatory capital gains distributions:</strong> Taxable even if you reinvest dividends
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-orange-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
              <strong>Higher turnover impact:</strong> Active management increases taxable events
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-orange-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
              <strong>Timing risk:</strong> Capital gains distributions typically occur in December
            </li>
          </ul>
          
          <div class="mt-4 p-4 bg-white dark:bg-slate-700 rounded-lg">
            <p class="text-slate-600 dark:text-slate-300 text-sm"><strong>Tax Impact:</strong> The tax drag from mutual funds can reduce returns by 0.5-2.0% annually in taxable accounts, depending on your tax bracket and the fund's distribution policy.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
      <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 mr-3 text-red-600">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
        Which Should You Choose? Decision Framework for 2025
      </h2>
      
      <div class="grid lg:grid-cols-2 gap-8">
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <h3 class="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">Choose ETFs If You:</h3>
          <ul class="space-y-3">
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <strong>Invest in taxable accounts</strong> and want to minimize tax drag
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <strong>Prioritize low costs</strong> and want the lowest possible expense ratios
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <strong>Want trading flexibility</strong> and may need to buy/sell during market hours
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <strong>Have small amounts to invest</strong> (no minimum investment requirements)
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <strong>Value transparency</strong> and want to see exact holdings daily
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <strong>Use sophisticated strategies</strong> like tax-loss harvesting
            </li>
          </ul>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
          <h3 class="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">Choose Mutual Funds If You:</h3>
          <ul class="space-y-3">
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <strong>Invest primarily in tax-advantaged accounts</strong> (401k, IRA) where tax efficiency matters less
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <strong>Want automatic investing</strong> with dollar-cost averaging and automatic dividend reinvestment
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <strong>Prefer set-and-forget investing</strong> without monitoring market timing
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <strong>Want professional active management</strong> and believe managers can outperform the market
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <strong>Have access to institutional share classes</strong> with low fees through employer plans
            </li>
            <li class="flex items-start text-slate-700 dark:text-slate-300 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <strong>Need fractional share investing</strong> with exact dollar amounts
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8">
      <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 mr-3 text-green-600">
          <path d="M16 7h6v6"></path>
          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
        </svg>
        2025 Recommendations: Best of Both Worlds
      </h2>
      
      <div class="grid lg:grid-cols-3 gap-6">
        <div class="text-center p-6">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-white">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
              <path d="M9 9h6v6H9z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-2">Taxable Accounts</h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm mb-4">Prioritize ETFs for maximum tax efficiency and cost savings in taxable investment accounts.</p>
          <div class="text-sm text-slate-700 dark:text-slate-300">
            <strong>Recommended:</strong> Low-cost index ETFs like VTI, VTIAX, BND
          </div>
        </div>
        
        <div class="text-center p-6">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-white">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-2">Retirement Accounts</h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm mb-4">Either option works well in 401(k)s and IRAs. Choose based on available options and fees.</p>
          <div class="text-sm text-slate-700 dark:text-slate-300">
            <strong>Approach:</strong> Compare expense ratios and use the lowest-cost option available
          </div>
        </div>
        
        <div class="text-center p-6">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-white">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="m2 17 10 5 10-5"></path>
              <path d="m2 12 10 5 10-5"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-2">Hybrid Approach</h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm mb-4">Use both strategically: ETFs for core holdings, mutual funds for specialized strategies or automatic investing.</p>
          <div class="text-sm text-slate-700 dark:text-slate-300">
            <strong>Strategy:</strong> 70% ETFs for core positions, 30% mutual funds for active strategies
          </div>
        </div>
      </div>

      <div class="mt-8 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
        <h3 class="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-3">Bottom Line for 2025</h3>
        <p class="text-slate-600 dark:text-slate-300">For most investors, ETFs offer superior cost efficiency and tax advantages. However, the "best" choice depends on your specific situation, account types, investment amounts, and preferences for automation vs. control. The most important factor is choosing low-cost, diversified funds regardless of structure and staying invested for the long term.</p>
      </div>
    </section>
  </div>
</article>`;

async function restoreETFContent() {
  console.log('🔧 Restoring ETF vs Mutual Funds with full content + welcome page styling...');
  
  try {
    await prisma.post.update({
      where: { id: 'cmkh4d4dr000441sh5gh3quse' },
      data: { content: etfContent }
    });
    
    console.log('✅ Successfully restored ETF vs Mutual Funds with comprehensive content!');
    
  } catch (error) {
    console.error('❌ Error restoring ETF guide:', error.message);
  }
}

restoreETFContent()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });