import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //accept image from anywhere
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },

    ],
  },
};

export default nextConfig;
