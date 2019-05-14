// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require("path")

module.exports = ({ config, mode }) => {
  // Extend defaultConfig as you need.
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    include: path.resolve(__dirname, "../src/components"),
    loaders: [
      {
        loader: require.resolve("@storybook/addon-storysource/loader"),
        options: {
          prettierConfig: {
            printWidth: 80,
            singleQuote: true
          }
        }
      }
    ]
  })
  config.resolve.extensions.push(".js", ".jsx")

  return config
}
