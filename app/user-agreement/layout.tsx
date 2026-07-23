import "../privacy/privacy.css";

export default function UserAgreementLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // 中国大陆版用户协议复用统一法律页面样式，保持桌面与手机端阅读体验一致。
  return children;
}
