const path = require("path");
const root = `${__dirname}/`;
const StringReplacePlugin = require("string-replace-webpack-plugin");
const buildOutputPath = "/testBuildOutput/";


let build = {
  name: "buildScript",
  entry: {
    "StyledComponents": "./styled-components.js",
  },
  output: {
    // Output to the "Bundles" folder
    path: path.join(root, buildOutputPath),
    // Output 1 file per entry
    filename: "[name].js",
    publicPath: "/",
    // library: ["Library", "[name]"],
    // libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: [/(node_modules|bower_components)/, /[\\\/]ss-3rdparty[\\\/]/, /[\\\/]_dhtmlxgrid[\\\/]/, /[\\\/]ui[\\\/]editattributeelements[\\\/]/, /[\\\/]editattributeelements[\\\/]handlers[\\\/]/, /examples/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "airbnb"],
            plugins: ["transform-class-properties", "babel-plugin-styled-components"],
            babelrcRoots: ["../ss-styled-components"],
          },
        },
      },
      {
        test: /[\\\/]ss-3rdparty[\\\/].+\.js$/,
        loader: "imports-loader?define=>false",
      },
      {
        test: /\.css$/,
        exclude: [/examples/],
        loader: StringReplacePlugin.replace("style-loader!css-loader?url=false", {
          replacements: [{
            pattern: /\$\(APP_PATH\)/gi,
            replacement: function replacement() { return "https://localhost:44344/lib/3.0"; },
          }],
        }),
      },
      {
        test: /\.(ttf|eot|svg|jpg|html$)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "../Html/",
            },
          },
        ],
      },
      {
        test: /\.(png|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
      },
    ],
  },
  plugins: [
    StringReplacePlugin,
  ],
};

module.exports = [build];