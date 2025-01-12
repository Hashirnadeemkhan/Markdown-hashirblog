/** @type {import('next').NextConfig} */
const nextConfig = {
  // Increase the memory limit for the build process
  experimental: {
    largePageDataBytes: 128 * 1000, // 128KB
  },
  // Disable static exports if you're not using them
  output: 'standalone',
};

export default nextConfig;

