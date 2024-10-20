"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BetaBadgeProps {
  className?: string;
}

export const BetaBadge: React.FC<BetaBadgeProps> = ({ className }) => {
  return (
    <span className="p-[2px] relative rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600">
      <span
        className={cn(
          "inline-block px-3 py-1.5 text-sm font-bold rounded-md",
          "bg-background backdrop-blur-md",
          className
        )}
      >
        <span className="relative text-bolder text-lg z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
          beta cerrada
        </span>
      </span>
    </span>
  );
};

export default BetaBadge;
