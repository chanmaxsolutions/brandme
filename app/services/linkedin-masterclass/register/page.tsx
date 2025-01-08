// src/app/services/linkedin-masterclass/register/page.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import CountryCodeSelect from '@/components/ui/CountryCodeSelect';
import { LinkedInMasterClassFormSchema, type LinkedInMasterClassFormData } from '@/lib/airtable';

const LinkedInMasterClassRegistration = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<LinkedInMasterClassFormData>({
        resolver: zodResolver(LinkedInMasterClassFormSchema)
    });

    const onSubmit = async (data: LinkedInMasterClassFormData) => {
        try {
            setIsSubmitting(true);
            setSubmitError(null);

            const response = await fetch('/api/linkedin-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to submit registration');
            }

            router.push('/services/linkedin-masterclass/thank-you');
        } catch (error) {
            setSubmitError(error instanceof Error ? error.message : 'Something went wrong');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-white py-40">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Back Button */}
                    <Link
                        href="/services/linkedin-masterclass"
                        className="inline-flex items-center gap-2 text-secondary mb-12 hover:opacity-80 transition-all duration-300"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Course
                    </Link>

                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="text-center space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary tracking-tighter">
                                Register for Masterclass
                            </h1>
                            <p className="text-xl text-gray-600 font-light">
                                Fill out the form below to secure your spot in our LinkedIn Masterclass.
                            </p>
                        </div>

                        {submitError && (
                            <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl">
                                {submitError}
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            {/* Personal Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            </div>

                            {/* Phone Number */}
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

                            {/* Professional Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        {...register('company')}
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                    />
                                    {errors.company && (
                                        <p className="mt-1 text-red-500">{errors.company.message}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Role"
                                        {...register('role')}
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                    />
                                    {errors.role && (
                                        <p className="mt-1 text-red-500">{errors.role.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* LinkedIn Profile */}
                            <div>
                                <input
                                    type="url"
                                    placeholder="LinkedIn Profile URL"
                                    {...register('linkedinProfile')}
                                    className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                />
                                {errors.linkedinProfile && (
                                    <p className="mt-1 text-red-500">{errors.linkedinProfile.message}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    placeholder="Any questions or specific areas you'd like to focus on? (Optional)"
                                    {...register('message')}
                                    rows={4}
                                    className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary resize-none"
                                />
                            </div>

                            <div className="text-center space-y-6">
                                <p className="text-gray-600 text-lg">
                                    Note: After registration, you'll need to complete the course payment to secure your spot.
                                    Payment details will be provided on the next page.
                                </p>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-fit mx-auto px-12 py-4 bg-primary text-secondary rounded-full text-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    {isSubmitting ? 'Registering...' : 'Register Now'}

                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default LinkedInMasterClassRegistration;