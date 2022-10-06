/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
      },
      screens: {
        '3xl': {'min': '1920px'},
      },
    },
    fontFamily:{
      'ubuntu': 'ubuntu, sans-serif'
    }
  },
  plugins: [
  ],
}