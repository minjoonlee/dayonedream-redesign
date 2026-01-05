"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/bg-dark.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-20"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12">
                        CONTACT<span className="text-blue-500">.</span>
                    </h1>

                    <div className="space-y-12">
                        <div>
                            <h2 className="text-sm font-bold text-gray-500 mb-4 tracking-widest uppercase">HEADQUARTERS</h2>
                            <p className="text-xl md:text-2xl text-gray-300 font-light">
                                40, Bongeunsa-ro 67-gil,<br />
                                Gangnam-gu, Seoul, Korea
                            </p>
                        </div>

                        <div>
                            <h2 className="text-sm font-bold text-gray-500 mb-4 tracking-widest uppercase">GENERAL INQUIRIES</h2>
                            <p className="text-xl text-gray-300 font-mono">
                                contact@dayonedream.com
                            </p>
                        </div>

                        <div>
                            <h2 className="text-sm font-bold text-gray-500 mb-4 tracking-widest uppercase">AUDITION</h2>
                            <p className="text-xl text-gray-300 font-mono">
                                audition@dayonedream.com
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Map Placeholder / Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center"
                >
                    <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-500 mb-2">NAME</label>
                            <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg h-12 px-4 focus:outline-none focus:border-blue-500 transition-colors" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-500 mb-2">EMAIL</label>
                            <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg h-12 px-4 focus:outline-none focus:border-blue-500 transition-colors" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-500 mb-2">MESSAGE</label>
                            <textarea className="w-full bg-black/50 border border-white/10 rounded-lg h-32 p-4 focus:outline-none focus:border-blue-500 transition-colors" />
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-colors">
                            SEND MESSAGE
                        </button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}
