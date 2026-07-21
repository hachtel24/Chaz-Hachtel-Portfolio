const items = [
    "WEB DESIGN",
    "BRANDING",
    "AI-ASSISTED WORKFLOWS",
    "FAST TURNAROUND",
    "RESTAURANT SITES",
    "VISUAL IDENTITY",
];

export default function Marquee() {
    const doubled = [...items, ...items];

    return (
        <div className="relative overflow-hidden border-y border-white/10 bg-primary py-5 px-4 sm:px-6 lg:px-8">
            {/* Edge fade masks to keep the track visually inset like the rest of the page */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-primary to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-primary to-transparent z-10" />

            <div className="flex w-max animate-marquee">
                {doubled.map((item, i) => (
                    <div key={i} className="flex items-center gap-12 pr-12">
                        <span className="font-display text-lg md:text-xl font-semibold text-white/25 whitespace-nowrap tracking-wide">
                            {item}
                        </span>
                        <span className="text-accent text-lg">&bull;</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
