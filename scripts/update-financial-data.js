#!/usr/bin/env node

const CRON_SECRET = process.env.CRON_SECRET || 'secure-cron-key-2024-rss-automation'

async function updateFinancialData() {
  try {
    console.log('🔄 Triggering financial data update...')
    
    const baseUrl = 'http://localhost:3001' // Use the current dev server port
    const response = await fetch(`${baseUrl}/api/cron/financial-ingest`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CRON_SECRET}`,
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${await response.text()}`)
    }

    const result = await response.json()
    console.log('✅ Financial data updated successfully!')
    console.log(`📊 Stats:`)
    console.log(`  • Stocks processed: ${result.stats.stocksProcessed}`)
    console.log(`  • Cryptos processed: ${result.stats.cryptosProcessed}`)
    console.log(`  • Economic events: ${result.stats.eventsProcessed}`)
    console.log(`  • Timestamp: ${result.stats.timestamp}`)
    
    console.log('\n🌐 You can now visit http://localhost:3001 to see updated market data!')

  } catch (error) {
    console.error('❌ Failed to update financial data:', error.message)
    process.exit(1)
  }
}

updateFinancialData()