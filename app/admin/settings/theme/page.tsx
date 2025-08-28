import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { getActiveTheme, setActiveTheme, THEME_OPTIONS } from '@/lib/settings'

export const metadata = { title: 'Theme Settings' }

export default async function ThemeSettingsPage() {
  const session = await auth()
  if (!session?.user || !['editor', 'admin'].includes((session.user as any).role)) redirect('/')

  const active = await getActiveTheme()

  async function save(formData: FormData) {
    'use server'
    const theme = String(formData.get('theme') || 'default')
    await setActiveTheme(theme)
    redirect('/admin/settings/theme')
  }

  return (
    <main className="container py-6">
      <h1 className="text-2xl font-semibold mb-4">Theme</h1>
      <form action={save} className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium mb-1">Active theme</label>
          <select name="theme" defaultValue={active} className="w-full rounded border px-3 py-2">
            {THEME_OPTIONS.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </div>
        <button className="px-4 py-2 rounded bg-black text-white">Save</button>
      </form>
      <p className="mt-4 text-sm text-gray-600">Add more themes by placing a CSS file at <code>/public/themes/&lt;name&gt;.css</code> and adding it to the registry in <code>lib/settings.ts</code>.</p>
    </main>
  )
}

