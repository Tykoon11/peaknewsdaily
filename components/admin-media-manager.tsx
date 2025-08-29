"use client"
import React, { useCallback, useMemo, useRef, useState } from 'react'

type MediaItem = {
  kind: 'image' | 'video'
  provider: 'cloudinary'
  publicId: string
  width?: number
  height?: number
  duration?: number
}

export default function AdminMediaManager({ initial }: { initial: MediaItem[] }) {
  const [items, setItems] = useState<MediaItem[]>(initial)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState<number | null>(null)
  const fileRef = useRef<HTMLInputElement | null>(null)
  const dragIdRef = useRef<string | null>(null)
  const [dragOverId, setDragOverId] = useState<string | null>(null)

  const canAdd = useMemo(() => !uploading, [uploading])

  const onPick = useCallback(() => fileRef.current?.click(), [])

  const onFiles = useCallback(async (files: FileList | null) => {
    if (!files || files.length === 0) return
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME
    if (!cloudName) {
      alert('Cloudinary not configured. Set CLOUDINARY env vars.')
      return
    }
    setUploading(true)
    setProgress(0)
    try {
      const uploaded: MediaItem[] = []
      for (let i = 0; i < files.length; i++) {
        const f = files[i]
        const isImage = f.type.startsWith('image/')
        const isVideo = f.type.startsWith('video/')
        if (!isImage && !isVideo) continue
        const resource = isImage ? 'image' : 'video'
        const public_id = `posts/${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
        const signRes = await fetch('/api/upload/sign', { method: 'POST', body: JSON.stringify({ folder: 'peaknewsdaily', public_id }) })
        const { signature, timestamp, apiKey } = await signRes.json()
        const form = new FormData()
        form.append('file', f)
        form.append('api_key', apiKey)
        form.append('timestamp', String(timestamp))
        form.append('signature', signature)
        form.append('folder', 'peaknewsdaily')
        form.append('public_id', public_id)
        const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/${resource}/upload`
        const xhr = new XMLHttpRequest()
        const p = new Promise<any>((resolve, reject) => {
          xhr.upload.onprogress = (e) => {
            if (e.lengthComputable) setProgress(Math.round((e.loaded / e.total) * 100))
          }
          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) resolve(JSON.parse(xhr.responseText))
            else reject(new Error(xhr.responseText))
          }
          xhr.onerror = () => reject(new Error('Upload failed'))
        })
        xhr.open('POST', uploadUrl)
        xhr.send(form)
        const res: any = await p
        uploaded.push({
          kind: isImage ? 'image' : 'video',
          provider: 'cloudinary',
          publicId: res.public_id,
          width: res.width,
          height: res.height,
          duration: res.duration,
        })
      }
      setItems((prev) => [...prev, ...uploaded])
    } catch (e: any) {
      alert(e?.message || 'Upload failed')
    } finally {
      setUploading(false)
      setProgress(null)
    }
  }, [])

  function remove(publicId: string) {
    setItems((prev) => prev.filter((x) => x.publicId !== publicId))
  }

  function move(publicId: string, dir: -1 | 1) {
    setItems((prev) => {
      const idx = prev.findIndex((x) => x.publicId === publicId)
      if (idx < 0) return prev
      const next = [...prev]
      const target = idx + dir
      if (target < 0 || target >= next.length) return prev
      const [it] = next.splice(idx, 1)
      next.splice(target, 0, it)
      return next
    })
  }

  function makePrimary(publicId: string) {
    setItems((prev) => {
      const idx = prev.findIndex((x) => x.publicId === publicId)
      if (idx <= 0) return prev
      const next = [...prev]
      const [it] = next.splice(idx, 1)
      next.unshift(it)
      return next
    })
  }

  // Drag & drop reordering
  const onDragStartItem = useCallback((publicId: string) => (e: React.DragEvent) => {
    dragIdRef.current = publicId
    try { e.dataTransfer.setData('text/plain', publicId) } catch {}
    e.dataTransfer.effectAllowed = 'move'
  }, [])

  const onDragOverItem = useCallback((publicId: string) => (e: React.DragEvent) => {
    e.preventDefault()
    setDragOverId(publicId)
    e.dataTransfer.dropEffect = 'move'
  }, [])

  const onDragLeaveItem = useCallback((publicId: string) => () => {
    setDragOverId((cur) => (cur === publicId ? null : cur))
  }, [])

  const onDropItem = useCallback((targetId: string) => (e: React.DragEvent) => {
    e.preventDefault()
    const sourceId = dragIdRef.current || (() => { try { return e.dataTransfer.getData('text/plain') } catch { return null } })()
    setDragOverId(null)
    dragIdRef.current = null
    if (!sourceId || sourceId === targetId) return
    setItems((prev) => {
      const srcIdx = prev.findIndex((x) => x.publicId === sourceId)
      const tgtIdx = prev.findIndex((x) => x.publicId === targetId)
      if (srcIdx < 0 || tgtIdx < 0) return prev
      const next = [...prev]
      const [it] = next.splice(srcIdx, 1)
      next.splice(tgtIdx, 0, it)
      return next
    })
  }, [])

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <button type="button" className="px-3 py-1 rounded border" onClick={onPick} disabled={!canAdd}>Add Media</button>
        {uploading && <span className="text-sm text-gray-600">Uploading… {progress ?? 0}%</span>}
      </div>
      <input ref={fileRef} type="file" accept="image/*,video/*" multiple className="hidden" onChange={(e) => onFiles(e.target.files)} />
      {/* Hidden field carries the final list back to the server action */}
      <input type="hidden" name="media" value={JSON.stringify(items)} />
      {items.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {items.map((m) => (
            <div
              key={m.publicId}
              className={`border rounded p-2 text-xs ${dragOverId === m.publicId ? 'ring-2 ring-blue-500' : ''}`}
              draggable
              onDragStart={onDragStartItem(m.publicId)}
              onDragOver={onDragOverItem(m.publicId)}
              onDragLeave={onDragLeaveItem(m.publicId)}
              onDrop={onDropItem(m.publicId)}
            >
              <div className="mb-1 flex items-center justify-between gap-2">
                <span>{m.kind.toUpperCase()}</span>
                <div className="flex items-center gap-1">
                  <button type="button" className="px-2 py-0.5 rounded border" onClick={() => move(m.publicId, -1)} title="Move up">↑</button>
                  <button type="button" className="px-2 py-0.5 rounded border" onClick={() => move(m.publicId, 1)} title="Move down">↓</button>
                  <button type="button" className="px-2 py-0.5 rounded border" onClick={() => makePrimary(m.publicId)} title="Make primary">★</button>
                  <button type="button" className="px-2 py-0.5 rounded border text-red-600" onClick={() => remove(m.publicId)} title="Remove">✕</button>
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="media"
                className="w-full rounded"
                src={`${cloudName ? `https://res.cloudinary.com/${cloudName}` : ''}/${m.kind === 'image' ? 'image' : 'video'}/upload/${m.publicId}${m.kind === 'image' ? '' : '.jpg'}`}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
              <div className="mt-1 break-all">
                {items[0]?.publicId === m.publicId ? <span className="mr-1 inline-block px-1.5 py-0.5 text-[10px] rounded bg-black text-white">PRIMARY</span> : null}
                {m.publicId}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-sm text-gray-600">No media selected.</div>
      )}
    </div>
  )
}
