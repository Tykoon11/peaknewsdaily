import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { getGhostClient } from '@/lib/ghost'
import Giscus from '@/components/giscus'
import ShareButtons from '@/components/share-buttons'
import AgeGate from '@/components/age-gate'
import ViewCounter from '@/components/view-counter'
import { Metadata } from 'next'

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } })
  if (!post) return {}
  return {
    title: post.title,
    description: post.description || undefined,
    openGraph: {
      title: post.title,
      description: post.description || undefined,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`
    }
  }
}

export default async function PostPage({ params }: Props) {
  let post = await prisma.post.findUnique({
    where: { slug: params.slug },
    include: { media: true, tags: { include: { tag: true } }, submission: true }
  })
  if (!post || post.status !== 'published') {
    const ghost = getGhostClient()
    if (ghost) {
      try {
        const gp = await ghost.posts.read({ slug: params.slug })
        return (
          <main className="container py-6">
            <article className="prose dark:prose-invert max-w-none">
              <h1>{gp.title}</h1>
              {gp.feature_image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="w-full rounded" alt={gp.title || ''} src={gp.feature_image} />
              )}
              {gp.html && <div dangerouslySetInnerHTML={{ __html: gp.html }} />}
            </article>
          </main>
        )
      } catch {}
    }
    notFound()
  }

  const primary = post.media[0]

  return (
    <main className="container py-6">
      <article className="prose dark:prose-invert max-w-none">
        <h1>{post.title}</h1>
        {post.submission?.ageRestricted && <AgeGate />}
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
            <img className="w-full rounded" alt={post.title} src={`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${primary?.publicId}.jpg`} />
          ) : null}
        </div>
        {post.description && <p>{post.description}</p>}
        <ShareButtons slug={post.slug} title={post.title} />
        <ViewCounter postId={post.id} />
        <div className="mt-8">
          <Giscus />
        </div>
      </article>
    </main>
  )
}
