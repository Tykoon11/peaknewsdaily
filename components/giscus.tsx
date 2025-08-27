"use client"
import Giscus from '@giscus/react'

export default function GiscusComments() {
  if (!process.env.NEXT_PUBLIC_SITE_URL) return null
  return (
    <Giscus
      repo={process.env.GISCUS_REPO || ''}
      repoId={process.env.GISCUS_REPO_ID || ''}
      category={process.env.GISCUS_CATEGORY || 'General'}
      categoryId={process.env.GISCUS_CATEGORY_ID || ''}
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
