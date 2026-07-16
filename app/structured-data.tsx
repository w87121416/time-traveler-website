import { absoluteSiteUrl } from "./site-config";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${absoluteSiteUrl("/")}#website`,
      name: "时光旅人",
      alternateName: "Time Traveler",
      url: absoluteSiteUrl("/"),
      inLanguage: "zh-CN",
      description: "住在电脑桌面上的 AI 旅伴官方预览网站。",
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
