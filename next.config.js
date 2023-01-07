/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["matanyemini.s3.eu-north-1.amazonaws.com", "d2ldb6hpndi77k.cloudfront.net"],
        minimumCacheTTL: 60 * 60 * 24 * 14, // 14days
    },
    swcMinify: true,
};

module.exports = nextConfig;
