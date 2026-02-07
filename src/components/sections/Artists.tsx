"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const artists = [
    { name: "BTOB", role: "GLOBAL ARTIST", slug: "btob", img: "/assets/lim_hyunsik_card_1767603489300.png" }, // Placeholder asset reuse
    { name: "JINI", role: "SOLO ARTIST", slug: "jini", img: "/assets/jini_card_1767603447817.png" },
    { name: "LIM HYUNSIK", role: "SINGER-SONGWRITER", slug: "lim-hyunsik", img: "/assets/lim_hyunsik_card_1767603489300.png" },
    { name: "NANCY", role: "ACTOR & ARTIST", slug: "nancy", img: "/assets/nancy_card_1767603456485.png" },
];

export function Artists() {
    return (
        <section className="min-h-screen bg-[#050505] text-white py-32 px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-neutral-900/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8"
                >
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.85]">
                        OUR<br /><span className="text-gray-700">STARS</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-sm mb-2 text-right md:text-right">
                        Defining the new standard of K-Pop.<br />Global reach, authentic artistry.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {artists.map((artist, index) => (
                        <motion.div
                            key={artist.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-900 cursor-pointer"
                        >
                            <Link href={`/artists/${artist.slug}`} className="block h-full w-full">
                                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                                    <Image
                                        src={artist.img}
                                        alt={artist.name}
                                        fill
                                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-8 h-[1px] bg-white/50 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
                                    <h3 className="text-3xl font-bold tracking-tight mb-1">{artist.name}</h3>
                                    <p className="text-xs font-mono tracking-widest text-gray-400 uppercase">{artist.role}</p>
                                </div>

                                {/* Hover Border */}
                                <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 pointer-events-none" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
