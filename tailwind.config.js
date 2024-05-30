/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        red: '#DA291C',         // Primary Red
        darkRed: '#A50000',     // Dark Red
        white: '#FFFFFF',       // White
        black: '#000000',       // Black
        gold: '#F3D459',        // Gold
        gray: '#333333',        // Dark Gray
    }
    },
  },
  plugins: [],
}
