"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import Button from "./ui/Button";
import HolographicMatch from "./HolographicMatch";
import { useState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function Hero() {

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <section className="w-full relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
            {/* Full Width Container */}
            <div className="w-full h-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-screen">

                    {/* Left Column: High-Converting Copy */}
                    <div className="flex items-center justify-center lg:justify-end px-4 sm:px-6 lg:px-12 py-20 lg:py-0 relative z-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col gap-8 max-w-2xl w-full"
                        >
                            {/* Trust Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm hover:border-primary/50 transition-colors cursor-default"
                            >
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                                </span>
                                <span className="text-sm font-medium text-white/90">
                                    100+ Expert Annotators Available
                                </span>
                            </motion.div>

                            {/* Headline */}
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                                <span className="text-white">Precision Data for</span>
                                <br />
                                <span className="text-gradient">Sports AI & CV</span>
                            </h1>

                            {/* Subheadline */}
                            <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-lg">
                                Scale your <span className="text-white font-medium">Computer Vision models</span> with expert-verified training data. We transform raw match footage into structured, high-fidelity datasets 10x faster.
                            </p>

                            {/* Key Benefits */}
                            <ul className="flex flex-col gap-3 text-white/80">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                                    <span>99.8% Accuracy Guarantee for Object Tracking</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                                    <span>Custom Taxonomies for Football & Basketball</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                                    <span>Secure, NDA-Compliant Workflow</span>
                                </li>
                            </ul>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button
                                    size="lg"
                                    icon={<ArrowRight className="w-5 h-5" />}
                                    data-cal-namespace="30min"
                                    data-cal-link="trainmatricx/30min"
                                    data-cal-config='{"layout":"month_view"}'
                                >
                                    Book a Call
                                </Button>
                                <Button variant="outline" size="lg" icon={<PlayCircle className="w-5 h-5" />}>
                                    View Demo
                                </Button>
                            </div>

                            {/* Trust Stats Bar */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="pt-8 border-t border-white/10 flex flex-wrap gap-8 md:gap-12 opacity-80"
                            >
                                <div className="flex flex-col">
                                    <div className="text-2xl font-bold text-white mb-0.5">10M+</div>
                                    <div className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Annotated frames</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl font-bold text-white mb-0.5">99.8%</div>
                                    <div className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Accuracy rate</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl font-bold text-white mb-0.5">24/7</div>
                                    <div className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Operations</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl font-bold text-white mb-0.5">6+</div>
                                    <div className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Major sports</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column: Holographic Visual - Full Bleed */}
                    <div className="relative h-[50vh] lg:h-full w-full overflow-hidden bg-black/40 lg:bg-transparent">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute inset-0 flex items-center justify-center p-0 lg:p-0"
                        >
                            <div className="w-full h-full relative perspective-[2000px]">
                                {/* Holographic Match Component */}
                                <div className="w-full h-full transform scale-100 lg:scale-110 origin-center lg:origin-left flex items-center justify-center">
                                    <HolographicMatch />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>


        </section>
    );
}
