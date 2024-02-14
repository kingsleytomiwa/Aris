import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-400": "#165591",
        "black-500": "#01040D",
        "gray-400": "#E6E6E8",
      },
    },
    fontFamily: {
      sans: ["Kanit"],
    },
  },
  plugins: [],
};
export default config;
