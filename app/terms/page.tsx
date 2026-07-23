import type { Metadata } from "next";
import { absoluteSiteUrl, withBasePath } from "../site-config";

export const metadata: Metadata = {
  title: "官方网站使用条款｜时光旅人",
  description: "时光旅人官方网站的访问规则、内容权属、产品预览边界和联系渠道。",
  alternates: {
    canonical: absoluteSiteUrl("/terms/"),
  },
  openGraph: {
    title: "官方网站使用条款｜时光旅人",
    description: "当前网站只提供尚未开放下载的时光旅人产品预览。",
    url: absoluteSiteUrl("/terms/"),
    images: [absoluteSiteUrl("/og.png")],
  },
};

const termSections = [
  ["scope", "适用范围"],
  ["preview", "产品预览与下载"],
  ["rights", "内容与知识产权"],
  ["conduct", "访问与使用规则"],
  ["links", "第三方链接"],
  ["changes", "变更与联系我们"],
];

export default function TermsPage() {
  return (
    <>
      <main className="privacy-page">
        <header className="privacy-nav">
          <a className="privacy-brand" href={withBasePath("/")} aria-label="返回时光旅人官网">
            <span className="brand-mark" aria-hidden="true"><i /></span>
            <span>时光旅人</span>
          </a>
          <span className="privacy-status">1.1 · 已生效</span>
          <a className="privacy-back" href={withBasePath("/")}>返回官网 <span aria-hidden="true">↗</span></a>
        </header>

        <section className="privacy-hero" id="content-start" tabIndex={-1}>
          <div className="privacy-orbit" aria-hidden="true" />
          <div className="privacy-hero-copy">
            <p className="privacy-eyebrow">WEBSITE TERMS · TIME TRAVELER</p>
            <h1>官方网站使用条款</h1>
            <p>本条款说明当前公开预览网站的访问规则、内容权属与产品发布边界，不替代未来 PC 客户端的用户服务协议。</p>
          </div>
          <div className="privacy-version-card">
            <span>TERMS STATUS</span>
            <strong>1.1 / 生效</strong>
            <dl>
              <div><dt>发布日期</dt><dd>2026 年 7 月 17 日</dd></div>
              <div><dt>更新日期</dt><dd>2026 年 7 月 17 日</dd></div>
              <div><dt>生效日期</dt><dd>2026 年 7 月 17 日</dd></div>
              <div><dt>适用范围</dt><dd>官方网站</dd></div>
            </dl>
          </div>
        </section>

        <div className="privacy-layout">
          <aside className="privacy-sidebar" aria-label="官方网站使用条款目录">
            <p>目录</p>
            <nav>
              {termSections.map(([id, label], index) => (
                <a href={"#" + id} key={id}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          <article className="privacy-content">
            <section className="policy-section" id="scope">
              <div className="policy-number">01</div>
              <h2>适用范围</h2>
              <p>
                本条款适用于南京形而不器科技有限公司运营的“时光旅人”官方网站 www.sinbookey.com。访问和使用本网站时，请同时阅读<a href={withBasePath("/privacy/")}>《官方网站隐私说明》</a>。
              </p>
              <p>
                当前网站不提供注册、在线 AI 对话、支付或公众下载；未来 PC 客户端开放前，我们会另行发布适用于实际服务的用户协议、产品隐私政策和第三方清单。
              </p>
            </section>

            <section className="policy-section" id="preview">
              <div className="policy-number">02</div>
              <h2>产品预览与下载边界</h2>
              <p>
                网站展示的角色、Skill、旅行、长期记忆、界面和宣传片用于说明开发方向，不构成对最终功能、上线时间、兼容设备或商业模式的保证。正式版本可能根据测试、安全、合规和技术情况调整。
              </p>
              <div className="policy-callout policy-callout-warning">
                <strong>当前没有官方安装包</strong>
                <p>在官网明确公布版本、签名主体、SHA-256 和官方下载地址前，任何以“时光旅人”名义传播的安装包都不应视为公司正式发布。</p>
              </div>
            </section>

            <section className="policy-section" id="rights">
              <div className="policy-number">03</div>
              <h2>内容与知识产权</h2>
              <p>
                本网站的品牌名称、角色设定、界面和文案由团队自主策划与制作；部分图片、视频及其他视觉素材包含 AI 生成内容，并由团队美术完成人工修改与再创作。
              </p>
              <p>
                团队完成的原创表达、人工修改、选择编排与其他依法可受保护部分，其相关权利由南京形而不器科技有限公司或合法权利人依法享有。我们将保存必要的生成记录、创作源文件和修改过程，并按适用规则履行 AI 生成合成内容标识义务。
              </p>
              <p>
                未经书面许可，不得将网站内容用于仿冒产品、商业再分发、训练未经授权的角色模型、误导性宣传或移除权利标识。正常的网页链接、非商业评论和法律允许的合理使用不受影响，但不得暗示获得公司背书。
              </p>
            </section>

            <section className="policy-section" id="conduct">
              <div className="policy-number">04</div>
              <h2>访问与使用规则</h2>
              <p>
                不得通过自动化攻击、恶意扫描、绕过安全措施、干扰托管服务、冒充公司人员、传播恶意软件或其他违法方式使用本网站。出于安全维护、法律要求或重大内容更新，我们可能临时调整或暂停部分页面。
              </p>
              <p>
                如你发现仿冒网站、恶意安装包、素材侵权或安全漏洞，请保留链接和必要证据并通过公开联系邮箱告知我们。请勿在普通邮件中发送密码、私钥、身份证完整照片或其他不必要的敏感信息。
              </p>
            </section>

            <section className="policy-section" id="links">
              <div className="policy-number">05</div>
              <h2>第三方链接与责任边界</h2>
              <p>
                网站可能链接至法律法规、监管机关、GitHub 或其他第三方页面。第三方页面由其运营者独立负责，其内容、可用性和个人信息处理规则不由我们控制；访问前请查看对应规则。
              </p>
              <p>
                我们会合理维护网站信息，但互联网传输、浏览器兼容和第三方托管可能导致短时中断。依法不能排除或限制的责任不受本条款影响。
              </p>
            </section>

            <section className="policy-section" id="changes">
              <div className="policy-number">06</div>
              <h2>条款变更与联系我们</h2>
              <p>
                当网站功能或运营安排发生重要变化时，我们会更新本条款并标注新版本和生效日期。涉及产品账号、AI 服务、下载或付费的规则，将通过独立协议另行告知。
              </p>
              <dl className="contact-card">
                <div><dt>运营主体</dt><dd>南京形而不器科技有限公司</dd></div>
                <div><dt>联系邮箱</dt><dd><a href="mailto:414011506@qq.com">414011506@qq.com</a></dd></div>
                <div><dt>版本</dt><dd>1.1 · 2026 年 7 月 17 日</dd></div>
              </dl>
            </section>
          </article>
        </div>
      </main>

      <footer className="privacy-footer">
        <div><span className="brand-mark" aria-hidden="true"><i /></span><strong>时光旅人</strong></div>
        <nav aria-label="使用条款相关链接">
          <a href={withBasePath("/privacy/")}>官方网站隐私说明</a>
          <a href={withBasePath("/user-agreement/")}>PC 用户协议公开预览</a>
          <a href={withBasePath("/safety/")}>AI 安全说明</a>
        </nav>
        <a href={withBasePath("/")}>返回官网 ↑</a>
      </footer>
    </>
  );
}
