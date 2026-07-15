// GitHub Pages 的项目站点带有仓库子路径；所有静态资源和站内链接统一从这里拼接。
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
  "https://w87121416.github.io/time-traveler-website"
).replace(/\/+$/, "");

export function absoluteSiteUrl(path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${publicSiteUrl}${normalizedPath}`;
}
