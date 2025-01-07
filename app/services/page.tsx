'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/sections/cta';

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                title="Our Services"
                description="Professional digital marketing services to help grow your business online."
            />
            <CTASection />
        </>
    );
}