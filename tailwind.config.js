/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myYellow: "#F6AE2D",
        myGrey: "#2F4858",
        myOrange: "#F26419",
        myBlue: "#86BBD8",
        myPink: "#FF8484",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
