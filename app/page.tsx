import type { CSSProperties } from "react";
import { withBasePath } from "./site-config";
import CompanionProfile from "./companion-profile";
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
      "当前官网以 PC 版为主，iOS 与 Android 的下载入口已经在页面结构中预留，正式开放后可以直接接入。",
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
      "PC 版下载地址与二维码将在正式链接确认后接入。当前页面已完整预留下载位，不会用无效链接误导你。",
  },
];

export default function Home() {
  // CSS 背景图也需要带上 GitHub Pages 的仓库子路径。
  const pageAssetVariables = {
    "--hero-day-image": `url("${withBasePath("/images/travel-day.jpg")}")`,
    "--travel-night-image": `url("${withBasePath("/images/travel-night.jpg")}")`,
  } as CSSProperties;

  return (
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

          {/* PC 下载改为顶部轻量弹层；正式地址确认后可直接替换二维码与按钮链接。 */}
          <details className="nav-download">
            <summary className="nav-cta" id="pc-download">
              获取 PC 版 <span aria-hidden="true">↘</span>
            </summary>
            <div className="nav-download-popover">
              <div className="nav-download-qr" aria-label="PC 下载二维码接口预留">
                <span>时</span>
                <small>QR 接口已预留</small>
              </div>
              <div className="nav-download-copy">
                <span>PC FIRST · WINDOWS / macOS 待确认</span>
                <strong>PC 版即将开放</strong>
                <p>正式下载地址接入后，可在这里直接扫码或下载安装包。</p>
                <button type="button" disabled>直接下载 · 待接入</button>
                <a href={withBasePath("/privacy/")}>下载前阅读隐私政策 ↗</a>
              </div>
            </div>
          </details>
        </header>

        <div className="hero-inner">
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
              <a className="button button-primary" href="#pc-download">
                获取 PC 版 <span aria-hidden="true">→</span>
              </a>
              <a className="button button-ghost" href="#film">
                <span className="play-dot" aria-hidden="true">▶</span> 观看宣传片
              </a>
            </div>
            <div className="hero-note">
              <span className="online-dot" />
              下载链接确认后，即可接入二维码与安装包
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
            <img
              className="hero-character"
              src={withBasePath("/images/companion-hero.png")}
              alt="银发白衣的时光旅人桌面伙伴"
              width="1047"
              height="1800"
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
          <img
            src={withBasePath("/images/companion-scene.jpg")}
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
            在 AI 聊天框里添加 Skill，让熟悉的旅伴随时切换身份、能力与说话方式。需要专注时，它是你的搭档；想进入故事时，它也可以成为向导、倾听者或冒险同伴。
          </p>
          <p className="skills-note"><i /> 旅伴不变，Skill 改变这一次相处的方式。</p>
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
            昭昭是你遇见的第一位旅伴。她并不是一张固定立绘，而会在安静守候、主动搭话与带着记忆回应之间，形成属于你们的相处节奏。
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
          <p className="future-note">昭昭 · 首位旅伴 / 更多角色与设定将随版本持续加入。</p>
        </div>
      </section>

      <section className="memory-section">
        <div className="memory-image-wrap">
          <img
            src={withBasePath("/images/aquarium-memory.jpg")}
            alt="角色在水族馆与金鱼相遇的旅行画面"
            width="1672"
            height="940"
            loading="lazy"
          />
          <div className="memory-fragments" aria-label="共同记忆中的照片碎片">
            <figure>
              <img src={withBasePath("/images/travel-pavilion.jpg")} alt="旅途中经过的水榭" loading="lazy" />
              <figcaption>远行 · 01</figcaption>
            </figure>
            <figure>
              <img src={withBasePath("/images/travel-canal.jpg")} alt="旅途中经过的水巷" loading="lazy" />
              <figcaption>远行 · 02</figcaption>
            </figure>
            <figure>
              <img src={withBasePath("/images/travel-lake.jpg")} alt="旅途中看见的湖面" loading="lazy" />
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

        <div className="travel-gallery">
          {travelCards.map((card, index) => (
            <figure className={card.className} key={card.image}>
              <span className="photo-number">0{index + 1}</span>
              <img src={withBasePath(card.image)} alt={card.title} loading="lazy" />
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
              poster={withBasePath("/images/pv-poster.jpg")}
              aria-label="时光旅人官方宣传片"
            >
              {/* PC 优先加载 1080p 高清版；窄屏设备保留轻量版本，避免移动网络一次加载过大。 */}
              <source
                src={withBasePath("/media/time-traveler-pv-1080p.m4v")}
                type="video/mp4"
                media="(min-width: 901px)"
              />
              <source src={withBasePath("/media/time-traveler-pv.m4v")} type="video/mp4" />
              你的浏览器暂不支持视频播放。
            </video>
          </div>

          <figure className="film-playtest-poster">
            <img
              src={withBasePath("/images/desktop-playtest-poster.jpg")}
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
            <span><i /> 独立隐私说明</span>
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

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark brand-mark-footer" aria-hidden="true"><i /></span>
          <h2>时光旅人</h2>
          <p>让桌面，多一位懂你的旅伴。</p>
        </div>
        <div className="footer-meta">
          <div className="footer-links">
            <a href={withBasePath("/about/")}>关于我们 ↗</a>
            <a href={withBasePath("/privacy/")}>隐私政策 ↗</a>
            <a href="#top">返回顶部 ↑</a>
          </div>
          <p>下载或使用产品前，请先阅读并了解隐私政策。</p>
          <span>© 2026 TIME TRAVELER</span>
        </div>
      </footer>
    </main>
  );
}
