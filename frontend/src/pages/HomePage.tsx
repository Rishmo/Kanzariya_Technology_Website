import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ClientLogos from '../components/home/ClientLogos';
import PlatformBenefits from '../components/home/PlatformBenefits';
import FeatureHighlights from '../components/home/FeatureHighlights';
import VideoSection from '../components/home/VideoSection';
import NewsEvents from '../components/home/NewsEvents';
import ContactCta from '../components/home/ContactCta';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Kanzariya Technology - AI-Powered Cybersecurity Platform';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <ClientLogos />
      <PlatformBenefits />
      <FeatureHighlights />
      <VideoSection />
      <NewsEvents />
      <ContactCta />
    </>
  );
};

export default HomePage;