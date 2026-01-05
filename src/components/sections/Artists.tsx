"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const artists = [
    { name: "BTOB", role: "Artist", slug: "btob", img: "/assets/lim_hyunsik_card_1767603489300.png" },
    { name: "JINI", role: "Artist", slug: "jini", img: "/assets/jini_card_1767603447817.png" },
    { name: "LIM HYUNSIK", role: "Artist", slug: "lim-hyunsik", img: "/assets/lim_hyunsik_card_1767603489300.png" },
    { name: "NANCY", role: "Artist", slug: "nancy", img: "/assets/nancy_card_1767603456485.png" },
];

export function Artists() {
    return (
        <section className="min-h-screen bg-black text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tighter">ARTISTS</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {artists.map((artist, index) => (
                        <motion.div
                            key={artist.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 cursor-pointer"
                        >
                            <Link href={`/artists/${artist.slug}`} className="block h-full w-full">
                                <div className="absolute inset-0 p-4">
                                    <Image
                                        src={artist.img}
                                        alt={artist.name}
                                        fill
                                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity" />

                                <div className="absolute bottom-0 left-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <h3 className="text-2xl font-bold">{artist.name}</h3>
                                    <p className="text-sm text-gray-400">{artist.role}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
