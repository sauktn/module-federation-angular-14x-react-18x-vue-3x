const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const deps = require("./package.json").dependencies;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  /* With library type module */
  // experiments: {
  //   outputModule: true,
  // },
  // externalsType: "module",

  // externalsType: "promise",
  // externals: {
  //   react_profile_user: "Promise.resolve($)",
  // },
  // externals: {
  //   react: {
  //     commonjs: "react",
  //     commonjs2: "react",
  //     amd: "react",
  //     umd: "react",
  //     root: "React",
  //   },
  //   "react-dom": {
  //     commonjs: "react-dom",
  //     commonjs2: "react-dom",
  //     amd: "react-dom",
  //     umd: "react-dom",
  //     root: "ReactDOM",
  //   },
  // },
  devServer: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    hot: true,
  },
  resolve: {
    // alias: {
    //   react: path.resolve(__dirname, "node_modules/react"),
    // },
    // modules: [path.join(__dirname, "node_modules")],
    extensions: [".js", ".tsx", ".ts"],
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
      {
        test: /\.png$/,
        use: {
          loader: "url-loader",
          options: { limit: 8192 },
        },
      },
      {
        test: /\.css$/,
        use: [
          // "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
    }),
    new ModuleFederationPlugin({
      name: "react_profile_user",
      filename: "remoteEntry.js",
      // library: { type: 'module'},
      exposes: {
        "./ProfileReactComponent": "./src/component/ProfileReactComponent",
        "./react": "react",
        "./react-dom": "react-dom",
        "./react-dom/client": "react-dom/client",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
