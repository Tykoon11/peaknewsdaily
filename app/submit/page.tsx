import SubmitWizard from '@/components/submit-wizard'

export const metadata = { title: 'Submit' }

export default function SubmitPage() {
  return (
    <main className="container py-6 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Submit a Link or Upload</h1>
      <SubmitWizard />
    </main>
  )
}
