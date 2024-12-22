/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#373C9E',
        'second': '#90E5EE',
        'off-white': '#FBFBFB',
        'warning-red': '#E2211C',
        'off-black' : '#18181B', 
      },
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
        'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
