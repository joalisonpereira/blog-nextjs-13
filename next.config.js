/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "i.dummyjson.com",
      },
    ],
  },
};

module.exports = nextConfig;
