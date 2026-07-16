import type { CSSProperties } from "react";
import { withBasePath } from "./site-config";
import CompanionProfile from "./companion-profile";
import { PcDownloadMenu, PcDownloadStickyTrigger, PcDownloadTrigger } from "./download-menu";
import MobileNav from "./mobile-nav";
import OptimizedImage from "./optimized-image";
import SkillShowcase from "./skill-showcase";

const featureMoments = [
  {
    number: "01",
    title: "常驻桌面",
    text: "工作、学习、游戏或追剧时，它会安静待在桌面一角，不打扰，也不缺席。",
  },
  {
    number: "02",
    title: "真实回应",
    text: "发呆、熬夜、摸鱼，甚至只是路过屏幕，它都会用自己的方式给出反应。",
  },
  {
    number: "03",
    title: "技能身份",
    text: "在聊天框添加不同 Skill，让同一位伙伴切换成学习搭子、旅行向导或故事角色。",
  },
  {
    number: "04",
    title: "旅行回忆",
    text: "安排伙伴外出旅行，等待它带回照片、见闻、纪念品，以及你们共同的故事。",
  },
];

const travelCards = [
  {
    image: "/images/travel-pavilion.jpg",
    title: "城市漫游",
    meta: "清晨 · 旅途记录 01",
    className: "travel-card travel-card-wide",
  },
  {
    image: "/images/travel-canal.jpg",
    title: "水巷来信",
    meta: "午后 · 旅途记录 02",
    className: "travel-card travel-card-tall",
  },
  {
    image: "/images/travel-gateway.jpg",
    title: "山门以外",
    meta: "晴日 · 旅途记录 03",
    className: "travel-card",
  },
  {
    image: "/images/travel-lake.jpg",
    title: "湖边小憩",
    meta: "微风 · 旅途记录 04",
    className: "travel-card travel-card-wide",
  },
  {
    image: "/images/travel-wall.jpg",
    title: "穿过旧城",
    meta: "傍晚 · 旅途记录 05",
    className: "travel-card",
  },
];

const faqs = [
  {
    question: "时光旅人目前支持哪些平台？",
    answer:
      "当前以 PC 桌面版为第一阶段，具体支持的操作系统与最低配置将在测试渠道确认后公布；iOS 与 Android 仍处于后续规划阶段。",
  },
  {
    question: "桌面伙伴会做些什么？",
    answer:
      "它会常驻桌面，陪你工作、学习、游戏与追剧；也会通过动作、对话与情绪反馈，回应不同的日常时刻。",
  },
  {
    question: "Skill 会怎样改变旅伴？",
    answer:
      "旅伴本身不会被替换。你可以在 AI 聊天框中添加或切换 Skill，让它进入专注搭档、旅行向导、故事角色等不同身份，并使用对应的能力与说话方式陪伴你。",
  },
  {
    question: "之后还会有更多角色吗？",
    answer:
      "会。更多设定、性格与外观风格不同的伙伴将随版本陆续加入，你可以选择更适合自己的陪伴方式。",
  },
  {
    question: "如何获取 PC 版？",
    answer:
      "PC 版尚未开放公众下载。测试或正式发布渠道确认后，官网会同步提供经过验证的下载地址、版本信息与安全校验说明。",
  },
];

