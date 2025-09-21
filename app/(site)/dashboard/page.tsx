import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

export const metadata = { title: 'Creator Dashboard' }

export default async function Dashboard() {
  const session = await auth()
  if (!session?.user) redirect('/api/auth/signin')
  const subs = await prisma.submission.findMany({ where: { submitterId: session.user.id }, include: { post: true } })
  return (
    <main className="container px-2 xs:px-4 py-4 xs:py-6">
      <h1 className="text-xl xs:text-2xl font-semibold mb-3 xs:mb-4">Your Submissions</h1>
      <ul className="space-y-2 xs:space-y-3">
        {subs.map((s) => (
          <li key={s.id} className="border rounded-lg p-3 xs:p-4">
            <div className="font-medium text-sm xs:text-base mb-1">{s.post?.title}</div>
            <div className="text-xs xs:text-sm text-gray-600">Status: {s.status}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}

