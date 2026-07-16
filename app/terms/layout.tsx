import "../privacy/privacy.css";

export default function TermsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // 官网使用条款复用法律页面排版，避免为单独长文重复加载首页视觉组件。
  return children;
}
