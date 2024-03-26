/** @type {import('next').NextConfig} */
const nextConfig = {
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
