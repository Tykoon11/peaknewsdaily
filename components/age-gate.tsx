"use client"
import { useEffect, useState } from 'react'

export default function AgeGate() {
  const [ok, setOk] = useState(true)
  useEffect(() => {
    const v = localStorage.getItem('pnd-age-ok')
    setOk(v === '1')
  }, [])
  if (ok) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/80 text-white flex items-center justify-center p-6">
      <div className="max-w-md text-center space-y-4">
        <h2 className="text-xl font-semibold">Age Restricted</h2>
        <p>This content may be sensitive. Please confirm you are 18+.</p>
        <div className="flex gap-3 justify-center">
          <button className="px-4 py-2 rounded bg-white text-black" onClick={() => { localStorage.setItem('pnd-age-ok', '1'); setOk(true) }}>I am 18+</button>
          <a href="/" className="px-4 py-2 rounded border">Go Back</a>
        </div>
      </div>
    </div>
  )
}

