'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import WhyChooseUs from './componenets/WhyChooseUs';
import ServiceDetails from './componenets/ServiceDetails';
import Process from './componenets/Process';
import FAQ from './componenets/FAQ';
import CTASection from '@/components/sections/cta';

const WebsiteDevelopmentPage = () => {
    return (
        <>
            <PageHeader
                title="Website Development"
                description="Modern, responsive websites crafted with the latest technologies to help your business establish a powerful online presence."
            />
            <WhyChooseUs />
            <ServiceDetails />
            <Process />
            <FAQ />
            <CTASection />

        </>
    );
};

export default WebsiteDevelopmentPage;