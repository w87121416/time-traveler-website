import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

// 直接请求构建后的 Worker，确保托管产物与用户真正访问到的 HTML 一致。
async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the public Time Traveler homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>时光旅人｜住在桌面上的 AI 旅伴<\/title>/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.sinbookey\.com\/"\/>/i);
  assert.match(html, /aria-label="主导航"/);
  assert.match(html, />关于我们<\/a>/);
  assert.match(html, /为聊天添加不同 Skill/);
  assert.match(html, /同一位朝朝/);
  assert.match(html, /查看 PC 版进度/);
  assert.match(html, /href="\/privacy\/"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|登录后访问/i);
});

test("server-renders the independent company, privacy and safety pages", async () => {
  const [aboutResponse, privacyResponse, productPrivacyResponse, safetyResponse, termsResponse] = await Promise.all([
    render("/about/"),
    render("/privacy/"),
    render("/product-privacy/"),
    render("/safety/"),
    render("/terms/"),
  ]);

  assert.equal(aboutResponse.status, 200);
  assert.equal(privacyResponse.status, 200);
  assert.equal(productPrivacyResponse.status, 200);
  assert.equal(safetyResponse.status, 200);
  assert.equal(termsResponse.status, 200);

  const [aboutHtml, privacyHtml, productPrivacyHtml, safetyHtml, termsHtml] = await Promise.all([
    aboutResponse.text(),
    privacyResponse.text(),
    productPrivacyResponse.text(),
    safetyResponse.text(),
    termsResponse.text(),
  ]);

  assert.match(aboutHtml, /让 AI 陪伴，/);
  assert.match(aboutHtml, /真正住进日常/);
  assert.match(aboutHtml, /南京形而不器科技有限公司/);
  assert.match(privacyHtml, /<title>官方网站隐私说明｜时光旅人<\/title>/i);
  assert.match(privacyHtml, /WEBSITE PRIVACY NOTICE · TIME TRAVELER/);
  assert.match(privacyHtml, /1\.0 \/ 生效/);
  assert.match(productPrivacyHtml, /PC 产品隐私政策/);
  assert.match(productPrivacyHtml, /待发布/);
  assert.match(safetyHtml, /AI 安全与未成年人保护/);
  assert.match(safetyHtml, /连续使用每超过两小时/);
  assert.match(termsHtml, /官方网站使用条款/);
  assert.match(termsHtml, /当前没有官方安装包/);
});

test("keeps GitHub Pages output static and base-path aware", async () => {
  const [config, page, layout, siteConfig, downloadMenu, workflow] = await Promise.all([
    readFile(new URL("../next.config.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/site-config.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/download-menu.tsx", import.meta.url), "utf8"),
    readFile(new URL("../.github/workflows/deploy-pages.yml", import.meta.url), "utf8"),
  ]);

  assert.match(config, /output:\s*"export"/);
  assert.match(config, /trailingSlash:\s*true/);
  assert.match(config, /unoptimized:\s*true/);
  assert.match(siteConfig, /NEXT_PUBLIC_BASE_PATH/);
  assert.match(siteConfig, /https:\/\/www\.sinbookey\.com/);
  assert.match(page, /withBasePath\("\/about\/"\)/);
  assert.match(page, /<OptimizedImage/);
  assert.match(page, /time-traveler-pv-web\.mp4/);
  assert.match(downloadMenu, /withBasePath\("\/product-privacy\/"\)/);
  assert.match(layout, /metadataBase/);
  assert.match(workflow, /NEXT_PUBLIC_BASE_PATH:\s*""/);
  assert.match(
    workflow,
    /NEXT_PUBLIC_SITE_URL:\s*https:\/\/www\.sinbookey\.com/,
  );
  assert.doesNotMatch(page, /SkeletonPreview|login|登录页/i);
});
