"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
    Scan,
    Target,
    Activity,
    Database,
    Cpu,
    Layers,
    Maximize,
    AlertCircle
} from "lucide-react";

// Types
type DetectedObject = {
    id: number;
    label: string;
    confidence: number;
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    history: { x: number; y: number }[];
};

export default function CVAnalysisDashboard() {
    const [frame, setFrame] = useState(0);
    const [processing, setProcessing] = useState(true);
    const [objects, setObjects] = useState<DetectedObject[]>([
        {
            id: 1,
            label: "Striker (No. 9)",
            confidence: 0.98,
            x: 30,
            y: 40,
            width: 15,
            height: 25,
            color: "border-primary",
            history: []
        },
        {
            id: 2,
            label: "Defender (No. 4)",
            confidence: 0.95,
            x: 60,
            y: 35,
            width: 15,
            height: 25,
            color: "border-accent",
            history: []
        },
        {
            id: 3,
            label: "Ball",
            confidence: 0.99,
            x: 45,
            y: 60,
            width: 4,
            height: 4,
            color: "border-secondary",
            history: []
        }
    ]);

    // Simulate object movement and processing loop
    useEffect(() => {
        const interval = setInterval(() => {
            setFrame(prev => prev + 1);

            setObjects(prev => prev.map(obj => {
                // Simple physics simulation
                const moveX = (Math.random() - 0.5) * 2;
                const moveY = (Math.random() - 0.5) * 2;
                const newX = Math.max(10, Math.min(90, obj.x + moveX));
                const newY = Math.max(10, Math.min(90, obj.y + moveY));

                return {
                    ...obj,
                    x: newX,
                    y: newY,
                    confidence: Math.min(0.99, Math.max(0.85, obj.confidence + (Math.random() - 0.5) * 0.05)),
                    // Keep track of movement trail (last 5 positions)
                    history: [...obj.history, { x: obj.x, y: obj.y }].slice(-10)
                };
            }));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[600px] lg:h-full min-h-[500px] bg-black/80 rounded-xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm group">

            {/* Background Grid / Texture */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,102,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

            {/* Video Feed Simulation (Placeholder Gradient for now) */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80" />

            {/* Main Analysis Viewport */}
            <div className="absolute inset-4 lg:inset-8 border border-white/5 bg-black/20 rounded-lg overflow-hidden relative">

                {/* Scanning Line */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-secondary shadow-[0_0_15px_#00FF88] z-20 opacity-50"
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                {/* Object Tracking Overlays */}
                {objects.map(obj => (
                    <div key={obj.id} className="absolute z-10" style={{ left: `${obj.x}%`, top: `${obj.y}%` }}>
                        {/* Movement Trail */}
                        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] overflow-visible pointer-events-none opacity-40">
                            <polyline
                                points={obj.history.map(p => `${(p.x - obj.x) * 5 + 100},${(p.y - obj.y) * 5 + 100}`).join(" ")}
                                fill="none"
                                stroke={obj.color === "border-primary" ? "#0066FF" : obj.color === "border-secondary" ? "#00FF88" : "#9945FF"}
                                strokeWidth="2"
                                strokeDasharray="4 4"
                            />
                        </svg>

                        {/* Bounding Box Container */}
                        <motion.div
                            className={`relative -translate-x-1/2 -translate-y-1/2 border-2 ${obj.color} box-shadow-lg`}
                            style={{ width: `${obj.width * 4}px`, height: `${obj.height * 4}px` }}
                            layoutId={`box-${obj.id}`}
                        >
                            {/* Corner Brackets */}
                            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white" />
                            <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-white" />
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-white" />
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white" />

                            {/* Label Tag */}
                            <motion.div
                                className="absolute -top-7 left-0 bg-black/70 text-[10px] text-white px-2 py-1 flex items-center gap-2 whitespace-nowrap backdrop-blur-md border border-white/10 rounded-t-sm"
                            >
                                <div className={`w-1.5 h-1.5 rounded-full ${obj.color.replace('border-', 'bg-')}`} />
                                <span className="font-mono font-bold uppercase">{obj.label}</span>
                                <span className="text-gray-400">{(obj.confidence * 100).toFixed(1)}%</span>
                            </motion.div>

                            {/* Center Point */}
                            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
                        </motion.div>
                    </div>
                ))}

                {/* Skeleton/Pose Estimation Overlay (Static Simulation) */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    {/* Can add SVGs here for pose lines connecting objects if needed */}
                </div>
            </div>

            {/* UI Overlay - Dashboard Stats */}
            <div className="absolute top-8 right-8 w-64 space-y-4 hidden lg:block">

                {/* System Status Card */}
                <motion.div
                    className="glass-card p-4 rounded-lg border-l-4 border-secondary"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                            <Activity className="w-3 h-3 text-secondary" /> System Status
                        </h3>
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                        </span>
                    </div>
                    <div className="text-sm font-mono text-white">
                        <div className="flex justify-between py-1 border-b border-white/5">
                            <span>FPS</span>
                            <span className="text-secondary">60.02</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                            <span>Latency</span>
                            <span className="text-secondary">12ms</span>
                        </div>
                        <div className="flex justify-between py-1">
                            <span>GPU Load</span>
                            <span className="text-yellow-400">42%</span>
                        </div>
                    </div>
                </motion.div>

                {/* Active Model Card */}
                <motion.div
                    className="glass-card p-4 rounded-lg border-l-4 border-primary"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Cpu className="w-3 h-3 text-primary" /> Active Model
                    </h3>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-white">
                            <span>YOLOv8-Pose</span>
                            <span className="px-1.5 py-0.5 bg-primary/20 text-primary rounded">v2.4.1</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                            <motion.div
                                className="h-full bg-primary"
                                animate={{ width: ["92%", "98%", "95%"] }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            />
                        </div>
                        <p className="text-[10px] text-gray-500 mt-1">
                            Processing batch_size=32 | FP16 Inference
                        </p>
                    </div>
                </motion.div>

                {/* Dataset Output */}
                <motion.div
                    className="glass-card p-4 rounded-lg border-l-4 border-accent"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Database className="w-3 h-3 text-accent" /> Data Output
                    </h3>
                    <div className="flex gap-2">
                        {['JSON', 'COCO', 'CSV'].map(fmt => (
                            <span key={fmt} className="text-[10px] uppercase font-bold px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300">
                                {fmt}
                            </span>
                        ))}
                    </div>
                    <div className="font-mono text-[10px] text-gray-500 mt-3 p-2 bg-black/40 rounded border border-white/5">
                        {`{"id": 412, "cls": "player", "conf": 0.98}`}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                        >_</motion.span>
                    </div>
                </motion.div>

            </div>

            {/* Bottom Control Bar */}
            <div className="absolute bottom-4 left-8 right-8 h-12 glass-card rounded-md flex items-center px-4 gap-4 hidden lg:flex">
                <div className="flex gap-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500" />
                </div>
                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden relative group cursor-pointer">
                    <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                    <motion.div
                        className="h-full bg-secondary w-1/3 relative"
                        animate={{ width: "100%" }}
                        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                    >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg" />
                    </motion.div>
                </div>
                <div className="text-xs font-mono text-gray-400 w-20 text-right">
                    00:00:{frame % 60 < 10 ? `0${frame % 60}` : frame % 60}
                </div>
                <Maximize className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            </div>

        </div>
    );
}
