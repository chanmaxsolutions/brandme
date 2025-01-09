
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import DownloadSection from '@/components/sections/DownloadSection';
import ServicesSection from '@/components/sections/ServicesSection';
import About from '@/components/sections/about';
import Testimonial from '@/components/sections/testimonial';
import CTASection from '@/components/sections/cta';
import StatsSection from '@/components/sections/StatsSection';

// src/app/page.tsx
export const metadata = {
  title: 'BrandMe - Social Media Marketing Agency Sri Lanka',
  description: 'Transform your social media presence with BrandMe. Expert social media marketing and management services to help your business grow online.',
  openGraph: {
    title: 'BrandMe - Social Media Marketing Agency Sri Lanka',
    description: 'Transform your social media presence with BrandMe. Expert social media marketing and management services.',
    url: 'https://brandme.top',
  }
}


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <DownloadSection />
      <About />
      <Testimonial />
      <CTASection />
    </main>
  );
}