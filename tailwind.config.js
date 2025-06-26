/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/fonts.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        Caooli: ["Caooli", "sans-serif"],
        Swingly: ["SwinglyLours", "cursive"],
        Virgo: ["VirgoDelight", "cursive"],
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        shine: "shine 2s linear infinite",
      },
    },
  },
  plugins: [],
};
