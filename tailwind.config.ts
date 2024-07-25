import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: '#e8e1f3',
      background: '#09060e',
      primary: '#b291d5',
      secondary: '#742c5d',
      accent: '#c05b7f',
      secondaryBg: 'rgba(26, 17, 41, 0.5)'
    },
    extend: {
      backgroundImage: {
        'hero-bg': "linear-gradient(to bottom, rgba(9, 6, 14, 1), rgba(255, 255, 255, 0.1)), url('/images/hero-bg.jpg')",


      },
    },
  },
  plugins: [],
};
export default config;
