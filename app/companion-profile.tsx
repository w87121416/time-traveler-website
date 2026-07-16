"use client";

import { useState } from "react";
import OptimizedImage from "./optimized-image";

// 朝朝的官网展示强调“相处方式”，不直接暴露角色制作阶段的三视图原型稿。
const profileModes = [
  {
    id: "quiet",
    code: "QUIET",
    label: "安静守候",
    summary: "你专注时，她会把存在感放轻一点。",
    quote: "你先忙，我就在这里。等你回头的时候，我还在。",
    image: "/images/zhaozhao-profile-side.png",
    imageAlt: "朝朝安静望向远方的侧面角色插画",
    signals: [
      ["相处距离", "靠近但不打扰"],
      ["回应节奏", "轻声、简短"],
      ["适合时刻", "工作与学习"],
    ],
  },
  {
    id: "active",
    code: "HELLO",
    label: "主动搭话",
    summary: "发现你停下来时，她也会先开口。",
    quote: "你在这里停了一会儿。要不要和我说说，刚刚在想什么？",
    image: "/images/zhaozhao-profile-bloom.png",
    imageAlt: "朝朝回头看向用户的水墨角色插画",
    signals: [
      ["相处距离", "先轻轻开口"],
      ["回应节奏", "自然、有来回"],
      ["适合时刻", "发呆与休息"],
    ],
  },
  {
    id: "memory",
    code: "MEMORY",
    label: "带着记忆",
    summary: "共同经历会慢慢进入下一次对话。",
    quote: "我还记得你说过想去看海。要把它放进下一次旅行吗？",
    image: "/images/aquarium-memory.jpg",
    imageAlt: "朝朝在水族馆看金鱼的共同记忆",
    signals: [
      ["相处距离", "从共同经历开始"],
      ["回应节奏", "带着记忆回应"],
      ["适合时刻", "长期相处"],
    ],
  },
];

export default function CompanionProfile() {
  const [activeId, setActiveId] = useState(profileModes[0].id);
  const activeMode = profileModes.find((mode) => mode.id === activeId) ?? profileModes[0];

  return (
    <div className="profile-showcase" aria-label="朝朝角色相处方式演示">
      <div className="profile-stage">
        <div className="profile-stage-head">
          <span>COMPANION / 001</span>
          <span><i /> ONLINE</span>
        </div>
        <div className="profile-name" aria-hidden="true">
          <small>ZHAO ZHAO</small>
          <strong>朝朝</strong>
        </div>
        <div className="profile-orbit profile-orbit-one" aria-hidden="true" />
        <div className="profile-orbit profile-orbit-two" aria-hidden="true" />
        <OptimizedImage
          key={activeMode.id}
          src={activeMode.image}
          alt={activeMode.imageAlt}
          width="1672"
          height="941"
          loading="lazy"
        />
        <div className="profile-live-card">
          <small>当前相处方式</small>
          <strong>{activeMode.label}</strong>
          <span>{activeMode.summary}</span>
        </div>
        <div className="profile-id-chip" aria-hidden="true">TT · Z01</div>
      </div>

      <div className="profile-console">
        <div className="profile-console-head">
          <span>PERSONALITY SIGNAL</span>
          <small>选择一种状态查看回应</small>
        </div>
        <div className="profile-mode-tabs" aria-label="选择朝朝的相处方式">
          {profileModes.map((mode) => (
            <button
              key={mode.id}
              type="button"
              aria-pressed={mode.id === activeMode.id}
              onClick={() => setActiveId(mode.id)}
            >
              <span>{mode.code}</span>
              <strong>{mode.label}</strong>
            </button>
          ))}
        </div>

        {/* key 用于在切换相处方式时重新播放轻量的内容入场动画。 */}
        <div className="profile-response" key={activeMode.id} aria-live="polite">
          <span>朝朝 · 此刻会这样说</span>
          <blockquote>“{activeMode.quote}”</blockquote>
          <dl>
            {activeMode.signals.map(([term, value]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
