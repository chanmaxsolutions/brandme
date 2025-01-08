'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "How are the live sessions conducted?",
        answer: "Live sessions are conducted twice weekly via Zoom. Each session includes training, Q&A, and practical exercises with real-time feedback."
    },
    {
        question: "What if I miss a live session?",
        answer: "While we recommend attending live for interactive learning, session recordings are available for 48 hours after each class for review."
    },
    {
        question: "Do you provide course materials?",
        answer: "Yes, you'll receive worksheets, templates, and resources for each session to support your learning and implementation."
    },
    {
        question: "What is the time commitment?",
        answer: "Plan for 2-3 hours per week for live sessions, plus 2-3 hours for implementation and practice to get the best results."
    },
    {
        question: "Is this suitable for beginners?",
        answer: "Yes, the course is structured to benefit both beginners and experienced LinkedIn users. We cover fundamentals through to advanced strategies."
    },
    {
        question: "What happens after the course?",
        answer: "You'll have access to our alumni community and ongoing support to help implement your LinkedIn growth strategy."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
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
                                Find answers about our live masterclass program.
                            </p>
                        </div>
                    </motion.div>

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