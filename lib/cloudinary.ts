import { v2 as cloudinary } from 'cloudinary'
import crypto from 'crypto'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export function signUpload(params: Record<string, string | number>) {
  const timestamp = Math.floor(Date.now() / 1000)
  const toSign = Object.entries({ ...params, timestamp })
    .filter(([, v]): v is string | number => v !== undefined && v !== null && (typeof v !== 'string' || v !== ''))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}=${v}`)
    .join('&')
  const signature = crypto
    .createHash('sha1')
    .update(toSign + process.env.CLOUDINARY_API_SECRET)
    .digest('hex')
  return { timestamp, signature }
}

export { cloudinary }
