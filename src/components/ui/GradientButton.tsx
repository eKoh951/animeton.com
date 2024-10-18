import React from "react";
import { Button, ButtonProps } from "@nextui-org/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonProps {
  gradientFrom?: string;
  gradientTo?: string;
  hoverGradientFrom?: string;
  hoverGradientTo?: string;
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  className,
  gradientFrom = "from-primary-700",
  gradientTo = "to-secondary-700",
  hoverGradientFrom = "from-primary-600",
  hoverGradientTo = "to-secondary-600",
  endContent,
  ...props
}) => {
  const baseClassName =
    "font-bold transition-all duration-300 ease-in-out transform hover:shadow-xl group relative overflow-hidden";
  const gradientClassName = `bg-gradient-to-r ${gradientFrom} ${gradientTo}`;
  const hoverGradientClassName = `${hoverGradientFrom} ${hoverGradientTo}`;

  return (
    <Button
      className={cn(baseClassName, gradientClassName, className)}
      {...props}
      endContent={
        endContent && React.isValidElement(endContent)
          ? React.cloneElement(endContent as React.ReactElement, {
              className: cn(
                "transition-transform duration-300 group-hover:scale-110",
                (endContent as React.ReactElement).props.className
              ),
            })
          : endContent
      }
    >
      <span className="relative z-10">{children}</span>
      <span
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100",
          hoverGradientClassName
        )}
      ></span>
    </Button>
  );
};
