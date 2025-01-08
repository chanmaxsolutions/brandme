// src/app/services/linkedin-masterclass/thank-you/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MessageCircleMore, Copy, ArrowLeft } from 'lucide-react';

const ThankYouPage = () => {
    const bankDetails = {
        bank: "Commercial Bank",
        accountName: "BrandMe Digital",
        accountNumber: "1234567890",
        branch: "Jaffna"
    };

    const whatsappNumber = "+94754180422"; // Replace with your WhatsApp number
    const whatsappMessage = encodeURIComponent("Hi, I've completed the LinkedIn Masterclass registration and made the payment. Here's my payment proof:");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
    };

    return (
        <main className="w-full min-h-screen bg-white">
            <div className="container mx-auto px-4 py-20 pt-36 ">
                <div className="max-w-2xl mx-auto">
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
                                Registration Successful!
                            </h1>

                            <p className="text-xl text-gray-600 font-light">
                                Complete your payment to secure your spot in the LinkedIn Masterclass.
                            </p>
                        </div>

                        {/* Payment Instructions */}
                        <div className="bg-gray-50 rounded-2xl p-8 text-left space-y-6">
                            <h2 className="text-2xl font-semibold text-secondary">Payment Details</h2>

                            <div className="space-y-4">
                                {Object.entries(bankDetails).map(([key, value]) => (
                                    <div key={key} className="flex justify-between items-center">
                                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold">{value}</span>
                                            <button
                                                onClick={() => copyToClipboard(value)}
                                                className="text-primary hover:text-secondary transition-colors"
                                            >
                                                <Copy className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-gray-200">
                                <p className="text-gray-600 mb-4">
                                    After making the payment, please send the payment proof via WhatsApp:
                                </p>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300"
                                >
                                    <MessageCircleMore className="w-5 h-5" />
                                    Send Payment Proof
                                </a>
                            </div>
                        </div>

                        {/* Back Link */}
                        <Link
                            href="/services/linkedin-masterclass"
                            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back to Course Details</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default ThankYouPage;