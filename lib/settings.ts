import { prisma } from '@/lib/prisma'

const DEFAULT_THEME = 'default'

export async function getActiveTheme(): Promise<string> {
  try {
    const s = await prisma.setting.findUnique({ where: { key: 'activeTheme' } })
    return s?.value || DEFAULT_THEME
  } catch {
    return DEFAULT_THEME
  }
}

export async function setActiveTheme(theme: string) {
  await prisma.setting.upsert({
    where: { key: 'activeTheme' },
    update: { value: theme },
    create: { key: 'activeTheme', value: theme }
  })
}

export const THEME_OPTIONS = [
  { id: 'default', name: 'Default' },
  { id: 'casper', name: 'Casper-like' }
]

