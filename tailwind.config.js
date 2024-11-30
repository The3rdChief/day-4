/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/Header.jsx",
    "./src/components/Hero.jsx",
    "./src/components/Products.jsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F5EC",
        primary: "#37392E",
        secondary: "#6D6F65",
      },
      fontFamily: {
        dmSans: ["DM Sans Serif", "serif"],
        neueMontreal: ["PP Neue Montreal", "sans-serif"],
      },
    },
  },
  plugins: [],
};
