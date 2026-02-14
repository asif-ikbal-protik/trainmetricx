"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TeamMember } from "@/config/team";

export default function TeamCard({ member }: { member: TeamMember }) {
    const Icon = member.icon;

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="relative group h-full"
        >
            {/* GLOWING BORDER EFFECT */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/50 via-transparent to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            <div className="relative h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden flex flex-col">
                {/* SCAN LINE EFFECT */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />

                {/* TOP SECTION: IMAGE AREA (Size Reduced) */}
                <div className="relative w-full h-60 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary/40 mb-4 group-hover:bg-primary/10 transition-all duration-500 overflow-hidden">
                    {/* Decorative Background Grid */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />

                    <div className="absolute inset-0 group/img">
                        <Image
                            src={member.imageUrl}
                            alt={member.name}
                            fill
                            className="object-cover grayscale brightness-75 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                        />
                        {/* Blue Overlay Tint */}
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
                        {/* Scanning Line Overlay for Image */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-transparent h-1/2 w-full animate-scan pointer-events-none z-10 opacity-50" />
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary/40 rounded-tl-sm z-20" />
                    <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary/40 rounded-tr-sm z-20" />
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-primary/40 rounded-bl-sm z-20" />
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary/40 rounded-br-sm z-20" />

                    {/* Status Indicator */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                        <span className="text-[8px] font-mono text-primary/80 uppercase tracking-tighter hidden group-hover:block px-1 bg-black/50 rounded">ACTIVE_FEED</span>
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,102,255,1)]" />
                    </div>

                    {/* ROLE BADGE (Shown "like this" as per user request) */}
                    <div className="absolute bottom-4 left-4 z-20">
                        <div className="px-3 py-1.5 rounded bg-primary/80 backdrop-blur-md border border-white/20 flex items-center gap-2 shadow-[0_0_15px_rgba(0,102,255,0.4)]">
                            <Icon className="w-3.5 h-3.5 text-white" />
                            <span className="text-[10px] font-bold text-white uppercase tracking-wider">{member.role}</span>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-tight leading-none mb-2">{member.name}</h3>

                    {/* INDUSTRY EXPERTISE - DIFFERENT WAY (Tag Cluster) */}
                    <div className="flex flex-wrap gap-1.5 min-h-[1.5rem]">
                        {member.industryExpertise.map((industry, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="text-[10px] font-mono font-bold px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-white/70 group-hover:text-primary group-hover:border-primary/40 transition-colors uppercase tracking-tight"
                            >
                                {industry}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* LEADERSHIP DATA BLOCK */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-primary/20 transition-colors">
                        <p className="text-[9px] text-white/40 uppercase tracking-widest mb-1">Projects Led</p>
                        <p className="text-lg font-bold text-white font-mono">{member.projectsLed}<span className="text-primary text-xs ml-0.5">+</span></p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-primary/20 transition-colors">
                        <p className="text-[9px] text-white/40 uppercase tracking-widest mb-1">Resources</p>
                        <p className="text-lg font-bold text-white font-mono">{member.resourcesMaintained}<span className="text-primary text-xs ml-0.5">k</span></p>
                    </div>
                </div>

                {/* SPECIALTY QUOTE */}
                <div className="mb-6 flex-grow">
                    <p className="text-white/50 text-[11px] leading-relaxed italic line-clamp-3">
                        "{member.specialty}"
                    </p>
                </div>

                {/* BOTTOM: DATA SIG */}
                <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                    <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-4 h-1 bg-primary/20 rounded-full" />
                        ))}
                    </div>
                    <span className="text-[8px] font-mono text-white/20 uppercase">SECURE_ID: {member.name.split(' ')[0]}_BETA_2.0</span>
                </div>
            </div>
        </motion.div>
    );
}
