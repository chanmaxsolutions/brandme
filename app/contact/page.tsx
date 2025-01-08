'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import ContactSection from './ContactSection';

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