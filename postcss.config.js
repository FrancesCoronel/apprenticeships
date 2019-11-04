module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-cssnext"),
    require("cssnano"),
    require("postcss-nested")({
      preset: "default"
    }),
    require("postcss-responsive-type")({html: true}),
    require("tailwindcss")("./tailwind.config.js")
    // require('postcss-partial-process')({
    //   plugins: [require('postcss-prepend-selector')({selector: '#root '})],
    // }),
  ]
};
