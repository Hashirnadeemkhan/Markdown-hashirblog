/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Ensure strict mode is enabled
  swcMinify: true,       // Use SWC for minification
  experimental: {
    appDir: true,        // Enable experimental features if you're using the app directory
  },
};

export default nextConfig;
