module.exports = {
    spec: "src/**/*.stories.js",
    require: ["@babel/register", "ignore-styles", "./config.js"],
    ignore: "**/App.stories.js"
};