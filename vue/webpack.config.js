const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/main",
  mode: "development",
  target: "web",
  devServer: {
    port: 3002,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    hot: true,
  },

  resolve: {
    extensions: [".vue", ".js", ".json"],
    alias: {
      // this isn't technically needed, since the default `vue` entry for bundlers
      // is a simple `export * from '@vue/runtime-dom`. However having this
      // extra re-export somehow causes webpack to always invalidate the module
      // on the first HMR update and causes the page to reload.
      vue: "vue/dist/vue.esm-bundler.js",
      // 'vue': 'reactivue',
      // '@vue/runtime-dom': 'reactivue',
    },
  },
  output: {
    publicPath: "auto",
    uniqueName: "vue_settings",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.png$/,
        use: {
          loader: "url-loader",
        },
      },

      {
        test: /\.css$/,
        use: [
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
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:10].css",
    }),
    new ModuleFederationPlugin({
      name: "vue_settings",
      filename: "remoteEntry.js",
      // remoteType: "promise",
      // library: {
      //   type: "commonjs-module",
      // },
      exposes: {
        "./vue": "vue",
        "./App": "./src/App",
        /* 
        // "./Settings": "./src/components/Settings",
        // "./SettingsShadownRoot": "./src/components/SettingsShadownRoot" 
        */
      },
      shared: {
        ...deps,
        vue: {
          eager: true,
          requiredVersion: deps.vue,
        },
      },
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: "true",
      __VUE_PROD_DEVTOOLS__: "false",
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
};
