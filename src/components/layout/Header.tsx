"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is active
    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [open]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-[70] flex items-center justify-between px-6 py-5 transition-colors duration-500",
                    scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent py-8"
                )}
            >
                <Link href="/" className="relative z-50 group">
                    <span className="text-2xl font-black tracking-tighter text-white mix-blend-difference">
                        DOD
                        <span className="text-blue-500">.</span>
                    </span>
                </Link>

                <button
                    onClick={() => setOpen(!open)}
                    className="relative z-[80] p-2 text-white mix-blend-difference hover:scale-110 transition-transform"
                >
                    <div className="flex flex-col gap-1.5 items-end">
                        <span className={cn("block w-8 h-0.5 bg-white transition-all duration-300", open && "rotate-45 translate-y-2")} />
                        <span className={cn("block w-6 h-0.5 bg-white transition-all duration-300", open && "opacity-0")} />
                        <span className={cn("block w-8 h-0.5 bg-white transition-all duration-300", open && "-rotate-45 -translate-y-2")} />
                    </div>
                </button>
            </header>

            {/* Premium Navigation Overlay - Decoupled from Header transition context */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ type: "spring", stiffness: 40, damping: 20 }}
                        className="fixed inset-0 bg-neutral-950 z-[60] flex flex-col items-center justify-center text-center h-[100dvh]"
                    >
                        {/* Background Decoration */}
                        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[128px]" />
                            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px]" />
                        </div>

                        <nav className="relative z-10 flex flex-col space-y-8">
                            {["ABOUT", "ARTISTS", "NEWS", "CONTACT"].map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        onClick={() => setOpen(false)}
                                        className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500 hover:to-blue-400 transition-all tracking-tighter"
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
