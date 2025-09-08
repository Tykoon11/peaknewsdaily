# 🚀 Vercel Deployment Guide - Real-Time Financial Data

Complete guide for deploying PeakNewsDaily with real-time financial data updates on Vercel.

## 📋 Prerequisites

### Required Vercel Plan
- **Vercel Pro Plan** ($20/month/user) - Required for Cron Functions
- Cron Functions are NOT available on Hobby plan

### Required Environment Variables

Set these in your Vercel dashboard:

```bash
# Database & Cache
DATABASE_URL="your-postgresql-connection-string"
REDIS_URL="your-redis-connection-string"

# Authentication  
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="https://your-domain.vercel.app"

# Essential APIs
RESEND_API_KEY="your-resend-api-key"
CLOUDINARY_API_KEY="your-cloudinary-api-key"
CLOUDINARY_API_SECRET="your-cloudinary-api-secret"

# Content Management
INGEST_KEY="secure-ingest-key-for-rss-feeds-2024"

# CRITICAL: Vercel Cron Authentication
CRON_SECRET="your-secure-cron-secret-key"

# Optional: Financial APIs (for higher rate limits)
FINNHUB_API_KEY="your-finnhub-key"
ALPHA_VANTAGE_API_KEY="your-alpha-vantage-key"
RAPIDAPI_KEY="your-rapidapi-key"
```

## 🔧 Vercel Configuration

The `vercel.json` file is already configured with these cron jobs:

```json
{
  "crons": [
    {
      "path": "/api/cron/update-prices",
      "schedule": "*/5 * * * *"
    },
    {
      "path": "/api/cron/update-economic-calendar", 
      "schedule": "0 */6 * * *"
    },
    {
      "path": "/api/cron/daily-ingest",
      "schedule": "0 */6 * * *"  
    },
    {
      "path": "/api/cron/financial-ingest",
      "schedule": "*/15 * * * *"
    }
  ]
}
```

### Cron Schedule Breakdown:

- **Price Updates**: Every 5 minutes (*/5 * * * *)
- **Economic Calendar**: Every 6 hours (0 */6 * * *)  
- **Daily Content Ingest**: Every 3 hours (0 */3 * * *)
- **Financial Data Ingest**: Every 15 minutes (*/15 * * * *)

## 🛠️ Deployment Steps

### 1. Set Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

```bash
# Generate a secure CRON_SECRET
CRON_SECRET=$(openssl rand -hex 32)
```

**⚠️ CRITICAL**: Set `CRON_SECRET` - without this, cron functions won't authenticate properly.

### 2. Database Setup

Ensure your PostgreSQL database is accessible from Vercel:

```bash
# Test connection
npx prisma db pull
npx prisma generate
npx prisma db push
```

### 3. Redis Setup

Use a cloud Redis provider:
- **Upstash Redis** (recommended for Vercel)
- **Redis Labs**
- **AWS ElastiCache**

### 4. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📊 Real-Time Data Sources

### Stock Data APIs (Free Tiers)
1. **Yahoo Finance** (Primary)
   - No API key needed
   - ~100 requests/minute
   - Most reliable free option

2. **Finnhub** (Fallback)  
   - Free: 60 calls/minute
   - Requires API key for higher limits

### Cryptocurrency Data
1. **CoinGecko API** (Primary)
   - No API key needed
   - Generous free limits
   - 60+ cryptocurrencies supported

### Economic Calendar Data
1. **Financial Modeling Prep** (Primary)
   - Free tier available
   - Falls back to hardcoded events if API fails

## 🔍 Monitoring & Testing

### Test Cron Endpoints

```bash
# Test price updates (requires CRON_SECRET)
curl -X POST https://your-domain.vercel.app/api/cron/update-prices \
  -H "Authorization: Bearer your-cron-secret"

# Test economic calendar
curl -X POST https://your-domain.vercel.app/api/cron/update-economic-calendar \
  -H "Authorization: Bearer your-cron-secret"

# Test financial ingest
curl -X POST https://your-domain.vercel.app/api/cron/financial-ingest \
  -H "Authorization: Bearer your-cron-secret"
```

### Monitor Cron Jobs

