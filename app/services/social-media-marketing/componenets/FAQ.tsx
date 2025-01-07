'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "What platforms do you advertise on?",
        answer: "We run targeted campaigns across all major social media platforms including Meta (Facebook & Instagram), LinkedIn, Twitter, and TikTok. The platforms we focus on are strategically chosen based on your target audience and business goals."
    },
    {
        question: "How do you measure campaign success?",
        answer: "We track key performance indicators (KPIs) including reach, engagement, click-through rates, conversions, and ROI. Our comprehensive analytics provide clear insights into campaign performance and business impact."
    },
    {
        question: "What's your minimum advertising budget?",
        answer: "While we can work with various budgets, we recommend a minimum monthly ad spend of $1,000 to achieve meaningful results. The exact budget is tailored to your goals, target audience, and competitive landscape."
    },
    {
        question: "How long until we see results?",
        answer: "Initial results can be seen within the first few weeks of campaign launch. However, for optimal results and sustainable growth, we recommend a minimum 3-month commitment to allow for testing, optimization, and scaling."
    },
    {
        question: "Do you create the ad content?",
        answer: "Yes, we handle all aspects of ad creation including copywriting, graphic design, and video production. Our creative team ensures your ads align with your brand guidelines while maximizing engagement and conversions."
    },
    {
        question: "How often do you report on results?",
        answer: "We provide detailed monthly reports covering all key metrics and insights. Additionally, we offer real-time campaign dashboards for transparent performance monitoring and weekly progress updates."
    }
];

const FAQ = () => {
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
                                Find answers to frequently asked questions about our social media marketing services.
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
                                <div
                                    className="bg-primary/5 rounded-xl border border-secondary/10 overflow-hidden"
                                >
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

export default FAQ;