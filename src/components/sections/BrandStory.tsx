"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const STORY_STEPS = [
    {
        id: "music",
        title: "Music IP",
        subtitle: "Where Every Dream Begins",
        description: "모든 것은 음악에서 시작됩니다. DOD는 전문 A&R과 글로벌 프로듀서 네트워크를 통해 K-pop의 새로운 음악을 창조합니다. 이 음악 IP가 우리 생태계의 씨앗입니다.",
        highlight: "The Seed",
        image: "/assets/story_anim_1.png",
        glowColor: "blue",
        glowSize: "small"
    },
    {
        id: "expansion",
        title: "Expanding Universe",
        subtitle: "From Music to Everything",
        description: "음악 IP는 팬과 만나 끊임없이 확장됩니다. 콘서트, 팝업스토어, MD, 뮤지컬, 퍼블리싱. 하나의 음악이 수만 개의 경험으로 변합니다. 팬덤이 있는 곳에 DOD가 있습니다.",
        highlight: "IP Commerce · Live · Publishing",
        image: "/assets/story_anim_2.png",
        glowColor: "purple",
        glowSize: "medium"
    },
    {
        id: "ecosystem",
        title: "Enter-Tech",
        subtitle: "Where Fans Become Partners",
        description: "팬은 더 이상 소비자가 아닙니다. DOD의 Enter-Tech 플랫폼은 팬이 아티스트의 성장에 직접 참여하고, 함께 가치를 나누는 지속 가능한 생태계를 만듭니다.",
        highlight: "Co-Creation Economy",
        image: "/assets/story_anim_3.png",
        glowColor: "teal",
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
        <section ref={containerRef} className="relative h-[400vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Background Atmosphere with Dynamic Glow */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

                    {/* Step 1: Blue Glow - Small */}
                    <motion.div
                        style={{
                            opacity: useTransform(scrollYProgress, [0, 0.1, 0.3, 0.33], [0.4, 0.6, 0.6, 0])
                        }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-blue-900/10 via-40% to-black"
                    />

                    {/* Step 2: Purple/Magenta Glow - Medium */}
                    <motion.div
                        style={{
                            opacity: useTransform(scrollYProgress, [0.3, 0.4, 0.63, 0.66], [0, 0.6, 0.6, 0])
                        }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/25 via-pink-900/15 via-30% to-black"
                    />

                    {/* Step 3: Teal/Cyan Glow - Large (Full screen) */}
                    <motion.div
                        style={{
                            opacity: useTransform(scrollYProgress, [0.63, 0.7, 1], [0, 0.7, 0.5])
                        }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-400/30 via-cyan-900/20 via-20% to-black"
                    />
                </div>

                {/* Central Visuals */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">

                    {/* Left: 3D Visual Morphing */}
                    <div className="relative aspect-square w-full max-w-md mx-auto md:max-w-xl">
                        {STORY_STEPS.map((step, index) => {
                            // Calculate opacity based on scroll range
                            // Step 0: 0.0 - 0.33
                            // Step 1: 0.33 - 0.66
                            // Step 2: 0.66 - 1.0
                            const start = index * 0.33;
                            const end = start + 0.33;
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const opacity = useTransform(
                                scrollYProgress,
                                [start, start + 0.1, end - 0.1, end],
                                [0, 1, 1, 0]
                            );
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const scale = useTransform(
                                scrollYProgress,
                                [start, end],
                                [0.8, 1.1]
                            );

                            // Glow configuration per step
                            const glowConfig = {
                                small: "blur-[80px] scale-75",
                                medium: "blur-[120px] scale-100",
                                large: "blur-[160px] scale-150"
                            };

                            const glowColors = {
                                blue: "bg-blue-500/30",
                                purple: "bg-purple-500/35",
                                teal: "bg-teal-400/40"
                            };

                            return (
                                <motion.div
                                    key={step.id}
                                    style={{ opacity, scale }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="relative w-full h-full">
                                        <div
                                            className={cn(
                                                "absolute inset-0 rounded-full transition-all duration-1000",
                                                glowColors[step.glowColor as keyof typeof glowColors],
                                                glowConfig[step.glowSize as keyof typeof glowConfig]
                                            )}
                                        />
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right: Text Narrative */}
                    <div className="relative h-full flex flex-col justify-center">
                        {/* Progress Indicator */}
                        <div className="absolute top-8 left-0 md:left-auto md:top-auto md:bottom-8 flex gap-2 z-20">
                            {STORY_STEPS.map((_, index) => {
                                const start = index * 0.33;
                                const end = start + 0.33;
                                // eslint-disable-next-line react-hooks/rules-of-hooks
                                const dotOpacity = useTransform(
                                    scrollYProgress,
                                    [start, start + 0.05, end - 0.05, end],
                                    [0.3, 1, 1, 0.3]
                                );
                                // eslint-disable-next-line react-hooks/rules-of-hooks
                                const dotScale = useTransform(
                                    scrollYProgress,
                                    [start, start + 0.05, end - 0.05, end],
                                    [0.8, 1.2, 1.2, 0.8]
                                );

                                return (
                                    <motion.div
                                        key={index}
                                        style={{ opacity: dotOpacity, scale: dotScale }}
                                        className="w-2 h-2 rounded-full bg-white"
                                    />
                                );
                            })}
                        </div>

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
                                [30, 0, 0, -30]
                            );

                            // Badge colors per step
                            const badgeColors = {
                                blue: "border-blue-500/30 bg-blue-500/10 text-blue-400",
                                purple: "border-purple-500/30 bg-purple-500/10 text-purple-400",
                                teal: "border-teal-500/30 bg-teal-500/10 text-teal-400"
                            };

                            return (
                                <motion.div
                                    key={step.id}
                                    style={{ opacity, y, pointerEvents: "none" }}
                                    className="absolute inset-x-0 md:static md:inset-auto text-center md:text-left p-6 md:p-0"
                                >
                                    <div
                                        className={cn(
                                            "inline-block px-3 py-1 mb-4 rounded-full border text-xs font-mono uppercase tracking-widest backdrop-blur-md",
                                            badgeColors[step.glowColor as keyof typeof badgeColors]
                                        )}
                                    >
                                        Step 0{index + 1} • {step.highlight}
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                                        {step.title}
                                    </h2>
                                    <h3 className="text-xl md:text-2xl text-blue-200 mb-6 font-light italic">
                                        {step.subtitle}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
