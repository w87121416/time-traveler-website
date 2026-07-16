"use client";

import { useEffect, useRef } from "react";
import { releaseChannels } from "./release-config";
import { withBasePath } from "./site-config";

const OPEN_PC_DOWNLOAD = "time-traveler:open-pc-download";
const pcRelease = releaseChannels.pc;

function publicAsset(path: string): string {
  return path.startsWith("/") ? withBasePath(path) : path;
}

function DownloadPanel({ dialog = false }: { dialog?: boolean }) {
  return (
    <div className={`nav-download-popover${dialog ? " nav-download-dialog-panel" : ""}`}>
      <div className="nav-download-qr" aria-label="PC 版发布状态">
        {pcRelease.qrImage ? (
          // 二维码必须保持像素原样，不能经过自适应图片压缩。
          // eslint-disable-next-line @next/next/no-img-element
          <img src={publicAsset(pcRelease.qrImage)} alt="PC 版官方下载二维码" />
        ) : (
          <>
            <span>时</span>
            <small>PREVIEW</small>
          </>
        )}
      </div>
      <div className="nav-download-copy">
        <span>PC FIRST · {pcRelease.downloadUrl ? "OFFICIAL DOWNLOAD" : "PUBLIC PREVIEW"}</span>
        <strong id={dialog ? "pc-download-dialog-title" : undefined}>
          {pcRelease.downloadUrl ? "PC 版现已开放" : "PC 版正在筹备"}
        </strong>
        <p>
          {pcRelease.downloadUrl
            ? "请只通过官网公布的地址下载。安装前可在这里核对版本与安全校验信息。"
            : "官网现已开放预览，公众下载尚未开启。正式测试渠道确认后会在这里更新。"}
        </p>
        {pcRelease.downloadUrl ? (
          <a className="download-status-link" href={pcRelease.downloadUrl} target="_blank" rel="noreferrer">
            前往官方下载 ↗
          </a>
        ) : (
          <a className="download-status-link" href={withBasePath("/about/")}>查看产品计划 ↗</a>
        )}
        <a href={withBasePath("/product-privacy/")}>阅读 PC 产品隐私待发布版 ↗</a>
      </div>
    </div>
  );
}

export function PcDownloadMenu() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogTriggerRef = useRef<HTMLElement | null>(null);
  const dialogScrollRef = useRef(0);

  useEffect(() => {
    // 首屏按钮通过同页事件打开真正的 details，避免只改变视觉却没有更新可访问状态。
    const openMenu = () => {
      // 手机端使用原生模态框，保证用户滚动到页面中后仍能看见发布信息。
      if (window.matchMedia("(max-width: 900px)").matches && dialogRef.current?.showModal) {
        if (!dialogRef.current.open) {
          dialogTriggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
          dialogScrollRef.current = window.scrollY;
          dialogRef.current.showModal();
          // dialog 位于页首导航的 DOM 中，显式还原滚动位置，避免浏览器自动聚焦时跳回顶部。
          window.scrollTo({ top: dialogScrollRef.current, left: 0, behavior: "auto" });
          dialogRef.current.querySelector("button")?.focus({ preventScroll: true });
        }
        return;
      }
      if (!detailsRef.current) return;
      detailsRef.current.open = true;
      detailsRef.current.querySelector("summary")?.focus({ preventScroll: true });
    };

    window.addEventListener(OPEN_PC_DOWNLOAD, openMenu);
    return () => window.removeEventListener(OPEN_PC_DOWNLOAD, openMenu);
  }, []);

  return (
    <>
      <details className="nav-download" ref={detailsRef}>
        <summary className="nav-cta" id="pc-download">
          {pcRelease.downloadUrl ? "下载 PC 版" : "PC 版进度"} <span aria-hidden="true">↘</span>
        </summary>
        <DownloadPanel />
      </details>
      <dialog
        className="nav-download-dialog"
        ref={dialogRef}
        aria-labelledby="pc-download-dialog-title"
        onClose={() => {
          window.scrollTo({ top: dialogScrollRef.current, left: 0, behavior: "auto" });
          dialogTriggerRef.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          // 点击半透明背景即可关闭；面板内部点击不会误触。
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <form method="dialog">
          <button type="submit" aria-label="关闭 PC 版发布信息">关闭</button>
        </form>
        <DownloadPanel dialog />
      </dialog>
    </>
  );
}

export function PcDownloadTrigger() {
  return (
    <button
      className="button button-primary"
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_PC_DOWNLOAD))}
    >
      {pcRelease.downloadUrl ? "下载 PC 版" : "查看 PC 版进度"} <span aria-hidden="true">→</span>
    </button>
  );
}

export function PcDownloadStickyTrigger() {
  return (
    <button
      className="mobile-sticky-cta"
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_PC_DOWNLOAD))}
    >
      {pcRelease.downloadUrl ? "下载 PC 版" : "PC 版进度"} <span aria-hidden="true">↗</span>
    </button>
  );
}
