const path = require("path");
const TSConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "bundle.js",
  },
  resolve: {
    roots: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "../Shared"),
    ],
    extensions: [".ts", ".tsx", ".js"],
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules",
      path.resolve(__dirname, "../Shared"),
    ],
    plugins: [new TSConfigWebpackPlugin()],
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
  /*   plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: ".",
          globOptions: {
            ignore: [/\**.gitkeep?$/],
          },
        },
      ],
    }),
  ], */
};
