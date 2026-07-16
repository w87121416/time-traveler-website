import type { Metadata } from "next";
import { ProductPrivacyDraft } from "../privacy/page";
import { absoluteSiteUrl } from "../site-config";

export const metadata: Metadata = {
  title: "PC 产品隐私政策（待发布）｜时光旅人",
  description:
    "时光旅人 PC 桌面陪伴产品的数据与系统权限设计基线。产品尚未开放下载，本页面尚未生效。",
  alternates: {
    canonical: absoluteSiteUrl("/product-privacy/"),
  },
  // 待研发与法务按真实实现审定后才允许进入搜索索引。
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "PC 产品隐私政策（待发布）｜时光旅人",
    description: "PC 客户端尚未开放；本页公开产品拟采用的数据最小化和用户控制方案。",
    url: absoluteSiteUrl("/product-privacy/"),
    images: [absoluteSiteUrl("/og.png")],
  },
};

export default function ProductPrivacyPage() {
  return <ProductPrivacyDraft />;
}
