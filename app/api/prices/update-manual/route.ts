import { NextRequest, NextResponse } from 'next/server'

/**
 * Manual price update endpoint for testing (no auth required in dev)
 */
export async function POST(_request: NextRequest) {
  try {
    console.log('🔄 Manual price update triggered...')
    const startTime = Date.now()

    // Import the price update function
    const { updateAllPrices } = await import('@/lib/financial-data')
    
    // Update all stock and crypto prices
    await updateAllPrices()
    
    const duration = Date.now() - startTime
    const successMessage = `✅ Manual price update completed in ${duration}ms`
    
    console.log(successMessage)
    
    return NextResponse.json({
      success: true,
      message: 'Price updates completed successfully',
      duration,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('❌ Manual price update failed:', error)
    
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