"use client"
import Link from 'next/link'
import { useRef } from 'react'

type Media = {
  kind: 'image' | 'video'
  publicId: string
}

export default function HeroCard({
  slug,
  title,
  description,
  timestamp,
  media,
  cloudName
}: {
  slug: string
  title: string
  description?: string | null
  timestamp: string
  media?: Media[]
  cloudName?: string
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const image = media?.find((m) => m.kind === 'image')
  const video = media?.find((m) => m.kind === 'video')
  return (
    <Link href={`/post/${slug}`} className="block mb-8 rounded-lg border hover:shadow overflow-hidden hero-card">
      {cloudName && (image || video) ? (
        <div className="relative w-full h-56 bg-black">
          {video ? (
            <video
              ref={videoRef}
              className="w-full h-56 object-cover"
              muted
              playsInline
              preload="metadata"
              onMouseEnter={() => videoRef.current?.play().catch(() => {})}
              onMouseLeave={() => {
                if (!videoRef.current) return
                videoRef.current.pause()
                try {
                  videoRef.current.currentTime = 0
                } catch {}
              }}
              poster={image ? `https://res.cloudinary.com/${cloudName}/image/upload/${image.publicId}.jpg` : undefined}
            >
              <source src={`https://res.cloudinary.com/${cloudName}/video/upload/${video.publicId}.mp4`} type="video/mp4" />
            </video>
          ) : image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt={title}
              className="w-full h-56 object-cover"
              src={`https://res.cloudinary.com/${cloudName}/image/upload/${image.publicId}.jpg`}
            />
          ) : null}
        </div>
      ) : null}
      <div className="p-6 hero-card-body">
        <div className="text-xs uppercase text-gray-500 mb-2">Featured</div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        {description ? <p className="text-gray-600 line-clamp-3">{description}</p> : null}
        <div className="mt-2 text-xs text-gray-500">{timestamp}</div>
      </div>
    </Link>
  )
}
