import { redirect } from 'next/navigation'

export const metadata = { title: 'Contact PeakNewsDaily' }

export default function Dashboard() {
  redirect('/contact')
}
