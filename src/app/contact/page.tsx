import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Linkedin, Calendar } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Chaz Hachtel | Get in Touch",
    description: "Hire Chaz Hachtel for your next website sprint, digital marketing campaign, or brand identity project.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto flex flex-col items-center text-center">
                <h1 className="font-display text-5xl font-bold text-primary mb-6">Let&apos;s Work Together</h1>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
                    Whether you need a new website in a week, help with branding, or marketing strategy—I&apos;m ready to sprint.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16">
                    <a
                        href="mailto:charles.hachteliii@gmail.com"
                        className="flex flex-col items-center justify-center p-8 bg-card rounded-2xl border border-border hover:border-accent hover:shadow-md transition-all group"
                    >
                        <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors mb-4">
                            <Mail size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-primary mb-1">Email Me</h3>
                        <p className="text-muted-foreground">charles.hachteliii@gmail.com</p>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/chaz-hachtel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-8 bg-card rounded-2xl border border-border hover:border-accent hover:shadow-md transition-all group"
                    >
                        <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors mb-4">
                            <Linkedin size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-primary mb-1">LinkedIn</h3>
                        <p className="text-muted-foreground">Let&apos;s connect</p>
                    </a>
                </div>

                {/* Optional Availability Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-mint/20 text-primary rounded-full text-sm font-semibold border border-mint/50">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                    </span>
                    Currently accepting new projects
                </div>

            </div>

            <Footer />
        </main>
    );
}
