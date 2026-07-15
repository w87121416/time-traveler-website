"use client";

import { useEffect, useRef } from "react";
import { withBasePath } from "./site-config";

const OPEN_PC_DOWNLOAD = "time-traveler:open-pc-download";

export function PcDownloadMenu() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    // 首屏按钮通过同页事件打开真正的 details，避免只改变视觉却没有更新可访问状态。
    const openMenu = () => {
      if (!detailsRef.current) return;
      detailsRef.current.open = true;
      detailsRef.current.querySelector("summary")?.focus({ preventScroll: true });
    };

    window.addEventListener(OPEN_PC_DOWNLOAD, openMenu);
    return () => window.removeEventListener(OPEN_PC_DOWNLOAD, openMenu);
  }, []);

  return (
    <details className="nav-download" ref={detailsRef}>
      <summary className="nav-cta" id="pc-download">
        获取 PC 版 <span aria-hidden="true">↘</span>
      </summary>
      <div className="nav-download-popover">
        <div className="nav-download-qr" aria-label="PC 下载二维码接口预留">
          <span>时</span>
          <small>QR 接口已预留</small>
        </div>
        <div className="nav-download-copy">
          <span>PC FIRST · WINDOWS / macOS 待确认</span>
          <strong>PC 版即将开放</strong>
          <p>正式下载地址接入后，可在这里直接扫码或下载安装包。</p>
          <button type="button" disabled>直接下载 · 待接入</button>
          <a href={withBasePath("/privacy/")}>下载前阅读隐私政策 ↗</a>
        </div>
      </div>
    </details>
  );
}

export function PcDownloadTrigger() {
  return (
    <button
      className="button button-primary"
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_PC_DOWNLOAD))}
    >
      获取 PC 版 <span aria-hidden="true">→</span>
    </button>
  );
}
