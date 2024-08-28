/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", 's3-us-west-2.amazonaws.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
