/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: false,
})

const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = withPWA(nextConfig) 
