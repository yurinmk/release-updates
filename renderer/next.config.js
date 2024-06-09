/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    return config
  },
}
