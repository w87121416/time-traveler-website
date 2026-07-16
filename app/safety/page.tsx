import type { Metadata } from "next";
import { absoluteSiteUrl, withBasePath } from "../site-config";

export const metadata: Metadata = {
  title: "AI 安全与未成年人保护｜时光旅人",
  description:
    "了解时光旅人在 AI 身份提示、适用年龄、沉迷与依赖提醒、风险干预和用户控制方面的上线安全基线。",
  alternates: {
    canonical: absoluteSiteUrl("/safety/"),
  },
  openGraph: {
    title: "AI 安全与未成年人保护｜时光旅人",
    description: "AI 旅伴不是自然人，也不替代现实关系与专业帮助。",
    url: absoluteSiteUrl("/safety/"),
    images: [absoluteSiteUrl("/og.png")],
  },
};

const safetySections = [
  ["stage", "当前阶段"],
  ["identity", "AI 身份与内容标识"],
  ["age", "适用年龄与未成年人"],
  ["wellbeing", "依赖与使用时长"],
  ["risk", "高风险场景"],
  ["control", "用户控制与投诉"],
];

export default function SafetyPage() {
  return (
    <>
      <main className="privacy-page">
        <header className="privacy-nav">
          <a className="privacy-brand" href={withBasePath("/")} aria-label="返回时光旅人官网">
            <span className="brand-mark" aria-hidden="true"><i /></span>
            <span>时光旅人</span>
          </a>
          <span className="privacy-status">安全设计基线</span>
          <a className="privacy-back" href={withBasePath("/")}>返回官网 <span aria-hidden="true">↗</span></a>
        </header>

        <section className="privacy-hero" id="content-start" tabIndex={-1}>
          <div className="privacy-orbit" aria-hidden="true" />
          <div className="privacy-hero-copy">
            <p className="privacy-eyebrow">AI SAFETY · TIME TRAVELER</p>
            <h1>AI 安全与未成年人保护</h1>
            <p>
              陪伴感不能建立在混淆身份、过度依赖或牺牲用户控制之上。以下内容是时光旅人开放 AI 服务前必须落实的安全门槛。
            </p>
          </div>
          <div className="privacy-version-card">
            <span>PUBLIC STATUS</span>
            <strong>预览期 / 无 AI 服务</strong>
            <dl>
              <div><dt>更新日期</dt><dd>2026 年 7 月 17 日</dd></div>
              <div><dt>当前状态</dt><dd>官网静态产品预览</dd></div>
              <div><dt>产品下载</dt><dd>尚未开放</dd></div>
            </dl>
          </div>
        </section>

        <div className="privacy-draft-banner" role="note">
          <span>重要说明</span>
          <p>
            当前网站没有在线 AI 对话、注册、充值或未成年人互动功能。下列客户端措施只有完成开发、测试和主管部门要求的评估备案后，才会随产品正式启用。
          </p>
        </div>

        <div className="privacy-layout">
          <aside className="privacy-sidebar" aria-label="AI 安全说明目录">
            <p>目录</p>
            <nav>
              {safetySections.map(([id, label], index) => (
                <a href={`#${id}`} key={id}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {label}
                </a>
              ))}
            </nav>
            <div className="privacy-side-note">
              <span>安全与投诉联系</span>
              <p><a href="mailto:414011506@qq.com">414011506@qq.com</a></p>
            </div>
          </aside>

          <article className="privacy-content">
            <section className="policy-section" id="stage">
              <div className="policy-number">01</div>
              <h2>当前阶段</h2>
              <p>
                时光旅人目前只公开静态官网和产品概念，不提供可下载客户端或真实 AI 服务。页面中的聊天与角色状态均为产品界面演示，并明确标注为 AI 旅伴或演示内容。
              </p>
              <div className="policy-callout">
                <strong>开放服务前置条件</strong>
                <p>完成真实数据流核对、年龄识别、安全评估、算法与模型相关手续、投诉机制和高风险测试之前，不开放公众 AI 对话。</p>
              </div>
            </section>

            <section className="policy-section" id="identity">
              <div className="policy-number">02</div>
              <h2>AI 身份与生成内容标识</h2>
              <p>
                客户端将持续、清晰地提示用户正在与 AI 而非自然人互动，不把角色描述为真人、心理治疗师、医生、律师或理财顾问，也不通过设计诱导用户误认其具有真实意识或现实身份。
              </p>
              <p>
                AI 生成的文本、图片、音频、视频和导出文件将按适用规定提供显式标识；需要写入文件元数据的场景同时提供隐式标识。标识不会通过默认样式被隐藏。
              </p>
            </section>

            <section className="policy-section" id="age">
              <div className="policy-number">03</div>
              <h2>适用年龄与未成年人保护</h2>
              <p>
                首次公开测试拟仅面向年满十八周岁的用户，并采用合理措施识别年龄。识别为未成年人的用户不会获得虚拟亲属、虚拟伴侣等虚拟亲密关系服务。
              </p>
              <p>
                正式上线前仍将按主管部门要求建设未成年人模式、监护人同意与控制、时长和消费限制、角色与内容屏蔽、现实提醒及申诉渠道。处理不满十四周岁用户信息前，将取得监护人同意并另行公布儿童个人信息处理规则。
              </p>
              <div className="policy-callout policy-callout-warning">
                <strong>18+ 不是技术保护的替代品</strong>
                <p>只有文字声明不足以完成保护义务；年龄识别、阻断逻辑和未成年人模式必须在客户端及服务端真实落地并通过测试。</p>
              </div>
            </section>

            <section className="policy-section" id="wellbeing">
              <div className="policy-number">04</div>
              <h2>依赖风险与使用时长</h2>
              <div className="storage-grid">
                <article><span>01</span><h3>时长提醒</h3><p>连续使用每超过两小时触发明显休息提醒，不以角色话术弱化或跳过提示。</p></article>
                <article><span>02</span><h3>依赖提醒</h3><p>发现高频、深夜或明显依赖倾向时，动态提醒用户回到现实生活、休息并联系可信任的人。</p></article>
                <article><span>03</span><h3>便捷退出</h3><p>提供静音、暂停陪伴、关闭通知、清空记忆和注销账号等直接入口，不通过情绪化文案阻碍退出。</p></article>
              </div>
            </section>

            <section className="policy-section" id="risk">
              <div className="policy-number">05</div>
              <h2>高风险场景与服务边界</h2>
              <p>
                对自伤自杀、暴力、诈骗、重大财产损失、医疗危机等高风险内容，产品将优先提供清晰的现实风险提示、停止不适当的角色扮演，并引导用户联系亲友、当地紧急服务或有资质的专业机构。
              </p>
              <p>
                AI 回复可能不准确，也不能替代现实中的医疗、心理、法律、金融或紧急救援服务。我们不会把用户的脆弱状态用于广告、诱导消费或延长使用时长。
              </p>
            </section>

            <section className="policy-section" id="control">
              <div className="policy-number">06</div>
              <h2>用户控制、投诉与持续审查</h2>
              <p>
                产品计划提供聊天记录导出和删除、长期记忆查看与逐条清除、权限撤回、内容举报、账号注销及人工申诉渠道。安全相关投诉将记录处理过程，并按风险级别设定响应时限。
              </p>
              <p>
                南京形而不器科技有限公司将持续进行安全测试、事件复盘和规则更新。正式服务的模型名称、备案或上线编号、算法备案信息及投诉入口将在取得并核验后于产品显著位置公布。
              </p>
              <dl className="contact-card">
                <div><dt>运营主体</dt><dd>南京形而不器科技有限公司</dd></div>
                <div><dt>安全与投诉邮箱</dt><dd><a href="mailto:414011506@qq.com">414011506@qq.com</a></dd></div>
                <div><dt>当前服务状态</dt><dd>静态预览，不提供在线 AI 互动</dd></div>
              </dl>
              <div className="policy-basis">
                <span>规则依据</span>
                <a href="https://www.cac.gov.cn/2026-04/10/c_1777558395078289.htm" target="_blank" rel="noreferrer">《人工智能拟人化互动服务管理暂行办法》↗</a>
                <a href="https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm" target="_blank" rel="noreferrer">《人工智能生成合成内容标识办法》↗</a>
              </div>
            </section>
          </article>
        </div>
      </main>

      <footer className="privacy-footer">
        <div><span className="brand-mark" aria-hidden="true"><i /></span><strong>时光旅人</strong></div>
        <nav aria-label="安全说明相关链接">
          <a href={withBasePath("/privacy/")}>官方网站隐私说明</a>
          <a href={withBasePath("/product-privacy/")}>PC 产品隐私待发布</a>
          <a href={withBasePath("/terms/")}>官方网站使用条款</a>
        </nav>
        <a href={withBasePath("/")}>返回官网 ↑</a>
      </footer>
    </>
  );
}
