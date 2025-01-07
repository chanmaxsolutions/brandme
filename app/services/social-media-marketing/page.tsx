'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import WhyChooseUs from './componenets/WhyChooseUs';
import ServiceDetails from './componenets/serviceDetails';
import Process from './componenets/Process';
import FAQ from './componenets/FAQ';
import CTASection from '@/components/sections/cta';


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