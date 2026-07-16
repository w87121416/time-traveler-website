import type { Metadata } from "next";
import { withBasePath } from "./site-config";

export const metadata: Metadata = {
  title: "页面未找到｜时光旅人",
  description: "你访问的页面暂时不在这段旅程中，请返回时光旅人官网继续探索。",
  // 错误页不进入搜索结果，页面内链接仍允许搜索引擎继续发现。
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="about-page" style={{ minHeight: "100svh" }}>
      {/* 复用关于页的品牌导航与视觉语言，避免为单页增加新的全局样式。 */}
      <header className="about-nav">
        <a className="about-brand" href={withBasePath("/")} aria-label="返回时光旅人官网">
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span>时光旅人</span>
        </a>
        <span>LOST IN TIME · 404</span>
        <a href={withBasePath("/")}>返回主页 ↗</a>
      </header>

      <section
        className="about-hero"
        id="content-start"
        tabIndex={-1}
        style={{ minHeight: "100svh", gridTemplateColumns: "minmax(0, 1fr)" }}
      >
        <div className="about-hero-copy" style={{ maxWidth: "860px" }}>
          <p><span /> THIS MOMENT IS MISSING</p>
          <h1 style={{ fontSize: "clamp(112px, 20vw, 260px)", marginBottom: "32px" }}>404</h1>
          <div className="about-statement">
            <strong>这一页似乎偏离了时间轨道。</strong>
            <div>
              <p>链接可能已经移动、尚未开放，或只是旅途中短暂遗失的一段坐标。</p>
              <a
                className="nav-cta"
                href={withBasePath("/")}
                style={{ marginTop: "24px" }}
              >
                回到时光旅人主页 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
