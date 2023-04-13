/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#2D3134',
      secondary: '#5B5F62',
      nav: '#2E476B',
      accent: '#F66F4D',

      white: '#ffffff',
      'white-light': '#FDFEFF',
      'white-smooth': '#EAEAEB',

      'gray-light': '#f3f4f6',
      'gray-ultra-light': '#e5e7eb',
      'gray-medium': '#9ca3af',
      'gray-dark': '#374151'
    },
    fontFamily: {
      main: ['Inter', 'sans-serif'],
      nav: ['Poppins', 'sans-serif'],
      logo: ['Sen', 'sans-serif']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    },

    extend: {
    }
  },
  plugins: []
}
