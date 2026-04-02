const gone = () =>
  new Response('Gone', {
    status: 410,
    headers: { 'Cache-Control': 'public, max-age=3600' }
  })

export async function GET() {
  return gone()
}

export async function POST() {
  return gone()
}
