import { absoluteSiteUrl } from "./site-config";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${absoluteSiteUrl("/")}#organization`,
      legalName: "南京形而不器科技有限公司",
      name: "时光旅人",
      taxID: "91320191MAELQ1L0XQ",
      url: absoluteSiteUrl("/"),
      email: "414011506@qq.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CN",
        addressRegion: "江苏省",
        addressLocality: "南京市",
        streetAddress:
          "中国（江苏）自由贸易试验区南京片区七里桥北路1号南京江北新区人力资源服务产业园一期17栋106-707室",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${absoluteSiteUrl("/")}#website`,
      name: "时光旅人",
      alternateName: "Time Traveler",
      url: absoluteSiteUrl("/"),
      inLanguage: "zh-CN",
      description: "住在电脑桌面上的 AI 旅伴官方预览网站。",
      publisher: { "@id": `${absoluteSiteUrl("/")}#organization` },
    },
    {
      "@type": "VideoObject",
      "@id": absoluteSiteUrl("/#video"),
      name: "时光旅人官方宣传片",
      description: "从桌面陪伴、Skill 到旅行回忆，看见一段正在发生的陪伴。",
      thumbnailUrl: [absoluteSiteUrl("/images/pv-poster.jpg")],
      contentUrl: absoluteSiteUrl("/media/time-traveler-pv-web.mp4"),
      uploadDate: "2026-07-15",
      duration: "PT1M17S",
      inLanguage: "zh-CN",
      isPartOf: { "@id": `${absoluteSiteUrl("/")}#website` },
    },
  ],
};

export default function StructuredData() {
  // 替换尖括号，避免结构化数据被意外解释为脚本结束标签。
  const json = JSON.stringify(structuredData).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
