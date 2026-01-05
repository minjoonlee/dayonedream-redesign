"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Video */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/60 z-10" />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/assets/hero_video.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4"
            >
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="text-6xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter text-white mb-6 leading-[0.8] mix-blend-overlay"
                >
                    DAY ONE<br />DREAM
                </motion.h1>

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="text-xl md:text-2xl font-light text-gray-300 max-w-4xl"
                >
                    We Architect the Calculus of K-Culture.
                    <br className="hidden md:block" />
                    <span className="text-gray-500 mt-4 block text-lg font-mono tracking-widest uppercase">
                        Sonic IP • Accelerator • Protocol
                    </span>
                </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm z-20 uppercase tracking-widest"
            >
                Scroll to Explore
            </motion.div>
        </div>
    );
}
