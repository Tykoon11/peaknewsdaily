import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 60

export default async function TagPage({ params }: { params: { slug: string } }) {
  const tag = await prisma.tag.findUnique({ where: { slug: params.slug } })
  if (!tag) notFound()
  const tagged = await prisma.postTag.findMany({ where: { tagId: tag.id }, include: { post: true } })
  const posts = tagged.map((t) => t.post).filter((p) => p?.status === 'published')
  return (
    <main className="container py-6">
      <h1 className="text-2xl font-semibold mb-4">#{tag.name}</h1>
      <ul className="space-y-2">
        {posts.map((p) => p && (
          <li key={p.id}><Link className="underline" href={`/post/${p.slug}`}>{p.title}</Link></li>
        ))}
      </ul>
    </main>
  )
}

