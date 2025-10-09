import { auth } from '@/lib/auth'
import { redirect, notFound } from 'next/navigation'
import { ARTICLES, PILLARS } from '@/app/education/_data/articles'
import EducationEditor from './EducationEditor'

export const metadata = { title: 'Edit Trading Education Article' }

export default async function EditEducationArticle({ params }: { params: { slug: string[] } }) {
  const session = await auth()
  if (!session?.user) {
    redirect('/api/auth/signin')
  }
  // Temporarily allow any authenticated user (for Google Ads review)

  const articleSlug = `/education/${params.slug.join('/')}`
  const article = ARTICLES.find(a => a.slug === articleSlug)
  
  if (!article) {
    notFound()
  }

  const pillar = PILLARS.find(p => p.id === article.pillar)!

  return (
    <main className="container py-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <nav className="text-sm text-gray-600 mb-4">
          <span>Admin</span> → <span>Trading Education</span> → <span>Edit Article</span>
        </nav>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold mb-1">Edit Article</h1>
            <p className="text-gray-600">{pillar.title}</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm border rounded hover:bg-gray-50">
              Preview
            </button>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <EducationEditor article={article} pillar={pillar} />
    </main>
  )
}