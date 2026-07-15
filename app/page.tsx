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
    title: "角色成长",
    text: "不同性格、动作与表达方式，在一次次相处中，慢慢长成只属于你的默契。",
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

// 下载入口采用配置化结构，PC 链接确认后只需填写 url；移动端接口已预留。
const downloadPlatforms = [
  { id: "pc", label: "PC 版", status: "首发平台", url: "", visible: true },
  { id: "ios", label: "iOS", status: "敬请期待", url: "", visible: false },
  { id: "android", label: "Android", status: "敬请期待", url: "", visible: false },
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
  const visiblePlatforms = downloadPlatforms.filter((platform) => platform.visible);

  return (
    <main>
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
            <a href="#companion">认识旅伴</a>
            <a href="#daily">陪伴日常</a>
            <a href="#travel">旅行回忆</a>
            <a href="#film">观看影片</a>
          </nav>

          <a className="nav-cta" href="#download">
            获取 PC 版 <span aria-hidden="true">↘</span>
          </a>
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
              <a className="button button-primary" href="#download">
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
              src="/images/companion-hero.png"
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
        </div>

        <figure className="desktop-scene">
          <div className="scene-topbar">
            <span>DESKTOP COMPANION</span>
            <span>在线 · 正在陪伴</span>
          </div>
          <img
            src="/images/companion-scene.jpg"
            alt="桌面场景中的时光旅人角色"
            width="1445"
            height="1700"
            loading="lazy"
          />
          <figcaption>
            <span>日常模式</span>
            <p>“我会安静一点。等你忙完，再和我说说今天吧。”</p>
          </figcaption>
        </figure>
      </section>

      <section className="personality-section">
        <div className="personality-visual">
          <div className="profile-label">
            <span>TRAVELER FILE</span>
            <strong>旅伴档案 · 01</strong>
          </div>
          <img
            src="/images/companion-turnaround.jpg"
            alt="时光旅人角色正面、侧面和背面设定"
            width="1039"
            height="1500"
            loading="lazy"
          />
          <div className="profile-coordinate" aria-hidden="true">31°14&apos;N · 118°22&apos;E</div>
        </div>
        <div className="personality-copy">
          <div className="section-kicker">
            <span>03</span>
            <p>每一种陪伴，都有自己的性格</p>
          </div>
          <h2>不是标准答案，<br />是独一份的相处方式。</h2>
          <p>
            活泼、安静、古灵精怪，或来自奇幻世界。不同角色拥有各自的动作、表达与成长体验，你可以选择更适合自己的那一位。
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
          <p className="future-note">更多角色与设定，将随版本持续加入。</p>
        </div>
      </section>

      <section className="memory-section">
        <div className="memory-image-wrap">
          <img
            src="/images/aquarium-memory.jpg"
            alt="角色在水族馆与金鱼相遇的旅行画面"
            width="1672"
            height="940"
            loading="lazy"
          />
          <div className="memory-photo-meta">
            <span>旅途回忆 · 18:42</span>
            <p>“玻璃后面的光像水一样。下次，也想和你一起看。”</p>
          </div>
        </div>
        <div className="memory-copy">
          <span className="memory-index">04 / MEMORY</span>
          <h2>相处越久，<br />故事越长。</h2>
          <p>
            动作反馈、情绪连接与日常小事会一点点沉淀下来。你们共享的不只是屏幕前的此刻，还有一册不断长大的共同记忆。
          </p>
          <div className="memory-counter">
            <div><strong>照片</strong><span>旅途中看见的风景</span></div>
            <div><strong>纪念品</strong><span>带回桌面的惊喜</span></div>
            <div><strong>见闻</strong><span>只讲给你的故事</span></div>
          </div>
        </div>
      </section>

      {/* 旅行区采用夜幕画布与照片墙，强化“共同记忆”的产品差异。 */}
      <section className="travel-section" id="travel">
        <div className="travel-night-bg" aria-hidden="true" />
        <div className="travel-heading">
          <div className="section-kicker section-kicker-dark">
            <span>05</span>
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
              <img src={card.image} alt={card.title} loading="lazy" />
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
            <span>06</span>
            <p>看见一段正在发生的陪伴</p>
          </div>
          <h2>有些陪伴，<br />看过以后就会明白。</h2>
          <p>从一个动作、一次回应，到每天打开电脑时的那份期待。</p>
        </div>
        <div className="film-frame">
          <div className="film-labels" aria-hidden="true">
            <span>OFFICIAL PROMOTION VIDEO</span>
            <span>01:17 · HD</span>
          </div>
          <video
            controls
            playsInline
            preload="metadata"
            poster="/images/pv-poster.jpg"
            aria-label="时光旅人官方宣传片"
          >
            <source src="/media/time-traveler-pv.m4v" />
            你的浏览器暂不支持视频播放。
          </video>
        </div>
      </section>

      {/* 下载区：PC 为当前主入口；二维码与直链均等待正式地址，避免无效跳转。 */}
      <section className="download-section" id="download">
        <div className="download-orbit" aria-hidden="true" />
        <div className="download-copy">
          <span className="download-kicker">YOUR NEXT EVERYDAY</span>
          <h2>下一段日常，<br />从桌面开始。</h2>
          <p>PC 版首发。正式下载链接确认后，这里将同时提供一键下载与跨设备扫码。</p>
          <div className="platform-row">
            {visiblePlatforms.map((platform) => (
              <div className="platform-pill" key={platform.id}>
                <span className="platform-icon" aria-hidden="true">▣</span>
                <div><strong>{platform.label}</strong><small>{platform.status}</small></div>
              </div>
            ))}
          </div>
          <button className="download-button" type="button" disabled>
            PC 下载链接待接入 <span aria-hidden="true">→</span>
          </button>
          <small className="download-hint">
            Windows / macOS 支持范围将在正式版本确认后标注 · <a href="/privacy">使用前请阅读隐私政策</a>
          </small>
        </div>

        <div className="qr-card">
          <div className="qr-header">
            <span>PC DOWNLOAD</span>
            <span>COMING SOON</span>
          </div>
          <div className="qr-placeholder" aria-label="PC 下载二维码预留位置">
            <i className="finder finder-one" />
            <i className="finder finder-two" />
            <i className="finder finder-three" />
            <span>时</span>
          </div>
          <strong>扫描获取 PC 版</strong>
          <p>下载地址确认后，二维码将在此自动接入。</p>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-heading">
          <span>FAQ / 07</span>
          <h2>关于时光旅人</h2>
          <p>先回答你可能最关心的几件事。</p>
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
            <a href="/privacy">隐私政策 ↗</a>
            <a href="#top">返回顶部 ↑</a>
          </div>
          <p>下载或使用产品前，请先阅读并了解隐私政策。</p>
          <span>© 2026 TIME TRAVELER</span>
        </div>
      </footer>
    </main>
  );
}
