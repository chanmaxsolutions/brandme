// src/app/not-found.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-12"
                    >
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-primary tracking-tighter">
                            404
                        </h1>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-semibold text-secondary tracking-tighter">
                                Page Not Found
                            </h2>
                            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                                Sorry, the page you're looking for doesn't exist or has been moved.
                            </p>
                        </div>

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
}