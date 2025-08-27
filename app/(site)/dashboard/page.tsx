import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

export const metadata = { title: 'Creator Dashboard' }

export default async function Dashboard() {
  const session = await auth()
  if (!session?.user) redirect('/api/auth/signin')
  const subs = await prisma.submission.findMany({ where: { submitterId: session.user.id }, include: { post: true } })
  return (
    <main className="container py-6">
      <h1 className="text-2xl font-semibold mb-4">Your Submissions</h1>
      <ul className="space-y-2">
        {subs.map((s) => (
          <li key={s.id} className="border rounded p-3">
            <div className="font-medium">{s.post?.title}</div>
            <div className="text-sm text-gray-600">Status: {s.status}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}

