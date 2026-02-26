"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog";

export default function BlogCard({ post, index }: { post: BlogPost; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="group relative"
        >
            <Link href={`/blog/${post.slug}`}>
                <div className="relative h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col">
                    {/* Image Area */}
                    <div className="relative h-48 w-full overflow-hidden">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-sm bg-primary/80 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider border border-white/20">
                                {post.category}
                            </span>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest mb-3">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                <span>{post.author}</span>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                        </h3>

                        <p className="text-white/50 text-xs leading-relaxed mb-6 line-clamp-3">
                            {post.excerpt}
                        </p>

                        <div className="mt-auto flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                            <span>Read More</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>

                    {/* Scan Line Effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
                </div>
            </Link>
        </motion.div>
    );
}
