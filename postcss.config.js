// postcss.config.js
module.exports = {
  plugins: {
    "cssnano": {},
    "postcss-cssnext": {},
    "postcss-import": {},
    "postcss-nested": {preset: "default"},
    "postcss-responsive-type": {html: true},
    "tailwindcss/nesting": {},
    "tailwindcss": {},
  }
};
