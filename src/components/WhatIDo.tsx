"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, LineChart } from "lucide-react";

const offerings = [
    {
        icon: Code2,
        title: "Web Development",
        description: "Modern, fast websites built with Next.js and AI-assisted workflows, deployed in days.",
    },
    {
        icon: Palette,
        title: "Branding & Identity",
        description: "Logos, color systems, and visual assets that make small businesses feel established.",
    },
    {
        icon: Zap,
        title: "Sprint Delivery",
        description: "A repeatable 7-day process from intake to launch, no drawn-out timelines.",
    },
    {
        icon: LineChart,
        title: "Growth Strategy",
        description: "Content and conversion thinking built into every site, not bolted on after.",
    },
];

export default function WhatIDo() {
    return (
        <section className="relative bg-primary py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mb-16"
                >
                    <span className="text-accent text-sm font-semibold tracking-widest uppercase">
                        What I Do
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
                        One studio, four disciplines.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
                    {offerings.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group border-t border-white/10 pt-6"
                            >
                                <Icon
                                    className="text-accent mb-4 transition-transform group-hover:-translate-y-1"
                                    size={32}
                                    strokeWidth={1.5}
                                />
                                <h3 className="font-display text-xl font-bold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-white/50 leading-relaxed">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
