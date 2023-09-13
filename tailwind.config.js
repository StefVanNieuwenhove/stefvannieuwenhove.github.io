/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    colors: {
      // dark mode
      dark: {
        light: '#5C8374',
        main: '#183D3D',
        dark: '#040D12',
        contrastText: '#93B1A6',
      },
      // light mode
      'dark-kaki': '#7A7D68',
      'light-beige': '#F4F4F4',
      beige: '#D6D9D0',
      'dark-beige': '#B8BEB2',

      // primary
      white: '#FFFFFF',
      sun: '#FFC500',
      moon: '#131862',
      'light-gray': '#EFEFEF',
    },
  },
  plugins: [],
};
