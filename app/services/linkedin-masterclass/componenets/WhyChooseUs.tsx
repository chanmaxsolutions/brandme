'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Trophy, Rocket, BarChart3, Crown } from 'lucide-react';

const WhyChooseUs = () => {
    const benefits = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Growth Strategy",
            description: "Learn proven techniques to grow your network and establish a strong LinkedIn presence."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Lead Generation",
            description: "Convert your LinkedIn profile into a powerful lead generation machine."
        },
        {
            icon: <Trophy className="w-6 h-6" />,
            title: "Personal Brand",
            description: "Build authority and become a recognized thought leader in your industry."
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Engagement Strategy",
            description: "Master content creation that drives meaningful engagement and conversations."
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Measurable ROI",
            description: "Track and optimize your LinkedIn activities for maximum business impact."
        },
        {
            icon: <Crown className="w-6 h-6" />,
            title: "Expert Support",
            description: "Get guidance from industry experts with proven LinkedIn success."
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
                        Course Benefits
                    </h2>
                    <div className="space-y-6">
                        <p className="text-3xl text-secondary font-light tracking-tight">
                            What You'll Master
                        </p>
                        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                            Transform your LinkedIn presence from basic networking to strategic business growth with our comprehensive masterclass.
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
                            className="bg-primary/5 p-8 rounded-xl border border-secondary/10"
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