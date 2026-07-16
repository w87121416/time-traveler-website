import { withBasePath } from "./site-config";

const mobileLinks = [
  { href: withBasePath("/about/"), label: "关于我们" },
  { href: "#daily", label: "产品体验" },
  { href: "#skills", label: "Skill" },
  { href: "#travel", label: "旅行回忆" },
  { href: "#film", label: "宣传片" },
  { href: withBasePath("/privacy/"), label: "官网隐私说明" },
  { href: withBasePath("/safety/"), label: "AI 安全说明" },
];

export default function MobileNav() {
  return (
    <details className="mobile-nav">
      {/* 使用原生 details 保证无脚本、键盘和触控环境都能打开菜单。 */}
      <summary aria-label="打开主菜单">
        <span>菜单</span>
        <i aria-hidden="true" />
      </summary>
      <nav aria-label="移动端主导航">
        {mobileLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </details>
  );
}
