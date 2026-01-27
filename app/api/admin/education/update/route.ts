import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    // Temporarily allow any authenticated user (for Google Ads review)

    const { slug, title, summary, status, content } = await request.json()

    // Create the article content file
    const contentDir = path.join(process.cwd(), 'app/education/_content')
    if (!fs.existsSync(contentDir)) {
      fs.mkdirSync(contentDir, { recursive: true })
    }

    const contentFileName = slug.replace('/education/', '').replace(/\//g, '-') + '.md'
    const contentFilePath = path.join(contentDir, contentFileName)

    // Create markdown frontmatter
    const frontmatter = `---
title: "${title}"
summary: "${summary || ''}"
status: "${status || 'draft'}"
slug: "${slug}"
---

${content}`

    fs.writeFileSync(contentFilePath, frontmatter)

    // Update the articles.ts file with new metadata
    const articlesPath = path.join(process.cwd(), 'app/education/_data/articles.ts')
    const articlesContent = fs.readFileSync(articlesPath, 'utf8')
    
    // Update the article in the ARTICLES array
    const lines = articlesContent.split('\n')
    const updatedLines = lines.map(line => {
      if (line.includes(`slug:'${slug}'`) || line.includes(`slug:"${slug}"`)) {
        // Update the line with new data
        let updatedLine = line
        if (summary && !line.includes('summary:')) {
          updatedLine = updatedLine.replace(/},?\s*$/, `, summary:'${summary}' },`)
        } else if (summary && line.includes('summary:')) {
          updatedLine = updatedLine.replace(/summary:\s*'[^']*'/, `summary:'${summary}'`)
        }
        
        if (!line.includes('status:')) {
          updatedLine = updatedLine.replace(/},?\s*$/, `, status:'${status}' },`)
        } else {
          updatedLine = updatedLine.replace(/status:\s*'[^']*'/, `status:'${status}'`)
        }
        
        return updatedLine
      }
      return line
    })
    
    fs.writeFileSync(articlesPath, updatedLines.join('\n'))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to update article:', error)
    return NextResponse.json({ error: 'Failed to update article' }, { status: 500 })
  }
}