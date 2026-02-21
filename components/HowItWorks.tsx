"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { UploadCloud, Highlighter, ShieldCheck, Download } from "lucide-react";

const steps = [
    {
        title: "Raw Data Ingestion",
        description: "Upload match footage from any source—stadium feeds, wearable sensors, or broadcast streams. Our platform handles all formats.",
        icon: <UploadCloud className="w-8 h-8" />,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Expert Annotation",
        description: "Domain experts frame tactical events, skeletal tracking, and ball mechanics with pixel-level precision.",
        icon: <Highlighter className="w-8 h-8" />,
        color: "text-orange-500",
        bg: "bg-orange-500/10"
    },
    {
        title: "Multi-Stage QA",
        description: "Every frame passes through our 3-tier QA process to ensure 99.8% geometric and temporal accuracy.",
        icon: <ShieldCheck className="w-8 h-8" />,
        color: "text-green-500",
        bg: "bg-green-500/10"
    },
    {
        title: "Seamless Delivery",
        description: "Receive your structured datasets in COCO, YOLO, or custom JSON. Integrated directly into your R&D pipeline.",
        icon: <Download className="w-8 h-8" />,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    }
];

export default function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="workflow" ref={containerRef} className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Data Pipeline <span className="text-primary">Perfected</span>
                    </motion.h2>
                    <p className="text-white/60 text-lg">
                        A seamless journey from raw match footage to structured training data.
                        Scale your model's intelligence without the operational burden.
                    </p>
                </div>

                {/* Timeline Desktop */}
                <div className="hidden lg:block relative max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 overflow-hidden">
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-accent w-full"
                        />
                    </div>

                    <div className="space-y-32">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex items-center gap-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="flex-1"
                                >
                                    <div className={`p-8 rounded-3xl bg-white/5 border border-white/10 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                        <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                                        <p className="text-white/60 leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>

                                {/* Center Node */}
                                <div className="relative z-20">
                                    <motion.div
                                        whileInView={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                                        viewport={{ once: false }}
                                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${step.bg} ${step.color} border border-white/10 shadow-2xl backdrop-blur-md`}
                                    >
                                        {step.icon}
                                    </motion.div>
                                </div>

                                {/* Empty Spacer */}
                                <div className="flex-1" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline Mobile/Tablet */}
                <div className="lg:hidden relative">
                    <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/10" />
                    <div className="space-y-16 pl-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className={`absolute -left-[3.25rem] w-10 h-10 rounded-xl flex items-center justify-center ${step.bg} ${step.color} border border-white/10 z-20`}>
                                    <div className="w-5 h-5">{step.icon}</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-white/60 text-sm">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
