import { describe, it, expect } from 'vitest'
import { isBot } from '@/lib/utils'

describe('isBot', () => {
  it('detects bot user agents', () => {
    expect(isBot('Googlebot')).toBe(true)
    expect(isBot('Mozilla/5.0')).toBe(false)
  })
})

