import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ARTICLES, PILLARS } from '@/app/education/_data/articles'
import { updateArticleStatusAction } from './actions'

export const metadata = { title: 'Trading Education Management' }

export default async function AdminEducationPage({ searchParams }: { searchParams?: { pillar?: string; status?: string } }) {
  const session = await auth()
  if (!session?.user || !['editor', 'admin'].includes((session.user as any).role)) redirect('/')
  
  const pillarFilter = searchParams?.pillar || 'all'
  const statusFilter = searchParams?.status || 'all'
  
  // Filter articles based on admin selections
  let filteredArticles = ARTICLES
  
  if (pillarFilter !== 'all') {
    filteredArticles = filteredArticles.filter(article => article.pillar === pillarFilter)
  }
  
  if (statusFilter !== 'all') {
    if (statusFilter === 'published') {
      filteredArticles = filteredArticles.filter(article => article.status === 'published')
    } else if (statusFilter === 'draft') {
      filteredArticles = filteredArticles.filter(article => !article.status || article.status === 'draft')
    }
  }

  // Get database posts for reference (existing trading posts)
  const dbPosts = await prisma.post.findMany({
    where: { 
      deletedAt: null,
      OR: [
        { slug: { contains: 'trading' } },
        { slug: { contains: 'education' } },
        { title: { contains: 'trading', mode: 'insensitive' } },
        { title: { contains: 'education', mode: 'insensitive' } }
      ]
    },
    orderBy: [{ updatedAt: 'desc' }],
    select: { id: true, slug: true, title: true, status: true, publishedAt: true }
  })

  return (
    <main className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Trading Education Management</h1>
          <p className="text-gray-600 text-sm mt-1">
            Manage all trading education content across pillars and learning paths
          </p>
        </div>
        <div className="text-sm flex gap-3">
          <Link className="underline" href="/admin">Admin Dashboard</Link>
          <Link className="underline" href="/admin/posts">Regular Posts</Link>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Filter by Pillar:</label>
            <div className="flex flex-wrap gap-2">
              <Link 
                href="/admin/education"
                className={`px-3 py-1 rounded text-sm border ${pillarFilter === 'all' ? 'bg-blue-600 text-white' : 'hover:bg-gray-50'}`}
              >
                All ({ARTICLES.length})
              </Link>
              {PILLARS.map(pillar => (
                <Link
                  key={pillar.id}
                  href={`/admin/education?pillar=${pillar.id}`}
                  className={`px-3 py-1 rounded text-sm border ${pillarFilter === pillar.id ? 'bg-blue-600 text-white' : 'hover:bg-gray-50'}`}
                >
                  {pillar.title} ({ARTICLES.filter(a => a.pillar === pillar.id).length})
                </Link>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Filter by Status:</label>
            <div className="flex gap-2">
              <Link
                href={`/admin/education${pillarFilter !== 'all' ? `?pillar=${pillarFilter}` : ''}`}
                className={`px-3 py-1 rounded text-sm border ${statusFilter === 'all' ? 'bg-green-600 text-white' : 'hover:bg-gray-50'}`}
              >
                All Status
              </Link>
              <Link
                href={`/admin/education?status=published${pillarFilter !== 'all' ? `&pillar=${pillarFilter}` : ''}`}
                className={`px-3 py-1 rounded text-sm border ${statusFilter === 'published' ? 'bg-green-600 text-white' : 'hover:bg-gray-50'}`}
              >
                Published ({ARTICLES.filter(a => a.status === 'published').length})
              </Link>
              <Link
                href={`/admin/education?status=draft${pillarFilter !== 'all' ? `&pillar=${pillarFilter}` : ''}`}
                className={`px-3 py-1 rounded text-sm border ${statusFilter === 'draft' ? 'bg-yellow-600 text-white' : 'hover:bg-gray-50'}`}
              >
                Draft ({ARTICLES.filter(a => !a.status || a.status === 'draft').length})
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600 whitespace-nowrap">{ARTICLES.length}</div>
          <div className="text-sm text-blue-800">Total Articles</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600">
            {ARTICLES.filter(a => a.status === 'published').length}
          </div>
          <div className="text-sm text-green-800">Published</div>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-yellow-600">
            {ARTICLES.filter(a => !a.status || a.status === 'draft').length}
          </div>
          <div className="text-sm text-yellow-800">Draft/Pending</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="text-2xl font-bold text-purple-600">{PILLARS.length}</div>
          <div className="text-sm text-purple-800">Learning Pillars</div>
        </div>
      </div>

      {/* Trading Education Articles */}
      <div className="bg-white rounded-lg border mb-8">
        <div className="px-6 py-4 border-b bg-gray-50">
          <h2 className="text-lg font-semibold">Trading Education Articles</h2>
          <p className="text-sm text-gray-600">Structured learning content organized by pillars</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b bg-gray-50">
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Pillar</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredArticles.map((article, index) => {
                const pillar = PILLARS.find(p => p.id === article.pillar)
                const isPublished = article.status === 'published'
                
                return (
                  <tr key={article.slug} className={`border-b hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                    <td className="py-3 px-4">
                      <div>
                        <Link href={article.slug} className="font-medium hover:text-blue-600" target="_blank">
                          {article.title}
                        </Link>
                        {article.summary && (
                          <div className="text-xs text-gray-500 mt-1 line-clamp-1">{article.summary}</div>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Link href={pillar?.slug || '#'} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {pillar?.title}
                      </Link>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`text-xs px-2 py-1 rounded ${
                        isPublished 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {isPublished ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Link 
                          href={article.slug}
                          target="_blank"
                          className="px-3 py-1 text-xs rounded border hover:bg-gray-50"
                        >
                          Preview
                        </Link>
                        <Link
                          href={`/admin/education/edit${article.slug.replace('/education', '')}`}
                          className="px-3 py-1 text-xs rounded border border-blue-500 text-blue-600 hover:bg-blue-50"
                        >
                          Edit Content
                        </Link>
                        <form action={updateArticleStatusAction} className="inline">
                          <input type="hidden" name="slug" value={article.slug} />
                          <input type="hidden" name="status" value={isPublished ? 'draft' : 'published'} />
                          <button type="submit" className={`px-3 py-1 text-xs rounded ${
                            isPublished 
                              ? 'border border-yellow-500 text-yellow-600 hover:bg-yellow-50' 
                              : 'bg-green-600 text-white hover:bg-green-700'
                          }`}>
                            {isPublished ? 'Unpublish' : 'Publish'}
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Database Posts (Legacy/Additional) */}
      {dbPosts.length > 0 && (
        <div className="bg-white rounded-lg border">
          <div className="px-6 py-4 border-b bg-gray-50">
            <h2 className="text-lg font-semibold">Legacy Database Posts</h2>
            <p className="text-sm text-gray-600">Existing trading-related posts from database</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b bg-gray-50">
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Published</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {dbPosts.map((post) => (
                  <tr key={post.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <Link href={`/post/${post.slug}`} className="font-medium hover:text-blue-600">
                        {post.title}
                      </Link>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`text-xs px-2 py-1 rounded ${
                        post.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-gray-600">
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : '—'}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Link 
                          href={`/admin/posts/${post.id}/edit`} 
                          className="px-3 py-1 text-xs rounded border hover:bg-gray-50"
                        >
                          Edit
                        </Link>
                        <Link 
                          href={`/post/${post.slug}`}
                          target="_blank"
                          className="px-3 py-1 text-xs rounded border hover:bg-gray-50"
                        >
                          View
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Action Bar */}
      <div className="mt-8 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Showing {filteredArticles.length} of {ARTICLES.length} trading education articles
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Add New Article
          </button>
          <button className="px-4 py-2 border rounded hover:bg-gray-50">
            Export All
          </button>
        </div>
      </div>
    </main>
  )
}