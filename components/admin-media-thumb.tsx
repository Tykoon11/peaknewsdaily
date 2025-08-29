"use client"
import React from 'react'

export default function AdminMediaThumb({ kind, publicId, cloudName }: { kind: 'image' | 'video'; publicId: string; cloudName?: string }) {
  const base = `https://res.cloudinary.com/${cloudName || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME}`
  const src = `${base}/${kind === 'image' ? 'image' : 'video'}/upload/${publicId}${kind === 'image' ? '' : '.jpg'}`
  const [hidden, setHidden] = React.useState(false)
  if (hidden) return null
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt="media" className="w-full rounded" src={src} onError={() => setHidden(true)} />
}

