"use client"
import { useState } from 'react'

export default function ShareButtons({ slug, title }: { slug: string; title: string }) {
  const url = `${process.env.NEXT_PUBLIC_SITE_URL || ''}/post/${slug}`
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div className="flex gap-2 items-center text-sm share">
      <a className="btn btn-outline" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}>Share on X</a>
      <a className="btn btn-outline" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}>Facebook</a>
      <button className="btn" onClick={copy}>{copied ? 'Copied' : 'Copy link'}</button>
    </div>
  )
}
