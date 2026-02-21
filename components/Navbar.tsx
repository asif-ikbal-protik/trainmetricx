"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image";
import { getCalApi } from "@calcom/embed-react";

const navLinks = [
    { name: "Sports Type", href: "#sports" },
    { name: "Services", href: "#services" },
    { name: "Workflow", href: "#workflow" },
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
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
                    ? "bg-black/80 backdrop-blur-xl py-3 border-white/10 shadow-lg"
                    : "bg-transparent py-5 border-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative"
                        >
                            <Image
                                src="/trainmatricx-logo.png"
                                alt="Train Matricx"
                                width={210}
                                height={56}
                                priority
                                className="h-11 w-auto object-contain"
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className="text-sm font-semibold text-white/50 hover:text-white transition-all duration-300 relative group/link py-1 flex items-center gap-1"
                                >
                                    {link.name}
                                    <motion.span
                                        className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary blur-[1px]"
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary opacity-0 group-hover/link:w-full group-hover/link:opacity-100 transition-all duration-300 shadow-[0_0_8px_rgba(0,102,255,0.8)]" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex items-center gap-4"
                    >
                        <Button
                            variant="primary"
                            size="md"
                            data-cal-namespace="30min"
                            data-cal-link="trainmatricx/30min"
                            data-cal-config='{"layout":"month_view"}'
                            className="hidden sm:flex px-6 text-[11px] uppercase tracking-wider font-bold hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all"
                        >
                            Book a Call
                        </Button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-1.5 text-white/70 hover:text-white transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    data-cal-namespace="30min"
                                    data-cal-link="trainmatricx/30min"
                                    data-cal-config='{"layout":"month_view"}'
                                >
                                    Book a Call
                                </Button>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </>
    );
}
