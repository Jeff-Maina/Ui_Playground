/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "avant": "Avant",
        "openSans": "Open Sans",
        "bebas": "Bebas Neue",
        "neueLight": "NeueMachina Light",
        "albra" : "Albra Bold",
        "albraRegular" : "Albra Regular"

      },
    },
  },
  plugins: [],
};
