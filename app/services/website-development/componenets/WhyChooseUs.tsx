'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Code, Smartphone, Gauge, Shield, Wrench } from 'lucide-react';

const WhyChooseUs = () => {
    const benefits = [
        {
            icon: <Layout className="w-6 h-6" />,
            title: "Modern Design",
            description: "Clean, intuitive interfaces that engage visitors and represent your brand perfectly."
        },
        {
            icon: <Code className="w-6 h-6" />,
            title: "Clean Quality Code",
            description: "Well-structured, maintainable code following the latest development standards."
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Responsive Build",
            description: "Seamless experience across all devices and screen sizes."
        },
        {
            icon: <Gauge className="w-6 h-6" />,
            title: "Very Fast Loading",
            description: "Optimized performance for quick loading and smooth user experience."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "High Secure Setup",
            description: "Built-in security measures to protect your website and users."
        },
        {
            icon: <Wrench className="w-6 h-6" />,
            title: "Very Easy Updates",
            description: "User-friendly systems for content management and updates."
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-primary">
                        Why Choose Us
                    </h2>
                    <div className="space-y-6">
                        <p className="text-3xl text-secondary font-light tracking-tight">
                            Development Excellence
                        </p>
                        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                            Professional web development services focused on creating modern, high-performance websites that drive business growth.
                        </p>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                        >
                            <div className="rounded-2xl bg-primary p-4 text-secondary w-fit mb-6">
                                {benefit.icon}
                            </div>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-secondary mb-4">
                                {benefit.title}
                            </h3>
                            <p className="text-xl text-gray-600 font-light">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;