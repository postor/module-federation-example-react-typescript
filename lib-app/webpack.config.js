const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "hidden-source-map",
  output: {
    path: path.join(__dirname, 'dist', 'entry'),
    clean: true,
  },
  module: {},
  plugins: [
    new ModuleFederationPlugin({
      name: "lib_app",
      filename: "remoteEntry.js",
      exposes: {
        "./dist/react": "react",
        "./dist/react-dom": "react-dom",
      },
    }),
  ],
};
