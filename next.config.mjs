/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer, dev }) => {
    // Completely exclude ioredis during build
    if (!dev) {
      config.externals = config.externals || []
      if (isServer) {
        config.externals.push('ioredis')
      }
      config.resolve.alias = {
        ...config.resolve.alias,
        'ioredis': false,
      }
    }
    return config
  },
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
  ],
  redirects: async () => [
    // Legacy category redirects to new trading/investing focus
    { source: '/category/culture', destination: '/category/investing', permanent: true },
    { source: '/category/funny', destination: '/category/news', permanent: true },
    { source: '/category/interesting', destination: '/category/investing', permanent: true },
    { source: '/category/music', destination: '/category/news', permanent: true },
    { source: '/category/sports', destination: '/category/trading', permanent: true },
    // Also redirect old paths without /category prefix
    { source: '/culture', destination: '/category/investing', permanent: true },
    { source: '/funny', destination: '/category/news', permanent: true },
    { source: '/interesting', destination: '/category/investing', permanent: true },
    { source: '/music', destination: '/category/news', permanent: true },
    { source: '/sports', destination: '/category/trading', permanent: true }
  ]
}

export default nextConfig

