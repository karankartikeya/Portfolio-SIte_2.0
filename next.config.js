/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cd.sanity.io',
        pathname: '/images/bf01b9er/production/**',
      },
    ],
  },
}

module.exports = nextConfig
