import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { ArrowUpRight, Folder, Layout, BarChart2 } from "lucide-react";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work & Portfolio | Chaz Hachtel",
    description: "View Chaz Hachtel's portfolio of restaurant websites, digital marketing campaigns, and analytics projects.",
};

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="font-display text-5xl font-bold text-primary mb-2">Selected Work</h1>
                    <p className="text-lg text-muted-foreground">
                        A mix of client work, case studies, and personal projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                        >
                            {/* Card Header (Image or Placeholder) */}
                            <div className="h-48 bg-secondary/20 relative border-b border-border/50 overflow-hidden">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        {project.category.includes("Web") ? <Layout size={48} className="text-secondary opacity-50" /> :
                                            project.category.includes("Analytics") ? <BarChart2 size={48} className="text-secondary opacity-50" /> :
                                                <Folder size={48} className="text-secondary opacity-50" />}
                                    </div>
                                )}

                                {project.status && (
                                    <div className="absolute top-3 right-3 px-2 py-1 bg-background/90 backdrop-blur text-xs font-bold text-primary rounded-md border border-border/50 shadow-sm">
                                        {project.status}
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-2">
                                            {project.type}
                                        </span>
                                        <h3 className="font-display text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-secondary rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                                        >
                                            <ArrowUpRight size={20} />
                                        </a>
                                    )}
                                </div>

                                <p className="text-muted-foreground mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-background border border-border text-xs text-foreground/70 rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    {project.stats && (
                                        <div className="flex gap-4 pt-4 border-t border-border/50">
                                            {project.stats.map((stat, i) => (
                                                <span key={i} className="text-xs font-bold text-primary uppercase tracking-wide">
                                                    {stat}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
