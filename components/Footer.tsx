import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
    services: [
        { name: "Video Annotation", href: "#" },
        { name: "Event Logging", href: "#" },
        { name: "Dataset Management", href: "#" },
        { name: "QA & Verification", href: "#" }
    ],
    company: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Blog", href: "#" }
    ],
    support: [
        { name: "Contact", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" }
    ]
};

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
            {/* Subtle Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">

                    {/* Logo and About */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <Image
                                src="/trainmatricx-logo.png"
                                alt="Train Matricx"
                                width={320}
                                height={80}
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-sm">
                            High-precision training data for the modern athlete analytics. We transform raw match footage into structured intelligence for elite CV and Sports AI.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Twitter className="w-4 h-4" />, href: "#" },
                                { icon: <Linkedin className="w-4 h-4" />, href: "#" },
                                { icon: <Github className="w-4 h-4" />, href: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Services</h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="text-white/40 hover:text-primary transition-colors text-sm flex items-center gap-1 group">
                                        {link.name}
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="text-white/40 hover:text-primary transition-colors text-sm flex items-center gap-1 group">
                                        {link.name}
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal & Support</h4>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="text-white/40 hover:text-primary transition-colors text-sm flex items-center gap-1 group">
                                        {link.name}
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-white/40">
                                <MapPin className="w-4 h-4 text-primary shrink-0" />
                                <span>Global Distributed Workforce <br /> HQ: London, UK</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-white/40">
                                <Mail className="w-4 h-4 text-primary shrink-0" />
                                <span>hello@trainmatricx.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/20 text-[10px] uppercase tracking-widest">
                        © 2024 Train Matricx. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">System Status: Operational</span>
                        </div>
                        <div className="w-px h-4 bg-white/5" />
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Precision: 99.8%</span>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
