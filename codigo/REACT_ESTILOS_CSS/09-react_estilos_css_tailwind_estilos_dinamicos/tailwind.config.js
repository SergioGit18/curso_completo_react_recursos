/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        wonkaPurple: '#684fa3'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'xxs': '0.65rem',
      }
    },
  },
  plugins: [],
};
