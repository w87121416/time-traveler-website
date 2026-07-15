import type { Metadata } from "next";
import { absoluteSiteUrl, withBasePath } from "../site-config";

export const metadata: Metadata = {
  title: "隐私政策｜时光旅人",
  description:
    "时光旅人官网与 PC 桌面陪伴游戏隐私政策预发布草案，说明个人信息、系统权限、AI 服务与用户权利。",
  alternates: {
    canonical: absoluteSiteUrl("/privacy/"),
  },
  // 当前仍需补齐运营主体和真实数据清单，正式审定前不进入搜索索引。
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "隐私政策｜时光旅人",
    description: "了解时光旅人如何处理个人信息、系统权限与 AI 交互数据。",
    url: absoluteSiteUrl("/privacy/"),
    images: [
      {
        url: absoluteSiteUrl("/og.png"),
        width: 1732,
        height: 908,
        alt: "时光旅人隐私政策",
      },
    ],
  },
};

const policySections = [
  ["overview", "政策说明"],
  ["collection", "信息收集与使用"],
  ["permissions", "桌面与系统权限"],
  ["ai", "AI 对话与模型服务"],
  ["third-parties", "委托处理与第三方"],
  ["storage", "存储、安全与跨境"],
  ["rights", "你的个人信息权利"],
  ["minors", "未成年人保护"],
  ["changes", "政策更新"],
  ["contact", "联系我们"],
];

