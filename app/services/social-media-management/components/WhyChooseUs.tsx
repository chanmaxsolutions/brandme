'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Users, Clock, Target, CheckCircle, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
    const benefits = [
        {
            icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8" />,
            title: "Data-Driven Strategy",
            description: "Strategic decisions backed by analytics and real-time data insights."
        },
        {
            icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
            title: "Engaged Community",
            description: "Build and nurture an active, engaged community around your brand."
        },
        {
            icon: <Clock className="w-6 h-6 md:w-8 md:h-8" />,
            title: "Consistent Presence",
            description: "Regular posting schedule and timely response to engagement."
        },
        {
            icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
            title: "Targeted Growth",
            description: "Focus on reaching and engaging your ideal audience."
        },
        {
            icon: <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />,
            title: "Quality Content",
            description: "High-quality, branded content that resonates with your audience."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Measurable Results",
            description: "Clear reporting on growth, engagement, and ROI metrics."
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
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-primary ">
                        Why Choose Us
                    </h2>
                    <div className="space-y-6">
                        <p className="text-3xl text-secondary font-light tracking-tight">
                            Expert Management That Delivers
                        </p>
                        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                            Strategic social media management solutions that drive engagement, grow your audience, and deliver measurable business results.
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
                            <p className="text-xl text-gray-600 font-light max-w-3xl">
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