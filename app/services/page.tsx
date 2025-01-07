'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/sections/cta';

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                title="Our Services"
                subtitle="What We Offer"
                description="Professional digital marketing services to help grow your business online."
            />
            <CTASection />
        </>
    );
}