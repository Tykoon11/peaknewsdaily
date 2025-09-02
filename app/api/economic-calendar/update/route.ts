/**
 * Economic Calendar Update API
 * Triggers economic calendar data refresh
 */

import { NextRequest, NextResponse } from 'next/server'
import { runEconomicCalendarUpdater } from '@/workers/economicCalendarUpdater'

const CRON_SECRET = process.env.CRON_SECRET || 'secure-cron-key-2024-rss-automation'

/**
 * POST /api/economic-calendar/update - Trigger economic calendar update
 */
export async function POST(request: NextRequest) {
  try {
    // Verify cron secret for security
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    console.log('🔄 Triggering economic calendar update...')
    await runEconomicCalendarUpdater()
    
    return NextResponse.json({
      success: true,
      message: 'Economic calendar updated successfully',
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Economic calendar update API error:', error)
    return NextResponse.json(
      {
        error: 'Failed to update economic calendar',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

/**
 * GET /api/economic-calendar/update - Get update status
 */
export async function GET() {
  return NextResponse.json({
    status: 'Economic calendar updater available',
    timestamp: new Date().toISOString()
  })
}