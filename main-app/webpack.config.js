const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");
module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devtool: "hidden-source-map",
  output: {
    path: path.join(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: [
      ".jsx",
      ".js",
      ".tsx",
      ".ts",
      ".json",
      ".css",
      ".scss",
      ".jpg",
      "jpeg",
      "png",
    ],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: "url-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-typescript",
            "@babel/preset-react",
          ],
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "main_app",
      remotes: {
        "lib-app": "lib_app@[window.lib_app_url]/remoteEntry.js",
        "component-app": "component_app@[window.component_app_url]/remoteEntry.js",
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "node_modules/lib-app/dist/entry",
          to: "js/remotes/lib-app"
        },
        {
          from: "node_modules/component-app/dist/entry",
          to: "js/remotes/component-app"
        },
      ],
    }),
  ],
};
