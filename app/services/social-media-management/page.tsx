'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Process from './components/Process';
import FAQ from './components/FAQ';
import CTASection from '@/components/sections/cta';

const SocialMediaManagementPage = () => {
    return (
        <>
            <PageHeader
                title="Social Media Management"
                description="Build your brand's social presence with our expert management services, driving engagement and growth across all platforms."
            />
            <WhyChooseUs />
            <Services />
            <Process />
            <FAQ />
            <CTASection />
        </>
    );
};

export default SocialMediaManagementPage;