import type { Metadata } from "next";
import "./globals.css";
import "./privacy/privacy.css";
import { absoluteSiteUrl, publicSiteUrl } from "./site-config";

// GitHub Pages 只提供静态托管，因此元信息在构建时一次性生成，避免请求时读取域名。
export const metadata: Metadata = {
  metadataBase: new URL(`${publicSiteUrl}/`),
  title: "时光旅人｜住在桌面上的 AI 旅伴",
  description:
    "时光旅人是一位住在桌面上的 AI 陪伴角色。你可以在聊天框添加不同 Skill，让它切换成学习搭子、旅行向导或故事角色。",
  applicationName: "时光旅人",
  keywords: ["时光旅人", "AI 陪伴", "桌面宠物", "桌面伙伴", "AI 角色", "AI Skill", "角色扮演"],
  alternates: {
    canonical: `${publicSiteUrl}/`,
  },
  icons: {
    icon: absoluteSiteUrl("/favicon.png"),
    shortcut: absoluteSiteUrl("/favicon.png"),
    apple: absoluteSiteUrl("/favicon.png"),
  },
  openGraph: {
    title: "时光旅人｜让桌面，多一位懂你的旅伴。",
    description: "陪你度过日常，也能通过 Skill 切换不同身份，和你一起收集旅途与时间里的共同记忆。",
    type: "website",
    locale: "zh_CN",
    siteName: "时光旅人",
    url: `${publicSiteUrl}/`,
    images: [
      {
        url: absoluteSiteUrl("/og.png"),
        width: 1732,
        height: 908,
        alt: "时光旅人 AI 桌面陪伴角色",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "时光旅人｜让桌面，多一位懂你的旅伴。",
    description: "住在桌面上的 AI 旅伴。",
    images: [absoluteSiteUrl("/og.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
