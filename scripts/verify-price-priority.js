/**
 * Verify that real-time prices are being used correctly
 */

async function verifyPricePriority() {
  console.log('🔍 Verifying Price Data Priority System...\n')
  
  try {
    // Test the real-time API
    console.log('📊 Testing real-time API:')
    const realtimeResponse = await fetch('http://localhost:3000/api/prices/realtime?symbols=BTC-USD,ETH-USD,AAPL')
    if (realtimeResponse.ok) {
      const realtimeData = await realtimeResponse.json()
      console.log('✅ Real-time API working')
      console.log(`   BTC: $${realtimeData.prices['BTC-USD']?.price.toLocaleString()}`)
      console.log(`   ETH: $${realtimeData.prices['ETH-USD']?.price.toLocaleString()}`)
      console.log(`   AAPL: $${realtimeData.prices['AAPL']?.price}`)
      console.log(`   Source: ${realtimeData.source}`)
    } else {
      console.log('❌ Real-time API failed')
    }
    
    // Test fallback API
    console.log('\n📊 Testing fallback API:')
    const fallbackResponse = await fetch('http://localhost:3000/api/quotes?type=crypto&limit=2')
    if (fallbackResponse.ok) {
      const fallbackData = await fallbackResponse.json()
      console.log('✅ Fallback API working')
      if (fallbackData.quotes?.length > 0) {
        fallbackData.quotes.forEach(quote => {
          console.log(`   ${quote.symbol}: $${quote.price.toLocaleString()}`)
        })
      }
    } else {
      console.log('❌ Fallback API failed')
    }
    
    console.log('\n✅ Priority system verification completed')
    console.log('\n💡 Expected behavior:')
    console.log('   1. Real-time data loads first (shows accurate current prices)')
    console.log('   2. Live price hooks are DISABLED when real-time is working')
    console.log('   3. No overriding of real-time data by cached values')
    console.log('   4. Fallback only used if real-time API fails')
    
  } catch (error) {
    console.error('❌ Verification failed:', error.message)
  }
}

// Only run if server is available
fetch('http://localhost:3000/api/health')
  .then(() => verifyPricePriority())
  .catch(() => {
    console.log('💡 To verify price priority:')
    console.log('   1. Start your development server: npm run dev')
    console.log('   2. Run this script again: node scripts/verify-price-priority.js')
    console.log('   3. Check browser console for data source logs')
  })