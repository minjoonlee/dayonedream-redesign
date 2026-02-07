"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const STORY_STEPS = [
    {
        id: 1,
        title: "MUSIC IP",
        subtitle: "The Origin",
        desc: "Everything starts with music. We create high-value intellectual property that resonates globally.",
        image: "/assets/realistic_studio.png",
        highlight: "Production",
        accent: "text-amber-500",
        bgGradient: "from-amber-900/40"
    },
    {
        id: 2,
        title: "EXPANSION",
        subtitle: "The Growth",
        desc: "From melody to moments. We expand IP into concerts, merchandise, and digital experiences.",
        image: "/assets/realistic_concert.png",
        highlight: "Live & Commerce",
        accent: "text-purple-500",
        bgGradient: "from-purple-900/40"
    },
    {
        id: 3,
        title: "UNIVERSE",
        subtitle: "The Future",
        desc: "A boundless ecosystem. Where technology meets fandom to create sustainable value.",
        image: "/assets/realistic_universe.png",
        highlight: "Platforms & Tech",
        accent: "text-cyan-500",
        bgGradient: "from-cyan-900/40"
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

            {/* Sticky Background Container */}
            <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
                {STORY_STEPS.map((step, index) => {
                    const start = index / STORY_STEPS.length;
                    const end = (index + 1) / STORY_STEPS.length;

                    // Smooth crossfade
                    const opacity = useTransform(scrollYProgress,
                        [start, start + 0.1, end - 0.1, end],
                        [0, 1, 1, 0]
                    );

                    // Slow scale for cinematic feel
                    const scale = useTransform(scrollYProgress,
                        [start, end],
                        [1, 1.1]
                    );

                    return (
                        <motion.div
                            key={`bg-${step.id}`}
                            style={{ opacity, scale }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <Image
                                src={step.image}
                                alt={step.title}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                            {/* Cinematic Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
                            <div className={`absolute inset-0 bg-gradient-to-b ${step.bgGradient} to-transparent opacity-60 mix-blend-overlay`} />
                        </motion.div>
                    );
                })}
            </div>

            {/* Scrolling Text Content - Absolute positioning over the sticky container won't work for scrolling unless we put it in a separate container that is absolute to the section but relative to flow? 
                Actually, the best pattern is: 
                Section relative h-[400vh]
                Sticky div top-0 h-screen (Backgrounds)
                Absolute div top-0 w-full (Content Steps) --> They need to be spaced out by 100vh each.
            */}
            <div className="absolute top-0 left-0 w-full">
                {STORY_STEPS.map((step, index) => (
                    <div
                        key={`text-${step.id}`}
                        className="h-[100dvh] w-full flex items-center justify-center lg:justify-end lg:pr-32"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ margin: "-20% 0px -20% 0px" }}
                            className="max-w-[90%] md:max-w-xl p-8 md:p-10 bg-black/30 backdrop-blur-md border-l border-white/20"
                        >
                            <div className="flex items-center gap-4 mb-4 md:mb-6">
                                <span className={cn("text-xs font-bold tracking-[0.3em] uppercase", step.accent)}>
                                    0{step.id} — {step.highlight}
                                </span>
                                <div className={`h-[1px] w-8 md:w-12 bg-current opacity-50 ${step.accent}`} />
                            </div>

                            <h2 className="text-5xl md:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-[0.9] drop-shadow-2xl">
                                {step.title}
                            </h2>

                            <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed drop-shadow-md border-l-2 border-white/10 pl-6">
                                {step.desc}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>

        </section>
    );
}
