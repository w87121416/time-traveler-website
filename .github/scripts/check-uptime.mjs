import assert from "node:assert/strict";
import { appendFile } from "node:fs/promises";
import tls from "node:tls";

const origin = new URL(process.env.SITE_ORIGIN ?? "https://www.sinbookey.com");
const warningDays = Number.parseInt(process.env.CERT_WARNING_DAYS ?? "21", 10);
assert.equal(origin.protocol, "https:", "线上监控只接受 HTTPS 站点地址");
assert.equal(Number.isFinite(warningDays) && warningDays > 0, true, "CERT_WARNING_DAYS 必须是正整数");

const endpointChecks = [
  { path: "/", contentType: /text\/html/i, marker: /时光旅人/ },
  { path: "/about/", contentType: /text\/html/i, marker: /时光旅人|关于我们/ },
  { path: "/privacy/", contentType: /text\/html/i, marker: /官方网站隐私说明/ },
  { path: "/product-privacy/", contentType: /text\/html/i, marker: /时光旅人隐私政策/ },
  // 用户协议虽处于未生效公开预览状态，但已经从官网提供公开入口，需要纳入每日可用性监控。
  { path: "/user-agreement/", contentType: /text\/html/i, marker: /时光旅人用户服务协议/ },
  { path: "/safety/", contentType: /text\/html/i, marker: /AI 安全与未成年人保护/ },
  { path: "/terms/", contentType: /text\/html/i, marker: /官方网站使用条款/ },
  { path: "/robots.txt", contentType: /text\/plain/i, marker: /User-agent:\s*\*/i },
  { path: "/sitemap.xml", contentType: /(?:application|text)\/xml/i, marker: /<urlset\b/i },
];

async function checkEndpoint(check) {
  const url = new URL(check.path, origin);
  const startedAt = performance.now();
  const response = await fetch(url, {
    redirect: "error",
    signal: AbortSignal.timeout(15_000),
    headers: { "user-agent": "time-traveler-uptime-monitor/1.0" },
  });
  const body = await response.text();
  const durationMs = Math.round(performance.now() - startedAt);

  assert.equal(response.status, 200, `${url.href} 返回 HTTP ${response.status}`);
  assert.match(response.headers.get("content-type") ?? "", check.contentType, `${url.href} 内容类型异常`);
  assert.match(body, check.marker, `${url.href} 缺少预期内容，可能返回了错误页面`);

  return { target: check.path, result: "正常", detail: `HTTP 200 · ${durationMs} ms` };
}

function checkCertificate() {
  return new Promise((resolve, reject) => {
    const socket = tls.connect({
      host: origin.hostname,
      port: 443,
      servername: origin.hostname,
      rejectUnauthorized: true,
      timeout: 15_000,
    });

    socket.once("secureConnect", () => {
      try {
        const certificate = socket.getPeerCertificate();
        assert.ok(certificate.valid_to, "服务器没有返回证书到期时间");
        const expiresAt = new Date(certificate.valid_to);
        const remainingDays = Math.floor((expiresAt.getTime() - Date.now()) / 86_400_000);
        assert.equal(Number.isFinite(remainingDays), true, "无法解析证书到期时间");
        assert.ok(remainingDays >= warningDays, `HTTPS 证书仅剩 ${remainingDays} 天，请检查自动续期`);
        resolve({
          target: "HTTPS 证书",
          result: "正常",
          detail: `剩余 ${remainingDays} 天 · ${expiresAt.toISOString().slice(0, 10)} 到期`,
        });
      } catch (error) {
        reject(error);
      } finally {
        socket.end();
      }
    });
    socket.once("timeout", () => socket.destroy(new Error("HTTPS 证书连接超时")));
    socket.once("error", reject);
  });
}

const settled = await Promise.allSettled([
  ...endpointChecks.map(checkEndpoint),
  checkCertificate(),
]);

function describeFailure(reason) {
  if (!(reason instanceof Error)) return String(reason).replaceAll(/\s+/g, " ").trim();
  const cause = reason.cause instanceof Error ? `；原因：${reason.cause.message}` : "";
  // Actions 摘要使用 Markdown 表格，错误中的换行必须收拢为一行，避免破坏表格结构。
  return `${reason.message}${cause}`.replaceAll(/\s+/g, " ").trim();
}

const rows = settled.map((result, index) => {
  if (result.status === "fulfilled") return result.value;
  const target = index < endpointChecks.length ? endpointChecks[index].path : "HTTPS 证书";
  return { target, result: "失败", detail: describeFailure(result.reason) };
});

const summary = [
  "## 时光旅人官网每日监控",
  "",
  `检查时间：${new Date().toISOString()}`,
  "",
  "| 检查项 | 结果 | 详情 |",
  "| --- | --- | --- |",
  ...rows.map((row) => `| ${row.target} | ${row.result} | ${row.detail.replaceAll("|", "\\|")} |`),
  "",
].join("\n");

if (process.env.GITHUB_STEP_SUMMARY) {
  await appendFile(process.env.GITHUB_STEP_SUMMARY, summary, "utf8");
}
console.log(summary);

const failures = rows.filter((row) => row.result === "失败");
if (failures.length > 0) {
  throw new Error(failures.map((row) => `${row.target}: ${row.detail}`).join("\n"));
}
