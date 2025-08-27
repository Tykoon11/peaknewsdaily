import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 60

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await prisma.category.findUnique({ where: { slug: params.slug } })
  if (!category) notFound()
  const posts = await prisma.post.findMany({ where: { categoryId: category.id, status: 'published' }, orderBy: { publishedAt: 'desc' } })
  return (
    <main className="container py-6">
      <h1 className="text-2xl font-semibold mb-4">{category.name}</h1>
      <ul className="space-y-2">
        {posts.map((p) => (
          <li key={p.id}><Link className="underline" href={`/post/${p.slug}`}>{p.title}</Link></li>
        ))}
      </ul>
    </main>
  )
}

