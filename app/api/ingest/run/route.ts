import { NextRequest, NextResponse } from 'next/server';
import { runIngest } from '@/ingest/run';

export async function POST(request: NextRequest) {
  try {
    const { key } = await request.json();
    
    if (!key || key !== process.env.INGEST_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const results = await runIngest();
    return NextResponse.json(results);
  } catch (error) {
    console.error('Ingest API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}