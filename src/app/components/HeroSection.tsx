import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { GradientButton } from "@/components/ui/GradientButton";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { siteConfig } from "@/config/site";
import { FeatureItems } from "./FeatureItems";

export const HeroSection: React.FC = () => {
  return (
    <div className="max-w-4xl md:mr-80">
      <GradualSpacing
        className="hidden md:block text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
        text="La App de Windows para ver anime en Español"
      />
      <h1 className="md:hidden text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
        La App de Windows para ver anime en Español
      </h1>
      <div className="max-w-3xl text-lg sm:text-xl mb-6">
        <p>
          Únete a nuestra{" "}
          <span className="font-bold text-secondary-300">beta cerrada</span> y
          ayúdanos a mejorar la app con tu feedback.
        </p>
        <p>
          Tendrás acceso exclusivo a la app y serás parte de nuestra comunidad
          en Discord, donde podrás compartir tus ideas y sugerencias.
        </p>
      </div>
      <FeatureItems />
      <div className="mt-2">
        <div className="flex flex-col sm:flex-row gap-4">
          <GradientButton
            size="lg"
            target="_blank"
            href={siteConfig.links.discord}
            as={Link}
            endContent={<Icon icon="mdi:discord" className="text-2xl" />}
          >
            Únete a la Beta Cerrada en Discord
          </GradientButton>
        </div>
      </div>
    </div>
  );
};
