import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const outputRoot = fileURLToPath(new URL("../../out/", import.meta.url));
const siteOrigin = "https://www.sinbookey.com";

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function requireFile(relativePath) {
  const filePath = path.join(outputRoot, relativePath);
  assert.equal(await exists(filePath), true, `缺少静态产物：out/${relativePath}`);
  return readFile(filePath, "utf8");
}

async function findHtmlFiles(directory = outputRoot) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return findHtmlFiles(entryPath);
      return entry.isFile() && entry.name.endsWith(".html") ? [entryPath] : [];
    }),
  );
  return nested.flat();
}

function publicPathForHtml(filePath) {
  const relative = path.relative(outputRoot, filePath).split(path.sep).join("/");
  if (relative === "index.html") return "/";
  if (relative.endsWith("/index.html")) return `/${relative.slice(0, -"index.html".length)}`;
  return `/${relative}`;
}

function extractReferences(html) {
  const references = [];
  const attributePattern = /\b(?:href|src|poster)\s*=\s*["']([^"']+)["']/gi;
  const srcsetPattern = /\bsrcset\s*=\s*["']([^"']+)["']/gi;

  for (const match of html.matchAll(attributePattern)) references.push(match[1]);
  for (const match of html.matchAll(srcsetPattern)) {
    for (const candidate of match[1].split(",")) {
      const reference = candidate.trim().split(/\s+/)[0];
      if (reference) references.push(reference);
    }
  }
  return references;
}

async function resolvesInsideExport(reference, sourcePublicPath) {
  if (!reference || reference.startsWith("#") || reference.startsWith("data:")) return true;

  let url;
  try {
    url = new URL(reference.replaceAll("&amp;", "&"), new URL(sourcePublicPath, siteOrigin));
  } catch {
    return false;
  }

  // 邮件、电话及第三方资源不属于本次静态产物，交由线上监控或人工审查。
  if (url.origin !== siteOrigin) return true;

  let decodedPath;
  try {
    decodedPath = decodeURIComponent(url.pathname);
  } catch {
    return false;
  }

  const relativePath = decodedPath.replace(/^\/+/, "");
  const candidates = decodedPath.endsWith("/")
    ? [path.join(outputRoot, relativePath, "index.html")]
    : [
        path.join(outputRoot, relativePath),
        path.join(outputRoot, `${relativePath}.html`),
        path.join(outputRoot, relativePath, "index.html"),
      ];

  // 防止异常链接借助 .. 跳出 out 目录，同时兼容 Next.js 的目录式静态路由。
  const safeCandidates = candidates.filter((candidate) => {
    const relative = path.relative(outputRoot, candidate);
    return relative !== ".." && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative);
  });
  return (await Promise.all(safeCandidates.map(exists))).some(Boolean);
}

const [home, about, privacy, robots, sitemap, manifest, cname] = await Promise.all([
  requireFile("index.html"),
  requireFile("about/index.html"),
  requireFile("privacy/index.html"),
  requireFile("robots.txt"),
  requireFile("sitemap.xml"),
  requireFile("manifest.webmanifest"),
  requireFile("CNAME"),
]);

// 关键文案检查能识别“构建成功但输出了错误模板/空白页”的退化。
assert.match(home, /<title>[^<]*时光旅人[^<]*<\/title>/i);
assert.match(home, /查看 PC 版进度/);
assert.match(about, /<title>[^<]*(?:关于|时光旅人)[^<]*<\/title>/i);
assert.match(privacy, /<title>[^<]*隐私[^<]*<\/title>/i);
assert.match(robots, /User-agent:\s*\*/i);
assert.match(robots, /Sitemap:\s*https:\/\/www\.sinbookey\.com\/sitemap\.xml/i);
assert.match(sitemap, /<urlset\b/i);
assert.match(manifest, /"name"\s*:\s*"时光旅人/);
assert.equal(cname.trim(), "www.sinbookey.com", "CNAME 必须与 GitHub Pages 自定义域一致");
for (const pathname of ["/", "/about/"]) {
  assert.match(sitemap, new RegExp(`<loc>https:\\/\\/www\\.sinbookey\\.com${pathname.replaceAll("/", "\\/")}<\\/loc>`, "i"));
}
assert.doesNotMatch(sitemap, /<loc>https:\/\/www\.sinbookey\.com\/privacy\/<\/loc>/i);

const htmlFiles = await findHtmlFiles();
const brokenReferences = [];
for (const filePath of htmlFiles) {
  const html = await readFile(filePath, "utf8");
  const sourcePublicPath = publicPathForHtml(filePath);
  for (const reference of new Set(extractReferences(html))) {
    if (!(await resolvesInsideExport(reference, sourcePublicPath))) {
      brokenReferences.push(`${sourcePublicPath} -> ${reference}`);
    }
  }
}

assert.deepEqual(
  brokenReferences,
  [],
  `发现无法解析的站内链接：\n${brokenReferences.map((item) => `- ${item}`).join("\n")}`,
);

console.log(`静态站点检查通过：${htmlFiles.length} 个 HTML 文件，关键页面、SEO 文件与站内链接均完整。`);
