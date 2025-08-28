import { getGhostClient } from '@/lib/ghost'
import Link from 'next/link'

export default async function GhostPostPage({ params }: { params: { slug: string } }) {
  const ghost = getGhostClient()
  if (!ghost) return null
  try {
    const post = await ghost.posts.read({ slug: params.slug }, { include: ['tags', 'authors'] })
    return (
      <main className="container py-6">
        <div className="mb-4 text-sm"><Link className="underline" href="/ghost">← Back to Ghost Feed</Link></div>
        <article className="prose dark:prose-invert max-w-none">
          <h1>{post.title}</h1>
          {post.feature_image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="w-full rounded" src={post.feature_image} alt={post.title || ''} />
          )}
          {post.html && <div dangerouslySetInnerHTML={{ __html: post.html }} />}
        </article>
      </main>
    )
  } catch {
    return (
      <main className="container py-6">
        <p className="text-gray-600">Post not found.</p>
      </main>
    )
  }
}

