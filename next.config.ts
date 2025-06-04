import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'cdn.dummyjson.com',
      'upload.wikimedia.org',
      'http2.mlstatic.com',
      'commons.wikimedia.org',
    ],
  },
};

export default nextConfig;
