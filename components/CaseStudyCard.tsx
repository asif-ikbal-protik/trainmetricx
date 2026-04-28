"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CaseStudy } from "@/lib/case-studies";

export default function CaseStudyCard({ caseStudy, index }: { caseStudy: CaseStudy; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
            <Link href={`/case-studies/${caseStudy.slug}`} className="group block">
                <div className="relative bg-[#0E1428] border border-white/5 rounded-2xl overflow-hidden hover:border-[#3b82f6]/30 transition-all duration-500 shadow-2xl">
                    {/* Subtle Glow */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3b82f6]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                    <div className="p-10 md:p-14 flex flex-col md:flex-row gap-12 md:gap-20 relative z-10">
                        {/* Left Side: Content */}
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="text-[#60a5fa] font-bold text-xs uppercase tracking-widest mb-6">
                                Case Study
                            </div>
                            
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                {caseStudy.title}
                            </h3>
                            
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
                                {caseStudy.excerpt}
                            </p>
                            
                            <div className="flex items-center gap-2 text-[#60a5fa] font-semibold text-sm">
                                Read Full Story
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>

                        {/* Right Side: Stats */}
                        {caseStudy.stats && caseStudy.stats.length > 0 && (
                            <div className="md:w-72 flex flex-col justify-center shrink-0">
                                {caseStudy.stats.map((stat, i) => (
                                    <div key={i} className={`flex flex-col items-center md:items-end text-center md:text-right ${i !== caseStudy.stats!.length - 1 ? 'border-b border-white/10 mb-8 pb-8' : ''}`}>
                                        <div className="text-6xl md:text-7xl font-bold text-white mb-2 tracking-tighter flex items-center">
                                            {stat.value}
                                            {stat.suffix && <span className="text-[#3b82f6] ml-1">{stat.suffix}</span>}
                                        </div>
                                        <div className="text-slate-400 text-sm md:text-base font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

