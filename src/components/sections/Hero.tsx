"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Smoothler interpolation could be added here, but direct mapping is responsive
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
                y: (e.clientY - window.innerHeight / 2) / window.innerHeight
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#030303]">
            {/* Background Video with Premium Overlay */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                {/* Gradient Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-black/60 z-10" />

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                >
                    <source src="/assets/hero_video.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Ambient Glow */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 60%)",
                }}
            />

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4"
            >
                {/* Main Title - Premium Typography */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="relative mb-8"
                >
                    <h1 className="text-7xl md:text-[9rem] lg:text-[11rem] font-bold tracking-tighter text-white leading-[0.85] select-none mix-blend-overlay opacity-50 absolute top-2 left-2 blur-sm">
                        DAY ONE<br />DREAM
                    </h1>
                    <h1 className="text-7xl md:text-[9rem] lg:text-[11rem] font-bold tracking-tighter text-white leading-[0.85] relative z-10">
                        <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                            DAY ONE
                        </span>
                        <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                            DREAM
                        </span>
                    </h1>
                </motion.div>

                {/* Tagline - Refined */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                    className="text-xl md:text-2xl font-light text-cyan-50/80 max-w-2xl mb-12 tracking-wide"
                >
                    Where Music IP Expands Into Everything
                </motion.p>

                {/* Keywords - Minimalist Pills */}
                <div className="flex flex-wrap gap-4 justify-center items-center max-w-4xl">
                    {[
                        "Music IP",
                        "Artist Management",
                        "IP Commerce",
                        "Live Entertainment",
                        "Enter-Tech",
                    ].map((text, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 1.2 + (index * 0.1),
                            }}
                            className="text-xs md:text-sm font-medium tracking-widest uppercase px-5 py-2.5 rounded-full border border-white/10 text-white/70 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                        >
                            {text}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Scroll Indicator - Minimal */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
            >
                <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
                <div className="h-16 w-[1px] bg-gradient-to-b from-white/0 via-white/50 to-white/0 overflow-hidden">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="w-full h-1/2 bg-gradient-to-b from-transparent to-cyan-400"
                    />
                </div>
            </motion.div>
        </div>
    );
}
