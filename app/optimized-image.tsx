import type { ImgHTMLAttributes } from "react";
import { withBasePath } from "./site-config";

type OptimizedImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "alt"> & {
  src: string;
  alt: string;
};

export default function OptimizedImage({ src, alt, ...imageProps }: OptimizedImageProps) {
  const stem = src.replace(/\.(?:jpe?g|png)$/i, "");

  // 浏览器优先选择体积最小的 AVIF，其次 WebP；旧浏览器仍可回退原始素材。
  return (
    <picture className="optimized-picture">
      <source srcSet={withBasePath(`${stem}.avif`)} type="image/avif" />
      <source srcSet={withBasePath(`${stem}.webp`)} type="image/webp" />
      {/* 静态托管没有图片代理，原生 img 是 picture 多格式回退所必需的。 */}
      <img src={withBasePath(src)} alt={alt} decoding="async" {...imageProps} />
    </picture>
  );
}
