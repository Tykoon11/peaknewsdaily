"use client"
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { z } from 'zod'

type MediaAssetInput = {
  kind: 'image' | 'video'
  provider: 'cloudinary'
  publicId: string
  width?: number
  height?: number
  duration?: number
}

const metaSchema = z.object({
  title: z.string().min(5),
  type: z.enum(['Music', 'Promotional', 'Funny', 'Other']),
  description: z.string().optional(),
  tags: z.string().optional(),
  licenseAccepted: z.boolean(),
  ageRestricted: z.boolean().optional(),
})

const linkSchema = z.object({ externalUrl: z.string().url() })

export default function SubmitWizard() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [mode, setMode] = useState<'link' | 'upload' | null>(null)
  const [link, setLink] = useState('')
  const [assets, setAssets] = useState<MediaAssetInput[]>([])
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([])
  const [categoryId, setCategoryId] = useState<string>('')
  
  // Load categories on mount
  useEffect(() => {
    fetch('/api/categories')
      .then((r) => r.json())
      .then((j) => setCategories(j.items || []))
      .catch(() => setCategories([]))
  }, [])
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState<number | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const fileInput = useRef<HTMLInputElement | null>(null)

  const canContinue = useMemo(() => {
    if (step === 1) return !!mode
    if (step === 2 && mode === 'link') return link.length > 0
    if (step === 2 && mode === 'upload') return assets.length > 0 && !uploading
    return true
  }, [step, mode, link, assets.length, uploading])

  const onSelectFiles = useCallback(async (files: FileList | null) => {
    if (!files || files.length === 0) return
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME
    if (!cloudName) {
      setMessage('Cloudinary not configured. Set CLOUDINARY env vars.')
      return
    }
    setUploading(true)
    setProgress(0)
    try {
      const uploaded: MediaAssetInput[] = []
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

        if (isVideo) {
          try {
            const thumb = await extractVideoThumb(res.secure_url)
            const thumbPublic = `${public_id}-thumb`
            const sign2 = await fetch('/api/upload/sign', { method: 'POST', body: JSON.stringify({ folder: 'peaknewsdaily', public_id: thumbPublic }) })
            const { signature: sig2, timestamp: ts2, apiKey: key2 } = await sign2.json()
            const form2 = new FormData()
            form2.append('file', thumb)
            form2.append('api_key', key2)
            form2.append('timestamp', String(ts2))
            form2.append('signature', sig2)
            form2.append('folder', 'peaknewsdaily')
            form2.append('public_id', thumbPublic)
            const up2 = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, { method: 'POST', body: form2 })
            const res2: any = await up2.json()
            uploaded.push({ kind: 'image', provider: 'cloudinary', publicId: res2.public_id, width: res2.width, height: res2.height })
          } catch (e) {
            // thumbnail optional
          }
        }
      }
      setAssets(uploaded)
      setMessage(null)
    } catch (e: any) {
      setMessage(e?.message || 'Upload failed')
    } finally {
      setUploading(false)
      setProgress(null)
    }
  }, [])

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage(null)
    const formEl = e.currentTarget as HTMLFormElement
    const form = new FormData(formEl)
    const payload = {
      title: String(form.get('title') || ''),
      type: String(form.get('type') || 'Other') as any,
      description: String(form.get('description') || ''),
      tags: String(form.get('tags') || ''),
      licenseAccepted: form.get('licenseAccepted') === 'on',
      ageRestricted: form.get('ageRestricted') === 'on',
      categoryId: String(form.get('categoryId') || '') || undefined,
      externalUrl: mode === 'link' ? link : undefined,
      mediaAssets: mode === 'upload' ? assets : undefined,
    }
    const metaOk = metaSchema.safeParse(payload)
    if (!metaOk.success) {
      setMessage('Please complete required fields (title, type, license).')
      return
    }
    if (mode === 'link') {
      const linkOk = linkSchema.safeParse({ externalUrl: link })
      if (!linkOk.success) {
        setMessage('Please provide a valid URL.')
        return
      }
    }
    const res = await fetch('/submit/action', { method: 'POST', body: JSON.stringify(payload) })
    const json = await res.json()
    if (res.ok) {
      setMessage('Submitted! We will review shortly.')
      setStep(1)
      setMode(null)
      setLink('')
      setAssets([])
      formEl.reset()
    } else {
      setMessage(json.error || 'Failed to submit')
    }
  }, [mode, assets, link])

  return (
    <div className="space-y-6 max-w-2xl">
      
      <StepIndicator step={step} />

      {step === 1 && (
        <div className="space-y-4">
          <div className="text-sm text-gray-600 dark:text-gray-300">Choose how you want to submit:</div>
          <div className="flex gap-4">
            <button type="button" className={`btn btn-outline border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${mode === 'link' ? 'bg-blue-600 dark:bg-blue-600 text-white border-blue-600' : ''}`} onClick={() => setMode('link')}>External Link</button>
            <button type="button" className={`btn btn-outline border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${mode === 'upload' ? 'bg-blue-600 dark:bg-blue-600 text-white border-blue-600' : ''}`} onClick={() => setMode('upload')}>Direct Upload</button>
          </div>
          <div className="pt-4">
            <button disabled={!canContinue} className="btn bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded transition-colors" onClick={() => setStep(2)}>Continue</button>
          </div>
        </div>
      )}

      {step === 2 && mode === 'link' && (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">External URL</label>
          <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="https://..." className="w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400" />
          <div className="flex gap-2">
            <button className="btn btn-outline border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2 rounded transition-colors" onClick={() => setStep(1)}>Back</button>
            <button disabled={!canContinue} className="btn bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded transition-colors" onClick={() => setStep(3)}>Continue</button>
          </div>
        </div>
      )}

      {step === 2 && mode === 'upload' && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <input ref={fileInput} type="file" accept="image/*,video/*" multiple onChange={(e) => onSelectFiles(e.target.files)} className="text-sm text-gray-600 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-50 dark:file:bg-blue-900 file:text-blue-700 dark:file:text-blue-300 hover:file:bg-blue-100 dark:hover:file:bg-blue-800 file:cursor-pointer" />
            {uploading && <span className="text-sm text-blue-600 dark:text-blue-400">Uploading... {progress ?? 0}%</span>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {assets.map((a) => (
              <div key={a.publicId} className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded p-2 text-sm">
                <div className="mb-2 text-gray-900 dark:text-gray-100 font-medium">{a.kind.toUpperCase()}</div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="preview" className="w-full rounded" src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${a.kind === 'image' ? a.publicId : a.publicId + '.jpg'}`} onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
                <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">{a.publicId}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2 rounded transition-colors" onClick={() => setStep(1)}>Back</button>
            <button disabled={!canContinue} className="btn bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded transition-colors" onClick={() => setStep(3)}>Continue</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
            <input name="title" className="mt-1 w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
            <select name="categoryId" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="mt-1 w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400">
              <option value="">— Select a category —</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
            <select name="type" className="mt-1 w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400">
              <option>Music</option>
              <option>Promotional</option>
              <option>Funny</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
            <textarea name="description" className="mt-1 w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400" rows={4} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tags (comma separated)</label>
            <input name="tags" className="mt-1 w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="licenseAccepted" required />
            <span className="text-sm text-gray-700 dark:text-gray-300">I own the rights or have permission to submit this content.</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="ageRestricted" />
            <span className="text-sm text-gray-700 dark:text-gray-300">Age restricted</span>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2 rounded transition-colors" type="button" onClick={() => setStep(2)}>Back</button>
            <button className="btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors" type="submit">Submit</button>
          </div>
        </form>
      )}

      {message && <div className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-3">{message}</div>}
    </div>
  )
}

async function extractVideoThumb(url: string): Promise<File> {
  // Create a hidden video and canvas to snapshot a frame
  const video = document.createElement('video')
  video.src = url
  video.crossOrigin = 'anonymous'
  video.muted = true
  await video.play().catch(() => {})
  await new Promise<void>((resolve) => {
    const onLoaded = () => {
      video.currentTime = Math.min(1, (video.duration || 1) / 2)
      video.removeEventListener('loadedmetadata', onLoaded)
    }
    const onSeeked = () => {
      resolve()
      video.pause()
      video.removeEventListener('seeked', onSeeked)
    }
    video.addEventListener('loadedmetadata', onLoaded)
    video.addEventListener('seeked', onSeeked)
  })
  const canvas = document.createElement('canvas')
  canvas.width = video.videoWidth
  canvas.height = video.videoHeight
  const ctx = canvas.getContext('2d')!
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
  const blob: Blob = await new Promise((resolve) => canvas.toBlob((b) => resolve(b as Blob), 'image/jpeg', 0.85))
  return new File([blob], 'thumbnail.jpg', { type: 'image/jpeg' })
}

function StepIndicator({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Circle n={1} active={step >= 1} /> Choose
      <span className="mx-2">→</span>
      <Circle n={2} active={step >= 2} /> {step === 2 ? 'Provide' : 'Provide'}
      <span className="mx-2">→</span>
      <Circle n={3} active={step >= 3} /> Details
    </div>
  )
}

function Circle({ n, active }: { n: number; active: boolean }) {
  return (
    <span className={`w-6 h-6 inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 ${active ? 'bg-blue-600 dark:bg-blue-600 text-white border-blue-600' : 'text-gray-600 dark:text-gray-400'}`}>{n}</span>
  )
}
