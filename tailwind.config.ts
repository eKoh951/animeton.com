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
              foreground: "#ffffff",
            },
            secondary: {
              50: "#FFF3E0",
              100: "#FFE0B2",
              200: "#FFCC80",
              300: "#FFB74D",
              400: "#FFA726",
              500: "#FF9800",
              600: "#FB8C00",
              700: "#F57C00",
              800: "#EF6C00",
              900: "#E65100",
              DEFAULT: "#FF9800",
              foreground: "#000000",
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
