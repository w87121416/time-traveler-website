import type { Metadata } from "next";
import {
  LegalDocument,
  LegalList,
  LegalSection,
  LegalTable,
} from "../legal-document";
import { absoluteSiteUrl, withBasePath } from "../site-config";

export const metadata: Metadata = {
  title: "隐私政策（中国大陆版·公开预览稿）｜时光旅人",
  description: "桌面伴侣时光旅人中国大陆版个人信息保护规则公开预览稿。",
  alternates: { canonical: absoluteSiteUrl("/product-privacy/") },
  // 公开预览稿尚未生效，先阻止搜索引擎主动收录，避免用户误认成最终政策。
  robots: { index: false, follow: false },
  openGraph: {
    title: "隐私政策（中国大陆版·公开预览稿）｜时光旅人",
    description: "桌面伴侣时光旅人中国大陆版个人信息保护规则公开预览稿。",
    url: absoluteSiteUrl("/product-privacy/"),
    images: [absoluteSiteUrl("/og.png")],
  },
};

const sections = [
  ["introduction", "引言与适用范围"],
  ["collection", "信息收集与使用"],
  ["permissions", "设备权限"],
  ["local-storage", "Cookie 与本地存储"],
  ["sharing", "委托、共享与披露"],
  ["third-parties", "第三方服务清单"],
  ["storage", "存储与安全"],
  ["rights", "你的个人信息权利"],
  ["minors", "未成年人保护"],
  ["ai", "AI 对话与内容安全"],
  ["updates", "政策更新"],
  ["contact", "联系我们"],
] as const;

const collectionRows = [
  ["账号注册与登录", "手机号、验证码、账号 ID、昵称、头像、登录凭证、第三方登录标识（以实际提供方式为准）", "创建与验证账号、找回账号、同步数据和保障账号安全", <span className="status-pending" key="account">上线前确认</span>],
  ["实名与防沉迷", "姓名、身份证件信息、认证结果、年龄段、在线时长和必要的充值记录", "履行网络游戏实名、防沉迷和未成年人保护义务", <span className="status-sensitive" key="identity">敏感信息</span>],
  ["游戏运行与成长", "角色 ID、游戏进度、亲密度、道具、旅行记录、日志、成就和活动记录", "保存进度、恢复异常、展示角色状态与发放奖励", <span className="status-pending" key="game">按实际功能</span>],
  ["桌宠互动与个性化", "互动记录、偏好设置、点击或拖拽行为、必要的对话上下文和设备状态", "呈现角色动作、提醒、对话衔接与个性化反馈", <span className="status-pending" key="pet">可管理</span>],
  ["语音互动", "你主动提供的录音片段、语音指令文本、识别结果及音频质量参数", "语音唤醒、语音转写、语音回复与故障排查", <span className="status-sensitive" key="voice">需麦克风授权</span>],
  ["AI 对话与 Skill", "文本或语音转写、必要上下文、所选 Skill、角色回复、反馈与安全风险标记", "生成回复、保持上下文、切换角色能力并开展内容安全审核", <span className="status-pending" key="ai">避免输入敏感信息</span>],
  ["订单与支付", "商品或服务名称、订单号、渠道、金额、时间、到账与退款状态", "交付数字内容、对账、退款、开票与反欺诈", <span className="status-pending" key="pay">付费功能上线时</span>],
  ["客服与投诉", "联系方式、账号与订单信息、沟通记录，以及你按需提交的截图或证明材料", "核验身份、定位问题、处理投诉、未成年人消费或侵权争议", <span className="status-pending" key="support">按请求提供</span>],
  ["安全与运行", "设备型号、系统版本、IP 地址、网络状态、登录、操作、崩溃和异常行为日志", "保障运行与账号安全、反作弊、反欺诈和故障排查", <span className="status-pending" key="security">最小必要</span>],
  ["活动、通知与调研", "活动参与和获奖记录、通知状态、推送标识、问卷反馈与同意状态", "发放奖励、发送服务提醒、开展自愿调研", <span className="status-pending" key="notice">可关闭或拒绝</span>],
];

