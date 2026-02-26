"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getCalApi } from "@calcom/embed-react";

const navLinks = [
    { name: "Sports Type", href: "/#sports" },
    { name: "Services", href: "/#services" },
    { name: "Workflow", href: "/#workflow" },
    { name: "Blog", href: "/blog" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-6"
            >
                {/* Floating Pill Bar */}
                <div
                    className={`mt-3 md:mt-4 w-full max-w-6xl transition-all duration-500 rounded-2xl border flex items-center justify-between px-4 md:px-6 ${isScrolled
                        ? "bg-black/70 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-2"
                        : "bg-white/5 backdrop-blur-xl border-white/[0.06] py-2.5"
                        }`}
                >
                    {/* Left: Navigation Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                            >
                                <Link
                                    href={link.href}
                                    className="text-[13px] font-medium text-white/50 hover:text-white transition-all duration-300 px-3.5 py-1.5 rounded-full hover:bg-white/[0.06]"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile: Hamburger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-1.5 text-white/70 hover:text-white transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>

                    {/* Center: Logo */}
                    <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image
                                src="/trainmatricx-logo.png"
                                alt="Train Matricx"
                                width={180}
                                height={48}
                                priority
                                className="h-10 md:h-11 w-auto object-contain"
                            />
                        </motion.div>
                    </Link>

                    {/* Right: CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <button
                            data-cal-namespace="30min"
                            data-cal-link="trainmatricx/30min"
                            data-cal-config='{"layout":"month_view"}'
                            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 text-white text-[12px] font-semibold uppercase tracking-wider hover:bg-white/20 hover:border-white/20 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                        >
                            Book a Call
                        </button>
                    </motion.div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {
                    isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 z-[60] bg-black md:hidden flex flex-col p-8"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <Link href="/" className="flex items-center">
                                    <Image
                                        src="/trainmatricx-logo.png"
                                        alt="Train Matricx"
                                        width={180}
                                        height={48}
                                        className="h-10 w-auto object-contain"
                                    />
                                </Link>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 text-white/70 hover:text-white"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-8">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-3xl font-bold text-white/60 hover:text-white transition-colors flex items-center justify-between group"
                                        >
                                            {link.name}
                                            <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-auto pt-12">
                                <button
                                    data-cal-namespace="30min"
                                    data-cal-link="trainmatricx/30min"
                                    data-cal-config='{"layout":"month_view"}'
                                    className="w-full px-6 py-4 rounded-full bg-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-all cursor-pointer"
                                >
                                    Book a Call
                                </button>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    );
}
