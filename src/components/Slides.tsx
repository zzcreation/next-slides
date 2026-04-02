"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard, A11y, EffectFade, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";

import {
  AdjustmentsHorizontalIcon,
  SparklesIcon,
  EyeIcon,
  HandRaisedIcon,
  Cog8ToothIcon,
  BeakerIcon,
  CpuChipIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { BookOpenIcon, StarIcon, FireIcon } from "@heroicons/react/24/solid";

// A component for animating numbers up to a target value
const AnimatedNumber = ({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [end, duration]);

  return <span className="font-jetbrains text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-accent-blue to-accent-purple tracking-tighter drop-shadow-sm">{count.toLocaleString()}{suffix}</span>;
};

type SlideProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  align?: "center" | "left";
};

// Unified Responsive Layout Container
const Slide = ({ title, subtitle, icon, children, align = "center" }: SlideProps) => (
  <div className="w-full h-full flex flex-col justify-center items-center p-3 sm:p-6 md:p-8 pt-8 md:pt-12 pb-12 sm:pb-16 box-border">
    {/* Inner scroll container prevents true overflow on mobile screens */}
    <div className={`card w-full max-w-4xl mx-auto flex flex-col justify-start max-h-[82dvh] overflow-y-auto overflow-x-hidden shadow-xl border-t-4 border-t-primary/50 relative group bg-gradient-to-br from-card to-card-dark p-6 sm:p-8 md:p-10 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:bg-primary/20 hover:[&::-webkit-scrollbar-thumb]:bg-primary/40 [&::-webkit-scrollbar-track]:bg-transparent rounded-2xl md:rounded-3xl`}>
      
      {/* Decorative background elements */}
      <div className="absolute -top-32 -right-32 w-48 md:w-64 h-48 md:h-64 bg-accent-blue/10 rounded-full blur-3xl group-hover:bg-accent-blue/20 transition-colors duration-1000 -z-0 pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-64 md:w-80 h-64 md:h-80 bg-accent-purple/10 rounded-full blur-3xl group-hover:bg-accent-purple/20 transition-colors duration-1000 -z-0 pointer-events-none"></div>

      <header className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"} mb-6 md:mb-10 relative z-10 animate-slideUp shrink-0 w-full`}>
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 justify-center sm:justify-start">
          {icon && (
            <span className="p-3 md:p-4 bg-bg-alt rounded-2xl text-primary shadow-sm ring-1 ring-border group-hover:scale-110 transition-transform duration-500 shrink-0">
              {icon}
            </span>
          )}
          {subtitle && <span className="mono-label text-accent-green bg-accent-green/10 px-3 py-1.5 rounded-full text-xs sm:text-sm whitespace-nowrap">{subtitle}</span>}
        </div>
        <h1 className="heading-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-text-primary tracking-tight leading-tight w-full break-words">{title}</h1>
      </header>
      
      <div className={`prose prose-base sm:prose-lg md:prose-xl w-full max-w-none relative z-10 animate-fadeIn ${align === "center" ? "text-center mx-auto" : "text-left"}`} style={{ animationDelay: '0.2s' }}>
        {children}
      </div>
    </div>
  </div>
);

