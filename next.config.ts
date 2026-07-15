import type { NextConfig } from "next";

// GitHub Pages 的项目站点位于仓库子路径，构建时由 Actions 注入。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  // GitHub Pages 没有图片优化服务器，图片保持静态文件输出。
  images: {
    unoptimized: true,
  },
  // 静态官网不引用 Cloudflare 数据库与 Worker，单独的类型范围避免托管代码干扰 Pages 构建。
  typescript: {
    tsconfigPath: "./tsconfig.github.json",
  },
};

export default nextConfig;
