import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // 本番環境では静的エクスポートを有効化
  ...(isProd && { output: "export" }),

  images: {
    // 静的エクスポート時は画像最適化を無効化
    unoptimized: isProd,
  },

  // GitHub Pages の場合だけ basePath を設定
  // basePath: isProd
  //   ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] || ""}`
  //   : "",
};

export default nextConfig;
