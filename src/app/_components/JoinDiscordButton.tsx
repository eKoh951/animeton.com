"use client";

import { GradientButton } from "@/components/ui/GradientButton";
import { Icon } from "@iconify/react";
import posthog from "posthog-js";
import Link from "next/link";

export const JoinDiscordButton: React.FC = () => {
  const trackDownloadClick = () => {
    posthog.capture("app_download_click", {
      platform: "windows",
      location: "hero_section",
    });
  };

  return (
    <GradientButton
      size="lg"
      target="_blank"
      href="https://discord.com"
      as={Link}
      endContent={<Icon icon="mdi:discord" className="text-2xl" />}
      onClick={trackDownloadClick}
    >
      Únete a la Beta Cerrada en Discord
    </GradientButton>
  );
};