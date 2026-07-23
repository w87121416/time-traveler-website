import type { ReactNode } from "react";
import { withBasePath } from "./site-config";

type VersionItem = {
  label: string;
  value: string;
};

type Highlight = {
  code: string;
  title: string;
  detail: string;
};

type RelatedLink = {
  href: string;
  label: string;
};

type LegalDocumentProps = {
  status: string;
  eyebrow: string;
  title: string;
  intro: string;
  versionLabel: string;
  versionItems: VersionItem[];
  noticeTitle: string;
  notice: ReactNode;
  directoryLabel: string;
  sections: ReadonlyArray<readonly [string, string]>;
  highlights: Highlight[];
  relatedLinks: RelatedLink[];
  children: ReactNode;
};

type LegalSectionProps = {
  id: string;
  number: string;
  title: string;
  summary?: string;
  children: ReactNode;
};

type LegalTableProps = {
  label: string;
  headers: string[];
  rows: ReactNode[][];
};

// 两份中国大陆版协议共用同一阅读框架，后续修订只需维护内容与版本信息。
export function LegalDocument({
  status,
  eyebrow,
  title,
  intro,
  versionLabel,
  versionItems,
  noticeTitle,
  notice,
  directoryLabel,
  sections,
  highlights,
  relatedLinks,
  children,
}: LegalDocumentProps) {
  return (
    <>
      <main className="privacy-page" id="top">
        <header className="privacy-nav">
          <a className="privacy-brand" href={withBasePath("/")} aria-label="返回时光旅人官网">
            <span className="brand-mark" aria-hidden="true"><i /></span>
            <span>时光旅人</span>
          </a>
          <span className="privacy-status">{status}</span>
          <a className="privacy-back" href={withBasePath("/")}>返回官网 <span aria-hidden="true">↗</span></a>
        </header>

        <section className="privacy-hero legal-hero" id="content-start" tabIndex={-1}>
          <div className="privacy-orbit" aria-hidden="true" />
          <div className="privacy-hero-copy">
            <p className="privacy-eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
          <div className="privacy-version-card">
            <span>DOCUMENT STATUS</span>
            <strong>{versionLabel}</strong>
            <dl>
              {versionItems.map((item) => (
                <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <div className="privacy-draft-banner" role="note">
          <span>{noticeTitle}</span>
          <p>{notice}</p>
        </div>

        <section className="legal-highlights" aria-label="协议快速了解">
          {highlights.map((item) => (
            <article key={item.code}>
              <span>{item.code}</span>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
            </article>
          ))}
        </section>

        <div className="privacy-layout">
          <aside className="privacy-sidebar" aria-label={directoryLabel}>
            <p>协议目录</p>
            <nav>
              {sections.map(([id, label], index) => (
                <a href={`#${id}`} key={id}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {label}
                </a>
              ))}
            </nav>
            <div className="privacy-side-note">
              <span>协议与客服联系</span>
              <p><a href="mailto:414011506@qq.com">414011506@qq.com</a></p>
            </div>
          </aside>

          <article className="privacy-content legal-content">{children}</article>
        </div>
      </main>

      <footer className="privacy-footer">
        <div>
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <strong>时光旅人</strong>
        </div>
        <nav aria-label="协议相关链接">
          {relatedLinks.map((link) => (
            <a href={withBasePath(link.href)} key={link.href}>{link.label}</a>
          ))}
        </nav>
        <a href="#top">返回顶部 ↑</a>
      </footer>
    </>
  );
}

export function LegalSection({ id, number, title, summary, children }: LegalSectionProps) {
  return (
    <section className="policy-section" id={id}>
      <div className="policy-number">{number}</div>
      <h2>{title}</h2>
      {summary ? <p className="legal-section-summary"><strong>快速了解</strong>{summary}</p> : null}
      {children}
    </section>
  );
}

export function LegalTable({ label, headers, rows }: LegalTableProps) {
  return (
    <div className="policy-table-wrap" role="region" aria-label={`${label}，可横向滚动`} tabIndex={0}>
      <table className="policy-table">
        <thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${label}-${rowIndex}`}>
              {row.map((cell, cellIndex) => <td key={`${label}-${rowIndex}-${cellIndex}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="legal-list">{children}</ul>;
}
