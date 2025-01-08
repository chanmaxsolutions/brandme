'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import WhyChooseUs from './componenets/WhyChooseUs';
import CourseCurriculum from './componenets/CourseCurriculum';
import LearningJourney from './componenets/LearningJourney';
import PricingPlans from './componenets/PricingPlans';
import FAQ from './componenets/FAQ';
import CourseEnrollCTA from './componenets/CourseEnrollCTA';

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