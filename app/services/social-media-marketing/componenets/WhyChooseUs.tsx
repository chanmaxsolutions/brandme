'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Search, BarChart3, Users, Rocket } from 'lucide-react';

const WhyChooseUs = () => {
    const benefits = [
        {
            icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
            title: "Targeted Campaigns",
            description: "Precision-targeted advertising campaigns that reach your ideal audience."
        },
        {
            icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
            title: "Highly ROI Focused",
            description: "Data-driven strategies designed to maximize your marketing investment."
        },
        {
            icon: <Search className="w-6 h-6 md:w-8 md:h-8" />,
            title: "Market Research",
            description: "In-depth analysis of your market, competitors, and target audience."
        },
        {
            icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8" />,
            title: "Performance Tracking",
            description: "Comprehensive analytics and reporting on campaign performance."
        },
        {
            icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
            title: "Audience Growth",
            description: "Strategic approaches to expand and engage your follower base."
        },
        {
            icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
            title: "Brand Amplification",
            description: "Boost your brand visibility and reach across all platforms."
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
                            Marketing That Delivers
                        </p>
                        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                            Strategic social media marketing solutions that drive engagement, boost conversions, and deliver measurable business results.
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
                            className="bg-white p-8 rounded-xl border border-secondary/5"
                        >
                            <div className="rounded-2xl bg-primary/10 p-4 text-primary w-fit mb-6">
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