import { NextRequest, NextResponse } from 'next/server'
import { updateAllPrices } from '@/lib/financial-data'

export async function POST(request: NextRequest) {
  try {
    // Verify authorization (optional security)
    const authHeader = request.headers.get('authorization')
    const ingestKey = process.env.INGEST_KEY
    
    if (ingestKey && authHeader !== `Bearer ${ingestKey}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    console.log('🔄 Manual price update triggered via API')
    await updateAllPrices()
    
    return NextResponse.json({ 
      success: true, 
      message: 'Prices updated successfully',
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('❌ API price update failed:', error)
    return NextResponse.json(
      { error: 'Price update failed', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Price update endpoint - use POST to trigger updates',
    lastUpdate: new Date().toISOString()
  })
}