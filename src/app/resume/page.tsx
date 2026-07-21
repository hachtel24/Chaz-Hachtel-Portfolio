import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { experience, education, skills } from "@/data/resume";
import { Download, FileText } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume | Chaz Hachtel",
    description: "Professional resume of Chaz Hachtel - Digital Strategist & Creative Developer. Education, Experience, and Skills.",
};

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                {/* Header & Actions */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 border-b border-border pb-8">
                    <div>
                        <h1 className="font-display text-5xl font-bold text-primary mb-2">Resume</h1>
                        <p className="text-lg text-muted-foreground">
                            Digital Marketing Strategist & Creative Developer
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/Chaz Resume 012426.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors gap-2 text-sm font-medium"
                        >
                            <Download size={16} />
                            Download Resume
                        </a>
                        <a
                            href="/pcr activities.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 rounded-lg bg-secondary text-primary hover:bg-secondary/90 transition-colors gap-2 text-sm font-medium"
                        >
                            <FileText size={16} />
                            PCR Activities
                        </a>
                    </div>
                </div>

                {/* Experience */}
                <section className="mb-16">
                    <h2 className="font-display text-2xl font-bold text-primary mb-8 flex items-center gap-2">
                        <span className="w-8 h-1 bg-accent rounded-full block"></span>
                        Experience
                    </h2>
                    <div className="space-y-12">
                        {experience.map((job, index) => (
                            <div key={index} className="relative pl-8 border-l-2 border-border/50">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                                    <h3 className="text-xl font-bold text-foreground">{job.company}</h3>
                                    <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                                        {job.period}
                                    </span>
                                </div>
                                <p className="text-primary font-medium mb-1">{job.role}</p>
                                <p className="text-sm text-muted-foreground mb-4">{job.location}</p>
                                <p className="text-foreground/80 mb-4 italic">{job.description}</p>
                                <ul className="space-y-2">
                                    {job.points.map((point, i) => (
                                        <li key={i} className="text-foreground/90 leading-relaxed text-sm flex items-start gap-3">
                                            <span className="text-accent text-xl leading-[0] mt-[0.6rem]">•</span>
                                            <div className="flex-1">
                                                {point}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="mb-16">
                    <h2 className="font-display text-2xl font-bold text-primary mb-8 flex items-center gap-2">
                        <span className="w-8 h-1 bg-accent rounded-full block"></span>
                        Education
                    </h2>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                <h3 className="text-xl font-bold text-foreground">{edu.school}</h3>
                                <p className="text-primary font-medium">{edu.degree}</p>
                                <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                                    <span>{edu.period}</span>
                                    <span>{edu.details}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-20">
                    <h2 className="font-display text-2xl font-bold text-primary mb-8 flex items-center gap-2">
                        <span className="w-8 h-1 bg-accent rounded-full block"></span>
                        Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((category, index) => (
                            <div key={index} className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                <h3 className="font-bold text-primary mb-4 border-b border-border pb-2">
                                    {category.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-secondary/30 text-foreground text-sm rounded-md border border-secondary/50"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Hire Me CTA */}
                <section className="text-center py-12 border-t border-border">
                    <h2 className="font-display text-3xl font-bold text-primary mb-4">
                        Ready to make something great?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        I&apos;m currently open to new opportunities and collaborations.
                    </p>
                    <a
                        href="mailto:charles.hachteliii@gmail.com"
                        className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        Hire Me
                        <span className="block w-2 h-2 rounded-full bg-accent animate-pulse" />
                    </a>
                </section>
            </div>

            <Footer />
        </main>
    );
}
