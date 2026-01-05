"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const artists = [
    { name: "BTOB", role: "Artist", slug: "btob", img: "/assets/lim_hyunsik_card_1767603489300.png" }, // Placeholder img reuse for demo
    { name: "JINI", role: "Artist", slug: "jini", img: "/assets/jini_card_1767603447817.png" },
    { name: "LIM HYUNSIK", role: "Artist", slug: "lim-hyunsik", img: "/assets/lim_hyunsik_card_1767603489300.png" },
    { name: "NANCY", role: "Artist", slug: "nancy", img: "/assets/nancy_card_1767603456485.png" },
];

export default function ArtistsPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6">
                        ARTISTS<span className="text-blue-500">.</span>
                    </h1>
                    <p className="text-xl text-gray-400">Global talents leading the next generation of K-Pop.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {artists.map((artist, index) => (
                        <motion.div
                            key={artist.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-[16/10] overflow-hidden rounded-3xl bg-neutral-900 cursor-pointer"
                        >
                            <Link href={`/artists/${artist.slug}`} className="block h-full w-full">
                                <div className="absolute inset-0">
                                    <Image
                                        src={artist.img}
                                        alt={artist.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-0 left-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white mb-2">{artist.name}</h2>
                                    <p className="text-lg text-blue-400 font-mono tracking-widest uppercase">{artist.role}</p>
                                </div>

                                <div className="absolute top-8 right-8 w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-black/20 backdrop-blur-md group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                                    <span className="text-2xl">↗</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
