'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 opacity-50" />

            <div className="relative container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Main Heading */}
                    <h1 className="text-6xl md:text-7xl lg:text-9xl font-semibold mb-6 tracking-tighter">
                        <span className="text-primary">Social</span>
                        <br />
                        <span className="text-secondary">Business</span>
                    </h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05, duration: 0.1 }}
                        className="text-xl md:text-3xl text-gray-600 mb-12 max-w-2xl mx-auto font-light tracking-tighter"
                    >
                        We help businesses grow their online presence and engage with their audience effectively.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.1 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <Link href="/contact">
                            <button className="inline-flex items-center justify-center px-8 py-3 text-lg text-white bg-primary rounded-full hover:opacity-90 transition-all duration-300">
                                Get A Quote
                            </button>
                        </Link>
                        <Link href="/services">
                            <button className="inline-flex items-center justify-center px-8 py-3 text-lg text-primary border-2 border-primary rounded-full hover:bg-secondary hover:text-white transition-all duration-300">
                                Our Services
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;