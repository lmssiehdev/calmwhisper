/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true
})

const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = withPWA(nextConfig) 
