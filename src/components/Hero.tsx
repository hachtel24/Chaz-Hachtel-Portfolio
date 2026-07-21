"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-24 md:pt-16">
            {/* Animated background glow */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    className="absolute top-[-10%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-accent/25 blur-[120px]"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[-15%] left-[-10%] w-[38vw] h-[38vw] rounded-full bg-secondary/25 blur-[120px]"
                    animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.45, 0.25] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(70,219,228,0.08),transparent_60%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 space-y-8 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-semibold tracking-widest uppercase"
                    >
                        <Sparkles size={14} />
                        Digital Marketing Strategist &amp; Creative Developer
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05]"
                    >
                        Fast creative that <br />
                        <span className="bg-gradient-to-r from-accent via-secondary to-mint bg-clip-text text-transparent">
                            grows your business.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg text-white/60 max-w-xl mx-auto md:mx-0"
                    >
                        I build fast-turnaround websites and marketing assets for small businesses using
                        modern design tools and AI-powered workflows. High quality, delivered in a sprint.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Link
                            href="/work"
                            className="group inline-flex items-center justify-center px-8 py-3 w-full sm:w-auto rounded-full bg-accent text-primary font-semibold hover:bg-accent/90 transition-colors gap-2"
                        >
                            View My Work
                            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/resume"
                            className="inline-flex items-center justify-center px-8 py-3 w-full sm:w-auto rounded-full border border-white/20 text-white font-semibold hover:border-accent hover:text-accent transition-colors gap-2"
                        >
                            View Resume
                            <Download size={20} />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex-1 relative mb-12 md:mb-0"
                >
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto animate-float">
                        <motion.div
                            className="absolute -inset-4 rounded-full bg-gradient-to-tr from-accent via-secondary to-mint blur-2xl"
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-white/10 shadow-2xl">
                            <Image
                                src="/IMG_4658.PNG"
                                alt="Chaz Hachtel"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-5 h-9 rounded-full border border-white/20 flex justify-center pt-2">
                    <div className="w-1 h-2 rounded-full bg-accent" />
                </div>
            </motion.div>
        </section>
    );
}
