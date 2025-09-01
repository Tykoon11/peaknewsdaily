export default function Head() {
  return (
    <>
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192.png" />
      <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      <link rel="mask-icon" href="/logo.svg" color="#111827" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-192.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-192.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192.png" />
      
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Oswald:wght@500;700&display=swap" />
      
      {/* Theme stylesheet */}
      <link rel="stylesheet" href="/themes/source.css" />
      
      <meta name="google-adsense-account" content="ca-pub-3299978316677420" />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3299978316677420"
        crossOrigin="anonymous"
      />
    </>
  )
}
