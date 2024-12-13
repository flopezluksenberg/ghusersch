/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DOMAIN_URL: process.env.DOMAIN_URL || 'http://localhost:3000',
  },
};

export default nextConfig;
