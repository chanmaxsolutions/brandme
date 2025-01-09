// components/About/index.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const About = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                        {/* Left Column - Big Impact Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <h2 className="text-7xl md:text-8xl lg:text-9xl font-semibold text-secondary/15 tracking-tighter">
                                About
                            </h2>
                            <p className="text-5xl md:text-6xl lg:text-7xl font-semibold text-secondary tracking-tighter">
                                Building Brands That Make a Digital Impact.
                            </p>

                            <Link href="/about">
                                <button className="inline-flex items-center justify-center px-12 py-4 text-xl text-secondary bg-primary border-2 border-primary rounded-full hover:opacity-90 transition-all duration-300 mt-6">
                                    Our Story
                                </button>
                            </Link>
                        </motion.div>

                        {/* Right Column - Description and Values */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-12 md:pt-8"
                        >
                            <div className="space-y-6">
                                <p className="text-xl text-secondary/80 font-light">
                                    At BrandMe, we transform businesses through innovative digital solutions and strategic thinking. Our passion for excellence drives everything we do, ensuring your brand stands out in the digital landscape.
                                </p>
                                <p className="text-xl text-secondary/80 font-light">
                                    Through our comprehensive approach to digital marketing and development, we help businesses create lasting connections with their audience and achieve measurable growth.
                                </p>
                            </div>

                            {/* Values or Key Points */}
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { number: '01', label: 'Client Focus' },
                                    { number: '02', label: 'Data Driven' },
                                    { number: '03', label: 'Innovation' },
                                    { number: '04', label: 'Excellence' }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="space-y-2"
                                    >
                                        <span className="text-2xl text-primary font-light">{item.number}</span>
                                        <p className="text-xl font-semibold text-secondary tracking-tight">{item.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;