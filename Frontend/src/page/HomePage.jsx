import React from "react";
import CTABanner from "../components/CTABanner";
import FeatureShowcase from "../components/FeatureShowcase";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import TopicsSection from "../components/TopicsSection";

const HomePage = () => {
  return (
    <main className="min-h-screen max-h-max bg-black">
      <HeroSection />
      <FeatureShowcase />
      <TopicsSection />
      <CTABanner />
      <Footer />
    </main>
  );
};
export default HomePage;
