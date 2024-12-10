/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#373C9E',
        'second' : '#90E5EE',
        'off-white': '#FBFBFB'
      },
    },
  },
  plugins: [],
}

