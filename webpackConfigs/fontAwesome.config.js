const path = require("path");
const root = `${__dirname}/../`;
const fontAwesomeOutputPath = "/src/icons";
let fontawesome = {
  name: "fontawesome",
  entry: {
    fontawesome: "./src/icons/uncompiledfontawesome",
  },
  devtool: "source-map",
  output: {
    // path: "./Cordova/www/js",
    path: path.join(root, fontAwesomeOutputPath),
    filename: "[name].js",
    publicPath: "/",
    library: ["Library", "[name]"],
    libraryTarget: "window",
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react", "airbnb"],
          plugins: ["transform-class-properties", "babel-plugin-styled-components"],
        },
      },
      exclude: [/examples/],
    },
    {
      test: /\.css$/,
      loader: "css-loader",
      exclude: [/examples/],
    }, {
      test: /\.(png|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=100000",
    }, {
      test: /\.(ttf|eot|svg|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader",
    }],
  },
}



module.exports = [fontawesome];