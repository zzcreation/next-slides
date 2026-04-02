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

  return <span className="font-jetbrains text-6xl sm:text-8xl md:text-[8rem] font-black bg-clip-text text-transparent bg-gradient-to-br from-accent-blue to-accent-purple tracking-tighter drop-shadow-sm leading-none">{count.toLocaleString()}{suffix}</span>;
};

type SlideProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  align?: "center" | "left";
};

// Strictly No-Overflow Container (One Idea Per Slide)
const Slide = ({ title, subtitle, icon, children, align = "center" }: SlideProps) => (
  <div className="w-full h-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 box-border overflow-hidden">
    <div className={`card w-full max-w-4xl mx-auto flex flex-col justify-center overflow-hidden shadow-2xl border-t-4 border-t-primary/50 relative group bg-gradient-to-br from-card to-card-dark p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-[2.5rem]`}>
      
      {/* Decorative background elements */}
      <div className="absolute -top-32 -right-32 w-48 md:w-64 h-48 md:h-64 bg-accent-blue/10 rounded-full blur-3xl group-hover:bg-accent-blue/20 transition-colors duration-1000 -z-0 pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-64 md:w-80 h-64 md:h-80 bg-accent-purple/10 rounded-full blur-3xl group-hover:bg-accent-purple/20 transition-colors duration-1000 -z-0 pointer-events-none"></div>

      <header className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"} mb-6 md:mb-10 relative z-10 animate-slideUp shrink-0 w-full`}>
        <div className="flex flex-wrap items-center gap-3 mb-3 justify-center sm:justify-start">
          {icon && (
            <span className="p-2 sm:p-3 bg-bg-alt rounded-2xl text-primary shadow-sm ring-1 ring-border group-hover:scale-110 transition-transform duration-500 shrink-0">
              {icon}
            </span>
          )}
          {subtitle && <span className="mono-label text-accent-green bg-accent-green/10 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs whitespace-nowrap">{subtitle}</span>}
        </div>
        <h1 className="heading-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight leading-tight w-full break-words">{title}</h1>
      </header>
      
      <div className={`w-full relative z-10 animate-fadeIn ${align === "center" ? "text-center mx-auto" : "text-left"}`} style={{ animationDelay: '0.2s' }}>
        {children}
      </div>
    </div>
  </div>
);