export const Slides = () => (
  <div className="relative bg-bg min-h-screen">
    {/* Global decorative background mesh/grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
    
    <Swiper
      modules={[Pagination, Navigation, Keyboard, A11y, EffectFade, Autoplay]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ 
        clickable: true, 
        dynamicBullets: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      keyboard={{ enabled: true }}
      a11y={{ enabled: true }}
      grabCursor={true}
      className="h-[100dvh] w-full"
    >
      {/* 1. HERO SLIDE */}
      <SwiperSlide className="w-full h-full box-border">
        <div className="w-full h-full flex flex-col justify-center items-center p-3 sm:p-6 md:p-8 pt-8 pb-16">
          <div className="card w-full max-w-5xl max-h-[85dvh] overflow-y-auto overflow-x-hidden mx-auto text-center relative bg-gradient-to-b from-bg to-bg-alt border-0 shadow-2xl p-6 sm:p-10 lg:p-16 rounded-2xl md:rounded-3xl [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:bg-primary/20 hover:[&::-webkit-scrollbar-thumb]:bg-primary/40 [&::-webkit-scrollbar-track]:bg-transparent">
            
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-blue/20 via-bg to-bg opacity-60 pointer-events-none"></div>
            
            <div className="relative z-10 py-6 md:py-16 animate-slideUp">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-bg shadow-sm border border-border mb-6 md:mb-8 animate-fadeIn flex-wrap justify-center mx-auto" style={{ animationDelay: '0.1s' }}>
                <span className="flex h-2 w-2 rounded-full bg-accent-green shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulseFast"></span>
                <span className="text-[10px] sm:text-xs font-jetbrains font-semibold tracking-wider text-text-secondary uppercase">Latest Leak • 2026.03.31</span>
              </div>
              
              <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-black tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-br from-text-primary via-text-primary to-text-secondary mb-4 sm:mb-6 drop-shadow-sm pb-2">
                CLAUDE<br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-purple">CODE</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-text-secondary font-light max-w-2xl mx-auto mb-8 md:mb-12 animate-fadeIn px-2" style={{ animationDelay: '0.3s' }}>
                一个 <code className="text-accent-red bg-accent-red/10 px-1.5 py-0.5 rounded font-jetbrains break-words">.map</code> 文件泄露，彻底揭示了 Anthropic 最强应用架构原理。
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                {[
                  { label: 'Lines Code', val: '519K' },
                  { label: 'Source Files', val: '1,916' },
                  { label: 'Built Tools', val: '45+' },
                  { label: 'Feat Flags', val: '90' }
                ].map((stat, i) => (
                  <div key={i} className="p-3 sm:p-4 rounded-xl md:rounded-2xl bg-card border border-border/50 shadow-sm hover:-translate-y-1 transition-transform cursor-default relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="font-jetbrains text-xl sm:text-2xl font-bold text-primary mb-1 relative z-10">{stat.val}</div>
                    <div className="text-[10px] sm:text-xs text-text-muted font-medium uppercase tracking-wider relative z-10 whitespace-nowrap">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* 2. CORE CONCEPT */}
      <SwiperSlide className="w-full h-full box-border">
        <Slide title="The Essence" subtitle="核心理念" icon={<SparklesIcon className="h-8 w-8 sm:h-10 sm:w-10" />}>
          <div className="text-center mb-6 md:mb-10">
             <p className="text-lg sm:text-2xl font-light text-text-secondary text-balance">它不是 IDE，也不是普通的智能补全插件。</p>
            <p className="text-xl sm:text-3xl font-bold mt-2 sm:mt-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-accent-purple to-accent-red pb-2 break-words text-balance">它是一个「无限执行循环」</p>
          </div>
          
          <div className="grid grid-cols-2 lg:flex lg:flex-row items-center justify-center gap-4 sm:gap-6 relative lg:gap-12 mt-4 md:mt-8 px-2">
            {/* Connecting line for desktop only */}
            <div className="hidden lg:block absolute top-[40px] left-10 right-10 h-1 bg-gradient-to-r from-bg-alt via-primary/30 to-bg-alt -z-10 rounded-full pointer-events-none"></div>
            
            {[
               { step: '1. User', desc: '发出指令', color: 'bg-text-primary' },
              { step: '2. Think', desc: '思考策略', color: 'bg-accent-blue' },
              { step: '3. Tool', desc: '操作机器', color: 'bg-accent-purple' },
              { step: '4. Result', desc: '验证反馈', color: 'bg-accent-green' }
            ].map((node, i) => (
              <div key={i} className="flex flex-col items-center group/node bg-transparent sm:bg-bg p-2 sm:p-4 sm:rounded-full relative z-10 col-span-1">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full ${node.color} flex items-center justify-center text-bg font-bold text-lg sm:text-xl shadow-lg sm:ring-4 sm:ring-bg group-hover/node:scale-110 transition-transform duration-300 mx-auto`}>
                  {node.step.split('.')[0]}
                </div>
                <div className="mt-3 sm:mt-4 font-bold text-text-primary text-sm sm:text-lg whitespace-nowrap">{node.step.split(' ')[1]}</div>
                <div className="text-xs sm:text-sm text-text-muted mt-1 whitespace-nowrap">{node.desc}</div>
              </div>
             ))}
          </div>
          
          {/* Scrollable code block to prevent mobile width overflow */}
          <div className="mt-8 md:mt-12 p-4 sm:p-6 bg-card-dark text-bg rounded-lg sm:rounded-2xl shadow-xl font-jetbrains text-xs sm:text-sm md:text-base text-left overflow-x-auto relative max-w-2xl mx-auto border border-border/20 w-full [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:bg-bg/20 pb-5">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-red via-accent-gold to-accent-green w-[200%] sm:w-full"></div>
            <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none"><pre>{`}`}</pre></div>
            <p className="text-bg/50 mb-3 sm:mb-4 font-mono text-[10px] sm:text-xs tracking-wider uppercase border-b border-bg/10 pb-2 inline-block whitespace-nowrap">// The true power lies in autonomy</p>
            <div className="min-w-fit">
              <p className="mb-1"><span className="text-accent-purple">while</span> (<span className="text-accent-red">!</span>task.<span className="text-accent-blue">isComplete</span>()) {'{'}</p>
              <p className="pl-4 sm:pl-6 md:pl-8 mb-1"><span className="text-text-secondary">plan</span> = llm.<span className="text-accent-blue">think</span>(context, lastRes);</p>
              <p className="pl-4 sm:pl-6 md:pl-8 mb-1"><span className="text-text-secondary">action</span> = plan.<span className="text-accent-blue">chooseTool</span>(tools);</p>
              <p className="pl-4 sm:pl-6 md:pl-8 mb-1"><span className="text-text-secondary">lastRes</span> = sys.<span className="text-accent-blue">execute</span>(action);</p>
              <p>{'}'}</p>
            </div>
           </div>
        </Slide>
      </SwiperSlide>

      {/* 3. CAPABILITIES - EYES & HANDS */}
      <SwiperSlide className="w-full h-full box-border">
        <Slide title="Capabilities" subtitle="感知与执行" icon={<Cog8ToothIcon className="h-8 w-8 sm:h-10 sm:w-10" />} align="left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            <div className="space-y-6 flex h-full">
              <div className="flex flex-col items-start gap-4 p-5 sm:p-8 bg-gradient-to-br from-card-blue to-bg rounded-2xl sm:rounded-3xl border border-accent-blue/10 shadow-lg group hover:border-accent-blue/30 transition-colors w-full">
                <div className="p-2.5 sm:p-3 bg-accent-blue/10 rounded-xl sm:rounded-2xl text-accent-blue">
                   <EyeIcon className="h-7 w-7 sm:h-10 sm:w-10" />
                </div>
                <div>
                   <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-text-primary">眼睛：读取与搜索</h3>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-4 sm:mb-6">掌握项目的全局视野，精准定位代码片段与知识库。能看，也能理解上下文架构。</p>
                  <div className="flex flex-wrap gap-2">
                    {['FileRead', 'Glob', 'Grep', 'WebSearch', 'Fetch'].map(tag => (
                      <span key={tag} className="text-[10px] sm:text-xs md:text-sm font-jetbrains px-2 sm:px-3 py-1 sm:py-1.5 bg-bg rounded-lg text-text-primary shadow-sm border border-border group-hover:border-accent-blue/20 transition-colors">{tag}</span>
                     ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 flex h-full">
               <div className="flex flex-col items-start gap-4 p-5 sm:p-8 bg-gradient-to-br from-card-red to-bg rounded-2xl sm:rounded-3xl border border-accent-red/10 shadow-lg group hover:border-accent-red/30 transition-colors w-full">
                <div className="p-2.5 sm:p-3 bg-accent-red/10 rounded-xl sm:rounded-2xl text-accent-red">
                  <HandRaisedIcon className="h-7 w-7 sm:h-10 sm:w-10" />
                </div>
                <div>
                   <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-text-primary">双手：破坏与创造</h3>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-4 sm:mb-6">直接获得宿主机的 Shell 执行权限。编写、重构、提交代码，行云流水。</p>
                  <div className="flex flex-wrap gap-2">
                    {['FileWrite', 'FileEdit', 'Bash', 'NotebookEdit', 'Git'].map(tag => (
                       <span key={tag} className="text-[10px] sm:text-xs md:text-sm font-jetbrains px-2 sm:px-3 py-1 sm:py-1.5 bg-bg rounded-lg text-text-primary shadow-sm border border-border group-hover:border-accent-red/20 transition-colors">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 lg:mt-8 p-5 sm:p-6 lg:p-8 bg-gradient-to-r from-bg-alt via-card-dark to-bg-alt rounded-2xl sm:rounded-3xl border-2 border-border/60 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 sm:gap-6 group hover:border-primary/50 transition-colors">
            <div className="max-w-xl w-full">
               <div className="font-bold text-xl sm:text-2xl mb-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2">
                 <CpuChipIcon className="h-7 w-7 sm:h-8 sm:w-8 text-primary shadow-glow hidden sm:block" />
                 <span>MCP <span className="font-light text-text-muted text-base sm:text-lg break-words block sm:inline">(Model Context Protocol)</span></span>
              </div>
              <p className="text-text-secondary text-sm sm:text-base lg:text-lg leading-relaxed">标准化协议让大模型随时即插即用任意外部工具集，打破能力边界。</p>
            </div>
            <div className="p-3 sm:p-4 rounded-full bg-bg shadow-inner shrink-0 hidden md:block">
               <svg className="w-10 h-10 sm:w-16 sm:h-16 text-primary animate-[spin_10s_linear_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
             </div>
          </div>
        </Slide>
      </SwiperSlide>

      {/* 4. PERFORMANCE STATS */}
      <SwiperSlide className="w-full h-full box-border">
        <Slide title="By The Numbers" subtitle="底层数据指标" icon={<ChartBarIcon className="h-8 w-8 sm:h-10 sm:w-10" />}>
           <p className="text-base sm:text-xl md:text-2xl text-text-secondary leading-relaxed mb-8 md:mb-16 text-center max-w-3xl mx-auto font-light">
            通过 Source Map 还原我们看到了一个<strong className="text-text-primary px-1 sm:px-2 font-medium">极致成熟</strong>的工程典范。
          </p>
          
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 max-w-5xl mx-auto pb-4">
             <div className="flex flex-col items-center justify-center p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-card to-bg rounded-3xl sm:rounded-[2.5rem] shadow-lg border border-border/80 relative overflow-hidden group hover:border-accent-red/50 transition-colors w-full">
              <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 group-hover:scale-110 group-hover:rotate-12 pointer-events-none"><FireIcon className="h-40 w-40 md:h-64 md:w-64 text-accent-red" /></div>
              <div className="bg-accent-red/10 p-2 sm:p-3 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 relative z-10 text-accent-red ring-1 ring-accent-red/20 shadow-inner group-hover:bg-accent-red group-hover:text-bg transition-colors duration-500">
                <FireIcon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
               <h3 className="text-[10px] sm:text-xs md:text-sm font-bold text-text-muted uppercase tracking-[0.1em] sm:tracking-[0.2em] mb-2 sm:mb-4 relative z-10 pb-2 border-b border-border/50 text-center w-full">System Prompts</h3>
              <AnimatedNumber end={12} duration={1500} />
               <p className="mt-4 sm:mt-6 text-xs sm:text-sm font-bold text-text-primary relative z-10 w-full px-2 sm:px-4 rounded-lg sm:rounded-xl py-2 sm:py-3 bg-bg-alt shadow-sm text-center">动态上下文组合</p>
            </div>
            
             <div className="flex flex-col items-center justify-center p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-card-dark to-card rounded-3xl sm:rounded-[2.5rem] shadow-xl border border-accent-purple/30 relative overflow-hidden group md:-translate-y-4 lg:-translate-y-6 lg:scale-105 z-10 w-full">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-purple/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
              <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none"><BeakerIcon className="h-40 w-40 md:h-64 md:w-64 text-accent-purple" /></div>
              <div className="bg-accent-purple/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 relative z-10 text-accent-purple ring-1 ring-accent-purple/30 shadow-[0_0_20px_rgba(139,92,246,0.15)] group-hover:bg-accent-purple group-hover:text-bg transition-colors duration-500 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                 <BeakerIcon className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
               <h3 className="text-[10px] sm:text-xs md:text-sm font-bold text-accent-purple uppercase tracking-[0.1em] sm:tracking-[0.2em] mb-2 sm:mb-4 relative z-10 pb-2 border-b border-accent-purple/20 text-center w-full">Lines of Code</h3>
              <AnimatedNumber end={519} suffix="K" duration={2500} />
               <p className="mt-4 sm:mt-8 text-xs sm:text-sm font-bold text-accent-purple relative z-10 w-full px-2 sm:px-4 rounded-lg sm:rounded-xl py-2 sm:py-3 bg-accent-purple/10 border border-accent-purple/20 text-center">Typescript 还原</p>
            </div>
            
             <div className="flex flex-col items-center justify-center p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-card to-bg rounded-3xl sm:rounded-[2.5rem] shadow-lg border border-border/80 relative overflow-hidden group hover:border-accent-gold/50 transition-colors w-full">
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none"><StarIcon className="h-40 w-40 md:h-64 md:w-64 text-accent-gold" /></div>
              <div className="bg-accent-gold/10 p-2 sm:p-3 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 relative z-10 text-accent-gold ring-1 ring-accent-gold/20 shadow-inner group-hover:bg-accent-gold group-hover:text-bg transition-colors duration-500">
                <StarIcon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
               <h3 className="text-[10px] sm:text-xs md:text-sm font-bold text-text-muted uppercase tracking-[0.1em] sm:tracking-[0.2em] mb-2 sm:mb-4 relative z-10 pb-2 border-b border-border/50 text-center w-full">Feature Flags</h3>
              <AnimatedNumber end={90} suffix="+" duration={2000} />
               <p className="mt-4 sm:mt-6 text-xs sm:text-sm font-bold text-text-primary relative z-10 w-full px-2 sm:px-4 rounded-lg sm:rounded-xl py-2 sm:py-3 bg-bg-alt shadow-sm text-center">灰度配置系统</p>
            </div>
          </div>
        </Slide>
      </SwiperSlide>

      {/* 5. OPEN SOURCE */}
      <SwiperSlide className="w-full h-full box-border">
         <div className="w-full h-full flex flex-col justify-center items-center p-3 sm:p-6 md:p-8 pt-8 pb-16 box-border">
           <div className="card w-full max-w-5xl mx-auto max-h-[85dvh] overflow-y-auto overflow-x-hidden text-center relative bg-text-primary text-bg shadow-2xl rounded-2xl md:rounded-3xl [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:bg-bg/20 hover:[&::-webkit-scrollbar-thumb]:bg-bg/40 [&::-webkit-scrollbar-track]:bg-transparent">
            
            <div className="absolute top-0 left-0 w-full h-2 sm:h-3 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-red z-20"></div>
            
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
             <div className="relative z-10 py-10 sm:py-16 md:py-24 px-4 sm:px-8 animate-slideUp">
              <div className="relative inline-block mb-6 sm:mb-8 mt-4">
                 <BookOpenIcon className="h-14 w-14 sm:h-20 sm:w-20 mx-auto text-bg/90 relative z-10" />
                 <div className="absolute inset-0 bg-accent-blue/30 blur-2xl rounded-full scale-150 pointer-events-none"></div>
              </div>
              
               <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 sm:mb-8 drop-shadow-lg leading-tight px-2">探寻源码 · 复现构架</h2>
              
               <p className="text-lg sm:text-2xl md:text-3xl text-bg/80 max-w-3xl mx-auto mb-10 sm:mb-16 font-light leading-relaxed text-balance px-4">
                 站在巨人肩上了解顶级 AI 应用，构建你的 <span className="font-bold text-bg border-b-2 border-accent-blue pb-1 whitespace-nowrap">Tool Loop</span>。
              </p>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto mb-12 sm:mb-16 px-2 sm:px-4">
                {[
                  { name: 'nirholas/claude-code', desc: '还原后的最全 TypeScript 源码', src: 'github', color: 'hover:border-accent-blue/50 hover:bg-accent-blue/10' },
                  { name: 'ChinaSiro/claude-code-sourcemap', desc: '原始包构建物与珍贵 Source Map 备份数据', src: 'github', color: 'hover:border-accent-purple/50 hover:bg-accent-purple/10' },
                  { name: 'YZ\'s Article', desc: '深度架构剖析与核心机制万字长文权威解读', src: 'wechat', color: 'hover:border-accent-green/50 hover:bg-accent-green/10 col-span-1 lg:col-span-2 max-w-xl mx-auto w-full' }
                ].map((repo, i) => (
                  <a key={i} href="#" className={`flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-bg/5 transition-all duration-300 border border-bg/10 group ${repo.color} w-full`}>
                    <div className="font-jetbrains font-bold text-lg sm:text-xl text-bg mb-2 sm:mb-3 text-center transition-colors drop-shadow-md break-all">{repo.name}</div>
                    <div className="text-sm sm:text-base text-bg/70 text-center leading-relaxed h-auto lg:h-[3rem] flex items-center justify-center text-balance">{repo.desc}</div>
                    <div className="mt-4 sm:mt-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-bg/20 flex items-center justify-center group-hover:bg-bg group-hover:text-text-primary transition-colors text-lg sm:text-xl font-bold shadow-sm shrink-0">
                      →
                    </div>
                  </a>
                ))}
              </div>
              
               <div className="pt-6 sm:pt-8 border-t border-bg/10 text-xs sm:text-sm md:text-base font-mono text-bg/50 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-3 sm:gap-y-4 max-w-2xl mx-auto px-4">
                <span className="flex items-center gap-1 sm:gap-2"><span className="text-bg/30 hidden sm:inline">Author:</span> YZ</span>
                <span className="hidden sm:inline text-bg/20">|</span>
                <span className="flex items-center gap-1 sm:gap-2"><span className="text-bg/30 hidden sm:inline">Wechat:</span> qwqwqwww</span>
                <span className="hidden sm:inline text-bg/20">|</span>
                <span className="flex items-center gap-1 sm:gap-2"><span className="text-bg/30 hidden sm:inline">X:</span> @YZ_xyzz</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      
      {/* Hidden arrows on mobile, visible on medium+ screens */}
      <div className="swiper-button-prev hidden md:flex !text-primary !w-16 !h-16 bg-bg/80 rounded-full shadow-lg backdrop-blur-md border border-border/50 hover:scale-110 !left-6 transition-transform after:!text-2xl hover:bg-bg-alt z-50 ring-1 ring-black/5"></div>
      <div className="swiper-button-next hidden md:flex !text-primary !w-16 !h-16 bg-bg/80 rounded-full shadow-lg backdrop-blur-md border border-border/50 hover:scale-110 !right-6 transition-transform after:!text-2xl hover:bg-bg-alt z-50 ring-1 ring-black/5"></div>
    </Swiper>
  </div>
);
