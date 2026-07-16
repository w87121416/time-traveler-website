import type { MetadataRoute } from "next";
import { absoluteSiteUrl } from "./site-config";

// GitHub Pages 只接收静态文件，明确让 Next 在构建阶段生成 sitemap.xml。
export const dynamic = "force-static";

const publicPages = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about/", changeFrequency: "monthly", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  // 隐私页仍是 noindex 草案，因此暂不写入 sitemap；资料审定后两处必须同步开放。
  return publicPages.map(({ path, changeFrequency, priority }) => ({
    url: absoluteSiteUrl(path),
    changeFrequency,
    priority,
  }));
}
