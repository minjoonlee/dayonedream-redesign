"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
    "https://cdn.prod.website-files.com/65d3264ad9939b9282a0fc48/65f94a4501258ef1615a6332_sublime.svg",
    "https://cdn.prod.website-files.com/65d3264ad9939b9282a0fc48/65fac9345c26b856a84f3316_warner%20music%20korea%20logo.svg",
    "https://cdn.prod.website-files.com/65d3264ad9939b9282a0fc48/65fac95ce495c25605f6e864_studio%20hm%20logo.svg",
    "https://cdn.prod.website-files.com/65d3264ad9939b9282a0fc48/65fac982f6e91ea652614b0b_amazevr.svg",
    "https://cdn.prod.website-files.com/65d3264ad9939b9282a0fc48/65fac9960ffbb361498b3174_witch.svg",
    "https://cdn.prod.website-files.com/65d3264ad9939b9282a0fc48/65f94b46c6a4958ce786f1e6_crit%20ventures%20logo.png",
    "https://cdn.prod.website-files.com/65d3264ad9939b9282a0fc48/676395b090cd2821f7bc4d13_kakao_bi_horizontal_ko_white-p-500.png",
    "https://cdn.prod.website-files.com/65d3264ad9939b9282a0fc48/676395dc2e8d356cbbbe8566_f-logo%20(1)-p-500.png"
];

export function Partners() {
    return (
        <section className="py-32 bg-black text-white border-t border-white/5 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-center text-sm font-bold text-gray-600 mb-16 tracking-[0.3em] uppercase">
                    Trusted Partners
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 items-center justify-items-center opacity-70">
                    {partners.map((logo, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="relative w-40 h-20 grayscale brightness-200 contrast-0 opacity-50 hover:opacity-100 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-500"
                        >
                            <Image
                                src={logo}
                                alt="Partner Logo"
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
