import SubmitWizard from '@/components/submit-wizard'

export const metadata = { title: 'Submit' }

export default function SubmitPage() {
  return (
    <main className="container py-6">
      <h1 className="text-2xl font-semibold mb-4">Submit a Link or Upload</h1>
      <SubmitWizard />
    </main>
  )
}
