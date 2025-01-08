// src/app/thank-you/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';

const ThankYouPage = () => {
    return (
        <main className="min-h-screen bg-white py-40">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-12 text-center"
                    >
                        {/* Success Message */}
                        <div className="space-y-6">
                            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                                <svg
                                    className="w-10 h-10 text-secondary"
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

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-secondary">
                                Request Received!
                            </h1>

                            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                                Thank you for reaching out. We've received your project details and will get back to you within 24 hours.
                            </p>
                        </div>

                        {/* What's Next Section */}
                        <div className="bg-gray-50 rounded-2xl p-8 text-left space-y-6">
                            <h2 className="text-2xl font-semibold text-secondary">What's Next?</h2>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <Clock className="w-6 h-6 text-primary mt-1" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">Review Process</h3>
                                        <p className="text-gray-600">
                                            Our team will carefully review your project requirements and prepare a detailed proposal.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <Clock className="w-6 h-6 text-primary mt-1" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">Discussion Call</h3>
                                        <p className="text-gray-600">
                                            We'll schedule a call to discuss your requirements in detail and answer any questions you may have.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <Clock className="w-6 h-6 text-primary mt-1" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">Custom Proposal</h3>
                                        <p className="text-gray-600">
                                            You'll receive a customized proposal with detailed pricing and project timeline.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Back Link */}
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back to Home</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default ThankYouPage;