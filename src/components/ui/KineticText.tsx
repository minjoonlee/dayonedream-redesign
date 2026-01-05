"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface KineticTextProps {
    text: string;
    className?: string;
}

export function KineticText({ text, className = "" }: KineticTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const words = text.split(" ");

    return (
        <div ref={containerRef} className={`flex flex-wrap gap-x-[0.3em] gap-y-[0.1em] ${className}`}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;

                // Opacity: Fade in word by word
                const opacity = useTransform(scrollYProgress, [start * 0.5, start * 0.5 + 0.1], [0.1, 1]);

                // Y-translation: Slide up gently
                const y = useTransform(scrollYProgress, [start * 0.5, start * 0.5 + 0.1], [20, 0]);

                // Blur: Focus effect
                const filter = useTransform(scrollYProgress, [start * 0.5, start * 0.5 + 0.1], ["blur(10px)", "blur(0px)"]);

                return (
                    <motion.span
                        key={i}
                        style={{ opacity, y, filter }}
                        className="inline-block leading-none"
                    >
                        {word}
                    </motion.span>
                );
            })}
        </div>
    );
}
