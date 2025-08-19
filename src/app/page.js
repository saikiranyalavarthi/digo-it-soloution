import React from "react";
import HeroSection from "./Componets/HeroSection";
import AnimatedButtons from "./Componets/AnimatedButtons";
import StatsAndLogos from "./Componets/StatsAndLogos";
import AboutSection from "./Componets/AboutSection";
import WhyChooseUs from "./Componets/WhyChooseUs";
import OurServices from "./Componets/Services";
import StatsCards from "./Componets/StatsCards";
import ContactForm from "./Componets/ContactForm";

const page = () => {
  return (
    <div>
      <main>
        <HeroSection />
        <AnimatedButtons />
        <AboutSection />
        <WhyChooseUs />
        <OurServices />
        <StatsCards />
        {/* <StatsAndLogos /> */}
        <ContactForm />
      </main>
    </div>
  );
};

export default page;
