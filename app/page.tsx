import HeroSection from '@/components/sections/HeroSection';
import DownloadSection from '@/components/sections/DownloadSection';
import ServicesSection from '@/components/sections/ServicesSection';
import About from '@/components/sections/about';
import Testimonial from '@/components/sections/testimonial';
import CTASection from '@/components/sections/cta';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DownloadSection />
      <ServicesSection />
      <About />
      <Testimonial />
      <CTASection />
      <Footer />

      {/* Other sections */}
    </main>
  );
}