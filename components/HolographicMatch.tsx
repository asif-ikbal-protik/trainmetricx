"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Types for players and ball
type Entity = {
    id: string;
    type: 'home' | 'away' | 'ball';
    x: number; // Percentage 0-100
    y: number; // Percentage 0-100
    vx: number; // Velocity X
    vy: number; // Velocity Y
};

export default function HolographicMatch() {
    const [entities, setEntities] = useState<Entity[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Initialize match state
    useEffect(() => {
        const initialEntities: Entity[] = [
            // Ball
            { id: 'ball', type: 'ball', x: 50, y: 50, vx: 0.8, vy: 0.4 },

            // Home Team (Blue)
            ...Array.from({ length: 5 }).map((_, i) => ({
                id: `home-${i}`,
                type: 'home' as const,
                x: 20 + Math.random() * 30,
                y: 20 + Math.random() * 60,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            })),

            // Away Team (Green/Red)
            ...Array.from({ length: 5 }).map((_, i) => ({
                id: `away-${i}`,
                type: 'away' as const,
                x: 50 + Math.random() * 30,
                y: 20 + Math.random() * 60,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            }))
        ];
        setEntities(initialEntities);
    }, []);

    // Game Loop
    useEffect(() => {
        const interval = setInterval(() => {
            setEntities(prev => prev.map(entity => {
                let { x, y, vx, vy } = entity;

                // Update position
                x += vx;
                y += vy;

                // specific logic for ball (bounces more, chases players)
                if (entity.type === 'ball') {
                    // Simple bounce off walls
                    if (x <= 5 || x >= 95) vx *= -1;
                    if (y <= 5 || y >= 95) vy *= -1;
                } else {
                    // Players change direction randomly
                    if (Math.random() < 0.05) {
                        vx = (Math.random() - 0.5) * 0.8;
                        vy = (Math.random() - 0.5) * 0.8;
                    }
                    // Keep players within bounds
                    if (x < 5) vx = Math.abs(vx);
                    if (x > 95) vx = -Math.abs(vx);
                    if (y < 5) vy = Math.abs(vy);
                    if (y > 95) vy = -Math.abs(vy);
                }

                return { ...entity, x, y, vx, vy };
            }));
        }, 50); // 20 FPS simulation

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full relative flex items-center justify-center overflow-hidden perspective-[1000px]">

            {/* 3D Tilted Pitch Container */}
            <motion.div
                initial={{ rotateX: 45, rotateZ: 0, opacity: 0, scale: 0.8 }}
                animate={{ rotateX: 60, rotateZ: -15, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-[300px] sm:w-[500px] lg:w-[600px] aspect-[1.6/1] group"
            >



                {/* Pitch Markings (SVG Overlay) */}
                <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    {/* Outer Border */}
                    <rect x="2%" y="2%" width="96%" height="96%" fill="none" stroke="#0066FF" strokeWidth="1" />

                    {/* Halfway Line */}
                    <line x1="50%" y1="2%" x2="50%" y2="98%" stroke="#0066FF" strokeWidth="1" />

                    {/* Center Circle */}
                    <circle cx="50%" cy="50%" r="10%" fill="none" stroke="#0066FF" strokeWidth="1" />
                    <circle cx="50%" cy="50%" r="0.5%" fill="#0066FF" />

                    {/* Penalty Areas */}
                    <rect x="2%" y="25%" width="15%" height="50%" fill="none" stroke="#0066FF" strokeWidth="1" />
                    <rect x="83%" y="25%" width="15%" height="50%" fill="none" stroke="#0066FF" strokeWidth="1" />

                    {/* Goal Areas */}
                    <rect x="2%" y="38%" width="5%" height="24%" fill="none" stroke="#0066FF" strokeWidth="1" />
                    <rect x="93%" y="38%" width="5%" height="24%" fill="none" stroke="#0066FF" strokeWidth="1" />
                </svg>

                {/* Moving Entities */}
                {entities.map(entity => (
                    <motion.div
                        key={entity.id}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{
                            left: `${entity.x}%`,
                            top: `${entity.y}%`,
                            z: 10
                        }}
                    >
                        {/* Player/Ball Visual */}
                        <div className={`
              relative rounded-full shadow-[0_0_10px_currentColor]
              ${entity.type === 'ball' ? 'w-2 h-2 bg-yellow-400 text-yellow-400 shadow-yellow-400' : ''}
              ${entity.type === 'home' ? 'w-3 h-3 bg-blue-500 text-blue-500 shadow-blue-500' : ''}
              ${entity.type === 'away' ? 'w-3 h-3 bg-red-500 text-red-500 shadow-red-500' : ''}
            `}>
                            {/* Vertical projection line to "ground" */}
                            <div className="absolute top-1/2 left-1/2 w-[1px] h-[20px] bg-gradient-to-b from-current to-transparent opacity-50 -translate-x-1/2 origin-top transform rotate-x-[-90deg]" />

                            {/* Ring ripple effect for players */}
                            {entity.type !== 'ball' && (
                                <div className="absolute inset-0 rounded-full border border-current opacity-0 animate-ping" />
                            )}
                        </div>

                        {/* Label (Only visible on hover or randomly) */}
                        {/* {entity.type !== 'ball' && Math.random() > 0.8 && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] text-white/80 whitespace-nowrap bg-black/50 px-1 rounded">
                ID: {entity.id.split('-')[1]}
              </div>
            )} */}
                    </motion.div>
                ))}

                {/* Holographic Scan Line */}
                <motion.div
                    className="absolute top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-30 shadow-[0_0_15px_cyan]"
                    animate={{ left: ["0%", "100%", "0%"] }}
                    transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                />

            </motion.div>

            {/* Floating Elements / Particles around the pitch */}
            <div className="absolute inset-0 pointer-events-none">
                {mounted && [...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/40 rounded-full"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: 0
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>

        </div>
    );
}
