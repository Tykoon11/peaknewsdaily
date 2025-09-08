'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import fs from 'fs'
import path from 'path'

// Update article status in the articles.ts file (direct call)
export async function updateArticleStatus(slug: string, status: 'published' | 'draft'): Promise<{success: boolean, error?: string}> {
  const session = await auth()
  if (!session?.user || !['editor', 'admin'].includes((session.user as any).role)) {
    throw new Error('Unauthorized')
  }

  try {
    const articlesPath = path.join(process.cwd(), 'app/education/_data/articles.ts')
    let content = fs.readFileSync(articlesPath, 'utf8')
    
    // Find the article line and update its status
    const lines = content.split('\n')
    const updatedLines = lines.map(line => {
      if (line.includes(`slug:'${slug}'`) || line.includes(`slug:"/education/${slug.replace('/education/', '')}"`)) {
        if (line.includes('status:')) {
          return line.replace(/status:\s*'[^']*'/, `status:'${status}'`)
        } else {
          return line.replace(/},?\s*$/, `, status:'${status}' },`)
        }
      }
      return line
    })
    
    fs.writeFileSync(articlesPath, updatedLines.join('\n'))
    revalidatePath('/admin/education')
    revalidatePath('/education')
    revalidatePath(slug)
    
    return { success: true }
  } catch (error) {
    console.error('Failed to update article status:', error)
    return { success: false, error: 'Failed to update article status' }
  }
}

// Form action wrapper for updateArticleStatus
export async function updateArticleStatusAction(formData: FormData): Promise<void> {
  const slug = formData.get('slug') as string
  const status = formData.get('status') as 'published' | 'draft'
  await updateArticleStatus(slug, status)
}

// Redirect to article editing (we'll create this next)
export async function editArticle(slug: string) {
  const session = await auth()
  if (!session?.user || !['editor', 'admin'].includes((session.user as any).role)) {
    throw new Error('Unauthorized')
  }
  
  redirect(`/admin/education/edit${slug}`)
}