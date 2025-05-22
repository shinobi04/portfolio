import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["github.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  typescript: {
    // Disable TypeScript errors during build for production deployment
    ignoreBuildErrors: false,
  },
  eslint: {
    // Disable ESLint errors during build for production deployment
    ignoreDuringBuilds: false,
  },
  poweredByHeader: false,
};

export default nextConfig;
