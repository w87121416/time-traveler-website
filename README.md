# 时光旅人官网

“时光旅人”AI 桌面陪伴产品的公开官网。站点采用 Next.js 静态导出，通过 GitHub Pages 发布；打开网页后直接进入主页，没有登录前置页。

## 公开地址

- 正式域名：<https://www.sinbookey.com/>
- GitHub Pages 过渡地址：<https://w87121416.github.io/time-traveler-website/>

当前是无注册、无付费、无公开安装包的产品预览站。PC 下载渠道和合规手续确认前，页面只显示真实进度，不提供占位二维码或虚假下载链接。

## 本地检查

需要 Node.js `>=22.13.0`。

```bash
npm ci
npm run lint
npm exec -- tsc --noEmit -p tsconfig.github.json
npm run build:github
node .github/scripts/check-static-site.mjs
```

静态产物会生成到 `out/`。发布工作流会重复执行代码规范、类型、构建和站内链接检查，通过后才上传 GitHub Pages。

## 下载渠道配置

下载入口集中在 `app/release-config.ts`，正式渠道确认后通过公开构建变量启用：

| 变量 | 用途 |
| --- | --- |
| `NEXT_PUBLIC_PC_DOWNLOAD_URL` | PC 官方下载页或经过验证的安装包地址 |
| `NEXT_PUBLIC_PC_DOWNLOAD_QR` | PC 二维码图片路径，例如 `/images/pc-download-qr.png` |
| `NEXT_PUBLIC_IOS_DOWNLOAD_URL` / `NEXT_PUBLIC_IOS_DOWNLOAD_QR` | iOS 预留接口 |
| `NEXT_PUBLIC_ANDROID_DOWNLOAD_URL` / `NEXT_PUBLIC_ANDROID_DOWNLOAD_QR` | Android 预留接口 |

不要把密码、令牌、私钥或未公开安装包签名密钥放入这些变量。上线安装包时还应同时公布版本号、系统要求、文件大小、签名主体和 SHA-256 校验值。

## 发布与域名

- 推送 `main` 后，`.github/workflows/deploy-pages.yml` 自动发布。
- `public/CNAME` 固定为 `www.sinbookey.com`。
- `.github/workflows/quality.yml` 负责持续质量检查。
- `.github/workflows/uptime.yml` 每天北京时间 09:20 检查主要页面、SEO 文件和 HTTPS 证书。
- `robots.txt`、`sitemap.xml`、品牌 404 与 Web App Manifest 均由静态构建生成。

## 素材策略

页面图片通过 `<picture>` 按 AVIF → WebP → 原图回退；宣传片默认使用启用 faststart 的网页轻量版 `public/media/time-traveler-pv-web.mp4`。原始素材目前保留，未经明确同意不删除。

## 正式开放闸门

在开放 PC 安装包、AI 对话、注册、公开测试或付费前，必须先完成并核验：运营主体与联系方式、正式隐私政策和用户协议、真实数据/权限/第三方清单、未成年人方案、AI 与算法相关手续、游戏属性预咨询，以及安装包签名和下载安全信息。详细回填项见 `docs/正式上线资料清单.md`。
