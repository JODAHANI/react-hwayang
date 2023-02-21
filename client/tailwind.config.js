/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        waviy: {
          "0%,40%,100%": {
            transform: " translateY(0)",
          },
          "20%": {
            transform: "translateY(-20px)",
          },
        },
      },
    },
  },
  plugins: [],
};
