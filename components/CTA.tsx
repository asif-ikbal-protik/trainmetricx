"use client";

import { motion } from "framer-motion";
import { Send, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import { useState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function CTA() {

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Visuals */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none -ml-48 -mb-48" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="max-w-6xl mx-auto rounded-[3rem] bg-white/5 border border-white/10 overflow-hidden relative">

                    {/* Subtle Grid Pattern inside the card */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Left Column: Copy and Intent */}
                        <div className="p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                            >
                                Ready to fuel your <span className="text-primary">Sports AI?</span>
                            </motion.h2>
                            <p className="text-white/60 text-lg mb-10 leading-relaxed">
                                Unlock 99.8% precision datasets today. Whether you need a pilot sample or enterprise-scale data, our experts are ready to deliver.
                            </p>

                            <div className="space-y-6 mb-12">
                                {[
                                    "Free sample dataset within 24h",
                                    "Custom annotation pilot program",
                                    "Scalable workforce for 1M+ frames",
                                    "Technical consultation with analysts"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white/50 text-sm">
                                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full sm:w-auto px-10"
                                    data-cal-namespace="30min"
                                    data-cal-link="trainmatricx/30min"
                                    data-cal-config='{"layout":"month_view"}'
                                >
                                    Book a Call
                                </Button>
                                <button
                                    data-cal-namespace="30min"
                                    data-cal-link="trainmatricx/30min"
                                    data-cal-config='{"layout":"month_view"}'
                                    className="flex items-center justify-center gap-2 group text-white/60 hover:text-white transition-colors py-4 px-6 border border-white/5 hover:border-white/20 rounded-xl bg-white/5"
                                >
                                    <Calendar className="w-4 h-4" />
                                    Book Consultation
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Lead Form */}
                        <div className="p-12 md:p-16 bg-white/[0.02]">
                            <div className="max-w-md mx-auto">
                                <h3 className="text-xl font-bold text-white mb-8">Request a Quote</h3>

                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs text-white/40 uppercase tracking-widest ml-1 font-mono">First Name</label>
                                            <input
                                                type="text"
                                                placeholder="Lionel"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary transition-colors focus:bg-white/[0.08]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs text-white/40 uppercase tracking-widest ml-1 font-mono">Last Name</label>
                                            <input
                                                type="text"
                                                placeholder="Messi"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary transition-colors focus:bg-white/[0.08]"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs text-white/40 uppercase tracking-widest ml-1 font-mono">Work Email</label>
                                        <input
                                            type="email"
                                            placeholder="leo@intermiami.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary transition-colors focus:bg-white/[0.08]"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs text-white/40 uppercase tracking-widest ml-1 font-mono">Primary Sport</label>
                                        <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary transition-colors focus:bg-white/[0.08] appearance-none cursor-pointer">
                                            <option className="bg-[#050505]">Football (Soccer)</option>
                                            <option className="bg-[#050505]">Basketball</option>
                                            <option className="bg-[#050505]">Cricket</option>
                                            <option className="bg-[#050505]">Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs text-white/40 uppercase tracking-widest ml-1 font-mono">Project Scope</label>
                                        <textarea
                                            rows={3}
                                            placeholder="Tell us about your annotation needs..."
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary transition-colors focus:bg-white/[0.08] resize-none"
                                        />
                                    </div>

                                    <Button variant="primary" size="lg" className="w-full mt-4 flex items-center justify-center gap-2 group">
                                        Send Request <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Button>

                                    <p className="text-[10px] text-white/30 text-center mt-4">
                                        By submitting, you agree to our <span className="underline cursor-pointer hover:text-white/50">Privacy Policy</span> and <span className="underline cursor-pointer hover:text-white/50">Terms</span>.
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </section>
    );
}
