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

export default function HeroCarousel({ slides, intervalMs = 5000 }: { slides: Slide[]; intervalMs?: number }) {
  const items = useMemo(() => slides.filter(Boolean), [slides])
  const [i, setI] = useState(0)
  const timer = useRef<NodeJS.Timeout | null>(null)
  const paused = useRef(false)

  useEffect(() => {
    if (items.length <= 1) return undefined
    function tick() {
      if (!paused.current) setI((v) => (v + 1) % items.length)
    }
    timer.current = setInterval(tick, intervalMs)
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [items.length, intervalMs])

  if (items.length === 0) return null
  return (
    <div className="relative overflow-hidden rounded-3xl border hero-card shadow-2xl" onMouseEnter={() => { paused.current = true }} onMouseLeave={() => { paused.current = false }}>
      {/* Slides (crossfade with enhanced transitions) */}
      <div className="relative w-full h-[16rem] sm:h-[20rem] md:h-[24rem] lg:h-[32rem] xl:h-[36rem] 2xl:h-[40rem]">
        {items.map((s, idx) => {
          const src = mediaSrc(s.media?.[0])
          return (
            <Link
              key={s.slug + idx}
              href={`/post/${s.slug}`}
              className="absolute inset-0 block transition-all duration-1000 ease-in-out hover:scale-105"
              aria-hidden={idx !== i}
              style={{
                opacity: idx === i ? 1 : 0,
                pointerEvents: idx === i ? 'auto' : 'none',
                zIndex: idx === i ? 2 : 0,
                transform: idx === i ? 'scale(1)' : 'scale(1.1)',
                filter: idx === i ? 'brightness(1)' : 'brightness(0.8)'
              }}
              data-age={s.age ? '1' : undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                alt={s.title} 
                src={src || 'https://picsum.photos/seed/hero/1400/800'} 
                className="w-full h-full object-cover hero-media transition-all duration-1000 ease-in-out" 
                style={{
                  transform: idx === i ? 'scale(1)' : 'scale(1.05)'
                }}
              />
              {s.age ? <div className="absolute inset-0 age-blur-overlay pointer-events-none" /> : null}
              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              {/* Subtle animation overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse opacity-20" />
            </Link>
          )
        })}
      </div>
      {/* Enhanced title overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 md:p-8 z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-3">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Featured
          </div>
          <h2 className="text-white text-xl md:text-3xl font-bold drop-shadow-lg leading-tight transition-all duration-300 ease-in mb-2">
            {items[i].title}
          </h2>
          <div className="flex items-center gap-4 text-white/80 text-sm">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Just now
            </span>
          </div>
        </div>
      </div>
      {/* Enhanced Controls */}
      {items.length > 1 && (
        <>
          <button 
            type="button" 
            aria-label="Previous" 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center z-20 transition-all duration-200 hover:scale-110" 
            onClick={() => setI((i - 1 + items.length) % items.length)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            type="button" 
            aria-label="Next" 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full w-12 h-12 flex items-center justify-center z-20 transition-all duration-200 hover:scale-110" 
            onClick={() => setI((i + 1) % items.length)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-4 right-4 flex items-center gap-3 z-20">
            {/* Dots */}
            <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-2 backdrop-blur-sm">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={idx === i}
                  onClick={() => setI(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === i ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
            {/* Numeric indicator */}
            <div className="text-sm font-medium text-white bg-white/20 rounded-full px-3 py-1 backdrop-blur-sm">
              {i + 1}/{items.length}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
