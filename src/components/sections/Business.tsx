"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const areas = [
    {
        title: "MUSIC\nPRODUCTION",
        subtitle: "The Heart of K-Culture",
        desc: "DOD's in-house A&R and global producer network create genre-defying music.\nFrom K-pop to Ballad, Rock, and EDM.",
        bg: "/assets/bg-waves.png"
    },
    {
        title: "ARTIST\nMANAGEMENT",
        subtitle: "Maximizing Potential",
        desc: "We integrate brand, content, and management to unlock long-term growth for every artist.",
        bg: "/assets/bg-dark.png"
    },
    {
        title: "WEB3 &\nTECHNOLOGY",
        subtitle: "The Future of Fandom",
        desc: "Building sustainable ecosystems where fans become participants and contributors via STO & Blockchain.",
        bg: "/assets/bg-grid.png"
    }
];

export function Business() {
    return (
        <section className="bg-black text-white">
            {areas.map((area, i) => (
                <div key={i} className="sticky top-0 h-screen flex items-center overflow-hidden border-t border-white/10">

                    {/* Parallax Background */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={area.bg}
                            alt={area.title}
                            fill
                            className="object-cover opacity-30 scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-black text-white/10 md:text-white/20">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <div className="h-[1px] bg-blue-500 w-20" />
                                <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">
                                    {area.subtitle}
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                                {area.title}
                            </h2>

                            <p className="text-xl text-gray-400 max-w-lg leading-relaxed whitespace-pre-line">
                                {area.desc}
                            </p>
                        </motion.div>
                    </div>

                </div>
            ))}
        </section>
    );
}
