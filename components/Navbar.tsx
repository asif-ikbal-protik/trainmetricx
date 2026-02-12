"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image";
import { getCalApi } from "@calcom/embed-react";

const navLinks = [
    { name: "Sports", href: "#sports" },
    { name: "Solutions", href: "#solutions" },
    { name: "Services", href: "#services" },
    { name: "Workflow", href: "#workflow" },
    { name: "Accuracy", href: "#accuracy" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
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
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "py-3 px-4 md:px-8"
                    : "py-5 px-6 md:px-12"
                    }`}
            >
                <div className={`mx-auto max-w-6xl transition-all duration-500 rounded-2xl border relative overflow-hidden group/nav ${isScrolled
                    ? "bg-black/40 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,102,255,0.15)]"
                    : "bg-white/5 backdrop-blur-md border-white/5"
                    }`}>
                    {/* Subtle reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover/nav:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                    <div className="flex items-center justify-between px-6 py-1.5">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group">
                            <div className="relative transition-all duration-500 group-hover:scale-105">
                                <Image
                                    src="/trainmatricx-logo.png"
                                    alt="Train Matricx"
                                    width={200}
                                    height={54}
                                    priority
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-xs font-semibold text-white/50 hover:text-white transition-all duration-300 relative group/link py-1"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full blur-[2px] transition-all duration-300 group-hover/link:w-2 group-hover/link:opacity-100 opacity-0" />
                                </Link>
                            ))}
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-3">
                            <Button
                                variant="primary"
                                size="sm"
                                data-cal-namespace="30min"
                                data-cal-link="trainmatricx/30min"
                                data-cal-config='{"layout":"month_view"}'
                                className="hidden sm:flex h-8 px-4 text-[10px] uppercase tracking-wider font-bold"
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
                        </div>
                    </div>
                </div>
            </motion.nav>



            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
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
                )}
            </AnimatePresence>
        </>
    );
}
