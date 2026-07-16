import "../privacy/privacy.css";

export default function SafetyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // 安全说明属于独立长文页面，复用隐私页的高可读性版式。
  return children;
}
