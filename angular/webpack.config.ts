
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require('./package.json').dependencies;

module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
    uniqueName: "angular",
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false
  },
  mode: 'development',
  // devtool: 'source-map',
  devServer: {
    port: 4201,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    client: {
      logging: 'info',
    },
    hot: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "angular",
      filename: "remoteEntry.js",
      remoteType: 'var',
      remotes: {
        react_profile_user: `react_profile_user`,
        vue_settings_user: `vue_settings_user`,
      },
      shared: {
        vue: {
          singleton: true,
          requiredVersion: deps.vue,
        },
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom/client": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    })
  ],
};

