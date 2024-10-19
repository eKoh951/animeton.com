import React from "react";
import DotPattern from "@/components/ui/dot-pattern";
import { HeroSection } from "./components/HeroSection";
import { Changelog } from "@/components/ui/Changelog";
import { getChangelog } from "@/lib/getChangelog";

export default async function Home() {
  const changelog = await getChangelog();

  if (!changelog) {
    console.error("Error al obtener el changelog");
    console.log(changelog);
  }

  return (
    <>
      <div className="flex items-center justify-center max-w-6xl mx-auto px-4 md:px-6 h-[90vh]">
        <HeroSection />
        <DotPattern className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] color-primary-400" />
      </div>
      {changelog && <Changelog releases={changelog} />}
    </>
  );
}
