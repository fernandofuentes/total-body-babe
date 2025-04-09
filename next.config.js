/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // useWasmEdge: true,
    // swcMinify: false
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig;