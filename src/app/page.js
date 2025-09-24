import React from "react";
import HeroSection from "./Componets/HeroSection";
import AnimatedButtons from "./Componets/AnimatedButtons";
import StatsAndLogos from "./Componets/StatsAndLogos";
import AboutSection from "./Componets/AboutSection";
import WhyChooseUs from "./Componets/WhyChooseUs";
import OurServices from "./Componets/Services";
import StatsCards from "./Componets/StatsCards";
import ContactForm from "./Componets/ContactForm";
import TrustedCompany from "./Componets/TrustedCompany";
import BusinessValue from "./Componets/BusinessValue";
import DigitalEmployeeExperience from "./Componets/DigitalEmployeeExperience";
import CallToAction from "./Componets/CallToAction";
import StatsSection from "./Componets/StatsSection";
import ItSolutionsSection from "./Componets/ItSolutionsSection";
import GlobalAspirations from "./Componets/GlobalAspirations";
import EnterpriseFeatures from "./Componets/EnterpriseFeatures";
import DemocratizingIT from "./Componets/DemocratizingIT";
import IndustriesSection from "./Componets/IndustriesSection";

const page = () => {
  return (
    <div>
      <main>
        <HeroSection />
        <AnimatedButtons />
        <TrustedCompany />
        <AboutSection />
        <WhyChooseUs />
        <BusinessValue />
        <ItSolutionsSection />
        <OurServices />
        <GlobalAspirations />
        <EnterpriseFeatures />
        <DemocratizingIT />
        <DigitalEmployeeExperience />
        {/* <StatsAndLogos /> */}
        {/* <ContactForm /> */}

        <StatsCards />
        <StatsSection />
        <CallToAction />
      </main>
    </div>
  );
};

export default page;
