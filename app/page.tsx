'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import DownloadSection from '@/components/sections/DownloadSection';
import ServicesSection from '@/components/sections/ServicesSection';
import About from '@/components/sections/about';
import Testimonial from '@/components/sections/testimonial';
import CTASection from '@/components/sections/cta';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <DownloadSection />
      <ServicesSection />
      <About />
      <Testimonial />
      <CTASection />
    </main>
  );
}