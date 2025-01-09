// src/app/terms/page.tsx
'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';

// src/app/terms/page.tsx
export const metadata = {
    title: 'Terms of Service | BrandMe',
    description: 'Read BrandMe\'s terms of service and conditions for our social media marketing and digital services.',
    openGraph: {
        title: 'Terms of Service | BrandMe',
        description: 'Read BrandMe\'s terms of service and conditions.',
        url: 'https://brandme.top/terms',
    }
}

const TermsPage = () => {
    return (
        <main className="w-full">
            <PageHeader
                title="Terms of Service"
                description="Please read these terms carefully before using our services."
            />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-12"
                        >
                            {/* Acceptance of Terms */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-semibold text-secondary tracking-tighter">
                                    1. Acceptance of Terms
                                </h2>
                                <div className="space-y-4 text-lg text-gray-600 font-light">
                                    <p>
                                        By accessing and using BrandMe's services, you accept and agree to be bound by the terms and provision of this agreement.
                                    </p>
                                </div>
                            </div>

                            {/* Services */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-semibold text-secondary tracking-tighter">
                                    2. Services
                                </h2>
                                <div className="space-y-4 text-lg text-gray-600 font-light">
                                    <p>
                                        BrandMe provides digital marketing services including but not limited to social media management, web development, SEO, and digital strategy consulting.
                                    </p>
                                    <p>
                                        We reserve the right to modify, suspend or discontinue any part of our services at any time.
                                    </p>
                                </div>
                            </div>

                            {/* Payment Terms */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-semibold text-secondary tracking-tighter">
                                    3. Payment Terms
                                </h2>
                                <div className="space-y-4 text-lg text-gray-600 font-light">
                                    <p>
                                        Payment terms are specified in individual service agreements. Invoices are due upon receipt unless otherwise specified in writing.
                                    </p>
                                    <p>
                                        For course registrations, full payment is required to secure your spot.
                                    </p>
                                </div>
                            </div>

                            {/* Intellectual Property */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-semibold text-secondary tracking-tighter">
                                    4. Intellectual Property
                                </h2>
                                <div className="space-y-4 text-lg text-gray-600 font-light">
                                    <p>
                                        All content, designs, and materials created by BrandMe remain our intellectual property unless explicitly stated otherwise in writing.
                                    </p>
                                </div>
                            </div>

                            {/* Limitation of Liability */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-semibold text-secondary tracking-tighter">
                                    5. Limitation of Liability
                                </h2>
                                <div className="space-y-4 text-lg text-gray-600 font-light">
                                    <p>
                                        BrandMe  shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services.
                                    </p>
                                </div>
                            </div>

                            {/* Updates to Terms */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-semibold text-secondary tracking-tighter">
                                    6. Updates to Terms
                                </h2>
                                <div className="space-y-4 text-lg text-gray-600 font-light">
                                    <p>
                                        We reserve the right to modify these terms at any time. Continued use of our services after any changes constitutes acceptance of the new terms.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-semibold text-secondary tracking-tighter">
                                    7. Contact Information
                                </h2>
                                <div className="space-y-4 text-lg text-gray-600 font-light">
                                    <p>
                                        For any questions regarding these terms, please contact us at hello@brandme.top
                                    </p>
                                </div>
                            </div>

                            {/* Last Updated */}
                            <div className="pt-12 text-gray-600 font-light">
                                Last updated: January 9, 2025
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TermsPage;