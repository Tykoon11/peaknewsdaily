"use client"
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'

type Media = { kind: 'image' | 'video'; publicId?: string | null; sourceUrl?: string | null }
type Slide = { slug: string; title: string; media?: Media[]; age?: boolean }

function mediaSrc(m?: Media): string | null {
  if (!m) return null
  if (m.sourceUrl) return m.sourceUrl
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME
  if (!cloud || !m.publicId) return null
  // Use jpg poster even for videos
  const base = m.kind === 'image' ? 'image' : 'video'
  const ext = m.kind === 'image' ? '' : '.jpg'
  return `https://res.cloudinary.com/${cloud}/${base}/upload/${m.publicId}${ext}`
}

export default function HeroCarousel({ slides, intervalMs = 4000 }: { slides: Slide[]; intervalMs?: number }) {
  const items = useMemo(() => slides.filter(Boolean), [slides])
  const [i, setI] = useState(0)
  const timer = useRef<NodeJS.Timeout | null>(null)
  const paused = useRef(false)

  useEffect(() => {
    if (items.length <= 1) return
    function tick() {
      if (!paused.current) setI((v) => (v + 1) % items.length)
    }
    timer.current = setInterval(tick, intervalMs)
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [items.length, intervalMs])

  if (items.length === 0) return null
  return (
    <div className="relative overflow-hidden rounded-lg border hero-card" onMouseEnter={() => { paused.current = true }} onMouseLeave={() => { paused.current = false }}>
      {/* Slides (crossfade) */}
      <div className="relative w-full h-[18rem] md:h-[24rem] lg:h-[28rem]">
        {items.map((s, idx) => {
          const src = mediaSrc(s.media?.[0])
          return (
            <Link
              key={s.slug + idx}
              href={`/post/${s.slug}`}
              className="absolute inset-0 block transition-opacity duration-500 ease-in"
              aria-hidden={idx !== i}
              style={{
                opacity: idx === i ? 1 : 0,
                pointerEvents: idx === i ? 'auto' : 'none',
                zIndex: idx === i ? 1 : 0
              }}
              data-age={s.age ? '1' : undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt={s.title} src={src || 'https://picsum.photos/seed/hero/1200/600'} className="w-full h-full object-cover hero-media" />
              {s.age ? <div className="absolute inset-0 age-blur-overlay pointer-events-none" /> : null}
            </Link>
          )
        })}
      </div>
      {/* Overlay title */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/60 to-transparent z-10">
        <div className="text-white text-lg md:text-2xl font-semibold drop-shadow transition-colors duration-300 ease-in">{items[i].title}</div>
      </div>
      {/* Controls */}
      {items.length > 1 && (
        <>
          <button type="button" aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center z-20" onClick={() => setI((i - 1 + items.length) % items.length)}>‹</button>
          <button type="button" aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center z-20" onClick={() => setI((i + 1) % items.length)}>›</button>
          <div className="absolute bottom-2 inset-x-0 flex items-center justify-center gap-2 z-20">
            {/* Dots */}
            <div className="flex items-center gap-1.5 bg-black/35 rounded-full px-2 py-1 backdrop-blur-sm">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={idx === i}
                  onClick={() => setI(idx)}
                  className="rounded-full border border-white/60 transition-colors duration-300 ease-in"
                  style={{
                    width: 3,
                    height: 3,
                    backgroundColor: idx === i ? 'var(--pn-btn-bg)' : 'rgba(255,255,255,0.45)'
                  }}
                />
              ))}
            </div>
            {/* Numeric indicator */}
            <div className="ml-2 text-[11px] leading-none text-white/90 bg-black/35 rounded-full px-1.5 py-0.5 backdrop-blur-sm">
              {i + 1}/{items.length}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
