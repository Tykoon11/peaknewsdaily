import { NextRequest, NextResponse } from 'next/server'
import { runIngest } from '@/ingest/run'

export async function POST(request: NextRequest) {
  return GET(request)
}

export async function GET(request: NextRequest) {
  try {
    // Verify the request is from Vercel Cron
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    console.log('🕒 Starting scheduled daily RSS ingest...')
    const results = await runIngest()
    
    console.log('✅ Scheduled ingest completed:', results)
    
    return NextResponse.json({
      success: true,
      message: 'Daily RSS ingest completed successfully',
      results,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('❌ Scheduled ingest failed:', error)
    return NextResponse.json(
      { 
        error: 'Scheduled ingest failed', 
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}