const launchChecklist = [
  "运营主体完整法定名称、注册地址与常用联系地址",
  "隐私联系邮箱、客服与投诉渠道",
  "账号、设备、日志、聊天、语音和角色记忆的真实数据清单",
  "麦克风、屏幕、剪贴板、文件、通知等实际系统权限",
  "AI 模型、云存储、统计、崩溃监控等第三方服务商清单",
  "各类数据的存储地点、保存期限、删除与账号注销路径",
  "产品适用年龄、未成年人机制与是否涉及游戏实名认证",
];

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      {/* 隐私页沿用主站品牌识别，但收敛动效与装饰，优先保证长文可读性。 */}
      <header className="privacy-nav">
        <a className="privacy-brand" href={withBasePath("/")} aria-label="返回时光旅人官网">
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span>时光旅人</span>
        </a>
        <span className="privacy-status">预发布草案</span>
        <a className="privacy-back" href={withBasePath("/")}>返回官网 <span aria-hidden="true">↗</span></a>
      </header>

      <section className="privacy-hero">
        <div className="privacy-orbit" aria-hidden="true" />
        <div className="privacy-hero-copy">
          <p className="privacy-eyebrow">PRIVACY POLICY · TIME TRAVELER</p>
          <h1>隐私政策</h1>
          <p>
            我们重视你的个人信息与使用选择。本页面用于说明时光旅人官网及 PC 桌面陪伴游戏中的信息处理规则。
          </p>
        </div>
        <div className="privacy-version-card">
          <span>POLICY STATUS</span>
          <strong>0.1 / 草案</strong>
          <dl>
            <div><dt>发布日期</dt><dd>2026 年 7 月 15 日</dd></div>
            <div><dt>生效日期</dt><dd>待正式审定</dd></div>
            <div><dt>适用产品</dt><dd>官网与 PC 版</dd></div>
          </dl>
        </div>
      </section>

      <div className="privacy-draft-banner" role="note">
        <span>上线前重要提示</span>
        <p>
          本页当前为合规起草版本，不代表产品已经实施所有列举的数据处理活动。正式开放注册或下载前，必须按实际技术实现回填运营主体、数据字段、权限、第三方与保存期限，并由专业法务复核。
        </p>
      </div>

      <div className="privacy-layout">
        <aside className="privacy-sidebar" aria-label="隐私政策目录">
          <p>目录</p>
          <nav>
            {policySections.map(([id, label], index) => (
              <a href={`#${id}`} key={id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {label}
              </a>
            ))}
          </nav>
          <div className="privacy-side-note">
            <span>需要帮助？</span>
            <p>隐私联系邮箱将在运营主体确认后公布。</p>
          </div>
        </aside>

        <article className="privacy-content">
          <section className="policy-section" id="overview">
            <div className="policy-number">01</div>
            <h2>政策说明</h2>
            <p>
              本隐私政策适用于“时光旅人”官方网站以及由实际运营主体提供的 PC 桌面陪伴游戏。iOS、Android 或其他版本正式上线时，我们将根据对应功能、权限和分发渠道更新本政策。
            </p>
            <p>
              我们将遵循合法、正当、必要、诚信、公开透明与最小必要原则处理个人信息。只有在实现明确产品功能、保障安全或履行法律义务所必需时，才处理相应信息。
            </p>
            <div className="policy-callout policy-callout-warning">
              <strong>运营主体待确认</strong>
              <p>
                正式版本必须在此公开个人信息处理者的完整法定名称、注册地址或联系地址、隐私负责人及投诉渠道，不能仅以“时光旅人”品牌名称代替。
              </p>
            </div>
            <div className="policy-basis">
              <span>主要法律依据</span>
              <a href="https://www.npc.gov.cn/npc/c2/c30834/202108/t20210820_313088.html" target="_blank" rel="noreferrer">《个人信息保护法》↗</a>
              <a href="https://www.cac.gov.cn/2024-09/30/c_1729384452307680.htm" target="_blank" rel="noreferrer">《网络数据安全管理条例》↗</a>
              <a href="https://www.cac.gov.cn/2023-10/24/c_1699806932316206.htm" target="_blank" rel="noreferrer">《未成年人网络保护条例》↗</a>
            </div>
          </section>

          <section className="policy-section" id="collection">
            <div className="policy-number">02</div>
            <h2>我们如何收集和使用信息</h2>
            <p>
              下表是依据当前产品形态整理的待核对清单，并不表示所有项目都会被收集。正式政策只会保留产品实际处理的项目，并写明具体字段、是否必要、拒绝后果、存储位置与保存期限。
            </p>
            <div className="policy-table-wrap">
              <table className="policy-table">
                <thead>
                  <tr><th>使用场景</th><th>需要核实的信息</th><th>拟实现目的</th><th>当前状态</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>账号与登录</td>
                    <td>手机号、邮箱、昵称、用户 ID、第三方登录标识</td>
                    <td>注册、登录、云同步与找回账号</td>
                    <td><span className="status-pending">待研发确认</span></td>
                  </tr>
                  <tr>
                    <td>AI 陪伴与对话</td>
                    <td>文本输入、AI 回复、会话时间、角色记忆与用户反馈</td>
                    <td>生成回复、保持上下文与角色成长</td>
                    <td><span className="status-pending">待研发确认</span></td>
                  </tr>
                  <tr>
                    <td>语音互动</td>
                    <td>原始音频、转写文本、语音设置；是否提取声纹</td>
                    <td>语音识别、合成与互动</td>
                    <td><span className="status-sensitive">敏感项待确认</span></td>
                  </tr>
                  <tr>
                    <td>桌面陪伴</td>
                    <td>互动指令、角色状态、偏好设置；是否读取前台应用或屏幕</td>
                    <td>提供桌面常驻、动作反馈与模式切换</td>
                    <td><span className="status-sensitive">PC 重点核验</span></td>
                  </tr>
                  <tr>
                    <td>旅行与成长</td>
                    <td>游戏进度、角色收藏、虚拟照片、纪念品和设置</td>
                    <td>保存旅途记录与恢复游戏进度</td>
                    <td><span className="status-pending">待研发确认</span></td>
                  </tr>
                  <tr>
                    <td>安全与运行</td>
                    <td>系统版本、设备配置、IP、网络状态、崩溃与性能日志</td>
                    <td>兼容性、故障排查、安全与反作弊</td>
                    <td><span className="status-pending">待研发确认</span></td>
                  </tr>
                  <tr>
                    <td>付费功能</td>
                    <td>订单号、商品、金额、支付渠道与支付结果</td>
                    <td>结算、退款与订单查询</td>
                    <td><span className="status-pending">如上线付费功能</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="policy-callout">
              <strong>用户主动提供的信息</strong>
              <p>
                你在 AI 对话中可能主动提及健康、身份、位置或他人信息。正式产品应通过界面提示避免输入不必要的敏感信息，并明确这些内容是否会被保存、用于长期记忆、人工审核或模型改进。
              </p>
            </div>
          </section>

          <section className="policy-section" id="permissions">
            <div className="policy-number">03</div>
            <h2>桌面与系统权限</h2>
            <p>
              PC 桌面陪伴产品可能涉及不同于普通网页的系统能力。任何权限都应在实际使用相关功能时单独触发，并允许你在系统设置或产品设置中关闭。拒绝非必要权限，不应影响无关的基础功能。
            </p>
            <div className="permission-grid">
              <article><span>MIC</span><h3>麦克风</h3><p>是否仅在按键说话时调用，是否后台监听，音频与转写文本是否保存。</p><small>待确认是否申请</small></article>
              <article><span>SCREEN</span><h3>屏幕与窗口</h3><p>是否读取屏幕截图、窗口标题、前台应用、进程或已安装软件列表。</p><small>重点待确认</small></article>
              <article><span>FILES</span><h3>文件与图片</h3><p>是否读取用户选定文件、截图、头像、文件路径、EXIF 或其他元数据。</p><small>待确认是否申请</small></article>
              <article><span>CLIP</span><h3>剪贴板与输入</h3><p>是否读取剪贴板、全局快捷键、鼠标键盘事件或用户空闲时长。</p><small>重点待确认</small></article>
              <article><span>NOTICE</span><h3>系统通知</h3><p>是否发送角色消息、旅行返回或版本更新提醒，以及关闭方式。</p><small>待确认是否申请</small></article>
              <article><span>AUTO</span><h3>开机启动</h3><p>是否支持开机自启、后台运行与自动更新，如何随时停用。</p><small>待确认是否启用</small></article>
            </div>
            <p className="policy-emphasis">
              即使某项数据只在本机即时处理、不上传服务器，也属于信息处理活动，仍应真实说明调用范围、触发时机与关闭方法。
            </p>
          </section>

          <section className="policy-section" id="ai">
            <div className="policy-number">04</div>
            <h2>AI 对话、长期记忆与模型服务</h2>
            <p>
              为生成角色回复、语音或图片，产品可能需要将你的输入和必要上下文发送至公司自建或第三方 AI 服务。正式版本必须说明每项 AI 服务的提供方、接收的数据、服务器区域、保存期限，以及服务商是否将输入用于训练或产品改进。
            </p>
            <ol className="policy-steps">
              <li><span>01</span><div><strong>即时对话</strong><p>核实文本、语音或图片是否上传，以及提供回复所需的最小上下文范围。</p></div></li>
              <li><span>02</span><div><strong>长期记忆</strong><p>说明会提取哪些偏好、关系、情绪或日常信息，并提供查看、关闭、逐条删除与清空入口。</p></div></li>
              <li><span>03</span><div><strong>质量与安全</strong><p>区分必要的内容安全检测、错误排查与非必要的模型训练、人工抽检或画像分析。</p></div></li>
              <li><span>04</span><div><strong>用户控制</strong><p>允许用户删除聊天与记忆，说明删除如何同步至服务器、备份和模型服务商。</p></div></li>
            </ol>
            <div className="policy-callout policy-callout-warning">
              <strong>不得以一份总政策替代单独同意</strong>
              <p>
                涉及声纹、精确位置、不满十四周岁用户信息、向独立第三方提供或跨境传输等场景时，可能需要更醒目的单独告知与单独同意。
              </p>
            </div>
          </section>

          <section className="policy-section" id="third-parties">
            <div className="policy-number">05</div>
            <h2>委托处理、共享与第三方服务</h2>
            <p>
              我们不会用“合作伙伴”一词笼统代替必要披露。正式上线时将以独立清单列出 AI 模型、语音识别与合成、图像生成、云存储、CDN、登录、验证码、统计分析、崩溃监控、客服、自动更新、下载分发、支付及反作弊等实际接入服务。
            </p>
            <div className="third-party-template">
              <div><span>服务名称</span><strong>待填写</strong></div>
              <div><span>提供方完整名称</span><strong>待填写</strong></div>
              <div><span>使用目的与触发场景</span><strong>待填写</strong></div>
              <div><span>接收信息与系统权限</span><strong>待填写</strong></div>
              <div><span>处理角色与服务器地点</span><strong>待填写</strong></div>
              <div><span>隐私政策与联系方式</span><strong>待填写</strong></div>
            </div>
            <p>
              如发生合并、分立、资产转让或其他导致个人信息处理者变化的情况，我们将依法告知新的处理者信息，并要求其继续受本政策约束；处理目的或方式发生变化时，将依法重新履行告知与同意义务。
            </p>
          </section>

          <section className="policy-section" id="storage">
            <div className="policy-number">06</div>
            <h2>存储期限、地点与安全保护</h2>
            <p>
              我们将把个人信息保存至实现处理目的所必要的最短期限；法律法规另有要求的，从其规定。正式版本需要分别说明账号、聊天、长期记忆、语音、图片、日志、订单和备份的具体期限或确定方法。
            </p>
            <div className="storage-grid">
              <article><span>01</span><h3>存储地点</h3><p>待确认数据位于用户本机、中国境内服务器或境外服务商，以及境外人员远程访问情况。</p></article>
              <article><span>02</span><h3>保存期限</h3><p>待确认在线数据、日志、备份、向量记忆和第三方副本各自的保留与清理周期。</p></article>
              <article><span>03</span><h3>安全措施</h3><p>将只披露已经真实部署的访问控制、加密、去标识化、操作审计、备份和应急措施。</p></article>
            </div>
            <p>
              如果发生个人信息泄露、篡改或丢失，我们将依法采取补救措施，并根据适用要求向主管部门报告、向受影响用户告知事件情况、潜在影响及降低风险的建议。
            </p>
            <p>
              如果使用境外 AI、云服务、客服或允许境外团队访问境内用户数据，我们将在实际发生前完成适用的数据出境合规程序，并说明境外接收方、处理目的、信息种类和用户行使权利的方式。
            </p>
          </section>

          <section className="policy-section" id="rights">
            <div className="policy-number">07</div>
            <h2>你的个人信息权利</h2>
            <p>在适用法律规定的范围内，你有权通过产品内入口或隐私联系渠道提出以下请求：</p>
            <div className="rights-list">
              <div><span>查阅与复制</span><p>了解并获得我们处理的相关个人信息副本。</p></div>
              <div><span>更正与补充</span><p>修正不准确、不完整的账号或个人信息。</p></div>
              <div><span>删除</span><p>删除聊天、长期记忆、语音、图片或其他符合条件的信息。</p></div>
              <div><span>撤回同意</span><p>关闭非必要权限、统计或其他基于同意的处理。</p></div>
              <div><span>注销账号</span><p>结束账号服务，并了解角色进度、虚拟物品与依法留存数据的处理。</p></div>
              <div><span>解释与投诉</span><p>要求解释处理规则，并对我们的处理提出意见或投诉。</p></div>
            </div>
            <p>
              为保障账号与数据安全，我们可能在处理请求前核验身份。我们不会设置不合理条件限制合法请求，并将在法律规定期限内答复。具体操作路径和联系渠道将在正式版本中公布。
            </p>
          </section>

          <section className="policy-section" id="minors">
            <div className="policy-number">08</div>
            <h2>未成年人保护</h2>
            <p>
              未满十八周岁的用户应在监护人指导下使用网络产品。处理不满十四周岁未成年人的个人信息时，该等信息属于敏感个人信息，我们将依法取得父母或其他监护人的同意，并制定专门的儿童个人信息处理规则。
            </p>
            <p>
              正式上线前需确认产品最低使用年龄、年龄识别方式、监护人同意、未成年人模式、使用时长与消费限制，以及监护人查询和删除信息的渠道。如果产品被认定为网络游戏，还需另行落实实名认证、防沉迷、适龄提示和未成年人消费管理要求。
            </p>
            <div className="policy-callout">
              <strong>关于 AI 陪伴</strong>
              <p>
                产品应通过设计降低未成年人过度依赖风险，不将 AI 角色包装为真人、心理治疗师或现实人际关系的替代品，并为监护人提供必要的管理与反馈渠道。
              </p>
            </div>
          </section>

          <section className="policy-section" id="changes">
            <div className="policy-number">09</div>
            <h2>政策更新与停止运营</h2>
            <p>
              当产品功能、个人信息处理目的、方式、种类、第三方接收方或存储地点发生重要变化时，我们将更新本政策，并通过官网、客户端弹窗或其他显著方式通知你。依法需要重新取得同意的，我们会在变更生效前完成。
            </p>
            <p>
              如时光旅人停止运营，我们将提前通过显著方式通知，并依法删除或匿名化处理个人信息；法律规定需要继续保存的，我们将停止除存储和必要安全保护之外的处理。
            </p>
          </section>

          <section className="policy-section" id="contact">
            <div className="policy-number">10</div>
            <h2>联系我们</h2>
            <p>
              如你对本政策、个人信息处理或权利请求有任何疑问、意见或投诉，可以通过下列渠道联系我们。正式联系方式将在运营主体确认后开放。
            </p>
            <dl className="contact-card">
              <div><dt>个人信息处理者</dt><dd>［运营主体完整法定名称待确认］</dd></div>
              <div><dt>隐私联系邮箱</dt><dd>［待确认］</dd></div>
              <div><dt>客服与投诉渠道</dt><dd>［待确认］</dd></div>
              <div><dt>联系地址</dt><dd>［待确认］</dd></div>
            </dl>
          </section>

          {/* 此清单只在草案阶段展示，资料齐全并经法务审定后可改为内部验收记录。 */}
          <section className="launch-checklist" aria-labelledby="launch-checklist-title">
            <span>BEFORE LAUNCH</span>
            <h2 id="launch-checklist-title">正式生效前必须补齐</h2>
            <div>
              {launchChecklist.map((item, index) => (
                <p key={item}><i>{String(index + 1).padStart(2, "0")}</i>{item}</p>
              ))}
            </div>
          </section>
        </article>
      </div>

      <footer className="privacy-footer">
        <div>
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <strong>时光旅人</strong>
        </div>
        <p>隐私不是一段隐藏的小字，而是产品与用户之间长期的信任。</p>
        <a href={withBasePath("/")}>返回官网 ↑</a>
      </footer>
    </main>
  );
}
