"use client"
import { useRef } from 'react'

export default function AdminConfirmButton({ action, label = 'Delete', confirm, disabled, danger }: { action: string; label?: string; confirm: string; disabled?: boolean; danger?: boolean }) {
  const formRef = useRef<HTMLFormElement | null>(null)
  function onClick() {
    if (disabled) return
    if (!confirm || window.confirm(confirm)) {
      formRef.current?.submit()
    }
  }
  return (
    <form ref={formRef} action={action} method="post" onSubmit={(e) => e.preventDefault()}>
      <button
        type="button"
        onClick={onClick}
        disabled={!!disabled}
        className={`px-3 py-1 rounded border ${disabled ? 'opacity-50 cursor-not-allowed' : danger ? 'text-red-600' : ''}`}
        title={disabled ? 'Action not available' : label}
      >
        {label}
      </button>
    </form>
  )
}

