import Link from 'next/link'
import type { ReactNode } from 'react'

interface LegalPageProps {
  eyebrow?: string
  title: string
  description: string
  children: ReactNode
  updated?: string
}

export default function LegalPage({ eyebrow = 'PeakNewsDaily', title, description, children, updated = 'April 23, 2026' }: LegalPageProps) {
  return (
    <main className="bg-white dark:bg-gray-900">
      <section className="border-b border-gray-200 dark:border-gray-800 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">{description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <span>Last updated {updated}</span>
            <span aria-hidden="true">•</span>
            <Link href="/contact" className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              Contact PeakNewsDaily
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 dark:prose-invert dark:prose-headings:text-white dark:prose-p:text-gray-300 dark:prose-li:text-gray-300">
          {children}
        </div>
      </section>
    </main>
  )
}
