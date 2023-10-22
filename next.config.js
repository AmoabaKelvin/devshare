/** @type {import('next').NextConfig} */
const nextConfig = {
}

const removeImports = require('next-remove-imports')()


// module.exports = nextConfig

module.exports = removeImports(nextConfig, {
  experimental: {
    esmExternals: true,
  }
})