const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
dotenv.config();

module.exports = (env, argv) => {
  const prod = argv.mode === "production";

  return {
    mode: prod ? "production" : "development",
    devtool: prod ? "hidden-source-map" : "eval",
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "/build"),
      filename: "[name].js",
      publicPath: "/",
    },
    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: true,
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: "file-loader",
        },
        {
          test: /\.tsx?$/,
          use: ["babel-loader", "ts-loader"],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };
};
