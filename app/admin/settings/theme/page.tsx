import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { addTheme, deleteTheme, ensureDefaultThemes, getActiveTheme, listThemes, setActiveTheme } from '@/lib/settings'

export const metadata = { title: 'Theme Settings' }

export default async function ThemeSettingsPage() {
  const session = await auth()
  if (!session?.user || !['editor', 'admin'].includes((session.user as any).role)) redirect('/')

  await ensureDefaultThemes()
  const [active, themes] = await Promise.all([getActiveTheme(), listThemes()])

  async function save(formData: FormData) {
    'use server'
    const theme = String(formData.get('theme') || 'default')
    await setActiveTheme(theme)
    redirect('/admin/settings/theme')
  }

  async function create(formData: FormData) {
    'use server'
    const id = String(formData.get('id') || '').trim()
    const name = String(formData.get('name') || '').trim()
    const cssFile = String(formData.get('cssFile') || '').trim()
    const fontsHref = String(formData.get('fontsHref') || '').trim() || undefined
    if (!id || !name || !cssFile) redirect('/admin/settings/theme')
    await addTheme({ id, name, cssFile, fontsHref })
    redirect('/admin/settings/theme')
  }

  async function removeTheme(formData: FormData) {
    'use server'
    const id = String(formData.get('id') || '')
    if (id && id !== 'default') await deleteTheme(id)
    redirect('/admin/settings/theme')
  }

  return (
    <main className="container py-6">
      <h1 className="text-2xl font-semibold mb-4">Theme</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <form action={save} className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium mb-1">Active theme</label>
            <div className="space-y-2">
              {themes.map((t) => (
                <label key={t.id} className="flex items-center gap-3 text-sm">
                  <input type="radio" name="theme" value={t.id} defaultChecked={t.id === active} />
                  <span className="font-medium">{t.name}</span>
                  <span className="text-gray-500">({t.id})</span>
                  <span className="text-gray-400">{t.cssFile}</span>
                  {t.id !== 'default' && (
                    <form action={removeTheme}>
                      <input type="hidden" name="id" value={t.id} />
                      <button className="btn btn-outline" type="submit">Delete</button>
                    </form>
                  )}
                </label>
              ))}
            </div>
          </div>
          <button className="btn" type="submit">Save</button>
        </form>
        <form action={create} className="space-y-3 max-w-md">
          <div className="text-lg font-medium">Add Theme</div>
          <div className="text-xs text-gray-500">Optionally add a preview image at <code>/public/themes/&lt;id&gt;.png</code> to show below.</div>
          <input className="input w-full" name="id" placeholder="id (e.g. casper)" required />
          <input className="input w-full" name="name" placeholder="Display name" required />
          <input className="input w-full" name="cssFile" placeholder="CSS filename (e.g. casper.css)" required />
          <input className="input w-full" name="fontsHref" placeholder="Google Fonts href (optional)" />
          <div className="text-xs text-gray-500">Place CSS files in <code>/public/themes</code>. The fonts link is loaded in the head when this theme is active.</div>
          <button className="btn" type="submit">Add</button>
        </form>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {themes.map((t) => (
          <div key={`prev-${t.id}`} className="rounded border p-3">
            <div className="font-medium mb-1">{t.name}</div>
            <div className="text-xs text-gray-500 mb-2">{t.id} • {t.cssFile}</div>
            <img
              src={`/themes/${t.id}.png`}
              alt={`${t.name} preview`}
              className="w-full h-40 object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  )
}
