import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 配置
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // 禁用 React strict mode 以避免一些问题
  reactStrictMode: true,
};

export default nextConfig;