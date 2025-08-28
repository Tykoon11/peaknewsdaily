import { prisma } from '@/lib/prisma'

const DEFAULT_THEME = 'source'

export type ThemeInfo = {
  id: string
  name: string
  cssFile: string
  fontsHref?: string | null
}

const builtin: ThemeInfo[] = [
  { id: 'casper', name: 'Casper', cssFile: 'casper.css', fontsHref: 'https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Inter:wght@400;600&display=swap' },
  { id: 'source', name: 'Source', cssFile: 'source.css', fontsHref: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Oswald:wght@500;700&display=swap' }
]

export async function ensureDefaultThemes() {
  const themeModel = (prisma as any).theme
  if (themeModel?.upsert) {
    for (const t of builtin) {
      await themeModel.upsert({
        where: { id: t.id },
        update: { name: t.name, cssFile: t.cssFile, fontsHref: t.fontsHref || null },
        create: { id: t.id, name: t.name, cssFile: t.cssFile, fontsHref: t.fontsHref || null }
      })
    }
  }
  const active = await prisma.setting.findUnique({ where: { key: 'activeTheme' } })
  if (!active) {
    await prisma.setting.create({ data: { key: 'activeTheme', value: DEFAULT_THEME } })
  }
}

export async function listThemes(): Promise<ThemeInfo[]> {
  const allowed = new Set(builtin.map((b) => b.id))
  const themeModel = (prisma as any).theme
  if (!themeModel?.findMany) {
    // Fallback to builtin if Theme model not yet generated
    return builtin
  }
  const rows = await themeModel.findMany({ orderBy: { createdAt: 'asc' } })
  let out: ThemeInfo[] = []
  if (!rows || rows.length === 0) {
    await ensureDefaultThemes()
    const again = await themeModel.findMany()
    out = (again || []).map((r: any) => ({ id: r.id, name: r.name, cssFile: r.cssFile, fontsHref: r.fontsHref }))
  } else {
    out = rows.map((r: any) => ({ id: r.id, name: r.name, cssFile: r.cssFile, fontsHref: r.fontsHref }))
  }
  // Filter to top 4 + default
  const filtered = out.filter((t) => allowed.has(t.id))
  // Ensure builtin are present even if DB missing
  const byId = new Map(filtered.map((t) => [t.id, t]))
  for (const b of builtin) {
    if (!byId.has(b.id)) byId.set(b.id, b)
  }
  return Array.from(byId.values())
}

export async function getActiveTheme(): Promise<string> {
  try {
    const s = await prisma.setting.findUnique({ where: { key: 'activeTheme' } })
    return s?.value || DEFAULT_THEME
  } catch {
    return DEFAULT_THEME
  }
}

export async function getThemeById(id: string): Promise<ThemeInfo | null> {
  const themeModel = (prisma as any).theme
  if (!themeModel?.findUnique) {
    return builtin.find((b) => b.id === id) || null
  }
  const t = await themeModel.findUnique({ where: { id } })
  return t ? { id: t.id, name: t.name, cssFile: t.cssFile, fontsHref: t.fontsHref } : null
}

export async function setActiveTheme(theme: string) {
  await prisma.setting.upsert({
    where: { key: 'activeTheme' },
    update: { value: theme },
    create: { key: 'activeTheme', value: theme }
  })
}

export async function addTheme(theme: ThemeInfo) {
  const themeModel = (prisma as any).theme
  if (!themeModel?.create) return
  await themeModel.create({ data: { id: theme.id, name: theme.name, cssFile: theme.cssFile, fontsHref: theme.fontsHref || null } })
}

export async function deleteTheme(id: string) {
  // prevent deleting default
  if (id === DEFAULT_THEME) return
  const active = await getActiveTheme()
  if (active === id) {
    await setActiveTheme(DEFAULT_THEME)
  }
  const themeModel = (prisma as any).theme
  if (!themeModel?.delete) return
  await themeModel.delete({ where: { id } })
}
