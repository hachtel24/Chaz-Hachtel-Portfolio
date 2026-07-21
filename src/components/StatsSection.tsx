"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

const stats = [
    { value: 7, suffix: " Days", label: "Sprint Turnaround" },
    { value: 100, suffix: "%", label: "AI-Assisted Workflow" },
    { value: 5, suffix: "+", label: "Projects Shipped" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;
        const controls = animate(0, value, {
            duration: 1.5,
            ease: "easeOut",
            onUpdate(latest) {
                if (ref.current) {
                    ref.current.textContent = Math.floor(latest) + suffix;
                }
            },
        });
        return () => controls.stop();
    }, [isInView, value, suffix]);

    return <span ref={ref}>{"0" + suffix}</span>;
}

export default function StatsSection() {
    return (
        <section className="relative bg-primary border-t border-white/10 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 text-center">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="sm:border-l sm:first:border-l-0 border-white/10 sm:px-6"
                    >
                        <div className="font-display text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-mint">
                            <Counter value={stat.value} suffix={stat.suffix} />
                        </div>
                        <p className="text-white/50 mt-2 uppercase tracking-wide text-sm">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
