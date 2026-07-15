"use client";

import { useState } from "react";

// Skill 演示保持同一位旅伴，只切换身份、能力与说话方式。
const skills = [
  {
    id: "focus",
    code: "FO",
    name: "专注搭档",
    summary: "拆解任务、整理节奏，在你分心时轻轻提醒。",
    prompt: "今天事情很多，我有点不知道先做哪件。",
    reply: "我们先完成最重要的一件，剩下的交给我帮你排好。",
  },
  {
    id: "listener",
    code: "LI",
    name: "心事倾听者",
    summary: "安静听你讲完，陪你慢慢梳理当下的心情。",
    prompt: "我今天有点累，想和你说说。",
    reply: "我在。你可以慢慢说，不急着马上得出答案。",
  },
  {
    id: "roleplay",
    code: "RP",
    name: "异世界旅伴",
    summary: "带着完整设定即兴演绎，让聊天变成连续故事。",
    prompt: "开始今晚的冒险吧，我想去一座雾中的港口。",
    reply: "雾港的船已经靠岸了。今晚，你想以什么身份出发？",
  },
  {
    id: "travel",
    code: "TR",
    name: "旅行向导",
    summary: "化身熟悉当地的向导，陪你想象下一段旅途。",
    prompt: "下一次旅行，你想带我去哪里？",
    reply: "下一站想看海，还是去一座藏着旧故事的城？",
  },
];

export default function SkillShowcase() {
  const [activeId, setActiveId] = useState(skills[0].id);
  const activeSkill = skills.find((skill) => skill.id === activeId) ?? skills[0];

  return (
    <div className="skill-demo" aria-label="AI 旅伴 Skill 切换演示">
      <div className="skill-demo-bar">
        <span>TIME TRAVELER · SKILL STUDIO</span>
        <span className="skill-demo-status"><i /> SKILL SYSTEM READY</span>
      </div>

      <div className="skill-demo-body">
        <div className="skill-tabs" aria-label="选择旅伴技能">
          {skills.map((skill) => (
            <button
              className="skill-tab"
              type="button"
              key={skill.id}
              aria-pressed={skill.id === activeSkill.id}
              onClick={() => setActiveId(skill.id)}
            >
              <span className="skill-tab-icon" aria-hidden="true">{skill.code}</span>
              <span className="skill-tab-copy">
                <strong>{skill.name}</strong>
                <small>{skill.summary}</small>
              </span>
              <i aria-hidden="true">{skill.id === activeSkill.id ? "✓" : "+"}</i>
            </button>
          ))}

          <div className="skill-add" aria-label="未来可以继续添加更多 Skill">
            <span aria-hidden="true">＋</span>
            <div><strong>添加 Skill</strong><small>更多身份持续更新</small></div>
          </div>
        </div>

        <div className="skill-chat">
          <div className="skill-chat-head">
            <div className="skill-companion">
              <span className="skill-avatar" aria-hidden="true">时</span>
              <div><strong>时光旅人</strong><small><i /> 在线 · 旅伴没有改变</small></div>
            </div>
            <span className="skill-active-badge">正在使用 · {activeSkill.name}</span>
          </div>

          {/* key 让每次切换身份时重新播放轻量对话入场动画。 */}
          <div className="skill-messages" key={activeSkill.id} aria-live="polite">
            <div className="skill-role-note">
              <span>{activeSkill.code}</span>
              <p><strong>{activeSkill.name}</strong>{activeSkill.summary}</p>
            </div>
            <p className="skill-message skill-message-user">{activeSkill.prompt}</p>
            <div className="skill-message-row">
              <span className="skill-message-avatar" aria-hidden="true">时</span>
              <p className="skill-message skill-message-companion">{activeSkill.reply}</p>
            </div>
          </div>

          <div className="skill-composer" aria-hidden="true">
            <span>＋ Skill</span>
            <p>继续和“{activeSkill.name}”聊聊…</p>
            <i>↑</i>
          </div>
        </div>
      </div>
    </div>
  );
}
