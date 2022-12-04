/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@ui-blox/core/**/*.{js,ts,jsx,tsx}',
    '../components/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Rubik',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      colors: {
        primary: {
          DEFAULT: '#00b26a',
          '50': '#ebfef3',
          '100': '#d0fbe1',
          '200': '#a4f6c8',
          '300': '#6aebac',
          '400': '#2fd88a',
          '500': '#0abf72',
          '600': '#00b26a',
          '700': '#007c4d',
          '800': '#03623e',
          '900': '#045035',
        },
        secondary: {
          DEFAULT: '#ed287e',
          '50': '#fef1f8',
          '100': '#fee5f3',
          '200': '#ffcbe9',
          '300': '#ffa1d4',
          '400': '#ff66b6',
          '500': '#fb3997',
          '600': '#ed287e',
          '700': '#cd0958',
          '800': '#a90b4a',
          '900': '#8d0e40',
        },
        tertiary: '#283173',
      },
    }
  },
};
