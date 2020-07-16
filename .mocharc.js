module.exports = {
    spec: "src/**/*.stories.js",
    require: ["@babel/register", "ignore-styles", "./config.js", "./component-index.js"],
    ignore: ["**/App.stories.js", "**/Template.stories.js", "**/Layout.stories.js", "**/Page.stories.js", "**/Application.stories.js"]
};