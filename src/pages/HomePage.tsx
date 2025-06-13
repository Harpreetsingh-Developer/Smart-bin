import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import SystemArchitectureSection from "@/components/SystemArchitectureSection";
import ImpactDashboard from "@/components/ImpactDashboard";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen" data-id="1vg6rsmzs" data-path="src/pages/HomePage.tsx">
      <Navigation data-id="nup1ngmjn" data-path="src/pages/HomePage.tsx" />
      
      {/* Add padding to account for fixed navigation */}
      <main className="pt-16 lg:pt-20" data-id="itg7o9wjb" data-path="src/pages/HomePage.tsx">
        <section id="hero" data-id="9tjsh55xj" data-path="src/pages/HomePage.tsx">
          <HeroSection data-id="3st6r1nkt" data-path="src/pages/HomePage.tsx" />
        </section>
        
        <section id="about" data-id="2h52d0g8c" data-path="src/pages/HomePage.tsx">
          <AboutSection data-id="58hiyc4pn" data-path="src/pages/HomePage.tsx" />
        </section>
        
        <section id="how-it-works" data-id="36nqmla9j" data-path="src/pages/HomePage.tsx">
          <HowItWorksSection data-id="roe31ocov" data-path="src/pages/HomePage.tsx" />
        </section>
        
        <section id="benefits" data-id="eqbg4k9fy" data-path="src/pages/HomePage.tsx">
          <BenefitsSection data-id="6razd8sl7" data-path="src/pages/HomePage.tsx" />
        </section>
        
        <section id="smart-city" data-id="e7ka7qpja" data-path="src/pages/HomePage.tsx">
          <SystemArchitectureSection data-id="5svdt6vx6" data-path="src/pages/HomePage.tsx" />
        </section>
        
        <section id="impact" data-id="61uxbxjwd" data-path="src/pages/HomePage.tsx">
          <ImpactDashboard data-id="trztbueo9" data-path="src/pages/HomePage.tsx" />
        </section>
        
        <section id="partners" data-id="uja4h6b97" data-path="src/pages/HomePage.tsx">
          <PartnersSection data-id="n0hkr93cu" data-path="src/pages/HomePage.tsx" />
        </section>
        
        <section id="contact" data-id="jdtgeseqd" data-path="src/pages/HomePage.tsx">
          <ContactSection data-id="4n2403dqu" data-path="src/pages/HomePage.tsx" />
        </section>
      </main>
      
      <Footer data-id="3820lbh19" data-path="src/pages/HomePage.tsx" />
    </div>);

};

export default HomePage;