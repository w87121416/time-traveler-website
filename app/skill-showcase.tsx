import OptimizedImage from "./optimized-image";

export default function SkillShowcase() {
  return (
    <div className="skill-reference" aria-label="朝朝聊天中载入 Skill 的界面演示">
      <figure className="skill-reference-scene">
        <OptimizedImage
          className="skill-reference-background"
          src="/images/skill-ui-reference.png"
          alt="朝朝在桌面陪伴用户的产品界面"
          width="1284"
          height="730"
          loading="lazy"
        />
        <div className="skill-reference-tint" aria-hidden="true" />
        <div className="skill-reference-status">
          <span><i /> AI 角色演示界面</span>
          <small>COMPANION ONLINE</small>
        </div>
        <figcaption>
          <span>DESKTOP COMPANION / 001</span>
          <strong>同一位朝朝，<br />多一种回应方式。</strong>
        </figcaption>
      </figure>

      {/* 单一聊天面板直接展示 Skill 如何工作，不再用一排按钮模拟选择器。 */}
      <section className="skill-reference-chat">
        <header>
          <div>
            <span className="skill-reference-avatar" aria-hidden="true">
              <OptimizedImage src="/images/zhaozhao-profile-bloom.png" alt="" width="1672" height="941" />
            </span>
            <p><strong>朝朝</strong><small><i /> AI 旅伴 · 在线 · 共同记忆已连接</small></p>
          </div>
          <span className="skill-reference-active">运势 · 已载入</span>
        </header>

        <div className="skill-reference-messages">
          <div className="skill-reference-role">
            <span>运</span>
            <p><strong>Skill 已进入当前对话</strong>结合此刻的聊天，给出今天的节奏与情绪提醒。</p>
          </div>

          <p className="skill-reference-user">朝朝，帮我看看今天的状态吧。</p>
          <div className="skill-reference-reply">
            <span aria-hidden="true">
              <OptimizedImage src="/images/zhaozhao-profile-bloom.png" alt="" width="1672" height="941" />
            </span>
            <p>今天的关键词是“慢一点”。先照顾好自己的节奏，好运会从完成手边的小事开始。</p>
          </div>

          <div className="skill-reference-reading">
            <span>今日提醒 · 07 / 16</span>
            <strong>稳定自己的节奏</strong>
            <small>适合：整理、完成、好好休息</small>
          </div>
        </div>

        <div className="skill-reference-composer" aria-hidden="true">
          <p>继续和朝朝聊聊…</p>
          <i>↑</i>
        </div>
      </section>
    </div>
  );
}
