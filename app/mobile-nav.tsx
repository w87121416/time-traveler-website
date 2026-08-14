"use client";

import { useEffect, useRef, useState } from "react";
import { withBasePath } from "./site-config";

const PC_DOWNLOAD_OPENED = "time-traveler:pc-download-opened";
const MOBILE_NAV_OPENED = "time-traveler:mobile-nav-opened";

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
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 下载面板打开时主动收起主菜单，避免两个浮层在平板宽度上互相遮挡。
    const closeMenu = () => {
      if (detailsRef.current) detailsRef.current.open = false;
    };

    window.addEventListener(PC_DOWNLOAD_OPENED, closeMenu);
    return () => window.removeEventListener(PC_DOWNLOAD_OPENED, closeMenu);
  }, []);

  const closeMenu = () => {
    if (detailsRef.current) detailsRef.current.open = false;
  };

  return (
    <details
      className="mobile-nav"
      ref={detailsRef}
      onToggle={(event) => {
        const open = event.currentTarget.open;
        setIsOpen(open);
        // 主菜单打开时通知下载入口收起，保持移动端顶部一次只显示一个浮层。
        if (open) window.dispatchEvent(new Event(MOBILE_NAV_OPENED));
      }}
    >
      {/* 使用原生 details 保证无脚本、键盘和触控环境都能打开菜单。 */}
      <summary aria-label={isOpen ? "关闭主菜单" : "打开主菜单"}>
        <span>菜单</span>
        <i aria-hidden="true" />
      </summary>
      <nav aria-label="移动端主导航">
        {mobileLinks.map((link) => (
          <a href={link.href} key={link.href} onClick={closeMenu}>
            {link.label}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </details>
  );
}
