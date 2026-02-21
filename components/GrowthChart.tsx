"use client";

import { motion } from "framer-motion";

export default function GrowthChart() {
    // Top Curve (With Train Metrics) Points
    const topPoints = [
        { cx: "20%", cy: "50%", label: "Rapid\nonboarding", delay: 0 },
        { cx: "40%", cy: "50%", label: "Dedicated team\nwith domain knowledge", delay: 0.5 },
        { cx: "60%", cy: "40%", label: "Consistent\nhigh-quality data", delay: 1.0 },
        { cx: "80%", cy: "25%", label: "Active\ncollaboration", delay: 1.5 },
        { cx: "95%", cy: "10%", label: "Reliable\noutcomes", delay: 2.0 },
    ];

    // Bottom Curve (Without Train Metrics) Points
    const bottomPoints = [
        { cx: "20%", cy: "60%", label: "Slow\nonboarding", delay: 0 },
        { cx: "40%", cy: "70%", label: "Generic\nannotators", delay: 0.5 },
        { cx: "60%", cy: "80%", label: "Quality &\nconsistency issues", delay: 1.0 },
        { cx: "80%", cy: "90%", label: "Limited\ncommunication & support", delay: 1.5 },
        { cx: "95%", cy: "100%", label: "Project\ndelays", delay: 2.0 },
    ];

    return (
        <div className="w-full h-full min-h-[400px] md:min-h-[500px] relative font-sans">
            <svg
                className="w-full h-full absolute inset-0 overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 1000 500"
            >
                {/* Center Baseline */}
                <motion.line
                    x1="100" y1="250" x2="950" y2="250"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                    strokeDasharray="10 10"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />

                {/* --- Top Curve (With Train Metrics) --- */}

                {/* Top Path */}
                <motion.path
                    d="M 100,250 L 400,250 Q 700,250 950,50"
                    fill="none"
                    stroke="#0066FF" // blue-600
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Top Nodes & Labels */}
                {topPoints.map((point, i) => (
                    <g key={`top-${i}`}>
                        <motion.circle
                            cx={point.cx}
                            cy={point.cy}
                            r="6"
                            fill="#0066FF"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 + point.delay, type: "spring" }}
                        />
                        {/* Connecting Line to baseline (optional, visual flair) */}
                        {i > 1 && (
                            <motion.line
                                x1={point.cx} y1={point.cy} x2={point.cx} y2="250"
                                stroke="#0066FF" strokeWidth="1" strokeOpacity="0.3"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1 + point.delay }}
                            />
                        )}
                    </g>
                ))}

                {/* --- Bottom Curve (Without Train Metrics) --- */}

                {/* Bottom Path */}
                <motion.path
                    d="M 100,250 L 300,250 Q 600,250 950,450"
                    fill="none"
                    stroke="#334155" // slate-700
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Bottom Nodes & Labels */}
                {bottomPoints.map((point, i) => (
                    <g key={`bottom-${i}`}>
                        <motion.circle
                            cx={point.cx}
                            cy={point.cy}
                            r="4"
                            fill="#475569" // slate-600
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 + point.delay, type: "spring" }}
                        />
                        {/* Connecting Line to baseline */}
                        {i > 0 && (
                            <motion.line
                                x1={point.cx} y1={point.cy} x2={point.cx} y2="250"
                                stroke="#334155" strokeWidth="1" strokeOpacity="0.3"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1 + point.delay }}
                            />
                        )}
                    </g>
                ))}
            </svg>

            {/* HTML Labels (Absolute positioning for better text rendering than SVG text) */}

            {/* Top Labels */}
            {topPoints.map((point, i) => (
                <motion.div
                    key={`label-top-${i}`}
                    className="absolute text-blue-400 text-xs md:text-sm text-center -translate-x-1/2 -translate-y-[150%] font-medium whitespace-pre-line leading-tight"
                    style={{ left: point.cx, top: point.cy }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 + point.delay }}
                >
                    {point.label}
                </motion.div>
            ))}

            {/* Bottom Labels */}
            {bottomPoints.map((point, i) => (
                <motion.div
                    key={`label-bottom-${i}`}
                    className="absolute text-slate-500 text-[10px] md:text-xs text-center -translate-x-1/2 translate-y-[50%] font-medium whitespace-pre-line leading-tight"
                    style={{ left: point.cx, top: point.cy }}
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 + point.delay }}
                >
                    {point.label}
                </motion.div>
            ))}

            {/* Y-Axis Labels (Left side) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col justify-between h-[300px] text-sm md:text-base font-bold">
                <motion.div
                    className="text-blue-500 mb-auto mt-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Partnered with<br />Train Metrics
                </motion.div>

                <motion.div
                    className="text-slate-500 mt-auto mb-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Without<br />Train Metrics
                </motion.div>
            </div>
        </div>
    );
}
