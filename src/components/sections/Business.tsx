"use client";

import { motion } from "framer-motion";

const businessAreas = [
    {
        title: "MUSIC PRODUCTION",
        subtitle: "The Heart of K-Culture",
        desc: "글로벌 프로듀서 네트워크와 전문 A&R을 통해 K-pop의 새로운 음악을 창조합니다. 장르를 넘어선 다양한 음악으로 글로벌 시장을 공략합니다.",
        accentColor: "blue",
        glowColor: "rgba(59, 130, 246, 0.3)"
    },
    {
        title: "ARTIST MANAGEMENT",
        subtitle: "Maximizing Artist Potential",
        desc: "아티스트 분석, 미디어 기획, 마케팅까지 전 프로세스를 통합 관리합니다. BTOB, Nancy, JINI 등 글로벌 아티스트의 가치를 극대화합니다.",
        accentColor: "purple",
        glowColor: "rgba(139, 92, 246, 0.3)"
    },
    {
        title: "IP COMMERCE",
        subtitle: "Where IP Meets Fans",
        desc: "K-pop IP 라이센싱, 팝업스토어, MD 제작, 음반 해외 유통. IP가 팬의 일상으로 스며드는 모든 접점을 설계합니다.",
        accentColor: "pink",
        glowColor: "rgba(236, 72, 153, 0.3)"
    },
    {
        title: "LIVE ENTERTAINMENT",
        subtitle: "Connecting Artists & Fans",
        desc: "콘서트, 팬미팅, 뮤지컬. 라이브만이 줄 수 있는 감동을 기획하고, 아티스트와 팬을 직접 연결하는 무대를 만듭니다.",
        accentColor: "orange",
        glowColor: "rgba(249, 115, 22, 0.3)"
    },
    {
        title: "ENTER-TECH",
        subtitle: "The Future of Fandom",
        desc: "콘텐츠 솔루션, 통합 플랫폼, IP 기반 신규 서비스. 기술로 팬 경험을 혁신하고 지속 가능한 엔터테인먼트 생태계를 구축합니다.",
        accentColor: "cyan",
        glowColor: "rgba(6, 182, 212, 0.3)"
    }
];

const accentColorClasses = {
    blue: "text-blue-500 border-blue-500",
    purple: "text-purple-500 border-purple-500",
    pink: "text-pink-500 border-pink-500",
    orange: "text-orange-500 border-orange-500",
    cyan: "text-cyan-500 border-cyan-500"
};

export function Business() {
    return (
        <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                        VALUE CHAIN
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        음악 IP에서 시작해 팬의 모든 순간으로 확장합니다
                    </p>
                </motion.div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {businessAreas.map((area, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.03,
                                transition: { duration: 0.3 }
                            }}
                            className={`
                                relative group
                                bg-neutral-900
                                border border-neutral-800
                                rounded-2xl p-8
                                transition-all duration-300
                                hover:bg-neutral-800
                                hover:shadow-2xl
                                ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
                            `}
                            style={{
                                boxShadow: `0 0 0 0 ${area.glowColor}`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = `0 0 40px 10px ${area.glowColor}`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = `0 0 0 0 ${area.glowColor}`;
                            }}
                        >
                            {/* Number & Subtitle */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className={`
                                    text-xs font-bold tracking-widest uppercase
                                    ${accentColorClasses[area.accentColor as keyof typeof accentColorClasses].split(' ')[0]}
                                `}>
                                    {area.subtitle}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight">
                                {area.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {area.desc}
                            </p>

                            {/* Decorative Border on Hover */}
                            <div
                                className={`
                                    absolute top-0 left-0 right-0 h-1 rounded-t-2xl
                                    opacity-0 group-hover:opacity-100 transition-opacity
                                    ${accentColorClasses[area.accentColor as keyof typeof accentColorClasses].split(' ')[1].replace('border-', 'bg-')}
                                `}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
