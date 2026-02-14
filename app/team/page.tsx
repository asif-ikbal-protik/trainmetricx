"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import { teamMembers } from "@/config/team";

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30">
            <Navbar />

            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* BACKGROUND ELEMENTS */}
                <div className="absolute inset-0 z-0 text-white">
                    <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent opacity-30" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150" />
                    {/* Glowing Orbs */}
                    <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* HEADER */}
                    <div className="mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-widest font-bold mb-6"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                            Human Intelligence x Neural Power
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
                        >
                            Meet the <span className="text-gradient">Architects</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg max-w-2xl leading-relaxed"
                        >
                            Our team isn't just made of engineers; we are sports enthusiasts, computer vision pioneers, and data purists dedicated to building the future of athletic intelligence.
                        </motion.p>
                    </div>

                    {/* TEAM GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <TeamCard member={member} />
                            </motion.div>
                        ))}
                    </div>

                    {/* JOIN THE ROSTER CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-32 p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-white/10 text-center relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Want to join the roster?</h2>
                        <p className="text-white/60 mb-8 max-w-xl mx-auto relative z-10 text-sm">
                            We're always looking for brilliant minds in Computer Vision, Sports Science, and Full-Stack Engineering.
                        </p>
                        <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-primary hover:text-white transition-all transform hover:scale-105 active:scale-95 relative z-10">
                            View Open Directives
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
