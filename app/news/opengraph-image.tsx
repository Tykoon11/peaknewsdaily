import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Live Market News - PeakNewsDaily'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: '"Inter", sans-serif',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 32,
          }}
        >
          <h1
            style={{
              fontSize: 80,
              fontWeight: 900,
              margin: 0,
              textAlign: 'center',
            }}
          >
            PeakNewsDaily
          </h1>
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.2,
            opacity: 0.9,
          }}
        >
          Live Market News
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            textAlign: 'center',
            maxWidth: 600,
            marginTop: 16,
            opacity: 0.8,
          }}
        >
          Real-time updates on trading, investing, and cryptocurrency markets
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}