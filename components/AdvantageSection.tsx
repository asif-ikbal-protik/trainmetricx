"use client";

import { motion } from "framer-motion";
import GrowthChart from "./GrowthChart";

export default function AdvantageSection() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-4 md:p-8"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            The Train Matricx <span className="text-primary">Advantage</span>
                        </h3>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            See how partnering with us accelerates your AI timeline compared to building in-house teams.
                        </p>
                    </div>

                    <div className="relative w-full pt-16 pb-8 px-4 md:px-12 bg-black/40 rounded-2xl border border-white/5 overflow-hidden">
                        <GrowthChart />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
