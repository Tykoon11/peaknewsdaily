/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000']
    }
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'img.youtube.com' }
    ]
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'Permissions-Policy', value: 'interest-cohort=()' },
        { key: 'X-Content-Type-Options', value: 'nosniff' }
      ]
    }
  ]
}

export default nextConfig

