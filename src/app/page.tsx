import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <Navigation />
      <Hero />

      {/* Introduction Snippet */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-6 md:mx-auto bg-card rounded-3xl my-6 md:my-10 border border-border/50 shadow-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-6 text-primary">
            I help small businesses move fast.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Chachtel Sprints allows me to deliver rapid, professional websites and visual assets using AI‑powered workflows, modern design systems, and an iterative sprint model that keeps quality high and turnaround times fast.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
