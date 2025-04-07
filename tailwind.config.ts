import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-Montserrat)"],
        text: ["var(--font-Montserrat)"],
        logo: ["var(--font-Overpass)"],
      },
      colors: {
        background: "#051014",
        title: "#051014",
        gray: "#D0CCD0",
        icon: "#D0AD6D",
        input: "#2C2E30",
        light_green: "#B6CB9E",
        green: "#5A716A",
        beige: "#dee4e7",
        almost_black: "#051014",
      },
      screens: {
        laptop: "1025px",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
