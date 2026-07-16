export type ReleaseChannel = {
  platform: "PC" | "iOS" | "Android";
  phase: "preparing" | "testing" | "available" | "planned";
  downloadUrl: string | null;
  qrImage: string | null;
};

function optionalPublicUrl(value: string | undefined): string | null {
  const normalized = value?.trim();
  if (!normalized) return null;
  if (normalized.startsWith("/") && !normalized.startsWith("//")) return normalized;

  try {
    const url = new URL(normalized);
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}

const pcDownloadUrl = optionalPublicUrl(process.env.NEXT_PUBLIC_PC_DOWNLOAD_URL);
const iosDownloadUrl = optionalPublicUrl(process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL);
const androidDownloadUrl = optionalPublicUrl(process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL);

// 下载入口全部集中在这里：渠道确认后只需配置公开变量，不必改动页面结构。
export const releaseChannels: Record<"pc" | "ios" | "android", ReleaseChannel> = {
  pc: {
    platform: "PC",
    phase: pcDownloadUrl ? "available" : "preparing",
    downloadUrl: pcDownloadUrl,
    qrImage: optionalPublicUrl(process.env.NEXT_PUBLIC_PC_DOWNLOAD_QR),
  },
  ios: {
    platform: "iOS",
    phase: iosDownloadUrl ? "available" : "planned",
    downloadUrl: iosDownloadUrl,
    qrImage: optionalPublicUrl(process.env.NEXT_PUBLIC_IOS_DOWNLOAD_QR),
  },
  android: {
    platform: "Android",
    phase: androidDownloadUrl ? "available" : "planned",
    downloadUrl: androidDownloadUrl,
    qrImage: optionalPublicUrl(process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_QR),
  },
};
