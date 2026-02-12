"use client";

import { motion } from "framer-motion";

const companies = [
    { name: "Darkhorse AI", color: "text-white" },
    { name: "Sportec", color: "text-white/60" },
    { name: "VisionSys", color: "text-white/60" },
    { name: "OptaMatch", color: "text-white/60" },
    { name: "GridBase", color: "text-white/60" },
    { name: "Analytics Pro", color: "text-white/60" },
    { name: "MotionLab", color: "text-white/60" },
    { name: "EliteTrack", color: "text-white/60" },
];

export default function LogoCarousel() {
    // Duplicate the list to create a seamless loop
    const doubledCompanies = [...companies, ...companies];

    return (
        <div className="w-full py-12 bg-black/50 border-y border-white/5 overflow-hidden relative">
            {/* Gradient Mask for fading edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-16 md:gap-24 items-center px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {doubledCompanies.map((company, i) => (
                        <div key={i} className="flex items-center gap-2 group">
                            <span className={`text-xl md:text-2xl font-bold tracking-tighter ${company.color} group-hover:text-emerald-400 transition-colors duration-300`}>
                                {company.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
