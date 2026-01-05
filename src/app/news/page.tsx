"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";

// Real data fetched from dayonedream.com/press
const newsItems = [
    {
        id: 44,
        date: "2025.12.12",
        title: "아이즈원 출신 이채연, DOD와 전속계약…비투비와 한솥밥 [공식]",
        source: "DOD",
        image: "/assets/bg-waves.png", // Using our premium asset as placeholder for press image
        link: "https://www.dayonedream.com/press/0044"
    },
    {
        id: 43,
        date: "2025.12.04",
        title: "디오디, SBI DM·교보생명·위치컴퍼니와 함께 구축한 K-pop STO 1차 판매 완판",
        source: "DOD",
        image: "/assets/bg-dark.png",
        link: "https://www.dayonedream.com/press/0043"
    },
    {
        id: 41,
        date: "2024.12.06",
        title: "글로벌 뮤직 엔터프라이즈 ‘디오디’, 해시드벤처스 등으로부터 121억원 프리A 투자 유치",
        source: "DOD",
        image: "/assets/bg-grid.png",
        link: "https://www.dayonedream.com/press/0041"
    },
    {
        id: 39,
        date: "2024.10.31",
        title: "비투비, 오늘(31일) 가을 발라드 신곡 공개…제목은 '불씨 (Please Stay)'",
        source: "BTOB COMPANY",
        image: "/assets/bg-waves.png",
        link: "https://www.dayonedream.com/press/0039"
    },
    {
        id: 37,
        date: "2024.08.17",
        title: "비투비·엔플라잉 합동 콘서트 개최... 8월 17일 확정",
        source: "BTOB COMPANY",
        image: "/assets/bg-dark.png",
        link: "https://www.dayonedream.com/press/0037"
    }
];

export default function NewsPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            {/* Header */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/bg-waves.png"
                        alt="Background"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-bold tracking-tighter mb-8"
                    >
                        NEWS <span className="text-blue-500">.</span>
                    </motion.h1>
                </div>
            </section>

            {/* News List */}
            <section className="px-6 pb-40">
                <div className="max-w-7xl mx-auto space-y-4">
                    {newsItems.map((item, i) => (
                        <motion.a
                            href={item.link}
                            target="_blank"
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group block relative border-t border-white/10 py-12 hover:bg-white/5 transition-colors duration-500"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 h-full">
                                {/* Date & Source */}
                                <div className="w-48 text-sm font-mono text-gray-500 group-hover:text-blue-400 transition-colors">
                                    <div className="mb-2">{item.date}</div>
                                    <div className="text-xs border border-white/20 rounded-full inline-block px-3 py-1">{item.source}</div>
                                </div>

                                {/* Title */}
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-gray-300 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Arrow/Interaction */}
                                <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-full border border-white/10 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                                    <span className="text-2xl group-hover:rotate-45 transition-transform duration-300">↗</span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
