"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Linkedin, Facebook, Copy, Check, Instagram } from "lucide-react";

interface ShareMenuProps {
    title: string;
    url?: string;
}

export default function ShareMenu({ title }: ShareMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Fallback URL if window is not available or props not provided
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    const shareLinks = [
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
            color: "hover:text-[#0077b5]"
        },
        {
            name: "Facebook",
            icon: Facebook,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
            color: "hover:text-[#1877f2]"
        }
    ];

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-xs font-bold uppercase tracking-widest group"
            >
                <Share2 className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                Share Insight
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full right-0 mb-4 w-48 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 z-50 shadow-2xl"
                    >
                        <div className="flex flex-col gap-1">
                            {shareLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group ${link.color}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <link.icon className="w-4 h-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 group-hover:text-white">
                                        {link.name}
                                    </span>
                                </a>
                            ))}

                            {/* Instagram Fallback: Just a notice or Link Copy */}
                            <div
                                onClick={handleCopy}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group cursor-pointer"
                            >
                                <Instagram className="w-4 h-4 group-hover:text-[#e4405f]" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 group-hover:text-white">
                                    Instagram (Copy)
                                </span>
                            </div>

                            <hr className="border-white/5 my-1" />

                            <button
                                onClick={handleCopy}
                                className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group"
                            >
                                <div className="flex items-center gap-3">
                                    {copied ? (
                                        <Check className="w-4 h-4 text-secondary" />
                                    ) : (
                                        <Copy className="w-4 h-4 text-white/40 group-hover:text-white" />
                                    )}
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 group-hover:text-white">
                                        {copied ? "Copied!" : "Copy Link"}
                                    </span>
                                </div>
                            </button>
                        </div>

                        {/* Scanline overlay for aesthetic consistency */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_2px] pointer-events-none opacity-20 rounded-2xl" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
