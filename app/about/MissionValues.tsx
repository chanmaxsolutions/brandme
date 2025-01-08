// src/components/about/MissionValues.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Rocket } from 'lucide-react';

const values = [
    {
        icon: <Target className="w-8 h-8" />,
        title: "Our Mission",
        description: "To empower businesses with cutting-edge digital solutions that drive growth and success in the modern marketplace."
    },
    {
        icon: <Lightbulb className="w-8 h-8" />,
        title: "Innovation",
        description: "We constantly evolve and adapt to the latest digital trends and technologies to provide innovative solutions."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Client Focus",
        description: "Your success is our priority. We work closely with you to understand and achieve your business goals."
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "Results Driven",
        description: "We measure our success through the tangible results and growth we deliver for our clients."
    }
];

const MissionValues = () => {
    return (
        <section className="py-28 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-primary tracking-tighter mb-6">
                            Mission & Values
                        </h2>
                        <p className="text-xl text-secondary/80 font-light max-w-2xl mx-auto">
                            Driving digital excellence through our core principles.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white backdrop-blur-sm rounded-xl p-8 md:p-12 border border-gray-100"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <div className="text-primary">
                                        {value.icon}
                                    </div>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-semibold text-secondary tracking-tighter">
                                    {value.title}
                                </h3>
                                <p className="text-xl text-secondary/80 font-light mt-[0.6rem]">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionValues;