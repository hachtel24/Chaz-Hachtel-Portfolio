"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function WorkPreview() {
    const featured = projects.filter((p) => p.featured).slice(0, 3);

    return (
        <section className="relative bg-primary pt-10 md:pt-14 pb-24 md:pb-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-end justify-between mb-16 flex-wrap gap-4"
                >
                    <div>
                        <span className="text-accent text-sm font-semibold tracking-widest uppercase">
                            Selected Work
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
                            Recent builds.
                        </h2>
                    </div>
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-accent transition-colors font-semibold"
                    >
                        View all work
                        <ArrowUpRight size={18} />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featured.map((project, i) => (
                        <motion.a
                            key={project.title}
                            href={project.link || "/work"}
                            target={project.link ? "_blank" : undefined}
                            rel={project.link ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative aspect-[4/5] rounded-2xl overflow-hidden block bg-white/5"
                        >
                            {(project.homeImage || project.image) && (
                                <Image
                                    src={project.homeImage || project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="text-accent text-xs font-semibold uppercase tracking-wide">
                                    {project.category}
                                </span>
                                <h3 className="font-display text-2xl font-bold text-white mt-1 flex items-center gap-2">
                                    {project.title}
                                    <ArrowUpRight
                                        size={18}
                                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                                    />
                                </h3>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
