import { nextui } from "@nextui-org/react";
import ContainerQueries from "@tailwindcss/container-queries";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {
        radius: {
          small: "0.3125rem",
          medium: "0.625rem",
          large: "1rem",
        },
        borderWidth: {
          small: "0.0625rem",
        },
        boxShadow: {
          small: "var(--bx-shadow-1)",
        },
      },
    }),
    ContainerQueries,
  ],
};
export default config;

