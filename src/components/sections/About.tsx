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
                        <KineticText text="FROM ONE SONG TO AN ENTIRE UNIVERSE" />
                    </h3>
                </div>

                {/* Korean Vision - Kinetic with Delay */}
                <div className="space-y-8 text-gray-300">
                    <h4 className="text-xl font-bold tracking-widest text-white">CONTENT SYSTEM ARCHITECT</h4>
                    <div className="text-lg md:text-2xl leading-relaxed font-light text-gray-400">
                        <KineticText text="디오디(DOD)는 음악 IP를 중심으로 콘텐츠 생태계를 설계하는 'Content System Architect'입니다. 하나의 음악이 공연이 되고, 커머스가 되고, 기술이 되어 전 세계 팬덤에게 새로운 행복을 전합니다. 우리는 꿈의 첫날을 설계합니다." />
                    </div>
                </div>
            </div>
        </section>
    );
}
