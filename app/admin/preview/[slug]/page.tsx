import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { notFound, redirect } from 'next/navigation'

export const metadata = { title: 'Preview' }

export default async function AdminPreview({ params }: { params: { slug: string } }) {
  const session = await auth()
  if (!session?.user) redirect('/api/auth/signin')
  // Temporarily allow any authenticated user (for Google Ads review)
  const post = await prisma.post.findUnique({ where: { slug: params.slug }, include: { media: true, tags: { include: { tag: true } }, submission: true } })
  if (!post) notFound()
  const primary = post.media[0]
  return (
    <main className="container py-6">
      <article className="prose dark:prose-invert max-w-none">
        <h1>{post.title} <span className="align-middle text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-800">{post.status}</span></h1>
        <div className="my-4">
          {primary?.kind === 'video' ? (
            <video className="w-full rounded" controls playsInline preload="metadata">
              {primary?.publicId && (
                <source src={`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/video/upload/${primary.publicId}.mp4`} type="video/mp4" />
              )}
              Your browser does not support the video tag.
            </video>
          ) : primary?.kind === 'image' ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="w-full rounded" alt={post.title} src={primary?.sourceUrl || (primary?.publicId ? `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${primary?.publicId}.jpg` : '')} />
          ) : null}
        </div>
        {post.description && <p>{post.description}</p>}
      </article>
    </main>
  )
}

