import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import RoomsPreviewSection from "../components/sections/RoomsPreviewSection";
import AmenitiesSection from "../components/sections/AmenitiesSection";
import GallerySection from "../components/sections/GallerySection";
import CTASection from "../components/sections/CTASection";

import AnimatedSection from '../components/sections/AnimatedSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AnimatedSection delay={100}>
      <AboutSection />
      </AnimatedSection>
      <AnimatedSection delay={200}>
      <RoomsPreviewSection />
      </AnimatedSection>
      <AnimatedSection delay={200}>
      <AmenitiesSection />
      </AnimatedSection>
      <AnimatedSection delay={200}>
      <GallerySection />
      </AnimatedSection>
      <AnimatedSection delay={200}>
      <CTASection />
      </AnimatedSection>
    </>
  );
}