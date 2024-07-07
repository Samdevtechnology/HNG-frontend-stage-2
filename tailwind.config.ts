import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-6",
    "gap-2",
    "gap-3",
    "gap-4",
    "gap-6",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFE7FA",
        secondary: "#D9D9D9",
        gray_text: "#A4A4A4",
        dark_border: "#322C2C",
        danger: "#D72D2D",
        light_border: "#D9D9D9",
        thin_border: "#ECECEC",
      },
    },
  },
  plugins: [],
};
export default config;
