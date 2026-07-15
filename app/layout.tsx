import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import "./privacy/privacy.css";

// 根据访问域名生成绝对分享地址，部署到新域名后无需手动修改社交卡片链接。
export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const ogImage = new URL("/og.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title: "时光旅人｜住在桌面上的 AI 旅伴",
    description:
      "时光旅人是一位住在桌面上的 AI 陪伴角色，陪你工作、学习与生活，也会从旅行中带回照片、纪念品和共同回忆。",
    applicationName: "时光旅人",
    keywords: ["时光旅人", "AI 陪伴", "桌面宠物", "桌面伙伴", "AI 角色"],
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
    openGraph: {
      title: "时光旅人｜让桌面，多一位懂你的旅伴。",
      description: "陪你度过日常，也和你一起收集旅途与时间里的共同记忆。",
      type: "website",
      locale: "zh_CN",
      siteName: "时光旅人",
      url: baseUrl,
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
    },
  };
}

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
