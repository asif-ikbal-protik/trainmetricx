"use client";

import { motion } from "framer-motion";
import { Cpu, FlaskConical, Trophy, Radio, ArrowUpRight } from "lucide-react";

const useCases = [
    {
        title: "Sports Tech Companies",
        icon: <Cpu className="w-6 h-6" />,
        description: "Accelerate your R&D for player tracking, ball telemetry, and 3D reconstruction models.",
        points: ["Computer Vision Training", "ID Linkage Consistency", "3D Pose Estimation"],
        color: "from-blue-500/20 to-blue-600/5",
        accent: "text-blue-400"
    },
    {
        title: "AI Research Labs",
        icon: <FlaskConical className="w-6 h-6" />,
        description: "Access high-quality, ground-truth datasets for sports science and tactical research.",
        points: ["Benchmark Datasets", "Algorithmic Validation", "Peer-Reviewed Data"],
        color: "from-emerald-500/20 to-emerald-600/5",
        accent: "text-emerald-400"
    },
    {
        title: "Professional Clubs",
        icon: <Trophy className="w-6 h-6" />,
        description: "Transform raw footage into actionable tactical insights and performance metrics.",
        points: ["Tactical Performance Logs", "Scouting Intelligence", "Biomechanical Audits"],
        color: "from-orange-500/20 to-orange-600/5",
        accent: "text-orange-400"
    },
    {
        title: "Broadcast & Media",
        icon: <Radio className="w-6 h-6" />,
        description: "Power live graphics and fan engagement stats with real-time event classification.",
        points: ["Real-time Log Feeds", "Engagement Graphics", "Archival Indexing"],
        color: "from-purple-500/20 to-purple-600/5",
        accent: "text-purple-400"
    }
];

export default function UseCases() {
    return (
        <section id="solutions" className="py-24 bg-black relative overflow-hidden">

            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Built for the <span className="text-primary">Ecosystem</span>
                    </motion.h2>
                    <p className="text-white/60 text-lg">
                        From silicon valley startups to top-tier European clubs, we provide the ground-truth data that powers the next generation of sports intelligence.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`group relative p-8 rounded-3xl bg-gradient-to-br ${useCase.color} border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden`}
                        >
                            {/* Card Background Glow */}
                            <div className="absolute top-0 right-0 p-12 bg-white/5 blur-3xl rounded-full -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center mb-6 ${useCase.accent}`}>
                                    {useCase.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    {useCase.title}
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </h3>

                                <p className="text-white/60 leading-relaxed mb-8 max-w-sm">
                                    {useCase.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {useCase.points.map((point, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-white/40 uppercase tracking-widest"
                                        >
                                            {point}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Corner Element */}
                            <div className="absolute bottom-0 right-0 p-4 opacity-10">
                                <div className="w-24 h-24 border-r-2 border-b-2 border-white rounded-br-3xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
