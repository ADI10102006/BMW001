/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bmw: {
          blue: '#0066b2',
          silver: '#e6e6e6',
          dark: '#0a0a0a',
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    }
  },
  plugins: [],
};
