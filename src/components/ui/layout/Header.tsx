import Link from "next/link";
import { Icon } from "@iconify/react";
import { GradientButton } from "@/components/ui/GradientButton";
import Logo from "../Logo";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 px-6 bg-background/60 backdrop-blur-md border-b border-primary-700/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="hidden md:block flex-1">
          {/* Espacio vacío a la izquierda para mantener el balance en desktop */}
        </div>
        <div className="flex-1 flex md:justify-center">
          <Logo size="lg" />
        </div>
        <div className="flex-1 flex justify-end">
          <GradientButton
            size="md"
            href={siteConfig.links.discord}
            as={Link}
            endContent={<Icon icon="mdi:discord" className="text-2xl" />}
          >
            Únete a la Beta Cerrada en Discord
          </GradientButton>
        </div>
      </div>
    </header>
  );
}