export const Slides = () => (
  <div className="relative bg-bg h-[100dvh] w-full overflow-hidden">
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
      {/* SLIDE 1. HERO SLIDE (Ultra Compact Mobile) */}
      <SwiperSlide className="w-full h-full overflow-hidden">
        <div className="w-full h-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
          <div className="card w-full max-w-5xl mx-auto text-center relative bg-gradient-to-b from-bg to-bg-alt border-0 shadow-2xl p-6 sm:p-10 lg:p-16 rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-blue/20 via-bg to-bg opacity-60 pointer-events-none"></div>
            
            <div className="relative z-10 animate-slideUp flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg shadow-sm border border-border mb-4 sm:mb-8 animate-fadeIn flex-wrap justify-center" style={{ animationDelay: '0.1s' }}>
                <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-accent-green shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulseFast"></span>
                <span className="text-[9px] sm:text-xs font-jetbrains font-semibold tracking-wider text-text-secondary uppercase">Latest Leak • 2026.03.31</span>
              </div>
              
              <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-black tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-br from-text-primary via-text-primary to-text-secondary mb-3 sm:mb-6 drop-shadow-sm pb-1">
                CLAUDE<br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-purple">CODE</span>
              </h1>
              
              <p className="text-sm sm:text-lg md:text-2xl text-text-secondary font-light max-w-xl mx-auto mb-6 sm:mb-10 animate-fadeIn text-balance" style={{ animationDelay: '0.3s' }}>
                一个 <code className="text-accent-red bg-accent-red/10 px-1 py-0.5 rounded font-jetbrains break-words">.map</code> 文件泄露，彻底揭示 Anthropic 最强应用架构原理。
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-3xl mx-auto animate-fadeIn w-full" style={{ animationDelay: '0.5s' }}>
                {[
                  { label: 'Lines Code', val: '519K' },
                  { label: 'Files', val: '1,916' },
                  { label: 'Tools', val: '45+' },
                  { label: 'Flags', val: '90' }
                ].map((stat, i) => (
                  <div key={i} className="p-3 sm:p-4 rounded-xl md:rounded-2xl bg-card border border-border/50 shadow-sm relative overflow-hidden group">
                    <div className="font-jetbrains text-lg sm:text-2xl font-bold text-primary mb-0.5 sm:mb-1">{stat.val}</div>
                    <div className="text-[9px] sm:text-[11px] text-text-muted font-medium uppercase tracking-wider whitespace-nowrap">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* SLIDE 2. CYCLE LOGIC */}
      <SwiperSlide className="w-full h-full overflow-hidden">
        <Slide title="The Essence" subtitle="核心理念" icon={<SparklesIcon className="h-6 w-6 sm:h-8 sm:w-8" />}>
          <div className="text-center mb-4 sm:mb-8">
            <p className="text-sm sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-accent-purple to-accent-red pb-1 text-balance">这是一个「无限执行循环」</p>
          </div>
          
          <div className="grid grid-cols-2 lg:flex lg:flex-row items-center justify-center gap-3 sm:gap-6 relative mt-4 px-2">
            <div className="hidden lg:block absolute top-[28px] left-10 right-10 h-1 bg-gradient-to-r from-bg-alt via-primary/30 to-bg-alt -z-10 rounded-full"></div>
            
            {[
              { step: '1. User', desc: '发出指令', color: 'bg-text-primary' },
              { step: '2. Think', desc: '思考策略', color: 'bg-accent-blue' },
              { step: '3. Tool', desc: '操作机器', color: 'bg-accent-purple' },
              { step: '4. Result', desc: '验证反馈', color: 'bg-accent-green' }
            ].map((node, i) => (
              <div key={i} className="flex flex-col items-center group/node p-2 sm:p-3 relative z-10">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full ${node.color} flex items-center justify-center text-bg font-bold text-sm sm:text-xl shadow-md sm:shadow-lg`}>
                  {node.step.split('.')[0]}
                </div>
                <div className="mt-2 sm:mt-4 font-bold text-text-primary text-xs sm:text-lg whitespace-nowrap">{node.step.split(' ')[1]}</div>
                <div className="text-[10px] sm:text-sm text-text-muted mt-0.5 whitespace-nowrap">{node.desc}</div>
              </div>
             ))}
          </div>
        </Slide>
      </SwiperSlide>

      {/* SLIDE 3. CODE LOGIC */}
      <SwiperSlide className="w-full h-full overflow-hidden">
        <Slide title="Autonomy" subtitle="底层代码逻辑" icon={<CpuChipIcon className="h-6 w-6 sm:h-8 sm:w-8" />}>
          <div className="w-full max-w-xl mx-auto p-4 sm:p-8 bg-[#0d1117] text-white rounded-xl sm:rounded-[2rem] shadow-2xl font-jetbrains text-[11px] sm:text-base md:text-lg text-left overflow-hidden relative border border-border/20">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent-red via-accent-gold to-accent-green"></div>
            <p className="text-white/40 mb-3 sm:mb-5 font-mono text-[9px] sm:text-xs tracking-wider uppercase border-b border-white/10 pb-2 truncate">// The true power lies in autonomy</p>
            <div className="leading-loose pl-1">
              <p><span className="text-[#ff7b72]">while</span> (<span className="text-[#ff7b72]">!</span>task.<span className="text-[#d2a8ff]">isComplete</span>()) {'{'}</p>
              <p className="pl-4 sm:pl-8"><span className="text-[#79c0ff]">plan</span> = llm.<span className="text-[#d2a8ff]">think</span>(context);</p>
              <p className="pl-4 sm:pl-8"><span className="text-[#79c0ff]">action</span> = plan.<span className="text-[#d2a8ff]">chooseTool</span>(tools);</p>
              <p className="pl-4 sm:pl-8"><span className="text-[#79c0ff]">res</span> = sys.<span className="text-[#d2a8ff]">execute</span>(action);</p>
              <p>{'}'}</p>
            </div>
           </div>
        </Slide>
      </SwiperSlide>

      {/* SLIDE 4. EYES */}
      <SwiperSlide className="w-full h-full overflow-hidden">
        <Slide title="Eyes: 感知域" subtitle="Capabilities 1/2" icon={<EyeIcon className="h-6 w-6 sm:h-8 sm:w-8" />} align="left">
          <div className="flex flex-col items-start gap-4 p-5 sm:p-8 bg-gradient-to-br from-card-blue/50 to-bg rounded-2xl sm:rounded-[2rem] border border-accent-blue/20 shadow-lg w-full max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-3xl font-bold mb-1 text-text-primary text-balance">读取与搜索，掌控全局</h3>
            <p className="text-xs sm:text-base text-text-secondary leading-relaxed mb-4 sm:mb-8 text-balance">不仅能看代码，还能理解上下文架构。精准定位文件片段与外部知识库。</p>
            <div className="flex flex-wrap gap-2">
              {['FileRead', 'Glob', 'Grep', 'WebSearch', 'Fetch'].map(tag => (
                <span key={tag} className="text-[10px] sm:text-sm font-jetbrains px-3 py-1 bg-accent-blue/10 rounded-lg text-accent-blue shadow-sm border border-accent-blue/20">{tag}</span>
               ))}
            </div>
          </div>
        </Slide>
      </SwiperSlide>

      {/* SLIDE 5. HANDS */}
      <SwiperSlide className="w-full h-full overflow-hidden">
        <Slide title="Hands: 执行域" subtitle="Capabilities 2/2" icon={<HandRaisedIcon className="h-6 w-6 sm:h-8 sm:w-8" />} align="left">
          <div className="flex flex-col items-start gap-4 p-5 sm:p-8 bg-gradient-to-br from-card-red/50 to-bg rounded-2xl sm:rounded-[2rem] border border-accent-red/20 shadow-lg w-full max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-3xl font-bold mb-1 text-text-primary text-balance">破坏与创造，掌握终端权限</h3>
            <p className="text-xs sm:text-base text-text-secondary leading-relaxed mb-4 sm:mb-8 text-balance">直接获得宿主机的 Shell 权限。编写、重构、提交代码行云流水。</p>
            <div className="flex flex-wrap gap-2">
              {['FileWrite', 'FileEdit', 'Bash', 'NotebookEdit', 'Git'].map(tag => (
                 <span key={tag} className="text-[10px] sm:text-sm font-jetbrains px-3 py-1 bg-accent-red/10 rounded-lg text-accent-red shadow-sm border border-accent-red/20">{tag}</span>
              ))}
            </div>
          </div>
        </Slide>
      </SwiperSlide>

      {/* SLIDE 6. NUMBERS - PROMPTS */}
      <SwiperSlide className="w-full h-full overflow-hidden">
        <Slide title="System Prompts" subtitle="数据底层 1/3" icon={<ChartBarIcon className="h-6 w-6 sm:h-8 sm:w-8" />}>
           <div className="flex flex-col items-center justify-center p-6 sm:p-12 w-full max-w-lg mx-auto">
            <div className="p-3 sm:p-4 rounded-2xl mb-4 sm:mb-8 text-accent-red bg-accent-red/10 shadow-inner">
              <FireIcon className="h-8 w-8 sm:h-12 sm:w-12" />
            </div>
            <AnimatedNumber end={12} duration={1500} />
             <p className="mt-4 sm:mt-8 text-sm sm:text-lg font-bold text-text-primary px-4 py-2 sm:py-3 bg-bg-alt shadow-sm rounded-xl w-full text-center tracking-widest uppercase">
               层叠式动态上下文组合
             </p>
          </div>
        </Slide>
      </SwiperSlide>

      {/* SLIDE 7. NUMBERS - LOC */}
      <SwiperSlide className="w-full h-full overflow-hidden">
        <Slide title="Source Lines" subtitle="数据底层 2/3" icon={<ChartBarIcon className="h-6 w-6 sm:h-8 sm:w-8" />}>
           <div className="flex flex-col items-center justify-center p-6 sm:p-12 w-full max-w-lg mx-auto">
            <div className="p-3 sm:p-4 rounded-2xl mb-4 sm:mb-8 text-accent-purple bg-accent-purple/10 shadow-inner">
              <BeakerIcon className="h-8 w-8 sm:h-12 sm:w-12" />
            </div>
            <AnimatedNumber end={519} suffix="K" duration={2500} />
             <p className="mt-4 sm:mt-8 text-sm sm:text-lg font-bold text-text-primary px-4 py-2 sm:py-3 bg-bg-alt shadow-sm rounded-xl w-full text-center tracking-widest uppercase">
               精准的 TypeScript 模型还原
             </p>
          </div>
        </Slide>
      </SwiperSlide>

      {/* SLIDE 8. NUMBERS - FLAGS */}
      <SwiperSlide className="w-full h-full overflow-hidden">
        <Slide title="Feature Flags" subtitle="数据底层 3/3" icon={<ChartBarIcon className="h-6 w-6 sm:h-8 sm:w-8" />}>
           <div className="flex flex-col items-center justify-center p-6 sm:p-12 w-full max-w-lg mx-auto">
            <div className="p-3 sm:p-4 rounded-2xl mb-4 sm:mb-8 text-accent-gold bg-accent-gold/10 shadow-inner">
              <StarIcon className="h-8 w-8 sm:h-12 sm:w-12" />
            </div>
            <AnimatedNumber end={90} suffix="+" duration={2000} />
             <p className="mt-4 sm:mt-8 text-sm sm:text-lg font-bold text-text-primary px-4 py-2 sm:py-3 bg-bg-alt shadow-sm rounded-xl w-full text-center tracking-widest uppercase">
               巨型应用的灰度配置系统
             </p>
          </div>
        </Slide>
      </SwiperSlide>

      {/* SLIDE 9. OPEN SOURCE */}
      <SwiperSlide className="w-full h-full overflow-hidden">
         <div className="w-full h-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 box-border">
           <div className="card w-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center relative bg-text-primary text-bg shadow-2xl rounded-3xl md:rounded-[2.5rem] p-6 sm:p-10 md:p-16 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 sm:h-4 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-red z-20"></div>
            
             <div className="relative z-10 w-full max-w-xl mx-auto">
               <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 sm:mb-10 drop-shadow-lg leading-tight">探寻架构 · 构建 Tool Loop</h2>

               <div className="flex flex-col gap-3 sm:gap-4 w-full">
                {[
                  { name: 'nirholas/claude-code', desc: '全盘 TS 源码', src: 'github', color: 'hover:border-accent-blue/50 hover:bg-accent-blue/10 bg-bg/5' },
                  { name: 'ChinaSiro/claude-code-sourcemap', desc: '原始包与 Map 数据', src: 'github', color: 'hover:border-accent-purple/50 hover:bg-accent-purple/10 bg-bg/5' },
                ].map((repo, i) => (
                  <div key={i} className={`flex items-center justify-between p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 border border-bg/10 w-full group ${repo.color}`}>
                    <div className="text-left w-full overflow-hidden">
                       <div className="font-jetbrains font-bold text-sm sm:text-lg md:text-xl text-bg truncate drop-shadow-sm">{repo.name}</div>
                       <div className="text-[10px] sm:text-xs md:text-sm text-bg/60 truncate relative top-1">{repo.desc}</div>
                    </div>
                    <div className="ml-3 w-8 h-8 sm:w-12 sm:h-12 shrink-0 rounded-full bg-bg/20 flex flex-col items-center justify-center text-bg group-hover:bg-bg group-hover:text-text-primary">→</div>
                  </div>
                ))}
              </div>
              
               <div className="pt-6 sm:pt-10 mt-6 sm:mt-10 border-t border-bg/10 text-[10px] sm:text-xs md:text-sm font-mono text-bg/40 flex justify-center gap-3 sm:gap-6 w-full">
                <span>By: YZ</span>
                <span>|</span>
                <span>Wechat: qwqwqwww</span>
                <span>|</span>
                <span>X: @YZ_xyzz</span>
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
