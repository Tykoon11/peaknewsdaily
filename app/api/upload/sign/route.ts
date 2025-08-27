import { signUpload } from '@/lib/cloudinary'

export async function POST(req: Request) {
  const body = await req.json()
  const { folder = 'peaknewsdaily', public_id, eager } = body || {}
  const { signature, timestamp } = signUpload({ folder, public_id, eager })
  return Response.json({ signature, timestamp, cloudName: process.env.CLOUDINARY_CLOUD_NAME, apiKey: process.env.CLOUDINARY_API_KEY })
}

