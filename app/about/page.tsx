// src/app/about/page.tsx
'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import CompanyStory from './CompanyStory';
// import TeamSection from './TeamSection';
import MissionValues from './MissionValues';
import FAQSection from './FAQSection';
import CTASection from '@/components/sections/cta';

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