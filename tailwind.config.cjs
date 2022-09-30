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
    },
    fontFamily:{
      'ubuntu': 'Ubuntu, sans-serif'
    }
  },
  plugins: [
  ],
}