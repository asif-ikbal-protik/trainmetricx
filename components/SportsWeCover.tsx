"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- Visual Components (Abstract SVG/CSS) ---

const FootballVisual = () => (
    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <svg className="w-full h-full" viewBox="0 0 200 150" preserveAspectRatio="none">
            <path d="M0,75 L200,75 M100,20 L100,130" stroke="#0066FF" strokeWidth="0.5" fill="none" />
            <circle cx="100" cy="75" r="20" stroke="#0066FF" strokeWidth="0.5" fill="none" />
            <motion.circle cx="40" cy="40" r="2" fill="#0066FF" animate={{ x: [0, 20, 0], y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }} />
            <motion.circle cx="160" cy="110" r="2" fill="#0066FF" animate={{ x: [0, -15, 0], y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }} />
            <motion.circle cx="80" cy="90" r="2" fill="#00FF88" animate={{ x: [0, 10, 0], y: [0, -20, 0] }} transition={{ duration: 3.5, repeat: Infinity }} />
            <motion.path d="M40,40 Q70,20 100,75" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="2 2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
);

const BasketballVisual = () => (
    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <svg className="w-full h-full" viewBox="0 0 200 150" preserveAspectRatio="none">
            <path d="M0,150 L200,150" stroke="#FF6600" strokeWidth="1" />
            <circle cx="100" cy="150" r="40" stroke="#FF6600" strokeWidth="0.5" fill="none" />
            <rect x="80" y="100" width="40" height="50" stroke="#FF6600" strokeWidth="0.5" fill="none" />
            <motion.path d="M40,100 Q100,20 100,130" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.circle cx="40" cy="100" r="2" fill="#FF6600" animate={{ cx: [40, 100], cy: [100, 130] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }} />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
);

const AmFootballVisual = () => (
    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <svg className="w-full h-full" viewBox="0 0 200 150" preserveAspectRatio="none">
            <path d="M20,0 L20,150 M60,0 L60,150 M100,0 L100,150 M140,0 L140,150 M180,0 L180,150" stroke="#00AAFF" strokeWidth="0.2" fill="none" />
            <circle cx="100" cy="100" r="2" fill="#FFFFFF" />
            <motion.path d="M100,100 L80,120 L40,80" stroke="#00FF88" strokeWidth="1" fill="none"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path d="M100,100 L120,80 L120,40" stroke="#00FF88" strokeWidth="1" fill="none"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <path d="M38,78 L42,82 M42,78 L38,82" stroke="#FF0000" strokeWidth="1" />
            <path d="M118,38 L122,42 M122,38 L118,42" stroke="#FF0000" strokeWidth="1" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
);

const TennisVisual = () => (
    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <svg className="w-full h-full" viewBox="0 0 200 150" preserveAspectRatio="none">
            <path d="M40,20 L160,20 L180,130 L20,130 Z" stroke="#CCFF00" strokeWidth="0.5" fill="none" />
            <line x1="100" y1="20" x2="100" y2="75" stroke="#CCFF00" strokeWidth="0.5" />
            <line x1="20" y1="75" x2="180" y2="75" stroke="#CCFF00" strokeWidth="0.5" />
            <motion.circle cx="100" cy="120" r="1.5" fill="#CCFF00"
                animate={{ cy: [120, 80, 110], cx: [50, 100, 150], scale: [1, 0.8, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
);

const CricketVisual = () => (
    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <svg className="w-full h-full" viewBox="0 0 200 150" preserveAspectRatio="none">
            {/* Pitch/Crease */}
            <rect x="70" y="40" width="60" height="100" stroke="#FACC15" strokeWidth="0.5" fill="none" />
            <line x1="70" y1="120" x2="130" y2="120" stroke="#FACC15" strokeWidth="0.5" />
            {/* Stumps */}
            <line x1="95" y1="40" x2="95" y2="30" stroke="#FACC15" strokeWidth="1" />
            <line x1="100" y1="40" x2="100" y2="30" stroke="#FACC15" strokeWidth="1" />
            <line x1="105" y1="40" x2="105" y2="30" stroke="#FACC15" strokeWidth="1" />
            {/* Bowling Path */}
            <motion.path d="M100,140 Q100,100 100,45" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="2 2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.circle cx="100" cy="140" r="1.5" fill="#EF4444"
                animate={{ cy: [140, 80, 45], scale: [1, 1.2, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
);

const GolfVisual = () => (
    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <svg className="w-full h-full" viewBox="0 0 200 150" preserveAspectRatio="none">
            {/* Green / Fairway (Abstract) */}
            <path d="M0,150 Q50,140 100,145 T200,140" stroke="#22C55E" strokeWidth="0.5" fill="none" />
            {/* Flag */}
            <line x1="160" y1="140" x2="160" y2="100" stroke="#FFFFFF" strokeWidth="1" />
            <path d="M160,100 L175,107 L160,115 Z" fill="#EF4444" />
            {/* Ball Trajectory */}
            <motion.path d="M20,140 Q80,20 160,138" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="4 4"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.circle cx="20" cy="140" r="1.5" fill="#FFFFFF"
                animate={{ cx: [20, 160], cy: [140, 20, 138] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
);


const sports = [
    {
        id: "football",
        name: "Football (Soccer)",
        description: "22-point skeletal tracking & complex event recognition (passes, tackles, offside).",
        visual: <FootballVisual />,
        color: "group-hover:text-blue-400"
    },
    {
        id: "basketball",
        name: "Basketball",
        description: "Shot charts, pick-and-roll detection, and player spacing analytics.",
        visual: <BasketballVisual />,
        color: "group-hover:text-orange-400"
    },
    {
        id: "cricket",
        name: "Cricket",
        description: "Ball tracking, pitch map analysis, and batsman stroke mechanics.",
        visual: <CricketVisual />,
        color: "group-hover:text-yellow-400"
    },
    {
        id: "am_football",
        name: "American Football",
        description: "Formation classification and route running analysis for every snap.",
        visual: <AmFootballVisual />,
        color: "group-hover:text-cyan-400"
    },
    {
        id: "tennis",
        name: "Tennis",
        description: "Ball trajectory prediction and stroke mechanics analysis.",
        visual: <TennisVisual />,
        color: "group-hover:text-lime-400"
    },
    {
        id: "golf",
        name: "Golf",
        description: "Swing biomechanics and high-precision ball flight telemetry.",
        visual: <GolfVisual />,
        color: "group-hover:text-green-400"
    }
];

export default function SportsWeCover() {
    return (
        <section id="sports" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            Sports We Cover
                        </h2>
                        <p className="text-white/60 text-lg">
                            Domain-specific taxonomies for every major sport. We understand the rules, not just the pixels.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <button className="flex items-center gap-2 text-primary hover:text-white transition-colors group">
                            See Full List <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sports.map((sport, index) => (
                        <motion.div
                            key={sport.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative h-[350px] rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden flex flex-col justify-end p-6 cursor-default hover:shadow-2xl hover:bg-white/[0.07]"
                        >
                            {sport.visual}

                            <div className="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className={`text-2xl font-bold text-white mb-2 transition-colors ${sport.color}`}>
                                    {sport.name}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {sport.description}
                                </p>
                            </div>

                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="md:hidden mt-8 text-center">
                    <button className="flex items-center gap-2 text-primary justify-center">
                        See Full List <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </section>
    );
}
