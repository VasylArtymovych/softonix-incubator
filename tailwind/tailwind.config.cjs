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
      background: '#E5E5E5',
      white: '#ffffff',
      'white-light': '#FDFEFD',
      'white-smooth': 'whitesmoke',
      gray: '#939597',
      footerText: '#676A6C',

      'gray-light': '#f3f4f6',
      'gray-ultra-light': '#e5e7eb',
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
    letterSpacing: {
      widest: '.2em'
    },

    extend: {
    }
  },
  plugins: []
}
