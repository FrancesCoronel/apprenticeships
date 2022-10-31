// postcss.config.js
module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-cssnext": {},
    "cssnano": {},
    "tailwindcss/nesting": {},
    "postcss-responsive-type": {
      html: true
    },
    "tailwindcss": {
      config: "./tailwind.config.js"
    },
  }
};
