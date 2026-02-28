import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Building2, Target, ChevronLeft } from "lucide-react";
import Link from "next/link";
import ShareMenu from "@/components/ShareMenu";

export async function generateStaticParams() {
    const caseStudies = getAllCaseStudies();
    return caseStudies.map((cs) => ({
        slug: cs.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const caseStudy = getCaseStudyBySlug(slug);

    if (!caseStudy) {
        return {
            title: "Case Study Not Found | Train Matricx",
        };
    }

    return {
        title: `${caseStudy.title} | Train Matricx Case Studies`,
        description: caseStudy.excerpt,
        openGraph: {
            title: caseStudy.title,
            description: caseStudy.excerpt,
            url: `https://trainmatricx.com/case-studies/${slug}`,
            type: "article",
            images: [
                {
                    url: caseStudy.coverImage,
                    width: 1200,
                    height: 630,
                    alt: caseStudy.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: caseStudy.title,
            description: caseStudy.excerpt,
            images: [caseStudy.coverImage],
        },
    };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const caseStudy = getCaseStudyBySlug(slug);

    if (!caseStudy) {
        notFound();
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: caseStudy.title,
        image: `https://trainmatricx.com${caseStudy.coverImage}`,
        datePublished: caseStudy.date,
        publisher: {
            "@type": "Organization",
            name: "Train Matricx",
            logo: {
                "@type": "ImageObject",
                url: "https://trainmatricx.com/trainmatricx-logo.png",
            },
        },
        description: caseStudy.excerpt,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://trainmatricx.com/case-studies/${slug}`,
        },
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-white pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Navbar />

            {/* Hero */}
            <header className="relative pt-32 pb-16 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors text-[10px] uppercase tracking-widest mb-12 group"
                    >
                        <ChevronLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                        Back to Case Studies
                    </Link>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-3 py-1 rounded-sm bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                            Case Study
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                            {caseStudy.title}
                        </h1>

                        <div className="flex flex-wrap justify-center items-center gap-6 text-[10px] text-white/40 uppercase tracking-widest border-y border-white/5 py-6">
                            <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-primary" />
                                <span>Client: {caseStudy.client}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Target className="w-4 h-4 text-primary" />
                                <span>Industry: {caseStudy.industry}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Featured Image */}
            <div className="container mx-auto px-6 mb-16">
                <div className="relative aspect-[21/9] w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 flex items-center justify-center">
                    <Image
                        src={caseStudy.coverImage}
                        alt={caseStudy.client}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center z-10 text-4xl md:text-6xl font-black text-white tracking-widest uppercase">
                        {caseStudy.client}
                    </div>
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
                        prose-blockquote:border-l-primary prose-blockquote:bg-white/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-xl prose-blockquote:text-white/90 prose-blockquote:not-italic
                        prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {caseStudy.content}
                        </ReactMarkdown>
                    </div>

                    {/* Post Footer / Share */}
                    <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center gap-8">
                        <div>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest">Share Case Study</p>
                        </div>
                        <div className="flex gap-4">
                            <ShareMenu title={caseStudy.title} />
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
