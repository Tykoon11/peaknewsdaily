"use client"
import { useRef } from 'react'

export default function AdminDeleteButton({ action, disabled }: { action: string; disabled?: boolean }) {
  const formRef = useRef<HTMLFormElement | null>(null)
  function onClick() {
    if (disabled) return
    const ok = window.confirm('Delete this post? This cannot be undone.')
    if (ok) formRef.current?.submit()
  }
  return (
    <form ref={formRef} action={action} method="post" onSubmit={(e) => e.preventDefault()}>
      <button
        type="button"
        onClick={onClick}
        disabled={!!disabled}
        className={`px-3 py-1 rounded border ${disabled ? 'opacity-50 cursor-not-allowed' : 'text-red-600'}`}
        title={disabled ? 'Unpublish before deleting' : 'Delete'}
      >
        🗑 Delete
      </button>
    </form>
  )
}

