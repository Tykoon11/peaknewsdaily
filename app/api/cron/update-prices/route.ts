import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Verify this is a Vercel Cron request
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      console.log('❌ Unauthorized cron request for price updates')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    console.log('🔄 Vercel Cron: Starting price updates...')
    const startTime = Date.now()

    // Import the price update function
    const { updateAllPrices } = require('@/lib/financial-data')
    
    // Update all stock and crypto prices
    await updateAllPrices()
    
    const duration = Date.now() - startTime
    const successMessage = `✅ Vercel Cron: Price updates completed in ${duration}ms`
    
    console.log(successMessage)
    
    return NextResponse.json({
      success: true,
      message: 'Price updates completed successfully',
      duration,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('❌ Vercel Cron: Price update failed:', error)
    
    return NextResponse.json(
      { 
        error: 'Price update failed', 
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