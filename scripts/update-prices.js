#!/usr/bin/env node

/**
 * Real-time Price Update Script
 * Run this script every 5 minutes via cron for live updates
 */

const { updateAllPrices } = require('../lib/financial-data');

async function main() {
  const startTime = Date.now();
  console.log(`\n🚀 Starting price update at ${new Date().toISOString()}`);
  
  try {
    await updateAllPrices();
    
    const duration = Date.now() - startTime;
    console.log(`✅ Price update completed in ${duration}ms`);
    console.log('📊 Next update in 5 minutes\n');
    
  } catch (error) {
    console.error('❌ Price update failed:', error);
    process.exit(1);
  }
}

// Run immediately if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = main;