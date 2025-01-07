'use client';

import React from 'react';
import { motion } from 'framer-motion';

const processes = [
    {
        number: "01",
        title: "Strategy Development",
        description: "We begin by understanding your goals, target audience, and brand voice to create a tailored social media strategy.",
        details: [
            "Brand Analysis",
            "Goal Setting",
            "Audience Research",
            "Platform Selection"
        ]
    },
    {
        number: "02",
        title: "Content Planning",
        description: "Creating a comprehensive content plan that aligns with your brand strategy and resonates with your audience.",
        details: [
            "Content Calendar",
            "Visual Guidelines",
            "Brand Voice",
            "Trend Analysis"
        ]
    },
    {
        number: "03",
        title: "Active Management",
        description: "Executing the strategy with consistent posting, engaging with your audience, and building community.",
        details: [
            "Content Creation",
            "Community Management",
            "Engagement Strategy",
            "Real-time Monitoring"
        ]
    },
    {
        number: "04",
        title: "Review & Optimize",
        description: "Analyzing performance metrics and refining our approach to maximize results and ROI.",
        details: [
            "Performance Analysis",
            "Strategy Refinement",
            "Growth Tracking",
            "ROI Measurement"
        ]
    }
];

const Process = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Title Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-primary tracking-tighter">
                            Our Process
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl text-secondary font-light tracking-tight">
                                Step by Step Excellence
                            </p>
                            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                                Our systematic approach ensures consistent quality and results in managing your social media presence.
                            </p>
                        </div>
                    </motion.div>

                    {/* Process Steps */}
                    <div className="space-y-24">
                        {processes.map((process, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                                    {/* Number */}
                                    <div className="md:col-span-2 flex md:justify-end">
                                        <div className="text-8xl font-bold text-primary/20 tracking-tighter">
                                            {process.number}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="md:col-span-10">
                                        <div className="bg-primary/5 rounded-xl p-8 md:p-12 border border-secondary/10">
                                            <h3 className="text-4xl md:text-5xl font-semibold text-secondary tracking-tighter mb-6">
                                                {process.title}
                                            </h3>
                                            <p className="text-xl text-gray-600 font-light mb-10">
                                                {process.description}
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                                {process.details.map((detail, detailIndex) => (
                                                    <div
                                                        key={detailIndex}
                                                        className="flex items-center gap-4"
                                                    >
                                                        <div className="flex-shrink-0 w-1 h-1 bg-primary rounded-full mt-[0.6rem]"></div>
                                                        <span className="text-xl text-gray-600 font-light">
                                                            {detail}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
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

export default Process;