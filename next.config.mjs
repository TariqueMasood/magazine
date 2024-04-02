/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'api.projectleadersmagazine.com',
            port: '8000',
          },
        ],
      },
};

export default nextConfig;
