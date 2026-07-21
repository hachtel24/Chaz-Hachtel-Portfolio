"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-24 md:pt-16">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-ice rounded-full blur-3xl opacity-50 -z-10 transform translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-mint rounded-full blur-3xl opacity-50 -z-10 transform -translate-x-1/4 translate-y-1/4" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-8 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-accent font-semibold tracking-wide uppercase mb-2">
                            Digital Marketing Strategist & Creative Developer
                        </h2>
                        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary leading-tight">
                            Fast creative that <br />
                            <span className="text-secondary">grows your business.</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0"
                    >
                        I build fast-turnaround websites and marketing assets for small businesses using
                        modern design tools and AI‑powered workflows. High quality, delivered in a sprint.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Link
                            href="/work"
                            className="inline-flex items-center justify-center px-8 py-3 w-full sm:w-auto rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors gap-2"
                        >
                            View My Work
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="/resume"
                            className="inline-flex items-center justify-center px-8 py-3 w-full sm:w-auto rounded-full bg-secondary text-primary font-semibold hover:bg-secondary/90 transition-colors gap-2"
                        >
                            View Resume
                            <Download size={20} />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex-1 relative mb-12 md:mb-0"
                >
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto">
                        {/* Image Border/Decoration */}
                        <div className="absolute inset-0 rounded-full border-4 border-accent transform rotate-6 scale-105" />
                        <div className="absolute inset-0 rounded-full border-4 border-secondary transform -rotate-6 scale-105" />

                        <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl bg-white">
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
        </section>
    );
}
