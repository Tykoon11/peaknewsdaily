import { prisma } from '@/lib/prisma'
import { revalidateTag } from 'next/cache'
import { auth } from '@/lib/auth'
import { Resend } from 'resend'

export async function POST(_: Request, { params }: { params: { id: string } }) {
  const session = await auth()
  if (!session?.user || !['editor', 'admin'].includes(session.user.role as any)) return new Response('Forbidden', { status: 403 })
  const sub = await prisma.submission.update({ where: { id: params.id }, data: { status: 'approved' }, include: { post: true, submitter: true } })
  if (sub.postId) {
    await prisma.post.update({ where: { id: sub.postId }, data: { status: 'published', publishedAt: new Date() } })
  }
  // notify submitter
  if (process.env.RESEND_API_KEY && sub.submitter?.email) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'PeakNewsDaily <notify@peaknewsdaily.com>',
      to: sub.submitter.email,
      subject: 'Your submission was approved',
      html: `<p>Good news! Your submission "${sub.post?.title}" has been approved and published.</p>`
    })
  }
  revalidateTag('posts:list')
  return new Response(null, { status: 302, headers: { Location: '/admin' } })
}
