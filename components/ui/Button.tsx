"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    className?: string;
    icon?: ReactNode;
}

export default function Button({
    variant = "primary",
    size = "md",
    children,
    className,
    icon,
    ...props
}: ButtonProps) {
    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(0,102,255,0.5)]",
        secondary: "bg-secondary text-black hover:bg-secondary/90 shadow-[0_0_20px_rgba(0,255,136,0.5)]",
        outline: "border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm",
        ghost: "text-white/70 hover:text-white hover:bg-white/5",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative rounded-full font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
            {icon && <span className="ml-1">{icon}</span>}
        </motion.button>
    );
}
