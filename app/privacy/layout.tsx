import "./privacy.css";

export default function PrivacyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // 长篇隐私页的专属样式只在该路由加载，避免增加官网首屏负担。
  return children;
}
