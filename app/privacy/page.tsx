
import React from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';

// src/app/privacy/page.tsx
export const metadata = {
    title: 'Privacy Policy | BrandMe',
    description: 'Learn about BrandMe\'s privacy policy and how we protect your data while providing our digital marketing services.',
    openGraph: {
        title: 'Privacy Policy | BrandMe',
        description: 'Learn about BrandMe\'s privacy policy and data protection measures.',
        url: 'https://brandme.top/privacy',
    }
}

const PrivacyPage = () => {
    return (
        <main className="w-full">
            <PageHeader
                title="Privacy Policy"
                description="Learn how we collect, use, and protect your information."
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
                            {/* Introduction */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-semibold text-secondary tracking-tighter">
                                    1. Introduction
                                </h2>
                                <div className="space-y-4 text-lg text-gray-600 font-light">
                                    <p>
                                        BrandMe is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services.
                                    </p>
                                </div>
                            </div>

                            {/* Information We Collect */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-semibold text-secondary tracking-tighter">
                                    2. Information We Collect
                                </h2>
                                <div className="space-y-4 text-lg text-gray-600 font-light">
                                    <p>We collect information that you provide directly to us, including:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Name and contact information</li>
                                        <li>Business information</li>
                                        <li>Payment details</li>
                                        <li>Communications with us</li>
                                        <li>Social media account information (when relevant to our services)</li>
                                    </ul>
                                </div>
                            </div>

                            {/* How We Use Information */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-semibold text-secondary tracking-tighter">
                                    3. How We Use Your Information
                                </h2>
                                <div className="space-y-4 text-lg text-gray-600 font-light">
                                    <p>We use the collected information to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Provide and improve our services</li>
                                        <li>Process payments</li>
                                        <li>Communicate with you</li>
                                        <li>Send marketing communications (with your consent)</li>
                                        <li>Analyze and improve our services</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Data Protection */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-semibold text-secondary tracking-tighter">
                                    4. Data Protection
                                </h2>
                                <div className="space-y-4 text-lg text-gray-600 font-light">
                                    <p>
                                        We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                                    </p>
                                </div>
                            </div>

                            {/* Data Sharing */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-semibold text-secondary tracking-tighter">
                                    5. Data Sharing
                                </h2>
                                <div className="space-y-4 text-lg text-gray-600 font-light">
                                    <p>
                                        We do not sell your personal information. We may share your information with service providers who assist us in operating our business, subject to confidentiality agreements.
                                    </p>
                                </div>
                            </div>

                            {/* Your Rights */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-semibold text-secondary tracking-tighter">
                                    6. Your Rights
                                </h2>
                                <div className="space-y-4 text-lg text-gray-600 font-light">
                                    <p>You have the right to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Access your personal information</li>
                                        <li>Correct inaccurate information</li>
                                        <li>Request deletion of your information</li>
                                        <li>Opt-out of marketing communications</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-semibold text-secondary tracking-tighter">
                                    7. Contact Us
                                </h2>
                                <div className="space-y-4 text-lg text-gray-600 font-light">
                                    <p>
                                        If you have any questions about this Privacy Policy, please contact us at hello@brandme.top
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

export default PrivacyPage;