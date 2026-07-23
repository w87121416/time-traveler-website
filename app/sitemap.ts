import type { MetadataRoute } from "next";
import { absoluteSiteUrl } from "./site-config";

// GitHub Pages 只接收静态文件，明确让 Next 在构建阶段生成 sitemap.xml。
export const dynamic = "force-static";

const publicPages = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy/", changeFrequency: "monthly", priority: 0.5 },
  { path: "/safety/", changeFrequency: "monthly", priority: 0.5 },
  { path: "/terms/", changeFrequency: "monthly", priority: 0.4 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  // 两份客户端协议仍是 noindex 的未生效公开预览稿，因此只收录已生效的官网说明与公开安全页。
  return publicPages.map(({ path, changeFrequency, priority }) => ({
    url: absoluteSiteUrl(path),
    changeFrequency,
    priority,
  }));
}
