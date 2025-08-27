import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export const revalidate = 0

export default async function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = (searchParams.q || '').trim()
  let posts: { id: string; slug: string; title: string }[] = []
  if (q) {
    // Basic LIKE fallback; can be replaced with pg_trgm similarity search
    posts = await prisma.post.findMany({
      where: { status: 'published', OR: [{ title: { contains: q, mode: 'insensitive' } }, { description: { contains: q, mode: 'insensitive' } }] },
      select: { id: true, slug: true, title: true },
      take: 30
    })
  }
  return (
    <main className="container py-6">
      <form className="mb-4">
        <input type="text" name="q" placeholder="Search..." defaultValue={q} className="w-full rounded border px-3 py-2" />
      </form>
      {q && (
        <ul className="space-y-2">
          {posts.map((p) => (
            <li key={p.id}><Link className="underline" href={`/post/${p.slug}`}>{p.title}</Link></li>
          ))}
        </ul>
      )}
    </main>
  )
}

