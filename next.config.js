/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/l7emcy8r/production/**',
      },
    ],
  },
  build: {
    extend(config, {}) {
        config.node = {
            fs: 'empty'
        }
    }
  },
}

module.exports = nextConfig
