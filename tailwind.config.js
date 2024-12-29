/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        'main': '#373C9E',
        'second': '#90E5EE',
        'off-white': '#FBFBFB',
        'warning-red': '#E2211C',
        'off-black' : '#18181B', 
=======
        main: "#373C9E",
        second: "#90E5EE",
        "off-white": "#FBFBFB",
        "warning-red": "#E2211C",
>>>>>>> data-handling
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        "plus-jakarta": ['"Plus Jakarta Sans"', "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite", // slower spin
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
