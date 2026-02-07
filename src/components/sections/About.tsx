"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { KineticText } from "@/components/ui/KineticText";
import { useRef } from "react";

export function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen bg-[#050505] text-white flex items-center justify-center py-32 px-6 overflow-hidden">
            {/* Premium Background Depth */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(30,30,40,1)_0%,_rgba(0,0,0,1)_100%)]" />
                <motion.div
                    style={{ y }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Visual Side - Glassmorphism Card */}
                <motion.div
                    style={{ opacity }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm bg-white/5">
                        {/* Abstract Geometric Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10 opactiy-50" />
                        <Image
                            src="/assets/bg-dark.png" // Using existing asset but styled better
                            alt="Vision"
                            fill
                            className="object-cover opacity-60 scale-110 hover:scale-100 transition-transform duration-[2s] ease-in-out"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent z-20">
                            <span className="block text-cyan-400 text-sm font-mono tracking-widest mb-2">FOUNDATION</span>
                            <p className="text-white text-lg font-light leading-relaxed">
                                Music is not just sound.<br />It is the architecture of dreams.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Text Content */}
                <div className="order-1 lg:order-2">
                    <motion.h2
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-xs md:text-sm font-bold text-cyan-500 mb-12 tracking-[0.3em] uppercase flex items-center gap-4"
                    >
                        <span className="w-12 h-[1px] bg-cyan-500/50"></span>
                        Our Vision
                    </motion.h2>

                    {/* English Vision - Kinetic */}
                    <div className="mb-16">
                        <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                            FROM ONE SONG<br />
                            <span className="text-white/30 italic font-serif">TO AN ENTIRE</span><br />
                            UNIVERSE
                        </h3>
                    </div>

                    {/* Korean Vision */}
                    <div className="space-y-8 border-l-2 border-white/10 pl-8">
                        <div>
                            <h4 className="text-lg font-bold tracking-widest text-white mb-4">CONTENT SYSTEM ARCHITECT</h4>
                            <p className="text-lg md:text-xl leading-relaxed font-light text-gray-400 max-w-lg">
                                디오디(DOD)는 음악 IP를 중심으로 콘텐츠 생태계를 설계하는 <span className="text-white font-medium">'Content System Architect'</span>입니다.
                            </p>
                        </div>
                        <p className="text-base md:text-lg leading-relaxed font-light text-gray-500 max-w-lg">
                            하나의 음악이 공연이 되고, 커머스가 되고, 기술이 되어 전 세계 팬덤에게 새로운 행복을 전합니다. 우리는 꿈의 첫날을 설계합니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