const permissionRows = [
  ["麦克风", "语音唤醒、语音指令与语音聊天", "关闭后语音功能不可用，不影响文字互动与无关功能"],
  ["通知", "角色、旅行状态、服务和版本更新提醒", "可在系统或产品设置中关闭"],
  ["文件或存储", "保存你选择的壁纸、明信片、截图、日志或必要资源缓存", "仅在你主动选择文件或相关功能需要时调用"],
  ["相册或图片", "设置头像、上传客服截图、保存图片", "仅处理你主动选择的图片"],
  ["摄像头", "扫码登录、拍摄头像或实名认证辅助（如实际提供）", "当前未确认使用；不用则从正式版删除"],
  ["剪贴板", "粘贴邀请码、兑换码或客服内容（如实际提供）", "只在你主动粘贴或触发相关功能时读取"],
  ["位置", "地区化服务（如实际提供）", "产品默认不收集精确位置；如需使用将另行显著说明"],
];

const thirdPartyRows = [
  ["AI 对话模型", "千问 3.6 Flash", "生成角色回复、Skill 角色能力与必要的内容安全处理", "用户输入、必要上下文、输出内容和风险标记", <span className="status-sensitive" key="qwen">服务主体、区域与留存待核验</span>],
  ["实名与防沉迷", "待生产环境选定", "实名核验和未成年人识别", "姓名、证件信息、认证结果与年龄段", <span className="status-pending" key="realname">未接入</span>],
  ["支付服务", "微信支付、支付宝或应用商店等，以最终渠道为准", "订单支付、到账和退款", "订单号、金额、支付状态及必要设备网络信息", <span className="status-pending" key="payment">未接入</span>],
  ["语音识别与合成", "待生产环境选定", "语音转文字、文字转语音或语音唤醒辅助", "音频片段、识别文本及必要设备网络信息", <span className="status-pending" key="speech">未接入</span>],
  ["统计、崩溃与安全", "待生产环境选定", "性能诊断、反作弊和安全风控", "设备信息、崩溃栈、日志及必要风险信息", <span className="status-pending" key="analytics">未接入</span>],
];

