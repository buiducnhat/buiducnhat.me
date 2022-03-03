const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.purple,
        secondary: colors.pink,
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
};
