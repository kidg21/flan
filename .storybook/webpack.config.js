// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require("path");

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
            singleQuote: true,
          },
        },
      },
    ],
  });
  config.resolve.extensions.push(".js", ".jsx");

  if (!config.externals) config.externals = {};
  Object.assign(config.externals, {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true,
  });

  return config;
};

// const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");

// module.exports = async ({ config }) => {
//   config.module.rules.push({
//     test: /\.(stories|story)\.mdx$/,
//     use: [
//       {
//         loader: "babel-loader",
//         // may or may not need this line depending on your app's setup
//         plugins: ["@babel/plugin-transform-react-jsx"],
//       },
//       {
//         loader: "@mdx-js/loader",
//         options: {
//           compilers: [createCompiler({})],
//         },
//       },
//     ],
//   });
//   config.module.rules.push({
//     test: /\.(stories|story)\.[tj]sx?$/,
//     loader: require.resolve("@storybook/source-loader"),
//     exclude: [/node_modules/],
//     enforce: "pre",
//   });
//   return config;
// };
