'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "How long does it take to build a website?",
        answer: "Development timeline varies based on project complexity. A basic website typically takes 4-6 weeks, while more complex sites with custom functionality may take 8-12 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
        question: "What technologies do you use?",
        answer: "We use modern, industry-standard technologies including React, Next.js, and Node.js for development. Our tech stack is chosen based on your specific needs and ensures optimal performance, security, and scalability."
    },
    {
        question: "What CMS do you work with?",
        answer: "We work with a variety of CMS platforms based on your needs. This includes popular options like WordPress for traditional websites, Strapi for headless CMS solutions, and modern platforms like Sanity or Airtable for specific use cases. We'll recommend the best CMS based on your requirements, technical needs, and team's comfort level."
    },
    {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function perfectly across all devices including smartphones, tablets, and desktop computers."
    },
    {
        question: "Do you provide website maintenance?",
        answer: "Yes, we offer ongoing maintenance packages to keep your website secure, up-to-date, and performing optimally. This includes regular updates, security monitoring, backups, and technical support."
    },
    {
        question: "Can I update the website myself?",
        answer: "Yes! We integrate user-friendly content management systems (CMS) that allow you to easily update content, add pages, and manage your website. We also provide training on how to use the CMS effectively."
    },
    {
        question: "What about SEO and speed optimization?",
        answer: "SEO and performance optimization are built into our development process. This includes proper code structure, fast loading times, mobile optimization, and all technical SEO requirements for better search engine rankings."
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
                                Find answers to frequently asked questions about our website development services.
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