var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
//const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: ["./src/index.js", "./src/scss/athena.scss"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "athena.bundle.js",
  },
  /*optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i
      })
    ]
  }*/
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "postcss.config.js",
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "athena.bundle.css",
    }),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 0,
      minRatio: 1,
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }],
      },
      canPrint: true,
    }),
  ],
};
