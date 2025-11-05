import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // ← これが重要！
  images: {
    unoptimized: true, // ← next exportでは画像最適化を無効化
  },
  basePath: `/${process.env.GITHUB_REPOSITORY?.split("/")[1] || ""}`,
};

export default nextConfig;
