"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const STORY_STEPS = [
    {
        id: "music",
        title: "Music Experience",
        subtitle: "From CD & Tape to Streaming",
        description: "It starts with a single person listening. Whether it was a cassette tape in a Walkman or a stream on a smartphone, the essence of music production is creating that personal moment of connection.",
        highlight: "Music IP",
        image: "/assets/story_anim_1.png"
    },
    {
        id: "fandom",
        title: "Fandom Connection",
        subtitle: "Concerts, Pop-ups, Fan Meetings",
        description: "The experience expands offline. Visiting pop-up stores, screaming at concerts, and meeting artists face-to-face. It transforms from 'listening' to 'living' the culture together.",
        highlight: "Offline Culture",
        image: "/assets/story_anim_2.png"
    },
    {
        id: "tech",
        title: "Enter-Tech Expansion",
        subtitle: "Invest, Create, Reward",
        description: "The final evolution. Fans become contributors. By investing in the artist's growth and sharing the rewards, we create a sustainable ecosystem where we fight and grow together.",
        highlight: "Co-Creation Economy",
        image: "/assets/story_anim_3.png"
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
                {/* Background Atmosphere */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]) }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"
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

                            return (
                                <motion.div
                                    key={step.id}
                                    style={{ opacity, scale }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="relative w-full h-full">
                                        <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
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
                        {STORY_STEPS.map((step, index) => {
                            const start = index * 0.33;
                            const end = start + 0.33;
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const opacity = useTransform(
                                scrollYProgress,
                                [start, start + 0.1, end - 0.2, end],
                                [0, 1, 1, 0]
                            );
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const y = useTransform(
                                scrollYProgress,
                                [start, start + 0.1, end],
                                [50, 0, -50]
                            );

                            return (
                                <motion.div
                                    key={step.id}
                                    style={{ opacity, y, pointerEvents: "none" }} // pointer-events-none to prevent overlay issues
                                    className="absolute inset-x-0 md:static md:inset-auto text-center md:text-left p-6 md:p-0"
                                >
                                    <div className="inline-block px-3 py-1 mb-4 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-widest backdrop-blur-md">
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
