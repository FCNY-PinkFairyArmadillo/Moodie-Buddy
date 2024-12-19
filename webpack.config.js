const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const plugin = require("eslint-plugin-jest");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "./bundle.js",
    publicPath: '/',
  },
  target: "web",
  devServer: {
    port: "3000",
    static: path.resolve(__dirname, "public"),
    open: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i, // Match CSS files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};
