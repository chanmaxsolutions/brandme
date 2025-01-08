// src/components/about/FAQSection.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "What services does BrandMe offer?",
        answer: "We offer comprehensive digital marketing services including social media management, performance marketing, SEO optimization, web development, and LinkedIn Masterclass. Our services are tailored to meet your specific business objectives and target audience needs."
    },
    {
        question: "What makes BrandMe different?",
        answer: "Our data-driven approach combined with creative excellence sets us apart. We focus on delivering measurable results, maintaining transparent communication, and building long-term partnerships with our clients rather than just providing one-off services."
    },
    {
        question: "How do you ensure client success?",
        answer: "We follow a systematic approach starting with thorough market analysis, creating customized strategies, implementing data-driven campaigns, and providing regular performance reports. Our team constantly monitors and optimizes campaigns to ensure maximum ROI."
    },
    {
        question: "Do you work with international clients?",
        answer: "Yes, while we're based in Sri Lanka, we work with clients globally. Our digital expertise and strategic approach are effective across different markets and industries, helping businesses achieve their digital marketing goals worldwide."
    },
    {
        question: "What's your project process like?",
        answer: "We begin with a detailed consultation to understand your goals, followed by strategy development, implementation, and regular monitoring. We maintain clear communication throughout the project and provide regular updates on progress and results."
    },
    {
        question: "How do you measure success?",
        answer: "We track key performance indicators (KPIs) specific to your goals, including engagement rates, conversion rates, ROI, and other relevant metrics. We provide detailed monthly reports and real-time dashboards for transparent performance monitoring."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Title Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-primary tracking-tighter">
                            Common Questions
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl text-secondary font-light tracking-tight">
                                Everything You Need to Know
                            </p>
                            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                                Find answers to frequently asked questions about our digital agency.
                            </p>
                        </div>
                    </motion.div>

                    {/* FAQ List */}
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="bg-primary/5 rounded-xl border border-secondary/10 overflow-hidden">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="flex items-center justify-between w-full p-8 text-left"
                                    >
                                        <h3 className="text-2xl md:text-3xl font-semibold text-secondary tracking-tighter pr-8">
                                            {faq.question}
                                        </h3>
                                        <ChevronDown
                                            className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                        />
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                        <p className="px-8 pb-8 text-xl text-gray-600 font-light">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;