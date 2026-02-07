"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const subsidiaries = [
    {
        role: "Subsidiary | Record Label",
        name: "BTOB COMPANY",
        desc: "비투비 컴퍼니는 Melody를 위한 BTOB만의 음악적, 콘텐츠 색깔을 담아낸 BTOB 전용 레이블입니다.\nBTOB Company is BTOB's exclusive label for Melody.",
        link: "#"
    },
    {
        role: "Subsidiary | IP Commerce",
        name: "B factory",
        desc: "IP 세계관을 굿즈, 응원봉 그리고 팝업까지 완벽하게 현실로 구현해내는 IP Commerce 전문 회사입니다.\nA specialized IP commerce factory bringing universes to life.",
        link: "#"
    },
    {
        role: "Subsidiary | Live Entertainment",
        name: "SET THE STAGE",
        desc: "라이브 중심의 공연과 아티스트 IP를 발굴-기획-제작-운영하며, 'LIVE'만이 줄 수 있는 감동을 만드는 Live Entertainment Company입니다.\nA live entertainment company that delivers the true emotion of 'LIVE'.",
        link: "#"
    },
    {
        role: "Subsidiary | Publishing",
        name: "On a Loop",
        desc: "글로벌 유명 작곡가들의 저작권 및 저작인접권을 보유하고 관리합니다. 히트 작곡가 및 프로듀서의 다양한 장르 음악을 퍼블리싱합니다.\nManaging copyrights and neighboring rights of global hit songwriters.",
        link: "#"
    },
    {
        role: "Subsidiary | Print & Manufacturing",
        name: "DREAM PRESS ARCHIVE",
        desc: "앨범 인쇄, MD 인쇄, 간행물 인쇄, 상업 인쇄 등 IP 기반 인쇄 솔루션을 제공합니다.\nProviding IP-based printing solutions for albums, MD, and publications.",
        link: "#"
    },
    {
        role: "Subsidiary | Content Solution",
        name: "VOYD",
        desc: "콘텐츠 솔루션 개발, R&D, 운영 및 유지보수를 담당하는 테크 자회사입니다.\nA tech subsidiary for content solutions, R&D, and platform operations.",
        link: "#"
    }
];

export function Subsidiaries() {
    return (
        <section className="py-32 bg-black text-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-sm font-bold text-gray-500 mb-4 tracking-widest uppercase">— Company</h2>
                </div>

                {/* 1. Parent Company (DOD) */}
                <div className="border-t border-white/20 py-20 lg:flex gap-12 items-start">
                    <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
                        {/* Spacer or Label */}
                    </div>
                    <div className="w-full lg:w-2/3">
                        {/* DOD Logo Placeholder Text */}
                        <h2 className="text-8xl font-black tracking-tight mb-8 font-serif italic">
                            D<span className="italic font-light">O</span>d
                        </h2>
                        <h3 className="text-2xl font-medium mb-6 leading-relaxed text-gray-200">
                            Designing the 'Day One' of Dreamers.<br className="hidden md:block" />
                            우리는 음악 IP를 중심으로, 팬이 행복한 모든 순간을 설계합니다. 하나의 꿈이 수만 개의 경험으로 확장되는 생태계.
                        </h3>
                        <p className="text-gray-500 font-light leading-relaxed">
                            We design every moment where fans find happiness through music IP. One dream expanding into countless experiences.
                        </p>
                    </div>
                </div>

                {/* 2. Subsidiaries List */}
                {subsidiaries.map((sub, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i}
                        className="border-t border-white/20 py-16 lg:flex gap-12 group hover:bg-neutral-900/30 transition-colors duration-500"
                    >
                        {/* Left: Role/Type */}
                        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                            <div className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">
                                {sub.role.split("|")[0]}
                            </div>
                            <div className="text-lg text-white font-medium">
                                {sub.role.split("|")[1]}
                            </div>
                        </div>

                        {/* Right: Logos & Desc */}
                        <div className="w-full lg:w-1/3">
                            <h3 className="text-5xl font-black tracking-tighter mb-6 uppercase flex items-center gap-4">
                                {sub.name === "B factory" ? (
                                    <span><span className="bg-white text-black px-2 mr-1">B</span>factory</span>
                                ) : sub.name}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line mb-8">
                                {sub.desc}
                            </p>
                        </div>

                        {/* Far Right: Arrow */}
                        <div className="w-full lg:w-1/3 flex justify-end items-start pt-2">
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all cursor-pointer">
                                <span className="text-lg">↗</span>
                            </div>
                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}
