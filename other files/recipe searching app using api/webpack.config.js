const path = require("path");

module.exports = {
  entry: "./src/js/index.js", //form here bundling starts
  output: {                   //here bundling will be stored or saved
    path: path.resolve(__dirname, "dist/js"), //this path should be absolute so we require path, and here dirname is current absolute path which will get adds in dist/js
    filename: "bundle.js",
  },
};
