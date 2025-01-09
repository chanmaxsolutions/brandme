'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CourseEnrollCTA = () => {
    return (
        <section className="bg-primary py-14 md:pt-28 ">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-secondary mb-6">
                            Ready to Build <br /> Solid Personal Brand?
                        </h2>

                        <p className="text-xl text-secondary/80 font-light max-w-2xl mx-auto">
                            Join our next cohort starting February 10th. Only 20 seats available.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-3 pt-6">
                            <Link
                                href="/services/linkedin-masterclass/register"
                                className="px-12 py-4 text-xl rounded-full bg-secondary text-primary hover:opacity-90 transition-all duration-300 flex items-center gap-2"
                            >
                                Reserve Your Seat
                            </Link>
                            <p className="text-secondary">
                                Current Batch: 20 Seats Left
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CourseEnrollCTA;