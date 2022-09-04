/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      layoutRaw: true,
      allowFutureImage: true,
      unoptimized: true,
    },
  },
}

module.exports = nextConfig
