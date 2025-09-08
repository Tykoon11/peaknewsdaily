import { ImageResponse } from 'next/og'
import { prisma } from '@/lib/prisma'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } })
  const title = post?.title || 'PeakNewsDaily'
  return new ImageResponse(
    (
      <div style={{ fontSize: 56, background: '#111827', color: '#fff', width: '100%', height: '100%', display: 'flex', alignItems: 'center', padding: '48px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 28, opacity: 0.7 }}>PeakNewsDaily</div>
          <div style={{ fontWeight: 700 }}>{title}</div>
        </div>
      </div>
    ),
    { ...size }
  )
}

