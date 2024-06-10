const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      // use colors only specified
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      black: colors.black,

      app: '#F2F4F7',
      primary: '#411E5A',
      'purple-extra-light': '#F2E4FD',
      red: '#FA0909',
      gray: '#A3A3A3'
    },
    fontFamily: {
      'jockey': ['Jockey One', 'sans-serif'],
    },
    extend: {
      width: {
        '45p': '45%', 
        '55p': '55%', 
      },
      height: {
        '45p': '45%', 
        '55p': '55%', 
      },
    },
  },
  plugins: [],
}
