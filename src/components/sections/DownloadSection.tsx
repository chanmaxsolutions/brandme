'use client';

import React, { useState } from 'react';
import { Download, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormData {
    name: string;
    email: string;
    phone: string;
}

interface DownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: FormData) => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);

        const link = document.createElement('a');
        link.href = 'https://res.cloudinary.com/db8phlsfy/image/upload/v1735994535/SMM_-_Packages_4_jartel.pdf';
        link.download = 'Social-Media-Checklist.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        onClose();
    };

    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
        >
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-2xl p-8 w-full max-w-xl mx-4"
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                    <X className="h-8 w-8" />
                </button>

                <h3 className="text-3xl md:text-6xl font-semibold text-center md:px-12 tracking-tighter text-gray-900 mb-4">
                    Download Your <span className='underline underline-offset-3 decoration-primary decoration-6 rounded-lg'>Free</span> Checklist
                </h3>

                <p className="text-gray-600 text-center text-xl font-light mb-6">
                    Fill in your details to receive your social media checklist.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-1">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            required
                            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>

                    <div className='flex items-center justify-center'>
                        <button
                            type="submit"
                            className=" bg-primary text-secondary text-xl py-4 px-12 rounded-full hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                        >

                            Download Now
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

const DownloadSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFormSubmit = (data: FormData) => {
        console.log('Form submitted:', data);
    };

    return (
        <section className="bg-secondary">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 min-h-[300px]">
                    {/* Left Column - Big Text */}
                    <div className="p-8 md:p-12 flex items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1 }}
                            className='text-center md:text-left'
                        >
                            <h2 className="text-5xl md:text-4xl lg:text-6xl font-semibold tracking-tighter text-primary mb-6">
                                Free Social Media Marketing Guide
                            </h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05, duration: 0.1 }}
                                className="text-xl md:text-2xl text-white/80 font-light tracking-tighter"
                            >
                                Discover the secrets to mastering your social media presence
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* Right Column - CTA Button */}
                    <div className="pb-8 md:p-12 flex items-center justify-center">
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.1 }}
                            onClick={() => setIsModalOpen(true)}
                            className="bg-primary text-secondary px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 flex items-center gap-2 text-lg"
                        >
                            Download Free Checklist
                        </motion.button>
                    </div>
                </div>
            </div>

            <DownloadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleFormSubmit}
            />
        </section>
    );
};

export default DownloadSection;