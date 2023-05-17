/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './<custom-folder>/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: {
        primary_50: '#e7e8ee',
        primary_100: '#b5b6c9',
        primary_200: '#9193af',
        primary_300: '#5f628b',
        primary_400: '#404375',
        primary_500: '#101452',
        primary_600: '#0f124b',
        primary_700: '#0b0e3a',
        primary_800: '#090b2d',
        primary_900: '#070822',
      },
    },
  },
  plugins: [],
};

