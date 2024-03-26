/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'projectleadersmagazine.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