export default function ProductPrivacyPage() {
  return (
    <LegalDocument
      status="中国大陆版 · 公开预览"
      eyebrow="PRIVACY POLICY · MAINLAND CHINA"
      title="时光旅人隐私政策"
      intro="这份政策说明桌面伴侣时光旅人在中国大陆地区拟如何处理个人信息、调用系统权限，以及你可以如何管理自己的数据。"
      versionLabel="0.9 / 未生效"
      versionItems={[
        { label: "文档来源", value: "V1.0 起草版" },
        { label: "内容整理", value: "2026 年 7 月 22 日" },
        { label: "公开日期", value: "2026 年 7 月 23 日" },
        { label: "生效日期", value: "待最终版本审定" },
        { label: "适用范围", value: "未来中国大陆 PC 客户端" },
      ]}
      noticeTitle="公开预览稿 · 尚未生效"
      notice={<>本页依据《中国大陆版隐私协议》起草材料整理并公开展示，用于提前说明拟采用的个人信息保护规则，不代表客户端已实际收集下列全部信息。最终版本生效前，必须按真实代码、权限、SDK、服务器和业务流程逐项核验。</>}
      directoryLabel="时光旅人隐私政策目录"
      sections={sections}
      highlights={[
        { code: "DATA", title: "只处理必要信息", detail: "不同功能需要的信息不同；未启用的功能不应提前收集。" },
        { code: "AI", title: "对话与记忆可管理", detail: "正式版需要提供聊天、长期记忆和授权的查看与删除入口。" },
        { code: "CONTROL", title: "权限随时可关闭", detail: "拒绝非必要权限，不应影响与该权限无关的基础功能。" },
        { code: "CONTACT", title: "可提出权利请求", detail: "可通过公开邮箱申请查阅、更正、删除或投诉。" },
      ]}
      relatedLinks={[
        { href: "/user-agreement/", label: "中国大陆版用户协议" },
        { href: "/privacy/", label: "官方网站隐私说明" },
        { href: "/safety/", label: "AI 安全说明" },
      ]}
    >
      <LegalSection id="introduction" number="01" title="引言与适用范围" summary="本政策只面向未来的中国大陆 PC 客户端；当前官网仍适用单独的官网隐私说明。">
        <p>
          南京形而不器科技有限公司（以下简称“我们”）重视你的个人信息与隐私安全。我们将遵循合法、正当、必要、诚信、目的明确、最小必要、公开透明和安全保障的原则处理个人信息。
        </p>
        <p>
          本政策拟适用于你在中国大陆地区下载、安装、注册、登录或使用“桌面伴侣时光旅人”客户端、桌宠互动、AI/语音、旅行、活动及客服等相关服务时发生的个人信息处理活动。当前静态官网的数据规则请查阅<a href={withBasePath("/privacy/")}>《官方网站隐私说明》</a>。
        </p>
        <div className="policy-callout policy-callout-warning">
          <strong>请特别关注</strong>
          <p>涉及敏感个人信息、儿童信息、系统权限、第三方提供、公开披露或个人信息出境时，我们会依法采用显著提示、单独同意或其他适当方式。不同意非必要处理时，你仍可使用不依赖该信息的功能。</p>
        </div>
        <dl className="contact-card">
          <div><dt>个人信息处理者</dt><dd>南京形而不器科技有限公司</dd></div>
          <div><dt>统一社会信用代码</dt><dd>91320191MAELQ1L0XQ</dd></div>
          <div><dt>产品状态</dt><dd>PC 客户端尚未面向公众开放下载</dd></div>
        </dl>
      </LegalSection>

      <LegalSection id="collection" number="02" title="我们如何收集和使用信息" summary="下表是上线前的数据核对清单，“可能处理”不等于当前已经收集。">
        <p>
          我们只会为实现明确功能、保障安全或履行法定义务处理必要信息。设备、系统、版本、渠道和你实际选择的功能不同，处理范围也可能不同；正式政策应与产品真实行为、权限弹窗和第三方清单保持一致。
        </p>
        <LegalTable label="个人信息处理场景" headers={["场景", "可能处理的信息", "使用目的", "审阅状态"]} rows={collectionRows} />
        <div className="policy-callout">
          <strong>你主动提供的内容</strong>
          <p>请勿在聊天、反馈、头像或客服材料中提交与功能无关的身份证号码、银行卡、精确住址、健康状况、儿童信息或他人个人信息。确有必要时，我们会先说明用途与保护方式。</p>
        </div>
      </LegalSection>

      <LegalSection id="permissions" number="03" title="设备权限调用" summary="权限应在你实际使用相关功能时触发，并能在系统或产品设置中关闭。">
        <p>不同 Windows 版本与分发渠道的权限名称可能不同。正式上线时，我们会按实际调用时机、频率、是否上传服务器和关闭路径更新本表。</p>
        <LegalTable label="设备权限说明" headers={["权限", "对应功能", "关闭后的影响与说明"]} rows={permissionRows} />
        <p className="policy-emphasis">即使某项信息只在本机即时处理而不上传服务器，我们也会说明调用范围与触发时机。</p>
      </LegalSection>

      <LegalSection id="local-storage" number="04" title="Cookie、同类技术与本地存储" summary="本地缓存用于登录、设置、资源与安全，不应用于政策外的跟踪目的。">
        <LegalList>
          <li>为保持登录、记住设置、保存游戏资源、加快加载、记录必要崩溃信息和保障安全，我们可能使用 Cookie、LocalStorage、本地缓存、日志或设备标识等技术。</li>
          <li>你可以通过系统或产品设置清理缓存或限制相关技术；这可能清除登录状态、下载资源或个性化设置，但不应影响无关功能。</li>
          <li>如果第三方统计、归因、推送、反作弊或安全服务使用同类技术，我们会在正式的第三方服务清单中列明名称、运营方、目的、信息类型和隐私链接。</li>
        </LegalList>
      </LegalSection>

      <LegalSection id="sharing" number="05" title="委托处理、共享、转让与公开披露" summary="我们不会出售个人信息，也不会用笼统的“合作伙伴”代替必要披露。">
        <h3 className="legal-subheading">委托处理</h3>
        <p>为提供云服务、实名、防沉迷、支付、客服、语音、AI、安全或运维能力，我们可能委托服务商处理必要信息，并通过合同约定处理目的、期限、方式、信息种类、安全措施和双方责任。</p>
        <h3 className="legal-subheading">共享与转让</h3>
        <LegalList>
          <li>取得你的单独同意，或法律法规另有规定；</li>
          <li>为实现你选择的登录、支付、实名、AI/语音、客服和安全功能，向已披露的服务商提供最小必要信息；</li>
          <li>依法处理侵权、消费者、未成年人消费、账号安全或司法行政机关要求；</li>
          <li>合并、分立、收购、资产转让或破产清算导致处理者变化时，我们会告知新的处理者，并要求其继续履行保护义务。</li>
        </LegalList>
        <h3 className="legal-subheading">公开披露</h3>
        <p>原则上我们不会公开披露你的个人信息。确有必要时，我们会说明目的、信息类型和影响范围，并依法取得单独同意；法律法规另有规定的除外。</p>
      </LegalSection>

      <LegalSection id="third-parties" number="06" title="第三方 SDK 与合作方清单" summary="现阶段仅确认模型方案，其他服务仍待选型；正式版必须列出准确主体和隐私链接。">
        <p>以下内容来自当前团队信息与协议原稿，只是上线前核对表。没有完成服务主体、初始化时机、数据流、服务器区域、保存期限和退出方式核验的项目，不得在正式客户端启用。</p>
        <LegalTable label="第三方服务核对清单" headers={["服务", "当前方案", "目的", "可能处理的信息", "状态"]} rows={thirdPartyRows} />
        <div className="policy-callout policy-callout-warning">
          <strong>关于千问 3.6 Flash</strong>
          <p>该模型名称来自团队提供的信息，不等于已确认实际接口、签约服务主体或数据路径。正式发布前需要用生产环境合同、接口配置和服务商隐私文件进行复核。</p>
        </div>
      </LegalSection>

      <LegalSection id="storage" number="07" title="信息存储、出境与安全保护" summary="原则上在中国大陆境内存储，并只保存实现目的所需的最短期限。">
        <div className="storage-grid">
          <article><span>01</span><h3>存储地点</h3><p>中国大陆运营中收集和产生的信息原则上存储于境内；正式版将列明实际服务器和第三方区域。</p></article>
          <article><span>02</span><h3>保存期限</h3><p>账号、对话、记忆、语音、日志、订单与备份分别按目的最短期限保存，法律另有要求的除外。</p></article>
          <article><span>03</span><h3>安全措施</h3><p>采用与风险相适应的访问控制、加密传输、审计、最小授权、应急响应和供应商管理。</p></article>
        </div>
        <p>保存期限届满、目的已经实现或无法实现、你依法撤回同意或注销账号且不存在法定留存义务时，我们将删除或匿名化处理相关信息。</p>
        <p>如未来确需向境外提供个人信息，我们会在发生前说明境外接收方、目的、方式、信息种类、保存期限和权利行使方式，并完成适用的评估、认证、备案、单独同意或其他法定程序。</p>
        <p>发生泄露、篡改或丢失等安全事件时，我们会立即采取补救措施，并依法向主管部门报告、向受影响用户告知风险和降低影响的建议。</p>
      </LegalSection>

      <LegalSection id="rights" number="08" title="你的个人信息权利" summary="你可以申请查阅、复制、更正、删除、撤回同意、注销账号或提出投诉。">
        <div className="rights-list">
          <div><span>查阅与复制</span><p>查看账号资料、订单、游戏数据、授权状态和其他依法可获得的信息。</p></div>
          <div><span>更正与补充</span><p>修正不准确或不完整的信息；实名信息可能需要重新核验。</p></div>
          <div><span>删除</span><p>删除符合条件的聊天、记忆、语音、图片或其他信息。</p></div>
          <div><span>撤回同意</span><p>关闭麦克风、通知、相册等权限，或撤回特定可选处理。</p></div>
          <div><span>注销账号</span><p>正式客户端开放后提供产品内入口；上线前可通过客服邮箱提出请求。</p></div>
          <div><span>解释、限制与投诉</span><p>要求解释处理规则，拒绝不必要处理，或提出意见与投诉。</p></div>
        </div>
        <p>为保护账号和信息安全，我们可能在处理请求前核验身份。我们通常会在收到完整请求后十五个工作日内答复；法律法规另有期限要求的，从其规定。</p>
      </LegalSection>

      <LegalSection id="minors" number="09" title="未成年人及儿童信息保护" summary="未成年人应在监护人指导下使用；不满十四周岁儿童的信息需要更严格保护。">
        <LegalList>
          <li>未满十八周岁的用户应取得监护人同意，并由监护人合理管理使用时间、消费、权限与内容接触。</li>
          <li>处理不满十四周岁儿童个人信息前，我们将依法取得监护人同意，遵循最小必要原则，并提供专门规则与权利渠道。</li>
          <li>如果产品以网络游戏形式运营，我们将按届时适用规则落实实名验证、防沉迷、适龄提示、游戏时段、消费与功能限制。</li>
          <li>监护人可通过公开邮箱申请查询、更正、删除儿童信息，撤回同意，处理账号或未成年人消费争议。</li>
        </LegalList>
        <div className="policy-callout">
          <strong>AI 陪伴边界</strong>
          <p>产品不会将 AI 角色描述为真人、专业心理治疗师或现实关系的替代品；未成年人相关互动、语音和生成内容将根据适用年龄设置必要限制。</p>
        </div>
      </LegalSection>

      <LegalSection id="ai" number="10" title="AI 对话、长期记忆与内容安全" summary="AI 回复仅供娱乐互动，可能出错；对话、记忆和模型数据路径必须可理解、可管理。">
        <ol className="policy-steps">
          <li><span>01</span><div><strong>生成回复</strong><p>根据你输入的文本、语音转写、所选 Skill 和必要上下文生成角色回复。</p></div></li>
          <li><span>02</span><div><strong>长期记忆</strong><p>正式版需说明会提取哪些偏好或日常信息，并提供查看、关闭、逐条删除和清空能力。</p></div></li>
          <li><span>03</span><div><strong>安全审核</strong><p>为识别违法、有害、侵权或危害未成年人的内容，可能对输入与输出进行必要检测。</p></div></li>
          <li><span>04</span><div><strong>模型改进</strong><p>对话是否用于人工抽检、模型训练或效果优化必须单独说明；需要同意时，将另行取得授权。</p></div></li>
        </ol>
        <p>AI 输出可能不准确、不完整、不适合特定情境或与事实不一致，不构成医疗、法律、金融、心理、投资或其他专业建议。紧急情况应联系现实中的专业机构或紧急服务。</p>
      </LegalSection>

      <LegalSection id="updates" number="11" title="政策更新与停止运营" summary="重要处理方式变化会以显著方式通知，需要重新同意的会先取得同意。">
        <p>法律法规、产品功能、处理目的、权限、SDK、合作方、存储区域或联系方式变化时，我们可能更新本政策。重大变更会通过客户端弹窗、站内消息、官网公告、邮件或其他显著方式通知。</p>
        <p>未经你的明确同意，我们不会削减你依法享有的个人信息权利。正式产品将提供持续可访问的最新版本；如停止运营，我们会提前显著通知，并依法删除或匿名化信息，法定留存部分仅继续用于必要存储与保护。</p>
      </LegalSection>

      <LegalSection id="contact" number="12" title="联系我们" summary="协议、隐私、客服、未成年人保护与投诉目前统一使用公开邮箱。">
        <p>如你对本政策、个人信息处理或权利请求有疑问、意见或投诉，可以通过以下方式联系我们。请勿在首次邮件中发送完整身份证件、密码或其他不必要的敏感信息。</p>
        <dl className="contact-card">
          <div><dt>个人信息处理者</dt><dd>南京形而不器科技有限公司</dd></div>
          <div><dt>隐私、客服与投诉邮箱</dt><dd><a href="mailto:414011506@qq.com">414011506@qq.com</a></dd></div>
          <div><dt>未成年人保护通道</dt><dd><a href="mailto:414011506@qq.com">414011506@qq.com</a></dd></div>
          <div><dt>联系地址</dt><dd>中国（江苏）自由贸易试验区南京片区七里桥北路1号南京江北新区人力资源服务产业园一期17栋106-707室</dd></div>
          <div><dt>一般响应期限</dt><dd>收到完整请求后通常不超过十五个工作日</dd></div>
        </dl>
        <div className="policy-basis">
          <span>同时阅读</span>
          <a href={withBasePath("/user-agreement/")}>《中国大陆版用户协议》</a>
          <a href={withBasePath("/privacy/")}>《官方网站隐私说明》</a>
        </div>
      </LegalSection>
    </LegalDocument>
  );
}
