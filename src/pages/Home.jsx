import React from "react";
import Hero from "../components/screen/Home/Hero";
import ClientSection from "../components/screen/Home/ClientSection";
import AboutSection from "../components/screen/Home/AboutSection";
import DetailsSection from "../components/screen/Home/DetailsSection";
import CallToActionSection from "../components/screen/Home/CallToActionSection";
import TrustSection from "../components/screen/Home/TrustSection";
import PricingSection from "../components/screen/Home/PricingSection";
import ProcessSection from "../components/screen/Home/ProcessSection";
import PortalSection from "../components/screen/Home/PortalSection";
import LatestPostSection from "../components/screen/Home/LatestPostSection";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <ClientSection />
      <AboutSection />
      <DetailsSection />
      <CallToActionSection />
      <TrustSection />
      <PricingSection />
      <ProcessSection />
      <PortalSection />
      <LatestPostSection />
    </React.Fragment>
  );
}

export default Home;
