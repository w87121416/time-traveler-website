import type { Metadata } from "next";
import OptimizedImage from "../optimized-image";
import { absoluteSiteUrl, withBasePath } from "../site-config";

export const metadata: Metadata = {
  title: "关于我们｜时光旅人",
  description: "了解时光旅人团队正在打造的 AI 桌面陪伴产品，以及我们对长期陪伴、角色与共同记忆的理解。",
  alternates: {
    canonical: absoluteSiteUrl("/about/"),
  },
  openGraph: {
    title: "关于我们｜时光旅人",
    description: "让 AI 陪伴从一段对话，变成住进日常的一段关系。",
    url: absoluteSiteUrl("/about/"),
    images: [absoluteSiteUrl("/og.png")],
  },
  twitter: {
    card: "summary_large_image",
    title: "关于我们｜时光旅人",
    description: "让 AI 陪伴从一段对话，变成住进日常的一段关系。",
    images: [absoluteSiteUrl("/og.png")],
  },
};

const productIdeas = [
  {
    index: "01",
    title: "先成为一种存在",
    text: "它常驻桌面，理解你正在经历的日常，也知道什么时候回应、什么时候安静。",
  },
  {
    index: "02",
    title: "再拥有不同身份",
    text: "通过 Skill，同一位旅伴可以成为专注搭档、倾听者、旅行向导或故事角色。",
  },
  {
    index: "03",
    title: "最后留下共同经历",
    text: "对话、情绪、旅行、照片与纪念品，会慢慢沉淀成只属于你们的记忆。",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="about-page">
      {/* 关于页保持品牌感，但信息控制在两屏内，避免再次拉长主页。 */}
      <header className="about-nav">
        <a className="about-brand" href={withBasePath("/")} aria-label="返回时光旅人官网">
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span>时光旅人</span>
        </a>
        <span>ABOUT US · 2026</span>
        <a href={withBasePath("/")}>返回主页 ↗</a>
      </header>

      <section className="about-hero" id="content-start" tabIndex={-1}>
        <div className="about-hero-copy">
          <p><span /> ABOUT TIME TRAVELER</p>
          <h1>让 AI 陪伴，<br />真正住进日常。</h1>
          <div className="about-statement">
            <strong>我们正在创造“时光旅人”——一位住在电脑桌面上的 AI 旅伴。</strong>
            <p>
              我们相信，陪伴不应该只发生在打开聊天框的几分钟里。它可以有性格、有回应，也能和你一起经历时间，把普通的一天慢慢变成共同故事。
            </p>
          </div>
        </div>
        <figure className="about-visual">
          <OptimizedImage
            src="/images/companion-hero.png"
            alt="时光旅人首位桌面旅伴朝朝"
            width="1047"
            height="1800"
          />
          <figcaption><span>FIRST COMPANION</span><strong>朝朝</strong><small>一段长期陪伴的开始</small></figcaption>
        </figure>
      </section>

      <section className="about-product">
        <header>
          <span>WHAT WE BUILD</span>
          <h2>不是把 AI 放进角色里，<br />而是让角色拥有可以继续的关系。</h2>
        </header>
        <div className="about-ideas">
          {productIdeas.map((idea) => (
            <article key={idea.index}>
              <span>{idea.index}</span>
              <h3>{idea.title}</h3>
              <p>{idea.text}</p>
            </article>
          ))}
        </div>
        <div className="about-roadmap">
          <div><span>NOW</span><strong>PC 桌面版优先</strong></div>
          <i aria-hidden="true" />
          <div><span>NEXT</span><strong>更多角色与 Skill</strong></div>
          <i aria-hidden="true" />
          <div><span>RESERVED</span><strong>iOS / Android</strong></div>
        </div>
        <div className="about-company">
          <div>
            <span>OPERATOR</span>
            <strong>南京形而不器科技有限公司</strong>
          </div>
          <p>
            我们在南京打造“时光旅人”。官网角色、视觉与宣传素材均由团队自主研发与制作；产品目前处于公开预览阶段，PC 客户端尚未开放下载。
          </p>
          <a href="mailto:414011506@qq.com">414011506@qq.com ↗</a>
        </div>
      </section>

      </main>
      <footer className="about-footer">
        <div>
          <span>TIME TRAVELER</span>
          <strong>陪你经过时间，也陪你留下时间。</strong>
        </div>
        <nav aria-label="关于页相关链接">
          <a href={withBasePath("/")}>浏览产品主页</a>
          <a href={withBasePath("/privacy/")}>官方网站隐私说明</a>
          <a href={withBasePath("/terms/")}>官方网站使用条款</a>
          <a href={withBasePath("/safety/")}>AI 安全说明</a>
        </nav>
        <p>© 2026 南京形而不器科技有限公司 · 联系地址详见官方网站隐私说明。</p>
      </footer>
    </>
  );
}
