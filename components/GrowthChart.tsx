"use client";

import { motion } from "framer-motion";

export default function GrowthChart() {
    // Top Curve (With Train Matricx) Points mapped to 1000x600 SVG viewBox
    const topPoints = [
        { x: 185, y: 288, label: "Rapid\nonboarding", delay: 0.2 },
        { x: 327, y: 230, label: "Dedicated team\nwith domain knowledge", delay: 0.6 },
        { x: 514, y: 156, label: "Consistent\nhigh-quality data", delay: 1.0 },
        { x: 731, y: 112, label: "Active\ncollaboration", delay: 1.4 },
        { x: 950, y: 100, label: "Reliable\noutcomes", delay: 1.8 },
    ];

    // Bottom Curve (Without Train Matricx) Points mapped to 1000x600 SVG viewBox
    const bottomPoints = [
        { x: 185, y: 312, label: "Slow\nonboarding", delay: 0.2 },
        { x: 327, y: 370, label: "Generic\nannotators", delay: 0.6 },
        { x: 514, y: 444, label: "Quality &\nconsistency issues", delay: 1.0 },
        { x: 731, y: 488, label: "Limited\ncommunication & support", delay: 1.4 },
        { x: 950, y: 500, label: "Project\ndelays", delay: 1.8 },
    ];

    return (
        <div className="w-full h-full min-h-[500px] md:min-h-[600px] relative font-sans select-none my-12">

            {/* Dark Cybernetic Canvas */}
            <div className="absolute inset-0 bg-[#050505] overflow-hidden rounded-3xl border border-white/5">
                {/* Horizontal grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between opacity-5">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-full h-px bg-white" />
                    ))}
                </div>
            </div>

            {/* --- Scalable SVG Layer --- */}
            <svg
                className="w-full h-full absolute inset-0 overflow-visible z-10"
                preserveAspectRatio="none"
                viewBox="0 0 1000 600"
            >
                <defs>
                    <linearGradient id="topBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(6,182,212,0)" />
                        <stop offset="20%" stopColor="rgba(6,182,212,0.8)" />
                        <stop offset="100%" stopColor="rgba(6,182,212,1)" />
                    </linearGradient>

                    <linearGradient id="bottomBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(220,38,38,0)" />
                        <stop offset="20%" stopColor="rgba(220,38,38,0.4)" />
                        <stop offset="100%" stopColor="rgba(220,38,38,0.8)" />
                    </linearGradient>
                </defs>

                {/* --- Top Track (Train Matricx) --- */}

                {/* Faint base grid track */}
                <path
                    d="M 0,300 L 100,300 C 300,300 400,100 950,100"
                    fill="none"
                    stroke="rgba(6,182,212,0.1)"
                    strokeWidth="8"
                    strokeLinecap="round"
                />

                {/* Animated Neon Beam */}
                <motion.path
                    d="M 0,300 L 100,300 C 300,300 400,100 950,100"
                    fill="none"
                    stroke="url(#topBeam)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{ filter: "drop-shadow(0 0 12px rgba(6,182,212,0.9))" }}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                />

                {/* Glowing Nodes - Top */}
                {topPoints.map((point, i) => (
                    <g key={`top-svg-${i}`}>
                        <motion.circle
                            cx={point.x}
                            cy={point.y}
                            r="8"
                            fill="#06b6d4" // cyan-500
                            style={{ filter: "drop-shadow(0 0 16px rgba(6,182,212,1))" }}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + point.delay, type: "spring", stiffness: 200 }}
                        />
                        <motion.circle
                            cx={point.x}
                            cy={point.y}
                            r="3"
                            fill="#ffffff"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + point.delay + 0.2 }}
                        />
                    </g>
                ))}

                {/* --- Bottom Track (Without) --- */}

                {/* Faint base grid track */}
                <path
                    d="M 0,300 L 100,300 C 300,300 400,500 950,500"
                    fill="none"
                    stroke="rgba(220,38,38,0.05)"
                    strokeWidth="8"
                    strokeLinecap="round"
                />

                {/* Animated Glitch Beam */}
                <motion.path
                    d="M 0,300 L 100,300 C 300,300 400,500 950,500"
                    fill="none"
                    stroke="url(#bottomBeam)"
                    strokeWidth="2"
                    strokeDasharray="16 12 4 8"  // Erratic glitchy look
                    strokeLinecap="round"
                    style={{ filter: "drop-shadow(0 0 8px rgba(220,38,38,0.6))" }}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3.5, ease: "easeOut" }} // Slower, struggles to progress
                />

                {/* Faded Nodes - Bottom */}
                {bottomPoints.map((point, i) => (
                    <g key={`bottom-svg-${i}`}>
                        <motion.circle
                            cx={point.x}
                            cy={point.y}
                            r="6"
                            fill="#7f1d1d" // red-900
                            stroke="#ef4444" // red-500
                            strokeWidth="1.5"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 0.7 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + point.delay, type: "spring", stiffness: 100 }}
                        />
                    </g>
                ))}
            </svg>

            {/* --- HTML Overlay for Crisp Text & Glassmorphism --- */}

            <div className="absolute inset-0 z-20 pointer-events-none">

                {/* Title Labels (Left Axis) */}
                <div className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 flex flex-col justify-between h-[120px] text-sm md:text-base font-bold">
                    <motion.div
                        className="text-cyan-400 absolute bottom-full mb-8 flex items-center gap-3 whitespace-nowrap"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_15px_rgba(6,182,212,1)]" />
                        <div>Partnered with<br /><span className="text-white text-lg">Train Matricx</span></div>
                    </motion.div>

                    <motion.div
                        className="text-red-500/60 absolute top-full mt-8 flex flex-col gap-1 whitespace-nowrap"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Without<br /><span className="text-white/40">Train Matricx</span>
                    </motion.div>
                </div>

                {/* Top Labels (Train Matricx) */}
                {topPoints.map((point, i) => (
                    <motion.div
                        key={`label-top-${i}`}
                        className="absolute -translate-x-1/2 -translate-y-full pb-8 md:pb-10"
                        style={{ left: `${(point.x / 1000) * 100}%`, top: `${(point.y / 600) * 100}%` }}
                        initial={{ opacity: 0, y: 15, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + point.delay, type: "spring" }}
                    >
                        {/* Holographic Drop-Shadow Card */}
                        <div className="bg-cyan-950/50 border border-cyan-400/40 backdrop-blur-md px-3 py-2 md:px-4 md:py-2.5 rounded-xl shadow-[0_8px_30px_rgba(6,182,212,0.25)] text-cyan-50 text-[10px] md:text-sm font-semibold text-center whitespace-pre-line leading-tight">
                            {point.label}
                        </div>
                    </motion.div>
                ))}

                {/* Bottom Labels (Without) */}
                {bottomPoints.map((point, i) => (
                    <motion.div
                        key={`label-bottom-${i}`}
                        className="absolute -translate-x-1/2 pt-6 md:pt-8"
                        style={{ left: `${(point.x / 1000) * 100}%`, top: `${(point.y / 600) * 100}%` }}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 0.8, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + point.delay }}
                    >
                        {/* Faded Glitch Card */}
                        <div className="bg-red-950/20 border border-red-900/60 backdrop-blur-sm px-2 py-1.5 md:px-3 md:py-2 rounded-lg text-red-300 text-[9px] md:text-xs text-center whitespace-pre-line leading-tight border-dashed">
                            {point.label}
                        </div>
                    </motion.div>
                ))}

                {/* Bottom Left Team Indicators */}
                <div className="absolute left-2 md:left-6 bottom-4 md:bottom-6 flex flex-col md:flex-row gap-4 md:gap-8 pointer-events-auto">
                    <motion.div
                        className="flex items-center gap-2 text-white/80 text-xs md:text-sm font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                        Dedicated Project Manager
                    </motion.div>
                    <motion.div
                        className="flex items-center gap-2 text-white/80 text-xs md:text-sm font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                        Dedicated QA Team
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
