/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'lightBlue': '#C4DAF0',
      'blackBlue': '#00050C',
      'White': '#FFFFFF',
      'darkGradientBlue': '#002855',
      'lightGradientBlue': '#0058BB',
    },
    fontFamily: {
      roboto: ["Roboto","sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

