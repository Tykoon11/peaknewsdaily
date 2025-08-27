"use client"
import Giscus from '@giscus/react'

export default function GiscusComments() {
  if (!process.env.NEXT_PUBLIC_SITE_URL) return null
  const repo = (process.env.NEXT_PUBLIC_GISCUS_REPO || process.env.GISCUS_REPO) as
    | `${string}/${string}`
    | undefined
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID || process.env.GISCUS_REPO_ID || ''
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY || process.env.GISCUS_CATEGORY || 'General'
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || process.env.GISCUS_CATEGORY_ID || ''

  if (!repo || !repoId || !categoryId) return null
  return (
    <Giscus
      repo={repo}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  )
}
