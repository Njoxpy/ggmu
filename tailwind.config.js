/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#DA291C", // Primary Red
        darkRed: "#A50000", // Dark Red
        white: "#FFFFFF", // White
        black: "#000000", // Black
        gold: "#F3D459", // Gold
        gray: "#333333", // Dark Gray
        textGray: "#D3D3D3", // text color gray footer text
        textHover: "#A6261C", // text hover lighter red
        lightGray: "#f5f5f5", // light gray
      },
      backgroundImage:{
        'helloBg': 'url("../components/assets/bg.jpg")'

        // add other photos for legends
      }
    },
  },
  plugins: [],
};
