'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CTASection = () => {
    return (
        <section className="bg-[#f5f5f5] py-20 md:py-32">
            <div className="container max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-primary mb-6">
                        Ready to Transform <br />
                        Your Digital Presence?
                    </h2>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-black/80 mb-12 font-light">
                        Lets discuss how we can help your business grow with our digital marketing expertise.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact">
                            <button className="inline-flex items-center justify-center px-12 py-4 text-lg text-white bg-primary rounded-full hover:opacity-90 transition-all duration-300">
                                Get Started
                            </button>
                        </Link>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;