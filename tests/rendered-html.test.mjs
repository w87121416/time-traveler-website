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

test("server-renders the independent about and privacy pages", async () => {
  const [aboutResponse, privacyResponse] = await Promise.all([
    render("/about/"),
    render("/privacy/"),
  ]);

  assert.equal(aboutResponse.status, 200);
  assert.equal(privacyResponse.status, 200);

  const [aboutHtml, privacyHtml] = await Promise.all([
    aboutResponse.text(),
    privacyResponse.text(),
  ]);

  assert.match(aboutHtml, /让 AI 陪伴，/);
  assert.match(aboutHtml, /真正住进日常/);
  assert.match(privacyHtml, /<title>隐私政策｜时光旅人<\/title>/i);
  assert.match(privacyHtml, /PRIVACY POLICY · TIME TRAVELER/);
  assert.match(privacyHtml, /预发布草案/);
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
  assert.match(downloadMenu, /withBasePath\("\/privacy\/"\)/);
  assert.match(layout, /metadataBase/);
  assert.match(workflow, /NEXT_PUBLIC_BASE_PATH:\s*""/);
  assert.match(
    workflow,
    /NEXT_PUBLIC_SITE_URL:\s*https:\/\/www\.sinbookey\.com/,
  );
  assert.doesNotMatch(page, /SkeletonPreview|login|登录页/i);
});
