const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const isProduction = process.env.NODE_ENV === "production";
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: isProduction ? "production" : "development",
  entry: {
    docs: [
      path.resolve(__dirname, "./_assets/index.scss"),
      path.resolve(__dirname, "./_assets/index.js"),
    ],
  },
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: isProduction ? "[name].[hash].js" : "[name].js",
    chunkFilename: isProduction ? "[id].[hash].js" : "[id].js",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development",
            },
          },
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isProduction ? "[name].[hash].css" : "[name].css",
    }),
    new ManifestPlugin({
      fileName: "../_data/manifest.yml",
      publicPath: "/dist/",
    }),
  ],
};
