/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    colors: {
      // dark mode
      black: '#222831',
      'dark-gray': '#393E46',
      'dark-ocean': '#00ADB5',
      ocean: '#00FFF5',
      // light mode
      'dark-kaki': '#7A7D68',
      'light-beige': '#F4F4F4',
      beige: '#D6D9D0',
      'dark-beige': '#B8BEB2',

      // primary
      white: '#FFFFFF',
      sun: '#FFC500',
      'light-gray': '#EFEFEF',
    },
  },
  plugins: [],
};
