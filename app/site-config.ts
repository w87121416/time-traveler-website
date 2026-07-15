// 默认使用自定义域名根路径；保留环境变量入口，方便本地或备用地址构建。
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const basePath = rawBasePath
  ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";

export function withBasePath(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}

// 社交分享与 canonical 必须使用公开站点的绝对地址，构建时可由 GitHub Actions 覆盖。
export const publicSiteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.sinbookey.com"
).replace(/\/+$/, "");

export function absoluteSiteUrl(path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${publicSiteUrl}${normalizedPath}`;
}
