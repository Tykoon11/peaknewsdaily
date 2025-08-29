export default function Head() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT
  return (
    <>
      {client ? <meta name="google-adsense-account" content={client} /> : null}
    </>
  )
}

