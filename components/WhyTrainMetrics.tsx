"use client";

import { motion } from "framer-motion";
import { Brain, Layers, Users, FileCode, Maximize } from "lucide-react";

const features = [
    {
        title: "Domain expertise",
        description: "Our annotators are sports analysts who understand tactical intent, not just pixels.",
        icon: <Brain className="w-6 h-6" />,
        color: "text-blue-400"
    },
    {
        title: "Multi-sport coverage",
        description: "Unified taxonomies across 6+ major sports with specialized rulesets.",
        icon: <Layers className="w-6 h-6" />,
        color: "text-emerald-400"
    },
    {
        title: "Human-in-the-loop",
        description: "AI-assisted efficiency combined with multi-stage human verification.",
        icon: <Users className="w-6 h-6" />,
        color: "text-orange-400"
    },
    {
        title: "Flexible formats",
        description: "Custom JSON, COCO, YOLO, or CSV outputs tailored to your ML pipeline.",
        icon: <FileCode className="w-6 h-6" />,
        color: "text-purple-400"
    },
    {
        title: "Enterprise scale",
        description: "Ability to process millions of frames per week with consistent quality.",
        icon: <Maximize className="w-6 h-6" />,
        color: "text-cyan-400"
    },
    {
        title: "Fast turnaround",
        description: "Strict SLAs to ensure your R&D cycle never pauses for data.",
        icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
        color: "text-red-400"
    }
];

export default function WhyTrainMetrics() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.05),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Why <span className="text-primary">Train Matricx?</span>
                    </motion.h2>
                    <p className="text-white/60 text-lg">
                        We bridge the gap between raw video and high-performance AI models by combining domain intelligence with technical precision.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/[0.07] transition-all duration-300"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badges / Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 md:gap-24 opacity-60"
                >
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">10M+</div>
                        <div className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Annotated frames</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">99.8%</div>
                        <div className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Accuracy rate</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">24/7</div>
                        <div className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Global operations</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">6+</div>
                        <div className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Major sports</div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
