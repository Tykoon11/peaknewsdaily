import { revalidateTag } from 'next/cache'

export async function POST() {
  revalidateTag('posts:list')
  return Response.json({ ok: true })
}

