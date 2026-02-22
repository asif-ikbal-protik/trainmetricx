"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const sports = [
    {
        id: "football",
        name: "Football (Soccer)",
        description: "22-point skeletal tracking & complex event recognition (passes, tackles, offside).",
        image: "/images/sports/football.png",
        color: "group-hover:text-blue-400"
    },
    {
        id: "basketball",
        name: "Basketball",
        description: "Shot charts, pick-and-roll detection, and player spacing analytics.",
        image: "/images/sports/basketball_v2.png",
        color: "group-hover:text-orange-400"
    },
    {
        id: "cricket",
        name: "Cricket",
        description: "Ball tracking, pitch map analysis, and batsman stroke mechanics.",
        image: "/images/sports/cricket.png",
        color: "group-hover:text-yellow-400"
    },
    {
        id: "ice_hockey",
        name: "Ice Hockey",
        description: "Player skeletal tracking, stick flex analysis, and high-speed puck trajectory.",
        image: "/images/sports/ice_hockey.png",
        color: "group-hover:text-cyan-400"
    },
    {
        id: "tennis",
        name: "Tennis",
        description: "Ball trajectory prediction and stroke mechanics analysis.",
        image: "/images/sports/tennis.png",
        color: "group-hover:text-lime-400"
    },
    {
        id: "golf",
        name: "Golf",
        description: "Swing biomechanics and high-precision ball flight telemetry.",
        image: "/images/sports/golf.png",
        color: "group-hover:text-green-400"
    }
];

export default function SportsWeCover() {
    return (
        <section id="sports" className="py-24 bg-transparent relative overflow-hidden">
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
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={sport.image}
                                    alt={sport.name}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* Bottom gradient only for text readability */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
                            </div>

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
