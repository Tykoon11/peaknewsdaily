import Link from 'next/link'

export const metadata = {
  title: 'Search',
  description: 'Search PeakNewsDaily market news, guides, and analysis.',
  alternates: {
    canonical: '/search'
  }
}

type SearchResult = {
  id: string
  slug: string
  title: string
  description?: string | null
}

async function getResults(query: string): Promise<SearchResult[]> {
  if (!query) return []

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.peaknewsdaily.com'
    const response = await fetch(`${baseUrl}/api/search?q=${encodeURIComponent(query)}`, {
      next: { revalidate: 60 }
    })

    if (!response.ok) return []

    const data = await response.json()
    return Array.isArray(data.results) ? data.results : []
  } catch (error) {
    console.warn('Search page query failed:', error)
    return []
  }
}

export default async function SearchPage({ searchParams }: { searchParams?: { q?: string } }) {
  const query = (searchParams?.q || '').trim()
  const results = await getResults(query)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">PeakNewsDaily</p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">Search</h1>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Find market news, investing guides, trading explainers, and crypto coverage.
            </p>
          </div>

          <form action="/search" className="flex flex-col sm:flex-row gap-3 mb-8">
            <label htmlFor="q" className="sr-only">Search query</label>
            <input
              id="q"
              name="q"
              type="search"
              defaultValue={query}
              placeholder="Search topics, tickers, or guides..."
              className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </form>

          {!query ? (
            <div className="grid gap-3 sm:grid-cols-2">
              <Link href="/news" className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-blue-500 transition-colors">
                <span className="font-semibold text-gray-900 dark:text-white">Latest market news</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Browse fresh market updates.</p>
              </Link>
              <Link href="/how-to" className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-blue-500 transition-colors">
                <span className="font-semibold text-gray-900 dark:text-white">How-to guides</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Explore practical finance explainers.</p>
              </Link>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">{results.length} result{results.length === 1 ? '' : 's'} for “{query}”</p>
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={`/p/${result.slug}`}
                  className="block rounded-lg border border-gray-200 dark:border-gray-700 p-5 hover:border-blue-500 hover:shadow-sm transition-all"
                >
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{result.title}</h2>
                  {result.description ? (
                    <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">{result.description}</p>
                  ) : null}
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-6 text-gray-700 dark:text-gray-300">
              No results found for “{query}”. Try a broader term or browse <Link className="text-blue-600 dark:text-blue-400 font-semibold" href="/news">latest news</Link>.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
