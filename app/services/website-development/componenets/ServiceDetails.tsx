'use client';

import React from 'react';
import { motion } from 'framer-motion';

const serviceDetails = [
    {
        title: 'Frontend Development',
        skills: [
            'Responsive Design',
            'Interactive UI/UX',
            'Modern Frameworks',
            'Performance Optimization'
        ]
    },
    {
        title: 'Backend Systems',
        skills: [
            'API Development',
            'Database Design',
            'Server Setup',
            'Security Implementation'
        ]
    },
    {
        title: 'CMS Integration',
        skills: [
            'Content Management',
            'User Permissions',
            'Custom Plugins',
            'Easy Updates'
        ]
    },
    {
        title: 'Technical Services',
        skills: [
            'SEO Optimization',
            'Speed Optimization',
            'Security Setup',
            'Analytics Integration'
        ]
    }
];

const ServiceDetails = () => {
    return (
        <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Title Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-primary tracking-tighter">
                            Service Details
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl text-white/80 font-light tracking-tight">
                                Development Components
                            </p>
                            <p className="text-xl text-white/80 font-light max-w-3xl mx-auto">
                                Comprehensive web development services to create powerful, scalable websites.
                            </p>
                        </div>
                    </motion.div>

                    {/* Details List */}
                    <div className="space-y-12">
                        {serviceDetails.map((detail, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/10"
                            >
                                <div className="md:flex items-start justify-between gap-12">
                                    <div className="mb-8 md:mb-0 md:w-1/3">
                                        <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter">
                                            {detail.title}
                                        </h3>
                                    </div>
                                    <div className="md:w-2/3">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                            {detail.skills.map((skill, skillIndex) => (
                                                <div
                                                    key={skillIndex}
                                                    className="flex items-center gap-4"
                                                >
                                                    <div className="flex-shrink-0 w-1 h-1 bg-primary rounded-full mt-[0.6rem]"></div>
                                                    <span className="text-xl text-white/80 font-light">
                                                        {skill}
                                                    </span>
                                                </div>
                                            ))}
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

export default ServiceDetails;