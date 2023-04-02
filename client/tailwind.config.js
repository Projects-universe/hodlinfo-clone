/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Oswald': ['Oswald', 'sans-serif']
      },
      colors: {
        'brand': '#6ccacb',
        'faded-text' : '#708389',
        'faded-bg': '#2e3241',
        'timer': '#3dc6c1',
        'background': '#191d28'
      }
    },
  },
  plugins: [],
}