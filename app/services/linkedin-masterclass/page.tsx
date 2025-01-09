'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import WhyChooseUs from './componenets/WhyChooseUs';
import CourseCurriculum from './componenets/CourseCurriculum';
import LearningJourney from './componenets/LearningJourney';
import PricingPlans from './componenets/PricingPlans';
import FAQ from './componenets/FAQ';
import CourseEnrollCTA from './componenets/CourseEnrollCTA';

// src/app/services/linkedin-masterclass/page.tsx
export const metadata = {
    title: 'LinkedIn Masterclass | BrandMe',
    description: 'Transform your LinkedIn presence with our comprehensive masterclass. Learn proven strategies for professional growth.',
    openGraph: {
        title: 'LinkedIn Masterclass | BrandMe',
        description: 'Transform your LinkedIn presence with our comprehensive masterclass.',
        url: 'https://brandme.top/services/linkedin-masterclass',
    }
}

const LinkedInMasterclassPage = () => {
    return (
        <>
            <PageHeader
                title="LinkedIn Masterclass"
                description="Master LinkedIn strategy to grow your professional network, establish thought leadership, and drive business opportunities."
            />
            <WhyChooseUs />
            <CourseCurriculum />
            <LearningJourney />
            <PricingPlans />
            <FAQ />
            <CourseEnrollCTA />
        </>
    );
};

export default LinkedInMasterclassPage;