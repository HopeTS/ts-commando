const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  target: "node",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "bundle.js",
  },
  resolve: {
    roots: [path.resolve(__dirname, "src")],
    extensions: [".ts", ".tsx", ".js"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new NodePolyfillPlugin({ excludeAliases: "console" })],
};
