"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video, ListTree, Database, CheckCircle2, Cpu } from "lucide-react";

const services = [
    {
        id: "video",
        title: "Video Annotation",
        icon: <Video className="w-5 h-5" />,
        description: "Multi-object tracking and semantic segmentation for elite sports analytics.",
        points: [
            "2D/3D Bounding Boxes",
            "Skeletal Pose Estimation",
            "Object ID Consistency",
            "Point-Cloud Annotation"
        ],
        mockup: (
            <div className="relative w-full h-full bg-slate-900 rounded-xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
                {/* Skeletal Overlay Overlay */}
                <svg className="absolute inset-0 w-full h-full p-12">
                    <motion.path
                        d="M50,50 L50,80 L40,110 M50,80 L60,110 M50,60 L30,90 M50,60 L70,90"
                        stroke="#00FF88" strokeWidth="2" fill="none"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.rect x="30" y="40" width="40" height="80" stroke="#0066FF" strokeWidth="1" fill="none"
                        animate={{ x: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }}
                    />
                    <text x="35" y="35" className="fill-blue-400 text-[10px] font-mono">PLAYER_ID: 07</text>
                </svg>
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md p-2 rounded border border-white/10 flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] text-white font-mono uppercase tracking-widest">Live Analysis</span>
                </div>
            </div>
        )
    },
    {
        id: "logging",
        title: "Event Logging",
        icon: <ListTree className="w-5 h-5" />,
        description: "Temporal event classification synchronized with sub-second precision.",
        points: [
            "Custom Strategic Taxonomies",
            "Match-Event Timelines",
            "Player Interaction Logs",
            "Intensity Metrics Tracking"
        ],
        mockup: (
            <div className="relative w-full h-full bg-[#0a0e1a] rounded-xl overflow-hidden p-6 border border-white/10 font-mono">
                <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] text-white/40 pb-2 border-b border-white/5">
                        <span>EVENT_TYPE</span>
                        <span>TIMESTAMP</span>
                        <span>CONFIDENCE</span>
                    </div>
                    {[
                        { e: "THROUGH_BALL", t: "12:04.22", c: "99.2%" },
                        { e: "INTERCEPTION", t: "12:06.14", c: "94.8%" },
                        { e: "ZONE_ENTRY", t: "12:08.01", c: "97.5%" },
                        { e: "SHOT_ON_TARGET", t: "12:11.45", c: "99.9%" },
                    ].map((row, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex justify-between items-center text-xs"
                        >
                            <span className="text-blue-400">{row.e}</span>
                            <span className="text-white/60">{row.t}</span>
                            <span className="text-emerald-400">{row.c}</span>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-8 h-2 bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div
                        className="absolute top-0 left-0 bottom-0 bg-primary"
                        animate={{ width: ["0%", "85%", "85%", "0%"] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                </div>
            </div>
        )
    },
    {
        id: "format",
        title: "Dataset Formats",
        icon: <Database className="w-5 h-5" />,
        description: "ML-ready outputs formatted for seamless pipeline integration.",
        points: [
            "COCO, YOLO, SVL, TFRecord",
            "Custom JSON Schemas",
            "Direct API Delivery",
            "CSV Statistical Exports"
        ],
        mockup: (
            <div className="relative w-full h-full bg-[#050505] rounded-xl overflow-hidden p-6 border border-white/10 font-mono text-[10px]">
                <div className="text-blue-400">{"{"}</div>
                <div className="pl-4">
                    <span className="text-orange-400">"annotation_id"</span>: <span className="text-emerald-400">"tm_2024_011"</span>,
                    <br />
                    <span className="text-orange-400">"sport"</span>: <span className="text-emerald-400">"football"</span>,
                    <br />
                    <span className="text-orange-400">"frames"</span>: [
                    <div className="pl-4">
                        <span className="text-white/80">
                            {"{"} "id": 1, "bboxes": [[12, 45, 120, 200]], "id_switches": 0 {"}"}
                        </span>,
                        <br />
                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <span className="text-white/80">
                                {"{"} "id": 2, "bboxes": [[14, 46, 122, 202]], "id_switches": 0 {"}"}
                            </span>
                        </motion.div>
                    </div>
                    ],
                    <br />
                    <span className="text-orange-400">"metadata"</span>: {"{"} ... {"}"}
                </div>
                <div className="text-blue-400">{"}"}</div>
                {/* Animated Code Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            </div>
        )
    }
];

export default function CoreServices() {
    const [activeTab, setActiveTab] = useState(services[0].id);

    return (
        <section id="services" className="py-24 bg-transparent relative overflow-hidden">

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Section Title */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6"
                    >
                        <Cpu className="w-3 h-3" />
                        Core Capabilities
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Technical Precision at <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Every Frame</span>
                    </h2>
                    <p className="text-white/60 text-lg">
                        We don't just label images. We build structured intelligence for the most demanding CV and Sports AI requirements.
                    </p>
                </div>

                {/* Interactive Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Tab Selection (Left side) */}
                    <div className="lg:col-span-5 space-y-4">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service.id)}
                                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative group ${activeTab === service.id
                                    ? "bg-white/10 border-primary shadow-[0_0_30px_rgba(0,102,255,0.15)]"
                                    : "bg-transparent border-white/5 hover:bg-white/5"
                                    }`}
                            >
                                {activeTab === service.id && (
                                    <motion.div
                                        layoutId="tabBg"
                                        className="absolute inset-0 bg-white/5 rounded-2xl"
                                    />
                                )}

                                <div className="flex gap-4 relative z-10">
                                    <div className={`p-3 rounded-xl transition-colors ${activeTab === service.id ? "bg-primary text-white" : "bg-white/5 text-white/40 group-hover:text-white"
                                        }`}>
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold mb-2 transition-colors ${activeTab === service.id ? "text-white" : "text-white/60 group-hover:text-white"
                                            }`}>
                                            {service.title}
                                        </h3>
                                        <p className={`text-sm leading-relaxed ${activeTab === service.id ? "text-white/70" : "text-white/40"
                                            }`}>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Detailed View (Right side) */}
                    <div className="lg:col-span-7 h-[500px]">
                        <AnimatePresence mode="wait">
                            {services.map((service) => service.id === activeTab && (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="h-full flex flex-col"
                                >
                                    <div className="flex-1 bg-white/5 rounded-3xl p-8 border border-white/10 relative overflow-hidden flex flex-col">
                                        {/* Mockup Area */}
                                        <div className="flex-1 mb-8 relative">
                                            {service.mockup}
                                            <div className="absolute inset-0 pointer-events-none rounded-xl border border-white/10" />
                                        </div>

                                        {/* Features List */}
                                        <div className="grid grid-cols-2 gap-4">
                                            {service.points.map((point, i) => (
                                                <div key={i} className="flex items-center gap-3 text-sm text-white/60">
                                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                                    {point}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Background Accent */}
                                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
}
