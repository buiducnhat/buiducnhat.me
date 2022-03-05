module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-dracula')('dracula', true),
  ],
};
