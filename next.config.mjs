/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `${process.env.BACKEND_URL}/api/:path*`,
            },
        ];
    },
};

export default nextConfig;
