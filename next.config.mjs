/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/PortFolio',
    assetPrefix: '/PortFolio/',
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: '/PortFolio',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

export default nextConfig;
