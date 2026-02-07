"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const STORY_STEPS = [
    {
        id: "music",
        title: "Music IP",
        subtitle: "The Origin of Stardom",
        description: "모든 것은 음악에서 시작됩니다. DOD는 전문 A&R과 글로벌 프로듀서 네트워크를 통해 K-pop의 새로운 음악을 창조합니다. 이 음악 IP가 우리 생태계의 씨앗입니다.",
        highlight: "The Core",
        image: "/assets/premium_music_core.png", // UPDATED ASSET
        glowColor: "cyan",
        glowSize: "medium"
    },
    {
        id: "expansion",
        title: "Expanding Universe",
        subtitle: "Beyond the Stage",
        description: "음악 IP는 팬과 만나 끊임없이 확장됩니다. 콘서트, 팝업스토어, MD, 뮤지컬, 퍼블리싱. 하나의 음악이 수만 개의 경험으로 변합니다. 팬덤이 있는 곳에 DOD가 있습니다.",
        highlight: "IP Commerce & Live",
        image: "/assets/story_anim_2.png", // Keeping original for now, needs matching style later
        glowColor: "violet",
        glowSize: "medium"
    },
    {
        id: "ecosystem",
        title: "Enter-Tech",
        subtitle: "Co-Creation Ecosystem",
        description: "팬은 더 이상 소비자가 아닙니다. DOD의 Enter-Tech 플랫폼은 팬이 아티스트의 성장에 직접 참여하고, 함께 가치를 나누는 지속 가능한 생태계를 만듭니다.",
        highlight: "Future Platform",
        image: "/assets/story_anim_3.png", // Keeping original for now
        glowColor: "indigo",
        glowSize: "large"
    }
];

export function BrandStory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-[#030303]">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Cinema-quality Atmosphere */}
                <div className="absolute inset-0 z-0">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/40 via-[#050505] to-[#030303] z-10" />
                     
                     {/* Dynamic Ambient Light */}
                     <motion.div 
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]) }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-[radial-gradient(circle,_rgba(56,189,248,0.03)_0%,_transparent_70%)] pointer-events-none"
                     />
                </div>

                {/* Central Visuals */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center h-full">

                    {/* Left: 3D Visual Stage */}
                    <div className="relative aspect-square w-full max-w-lg mx-auto perspective-1000">
                        {STORY_STEPS.map((step, index) => {
                            const start = index * 0.33;
                            const end = start + 0.33;
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const opacity = useTransform(
                                scrollYProgress,
                                [start, start + 0.1, end - 0.1, end],
                                [0, 1, 1, 0]
                            );
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const visualScale = useTransform(
                                scrollYProgress,
                                [start, end],
                                [0.9, 1.05]
                            );
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const yPos = useTransform(
                                scrollYProgress,
                                [start, end],
                                [20, -20]
                            );

                            return (
                                <motion.div
                                    key={step.id}
                                    style={{ opacity, scale: visualScale, y: yPos }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        {/* Premium Glow Effect */}
                                        <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full mix-blend-screen" />
                                        
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            width={800}
                                            height={800}
                                            className="object-contain drop-shadow-[0_0_50px_rgba(34,211,238,0.2)]"
                                            priority={index === 0}
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right: Narrative */}
                    <div className="relative h-full flex flex-col justify-center">
                        {STORY_STEPS.map((step, index) => {
                            const start = index * 0.33;
                            const end = start + 0.33;
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const opacity = useTransform(
                                scrollYProgress,
                                [start, start + 0.15, end - 0.15, end],
                                [0, 1, 1, 0]
                            );
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const y = useTransform(
                                scrollYProgress,
                                [start, start + 0.15, end - 0.1, end],
                                [40, 0, 0, -40]
                            );

                            return (
                                <motion.div
                                    key={step.id}
                                    style={{ opacity, y, pointerEvents: "none" }}
                                    className="absolute inset-x-0 md:static md:inset-auto text-center md:text-left"
                                >
                                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs font-medium text-cyan-200 tracking-widest uppercase">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                        {step.highlight}
                                    </div>
                                    
                                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                                        {step.title}
                                    </h2>
                                    
                                    <h3 className="text-2xl md:text-3xl text-gray-400 mb-8 font-light tracking-wide">
                                        {step.subtitle}
                                    </h3>
                                    
                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-white/5 blur-xl -z-10 rounded-full opacity-0" />
                                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0 font-light">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
