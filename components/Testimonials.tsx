"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Dark Horse AI",
        logo: "/dh-logo.svg",
        role: "Strategic Partner",
        quote: "Train Matricx has fundamentally changed how we approach skeletal tracking. Their precision is unmatched in the industry, allowing our models to achieve state-of-the-art performance in record time.",
        featured: true,
        badge: "US CLIENT"
    },
    {
        name: "Velocity Sports Labs",
        logo: null,
        role: "R&D Director",
        quote: "The temporal consistency in their event logging is what sets them apart. We finally have datasets that capture the true rhythm of the game without jitter or drift.",
        featured: false
    },
    {
        name: "Apex Football",
        logo: null,
        role: "Head of Data Science",
        quote: "Scaling our annotation needs was a massive bottleneck until we partnered with Train Matricx. Their human-in-the-loop system is the gold standard for high-accuracy training data.",
        featured: false
    },
    {
        name: "Quantum Scouting",
        logo: null,
        role: "Technical Lead",
        quote: "The domain expertise of their annotators is evident. They understand tactical intent, which means we get insights that generic services simply can't provide.",
        featured: false
    },
    {
        name: "Precision Pitch",
        logo: null,
        role: "Product Manager",
        quote: "Working with Train Matricx is seamless. Their custom JSON exports integrated into our existing pipeline with zero friction. Truly developer-first data services.",
        featured: false
    },
    {
        name: "Elite Motion AI",
        logo: null,
        role: "CEO",
        quote: "For high-stakes sports analytics, data integrity is everything. Train Matricx delivers 99.8% precision consistently, enabling us to trust our model's outputs implicitly.",
        featured: false
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Trusted by the <span className="text-primary">Innovators</span>
                    </motion.h2>
                    <p className="text-white/60 text-lg">
                        Hear from the teams building the future of sports technology with our high-precision data.
                    </p>
                </div>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className={`p-8 rounded-3xl border transition-all duration-300 group flex flex-col justify-between h-full ${t.featured
                                ? "bg-white/10 border-primary/50 shadow-[0_0_30px_rgba(0,102,255,0.1)] col-span-1 md:col-span-2 lg:col-span-1"
                                : "bg-white/5 border-white/5 hover:border-white/20"
                                }`}
                        >
                            {/* Optional Badge */}
                            {t.badge && (
                                <div className="absolute top-0 right-8 bg-gradient-to-r from-[#00ffd5] to-[#00b8ff] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-b-xl shadow-[0_4px_15px_rgba(0,255,213,0.3)] border-x border-b border-[#00ffd5]/20 z-10">
                                    {t.badge}
                                </div>
                            )}
                            <div className="relative pt-2">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="relative">
                                        {t.logo ? (
                                            <div className="h-10 w-32 relative">
                                                <Image
                                                    src={t.logo}
                                                    alt={t.name}
                                                    fill
                                                    className="object-contain object-left filter brightness-110"
                                                />
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/40 font-bold border border-white/10 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                                    {t.name[0]}
                                                </div>
                                                <span className="text-white font-bold group-hover:text-primary transition-colors">{t.name}</span>
                                            </div>
                                        )}
                                    </div>
                                    <Quote className="w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                                </div>

                                <p className="text-white/70 leading-relaxed mb-8 italic">
                                    "{t.quote}"
                                </p>
                            </div>

                            <div className="mt-auto border-t border-white/5 pt-6">
                                <div className="text-white font-bold text-sm uppercase tracking-widest">{t.name}</div>
                                <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-1">{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
