'use client';

import React, { useState } from 'react';
import { Download, X } from 'lucide-react';

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
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />
            <div className="relative bg-white rounded-2xl p-8 w-full max-w-md mx-4">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                    <X className="h-6 w-6" />
                </button>

                <h3 className="text-2xl font-semibold tracking-tighter text-gray-900 mb-4">
                    Download Your Free Checklist
                </h3>

                <p className="text-gray-600 mb-6">
                    Fill in your details to receive your social media checklist.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
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
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
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

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-full hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <Download className="h-5 w-5" />
                        Download Now
                    </button>
                </form>
            </div>
        </div>
    );
};

const DownloadSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFormSubmit = (data: FormData) => {
        console.log('Form submitted:', data);
    };

    return (
        <section className="bg-black">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 min-h-[300px]">
                    {/* Left Column - Big Text */}
                    <div className="p-8 md:p-12 flex items-center">
                        <div className='text-center md:text-left'>
                            <h2 className="text-4xl md:text-4xl lg:text-6xl font-semibold tracking-tighter text-white mb-6">
                                Free Social Media Marketing Guide
                            </h2>

                            <p className="text-xl md:text-2xl text-white/80 font-light tracking-tighter">
                                Discover the secrets to mastering your social media presence
                            </p>
                        </div>
                    </div>

                    {/* Right Column - CTA Button */}
                    <div className="pb-8 md:p-12 flex items-center justify-center">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-white text-black px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 flex items-center gap-2 text-lg"
                        >

                            Download Free Checklist
                        </button>
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