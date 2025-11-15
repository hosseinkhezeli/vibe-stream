import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  typescript: {
    ignoreBuildErrors: false
  },
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
