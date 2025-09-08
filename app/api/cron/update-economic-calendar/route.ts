import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Verify this is a Vercel Cron request
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      console.log('❌ Unauthorized cron request for economic calendar updates')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    console.log('📅 Vercel Cron: Starting economic calendar updates...')
    const startTime = Date.now()

    // Import the economic calendar updater function
    const { runEconomicCalendarUpdater } = require('@/workers/economicCalendarUpdater')
    
    // Update economic calendar events
    await runEconomicCalendarUpdater()
    
    const duration = Date.now() - startTime
    const successMessage = `✅ Vercel Cron: Economic calendar updates completed in ${duration}ms`
    
    console.log(successMessage)
    
    return NextResponse.json({
      success: true,
      message: 'Economic calendar updates completed successfully',
      duration,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('❌ Vercel Cron: Economic calendar update failed:', error)
    
    return NextResponse.json(
      { 
        error: 'Economic calendar update failed', 
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}

// Also handle POST for manual triggers
export async function POST(request: NextRequest) {
  return GET(request)
}