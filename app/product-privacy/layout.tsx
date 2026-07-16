import "../privacy/privacy.css";

export default function ProductPrivacyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // 待发布产品政策复用法律页面排版，但继续与官网首屏样式包分离。
  return children;
}
