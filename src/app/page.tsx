import React from "react";
import DotPattern from "@/components/ui/dot-pattern";
import { HeroSection } from "./components/HeroSection";
import { FeatureItems } from "./components/FeatureItems";

export default async function Home() {
  return (
    <>
      <div className="flex items-center justify-center max-w-6xl mx-auto px-4 md:px-6 h-[90vh]">
        <HeroSection />
        <FeatureItems />
        <DotPattern className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] color-primary-400" />
      </div>
    </>
  );
}
