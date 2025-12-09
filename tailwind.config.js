/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          bg: "#ffffff",
          text: "#000000",
          accent: "#f4f1ea",
          gray: "#f3f4f6",
        },
      },
      boxShadow: {
        retro: "4px 4px 0px 0px rgba(0,0,0,1)",
        "retro-lg": "8px 8px 0px 0px rgba(0,0,0,1)",
      },
      animation: {
        "rotate-360": "rotate360 4s linear infinite",
      },
      keyframes: {
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
