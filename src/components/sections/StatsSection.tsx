// src/components/home/StatsSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
    return (
        <section className="py-20 bg-primary">
            <div className="container mx-auto px-4">
                <div className="max-w-8xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "02+", label: "Years Experience" },
                            { number: "30+", label: "Projects Delivered" },
                            { number: "99%", label: "Client Satisfaction" },
                            { number: "20+", label: "Clients Globally" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <h3 className="text-5xl md:text-7xl font-semibold text-secondary mb-2 tracking-tighter">
                                    {stat.number}
                                </h3>
                                <p className="text-secondary/80 text-xl font-light">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;