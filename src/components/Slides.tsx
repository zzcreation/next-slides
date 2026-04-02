"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard, A11y } from "swiper/modules";

import {
  AdjustmentsHorizontalIcon,
  SparklesIcon,
  EyeIcon,
  HandIcon,
  BrainIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

type SlideProps = {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

const Slide = ({ title, icon, children }: SlideProps) => (
  <div className="card text-center max-w-3xl mx-auto">
    <header className="flex items-center justify-center mb-6">
      {icon && (
        <span className="mr-3 text-primary hover:scale-105 transition-transform">
          {icon}
        </span>
      )}
      <h1 className="text-3xl font-bold text-primary">{title}</h1>
    </header>
    <div className="prose prose-lg">{children}</div>
  </div>
);

export const Slides = () => (
  <Swiper
    modules={[Pagination, Navigation, Keyboard, A11y]}
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}
    navigation
    keyboard={{ enabled: true }}
    a11y={{ enabled: true }}
    style={{ height: "100vh" }}
  >
    {/* 1. CLAUDE CODE */}
    <SwiperSlide>
      <Slide
        title="CLAUDE CODE"
        icon={<AdjustmentsHorizontalIcon className="h-8 w-8" />}
      >
        <p>2026‑03‑31 .map 泄露，揭示 Anthropic 最强开发工具的内部架构。</p>
      </Slide>
    </SwiperSlide>

    {/* 2. 核心概念 */}
    <SwiperSlide>
      <Slide title="核心概念" icon={<SparklesIcon className="h-8 w-8" />}>
        <p>
          工具增强型对话循环：用户 → AI 思考 → 调用工具 → 执行 → 结果回馈 → 再思考 → 完成。
        </p>
      </Slide>
    </SwiperSlide>

    {/* 3. 眼睛 — 读取 */}
    <SwiperSlide>
      <Slide title="眼睛 — 读取" icon={<EyeIcon className="h-8 w-8" />}>
        <p>
          FileRead·Glob·Grep·WebSearch：读取文件、代码搜索、网页抓取、PDF、图片解析。
        </p>
      </Slide>
    </SwiperSlide>

    {/* 4. 双手 — 执行 */}
    <SwiperSlide>
      <Slide title="双手 — 执行" icon={<HandIcon className="h-8 w-8" />}>
        <p>
          FileWrite·FileEdit·Bash·NotebookEdit：写文件、编辑、运行命令、Git 操作。
        </p>
      </Slide>
    </SwiperSlide>

    {/* 5. 大脑 — 思考 */}
    <SwiperSlide>
      <Slide title="大脑 — 思考" icon={<BrainIcon className="h-8 w-8" />}>
        <ul>
          <li>
            Agent·EnterPlanMode·TaskCreate·Skill：上下文理解、任务拆解、Agent 协作。
          </li>
          <li>技术栈：TypeScript·Bun·React+Ink·Zod·MCP</li>
        </ul>
      </Slide>
    </SwiperSlide>

    {/* 6. 深入了解 – 架构 */}
    <SwiperSlide>
      <Slide title="深入了解 – 架构">
        <p>Pipeline 与 Tool Loop：从命令到响应的完整链路。</p>
      </Slide>
    </SwiperSlide>

    {/* 7. 深入了解 – 工具 */}
    <SwiperSlide>
      <Slide title="深入了解 – 工具">
        <p>45 内置工具 + 100+ 斜杠命令。</p>
      </Slide>
    </SwiperSlide>

    {/* 8. 深入了解 – Prompt */}
    <SwiperSlide>
      <Slide title="深入了解 – Prompt">
        <p>12 层 System Prompt 动态组装，驱动 AI 思考。</p>
      </Slide>
    </SwiperSlide>

    {/* 9. 深入了解 – 隐藏功能 */}
    <SwiperSlide>
      <Slide title="深入了解 – 隐藏功能">
        <p>90 Feature Flags、Buddy 宠物、x402 加密支付。</p>
      </Slide>
    </SwiperSlide>

    {/* 10. 自己搭一个 */}
    <SwiperSlide>
      <Slide title="自己搭一个">
        <p>5 大设计模式，Tool Loop 为核心。</p>
      </Slide>
    </SwiperSlide>

    {/* 11. 学习资源 */}
    <SwiperSlide>
      <Slide title="学习资源">
        <p>官方免费认证 + 60 条精选学习资源。</p>
      </Slide>
    </SwiperSlide>

    {/* 12. 关于 & 联系 */}
    <SwiperSlide>
      <Slide title="关于 & 联系">
        <p>
          作者 YZ，微信 qwqwqwww，Twitter @YZ_xyzz，Telegram @YZ_xyzz。
        </p>
      </Slide>
    </SwiperSlide>

    {/* 13. GitHub 源码 */}
    <SwiperSlide>
      <Slide title="GitHub 源码" icon={<BookOpenIcon className="h-8 w-8" />}>
        <ul>
          <li>
            <a href="https://github.com/nirholas/claude-code" target="_blank" rel="noopener noreferrer">
              nirholas/claude-code
            </a>
          </li>
          <li>
            <a href="https://github.com/ChinaSiro/claude-code-sourcemap" target="_blank" rel="noopener noreferrer">
              ChinaSiro/claude-code-sourcemap
            </a>
          </li>
          <li>
            <a href="https://github.com/anthropics/claude-code" target="_blank" rel="noopener noreferrer">
              anthropics/claude-code
            </a>
          </li>
        </ul>
      </Slide>
    </SwiperSlide>
  </Swiper>
);
