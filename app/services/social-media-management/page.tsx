
import React from 'react';
import PageHeader from '@/components/PageHeader';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Process from './components/Process';
import FAQ from './components/FAQ';
import CTASection from '@/components/sections/cta';

// src/app/services/social-media-management/page.tsx
export const metadata = {
    title: 'Social Media Management Services | BrandMe',
    description: 'Expert social media management services in Sri Lanka. Professional content creation, strategic scheduling, and active engagement to grow your brand online.',
    openGraph: {
        title: 'Social Media Management Services | BrandMe',
        description: 'Expert social media management services to grow your brand online. Professional content creation and strategic engagement.',
        url: 'https://brandme.top/services/social-media-management',
    }
}

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