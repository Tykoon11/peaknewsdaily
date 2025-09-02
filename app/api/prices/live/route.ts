/**
 * Live Price Management API
 * Starts/stops the live price updater and provides status
 */

import { NextRequest, NextResponse } from 'next/server'
import { runLivePriceUpdater, startLivePriceUpdater } from '@/workers/livePriceUpdater'
import { healthCheck } from '@/lib/redis'
import { getActiveConnectionCount } from '@/app/api/stream/route'

const CRON_SECRET = process.env.CRON_SECRET || 'secure-cron-key-2024-rss-automation'

/**
 * POST /api/prices/live - Trigger immediate price update or start daemon
 */
export async function POST(request: NextRequest) {
  try {
    // Verify cron secret for security
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json().catch(() => ({}))
    const { action = 'update' } = body

    switch (action) {
      case 'update':
        // Trigger single update cycle
        console.log('🔄 Triggering live price update...')
        await runLivePriceUpdater()
        
        return NextResponse.json({
          success: true,
          message: 'Live price update completed',
          timestamp: new Date().toISOString()
        })

      case 'start':
        // Start the daemon (for server environments)
        console.log('🚀 Starting live price daemon...')
        startLivePriceUpdater()
        
        return NextResponse.json({
          success: true,
          message: 'Live price daemon started',
          timestamp: new Date().toISOString()
        })

      default:
        return NextResponse.json(
          { error: `Unknown action: ${action}. Use 'update' or 'start'` },
          { status: 400 }
        )
    }

  } catch (error) {
    console.error('Live price API error:', error)
    return NextResponse.json(
      {
        error: 'Failed to process live price request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

/**
 * GET /api/prices/live - Get live price system status
 */
export async function GET(request: NextRequest) {
  try {
    // Check Redis health
    const redisHealthy = await healthCheck()
    
    // Get active SSE connections
    const activeConnections = getActiveConnectionCount()
    
    // Basic system status
    const status = {
      healthy: redisHealthy,
      redis: redisHealthy ? 'connected' : 'disconnected',
      activeConnections,
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    }

    return NextResponse.json({
      success: true,
      status,
    })

  } catch (error) {
    console.error('Live price status error:', error)
    return NextResponse.json(
      {
        error: 'Failed to get live price status',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}