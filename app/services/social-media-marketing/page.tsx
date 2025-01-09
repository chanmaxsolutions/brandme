'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import WhyChooseUs from './componenets/WhyChooseUs';
import ServiceDetails from './componenets/serviceDetails';
import Process from './componenets/Process';
import FAQ from './componenets/FAQ';
import CTASection from '@/components/sections/cta';

// src/app/services/social-media-marketing/page.tsx
export const metadata = {
    title: 'Social Media Marketing Services | BrandMe',
    description: 'Professional social media marketing services to boost your brand visibility and engagement. Custom strategies for all major platforms.',
    openGraph: {
        title: 'Social Media Marketing Services | BrandMe',
        description: 'Professional social media marketing services to boost your brand visibility and engagement.',
        url: 'https://brandme.top/services/social-media-marketing',
    }
}


const SocialMediaMarketingPage = () => {
    return (
        <>
            <PageHeader
                title="Social Media Marketing"
                description="Strategic social media marketing solutions to boost your brand visibility, engage your target audience, and drive measurable business growth."
            />
            <WhyChooseUs />
            <ServiceDetails />
            <Process />
            <FAQ />
            <CTASection />

        </>
    );
};

export default SocialMediaMarketingPage;