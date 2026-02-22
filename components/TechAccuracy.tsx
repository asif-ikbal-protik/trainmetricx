"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Zap, Search, Gauge } from "lucide-react";
import { useEffect, useState } from "react";

const metrics = [
    { label: "Geometric Precision", value: "99.8%", icon: <Target className="w-5 h-5" /> },
    { label: "Temporal Consistency", value: "99.5%", icon: <Zap className="w-5 h-5" /> },
    { label: "QA Pass Rate", value: "100%", icon: <ShieldCheck className="w-5 h-5" /> },
];

const qaSteps = [
    {
        title: "AI-Assisted Pre-Processing",
        desc: "Proprietary models generate initial tracks, identifying 80% of standard objects instantly.",
        icon: <Search className="w-6 h-6" />
    },
    {
        title: "Double-Pass Expert Review",
        desc: "Two independent domain experts verify and correct every frame, focusing on tactical nuances.",
        icon: <ShieldCheck className="w-6 h-6" />
    },
    {
        title: "Senior Lead Audit",
        desc: "A final 10% random audit by senior analysts ensures zero drift in annotation quality.",
        icon: <Gauge className="w-6 h-6" />
    }
];

export default function TechAccuracy() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="accuracy" className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Stats and Context */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Precision That <span className="text-emerald-400">Exceeds</span> Benchmarks
                        </h2>
                        <p className="text-white/60 text-lg mb-12">
                            Sports AI demands more than generic accuracy. Our multi-stage pipeline is engineered to catch the 0.2% of errors that break tracking models.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                            {metrics.map((m, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                                    <div className="flex justify-center text-emerald-400 mb-3">
                                        {m.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-white mb-1">{m.value}</div>
                                    <div className="text-[10px] text-white/40 uppercase tracking-widest">{m.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6">
                            {qaSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">{step.title}</h3>
                                        <p className="text-sm text-white/40">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Visual Mockup / Accuracy Radar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] flex items-center justify-center"
                    >
                        {/* Accuracy "Radar" Visual */}
                        <div className="relative w-full max-w-[500px] aspect-square rounded-full border border-white/10 flex items-center justify-center">

                            {/* Concentric Rings */}
                            {[0.2, 0.4, 0.6, 0.8].map((op, i) => (
                                <div
                                    key={i}
                                    className="absolute rounded-full border border-white/5"
                                    style={{ width: `${(i + 1) * 25}%`, height: `${(i + 1) * 25}%` }}
                                />
                            ))}

                            {/* Pulsing Core */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full"
                            />

                            {/* Scanning Line */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/2 left-1/2 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent origin-left"
                            />

                            {/* Data Points */}
                            <div className="absolute inset-0">
                                {mounted && [...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_10px_#10b981]"
                                        style={{
                                            top: `${20 + Math.random() * 60}%`,
                                            left: `${20 + Math.random() * 60}%`
                                        }}
                                        animate={{ opacity: [1, 0.4, 1] }}
                                        transition={{ duration: 2 + i, repeat: Infinity }}
                                    />
                                ))}
                            </div>

                            <div className="relative text-center z-10">
                                <div className="text-5xl font-bold text-white mb-2 shadow-2xl">99.8%</div>
                                <div className="text-xs text-emerald-400 font-mono tracking-widest bg-emerald-400/10 px-3 py-1 rounded-full inline-block uppercase">VERIFIED_ACCURACY</div>
                            </div>

                            {/* Floating Tags */}
                            <div className="absolute top-10 right-10 p-3 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md text-[10px] text-white/60 font-mono">
                                ID_CONSISTENCY: <span className="text-emerald-400">OPTIMAL</span>
                            </div>
                            <div className="absolute bottom-20 left-4 p-3 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md text-[10px] text-white/60 font-mono">
                                SKELETAL_DRIFT: <span className="text-emerald-400">&lt; 0.2PX</span>
                            </div>
                        </div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}
