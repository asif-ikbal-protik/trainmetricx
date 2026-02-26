import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Calendar, User, Clock, ChevronLeft, Share2 } from "lucide-react";
import Link from "next/link";

import ShareMenu from "@/components/ShareMenu";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found | Train Matricx",
        };
    }

    return {
        title: `${post.title} | Train Matricx Intelligence Feed`,
        description: post.excerpt,
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://trainmatricx.com/blog/${slug}`,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.coverImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.coverImage],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        image: `https://trainmatricx.com${post.coverImage}`,
        datePublished: post.date,
        author: {
            "@type": "Person",
            name: post.author,
        },
        publisher: {
            "@type": "Organization",
            name: "Train Matricx",
            logo: {
                "@type": "ImageObject",
                url: "https://trainmatricx.com/trainmatricx-logo.png",
            },
        },
        description: post.excerpt,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://trainmatricx.com/blog/${slug}`,
        },
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-white pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Navbar />

            {/* Post Hero */}
            <header className="relative pt-32 pb-16 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors text-[10px] uppercase tracking-widest mb-12 group"
                    >
                        <ChevronLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                        Back to Intelligence Feed
                    </Link>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-3 py-1 rounded-sm bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                            {post.category}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap justify-center items-center gap-6 text-[10px] text-white/40 uppercase tracking-widest border-y border-white/5 py-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-primary" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-primary" />
                                <span>5 Min Read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Featured Image */}
            <div className="container mx-auto px-6 mb-16">
                <div className="relative aspect-[21/9] w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
            </div>

            {/* Article Content */}
            <article className="container mx-auto px-6 relative">
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-invert prose-primary max-w-none 
                        prose-headings:font-bold prose-headings:tracking-tight
                        prose-p:text-white/70 prose-p:leading-relaxed prose-p:text-lg
                        prose-strong:text-white prose-strong:font-bold
                        prose-li:text-white/70
                        prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                        prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {post.content}
                        </ReactMarkdown>
                    </div>

                    {/* Post Footer / Share */}
                    <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center">
                                <User className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-[10px] text-white/40 uppercase tracking-widest">Authored By</p>
                                <p className="font-bold text-white">{post.author}</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <ShareMenu title={post.title} />
                        </div>
                    </div>
                </div>

                {/* Floating Navigation Background elements */}
                <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-primary/5 blur-[150px] rounded-full" />
            </article>

            <Footer />
        </main>
    );
}
