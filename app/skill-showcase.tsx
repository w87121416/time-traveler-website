"use client";

import { useState } from "react";
import { withBasePath } from "./site-config";

// Skill 只改变本次聊天的身份和能力，不替换用户已经熟悉的旅伴。
const skills = [
  {
    id: "focus",
    icon: "专",
    name: "专注搭档",
    shortName: "专注",
    summary: "拆解任务、整理节奏，在你分心时轻轻提醒。",
    prompt: "今天事情很多，我有点不知道先做哪件。",
    reply: "先把最重要的一件交给我，我们一起拆成三个小步骤。",
  },
  {
    id: "listener",
    icon: "心",
    name: "心事倾听者",
    shortName: "倾听",
    summary: "安静听你讲完，陪你慢慢梳理当下的心情。",
    prompt: "我今天有点累，想和你说说。",
    reply: "我在。你慢慢说，不需要立刻得出答案。",
  },
  {
    id: "roleplay",
    icon: "演",
    name: "异世界旅伴",
    shortName: "扮演",
    summary: "添加完整角色设定，让一段对话进入连续世界观。",
    prompt: "今晚换一个身份，带我去雾中的港口吧。",
    reply: "雾港的船已经靠岸。旅人，你想带着怎样的名字出发？",
  },
  {
    id: "travel",
    icon: "旅",
    name: "旅行向导",
    shortName: "旅行",
    summary: "化身熟悉当地的向导，陪你规划或想象下一段旅途。",
    prompt: "下一次旅行，你想带我去哪里？",
    reply: "去看海吧。我已经替你记下日落最温柔的那段路。",
  },
];

export default function SkillShowcase() {
  const [activeId, setActiveId] = useState(skills[0].id);
  const activeSkill = skills.find((skill) => skill.id === activeId) ?? skills[0];

  return (
    <div className="skill-reference" aria-label="时光旅人 Skill 界面交互演示">
      <img
        className="skill-reference-background"
        src={withBasePath("/images/skill-ui-reference.png")}
        alt="昭昭桌面陪伴与聊天界面概念图"
        width="1284"
        height="730"
        loading="lazy"
      />
      <div className="skill-reference-tint" aria-hidden="true" />

      <div className="skill-reference-status">
        <span><i /> 产品界面概念演示</span>
        <small>SKILL PANEL · INTERACTIVE</small>
      </div>

      {/* 桌面下方的 Skill 坞用于快速切换，本体与聊天记录仍然保持连续。 */}
      <div className="skill-reference-dock" aria-label="选择旅伴 Skill">
        {skills.map((skill) => (
          <button
            type="button"
            key={skill.id}
            aria-pressed={skill.id === activeSkill.id}
            onClick={() => setActiveId(skill.id)}
          >
            <span aria-hidden="true">{skill.icon}</span>
            <small>{skill.shortName}</small>
          </button>
        ))}
        <button className="skill-reference-add" type="button" aria-label="更多 Skill 敬请期待" disabled>
          <span aria-hidden="true">＋</span>
          <small>添加</small>
        </button>
      </div>

      <section className="skill-reference-chat" aria-live="polite">
        <header>
          <div>
            <span className="skill-reference-avatar" aria-hidden="true">昭</span>
            <p><strong>昭昭</strong><small><i /> 在线 · 旅伴未改变</small></p>
          </div>
          <span className="skill-reference-active">{activeSkill.icon} · {activeSkill.name}</span>
        </header>

        {/* key 让切换 Skill 时重新播放一次轻量的对话入场动画。 */}
        <div className="skill-reference-messages" key={activeSkill.id}>
          <div className="skill-reference-role">
            <span>{activeSkill.icon}</span>
            <p><strong>已载入：{activeSkill.name}</strong>{activeSkill.summary}</p>
          </div>

          {activeSkill.id === "roleplay" && (
            <figure className="skill-reference-world">
              <img
                src={withBasePath("/images/role-angel-preview.jpg")}
                alt="异世界天使角色外观示例"
                width="1280"
                height="720"
                loading="lazy"
              />
              <figcaption>异世界角色外观示例 · 可由 Skill 载入不同设定</figcaption>
            </figure>
          )}

          <p className="skill-reference-user">{activeSkill.prompt}</p>
          <div className="skill-reference-reply">
            <span aria-hidden="true">昭</span>
            <p>{activeSkill.reply}</p>
          </div>
        </div>

        <div className="skill-reference-composer" aria-hidden="true">
          <span>＋ Skill</span>
          <p>继续和“{activeSkill.name}”聊聊…</p>
          <i>↑</i>
        </div>
      </section>

      <p className="skill-reference-caption">同一位昭昭 · 四种相处方式 · 更多 Skill 可持续添加</p>
    </div>
  );
}
