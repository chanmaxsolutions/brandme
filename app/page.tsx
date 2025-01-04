import HeroSection from '@/components/sections/HeroSection';
import DownloadSection from '@/components/sections/DownloadSection';
import ServicesSection from '@/components/sections/ServicesSection';
import About from '@/components/sections/about';
export default function Home() {
  return (
    <main>
      <HeroSection />
      <DownloadSection />
      <ServicesSection />
      <About />
      {/* Other sections */}
    </main>
  );
}