export default function Home() {
  // CSS 背景图也需要带上 GitHub Pages 的仓库子路径。
  const pageAssetVariables = {
    "--hero-day-image": `url("${withBasePath("/images/travel-day.webp")}")`,
    "--travel-night-image": `url("${withBasePath("/images/travel-night.webp")}")`,
  } as CSSProperties;

  return (
    <>
      <main style={pageAssetVariables}>
      {/* 首屏：让角色成为品牌主角，而不是普通产品配图。 */}
      <section className="hero" id="top">
        <div className="hero-sky" aria-hidden="true" />
        <header className="site-nav">
          <a className="brand" href="#top" aria-label="时光旅人首页">
            <span className="brand-mark" aria-hidden="true">
              <i />
            </span>
            <span>时光旅人</span>
          </a>

          <nav className="nav-links" aria-label="主导航">
            <a href={withBasePath("/about/")}>关于我们</a>
            <a href="#daily">产品体验</a>
            <a href="#skills">Skill</a>
            <a href="#travel">旅行回忆</a>
            <a href="#film">宣传片</a>
          </nav>

          <MobileNav />

          {/* PC 下载改为顶部轻量弹层；正式地址确认后可直接替换二维码与按钮链接。 */}
          <PcDownloadMenu />
        </header>

        <div className="hero-inner" id="content-start" tabIndex={-1}>
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> AI 桌面陪伴角色 · PC 版
            </p>
            <h1>
              <span>时光</span>
              <span className="hero-title-accent">旅人</span>
            </h1>
            <p className="hero-lead">让桌面，多一位懂你的旅伴。</p>
            <p className="hero-description">
              陪你工作、学习、游戏和发呆，也在一次次回应里，和你慢慢写下共同的故事。
            </p>
            <div className="hero-actions">
              <PcDownloadTrigger />
              <a className="button button-ghost" href="#film">
                <span className="play-dot" aria-hidden="true">▶</span> 观看宣传片
              </a>
            </div>
            <div className="hero-note">
              <span className="online-dot" />
              PC 版本与测试渠道确认中 · 暂未开放公众下载
            </div>
          </div>

          <div className="hero-stage" aria-label="时光旅人角色展示">
            <div className="desktop-window" aria-hidden="true">
              <div className="window-bar">
                <span />
                <span />
                <span />
                <small>TIME TRAVELER · DESKTOP</small>
              </div>
              <div className="window-scenery" />
            </div>
            <div className="character-halo" aria-hidden="true" />
            <OptimizedImage
              className="hero-character"
              src="/images/companion-hero.png"
              alt="银发白衣的时光旅人桌面伙伴"
              width="1047"
              height="1800"
              fetchPriority="high"
            />
            <div className="floating-chat">
              <span className="chat-avatar" aria-hidden="true">时</span>
              <div>
                <small>旅伴消息 · 刚刚</small>
                <p>今天也辛苦了。要一起看会儿云吗？</p>
              </div>
            </div>
            <div className="memory-stamp" aria-hidden="true">
              <span>MEMORY 007</span>
              <strong>18:42</strong>
              <small>一段正在发生的陪伴</small>
            </div>
          </div>
        </div>

        <a className="scroll-cue" href="#companion">
          <span>向下 · 开始一段共同旅程</span>
          <i aria-hidden="true" />
        </a>
      </section>

      {/* 品牌认知：先讲陪伴价值，再解释产品能力。 */}
      <section className="manifesto" id="companion">
        <div className="section-kicker">
          <span>01</span>
          <p>住在桌面上的 AI 旅伴</p>
        </div>
        <div className="manifesto-grid">
          <h2>
            它不只是屏幕上
            <br />
            <em>一个可爱的角色。</em>
          </h2>
          <div className="manifesto-copy">
            <p>
              它会回应，会成长，也会从远方带回只属于你们的记忆。陪伴从来不是一个孤立的功能，而是一段一起经过的时间。
            </p>
            <a href="#daily">看看它如何陪伴你 <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="feature-rail">
          {featureMoments.map((feature) => (
            <article className="feature-item" key={feature.number}>
              <span>{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 日常场景：用产品画面建立“它真的住在桌面”的可信感。 */}
      <section className="daily-section" id="daily">
        <div className="daily-glow" aria-hidden="true" />
        <div className="daily-copy">
          <div className="section-kicker section-kicker-dark">
            <span>02</span>
            <p>陪在每一个日常时刻</p>
          </div>
          <h2>它真的，<br />住进了你的桌面。</h2>
          <p className="daily-lead">
            工作时安静守在角落，摸鱼时主动和你搭话。你发呆、熬夜或追剧时，它也会给出属于自己的反应。
          </p>
          <div className="moment-list">
            <div><span>09:30</span><p>开始工作，安静陪你进入状态。</p></div>
            <div><span>15:08</span><p>发现你在摸鱼，忍不住来搭话。</p></div>
            <div><span>23:47</span><p>夜已经深了，它还在桌面等你。</p></div>
          </div>
          <div className="daily-proof-row" aria-label="桌面陪伴能力">
            <span><i /> 动作反馈</span>
            <span><i /> 情绪回应</span>
            <span><i /> 日常陪伴</span>
          </div>
        </div>

        <figure className="desktop-scene">
          <div className="scene-topbar">
            <span>DESKTOP COMPANION</span>
            <span>在线 · 正在陪伴</span>
          </div>
          <OptimizedImage
            src="/images/companion-scene.jpg"
            alt="桌面场景中的时光旅人角色"
            width="1445"
            height="1700"
            loading="lazy"
          />
          <div className="scene-reaction-card">
            <small>COMPANION STATUS</small>
            <strong>安静守候</strong>
            <span><i /> 等你忙完，再来和你说话</span>
          </div>
          <div className="scene-pulse-card" aria-hidden="true">
            <span>回应节奏</span>
            <div><i /><i /><i /><i /><i /><i /></div>
            <small>SOFT</small>
          </div>
          <figcaption>
            <span>日常模式</span>
            <p>“我会安静一点。等你忙完，再和我说说今天吧。”</p>
          </figcaption>
        </figure>
      </section>

      {/* Skill 系统：旅伴不变，通过聊天框切换这一次相处的身份与能力。 */}
      <section className="skills-section" id="skills">
        <div className="skills-signal" aria-hidden="true">SKILLS</div>
        <div className="skills-copy">
          <div className="section-kicker">
            <span>03</span>
            <p>为聊天添加不同 Skill</p>
          </div>
          <h2>同一个它，<br /><em>不止一种陪伴方式。</em></h2>
          <p className="skills-lead">
            Skill 可以为当前对话载入新的能力与玩法，不会打断你和朝朝已经建立的记忆。它进入聊天后，会自然地参与理解、回应和陪伴。
          </p>
          <p className="skills-note"><i /> 旅伴不变，Skill 只拓展她理解和回应你的方式。</p>
        </div>

        <SkillShowcase />
      </section>

      {/* 角色档案使用正式立绘与可交互性格信号，替代制作阶段的三视图原型稿。 */}
      <section className="personality-section">
        <div className="personality-visual">
          <CompanionProfile />
        </div>
        <div className="personality-copy">
          <div className="section-kicker">
            <span>04</span>
            <p>每一种陪伴，都有自己的性格</p>
          </div>
          <h2>不是标准答案，<br />是独一份的相处方式。</h2>
          <p>
            朝朝是你遇见的第一位旅伴。她并不是一张固定立绘，而会在安静守候、主动搭话与带着记忆回应之间，形成属于你们的相处节奏。
          </p>
          <div className="personality-tags" aria-label="角色性格示例">
            <span>安静守候</span>
            <span>主动搭话</span>
            <span>细腻回应</span>
            <span>持续成长</span>
          </div>
          <blockquote>
            “有时我会主动和你说话；有时，我只是想安静地待在你身边。”
          </blockquote>
          <p className="future-note">朝朝 · 首位旅伴 / 更多角色与设定将随版本持续加入。</p>
        </div>
      </section>

      <section className="memory-section">
        <div className="memory-image-wrap">
          <OptimizedImage
            src="/images/aquarium-memory.jpg"
            alt="角色在水族馆与金鱼相遇的旅行画面"
            width="1672"
            height="940"
            loading="lazy"
          />
          <div className="memory-fragments" aria-label="共同记忆中的照片碎片">
            <figure>
              <OptimizedImage src="/images/travel-pavilion.jpg" alt="旅途中经过的水榭" width="1500" height="844" loading="lazy" />
              <figcaption>远行 · 01</figcaption>
            </figure>
            <figure>
              <OptimizedImage src="/images/travel-canal.jpg" alt="旅途中经过的水巷" width="1500" height="844" loading="lazy" />
              <figcaption>远行 · 02</figcaption>
            </figure>
            <figure>
              <OptimizedImage src="/images/travel-lake.jpg" alt="旅途中看见的湖面" width="1500" height="844" loading="lazy" />
              <figcaption>远行 · 03</figcaption>
            </figure>
          </div>
          <div className="memory-photo-meta">
            <span>旅途回忆 · 18:42</span>
            <p>“玻璃后面的光像水一样。下次，也想和你一起看。”</p>
          </div>
        </div>
        <div className="memory-copy">
          <span className="memory-index">05 / MEMORY</span>
          <h2>相处越久，<br />故事越长。</h2>
          <p>
            动作反馈、情绪连接与日常小事会一点点沉淀下来。你们共享的不只是屏幕前的此刻，还有一册不断长大的共同记忆。
          </p>
          <div className="memory-counter">
            <div><i>01</i><strong>照片</strong><span>旅途中看见的风景</span></div>
            <div><i>02</i><strong>纪念品</strong><span>带回桌面的惊喜</span></div>
            <div><i>03</i><strong>见闻</strong><span>只讲给你的故事</span></div>
          </div>
          <p className="memory-footnote"><i /> 每一次回应，都可能成为下一段故事的开头。</p>
        </div>
      </section>

      {/* 旅行区采用夜幕画布与照片墙，强化“共同记忆”的产品差异。 */}
      <section className="travel-section" id="travel">
        <div className="travel-night-bg" aria-hidden="true" />
        <div className="travel-heading">
          <div className="section-kicker section-kicker-dark">
            <span>06</span>
            <p>旅行、收集与共同经历</p>
          </div>
          <h2>它会暂时离开，<br /><em>也会带着故事回来。</em></h2>
          <p>
            安排伙伴外出旅行。照片、纪念品、见闻与专属回忆，让陪伴从屏幕前延伸成一段真正共同走过的路。
          </p>
        </div>

        <div
          className="travel-gallery"
          role="region"
          aria-label="旅行回忆照片；在窄屏设备上可横向滚动"
          tabIndex={0}
        >
          {travelCards.map((card, index) => (
            <figure className={card.className} key={card.image}>
              <span className="photo-number">0{index + 1}</span>
              <OptimizedImage src={card.image} alt={card.title} width="1500" height="844" loading="lazy" />
              <figcaption>
                <strong>{card.title}</strong>
                <span>{card.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="travel-ticker" aria-hidden="true">
          <span>PHOTO</span><i />
          <span>SOUVENIR</span><i />
          <span>STORY</span><i />
          <span>MEMORY</span><i />
        </div>
      </section>

      <section className="film-section" id="film">
        <div className="film-heading">
          <div className="section-kicker">
            <span>07</span>
            <p>看见一段正在发生的陪伴</p>
          </div>
          <h2>有些陪伴，<br />看过以后就会明白。</h2>
          <p>从一个动作、一次回应，到每天打开电脑时的那份期待。</p>
        </div>
        <div className="film-media-grid">
          <div className="film-frame">
            <div className="film-labels" aria-hidden="true">
              <span>OFFICIAL PROMOTION VIDEO</span>
              <span>01:17 · 1080P HD</span>
            </div>
            <video
              controls
              playsInline
              preload="metadata"
              poster={withBasePath("/images/pv-poster.webp")}
              aria-label="时光旅人官方宣传片"
              aria-describedby="film-accessibility-note"
            >
              {/* 单一网页快启版兼顾 1080p 清晰度与移动网络体积，避免选择到 47MB 原片。 */}
              <source src={withBasePath("/media/time-traveler-pv-web.mp4")} type="video/mp4" />
              你的浏览器暂不支持视频播放。
            </video>
            <details className="film-transcript" id="film-accessibility-note">
              <summary>宣传片内容概览</summary>
              <p>
                银发旅伴出现在明亮的日常空间，以动作与表情回应用户，呈现一位 AI 角色陪伴工作、休息与生活片刻的核心氛围。产品能力的完整文字说明可在本页“产品体验”“Skill”与“旅行回忆”章节阅读。
              </p>
            </details>
          </div>

          <figure className="film-playtest-poster">
            <OptimizedImage
              src="/images/desktop-playtest-poster.jpg"
              alt="时光旅人桌面陪伴测试海报"
              width="748"
              height="896"
              loading="lazy"
            />
            <figcaption>
              <span>PLAYTEST POSTER · 2026</span>
              <strong>一位真正住进桌面的旅伴</strong>
              <p>桌面存在 · 智能互动 · Skill 身份 · 共同记忆</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-heading">
          <span>FAQ / 08</span>
          <h2>关于时光旅人</h2>
          <p>先回答你可能最关心的几件事。</p>
          <div className="faq-assurance">
            <span><i /> 独立隐私页面</span>
            <span><i /> PC 版优先上线</span>
            <span><i /> 移动端入口已预留</span>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>
                <span>0{index + 1}</span>
                <strong>{faq.question}</strong>
                <i aria-hidden="true">＋</i>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      </main>
      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark brand-mark-footer" aria-hidden="true"><i /></span>
          <h2>时光旅人</h2>
          <p>让桌面，多一位懂你的旅伴。</p>
        </div>
        <div className="footer-meta">
          <div className="footer-links">
            <a href={withBasePath("/about/")}>关于我们 ↗</a>
            <a href={withBasePath("/privacy/")}>产品隐私草案 ↗</a>
            <a href="#top">返回顶部 ↑</a>
          </div>
          <p>当前为公开预览站；产品隐私草案仍需按真实技术实现与运营主体审定。</p>
          <span>© 2026 TIME TRAVELER</span>
        </div>
      </footer>
      <PcDownloadStickyTrigger />
    </>
  );
}
