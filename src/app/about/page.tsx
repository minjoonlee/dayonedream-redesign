"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { KineticText } from "@/components/ui/KineticText";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/bg-dark.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-30 mix-blend-screen"
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-20"
                >
                    ABOUT<span className="text-blue-500">.</span>
                </motion.h1>

                <div className="space-y-32">
                    {/* Vision Section */}
                    <section>
                        <h2 className="text-sm font-bold text-gray-500 mb-8 tracking-widest uppercase">Our Vision</h2>
                        <div className="text-3xl md:text-6xl font-bold leading-tight tracking-tight mb-12">
                            <KineticText text="ENGINEERING THE NEXT WAVE OF ENTERTAINMENT" />
                        </div>
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                            <p className="text-xl leading-relaxed text-gray-300 font-light">
                                디오디(DOD)는 K-Culture IP를 '자산(Asset)'으로 정의하고, 금융(STO)과 기술(Web3)로 가치를 극대화하는 '글로벌 엔터-테크(Enter-Tech) 플랫폼'입니다. 음악에서 시작된 IP가 끊임없이 확장되고 지속 가능한 가치로 성장하는 에코시스템을 구축합니다.
                            </p>
                        </div>
                    </section>

                    {/* History Section (Placeholder Style) */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-sm font-bold text-gray-500 mb-8 tracking-widest uppercase">History</h2>
                            <h3 className="text-4xl font-bold mb-6">Since 2023</h3>
                            <p className="text-gray-400">Founded with a mission to revolutionize the entertainment industry through technology.</p>
                        </div>
                        <div className="space-y-8 border-l border-white/10 pl-8">
                            {[
                                { year: "2024", event: "Launch of DOD Label & BTOB Company" },
                                { year: "2023", event: "Establishment of Day One Dream" },
                            ].map((item, i) => (
                                <div key={i} className="relative">
                                    <span className="text-blue-500 font-mono text-sm block mb-1">{item.year}</span>
                                    <span className="text-xl font-medium">{item.event}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
