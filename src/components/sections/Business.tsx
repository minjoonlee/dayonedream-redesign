"use client";

import { motion } from "framer-motion";

const businessAreas = [
    {
        title: "MUSIC PRODUCTION",
        subtitle: "The Heart of K-Culture",
        desc: "글로벌 프로듀서 네트워크와 전문 A&R을 통해 K-pop의 새로운 음악을 창조합니다. 장르를 넘어선 다양한 음악으로 글로벌 시장을 공략합니다.",
        accentColor: "blue",
        glowColor: "rgba(59, 130, 246, 0.4)",
        icon: "M9 19V6l12-3v13M9 10l12-3" // Music Note
    },
    {
        title: "ARTIST MANAGEMENT",
        subtitle: "Maximizing Artist Potential",
        desc: "아티스트 분석, 미디어 기획, 마케팅까지 전 프로세스를 통합 관리합니다. BTOB, Nancy, JINI 등 글로벌 아티스트의 가치를 극대화합니다.",
        accentColor: "purple",
        glowColor: "rgba(139, 92, 246, 0.4)",
        icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" // User
    },
    {
        title: "IP COMMERCE",
        subtitle: "Where IP Meets Fans",
        desc: "K-pop IP 라이센싱, 팝업스토어, MD 제작, 음반 해외 유통. IP가 팬의 일상으로 스며드는 모든 접점을 설계합니다.",
        accentColor: "pink",
        glowColor: "rgba(236, 72, 153, 0.4)",
        icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" // Cart
    },
    {
        title: "LIVE ENTERTAINMENT",
        subtitle: "Connecting Artists & Fans",
        desc: "콘서트, 팬미팅, 뮤지컬. 라이브만이 줄 수 있는 감동을 기획하고, 아티스트와 팬을 직접 연결하는 무대를 만듭니다.",
        accentColor: "orange",
        glowColor: "rgba(249, 115, 22, 0.4)",
        icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" // Ticket
    },
    {
        title: "ENT-AI TECH",
        subtitle: "The Future of Fandom",
        desc: "콘텐츠 솔루션, 통합 플랫폼, AI 기반 신규 서비스. 기술로 팬 경험을 혁신하고 지속 가능한 엔터테인먼트 생태계를 구축합니다.",
        accentColor: "cyan",
        glowColor: "rgba(6, 182, 212, 0.4)",
        icon: "M13 10V3L4 14h7v7l9-11h-7z" // Lightning
    },
    {
        title: "IP-BLOCKCHAIN",
        subtitle: "Financing K-Culture",
        desc: "IP 수익화의 실현. K콘텐츠 중심의 글로벌 투자상품(RWAs)을 통해 팬과 함께 성장하는 금융 생태계를 만듭니다.",
        accentColor: "blue",
        glowColor: "rgba(37, 99, 235, 0.4)",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" // Coin / Blockchain
    }
];

const accentColorClasses = {
    blue: "text-blue-400 border-blue-500/50 bg-blue-500/10",
    purple: "text-purple-400 border-purple-500/50 bg-purple-500/10",
    pink: "text-pink-400 border-pink-500/50 bg-pink-500/10",
    orange: "text-orange-400 border-orange-500/50 bg-orange-500/10",
    cyan: "text-cyan-400 border-cyan-500/50 bg-cyan-500/10"
};

export function Business() {
    return (
        <section className="bg-black text-white py-32 md:py-40 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900/40 via-black to-black" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-xs font-bold text-gray-500 tracking-[0.3em] uppercase mb-8 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-gray-700"></span>
                        Our Value Chain
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <h3 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
                            EXPANDING<br />
                            <span className="text-gray-700">HORIZONS</span>
                        </h3>
                        <p className="text-lg text-gray-400 max-w-sm mb-2">
                            From Music IP to an endless universe of experiences.
                        </p>
                    </div>
                </motion.div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {businessAreas.map((area, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`
                                relative group
                                bg-[#0A0A0A]
                                border border-white/5
                                rounded-3xl p-10
                                overflow-hidden
                                transition-all duration-500
                                hover:border-white/20
                            `}
                        >
                            {/* Hover Gradient Background */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                style={{
                                    background: `radial-gradient(circle at top right, ${area.glowColor} 0%, transparent 60%)`
                                }}
                            />

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-between min-h-[280px]">
                                <div>
                                    <div className={`
                                        inline-flex items-center justify-center w-12 h-12 rounded-full mb-8
                                        border backdrop-blur-md
                                        ${accentColorClasses[area.accentColor as keyof typeof accentColorClasses]}
                                    `}>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={area.icon} />
                                        </svg>
                                    </div>

                                    <h4 className="text-2xl font-bold tracking-tight mb-3 text-white group-hover:text-white transition-colors">
                                        {area.title}
                                    </h4>

                                    <p className="text-sm font-medium text-gray-500 mb-6 tracking-wider uppercase">
                                        {area.subtitle}
                                    </p>
                                </div>

                                <p className="text-gray-400/80 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                    {area.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
