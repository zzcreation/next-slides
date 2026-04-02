import Slides from "@/components/Slides";

const slides = [
  {
    id: 1,
    title: "什么是 OpenClaw 小龙虾？",
    content: (
      <div className="space-y-4">
        <p className="text-xl">
          OpenClaw（小龙虾）是一个<strong>本地优先</strong>的 AI 助手平台，支持 20+ 通讯渠道。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>本地部署，数据完全可控</li>
          <li>支持 Telegram、Discord、飞书、微信等多个平台</li>
          <li>强大的 Agent 能力，支持多 Agent 协作</li>
          <li>开源免费，社区活跃</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: "创始人故事",
    content: (
      <div className="space-y-4">
        <p className="text-xl">
          OpenClaw 由 <strong>ZZCreation</strong> 创建，旨在打造一个完全可控的 AI 助手平台。
        </p>
        <p className="text-gray-700">
         创始人拥有丰富的 AI 和自动化经验，致力于让每个人都能拥有自己的 AI 助手。
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "背景与诞生",
    content: (
      <div className="space-y-4">
        <p className="text-xl">
          2025年，AI 助手如 ChatGPT、Claude 等风靡全球，但存在数据隐私问题。
        </p>
        <p className="text-gray-700">
          OpenClaw 应运而生，让用户可以在自己的服务器上运行 AI 助手，完全掌控自己的数据。
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "当前现状与生态",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <div className="card-green p-4">
          <div className="text-3xl font-bold">20+</div>
          <div className="text-sm opacity-80">支持平台</div>
        </div>
        <div className="card-gold p-4">
          <div className="text-3xl font-bold">1000+</div>
          <div className="text-sm opacity-80">GitHub Stars</div>
        </div>
        <div className="card-purple p-4">
          <div className="text-3xl font-bold">50+</div>
          <div className="text-sm opacity-80">插件</div>
        </div>
        <div className="card p-4">
          <div className="text-3xl font-bold text-emerald-500">活跃</div>
          <div className="text-sm text-gray-500">社区</div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "安装教程",
    content: (
      <div className="space-y-4">
        <p className="text-xl font-mono bg-gray-50 p-4 rounded-lg">
          npm install -g openclaw
        </p>
        <p className="text-gray-700">或者使用 Docker：</p>
        <p className="text-gray-500 text-sm">详细教程请访问官方文档</p>
      </div>
    ),
  },
  {
    id: 6,
    title: "风险提示与安全建议",
    content: (
      <div className="space-y-4">
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>请勿在公网暴露 OpenClaw 服务</li>
          <li>妥善保管 API Key</li>
          <li>定期更新版本以获取安全补丁</li>
          <li>注意数据备份</li>
        </ul>
      </div>
    ),
  },
  {
    id: 7,
    title: "未来展望",
    content: (
      <div className="space-y-4">
        <p className="text-xl">
          OpenClaw 将持续迭代，专注于：
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>更强大的多 Agent 协作能力</li>
          <li>更丰富的插件生态</li>
          <li>更好的性能优化</li>
          <li>更完善的文档和教程</li>
        </ul>
      </div>
    ),
  },
  {
    id: 8,
    title: "参考资料",
    content: (
      <div className="space-y-4">
        <ul className="space-y-2 text-gray-700">
          <li>
            <a href="https://github.com/openclaw" className="text-emerald-600 hover:underline">
              GitHub: github.com/openclaw
            </a>
          </li>
          <li>
            <a href="https://docs.openclaw.ai" className="text-emerald-600 hover:underline">
              官方文档: docs.openclaw.ai
            </a>
          </li>
          <li>
            <a href="https://discord.gg/clawd" className="text-emerald-600 hover:underline">
              Discord 社区
            </a>
          </li>
        </ul>
      </div>
    ),
  },
];

export default function Home() {
  return <Slides slides={slides} />;
}