const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const deps = require("./package.json").dependencies;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  entry: "./src/index",
  mode: "development",
  target: 'web', 
  devServer: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    hot: true,
  },
  resolve: {
    extensions: [".js", ".tsx", ".ts"],
  },
  output: {
    publicPath: "auto",
    uniqueName: "react_profile",
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
      name: "react_profile",
      filename: "remoteEntry.js",
      // remoteType: "promise",
      // library: {
      //   type: "commonjs-module",
      // },
      exposes: {
        "./ProfileReactComponent": "./src/component/ProfileReactComponent",
        "./react": "react",
        "./react-dom": "react-dom",
        "./react-dom/client": "react-dom/client",
      },
      shared: {
        ...deps,
        react: {
          // shareKey: "react",
          // shareScope: "default",
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
