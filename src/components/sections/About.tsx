"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { KineticText } from "@/components/ui/KineticText";

export function About() {
    const text = "Engineering the Next Wave of Entertainment. We define K-Culture IP as an Asset. Maximizing value through Finance (STO) and Technology (Web3).";
    const words = text.split(" ");

    return (
        <section className="relative min-h-screen bg-black text-white flex items-center justify-center py-20 px-6 overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/bg-dark.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-40 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <h2 className="text-sm font-bold text-gray-500 mb-12 tracking-widest uppercase">Our Vision</h2>

                {/* English Vision - Kinetic */}
                <div className="mb-20">
                    <h3 className="text-4xl md:text-7xl font-bold leading-none tracking-tighter mb-8">
                        <KineticText text="ENGINEERING THE NEXT WAVE OF ENTERTAINMENT" />
                    </h3>
                </div>

                {/* Korean Vision - Kinetic with Delay */}
                <div className="space-y-8 text-gray-300">
                    <h4 className="text-xl font-bold tracking-widest text-white">THE NEXT MUSIC ERA</h4>
                    <div className="text-lg md:text-2xl leading-relaxed font-light text-gray-400">
                        <KineticText text="디오디(DOD)는 K-Culture IP를 '자산(Asset)'으로 정의하고, 금융(STO)과 기술(Web3)로 가치를 극대화하는 '글로벌 엔터-테크(Enter-Tech) 플랫폼'입니다. 음악에서 시작된 IP가 끊임없이 확장되고 지속 가능한 가치로 성장하는 에코시스템을 구축합니다." />
                    </div>
                </div>
            </div>
        </section>
    );
}
