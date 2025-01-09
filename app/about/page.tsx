// src/app/about/page.tsx
'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import CompanyStory from './CompanyStory';
// import TeamSection from './TeamSection';
import MissionValues from './MissionValues';
import FAQSection from './FAQSection';
import CTASection from '@/components/sections/cta';

// src/app/about/page.tsx
export const metadata = {
    title: 'About BrandMe | Social Media Marketing Agency',
    description: 'Learn about BrandMe, a leading social media marketing agency in Sri Lanka delivering innovative digital solutions and measurable results.',
    openGraph: {
        title: 'About BrandMe | Social Media Marketing Agency',
        description: 'Learn about BrandMe, a leading social media marketing agency in Sri Lanka.',
        url: 'https://brandme.top/about',
    }
}

const AboutPage = () => {
    return (
        <main className="w-full">
            <PageHeader
                title="About Us"
                description="We transform businesses through innovative digital solutions and strategic growth."
            />
            <CompanyStory />
            <MissionValues />
            {/* <TeamSection /> */}
            <FAQSection />
            <CTASection />
        </main>
    );
};

export default AboutPage;