'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CourseEnrollCTA = () => {
    return (
        <section className="py-20 md:py-32 bg-primary md:pt-40">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-secondary tracking-tighter">
                            Ready to Transform Your LinkedIn?
                        </h2>

                        <p className="text-xl text-secondary/80 font-light max-w-2xl mx-auto">
                            Join our next cohort starting January 15th. Only 20 seats available.
                        </p>

                        <div className="flex flex-col  items-center justify-center gap-3 pt-6">
                            <Link
                                href="/services/linkedin-masterclass/register"
                                className="px-12 py-4 rounded-full bg-secondary text-primary text-xl hover:opacity-90 transition-all duration-300 flex items-center gap-2"
                            >
                                Reserve Your Seat
                            </Link>
                            <p className="text-secondary text-lg">
                                Current Batch: 8 Seats Left
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CourseEnrollCTA;