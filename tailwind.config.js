const { dracula } = require('./src/configs/themes/dracula.theme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFEEF8',
          100: '#FFE4E8',
          200: '#FFC9D8',
          300: '#FFAECC',
          400: '#FF9ACA',
          500: '#FF79C6',
          600: '#DB58B0',
          700: '#B73C9B',
          800: '#932686',
          900: '#7A1777',
        },
        secondary: {
          50: '#F0ECF6',
          100: '#F5E9FE',
          200: '#EBD4FE',
          300: '#DDBEFD',
          400: '#D1AEFB',
          500: '#BD93F9',
          600: '#926BD6',
          700: '#6C4AB3',
          800: '#4A2E90',
          900: '#321C77',
        },
        dracula,
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
};
