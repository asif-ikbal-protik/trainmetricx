"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
    hasPadding?: boolean;
}

export default function SectionWrapper({
    children,
    id,
    className = "",
    hasPadding = true,
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`${hasPadding ? "py-24" : ""} relative overflow-hidden ${className}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative z-10 ${hasPadding ? "container mx-auto px-4 md:px-6" : ""}`}
            >
                {children}
            </motion.div>
        </section>
    );
}
