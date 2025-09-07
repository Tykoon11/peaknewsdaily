import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ArticleContent {
  title: string
  summary?: string
  status?: string
  slug: string
  content: string
  hasCustomContent: boolean
}

export function getArticleContent(slug: string): ArticleContent {
  const contentDir = path.join(process.cwd(), 'app/education/_content')
  const contentFileName = slug.replace('/education/', '').replace(/\//g, '-') + '.md'
  const contentFilePath = path.join(contentDir, contentFileName)
  
  // Check if custom content exists
  if (fs.existsSync(contentFilePath)) {
    try {
      const fileContent = fs.readFileSync(contentFilePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      return {
        title: data.title,
        summary: data.summary,
        status: data.status,
        slug: data.slug || slug,
        content,
        hasCustomContent: true
      }
    } catch (error) {
      console.error('Error reading custom content:', error)
    }
  }
  
  // Return default template content
  return {
    title: '',
    summary: '',
    status: 'draft',
    slug,
    content: '',
    hasCustomContent: false
  }
}