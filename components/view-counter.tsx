"use client"
import { useEffect, useState } from 'react'

export default function ViewCounter({ postId }: { postId: string }) {
  const [views, setViews] = useState<number | null>(null)
  useEffect(() => {
    const f = async () => {
      try {
        const res = await fetch('/api/views', { method: 'POST', body: JSON.stringify({ postId }) })
        const data = await res.json()
        setViews(data.views ?? null)
      } catch {}
    }
    f()
  }, [postId])
  return <div className="text-sm text-gray-500">{views === null ? '—' : `${views.toLocaleString()} views`}</div>
}

