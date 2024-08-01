import { Josefin_Sans } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "title": ['var(--font-Josefin)'],
        "text": ['var(--font-Inter)'],
        "logo": ['var(--font-Overpass)'],
      },
      colors: {
        background: "#031926",
        title: "#FBFCFF",
        text : "#D0CCD0",
        icon: "#D0AD6D",
        input: "#2C2E30",
      },
      
    },
  },
  plugins: [],
};
export default config;
