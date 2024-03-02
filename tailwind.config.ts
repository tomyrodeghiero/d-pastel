import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          400: "#4D5053",
          500: '#797979',
          900: '#292F36',
        },
        orange: {
          100: '#F4F0EC',
        },
        gold: {
          500: '#CDA274',
        },
      }
    },
  },
  plugins: [],
};
export default config;
