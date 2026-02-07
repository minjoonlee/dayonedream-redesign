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
    "https://cdn.prod.website-files.com/676395b090cd2821f7bc4d13_kakao_bi_horizontal_ko_white-p-500.png",
    "https://cdn.prod.website-files.com/676395dc2e8d356cbbbe8566_f-logo%20(1)-p-500.png"
];

export function Partners() {
    return (
        <section className="py-40 bg-[#020202] text-white border-t border-white/5 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/3 text-center md:text-left">
                    <h2 className="text-3xl font-bold tracking-tighter mb-4">GLOBAL PARTNERS</h2>
                    <p className="text-gray-500 max-w-xs">Building the ecosystem together with industry leaders.</p>
                </div>

                <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 items-center justify-items-center">
                    {partners.map((logo, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="relative w-32 h-12 md:w-40 md:h-16 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer"
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
