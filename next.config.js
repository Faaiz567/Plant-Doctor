/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['*'], // This allows Image component to work with blob URLs
    },
  }
  
  module.exports = nextConfig