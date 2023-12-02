/** @type {import('next').NextConfig} */
const runtimeCaching = require("next/cache")
const withPWA = require('next-pwa')({
  dest: 'public', 
  register: true,
  skipWaiting: true,
  runtimeCaching
})

const nextConfig = withPWA({
  reactStrictMode: false
})

module.exports = nextConfig
