#!/bin/bash

# Setup automated updates for PeakNewsDaily
# Run this script to enable live updates every 5 minutes for prices and hourly for news

echo "🚀 Setting up automated live updates for PeakNewsDaily..."

# Check if running on production (Vercel) or development
if [ "$VERCEL" = "1" ]; then
    echo "ℹ️  Detected Vercel environment - using Vercel Cron"
    echo "✅ Automatic cron jobs are configured in vercel.json"
    echo "📄 Check your vercel.json file for cron schedule configuration"
else
    echo "ℹ️  Setting up local development cron jobs..."
    
    # Add cron jobs for local development
    (crontab -l 2>/dev/null; echo "# PeakNewsDaily Live Updates") | crontab -
    (crontab -l 2>/dev/null; echo "*/5 * * * * cd $(pwd) && npm run update:financial >> logs/financial-updates.log 2>&1") | crontab -
    (crontab -l 2>/dev/null; echo "0 */2 * * * curl -X POST 'http://localhost:3001/api/cron/daily-ingest' -H 'Authorization: Bearer secure-cron-key-2024-rss-automation' >> logs/news-updates.log 2>&1") | crontab -
    (crontab -l 2>/dev/null; echo "15 */1 * * * curl -X POST 'http://localhost:3001/api/cron/update-prices' -H 'Authorization: Bearer secure-cron-key-2024-rss-automation' >> logs/price-updates.log 2>&1") | crontab -
    
    echo "✅ Local cron jobs configured:"
    echo "   • Financial data updates: Every 5 minutes"
    echo "   • News RSS feeds: Every 2 hours"  
    echo "   • Price updates: Every hour"
    echo ""
    echo "📋 Current cron schedule:"
    crontab -l | grep -A 10 "PeakNewsDaily"
fi

echo ""
echo "🔧 Manual update commands:"
echo "   • Financial data: npm run update:financial"
echo "   • Prices: npm run update:prices"
echo ""
echo "🌐 Live data endpoints:"
echo "   • Real-time streaming: http://localhost:3001/api/stream?syms=AAPL,BTC-USD,ETH-USD"
echo "   • Latest quotes: http://localhost:3001/api/quotes"
echo "   • Price data: http://localhost:3001/api/prices"
echo ""
echo "✅ Setup complete! Your site now has live updates every 5 minutes."