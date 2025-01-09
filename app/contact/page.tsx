'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import ContactSection from './ContactSection';

// src/app/contact/page.tsx
export const metadata = {
    title: 'Contact BrandMe | Get in Touch',
    description: 'Contact BrandMe for expert social media marketing services. Get in touch to discuss how we can help grow your brand online.',
    openGraph: {
        title: 'Contact BrandMe | Get in Touch',
        description: 'Contact BrandMe for expert social media marketing services.',
        url: 'https://brandme.top/contact',
    }
}

export default function ContactPage() {
    return (
        <main className="w-full">
            <PageHeader
                title="Get in Touch"
                description="Have a project in mind? Let's bring your vision to life. We're here to help you create something amazing."
            />
            <ContactSection />
        </main>
    );
}