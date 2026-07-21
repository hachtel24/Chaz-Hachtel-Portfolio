"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, Star, Palette, CalendarClock, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SprintsContent() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="max-w-3xl">
                    <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">
                        Websites that fix menu friction.
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        Chachtel Sprints builds clean, mobile-friendly restaurant websites designed around how customers actually decide where to eat. We don&apos;t just design; we solve the problem of lost revenue due to customer friction.
                    </p>
                    <a
                        href="https://chachtelsprints.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        Start My Website Sprint
                        <ArrowRight size={20} />
                    </a>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-20 bg-secondary/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-display text-3xl font-bold text-primary mb-6">The Core Problem</h2>
                            <p className="text-lg text-foreground mb-6">
                                Most diners check the menu on their phone before they arrive. If that menu is hard to find, buried in a PDF, or outdated, they leave.
                            </p>
                            <p className="text-lg text-foreground font-semibold">
                                We frame this as lost revenue, not a design issue.
                            </p>
                        </div>
                        <div className="bg-card p-8 rounded-2xl border border-destructive/20 shadow-sm relative">
                            <h3 className="font-bold text-destructive mb-4">Signs of Friction:</h3>
                            <ul className="space-y-3">
                                {["No menu online", "PDFs that don't work on mobile", "Buried or outdated info", "Inconsistent pricing"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-foreground/80">
                                        <span className="w-2 h-2 rounded-full bg-destructive" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Restaurants Choose Us */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h2 className="font-display text-3xl font-bold text-primary mb-12 text-center">Why Restaurants Choose Chachtel Sprints</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        "We focus on conversion, not decoration",
                        "Fast turnaround that matches restaurant urgency",
                        "Clear communication — no big-agency complexity",
                        "Mobile-first layouts built for real customer behavior",
                        "Fair, transparent pricing",
                        "You talk directly with the person building your site"
                    ].map((reason, i) => (
                        <div key={i} className="flex items-start gap-3 bg-secondary/10 p-4 rounded-xl">
                            <CheckCircle2 className="text-accent shrink-0 mt-1" />
                            <span className="font-medium text-foreground">{reason}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services & Offers */}
            <section className="py-20 bg-secondary/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display text-4xl font-bold text-primary mb-4 text-center">Services & Offers</h2>
                    <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                        Simple, fixed-price packages designed to solve specific restaurant problems.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Core Offer */}
                        <div className="bg-primary text-white p-8 rounded-3xl shadow-xl relative overflow-hidden md:col-span-2 lg:col-span-1 lg:row-span-2">
                            <div className="relative z-10">
                                <div className="inline-block bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">CORE OFFER</div>
                                <h3 className="font-display text-3xl font-bold mb-2">Website & Menu Sprint</h3>
                                <p className="text-gray-300 mb-6">The foundation of your digital presence.</p>
                                <div className="text-5xl font-bold text-accent mb-2">$750 <span className="text-lg font-normal text-gray-300">/ one-time</span></div>

                                <ul className="space-y-4 mb-8">
                                    {[
                                        "3–5 page restaurant website",
                                        "Dedicated, mobile-friendly menu page",
                                        "Live in 5–7 days",
                                        "One revision round"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <span className="p-1 bg-accent/20 rounded-full">
                                                <CheckCircle2 size={16} className="text-accent" />
                                            </span>
                                            <span className="text-gray-100">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-6 border-t border-white/10">
                                    <h4 className="font-bold text-accent mb-2">Optional: Ongoing Site Care</h4>
                                    <p className="text-sm text-gray-300">$25–$50/month for menu updates & seasonal changes. No contracts.</p>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                        </div>

                        {/* Promo Graphics */}
                        <div className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col">
                            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-primary mb-4">
                                <Star size={24} />
                            </div>
                            <h3 className="font-bold text-xl text-primary mb-2">Promo Graphics & Specials Support</h3>
                            <p className="text-muted-foreground text-sm flex-1 mb-4">
                                Clean, diner-friendly graphics for weekly specials and seasonal menus. Solves the issue of buried PDF specials.
                            </p>
                            <div className="mt-auto pt-4 border-t border-border">
                                <span className="font-bold text-lg text-primary">$150–$300</span> <span className="text-sm text-muted-foreground">/ graphic</span>
                            </div>
                        </div>

                        {/* Visual Identity */}
                        <div className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col">
                            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-primary mb-4">
                                <Palette size={24} />
                            </div>
                            <h3 className="font-bold text-xl text-primary mb-2">Restaurant Visual Identity Sprint</h3>
                            <p className="text-muted-foreground text-sm flex-1 mb-4">
                                Simple, recognizable brand elements (logo refresh, color palette) to strengthen customer trust and decision-making.
                            </p>
                            <div className="mt-auto pt-4 border-t border-border">
                                <span className="font-bold text-lg text-primary">$300–$600</span>
                            </div>
                        </div>

                        {/* Seasonal Management */}
                        <div className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col md:col-span-2 lg:col-span-1">
                            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-primary mb-4">
                                <CalendarClock size={24} />
                            </div>
                            <h3 className="font-bold text-xl text-primary mb-2">Seasonal Menu & Specials Management</h3>
                            <p className="text-muted-foreground text-sm flex-1 mb-4">
                                We handle the seasonal cycle so you don’t lose revenue to outdated info. Updates, posters, and digital menu edits.
                            </p>
                            <div className="mt-auto pt-4 border-t border-border">
                                <span className="font-bold text-lg text-primary">$50–$100</span> <span className="text-sm text-muted-foreground">/ month</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Work */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h2 className="font-display text-3xl font-bold text-primary mb-4 text-center">Recent Work</h2>
                <p className="text-center text-xl text-muted-foreground mb-12">
                    Menu & Promo Sprint Examples for Pancake Haus in Edmonds, WA.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { src: "/ninja-promo.png", alt: "Ninja Promo Graphic", label: "Seasonal Special Promo" },
                        { src: "/salmon-promo.png", alt: "Salmon Table Marker Graphic", label: "Table Marker Design" }
                    ].map((img, i) => (
                        <div
                            key={i}
                            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-border cursor-zoom-in"
                            onClick={() => setSelectedImage(img.src)}
                        >
                            <div className="aspect-[3/4] relative bg-secondary/5 flex items-center justify-center p-6">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="object-contain w-full h-full drop-shadow-md"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-background/95 border-t border-border p-4">
                                <p className="font-bold text-primary text-center">{img.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Full screen view"
                            className="max-h-screen max-w-full object-contain"
                            onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking image
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
