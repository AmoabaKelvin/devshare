/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    domains: ['avatars.githubusercontent.com']
  }
}

const removeImports = require('next-remove-imports')()

module.exports = removeImports(nextConfig)
// module.exports = nextConfig

// module.exports = nextConfig;