In Vercel Dashboard → Functions → Cron:
- View execution logs
- Monitor success/failure rates  
- Check execution times

### Test Real-Time APIs

```bash
# Test individual stock price
curl https://your-domain.vercel.app/api/prices/AAPL

# Test crypto price
curl https://your-domain.vercel.app/api/prices/BTC-USD

# Manual price update trigger
curl -X POST https://your-domain.vercel.app/api/prices/update \
  -H "Authorization: Bearer your-ingest-key"
```

## 📈 Data Flow Architecture

```
Vercel Cron Functions (Every 5min) 
    ↓
Real-Time APIs (Yahoo Finance, CoinGecko)
    ↓  
PostgreSQL Database (Asset prices)
    ↓
Redis Cache (Fast lookups)
    ↓
Next.js API Routes (/api/prices/[symbol])
    ↓
React Components (useRealTimePrice hook)
```

## 🚨 Troubleshooting

### Cron Jobs Not Running

1. **Check Vercel Plan**: Cron functions require Pro plan
2. **Verify CRON_SECRET**: Must be set in environment variables
3. **Check Logs**: Vercel Dashboard → Functions → View logs

### API Rate Limits

1. **Yahoo Finance**: 
   - Use delays between requests
   - Falls back to cached data gracefully

2. **CoinGecko**:
   - Free tier is generous
   - Consider API key for higher limits

### Database Connection Issues

1. **Connection String**: Verify DATABASE_URL format
2. **SSL Settings**: Most cloud DBs require SSL
3. **IP Allowlist**: Ensure Vercel IPs are whitelisted

### Redis Connection Issues

1. **Connection String**: Verify REDIS_URL format  
2. **SSL/TLS**: Enable if required by provider
3. **Memory Limits**: Monitor usage in provider dashboard

## 🔐 Security Considerations

### Environment Variables
- Use strong, unique secrets
- Never commit secrets to git
- Rotate keys regularly

### API Authentication  
- CRON_SECRET protects cron endpoints
- INGEST_KEY protects manual triggers
- All financial APIs use HTTPS

### Rate Limiting
- Built-in rate limiting for API calls
- Graceful fallbacks when limits hit
- Caching to reduce API dependency

## 📊 Performance Optimization

### Caching Strategy
- **Redis**: Fast price lookups (5min TTL)
- **Database**: Persistent storage
- **API Responses**: Cached at edge

### API Efficiency
- **Batch Processing**: Multiple stocks per batch
- **Intelligent Delays**: Respect rate limits
- **Fallback APIs**: Multiple data sources

### Database Optimization
- **Indexes**: On symbol, timestamp fields
- **Cleanup**: Old quotes cleanup (optional)
- **Connection Pooling**: Built into Prisma

## 🆘 Emergency Procedures

### If Cron Jobs Stop Working

1. **Manual Trigger**: Use API endpoints directly
2. **Check Logs**: Vercel function logs
3. **Fallback Data**: System uses cached data gracefully

### If APIs Go Down

1. **Multiple Sources**: Yahoo Finance → Finnhub fallback
2. **Cached Data**: Redis provides last-known prices
3. **Graceful Degradation**: UI shows stale data with timestamps

### Database Issues

1. **Connection Retry**: Built into Prisma
2. **Read Replicas**: Consider for high load
3. **Backup Strategy**: Regular DB backups

## 📞 Support

For deployment issues:

1. **Vercel Docs**: https://vercel.com/docs/cron-jobs
2. **Financial API Docs**: Check individual provider docs
3. **Database Provider**: Your PostgreSQL provider support

---

**✅ Deployment Checklist:**

- [ ] Vercel Pro plan activated
- [ ] All environment variables set
- [ ] CRON_SECRET generated and set
- [ ] Database accessible from Vercel
- [ ] Redis connection working
- [ ] Test cron endpoints respond
- [ ] Monitor initial cron executions
- [ ] Verify real-time data updating

**🎯 Expected Results:**

- Stock prices update every 5 minutes
- Crypto prices update every 5 minutes  
- Economic calendar updates every 6 hours
- All data flows to frontend in real-time
- System handles API failures gracefully