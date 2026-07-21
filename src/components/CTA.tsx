"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative bg-primary border-t border-white/10 py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-accent/10 blur-[140px] -z-10"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
            >
                <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
                    Let&apos;s build something <span className="text-accent">fast.</span>
                </h2>
                <p className="text-white/50 text-lg mt-6 max-w-xl mx-auto">
                    Chachtel Sprints delivers rapid, professional websites and visual assets using
                    AI-powered workflows and an iterative sprint model.
                </p>
                <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 mt-10 px-10 py-4 rounded-full bg-accent text-primary font-semibold hover:bg-accent/90 transition-colors"
                >
                    Start a Project
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </motion.div>
        </section>
    );
}
