/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    MONGODB_USERNAME: process.env.MONGODB_USERNAME,
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
};

module.exports = nextConfig;
