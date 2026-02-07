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
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

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

            {/* Radial Gradient Pulse */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at center, rgba(0, 217, 255, 0.15) 0%, rgba(59, 130, 246, 0.1) 30%, rgba(147, 51, 234, 0.05) 60%, transparent 100%)",
                }}
            />

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4"
            >
                {/* Kinetic Typography Title */}
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="text-6xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter text-white mb-6 leading-[0.8] relative"
                >
                    <motion.span
                        animate={{
                            letterSpacing: ["0em", "0.02em", "0em"],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="block"
                        style={{
                            background: "linear-gradient(135deg, #ffffff 0%, #00D9FF 50%, #ffffff 100%)",
                            backgroundSize: "200% 200%",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        DAY ONE
                    </motion.span>
                    <motion.span
                        animate={{
                            letterSpacing: ["0em", "0.02em", "0em"],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                        }}
                        className="block"
                        style={{
                            background: "linear-gradient(135deg, #ffffff 0%, #00D9FF 50%, #ffffff 100%)",
                            backgroundSize: "200% 200%",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        DREAM
                    </motion.span>
                </motion.h1>

                {/* New Main Tagline */}
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                    className="text-2xl md:text-3xl font-light text-white max-w-4xl mb-6"
                    style={{
                        textShadow: "0 0 30px rgba(0, 217, 255, 0.3)",
                    }}
                >
                    Where Music IP Expands Into Everything
                </motion.p>

                {/* Sequential Keyword Animation */}
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center items-center max-w-5xl">
                    {[
                        { text: "Music IP", delay: 1.0 },
                        { text: "Artist Management", delay: 1.2 },
                        { text: "IP Commerce", delay: 1.4 },
                        { text: "Live Entertainment", delay: 1.6 },
                        { text: "Enter-Tech", delay: 1.8 },
                    ].map((item, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: item.delay,
                            }}
                            className="text-sm md:text-base font-mono tracking-wider uppercase px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-300 bg-cyan-950/20 backdrop-blur-sm"
                            style={{
                                boxShadow: "0 0 20px rgba(0, 217, 255, 0.1)",
                            }}
                        >
                            {item.text}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Refined Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 2.5, duration: 0.8 },
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                    />
                </div>
                <span className="text-cyan-300/70 text-xs uppercase tracking-widest font-mono">
                    Scroll to Explore
                </span>
            </motion.div>
        </div>
    );
}
