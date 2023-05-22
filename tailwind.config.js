/** @type {import('tailwindcss').Config} */

const colors = {
  transparent: "transparent",
  "pink-darkest": "#4D2728",
  "pink-darker": "#994E4F",
  "pink-dark": "#E67577",
  "pink": "#FF8284",
  "pink-light": "#FFA8A9",
  "pink-lighter": "#FFCDCE",
  "pink-lightest": "#FFF3F3",
  "green-darkest": "#003300", // 50%
  "green-darker": "#2B6609", // 40%
  "green-dark": "#447F22", // 30%
  "green": "#77B255",
  "green-light": "#C4FFA2", // 30%
  "green-lighter": "#DDFFBB", // 40%
  "green-lightest": "#F6FFD4", // 50%
  "black-darkest": "#070707",
  "black-darker": "#0E0E0E",
  "black-dark": "#161616",
  "black": "#181818",
  "black-light": "#5D5D5D",
  "black-lighter": "#A3A3A3",
  "black-lightest": "#E8E8E8",
  "white-darkest": "#4D4D4D",
  "white-darker": "#999999",
  "white-dark": "#E6E6E6",
  "white": "#FFFFFF",
  "white-light": "#FFFFFF",
  "white-lighter": "#FFFFFF",
  "white-lightest": "#FFFFFF"
};

module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./static/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    colors: colors,
  },
  plugins: [
    require("@tailwindcss/typography"),
  ]
};
