/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: false,
  register: true
})

const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = withPWA(nextConfig) 
