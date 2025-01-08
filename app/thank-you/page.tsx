'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function ThankYouPage() {
    return (
        <main className="w-full min-h-screen flex items-center justify-center bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                            <svg
                                className="w-12 h-12 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary tracking-tighter">
                            Thank You!
                        </h1>

                        <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                            We've received your message and will get back to you soon. Thanks for reaching out to us!
                        </p>

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            <span>Back to Home</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}