"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What sports specifically do you cover?",
        answer: "We have established taxonomies for Football (Soccer), Basketball, American Football, Cricket, Tennis, and Golf. We can also build custom taxonomies for niche sports or specific research requirements."
    },
    {
        question: "Which data formats do you support as output?",
        answer: "Our standard outputs include COCO, YOLO, SVL, and TFRecord. However, we can deliver data in any custom JSON or CSV schema to fit your existing ML ingestion pipeline."
    },
    {
        question: "How do you guarantee 99.8% geometric accuracy?",
        answer: "Every frame undergoes a multi-stage process: AI-assisted pre-tracking, double-pass review by different domain experts, and a final audit by senior analysts. This ensures zero drift in skeletal and bounding box data."
    },
    {
        question: "What is your typical turnaround time for large datasets?",
        answer: "Standard turnaround is 48-72 hours for datasets under 100k frames. For enterprise-scale projects, we offer scaled workforce solutions with dedicated SLAs to match your R&D cycle."
    },
    {
        question: "Do you sign non-disclosure agreements (NDAs)?",
        answer: "Yes, data security is our priority. We sign NDAs for all projects and handle all footage on secure, encrypted servers. We are SOC2 and ISO compliance-aligned in our operations."
    },
    {
        question: "Can you handle infrared or thermal sports footage?",
        answer: "Yes, our annotators are trained to work with various spectrums, including IR and thermal feeds, as well as multi-camera synchronized stadium setups for 3D reconstruction."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-[#050505] relative overflow-hidden">

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6"
                    >
                        <HelpCircle className="w-3 h-3" />
                        Common Questions
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-white/60 text-lg">
                        Everything you need to know about our data pipeline and precision standards.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`rounded-2xl border transition-all duration-300 ${openIndex === index
                                ? "bg-white/10 border-white/20"
                                : "bg-white/5 border-white/5 hover:border-white/10"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left p-6 flex justify-between items-center gap-4"
                            >
                                <span className={`text-lg font-medium transition-colors ${openIndex === index ? "text-white" : "text-white/70"
                                    }`}>
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? "bg-primary text-white rotate-180" : "bg-transparent text-white/40"
                                    }`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-white/50 leading-relaxed border-t border-white/5 mt-2 pt-4 text-sm">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Support Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-white/40 text-sm">
                        Have a unique requirement? <button className="text-primary hover:text-white transition-colors underline underline-offset-4">Get in touch with our team</button>
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
