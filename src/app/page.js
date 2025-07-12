"use client";
import { useState } from "react";
import { MultiStepLoaderDemo } from "@/components/DEMO/LoaderDemo";
import { FeaturesSectionDemobysohail } from "@/components/DEMO/FeatureSectionDemo";
import { FeaturesSectionDemoArbaaz } from "@/components/DEMO/FeaturesectionDemoo";
import { TimelineDemo } from "@/components/DEMO/CustomtimeLineDemo";
import { AuroraBackgroundDemo } from "@/components/DEMO/CustomHeroDemo";
import CustomNavbarDemo from "@/components/DEMO/CustomNavbarDemo";
import DnaNavbar from "@/components/DEMO/customSideNavDemo";
import NeoLuxFooter from "@/components/DEMO/Footer";
import FlashCartHero from "@/components/DEMO/TypeHero";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const handleLoaderComplete = () => {
    setShowContent(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Loader */}
      <MultiStepLoaderDemo onComplete={handleLoaderComplete} />

      {/* Main Content */}
      {showContent && (
        <div>
          <CustomNavbarDemo />
          <DnaNavbar />
          <AuroraBackgroundDemo />
          <FlashCartHero/>
          <FeaturesSectionDemobysohail />
          <FeaturesSectionDemoArbaaz />
          <TimelineDemo />
          <NeoLuxFooter/>
        </div>
      )}
    </div>
  );
}
