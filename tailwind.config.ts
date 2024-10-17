/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|popover|ripple|spinner).js",
  ],
  prefix: "",
  plugins: [
    require("tailwindcss-animate"),
    nextui({
      themes: {
        "purple-dark": {
          extend: "dark",
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#1A0B2E",
            },
            secondary: {
              50: "#FFF0F7",
              100: "#FFE3F0",
              200: "#FFC6E0",
              300: "#FF9ECE",
              400: "#FF77BA",
              500: "#FF4FA6",
              600: "#FF2692",
              700: "#FF007E",
              800: "#D6006A",
              900: "#B30059",
              DEFAULT: "#FF4FA6",
              foreground: "#4A0E2E",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;

export default config;
