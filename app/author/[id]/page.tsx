import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 60

export default async function AuthorPage({ params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({ where: { id: params.id } })
  if (!user) notFound()
  const posts = await prisma.post.findMany({ where: { authorId: user.id, status: 'published' }, orderBy: { publishedAt: 'desc' } })
  return (
    <main className="container py-6">
      <h1 className="text-2xl font-semibold mb-4">{user.name || user.email}</h1>
      <ul className="space-y-2">
        {posts.map((p) => (
          <li key={p.id}><Link className="underline" href={`/post/${p.slug}`}>{p.title}</Link></li>
        ))}
      </ul>
    </main>
  )
}

