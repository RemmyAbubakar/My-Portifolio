/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      abc: ["Roboto Flex", "sans-serif"],
      second: ["Urbanist", "sans-serif"],
      remmy: ["Pangolin", "cursive"],
    },
  },
  plugins: [],
};
