import { getAllCaseStudies } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CaseStudiesPage() {
    const caseStudies = getAllCaseStudies();

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.1),transparent_70%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 animate-pulse">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Proven Results
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            Client <span className="text-primary italic">Success</span>
                        </h1>
                        <p className="text-lg text-white/60 leading-relaxed">
                            Discover how top-tier sports technology companies execute state-of-the-art computer vision models using our high-precision data.
                        </p>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="pb-32 container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((caseStudy, index) => (
                        <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} index={index} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
