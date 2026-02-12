"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Types for our players/entities
type Player = {
    id: number;
    x: number;
    y: number;
    team: "home" | "away";
    action?: string;
};

export default function HolographicPitch() {
    const [players, setPlayers] = useState<Player[]>([
        { id: 1, x: 20, y: 30, team: "home", action: "Sprinting" },
        { id: 2, x: 40, y: 50, team: "away", action: "Tracking" },
        { id: 3, x: 70, y: 40, team: "home", action: "Scanning" },
        { id: 4, x: 60, y: 70, team: "away", action: "Pressing" },
        { id: 5, x: 45, y: 45, team: "ball", action: "Velocity: 12m/s" } as any,
    ]);

    // Simulate movement
    useEffect(() => {
        const interval = setInterval(() => {
            setPlayers((prev) =>
                prev.map((p) => ({
                    ...p,
                    x: Math.max(10, Math.min(90, p.x + (Math.random() - 0.5) * 5)),
                    y: Math.max(10, Math.min(90, p.y + (Math.random() - 0.5) * 5)),
                }))
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full min-h-[400px] perspective-1000 overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,136,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(20deg)_scale(1.2)] origin-bottom" />

            {/* Central Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-secondary/30 rounded-full [transform:rotateX(20deg)] opacity-40" />
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-secondary/30 [transform:rotateX(20deg)]" />

            {/* Players & Bounding Boxes */}
            {players.map((player) => (
                <motion.div
                    key={player.id}
                    className="absolute"
                    initial={false}
                    animate={{ left: `${player.x}%`, top: `${player.y}%` }}
                    transition={{ duration: 1, ease: "linear" }}
                >
                    {/* Bounding Box */}
                    <div
                        className={`
              relative -translate-x-1/2 -translate-y-1/2
              w-12 h-16 border-2 
              ${player.team === "home" ? "border-primary" : player.team === "away" ? "border-accent" : "border-secondary"}
              box-shadow-[0_0_15px_rgba(0,102,255,0.3)]
            `}
                    >
                        {/* Corner Markers */}
                        <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white opacity-50" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-white opacity-50" />
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-white opacity-50" />
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white opacity-50" />

                        {/* Label (Action) */}
                        {player.action && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: -25 }}
                                className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-[10px] px-2 py-1 rounded text-white border border-white/20 flex items-center gap-1"
                            >
                                <div className={`w-1.5 h-1.5 rounded-full ${player.team === 'home' ? 'bg-primary' : player.team === 'away' ? 'bg-accent' : 'bg-secondary'}`} />
                                {player.action}
                            </motion.div>
                        )}

                        {/* Player Dot */}
                        <div className={`
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full 
              ${player.team === 'home' ? 'bg-primary' : player.team === 'away' ? 'bg-accent' : 'bg-secondary'}
              shadow-[0_0_10px_currentColor]
            `} />
                    </div>
                </motion.div>
            ))}

            {/* Scanning Line Effect */}
            <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
}
