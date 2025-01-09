'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import WhyChooseUs from './componenets/WhyChooseUs';
import ServiceDetails from './componenets/ServiceDetails';
import Process from './componenets/Process';
import FAQ from './componenets/FAQ';
import CTASection from '@/components/sections/cta';

// src/app/services/website-development/page.tsx
export const metadata = {
    title: 'Website Development Services | BrandMe',
    description: 'Professional website development services that combine stunning design with powerful functionality. Custom solutions for your business needs.',
    openGraph: {
        title: 'Website Development Services | BrandMe',
        description: 'Professional website development services with stunning design and functionality.',
        url: 'https://brandme.top/services/website-development',
    }
}

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