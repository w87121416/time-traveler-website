import type { MetadataRoute } from "next";
import { absoluteSiteUrl } from "./site-config";

// GitHub Pages 只接收静态文件，明确让 Next 在构建阶段生成 robots.txt。
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // 官网当前均为公开静态页面，允许搜索引擎抓取；单页是否收录仍由页面元信息控制。
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // 使用公开站点绝对地址，兼容自定义域名与备用 GitHub Pages 构建地址。
    sitemap: absoluteSiteUrl("/sitemap.xml"),
  };
}
