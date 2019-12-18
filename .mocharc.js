module.exports = {
    spec: "src/**/*.stories.js",
    require: ["@babel/register", "ignore-styles", "./config.js", "./component-index.js"],
    ignore: "**/App.stories.js"
};