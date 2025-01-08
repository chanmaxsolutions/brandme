// src/components/about/CompanyStory.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, Users } from 'lucide-react';

function CompanyStory() {
    return (
        <div className="py-36 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Story Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-primary tracking-tighter mb-6">
                            Our Story
                        </h2>

                        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                            From vision to reality: Building Sri Lanka's digital future.
                        </p>

                    </motion.div>

                    {/* Story Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8 mb-16"
                    >
                        <p className="text-xl text-gray-600 font-light">
                            BrandMe Digital was founded in 2023 with a clear vision: to revolutionize digital marketing in Sri Lanka. We understood that businesses needed more than just generic solutions – they needed a partner who could truly transform their digital presence.
                        </p>
                        <p className="text-xl text-gray-600 font-light">
                            Our approach combines data-driven strategies with creative excellence, ensuring that every project we undertake delivers measurable results. From social media management to comprehensive digital marketing campaigns, we've helped numerous businesses establish their unique voice in the digital world.
                        </p>
                    </motion.div>

                    {/* Achievement Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        <div className="bg-white p-8 rounded-xl border border-secondary/5 text-center">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Target className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                            </div>
                            <h3 className="text-5xl font-bold text-secondary mb-2">30+</h3>
                            <p className="text-gray-600 text-lg font-light">Projects Completed</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-secondary/5 text-center">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                            </div>
                            <h3 className="text-5xl font-bold text-secondary mb-2">20+</h3>
                            <p className="text-gray-600 text-lg font-light">Happy Clients</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-secondary/5 text-center">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Rocket className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                            </div>
                            <h3 className="text-5xl font-bold text-secondary mb-2">99%</h3>
                            <p className="text-gray-600 text-lg font-light">Client Retention</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default CompanyStory;