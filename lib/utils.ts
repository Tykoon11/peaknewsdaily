import { clsx, ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isBot(ua?: string | null) {
  if (!ua) return false
  return /(bot|crawler|spider|crawling)/i.test(ua)
}

export const SITE = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'PeakNewsDaily',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
}

