import type { MetadataRoute } from "next";
import { absoluteSiteUrl } from "./site-config";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  // 官网当前不安装产品本体；清单仅用于浏览器品牌展示与“添加到主屏幕”。
  return {
    name: "时光旅人｜AI 桌面旅伴",
    short_name: "时光旅人",
    description: "住在电脑桌面上的 AI 旅伴官方预览网站。",
    start_url: absoluteSiteUrl("/"),
    display: "standalone",
    background_color: "#f5f0e7",
    theme_color: "#080b18",
    lang: "zh-CN",
    icons: [
      {
        src: absoluteSiteUrl("/favicon.png"),
        sizes: "96x96",
        type: "image/png",
      },
    ],
  };
}
