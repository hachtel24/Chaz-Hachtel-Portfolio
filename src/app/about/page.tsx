import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Chaz Hachtel | Background & Skills",
    description: "Learn about Chaz Hachtel's journey from competitive baseball to digital strategy and web development at Western Washington University.",
};

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraduationCap, Code2, Briefcase, MapPin, Heart, Music, Trophy } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full text-primary font-medium text-sm mb-6">
                            <MapPin size={16} />
                            Snohomish, WA
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">
                            Hi, I&apos;m Chaz Hachtel.
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            I&apos;m a digital strategist and creative developer with a passion for building friction-free web experiences. I graduated from Snohomish High in 2021 and recently earned my degree in Business Administration (Marketing) from Western Washington University.
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                            <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-lg">
                                <GraduationCap className="text-accent" size={18} />
                                WWU Alum &apos;25
                            </div>
                            <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-lg">
                                <Code2 className="text-accent" size={18} />
                                Web Developer
                            </div>
                            <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-lg">
                                <Briefcase className="text-accent" size={18} />
                                Marketing Strategist
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 border-4 border-white dark:border-border max-w-md mx-auto">
                            <img
                                src="/about-1.jpg"
                                alt="Chaz Hachtel"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="absolute -z-10 top-10 right-10 w-full h-full bg-accent/20 rounded-full blur-3xl transform"></div>
                    </div>
                </div>
            </section>

            {/* My Story & Education */}
            <section className="py-20 bg-secondary/10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display text-3xl font-bold text-primary mb-8 text-center">My Journey</h2>

                    <div className="space-y-12">
                        <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                            <h3 className="text-xl font-bold text-foreground mb-4">The Pivot to Academics</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Growing up, baseball was my life. But an elbow injury freshman year and the COVID shutdowns pushed me off the field and into the classroom. That unexpected downtime gave me the focus to graduate with a 3.95 GPA and head to Everett Community College, aiming to maximize my education while saving money.
                            </p>
                        </div>

                        <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                            <h3 className="text-xl font-bold text-foreground mb-4">Western Washington University</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                At WWU, I discovered my niche: the intersection of strategy and technology. My minor in <strong>Business Analytics</strong> complemented my Marketing degree perfectly.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                I launched <strong>Marketing Compass</strong>, a newsletter to help pre-major students navigate the program—reducing the same anxiety I once felt.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Passion for Building */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="rounded-2xl overflow-hidden shadow-xl -rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white dark:border-border max-w-md mx-auto bg-primary/5">
                            <img
                                src="/about-2.jpg"
                                alt="Chaz Hachtel Life"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="font-display text-3xl font-bold text-primary mb-6">Building with AI & Speed</h2>
                        <p className="text-lg text-foreground mb-6">
                            I recently launched <strong>Chachtel Sprints</strong> to build friction-free websites for small businesses like <em>Pancake Haus</em> and <em>Wicked Iron Works</em>.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            I leverage AI-powered workflows—using tools like <strong>Claude Code</strong>, <strong>Antigravity</strong>, and <strong>ChatGPT</strong>—to deliver high-quality work incredibly fast. I believe in sprint-based execution over long, drawn-out agency processes.
                        </p>
                        <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                            <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                                <Briefcase size={20} />
                                Actively Looking For:
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Opportunities in <strong>eCommerce</strong>, <strong>Digital Marketing</strong>, and <strong>Web Management</strong> where I can combine design, analytics, and tech.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Personal Life */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Heart className="w-12 h-12 text-accent mx-auto mb-6" />
                    <h2 className="font-display text-3xl font-bold mb-8">Outside of Work</h2>
                    <p className="text-xl text-gray-200 mb-12 leading-relaxed">
                        My hobbies keep me connected to what I love. Whether it&apos;s working out, hanging with friends, or gaming.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                            <Trophy className="w-8 h-8 text-accent mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Gaming</h3>
                            <p className="text-sm text-gray-300">Dominating in Madden and MLB The Show.</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                            <Music className="w-8 h-8 text-accent mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Music</h3>
                            <p className="text-sm text-gray-300">Kanye West&apos;s pre-2018 discography stays on repeat.</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                            <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Local</h3>
                            <p className="text-sm text-gray-300">Proud Snohomish native, close to family and friends.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
