#!/usr/bin/env node

/**
 * Price Update Scheduler
 * Runs price updates every 5 minutes during market hours
 * Run this with: node scripts/price-scheduler.js
 */

const { updateAllPrices } = require('../lib/financial-data');

let isRunning = false;
let updateInterval;

async function startScheduler() {
  console.log('🚀 Starting price update scheduler...');
  console.log('📊 Updates will run every 5 minutes');
  console.log('⏹️  Press Ctrl+C to stop\n');
  
  // Run immediately
  await runUpdate();
  
  // Then run every 5 minutes (300,000ms)
  updateInterval = setInterval(async () => {
    await runUpdate();
  }, 300000);
}

async function runUpdate() {
  if (isRunning) {
    console.log('⏳ Previous update still running, skipping...');
    return;
  }
  
  isRunning = true;
  const startTime = Date.now();
  
  try {
    console.log(`\n🔄 Starting price update at ${new Date().toISOString()}`);
    await updateAllPrices();
    
    const duration = Date.now() - startTime;
    console.log(`✅ Update completed in ${duration}ms`);
    console.log(`⏰ Next update at ${new Date(Date.now() + 300000).toISOString()}`);
    
  } catch (error) {
    console.error('❌ Update failed:', error.message);
  } finally {
    isRunning = false;
  }
}

function stopScheduler() {
  console.log('\n🛑 Stopping price update scheduler...');
  
  if (updateInterval) {
    clearInterval(updateInterval);
    updateInterval = null;
  }
  
  console.log('✅ Scheduler stopped');
  process.exit(0);
}

// Handle graceful shutdown
process.on('SIGINT', stopScheduler);
process.on('SIGTERM', stopScheduler);

// Start the scheduler
if (require.main === module) {
  startScheduler().catch(console.error);
}