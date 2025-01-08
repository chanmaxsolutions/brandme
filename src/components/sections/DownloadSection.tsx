'use client';

import React, { useState } from 'react';
import { Download, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DownloadFormSchema, type DownloadFormData } from '@/lib/airtable';
import CountryCodeSelect from '@/components/ui/CountryCodeSelect';

interface DownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<DownloadFormData>({
        resolver: zodResolver(DownloadFormSchema)
    });

    const onSubmit = async (data: DownloadFormData) => {
        try {
            setIsSubmitting(true);
            setSubmitError(null);

            const response = await fetch('/api/download-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    downloadType: 'Social Media Checklist',
                    phone: `${data.countryCode}${data.phoneNumber}` // Combine country code and phone
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to submit form');
            }

            // Download the file
            const link = document.createElement('a');
            link.href = 'https://res.cloudinary.com/db8phlsfy/image/upload/v1735994535/SMM_-_Packages_4_jartel.pdf';
            link.download = 'Social-Media-Checklist.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);


            onClose();
        } catch (error) {
            setSubmitError(error instanceof Error ? error.message : 'Something went wrong');
        } finally {
            setIsSubmitting(false);
        }
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

                <h3 className="text-3xl md:text-6xl font-semibold text-center md:px-14 tracking-tighter text-secondary mb-4">
                    Download Your <span className='text-primary'>Free</span> Checklist
                </h3>

                <p className="text-xl text-gray-600 text-center font-light mb-8">
                    Fill in your details to receive your social media checklist.
                </p>

                {submitError && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl mb-6">
                        {submitError}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            {...register('name')}
                            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                        />
                        {errors.name && (
                            <p className="mt-1 text-red-500">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            {...register('email')}
                            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                        />
                        {errors.email && (
                            <p className="mt-1 text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Phone Number with Country Code */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <CountryCodeSelect
                                onChange={(code) => setValue('countryCode', code)}
                            />
                            {errors.countryCode && (
                                <p className="mt-1 text-red-500">{errors.countryCode.message}</p>
                            )}
                        </div>
                        <div className="md:col-span-2">
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                {...register('phoneNumber')}
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                            />
                            {errors.phoneNumber && (
                                <p className="mt-1 text-red-500">{errors.phoneNumber.message}</p>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-fit mx-auto px-12 py-4 bg-primary text-secondary rounded-full text-xl hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {isSubmitting ? 'Downloading...' : 'Download Now'}
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
};

const DownloadSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-secondary py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1 }}
                        className="space-y-8"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-primary">
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

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.1 }}
                            onClick={() => setIsModalOpen(true)}
                            className="bg-primary text-secondary px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 text-xl mx-auto"
                        >
                            Download Free Checklist
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            <DownloadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default DownloadSection;