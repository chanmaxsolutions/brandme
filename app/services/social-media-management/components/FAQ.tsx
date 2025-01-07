'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "How often do you post on social media?",
        answer: "We maintain a consistent posting schedule tailored to each platform's best practices. Typically, this includes 4-5 posts per week on platforms like Instagram and Facebook, and 1-2 daily posts on platforms like Twitter."
    },
    {
        question: "Do you create the content or should we provide it?",
        answer: "We handle all aspects of content creation, including photography, graphics design, and copywriting. However, we welcome any brand assets or content ideas you'd like to incorporate into the strategy."
    },
    {
        question: "How do you measure success?",
        answer: "We track key performance indicators including engagement rates, follower growth, reach, website traffic, and conversion metrics. Monthly reports provide detailed insights into these metrics and strategy improvements."
    },
    {
        question: "Can you handle multiple social media platforms?",
        answer: "Yes, we manage content across all major social media platforms including Instagram, Facebook, Twitter, LinkedIn, and TikTok. Each platform receives platform-specific content optimized for its unique audience."
    },
    {
        question: "How do you handle customer interactions?",
        answer: "We provide timely responses to comments, messages, and mentions during business hours. All interactions follow your brand voice guidelines while maintaining professional and engaging communication."
    },
    {
        question: "What is your response time for queries?",
        answer: "We aim to respond to all social media interactions within 2-3 hours during business hours. Urgent matters are addressed immediately, and we can set up custom response protocols based on your needs."
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
                                Find answers to frequently asked questions about our social media management services.
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