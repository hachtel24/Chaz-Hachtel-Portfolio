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
        <div className="relative overflow-hidden border-y border-white/10 bg-primary py-5">
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
