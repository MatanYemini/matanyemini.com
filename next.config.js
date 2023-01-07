/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["matanyemini.s3.eu-north-1.amazonaws.com", "d2ldb6hpndi77k.cloudfront.net"],
        minimumCacheTTL: 60 * 60, // 1hr
    },
    swcMinify: true,
};

module.exports = nextConfig;
