import HeroCarousel from '@/components/home/HeroCarousel';
import ServiceCards from '@/components/home/ServiceCards';
import IntegrationLogos from '@/components/home/IntegrationLogos';
import CTASection from '@/components/home/CTASection';
import StatsBar from '@/components/home/StatsBar';

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ServiceCards />
      <IntegrationLogos />
      <CTASection />
      <StatsBar />
    </>
  );
}
